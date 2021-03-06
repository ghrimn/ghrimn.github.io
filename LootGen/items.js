// goods, gear, magic, weapon, armor, potion, poison, gems, arts, book, scroll

/*
        {
            name: "item",
            cost: 0,
            tags: "type"
        },
*/
var itemList =
    [
        //#region COINAGE 
        {
            name: "cp",
            cost: 0.01,
            tags: "coins"
        },
        {
            name: "sp",
            cost: 0.1,
            tags: "coins"
        },
        {
            name: "ep",
            cost: 0.5,
            tags: "coins"
        },
        {
            name: "gp",
            cost: 1,
            tags: "coins"
        },
        {
            name: "pp",
            cost: 10,
            tags: "coins"
        },
        //#endregion
        
        //#region ARMOR
        {
            name: "Padded Armor",
            cost: 5,
            tags: "armor"
        },
        {
            name: "Leather Armor",
            cost: 10,
            tags: "armor"
        },
        {
            name: "Studded Leather Armor",
            cost: 45,
            tags: "armor"
        },
        {
            name: "Hide Armor",
            cost: 10,
            tags: "armor"
        },
        {
            name: "Chain Shirt",
            cost: 50,
            tags: "armor"
        },
        {
            name: "Scale Mail Armor",
            cost: 50,
            tags: "armor"
        },
        {
            name: "Breastplate",
            cost: 400,
            tags: "armor"
        },
        {
            name: "Half Plate Armor",
            cost: 750,
            tags: "armor"
        },
        {
            name: "Ring Mail Armor",
            cost: 30,
            tags: "armor"
        },
        {
            name: "Chain Mail Armor",
            cost: 75,
            tags: "armor"
        },
        {
            name: "Splint Armor",
            cost: 400,
            tags: "armor"
        },
        {
            name: "Plate Armor",
            cost: 1500,
            tags: "armor"
        },
        {
            name: "Shield",
            cost: 10,
            tags: "armor weapon"
        },
        //#endregion
        
        //#region WEAPON
        {
            name: "Club",
            cost: 0.1,
            tags: "weapon"
        },
        {
            name: "Dagger",
            cost: 2,
            tags: "weapon"
        },
        {
            name: "Greatclub",
            cost: 0.2,
            tags: "weapon"
        },
        {
            name: "Handaxe",
            cost: 5,
            tags: "weapon"
        },
        {
            name: "Javelin",
            cost: 0.5,
            tags: "weapon"
        },
        {
            name: "Light Hammer",
            cost: 2,
            tags: "weapon"
        },
        {
            name: "Mace",
            cost: 5,
            tags: "weapon"
        },
        {
            name: "Quarterstaff",
            cost: 0.2,
            tags: "weapon"
        },
        {
            name: "Sickle",
            cost: 1,
            tags: "weapon"
        },
        {
            name: "Spear",
            cost: 1,
            tags: "weapon"
        },
        {
            name: "Crossbow, Light",
            cost: 25,
            tags: "weapon"
        },
        {
            name: "Dart",
            cost: 0.05,
            tags: "weapon"
        },
        {
            name: "Shortbow",
            cost: 25,
            tags: "weapon"
        },
        {
            name: "Sling",
            cost: 0.1,
            tags: "weapon"
        },
        {
            name: "Battleaxe",
            cost: 10,
            tags: "weapon"
        },
        {
            name: "Flail",
            cost: 10,
            tags: "weapon"
        },
        {
            name: "Glaive",
            cost: 20,
            tags: "weapon"
        },
        {
            name: "Greataxe",
            cost: 30,
            tags: "weapon"
        },
        {
            name: "Greatsword",
            cost: 50,
            tags: "weapon"
        },
        {
            name: "Halberd",
            cost: 20,
            tags: "weapon"
        },
        {
            name: "Lance",
            cost: 10,
            tags: "weapon"
        },
        {
            name: "Longsword",
            cost: 15,
            tags: "weapon"
        },
        {
            name: "Maul",
            cost: 10,
            tags: "weapon"
        },
        {
            name: "Morningstar",
            cost: 15,
            tags: "weapon"
        },
        {
            name: "Pike",
            cost: 5,
            tags: "weapon"
        },
        {
            name: "Rapier",
            cost: 25,
            tags: "weapon"
        },
        {
            name: "Scimitar",
            cost: 25,
            tags: "weapon"
        },
        {
            name: "Shortsword",
            cost: 10,
            tags: "weapon"
        },
        {
            name: "Trident",
            cost: 5,
            tags: "weapon"
        },
        {
            name: "War Pick",
            cost: 5,
            tags: "weapon"
        },
        {
            name: "Warhammer",
            cost: 15,
            tags: "weapon"
        },
        {
            name: "Whip",
            cost: 2,
            tags: "weapon"
        },
        {
            name: "Blowgun",
            cost: 10,
            tags: "weapon"
        },
        {
            name: "Crossbow, Hand",
            cost: 75,
            tags: "weapon"
        },
        {
            name: "Crossbow, Heavy",
            cost: 50,
            tags: "weapon"
        },
        {
            name: "Longbow",
            cost: 50,
            tags: "weapon"
        },
        {
            name: "Net",
            cost: 1,
            tags: "weapon gear"
        },
        //#endregion
        
        //#region MUNDANE GEAR
        {
            name: "Abacus",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Acid (vial)",
            cost: 25,
            tags: "gear magic potion poison"
        },
        {
            name: "Alchemist's Fire (flask)",
            cost: 50,
            tags: "gear magic potion"
        },
        {
            name: "Arrow",
            cost: 0.05,
            tags: "gear weapon"
        },
        {
            name: "Blowgun Needle",
            cost: 0.05,
            tags: "gear weapon"
        },
        {
            name: "Crossbow Bolt",
            cost: 0.05,
            tags: "gear weapon"
        },
        {
            name: "Sling Bullet",
            cost: 0.01,
            tags: "gear weapon"
        },
        {
            name: "Antitoxin (vial)",
            cost: 50,
            tags: "gear magic potion poison"
        },
        {
            name: "Crystal, Focus",
            cost: 10,
            tags: "gear magic"
        },
        {
            name: "Orb, Focus",
            cost: 20,
            tags: "gear magic"
        },
        {
            name: "Rod, Focus",
            cost: 10,
            tags: "gear magic"
        },
        {
            name: "Staff, Focus",
            cost: 5,
            tags: "gear magic"
        },
        {
            name: "Wand, Focus",
            cost: 10,
            tags: "gear magic"
        },
        {
            name: "Backpack",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Ball Bearings (bag)",
            cost: 1,
            tags: "gear weapon"
        },
        {
            name: "Bedroll",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Bell",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Blanket",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Block and Tackle",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Book",
            cost: 25,
            tags: "gear book",
            spec: "book"
        },
        {
            name: "Bottle, Glass",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Caltrops (bag)",
            cost: 1,
            tags: "gear weapon"
        },
        {
            name: "Candle",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Case, Crossbow Bolt",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Case, Map or Scroll",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Chain (10 ft.)",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Chalk (piece)",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Climber's Kit",
            cost: 25,
            tags: "gear"
        },
        {
            name: "Clothes, Common",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Clothes, Costume",
            cost: 5,
            tags: "gear",
            spec: "costume" 
        },
        {
            name: "Clothes, Fine",
            cost: 15,
            tags: "gear"
        },
        {
            name: "Clothes, Traveler's",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Component Pouch",
            cost: 25,
            tags: "gear magic"
        },
        {
            name: "Crowbar",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Sprig of Mistletoe, Focus",
            cost: 1,
            tags: "gear magic"
        },
        {
            name: "Totem, Focus",
            cost: 1,
            tags: "gear magic"
        },
        {
            name: "Wooden Staff, Focus",
            cost: 5,
            tags: "gear magic"
        },
        {
            name: "Yew Wand, Focus",
            cost: 10,
            tags: "gear magic"
        },
        {
            name: "Fishing Tackle",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Flask",
            cost: 0.02,
            tags: "gear potion poison"
        },
        {
            name: "Grappling Hook",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Hammer",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Hammer, Sledge",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Healer's Kit",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Amulet, Focus",
            cost: 5,
            tags: "gear magic"
        },
        {
            name: "Emblem, Focus",
            cost: 5,
            tags: "gear magic"
        },
        {
            name: "Reliquary, Focus",
            cost: 5,
            tags: "gear magic"
        },
         {
            name: "Holy Water (flask)",
            cost: 25,
            tags: "gear magic potion"
        },
        {
            name: "Hourglass",
            cost: 25,
            tags: "gear magic"
        },
        {
            name: "Hunting Trap",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Ink, Bottle",
            cost: 10,
            tags: "gear book"
        },
        {
            name: "Ink Pen",
            cost: 0.02,
            tags: "gear book"
        },
        {
            name: "Ladder (10 ft.)",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Lamp",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Lantern, Bullseye",
            cost: 10,
            tags: "gear"
        },
        {
            name: "Lantern, Hooded",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Lock",
            cost: 10,
            tags: "gear"
        },
        {
            name: "Magnifying Glass",
            cost: 100,
            tags: "gear"
        },
        {
            name: "Manacles",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Mess Kit",
            cost: 0.2,
            tags: "gear"
        },
        {
            name: "Mirror, Steel",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Oil, (flask)",
            cost: 0.1,
            tags: "gear weapon"
        },
        {
            name: "Paper, Sheet",
            cost: 0.2,
            tags: "gear book"
        },
        {
            name: "Parchment, Sheet",
            cost: 0.1,
            tags: "gear book"
        },
        {
            name: "Perfume (vial)",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Pick, Miner's",
            cost: 2,
            tags: "gear"
        },{
            name: "Piton",
            cost: 0.05,
            tags: "gear"
        },
        {
            name: "Poison, Basic (vial)",
            cost: 100,
            tags: "gear poison"
        },
        {
            name: "Pole (10 ft.)",
            cost: 0.05,
            tags: "gear"
        },
        {
            name: "Potion of Healing",
            cost: 50,
            tags: "gear magic potion"
        },
        {
            name: "Pouch",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Quiver",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Ram, Portable",
            cost: 4,
            tags: "gear weapon"
        },
        {
            name: "Ration",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Robes",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Rope, Hempen (50 ft.)",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Rope, Silk (50 ft.)",
            cost: 10,
            tags: "gear"
        },
        {
            name: "Sack",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Scale, Merchant's",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Sealing Wax",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Shovel",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Signal Whistle",
            cost: 0.05,
            tags: "gear"
        },
        {
            name: "Signet Ring",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Soap",
            cost: 0.02,
            tags: "gear"
        },
        {
            name: "Spellbook",
            cost: 50,
            tags: "gear magic"
        },
        {
            name: "Manacles",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Spike, Iron ",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Spyglass",
            cost: 1000,
            tags: "gear"
        },
        {
            name: "Tent, Two-Person",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Tinderbox",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Torch",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Vial",
            cost: 1,
            tags: "gear potion poison"
        },
        {
            name: "Waterskin",
            cost: 0.2,
            tags: "gear"
        },
        {
            name: "Whetstone",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "String (10 ft.)",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Alms Box",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Block of Incense",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Censer",
            cost: 0.01,
            tags: "type"
        },
        {
            name: "Vestments",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Chest",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Little Bag of Sand",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Small Knife",
            cost: 0.01,
            tags: "gear"
        },
        //#endregion
        
        //#region EQUIPMENT PACKS
        {
            name: "Burglar's Pack",
            cost: 16,
            tags: "gear"
        },
        {
            name: "Diplomat's Pack",
            cost: 39,
            tags: "gear"
        },
        {
            name: "Dungeoneer's Pack",
            cost: 12,
            tags: "gear"
        },
        {
            name: "Entertainer's Pack",
            cost: 40,
            tags: "gear"
        },
        {
            name: "Explorer's Pack",
            cost: 10,
            tags: "gear"
        },
        {
            name: "Priest's Pack",
            cost: 19,
            tags: "gear"
        },
        {
            name: "Scholar's Pack",
            cost: 40,
            tags: "gear"
        },
        //#endregion

        
    ];

    var book =
    [

    ]

    var costume = 
    [

    ]
