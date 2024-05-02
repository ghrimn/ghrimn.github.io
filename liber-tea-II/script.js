//#region STRATAGEM GENERATOR 

let selectedStratagemsState = stratagems.reduce((acc, stratagem) => {
  acc[stratagem.name] = true; // Initialize all stratagems as selected
  return acc;
}, {});

let selectedStratagems = [];

document.addEventListener('DOMContentLoaded', function () {
  const stratagemsContainer = document.querySelector('.stratagems-container');

  // Separate stratagems into three groups
  const offenseStratagems = stratagems.filter((stratagem) => stratagem.type === 'Offense');
  const supportStratagems = stratagems.filter((stratagem) => ['Weaponry', 'Ammopack', 'Backpack', 'Vehicle'].includes(stratagem.type));
  const defenseStratagems = stratagems.filter((stratagem) => stratagem.type === 'Defense');

  // Function to create stratagem icons
  function createStratagemIcon(stratagem) {
    const stratagemIcon = document.createElement('img');
    stratagemIcon.src = `strats/${stratagem.id}.webp`;
    stratagemIcon.alt = stratagem.name;
    stratagemIcon.title = stratagem.name;
    stratagemIcon.classList.add('stratagem-icon', 'selected');
    stratagemIcon.addEventListener('click', function () {
      selectedStratagemsState[stratagem.name] = !selectedStratagemsState[stratagem.name];
      stratagemIcon.classList.toggle('selected');
      stratagemIcon.classList.toggle('unselected');
    });
    return stratagemIcon;
  }

  // Function to display stratagems container
  function displayStratagemsContainer(stratagems, container, title) {
    const stratagemsGroup = document.createElement('div');
    stratagemsGroup.classList.add('stratagems-group');

    // Title for the group
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    stratagemsGroup.appendChild(titleElement);

    // Display stratagems for the group
    let count = 0;
    let stratagemsRow = null;
    stratagems.forEach((stratagem) => {
      if (count % 4 === 0) {
        stratagemsRow = document.createElement('div');
        stratagemsRow.classList.add('stratagems-row');
        stratagemsGroup.appendChild(stratagemsRow);
      }
      const stratagemIcon = createStratagemIcon(stratagem);
      stratagemsRow.appendChild(stratagemIcon);
      count++;
    });

    container.appendChild(stratagemsGroup);
  }

  // Display stratagems container for each group with title
  displayStratagemsContainer(offenseStratagems, stratagemsContainer, 'Offense');
  displayStratagemsContainer(supportStratagems, stratagemsContainer, 'Support');
  displayStratagemsContainer(defenseStratagems, stratagemsContainer, 'Defense');
});

function getAvailableStratagems() {
  return stratagems.filter((stratagem) => selectedStratagemsState[stratagem.name]);
}

document.getElementById('generateButton').addEventListener('click', function () {
  const availableStratagems = getAvailableStratagems();
  selectedStratagems = getRandomStratagems(availableStratagems, 4);
  displayStratagems(selectedStratagems);
});

function checkRules(stratagem_type, backpackAdded, weaponryAdded) {
  let result = false;
  if (stratagem_type === 'Weaponry') {
    result = weaponryAdded == false;
    weaponryAdded = true;
  } else if (stratagem_type === 'Backpack') {
    result = backpackAdded == false;
    backpackAdded = true;
  } else if (stratagem_type === 'Ammopack') {
    backpackAdded = true;
    weaponryAdded = true;
    result = backpackAdded == false && weaponryAdded == false;
  } else {
    result = true;
  }
  return [result, backpackAdded, weaponryAdded];
}

function getRandomStratagems(stratagems, count, selected = []) {
  let shuffled = stratagems.sort(() => 0.5 - Math.random());
  let weaponryAdded = false;
  let backpackAdded = false;
  let result = false;
  let randomStratagems = [];
  for (let stratagem of selected) {
    [result, backpackAdded, weaponryAdded] = checkRules(stratagem.type, backpackAdded, weaponryAdded);
    if (!result) console.log('🚀 ~ getRandomStratagems ~ selected arrays is not using expected rules ~ result:', result);
  }
  for (let stratagem of shuffled) {
    [result, backpackAdded, weaponryAdded] = checkRules(stratagem.type, backpackAdded, weaponryAdded);
    if (result) randomStratagems.push(stratagem);
    if (randomStratagems.length >= count) break;
  }

  if (randomStratagems.length < count) {
    shuffled = shuffled.filter((stratagem) => !randomStratagems.includes(stratagem));
    while (result.length < count) {
      randomStratagems.push(shuffled.shift());
    }
  }

  return randomStratagems;
}

