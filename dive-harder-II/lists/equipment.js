const equipment = [
  {
    warbond: "Standard Issue",
    items: [
      { type: "armoury", name: "B-01 Tactical", cape: "Foesmasher", vars: [{ name: "B-02 Tactical", cape: "Emblem of Freedom" }, { name: "B-03 Tactical", cape: "Drape of Glory" }, { name: "B-04 Tactical" }] },

      { type: "primary", name: "AR-23 Liberator" },

      { type: "sidearm", name: "P-2 Peacemaker" },

      { type: "throwed", name: "G-12 High Explosive" }
    ]
  },
  {
    warbond: "Helldivers Mobilize",
    items: [
      { type: "armoury", name: "SC-34 Infiltrator", cape: "Independence Bringer" },
      { type: "armoury", name: "FS-05 Marksman", cape: "Liberty's Herald" },
      { type: "armoury", name: "CE-35 Trench Engineer", cape: "Tideturner" },
      { type: "armoury", name: "CM-09 Bonesnapper", cape: "Cape of Stars and Suffrage" },
      { type: "armoury", name: "DP-40 Hero of the Federation", cape: "Unblemished Allegiance" },
      { type: "armoury", name: "FS-23 Battle Master", cape: "Judgment Day" },
      { type: "armoury", name: "SC-30 Trailblazer Scout", cape: "Cresting Honor" },
      { type: "armoury", name: "SA-04 Combat Technician", cape: "Mantle of True Citizenship" },
      { type: "armoury", name: "CM-14 Physician", cape: "Blazing Samaritan" },
      { type: "armoury", name: "DP-11 Champion of the People", cape: ["Light of Eternal Liberty", "Fallen Hero's Vengeance"] },

      { type: "primary", name: "SG-8 Punisher" },
      { type: "primary", name: "R-63 Diligence" },
      { type: "primary", name: "SMG-37 Defender" },
      { type: "primary", name: "SG-225 Breaker" },
      { type: "primary", name: "LAS-5 Scythe" },
      { type: "primary", name: "AR-23P Liberator Penetrator" },
      { type: "primary", name: "R-63CS Diligence Counter Sniper" },
      { type: "primary", name: "SG-8S Slugger" },
      { type: "primary", name: "SG-225SP Breaker Spray&Pray" },
      { type: "primary", name: "PLAS-1 Scorcher" },

      { type: "sidearm", name: "P-19 Redeemer" },

      { type: "throwed", name: "G-6 Frag" },
      { type: "throwed", name: "G-16 Impact" },
      { type: "throwed", name: "G-3 Smoke" },

      { type: "booster", name: "Hellpod Space Optimization" },
      { type: "booster", name: "Vitality Enhancement" },
      { type: "booster", name: "UAV Recon Booster" },
      { type: "booster", name: "Stamina Enhancement" },
      { type: "booster", name: "Muscle Enhancement" },
      { type: "booster", name: "Increased Reinforcement Budget" }
    ]
  },
  {
    warbond: "Steeled Veterans",
    items: [
      { type: "armoury", name: "SA-25 Steel Trooper", cape: "Tyrant Hunter" },
      { type: "armoury", name: "SA-12 Servo Assisted", cape: "Cloak of Posterity's Gratitude" },
      { type: "armoury", name: "SA-32 Dynamo", cape: "Bastion of Integrity" },

      { type: "primary", name: "AR-23C Liberator Concussive" },
      { type: "primary", name: "SG-225IE Breaker Incendiary" },
      { type: "primary", name: "JAR-5 Dominator" },

      { type: "sidearm", name: "P-4 Senator" },

      { type: "throwed", name: "G-10 Incendiary" },

      { type: "booster", name: "Flexible Reinforcement Budget" }
    ]
  },
  {
    warbond: "Cutting Edge",
    items: [
      { type: "armoury", name: "EX-03 Prototype 3", cape: "Botslayer" },
      { type: "armoury", name: "EX-16 Prototype 16", cape: "Martyris Rex" },
      { type: "armoury", name: "EX-00 Prototype X", cape: "Agent of Oblivion" },

      { type: "primary", name: "LAS-16 Sickle" },
      { type: "primary", name: "SG-8P Punisher Plasma" },
      { type: "primary", name: "ARC-12 Blitzer" },

      { type: "sidearm", name: "LAS-7 Dagger" },

      { type: "throwed", name: "G-23 Stun" },

      { type: "booster", name: "Localization Confusion" }
    ]
  },
  {
    warbond: "Democratic Detonation",
    items: [
      { type: "armoury", name: "CE-27 Ground Breaker", cape: "Harbinger of True Equality" },
      { type: "armoury", name: "CE-07 Demolition Specialist", cape: "Eagle's Fury" },
      { type: "armoury", name: "FS-55 Devastator", cape: "Freedom's Tapestry" },

      { type: "primary", name: "BR-14 Adjudicator" },
      { type: "primary", name: "R-36 Eruptor" },
      { type: "primary", name: "CB-9 Exploding Crossbow" },

      { type: "sidearm", name: "GP-31 Grenade Pistol" },

      { type: "throwed", name: "G-123 Thermite" },

      { type: "booster", name: "Expert Extraction Pilot" }
    ]
  },
  {
    warbond: "Polar Patriots",
    items: [
      { type: "armoury", name: "CW-36 Winter Warrior", cape: "Dissident's Nightmare" },
      { type: "armoury", name: "CW-22 Kodiak", cape: "Pinions of Everlasting Glory" },
      { type: "armoury", name: "CW-4 Arctic Ranger", cape: "Order of the Venerated Ballot" },

      { type: "primary", name: "AR-61 Tenderizer" },
      { type: "primary", name: "SMG-72 Pummeler" },
      { type: "primary", name: "PLAS-101 Purifier" },

      { type: "sidearm", name: "P-113 Verdict" },

      { type: "throwed", name: "G-13 Incendiary Impact" },

      { type: "booster", name: "Motivational Shocks" }
    ]
  },
  {
    warbond: "Viper Commandos",
    items: [
      { type: "armoury", name: "PH-9 Predator", cape: "Mark of the Crimson Fang" },
      { type: "armoury", name: "PH-202 Twigsnapper", cape: "Executioner's Canopy" },

      { type: "primary", name: "AR-23A Liberator Carbine" },

      { type: "sidearm", name: "SG-22 Bushwhacker" },

      { type: "throwed", name: "K-2 Throwing Knife" },

      { type: "booster", name: "Experimental Infusion" }
    ]
  },
  {
    warbond: "Freedom's Flame",
    items: [
      { type: "armoury", name: "I-09 Heatseeker", cape: "Purifying Eclipse" },
      { type: "armoury", name: "I-102 Draconaught", cape: "The Breach" },

      { type: "primary", name: "SG-451 Cookout" },
      { type: "primary", name: "FLAM-66 Torcher" },

      { type: "sidearm", name: "P-72 Crisper" },

      { type: "booster", name: "Firebomb Hellpods" }
    ]
  },
  {
    warbond: "Chemical Agents",
    items: [
      { type: "armoury", name: "AF-50 Noxious Ranger", cape: "Standard of Safe Distance" },
      { type: "armoury", name: "AF-02 Haz-Master", cape: "Patient Zero's Remembrance" },

      { type: "sidearm", name: "P-11 Stim Pistol" },

      { type: "throwed", name: "G-4 Gas" },
    ]
  },
  {
    warbond: "Truth Enforcers",
    items: [
      { type: "armoury", name: "UF-50 Bloodhound", cape: "Pride of the Whistleblower" },
      { type: "armoury", name: "UF-16 Inspector", cape: "Proof of Faultless Virtue" },

      { type: "primary", name: "SG-20 Halt" },
      { type: "primary", name: "SMG-32 Reprimand" },

      { type: "sidearm", name: "PLAS-15 Loyalist" },

      { type: "booster", name: "Dead Sprint" }
    ]
  },
  {
    warbond: "Urban Legends",
    items: [
      { type: "armoury", name: "SR-24 Street Scout", cape: "Greatcloak of Rebar Resolve" },
      { type: "armoury", name: "SR-18 Roadblock", cape: "Holder of the Yellow Line" },

      { type: "sidearm", name: "CQC-19 Stun Lance" },

      { type: "booster", name: "Armed Resupply Pods" }
    ]
  },
  {
    warbond: "Servants of Freedom",
    items: [
      { type: "armoury", name: "IE-3 Martyr", cape: "Fre Liberam" },
      { type: "armoury", name: "IE-12 Righteous", cape: "Per Democrasum" },

      { type: "primary", name: "LAS-17 Double-Edge Sickle" },

      { type: "sidearm", name: "GP-31 Ultimatum" },

      { type: "throwed", name: "G-50 Seeker" },
    ]
  },
  {
    warbond: "Borderline Justice",
    items: [
      { type: "armoury", name: "GS-17 Frontier Marshal", cape: "Reaper of Bounties" },
      { type: "armoury", name: "GS-66 Lawmaker", cape: "Way of the Bandolier" },

      { type: "primary", name: "R-6 Deadeye" },

      { type: "sidearm", name: "LAS-58 Talon" },

      { type: "throwed", name: "TED-63 Dynamite" },

      { type: "booster", name: "Sample Extricator" }
    ]
  },
  {
    warbond: "Masters of Ceremony",
    items: [
      { type: "armoury", name: "RE-2310 Honorary Guard", cape: "Federation's Embrace" },
      { type: "armoury", name: "RE-1861 Parade Commander", cape: "Humble Regalia" },

      { type: "primary", name: "R-2 Amendment" },

      { type: "sidearm", name: "CQC-2 Saber" },

      { type: "throwed", name: "G-142 Pyrotech" },

      { type: "booster", name: "Sample Scanner" }
    ]
  },
  {
    warbond: "Force of Law",
    items: [
      { type: "armoury", name: "BP-20 Correct Officer", cape: "Miranda's Legacy" },
      { type: "armoury", name: "BP-32 Jackboot", cape: "Mother Eagle's Wings" },

      { type: "primary", name: "AR-32 Pacifier" },

      { type: "throwed", name: "G-109 Urchin" },

      { type: "booster", name: "Stun Pods" }
    ]
  },
  {
    warbond: "Miscellaneous",
    items: [
      { type: "armoury", name: "DP-53 Savior of the Free", cape: "Will of the People" },
      { type: "armoury", name: "TR-40 Gold Eagle", cape: "Foesmasher" },
      { type: "armoury", name: "DP-00 Tactical", cape: "Foesmasher" },
      { type: "armoury", name: "TR-117 Alpha Commander", cape: "Agent of Oblivion" },
      { type: "armoury", name: "B-22 Model Citizen", cape: "Eye of Freedom" },

      // { type: "armoury", name: "CE-81 Juggernaut",          cape: "" },
      // { type: "armoury", name: "FS-34 Exterminator",        cape: "" },
      // { type: "armoury", name: "FS-11 Executioner",         cape: "" },
      // { type: "armoury", name: "CM-21 Trench Paramedic",    cape: "" },
      // { type: "armoury", name: "B-08 Light Gunner",         cape: "" },
      // { type: "armoury", name: "FS-61 Dreadnought",         cape: "" },

      // { type: "armoury", name: "B-27 Fortified Commando",   cape: "" },
      // { type: "armoury", name: "FS-38 Eradicator",          cape: "" },
      // { type: "armoury", name: "B-24 Enforcer",             cape: "" },
      // { type: "armoury", name: "CE-74 Breaker",             cape: "" },
      // { type: "armoury", name: "SC-37 Legionnaire",         cape: "" },
      // { type: "armoury", name: "SC-15 Drone Master",        cape: "" },

      // { type: "armoury", name: "CM-17 Butcher",             cape: "" },
      // { type: "armoury", name: "CE-67 Titan",               cape: "" },

      // { type: "armoury", name: "CM-10 Clinician",           cape: "" },
      // { type: "armoury", name: "FS-37 Ravager",             cape: "" },

      // { type: "armoury", name: "CW-9 White Wolf",           cape: "" },
      // { type: "armoury", name: "CE-64 Grenadier",           cape: "" },

      // { type: "armoury", name: "PH-56 Jaguar",              cape: "" },
      // { type: "armoury", name: "CE-101 Guerilla Gorilla",   cape: "" },

      // { type: "armoury", name: "I-44 Salamander",           cape: "" },
      { type: "armoury", name: "I-92 Fire Fighter", cape: "Order of the Venerated Ballot" },

      // { type: "armoury", name: "AF-52 Lockdown",            cape: "" },
      // { type: "armoury", name: "AF-91 Field Chemist",       cape: "" },

      { type: "armoury", name: "UF-84 Doubt Killer", cape: "Cover of Darkness" },
      { type: "armoury", name: "SR-64 Cinderblock", cape: "Stone-Wrought Perseverance" },
      { type: "armoury", name: "IE-57 Hell-Bent", cape: "Vision of Freedom" },
      { type: "armoury", name: "GS-11 Democracy's Deputy", cape: "Veil of the Valorous Vagabond" },
      { type: "armoury", name: "RE-824 Bearer of the Standard", cape: "Seal of General Consensus" },
      { type: "armoury", name: "BP-77 Grand Juror", cape: "Badge of Order" },

      { type: "primary", name: "MP-98 Knight" },
      { type: "primary", name: "R-2124 Constitution" },

      { type: "sidearm", name: "CQC-30 Stun Baton" },
      { type: "sidearm", name: "CQC-5 Combat Hatchet" },
      { type: "sidearm", name: "P-92 Warrant" },
    ]
  },
  {
    warbond: "Helldivers x Killzone",
    items: [
      { type: "armoury", name: "AC-1 Dutiful", cape: "Strength in Our Arms" },
      { type: "armoury", name: "AC-2 Obedient", cape: "Defender of Our Dream" },

      { type: "primary", name: "StA-52 Assault Rifle" },
      { type: "primary", name: "PLAS-39 Accelerator Rifle" },
      { type: "primary", name: "StA-11 SMG" },
    ]
  },
];

/*
  {
    warbond: "",
    items: [
      { type: "armoury", name: "", cape: "" },

      { type: "primary", name: "" },

      { type: "sidearm", name: "" },

      { type: "throwed", name: "" },

      { type: "booster", name: "" }
    ]
  },
*/