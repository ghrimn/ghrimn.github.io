let selectedAbilitiesState = [];
let selectedAbilities = [];

function initializeCookies() {
  // initialize selectedAbilitiesState
  let value = JSON.parse(docCookies.getItem('selectedAbilitiesState'));
  console.log('🚀 ~ initializeCookies ~ value:', value);

  if (value) {
    console.log('🚀 ~ initializeCookies ~ value:', value);
    selectedAbilitiesState = value;
  } else {
    selectedAbilitiesState = abilities.reduce((acc, ability) => {
      acc[ability.name] = true; // Initialize all abilities as selected
      return acc;
    }, {});
  }
  console.log('🚀 ~ selectedAbilitiesState=abilities.reduce ~ selectedAbilitiesState:', selectedAbilitiesState);
}

initializeCookies();

document.addEventListener('DOMContentLoaded', function () {
  const abilitiesContainer = document.querySelector('.abilities-container');

  // Separate abilities into three groups
  const offenseAbilities = abilities.filter((ability) => ability.type === 'Offense');
  const supportAbilities = abilities.filter((ability) => ['Weaponry', 'Ammopack', 'Backpack', 'Vehicle'].includes(ability.type));
  const defenseAbilities = abilities.filter((ability) => ability.type === 'Defense');

  // Function to create ability icons
  function createAbilityIcon(ability) {
    const abilityIcon = document.createElement('img');
    abilityIcon.src = `img/${ability.id}.webp`;
    abilityIcon.alt = ability.name;
    abilityIcon.title = ability.name;
    abilityIcon.classList.add('ability-icon', 'selected');
    if (!selectedAbilitiesState[ability.name]) {
      abilityIcon.classList.toggle('selected');
      abilityIcon.classList.toggle('unselected');
    }
    abilityIcon.addEventListener('click', function () {
      selectedAbilitiesState[ability.name] = !selectedAbilitiesState[ability.name];
      docCookies.setItem('selectedAbilitiesState', JSON.stringify(selectedAbilitiesState));
      abilityIcon.classList.toggle('selected');
      abilityIcon.classList.toggle('unselected');
    });
    return abilityIcon;
  }

  // Function to display abilities container
  function displayAbilitiesContainer(abilities, container, title) {
    const abilitiesGroup = document.createElement('div');
    abilitiesGroup.classList.add('abilities-group');

    // Title for the group
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    abilitiesGroup.appendChild(titleElement);

    // Display abilities for the group
    let count = 0;
    let abilitiesRow = null;
    abilities.forEach((ability) => {
      if (count % 4 === 0) {
        abilitiesRow = document.createElement('div');
        abilitiesRow.classList.add('abilities-row');
        abilitiesGroup.appendChild(abilitiesRow);
      }
      const abilityIcon = createAbilityIcon(ability);
      abilitiesRow.appendChild(abilityIcon);
      count++;
    });

    container.appendChild(abilitiesGroup);
  }

  // Display abilities container for each group with title
  displayAbilitiesContainer(offenseAbilities, abilitiesContainer, 'Offense');
  displayAbilitiesContainer(supportAbilities, abilitiesContainer, 'Support');
  displayAbilitiesContainer(defenseAbilities, abilitiesContainer, 'Defense');
});

function getAvailableAbilities() {
  return abilities.filter((ability) => selectedAbilitiesState[ability.name]);
}

document.getElementById('generateButton').addEventListener('click', function () {
  const availableAbilities = getAvailableAbilities();
  selectedAbilities = getRandomAbilities(availableAbilities, 4);
  displayAbilities(selectedAbilities);
});

document.getElementById('clearCookies').addEventListener('click', function () {
  for (key of docCookies.keys()) {
    docCookies.removeItem(key);
  }
});

function checkRules(ability_type, backpackAdded, weaponryAdded) {
  let result = false;
  if (ability_type === 'Weaponry') {
    result = weaponryAdded == false;
    weaponryAdded = true;
  } else if (ability_type === 'Backpack') {
    result = backpackAdded == false;
    backpackAdded = true;
  } else if (ability_type === 'Ammopack') {
    backpackAdded = true;
    weaponryAdded = true;
    result = backpackAdded == false && weaponryAdded == false;
  } else {
    result = true;
  }
  return [result, backpackAdded, weaponryAdded];
}

function getRandomAbilities(abilities, count, selected = []) {
  let shuffled = abilities.sort(() => 0.5 - Math.random());
  let weaponryAdded = false;
  let backpackAdded = false;
  let result = false;
  let randomAbilities = [];
  for (let ability of selected) {
    [result, backpackAdded, weaponryAdded] = checkRules(ability.type, backpackAdded, weaponryAdded);
    if (!result) console.log('🚀 ~ getRandomAbilities ~ selected arrays is not using expected rules ~ result:', result);
  }
  for (let ability of shuffled) {
    [result, backpackAdded, weaponryAdded] = checkRules(ability.type, backpackAdded, weaponryAdded);
    if (result) randomAbilities.push(ability);
    if (randomAbilities.length >= count) break;
  }

  if (randomAbilities.length < count) {
    shuffled = shuffled.filter((ability) => !randomAbilities.includes(ability));
    while (result.length < count) {
      randomAbilities.push(shuffled.shift());
    }
  }

  return randomAbilities;
}

function displayAbilities(abilities) {
  const container = document.getElementById('loadoutDisplay');
  container.innerHTML = ''; // Clear previous abilities
  abilities.forEach((ability) => {
    const div = document.createElement('div');
    div.classList.add('icon');
    var imagePath = `img/${ability.id}.webp`; // Construct image path
    div.innerHTML = `<img src="${imagePath}" alt="${ability.name}" title="${ability.name}" onclick="individualGeneration('${ability.id}')">`;
    container.appendChild(div);
  });
}

function individualGeneration(ability_id) {
  const availableAbilities = getAvailableAbilities().filter(function (ability) {
    return ability.id !== ability_id && !selectedAbilities.includes(ability);
  });
  const alreadyUsedAbilities = selectedAbilities.filter(function (ability) {
    return ability.id !== ability_id;
  });
  const new_ability = getRandomAbilities(availableAbilities, 1, alreadyUsedAbilities);
  if (new_ability.length) selectedAbilities = selectedAbilities.map((ability) => (ability.id === ability_id ? new_ability[0] : ability));
  displayAbilities(selectedAbilities);
}