function displayStratagems(stratagems) {
  const container = document.getElementById('loadoutDisplay');
  container.innerHTML = ''; // Clear previous stratagems
  stratagems.forEach((stratagem) => {
    const div = document.createElement('div');
    div.classList.add('icon');
    var imagePath = `strats/${stratagem.id}.webp`; // Construct image path
    div.innerHTML = `<img src="${imagePath}" alt="${stratagem.name}" title="${stratagem.name}" onclick="individualGeneration('${stratagem.id}')">`;
    container.appendChild(div);
  });
}

function individualGeneration(stratagem_id) {
  const availableStratagems = getAvailableStratagems().filter(function (stratagem) {
    return stratagem.id !== stratagem_id && !selectedStratagems.includes(stratagem);
  });
  const alreadyUsedStratagems = selectedStratagems.filter(function (stratagem) {
    return stratagem.id !== stratagem_id;
  });
  const new_stratagem = getRandomStratagems(availableStratagems, 1, alreadyUsedStratagems);
  if (new_stratagem.length) selectedStratagems = selectedStratagems.map((stratagem) => (stratagem.id === stratagem_id ? new_stratagem[0] : stratagem));
  displayStratagems(selectedStratagems);
}
//#endregion 






//#region EQUIPMENT GENERATOR
// Function to select a random item from the items array
function selectRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Function to generate loadout
function generateArmoryLoadout() {

  /*  document.getElementById("primary-weapon").textContent = "";
    document.getElementById("secondary-weapon").textContent = "";
    document.getElementById("grenade").textContent = "";
    document.getElementById("booster").textContent = "";*/
    document.getElementById("armor-set").textContent = "";


  var selectedWarbonds = [];
  // Get selected warbonds
  selectedWarbonds.push("Standard Issue");
  if (document.getElementById("warbond0-checkbox").checked) selectedWarbonds.push("Super Citizen");
  if (document.getElementById("warbond1-checkbox").checked) selectedWarbonds.push("Helldivers Mobilize");
  if (document.getElementById("warbond2-checkbox").checked) selectedWarbonds.push("Steeled Veterans");
  if (document.getElementById("warbond3-checkbox").checked) selectedWarbonds.push("Cutting Edge");
  if (document.getElementById("warbond4-checkbox").checked) selectedWarbonds.push("Democratic Detonation");

  // Filter items based on selected warbonds
  var availableItems = [];
  for (const warbond of selectedWarbonds) {
    const items = itemsByWarbond.find(item => item.warbond === warbond);
    if (items) availableItems = availableItems.concat(items.items);
  }

  // Generate loadout based on available items
  const primaryWeapons = availableItems.filter(item => item.type === "primary");
  const secondaryWeapons = availableItems.filter(item => item.type === "secondary");
  const grenades = availableItems.filter(item => item.type === "grenade");
  const armorSets = availableItems.filter(item => item.type === "armor");
  const boosters = availableItems.filter(item => item.type === "booster");

  /* document.getElementById("primary-weapon").textContent = selectRandomItem(primaryWeapons).name;
   document.getElementById("secondary-weapon").textContent = selectRandomItem(secondaryWeapons).name;
   document.getElementById("grenade").textContent = selectRandomItem(grenades).name;
   document.getElementById("armor-set").textContent = selectRandomItem(armorSets).name;
   document.getElementById("booster").textContent = selectRandomItem(boosters).name;*/

  document.getElementById("primary-weapon").src = getImageSource(selectRandomItem(primaryWeapons));
  document.getElementById("secondary-weapon").src = getImageSource(selectRandomItem(secondaryWeapons));
  document.getElementById("grenade").src = getImageSource(selectRandomItem(grenades));
  document.getElementById("booster").src = getImageBSource(selectRandomItem(boosters));
  document.getElementById("armor-set").textContent = selectRandomItem(armorSets).name;

}

function getImageSource(item) {
  return `eqpts/${item.name.replace(/[^a-zA-Z0-9]/g, '')}.webp`;
}

function getImageBSource(item) {
  return `bstrs/${item.name.replace(/[^a-zA-Z0-9]/g, '')}.svg`;
}
//#endregion