// region LOCAL STORAGE

function setLocalStorage(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

function getLocalStorage(name) {
  const value = localStorage.getItem(name);
  return value ? JSON.parse(value) : null;
}

function clearAllLocalStorage() {
  updateAllStratagemsAllTypesSelection(true);
  updateAllEquipmentAllTypesSelection(true);
  localStorage.clear();
  location.reload();
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
  img.src = `img/back/image_${index}.jpg`;

  img.onload = function () {
    document.body.style.backgroundImage = `url(img/back/image_${index}.jpg)`;
  };

  img.onerror = function () {
    randomizeBackground(); // Try another image if this one fails
  };
}

randomizeBackground();
document.addEventListener('contextmenu', (event) => event.preventDefault());

//#region CONFIG/RANDOM SWITCH MENUS

document.getElementById('randomBtn').click();
const civtoolToggle = document.querySelector('.civtoolToggle');

function switchMenu(evt, menu) {
  if (evt.currentTarget.id === 'randomBtn' && evt.currentTarget.classList.contains('active')) {
    displayRandomEquipment();
    let selectedStratagems = getRandomStratagems(stratagems, 4);
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
setupModal('warbondConfig', 'warbondSelect');

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
  stratagemIcon.src = `img/strat/${stratagem.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
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

function toggleAllStratagemSelections(types) {

  let allSelected = true;

  for (const type of types) {
    const strategems = document.getElementsByClassName(`${type} stratagem-btn`);
    for (let i = 0; i < strategems.length; i++) {
      if (!strategems[i].classList.contains('selected')) {
        allSelected = false;
        break;
      }
    }
    if (!allSelected) break; // No need to continue checking
  }

  const newValue = !allSelected;

  for (const type of types) {
    updateAllStratagemsSelection(type, newValue);
  }
}

function updateAllStratagemsSelection(type, value) {
  const strategems = document.getElementsByClassName(`${type} stratagem-btn`);
  for (let i = 0; i < strategems.length; i++) {
    const stratagem = strategems[i];
    const item_name = stratagem.title;

    selectedStratagemsState[item_name] = value;

    if (value === true) {
      stratagem.classList.add('selected');
      stratagem.classList.remove('unselected');
    } else {
      stratagem.classList.add('unselected');
      stratagem.classList.remove('selected');
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

let selectedMissionStratagems = [];

function createMissionIcon(stratagem) {
  const missionIcon = document.createElement('img');
  missionIcon.src = `img/strat/${stratagem.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
  missionIcon.alt = stratagem.name;
  missionIcon.title = stratagem.name;
  missionIcon.classList.add('stratagem-btn', 'unselected');
  missionIcon.addEventListener('click', () => selectMissionStratagem(stratagem, missionIcon));
  return missionIcon;
}

function selectMissionStratagem(stratagem, missionIcon) {
  const index = selectedMissionStratagems.findIndex(
    (entry) => entry.stratagem.name === stratagem.name
  );

  if (index !== -1) {
    // Already selected — remove it
    selectedMissionStratagems.splice(index, 1);
    missionIcon.classList.remove('selected');
    missionIcon.classList.add('unselected');
    selectedMissionState[stratagem.name] = false;
  } else {
    // Not selected — add if limit not reached
    if (selectedMissionStratagems.length < 4) {
      selectedMissionStratagems.push({ stratagem, missionIcon });
      missionIcon.classList.add('selected');
      missionIcon.classList.remove('unselected');
      selectedMissionState[stratagem.name] = true;
    }
  }

  updateMissionDisplay();
}

function updateMissionDisplay() {
  const displayArea = missionConfig.querySelector('.mission-ico');
  displayArea.innerHTML = ''; // Clear previous display

  if (selectedMissionStratagems.length === 0) {
    displayArea.innerHTML = '<i class="fa-solid fa-globe"</i>';
  } else {
    selectedMissionStratagems.forEach(({ stratagem }) => {
      const img = document.createElement('img');
      img.src = `img/strat/${stratagem.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
      img.alt = stratagem.name;
      img.title = stratagem.name;
      displayArea.appendChild(img);
    });
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
  const basePath = `img/gear/${folderMapping[type]}/${item.name.replace(/[^a-zA-Z0-9]/g, '')}`;

  // Check if the type is "boosters" and use SVG, otherwise use WebP
  if (type === 'booster') {
    equipmentIcon.src = `${basePath}.svg`;
    equipmentIcon.onerror = () => {
      equipmentIcon.onerror = null;  // avoid infinite loop
      equipmentIcon.src = `${basePath}.webp`;
    };
  } else {
    equipmentIcon.src = `${basePath}.webp`;
  }
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

// ✅ Smart toggle function
function toggleAllEquipmentSelection(type) {
  const equipments = document.getElementsByClassName(`${type} equipment-btn`);
  let allSelected = true;

  // Check if all are currently selected
  for (let i = 0; i < equipments.length; i++) {
    if (!equipments[i].classList.contains('selected')) {
      allSelected = false;
      break;
    }
  }

  // Toggle: if all selected → unselect all; else → select all
  const newValue = !allSelected;
  updateAllEquipmentSelection(type, newValue);
}

// ✅ Fixed update function — now matches selected state properly
function updateAllEquipmentSelection(type, value) {
  const equipments = document.getElementsByClassName(`${type} equipment-btn`);
  for (let i = 0; i < equipments.length; i++) {
    const equipment = equipments[i];
    const item = equipment.title;
    const key = getEquipmentKey(type, item);

    selectedEquipmentState[key] = value;

    if (value === true) {
      equipment.classList.add('selected');
      equipment.classList.remove('unselected');
    } else {
      equipment.classList.add('unselected');
      equipment.classList.remove('selected');
    }
  }

  // Save to local storage
  setEquipmentStorage(selectedEquipmentState);
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
  let itemsOfType = equipmentItems.filter(
    (item) =>
      item.type === type &&
      selectedEquipmentState[getEquipmentKey(type, item.name)] === true
  );

  // If none selected, fall back to all of the type
  if (itemsOfType.length === 0) {
    itemsOfType = equipmentItems.filter((item) => item.type === type);
  }

  // If only one item (or fallback leads to only one), return it
  if (itemsOfType.length === 1) {
    return itemsOfType[0];
  }

  // Prefer not repeating current equipment
  const filtered = itemsOfType.filter(
    (item) => item.name !== currentEquipment?.name
  );

  // If all were filtered out (only one unique), fall back
  const finalPool = filtered.length > 0 ? filtered : itemsOfType;

  return finalPool[Math.floor(Math.random() * finalPool.length)];
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
        iconPath = `img/gear/armoury/${category}/${selectedCape.replace(/\W/g, '')}.webp`;
      } else if (category !== 'back') {
        iconPath = `img/gear/armoury/${category}/${selectedItem.name.replace(/\W/g, '')}.webp`;
      }
      createImageElement(iconPath, null, `${selectedItem.name}\n${selectedCape}`);
    });
  } else if (equipment.type === 'booster') {
    const baseName = equipment.name.replace(/\W/g, '');
    const svgPath = `img/gear/boosters/${baseName}.svg`;
    const webpPath = `img/gear/boosters/${baseName}.webp`;
    const useClass = 'booster-ico';

    const img = new Image();
    img.onload = function () {
      // SVG exists, use it
      createImageElement(svgPath, useClass, equipment.name);
    };
    img.onerror = function () {
      // SVG not found, fallback to webp
      createImageElement(webpPath, useClass, equipment.name);
    };

    img.src = svgPath;
  }
  else if (['primary', 'sidearm', 'throwed'].includes(equipment.type)) {
    iconPath = `img/gear/weapons/${equipment.type}/${equipment.name.replace(/\W/g, '')}.webp`;
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

function getRandomStratagems(stratagems, count, index = -1, considerCurrent = false) {
  const enabledStrats = stratagems.filter(s => selectedStratagemsState[s.name]);
  const otherStrats = stratagems.filter(s => !selectedStratagemsState[s.name]);

  let shuffledEnabled = [...enabledStrats].sort(() => 0.5 - Math.random());
  let shuffledOthers = [...otherStrats].sort(() => 0.5 - Math.random());

  let result = [];

  let weaponryAdded = false;
  let backpackAdded = false;
  let mechanicAdded = false;

  if (civtoolToggle && civtoolToggle.classList.contains('on')) {
    weaponryAdded = true;
  }

  if (considerCurrent && currentStratagems.length > 0) {
    currentStratagems
      .filter((_, i) => i !== index)
      .forEach(stratagem => {
        if (stratagem.type === 'Weaponry') weaponryAdded = true;
        if (stratagem.type === 'Backpack') backpackAdded = true;
        if (stratagem.type === 'Mechanic') mechanicAdded = true;
        if (stratagem.type === 'Ammopack') {
          weaponryAdded = true;
          backpackAdded = true;
        }
      });
  }

  // First: insert mission strats at fixed positions
  const missionStrats = selectedMissionStratagems.map(({ stratagem }) => stratagem);
  result = [...missionStrats];

  // Remove them from pools
  shuffledEnabled = shuffledEnabled.filter(s => !missionStrats.some(m => m.name === s.name));
  shuffledOthers = shuffledOthers.filter(s => !missionStrats.some(m => m.name === s.name));

  // Update flags based on mission strats
  missionStrats.forEach(stratagem => {
    if (stratagem.type === 'Weaponry') weaponryAdded = true;
    if (stratagem.type === 'Backpack') backpackAdded = true;
    if (stratagem.type === 'Mechanic') mechanicAdded = true;
    if (stratagem.type === 'Ammopack') {
      weaponryAdded = true;
      backpackAdded = true;
    }
  });

  function canAddStratagem(s) {
    if (s.type === 'Weaponry') return !weaponryAdded;
    if (s.type === 'Backpack') return !backpackAdded;
    if (s.type === 'Mechanic') return !mechanicAdded;
    if (s.type === 'Ammopack') return !weaponryAdded && !backpackAdded;
    return true;
  }

  const remainingCount = count - result.length;

  for (let strat of shuffledEnabled) {
    if (result.length >= count) break;
    if (canAddStratagem(strat)) {
      result.push(strat);
      if (strat.type === 'Weaponry') weaponryAdded = true;
      if (strat.type === 'Backpack') backpackAdded = true;
      if (strat.type === 'Mechanic') mechanicAdded = true;
      if (strat.type === 'Ammopack') {
        weaponryAdded = true;
        backpackAdded = true;
      }
    }
  }

  for (let strat of shuffledOthers) {
    if (result.length >= count) break;
    if (canAddStratagem(strat)) {
      result.push(strat);
      if (strat.type === 'Weaponry') weaponryAdded = true;
      if (strat.type === 'Backpack') backpackAdded = true;
      if (strat.type === 'Mechanic') mechanicAdded = true;
      if (strat.type === 'Ammopack') {
        weaponryAdded = true;
        backpackAdded = true;
      }
    }
  }

  return result;
}

function displayRandomStratagems(stratagems) {
  currentStratagems = stratagems;
  const container = document.getElementById('stratagemDiv');
  container.innerHTML = '';
  const box = document.createElement('div');
  box.id = 'stratagemBox';
  container.appendChild(box);
  box.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent click event from bubbling up
  });
  stratagems.forEach((stratagem, index) => {
    const div = document.createElement('div');
    div.classList.add('stratagem-ico');
    var iconPath = `img/strat/${stratagem.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
    div.innerHTML = `<img src="${iconPath}" alt="${stratagem.name}" title="${stratagem.name}" onclick="singleRandomStratagem(${index})">`;
    box.appendChild(div);

    div.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent click event from bubbling up
    });
  });
}

function singleRandomStratagem(index) {
  // Lock mission slots
  if (index < selectedMissionStratagems.length) return;

  const existingStrats = currentStratagems.filter((_, i) => i !== index);
  const usedNames = new Set(existingStrats.map(s => s.name));

  const availableStratagems = stratagems.filter(
    (s) => selectedStratagemsState[s.name] && !usedNames.has(s.name)
  );

  if (availableStratagems.length === 0) return;

  // Single strat generation, no mission prepending
  let shuffled = [...availableStratagems].sort(() => 0.5 - Math.random());

  let weaponryAdded = false;
  let backpackAdded = false;
  let mechanicAdded = false;

  existingStrats.forEach(stratagem => {
    if (stratagem.type === 'Weaponry') weaponryAdded = true;
    if (stratagem.type === 'Backpack') backpackAdded = true;
    if (stratagem.type === 'Mechanic') mechanicAdded = true;
    if (stratagem.type === 'Ammopack') {
      weaponryAdded = true;
      backpackAdded = true;
    }
  });

  function canAdd(s) {
    if (s.type === 'Weaponry') return !weaponryAdded;
    if (s.type === 'Backpack') return !backpackAdded;
    if (s.type === 'Mechanic') return !mechanicAdded;
    if (s.type === 'Ammopack') return !weaponryAdded && !backpackAdded;
    return true;
  }

  const newStrat = shuffled.find(canAdd);
  if (newStrat) {
    currentStratagems[index] = newStrat;
    displayRandomStratagems(currentStratagems);
  }
}

//#endregion

for (const [type] of equipmentMap) {
  document.getElementById(type + 'Result').addEventListener('click', () => singleRandomEquipment(type));
}

document.querySelectorAll('#stratagemResult').forEach(element => {
  element.addEventListener('click', () => {
    const selectedStratagems = getRandomStratagems(stratagems, 4);
    displayRandomStratagems(selectedStratagems);
  });
});

