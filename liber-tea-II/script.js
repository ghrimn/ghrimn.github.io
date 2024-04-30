const abilities = [
  // Offensive
  { name: 'Eagle 500kg Bomb', type: 'Offense' },
  { name: 'Orbital Gatling Barrage', type: 'Offense' },
  { name: 'Eagle Airstrike', type: 'Offense' },
  { name: 'Orbital Walking Barrage', type: 'Offense' },
  { name: 'Eagle Strafing Run', type: 'Offense' },
  { name: 'Orbital EMS Strike', type: 'Offense' },
  { name: 'Eagle Smoke Strike', type: 'Offense' },
  { name: 'Orbital Gas Strike', type: 'Offense' },
  { name: 'Orbital Railcannon Strike', type: 'Offense' },
  { name: 'Eagle Cluster Bomb', type: 'Offense' },
  { name: 'Orbital Smoke Strike', type: 'Offense' },
  { name: 'Orbital Airburst Strike', type: 'Offense' },
  { name: 'Orbital Laser', type: 'Offense' },
  { name: 'Orbital Precision Strike', type: 'Offense' },
  { name: 'Orbital 380mm HE Barrage', type: 'Offense' },
  { name: 'Eagle Napalm Airstrike', type: 'Offense' },
  { name: 'Orbital 120mm HE Barrage', type: 'Offense' },
  { name: 'Eagle 110mm Rocket Pods', type: 'Offense' },

  // Support Weapons
  { name: 'M-105 Stalwart', type: 'Weaponry' },
  { name: 'AC-8 Autocannon', type: 'Ammopack' },
  { name: 'EXO-45 Patriot Exosuit', type: 'Vehicle' },
  { name: 'MG-206 Heavy Machine Gun', type: 'Weaponry' },
  { name: 'SH-32 Shield Generator Pack', type: 'Backpack' },
  { name: 'RL-77 Airburst Rocket Launcher', type: 'Ammopack' },
  { name: 'RS-422 Railgun', type: 'Weaponry' },
  { name: 'LAS-98 Laser Cannon', type: 'Weaponry' },
  { name: 'ARC-3 Arc Thrower', type: 'Weaponry' },
  { name: "AX/AR-23 'Guard Dog'", type: 'Backpack' },
  { name: 'FAF-14 Spear', type: 'Ammopack' },
  { name: 'GL-21 Grenade Launcher', type: 'Weaponry' },
  { name: 'MG-43 Machine Gun', type: 'Weaponry' },
  { name: 'SH-20 Ballistic Shield Backpack', type: 'Backpack' },
  { name: 'B-1 Supply Pack', type: 'Backpack' },
  { name: 'FLAM-40 Flamethrower', type: 'Weaponry' },
  { name: "AX/LAS-5 'Guard Dog' Rover", type: 'Backpack' },
  { name: 'GR-8 Recoilless Rifle', type: 'Ammopack' },
  { name: 'Lift-850 Jump Pack', type: 'Backpack' },
  { name: 'APW-1 Anti-Materiel Rifle', type: 'Weaponry' },
  { name: 'EAT-17 Expendable Anti-Tank', type: 'Weaponry' },
  { name: 'LAS-99 Quasar Cannon', type: 'Weaponry' },

  // Defensive
  { name: 'FX-12 Shield Generator Relay', type: 'Defense' },
  { name: 'A/M-23 EMS Mortar Sentry', type: 'Defense' },
  { name: 'A/MLS-4X Rocket Sentry', type: 'Defense' },
  { name: 'A/G-16 Gatling Sentry', type: 'Defense' },
  { name: 'A/ARC-3 Tesla Tower', type: 'Defense' },
  { name: 'A/M-12 Mortar Sentry', type: 'Defense' },
  { name: 'MD-6 Anti-Personnel Minefield', type: 'Defense' },
  { name: 'A/MG-43 Machine Gun Sentry', type: 'Defense' },
  { name: 'A/AC-8 Autocannon Sentry', type: 'Defense' },
  { name: 'MD-I4 Incendiary Mines', type: 'Defense' },
  { name: 'E/MG-101 HMG Emplacement', type: 'Defense' },
];

let selectedAbilitiesState = abilities.reduce((acc, ability) => {
  acc[ability.name] = true; // Initialize all abilities as selected
  return acc;
}, {});

let selectedAbilities = [];

document.addEventListener('DOMContentLoaded', function () {
  const abilitiesContainer = document.querySelector('.abilities-container');

  // Separate abilities into three groups
  const offenseAbilities = abilities.filter((ability) => ability.type === 'Offense');
  const supportAbilities = abilities.filter((ability) => ['Weaponry', 'Ammopack', 'Backpack', 'Vehicle'].includes(ability.type));
  const defenseAbilities = abilities.filter((ability) => ability.type === 'Defense');

  // Function to create ability icons
  function createAbilityIcon(ability) {
    const abilityIcon = document.createElement('img');
    abilityIcon.src = 'img/' + ability.name.replace(/[^a-z0-9]/gi, '') + '.webp';
    abilityIcon.alt = ability.name;
    abilityIcon.title = ability.name;
    abilityIcon.classList.add('ability-icon', 'selected');
    abilityIcon.addEventListener('click', function () {
      selectedAbilitiesState[ability.name] = !selectedAbilitiesState[ability.name];
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

function getRandomAbilities(abilities, count) {
  let shuffled = abilities.sort(() => 0.5 - Math.random());
  let result = [];
  let weaponryAdded = false;
  let backpackAdded = false;
  for (let ability of shuffled) {
    if (result.length >= count) break;
    if (ability.type === 'Weaponry') {
      if (!weaponryAdded) {
        result.push(ability);
        weaponryAdded = true;
      }
    } else if (ability.type === 'Backpack') {
      if (!backpackAdded) {
        result.push(ability);
        backpackAdded = true;
      }
    } else if (ability.type === 'Ammopack') {
      if (!backpackAdded && !weaponryAdded) {
        result.push(ability);
        backpackAdded = true;
        weaponryAdded = true;
      }
    } else {
      result.push(ability);
    }
  }
  shuffled = shuffled.filter((ability) => !result.includes(ability));
  while (result.length < count) {
    result.push(shuffled.shift());
  }
  return result;
}

function displayAbilities(abilities) {
  console.log('🚀 ~ displayAbilities ~ abilities:', abilities);
  const container = document.getElementById('loadoutDisplay');
  container.innerHTML = ''; // Clear previous abilities
  abilities.forEach((ability) => {
    const div = document.createElement('div');
    div.classList.add('icon');
    var imageName = ability.name.replace(/[^a-z0-9]/gi, '') + '.webp'; // Derive image name from item name
    var imagePath = 'img/' + imageName; // Construct image path
    div.innerHTML = `<img src="${imagePath}" alt="${ability.name}" onclick="individualGeneration('${ability.name}')">`;
    container.appendChild(div);
  });
}

function individualGeneration(ability_name) {
  console.log('🚀 ~ individualGeneration ~ ability_name:', ability_name);
  console.log('🚀 ~ individualGeneration ~ selectedAbilities:', selectedAbilities);
  const availableAbilities = getAvailableAbilities().filter(function (ability) {
    return ability.name !== ability_name || !selectedAbilities.includes(ability);
  });

  const new_ability = getRandomAbilities(availableAbilities, 1);
  selectedAbilities = selectedAbilities.map((ability) => (ability.name === ability_name ? new_ability[0] : ability));
  displayAbilities(selectedAbilities);
}
