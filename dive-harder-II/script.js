// region LOCAL STORAGE

function setLocalStorage(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

function getLocalStorage(name) {
  const value = localStorage.getItem(name);
  return value ? JSON.parse(value) : null;
}

function clearAllLocalStorage() {
  updateAllStratagemsAllTypesSelection(false);
  updateAllEquipmentAllTypesSelection(false);
  localStorage.clear();
}

function setStratagemsStorage(stratagems) {
  setLocalStorage('stratagemsConfiguredDict', stratagems);
}

function setEquipmentStorage(equipments) {
  setLocalStorage('equipmentConfiguredDict', equipments);
}

function loadConfiguredDicts() {
  const equipmentConfiguredDict = getLocalStorage('equipmentConfiguredDict') || {};
  const stratagemsConfiguredDict = getLocalStorage('stratagemsConfiguredDict') || {};
  return { equipmentConfiguredDict, stratagemsConfiguredDict };
}

function getEquipmentKey(type, name) {
  return `${type}:${name.replace(/[^a-zA-Z0-9]/g, '')}`;
}

const { equipmentConfiguredDict, stratagemsConfiguredDict } = loadConfiguredDicts();

// #region BACKGROUND

function randomizeBackground() {
  let index = Math.floor(Math.random() * 10); // Adjust range if needed
  let img = new Image();
  img.src = `img/backg/image_${index}.jpg`;

  img.onload = function () {
    document.body.style.backgroundImage = `url(img/backg/image_${index}.jpg)`;
  };

  img.onerror = function () {
    randomizeBackground(); // Try another image if this one fails
  };
}

randomizeBackground();
document.addEventListener('contextmenu', (event) => event.preventDefault());
var diff = ['Trivial', 'Easy', 'Medium', 'Challenging', 'Hard', 'Extreme', 'Suicide', 'Impossible', 'Helldive', 'Super Helldive'];

//#region CONFIG/RANDOM SWITCH MENUS

document.getElementById('randomBtn').click();
const shotgunConfig = document.getElementById('shotgunConfig');
const difflvlConfig = document.getElementById('difflvlConfig');

function switchMenu(evt, menu) {
  if (evt.currentTarget.id === 'randomBtn' && evt.currentTarget.classList.contains('active')) {
    displayRandomEquipment();
    const availableStratagems = stratagems.filter((stratagem) => selectedStratagemsState[stratagem.name]);
    let selectedStratagems = getRandomStratagems(availableStratagems, 4);
    displayRandomStratagems(selectedStratagems);
  }

  var i, switchMenu, buttonMain;
  switchMenu = document.getElementsByClassName('switchMenu');
  for (i = 0; i < switchMenu.length; i++) {
    switchMenu[i].style.display = 'none';
  }
  buttonMain = document.getElementsByClassName('buttonMain');
  for (i = 0; i < buttonMain.length; i++) {
    buttonMain[i].className = buttonMain[i].className.replace(' active', '');
  }
  document.getElementById(menu).style.display = 'grid';
  evt.currentTarget.className += ' active';
}

//#endregion

function setupModal(blockId, modalId) {
  var block = document.getElementById(blockId);
  var modal = document.getElementById(modalId);
  var span = modal.getElementsByClassName('close')[0];

  block.onclick = function () {
    modal.style.display = 'block';
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.addEventListener('contextmenu', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}

// Set up each modal
setupModal('armouryConfig', 'armourySelect');
setupModal('primaryConfig', 'primarySelect');
setupModal('sidearmConfig', 'sidearmSelect');
setupModal('throwedConfig', 'throwedSelect');
setupModal('boosterConfig', 'boosterSelect');
setupModal('stratagemConfig', 'stratagemSelect');
setupModal('missionConfig', 'missionSelect');

//#region DISPLAY/ORGANIZE STRATAGEM ICONS

let currentStratagems = [];
const selectedStratagemsState = stratagemsConfiguredDict
  ? stratagemsConfiguredDict
  : stratagems.reduce((acc, stratagem) => {
      acc[stratagem.name] = true;
      return acc;
    }, {});
const offenseBlock = document.querySelector('#offenseBlock');
const supportBlock = document.querySelector('#supportBlock');
const defenseBlock = document.querySelector('#defenseBlock');

function createStratagemIcon(stratagem, type) {
  const stratagemIcon = document.createElement('img');
  stratagemIcon.src = `img/strats/${stratagem.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
  stratagemIcon.alt = stratagem.name;
  stratagemIcon.title = stratagem.name;
  stratagemIcon.classList.add(type);
  if (selectedStratagemsState[stratagem.name] === undefined) {
    stratagemIcon.classList.add('stratagem-btn', 'unselected');
    toggleStratagemSelection(stratagem, stratagemIcon);
  } else {
    stratagemIcon.classList.add('stratagem-btn', selectedStratagemsState[stratagem.name] ? 'selected' : 'unselected');
  }
  stratagemIcon.addEventListener('click', () => toggleStratagemSelection(stratagem, stratagemIcon));
  return stratagemIcon;
}

function toggleStratagemSelection(stratagem, stratagemIcon) {
  selectedStratagemsState[stratagem.name] = !selectedStratagemsState[stratagem.name];
  setStratagemsStorage(selectedStratagemsState);
  stratagemIcon.classList.toggle('selected');
  stratagemIcon.classList.toggle('unselected');
}

function displayStratagemsContainer(stratagems, container, type) {
  const stratagemsGroup = document.createElement('div');
  stratagemsGroup.classList.add('stratagems-group');

  let count = 0;
  let stratagemsRow = null;
  stratagems.forEach((stratagem) => {
    if (count % 4 === 0) {
      stratagemsRow = document.createElement('div');
      stratagemsRow.classList.add('stratagems-row');
      stratagemsGroup.appendChild(stratagemsRow);
    }
    const stratagemIcon = createStratagemIcon(stratagem, type);
    stratagemsRow.appendChild(stratagemIcon);
    count++;
  });

  container.appendChild(stratagemsGroup);
}

function filterStratagemsByType(...types) {
  return stratagems.filter((stratagem) => types.includes(stratagem.type));
}

const offenseStratagems = filterStratagemsByType('Offense');
const supportStratagems = filterStratagemsByType('Weaponry', 'Ammopack', 'Backpack', 'Mechanic');
const defenseStratagems = filterStratagemsByType('Defense');

displayStratagemsContainer(offenseStratagems, offenseBlock, 'offense');
displayStratagemsContainer(supportStratagems, supportBlock, 'support');
displayStratagemsContainer(defenseStratagems, defenseBlock, 'defense');

// Function to associate to select all (true) or deselect all (false) stratagems
// It assumes you want to select/deselect all stratagems of a specific type
// In case you want to be 1 button for all types, just call this function more times.
function updateAllStratagemsSelection(type, value) {
  const strategems = document.getElementsByClassName(`${type} stratagem-btn`);
  for (let i = 0; i < strategems.length; i++) {
    const stratagem = strategems[i];
    const item_name = stratagem.title;
    selectedStratagemsState[item_name] = value;
    if (value === true) {
      stratagem.classList.add('unselected');
      stratagem.classList.remove('selected');
    } else if (value === false) {
      stratagem.classList.add('selected');
      stratagem.classList.remove('unselected');
    }
  }
}

function updateAllStratagemsAllTypesSelection(value) {
  ['offense', 'support', 'defense'].forEach((type) => {
    updateAllStratagemsSelection(type, value);
  });
}

//#endregion

//#region DISPLAY/ORGANIZE MISSION ICONS

const selectedMissionState = stratagems.reduce((acc, stratagem) => {
  acc[stratagem.name] = true;
  return acc;
}, {});

const offenseMission = document.querySelector('#offenseMission');
const supportMission = document.querySelector('#supportMission');
const defenseMission = document.querySelector('#defenseMission');

let selectedMissionStratagem = null;

function createMissionIcon(stratagem) {
  const missionIcon = document.createElement('img');
  missionIcon.src = `img/strats/${stratagem.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
  missionIcon.alt = stratagem.name;
  missionIcon.title = stratagem.name;
  missionIcon.classList.add('stratagem-btn', 'unselected');
  missionIcon.addEventListener('click', () => selectMissionStratagem(stratagem, missionIcon));
  return missionIcon;
}

function selectMissionStratagem(stratagem, missionIcon) {
  if (selectedMissionStratagem === missionIcon) {
    // Deselect the currently selected stratagem
    missionIcon.classList.remove('selected');
    missionIcon.classList.add('unselected');
    selectedMissionStratagem = null;
    selectedMissionState[stratagem.name] = false;
    updateMissionDisplay(null); // Clear the display
  } else {
    // Deselect any previously selected stratagem
    if (selectedMissionStratagem) {
      selectedMissionStratagem.classList.remove('selected');
      selectedMissionStratagem.classList.add('unselected');
    }

    // Select the new stratagem
    missionIcon.classList.add('selected');
    missionIcon.classList.remove('unselected');
    selectedMissionStratagem = missionIcon;
    selectedMissionState[stratagem.name] = true;
    // Update the display with the selected stratagem
    updateMissionDisplay(stratagem);
  }
}

function updateMissionDisplay(stratagem) {
  const displayArea = missionConfig.querySelector('.mission-ico');
  displayArea.innerHTML = ''; // Clear previous display

  if (stratagem) {
    const selectedImage = document.createElement('img');
    selectedImage.src = `img/strats/${stratagem.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
    selectedImage.alt = stratagem.name;
    selectedImage.title = stratagem.name;
    displayArea.appendChild(selectedImage);
  }
}

function displayMissionContainer(stratagems, container) {
  const missionGroup = document.createElement('div');
  missionGroup.classList.add('stratagems-group');

  let count = 0;
  let missionRow = null;
  stratagems.forEach((stratagem) => {
    if (count % 4 === 0) {
      missionRow = document.createElement('div');
      missionRow.classList.add('stratagems-row');
      missionGroup.appendChild(missionRow);
    }
    const missionIcon = createMissionIcon(stratagem);
    missionRow.appendChild(missionIcon);
    count++;
  });

  container.appendChild(missionGroup);
}

function filterMissionByType(...types) {
  return stratagems.filter((stratagem) => types.includes(stratagem.type));
}

const offenseQuest = filterMissionByType('Offense');
const supportQuest = filterMissionByType('Weaponry', 'Ammopack', 'Backpack', 'Mechanic');
const defenseQuest = filterMissionByType('Defense');

displayMissionContainer(offenseQuest, offenseMission);
displayMissionContainer(supportQuest, supportMission);
displayMissionContainer(defenseQuest, defenseMission);

//#endregion

//#region DISPLAY EQUIPMENT ICONS

const modalMapping = {
  primary: document.querySelector('#primarySelect .modal-group'),
  sidearm: document.querySelector('#sidearmSelect .modal-group'),
  throwed: document.querySelector('#throwedSelect .modal-group'),
  armoury: document.querySelector('#armourySelect .modal-group'),
  booster: document.querySelector('#boosterSelect .modal-group'),
};

const folderMapping = {
  primary: 'weapons/primary',
  sidearm: 'weapons/sidearm',
  throwed: 'weapons/throwed',
  armoury: 'armoury/body',
  booster: 'boosters',
};

const selectedEquipmentState = equipmentConfiguredDict;
// Generic function to create equipment icon
function createEquipmentIcon(item, type) {
  const equipmentIcon = document.createElement('img');
  const basePath = `img/equip/${folderMapping[type]}/${item.name.replace(/[^a-zA-Z0-9]/g, '')}`;

  // Check if the type is "boosters" and use SVG, otherwise use WebP
  equipmentIcon.src = type === 'booster' ? `${basePath}.webp` : `${basePath}.webp`;
  equipmentIcon.alt = item.name;
  equipmentIcon.title = item.name;
  const key = getEquipmentKey(type, item.name);
  equipmentIcon.classList.add(type);
  if (selectedEquipmentState[key] === undefined) {
    equipmentIcon.classList.add('equipment-btn', 'unselected');
    toggleEquipmentSelection(item, type, equipmentIcon);
  } else {
    equipmentIcon.classList.add('equipment-btn', selectedEquipmentState[key] ? 'selected' : 'unselected');
  }
  equipmentIcon.addEventListener('click', () => toggleEquipmentSelection(item, type, equipmentIcon));

  return equipmentIcon;
}

// Toggle equipment selection
function toggleEquipmentSelection(item, type, equipmentIcon) {
  const key = getEquipmentKey(type, item.name);
  selectedEquipmentState[key] = !selectedEquipmentState[key];
  setEquipmentStorage(selectedEquipmentState);
  equipmentIcon.classList.toggle('selected');
  equipmentIcon.classList.toggle('unselected');
}

// Display equipment in modal
function displayEquipment(items, type, modal) {
  const equipmentGroup = document.createElement('div');
  equipmentGroup.classList.add('equipment-group');

  let count = 0;
  let equipmentRow = null;

  // Determine max items per row based on type
  const maxPerRow = type === 'sidearm' || type === 'primary' ? 4 : 6;

  items.forEach((item) => {
    if (count % maxPerRow === 0) {
      equipmentRow = document.createElement('div');
      equipmentRow.classList.add('equipment-row');
      equipmentGroup.appendChild(equipmentRow);
    }
    const equipmentIcon = createEquipmentIcon(item, type);
    equipmentRow.appendChild(equipmentIcon);
    count++;
  });

  modal.appendChild(equipmentGroup);
}

// Filter and display equipment by type
const types = ['primary', 'sidearm', 'throwed', 'armoury', 'booster'];

types.forEach((type) => {
  const modal = modalMapping[type];
  if (!modal) return;

  const items = equipment.flatMap((equipmentItem) => equipmentItem.items.filter((item) => item.type === type));

  displayEquipment(items, type, modal);
});

// Function to associate to select all (true) or deselect all (false) equipment
function updateAllEquipmentSelection(type, value) {
  const equipments = document.getElementsByClassName(`${type} equipment-btn`);
  for (let i = 0; i < equipments.length; i++) {
    const equipment = equipments[i];
    const items = equipment.src.split('.')[0].split('/');
    const item_name = items[items.length - 1];
    const key = getEquipmentKey(type, item_name);
    selectedEquipmentState[key] = value;
    if (value === true) {
      equipment.classList.add('unselected');
      equipment.classList.remove('selected');
    } else if (value === false) {
      equipment.classList.add('selected');
      equipment.classList.remove('unselected');
    }
  }
}

function updateAllEquipmentAllTypesSelection(value) {
  types.forEach((type) => {
    updateAllEquipmentSelection(type, value);
  });
}

//#endregion

//#region RANDOMIZE EQUIPMENT

const equipmentMap = new Map([
  ['armoury', document.getElementById('armouryDiv')],
  ['primary', document.getElementById('primaryDiv')],
  ['sidearm', document.getElementById('sidearmDiv')],
  ['throwed', document.getElementById('throwedDiv')],
  ['booster', document.getElementById('boosterDiv')],
]);

const equipmentItems = equipment.flatMap((set) => set.items);

function getRandomEquipment(type, currentEquipment) {
  let itemsOfType = equipmentItems.filter((item) => item.type === type && selectedEquipmentState[getEquipmentKey(type, item.name)] === true && item.name !== currentEquipment?.name);
  // Filter out the current equipment for this type
  return itemsOfType[Math.floor(Math.random() * itemsOfType.length)];
}

function displayEquipImages(element, equipment) {
  element.innerHTML = ''; // Clear previous content

  const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

  const createImageElement = (iconPath, useClass, titleText) => {
    const div = document.createElement('div');
    if (!useClass) {
      div.classList.add('equipment-ico');
    } else {
      div.classList.add(useClass);
    }
    div.innerHTML = `<img src="${iconPath}" alt="${titleText}" title="${titleText}">`;
    element.appendChild(div);
  };

  let iconPath, useClass;

  if (equipment.type === 'armoury') {
    const baseItem = equipment;
    let selectedItem = baseItem;

    // Check for variants and randomly select base or variant
    if (baseItem.vars && baseItem.vars.length > 0) {
      const possibleItems = [baseItem, ...baseItem.vars];
      selectedItem = getRandomItem(possibleItems);
    }

    // Determine cape options
    let capeOptions = [];
    if (baseItem.cape) {
      capeOptions = Array.isArray(baseItem.cape) ? baseItem.cape : [baseItem.cape];
    }
    if (selectedItem.cape) {
      capeOptions = capeOptions.concat(Array.isArray(selectedItem.cape) ? selectedItem.cape : [selectedItem.cape]);
    }

    // Randomly select a cape
    const selectedCape = capeOptions.length > 0 ? getRandomItem(capeOptions) : null;

    // Display images for armoury categories
    const categories = ['head', 'body', 'back'];
    categories.forEach((category) => {
      if (category === 'back' && selectedCape) {
        iconPath = `img/equip/armoury/${category}/${selectedCape.replace(/\W/g, '')}.webp`;
      } else if (category !== 'back') {
        iconPath = `img/equip/armoury/${category}/${selectedItem.name.replace(/\W/g, '')}.webp`;
      }
      createImageElement(iconPath, null, `${selectedItem.name}\n${selectedCape}`);
    });
  } else if (equipment.type === 'booster') {
    iconPath = `img/equip/boosters/${equipment.name.replace(/\W/g, '')}.webp`;
    useClass = 'booster-ico';
    createImageElement(iconPath, useClass, equipment.name);
  } else if (['primary', 'sidearm', 'throwed'].includes(equipment.type)) {
    iconPath = `img/equip/weapons/${equipment.type}/${equipment.name.replace(/\W/g, '')}.webp`;
    createImageElement(iconPath, null, equipment.name);
  } else {
    element.textContent = equipment.name;
  }
}

function displayRandomEquipment() {
  for (const [type, element] of equipmentMap) {
    const currentEquipment = getCurrentEquipment(element);
    displayEquipImages(element, getRandomEquipment(type, currentEquipment));
  }
}

function singleRandomEquipment(type) {
  const element = equipmentMap.get(type);
  const currentEquipment = getCurrentEquipment(element);
  displayEquipImages(element, getRandomEquipment(type, currentEquipment));
}

// Function to get the current equipment displayed in the element
function getCurrentEquipment(element) {
  const imgElement = element.querySelector('img');
  if (!imgElement) return null;

  const src = imgElement.src;
  const equipmentName = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.')).replace(/_/g, ' ');

  return equipmentItems.find((item) => {
    // Check base item name
    if (item.name.replace(/\W/g, '') === equipmentName) {
      return true;
    }

    // Check variant names if they exist
    if (item.vars) {
      return item.vars.some((variant) => variant.name.replace(/\W/g, '') === equipmentName);
    }

    return false;
  });
}

//#endregion

//#region RANDOMIZE STRATAGEMS

function getRandomStratagems(stratagems, count, index) {
  let shuffled = stratagems.sort(() => 0.5 - Math.random());
  let result = [];
  let weaponryAdded = false;
  let backpackAdded = false;
  let mechanicAdded = false;

  if (shotgunConfig && shotgunConfig.classList.contains('active')) {
    weaponryAdded = true;
  }

  if (currentStratagems.length > 0) {
    currentStratagems
      .filter((_, i) => i !== index)
      .forEach((stratagem) => {
        if (stratagem.type === 'Weaponry') weaponryAdded = true;
        if (stratagem.type === 'Backpack') backpackAdded = true;
        if (stratagem.type === 'Mechanic') mechanicAdded = true;
        if (stratagem.type === 'Ammopack') {
          weaponryAdded = true;
          backpackAdded = true;
        }
      });
  }

  // Ensure the first stratagem matches the selectedMissionStratagem if it exists
  if (selectedMissionStratagem) {
    const selectedMission = stratagems.find((stratagem) => stratagem.name === selectedMissionStratagem.title);
    if (selectedMission) {
      result.push(selectedMission);
      shuffled = shuffled.filter((stratagem) => stratagem.name !== selectedMissionStratagem.title);

      // FIX: Update the flags based on the selected mission stratagem's type
      if (selectedMission.type === 'Weaponry') weaponryAdded = true;
      if (selectedMission.type === 'Backpack') backpackAdded = true;
      if (selectedMission.type === 'Mechanic') mechanicAdded = true;
      if (selectedMission.type === 'Ammopack') {
        weaponryAdded = true;
        backpackAdded = true;
      }
    }
  }

  for (let stratagem of shuffled) {
    if (result.length >= count) break;
    if (stratagem.type === 'Weaponry') {
      if (!weaponryAdded) {
        result.push(stratagem);
        weaponryAdded = true;
      }
    } else if (stratagem.type === 'Backpack') {
      if (!backpackAdded) {
        result.push(stratagem);
        backpackAdded = true;
      }
    } else if (stratagem.type === 'Ammopack') {
      if (!backpackAdded && !weaponryAdded) {
        result.push(stratagem);
        backpackAdded = true;
        weaponryAdded = true;
      }
    } else if (stratagem.type === 'Mechanic') {
      if (!mechanicAdded) {
        result.push(stratagem);
        mechanicAdded = true;
      }
    } else {
      result.push(stratagem);
    }
  }
  shuffled = shuffled.filter((stratagem) => !result.includes(stratagem));
  while (result.length < count) {
    result.push(shuffled.shift());
  }

  return result;
}

function displayRandomStratagems(stratagems) {
  currentStratagems = stratagems;
  const container = document.getElementById('stratagemDiv');
  container.innerHTML = '';
  stratagems.forEach((stratagem, index) => {
    const div = document.createElement('div');
    div.classList.add('stratagem-ico');
    var iconPath = `img/strats/${stratagem.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
    div.innerHTML = `<img src="${iconPath}" alt="${stratagem.name}" title="${stratagem.name}" onclick="singleRandomStratagem(${index})">`;
    container.appendChild(div);

    div.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent click event from bubbling up
    });
  });

  diffgen();
}

function singleRandomStratagem(index) {
  const availableStratagems = stratagems.filter((stratagem) => selectedStratagemsState[stratagem.name] && !currentStratagems.some((cs) => cs.name === stratagem.name));

  if (availableStratagems.length < 1) {
    return;
  }
  const newStratagem = getRandomStratagems(availableStratagems, 1, index)[0];
  currentStratagems[index] = newStratagem;
  displayRandomStratagems(currentStratagems);
}

//#endregion

// Add a click event listener to toggle the 'active' class
shotgunConfig.addEventListener('click', function () {
  shotgunConfig.classList.toggle('active');
});

difflvlConfig.addEventListener('click', function () {
  this.classList.toggle('active');

  // Show or hide difflvlResult based on the active class
  if (this.classList.contains('active')) {
    difflvlResult.style.display = 'block'; // Show the div
  } else {
    difflvlResult.style.display = 'none'; // Hide the div
  }
});

for (const [type] of equipmentMap) {
  document.getElementById(type + 'Result').addEventListener('click', () => singleRandomEquipment(type));
}

let lastDiff;

function diffgen() {
  let randDiff;
  let arrIndex;

  do {
    arrIndex = Math.floor(Math.random() * diff.length);
    randDiff = diff[arrIndex];
  } while (randDiff === lastDiff);

  lastDiff = randDiff;

  document.getElementById('difflvl').innerHTML = `${arrIndex + 1} - ${randDiff.toUpperCase()}`;
}

document.getElementById('difflvlResult').addEventListener('click', () => {
  diffgen();
});

document.querySelectorAll('#stratagemResult').forEach((element) => {
  element.addEventListener('click', function () {
    const availableStratagems = stratagems.filter((stratagem) => selectedStratagemsState[stratagem.name]);
    let selectedStratagems = getRandomStratagems(availableStratagems, 4);
    displayRandomStratagems(selectedStratagems);
  });
});
