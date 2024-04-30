const abilities = [
  // Offensive
  { id: 'Eagle500kgBomb', name: 'Eagle 500kg Bomb', type: 'Offense' },
  { id: 'OrbitalGatlingBarrage', name: 'Orbital Gatling Barrage', type: 'Offense' },
  { id: 'EagleAirstrike', name: 'Eagle Airstrike', type: 'Offense' },
  { id: 'OrbitalWalkingBarrage', name: 'Orbital Walking Barrage', type: 'Offense' },
  { id: 'EagleStrafingRun', name: 'Eagle Strafing Run', type: 'Offense' },
  { id: 'OrbitalEMSStrike', name: 'Orbital EMS Strike', type: 'Offense' },
  { id: 'EagleSmokeStrike', name: 'Eagle Smoke Strike', type: 'Offense' },
  { id: 'OrbitalGasStrike', name: 'Orbital Gas Strike', type: 'Offense' },
  { id: 'OrbitalRailcannonStrike', name: 'Orbital Railcannon Strike', type: 'Offense' },
  { id: 'EagleClusterBomb', name: 'Eagle Cluster Bomb', type: 'Offense' },
  { id: 'OrbitalSmokeStrike', name: 'Orbital Smoke Strike', type: 'Offense' },
  { id: 'OrbitalAirburstStrike', name: 'Orbital Airburst Strike', type: 'Offense' },
  { id: 'OrbitalLaser', name: 'Orbital Laser', type: 'Offense' },
  { id: 'OrbitalPrecisionStrike', name: 'Orbital Precision Strike', type: 'Offense' },
  { id: 'Orbital380mmHEBarrage', name: 'Orbital 380mm HE Barrage', type: 'Offense' },
  { id: 'EagleNapalmAirstrike', name: 'Eagle Napalm Airstrike', type: 'Offense' },
  { id: 'Orbital120mmHEBarrage', name: 'Orbital 120mm HE Barrage', type: 'Offense' },
  { id: 'Eagle110mmRocketPods', name: 'Eagle 110mm Rocket Pods', type: 'Offense' },

  // Support Weapons
  { id: 'M105Stalwart', name: 'M-105 Stalwart', type: 'Weaponry' },
  { id: 'AC8Autocannon', name: 'AC-8 Autocannon', type: 'Ammopack' },
  { id: 'EXO45PatriotExosuit', name: 'EXO-45 Patriot Exosuit', type: 'Vehicle' },
  { id: 'MG206HeavyMachineGun', name: 'MG-206 Heavy Machine Gun', type: 'Weaponry' },
  { id: 'SH32ShieldGeneratorPack', name: 'SH-32 Shield Generator Pack', type: 'Backpack' },
  { id: 'RL77AirburstRocketLauncher', name: 'RL-77 Airburst Rocket Launcher', type: 'Ammopack' },
  { id: 'RS422Railgun', name: 'RS-422 Railgun', type: 'Weaponry' },
  { id: 'LAS98LaserCannon', name: 'LAS-98 Laser Cannon', type: 'Weaponry' },
  { id: 'ARC3ArcThrower', name: 'ARC-3 Arc Thrower', type: 'Weaponry' },
  { id: 'AXAR23GuardDog', name: "AX/AR-23 'Guard Dog'", type: 'Backpack' },
  { id: 'FAF14Spear', name: 'FAF-14 Spear', type: 'Ammopack' },
  { id: 'GL21GrenadeLauncher', name: 'GL-21 Grenade Launcher', type: 'Weaponry' },
  { id: 'MG43MachineGun', name: 'MG-43 Machine Gun', type: 'Weaponry' },
  { id: 'SH20BallisticShieldBackpack', name: 'SH-20 Ballistic Shield Backpack', type: 'Backpack' },
  { id: 'B1SupplyPack', name: 'B-1 Supply Pack', type: 'Backpack' },
  { id: 'FLAM40Flamethrower', name: 'FLAM-40 Flamethrower', type: 'Weaponry' },
  { id: 'AXLAS5GuardDogRover', name: "AX/LAS-5 'Guard Dog' Rover", type: 'Backpack' },
  { id: 'GR8RecoillessRifle', name: 'GR-8 Recoilless Rifle', type: 'Ammopack' },
  { id: 'Lift850JumpPack', name: 'Lift-850 Jump Pack', type: 'Backpack' },
  { id: 'APW1AntiMaterielRifle', name: 'APW-1 Anti-Materiel Rifle', type: 'Weaponry' },
  { id: 'EAT17ExpendableAntiTank', name: 'EAT-17 Expendable Anti-Tank', type: 'Weaponry' },
  { id: 'LAS99QuasarCannon', name: 'LAS-99 Quasar Cannon', type: 'Weaponry' },

  // Defensive
  { id: 'FX12ShieldGeneratorRelay', name: 'FX-12 Shield Generator Relay', type: 'Defense' },
  { id: 'AM23EMSMortarSentry', name: 'A/M-23 EMS Mortar Sentry', type: 'Defense' },
  { id: 'AMLS4XRocketSentry', name: 'A/MLS-4X Rocket Sentry', type: 'Defense' },
  { id: 'AG16GatlingSentry', name: 'A/G-16 Gatling Sentry', type: 'Defense' },
  { id: 'AARC3TeslaTower', name: 'A/ARC-3 Tesla Tower', type: 'Defense' },
  { id: 'AM12MortarSentry', name: 'A/M-12 Mortar Sentry', type: 'Defense' },
  { id: 'MD6AntiPersonnelMinefield', name: 'MD-6 Anti-Personnel Minefield', type: 'Defense' },
  { id: 'AMG43MachineGunSentry', name: 'A/MG-43 Machine Gun Sentry', type: 'Defense' },
  { id: 'AAC8AutocannonSentry', name: 'A/AC-8 Autocannon Sentry', type: 'Defense' },
  { id: 'MDI4IncendiaryMines', name: 'MD-I4 Incendiary Mines', type: 'Defense' },
  { id: 'EMG101HMGEmplacement', name: 'E/MG-101 HMG Emplacement', type: 'Defense' },
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
    abilityIcon.src = `img/${ability.id}.webp`;
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

function getAvailableRules(rules, selectedAbilities) {
  return rules.filter((rule) => selectedAbilities.some((ability) => rule.abilities.includes(ability.name)));
}

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
    div.innerHTML = `<img src="${imagePath}" alt="${ability.name}" onclick="individualGeneration('${ability.id}')">`;
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
  selectedAbilities = selectedAbilities.map((ability) => (ability.id === ability_id ? new_ability[0] : ability));
  displayAbilities(selectedAbilities);
}
