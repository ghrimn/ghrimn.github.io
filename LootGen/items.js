/* 
        coins, goods, gear, magic, weapon, armor, potion, poison, gems, arts, book, scroll

        {
            name: "name",
            cost: 00,
            tags: "tags"
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
                
        //#region MUNDANE / ADVENTURING GEAR
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
            name: "Antitoxin (vial)",
            cost: 50,
            tags: "gear magic potion poison"
        },
        {
            name: "Backpack",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Ball Bearing",
            cost: 0.001,
            tags: "gear weapon"
        },
        {
            name: "Ball Bearings (bag of 1,000)",
            cost: 1,
            tags: "gear weapon"
        },
        {
            name: "Barrel",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Basket",
            cost: 0.4,
            tags: "gear"
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
            name: "Lorebook",
            cost: 25,
            tags: "gear book",
            spec: "lore"
        },
        {
            name: "Book",
            cost: 25,
            tags: "gear book",
        },
        {
            name: "Bucket",
            cost: 0.05,
            tags: "gear"
        },
        {
            name: "Bullseye Lantern",
            cost: 10,
            tags: "gear"
        },
        {
            name: "Burglar's Pack",
            cost: 16,
            tags: "gear"
        },
        {
            name: "String (10 feet)",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Caltrop",
            cost: 0.05,
            tags: "gear weapon"
        },
        {
            name: "Caltrops (bag of 20)",
            cost: 1,
            tags: "gear weapon"
        },
        {
            name: "Candle",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Chain (10 feet)",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Chalk (1 piece)",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Chest",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Climber's Kit",
            cost: 25,
            tags: "gear"
        },
        {
            name: "Common Clothes",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Component Pouch",
            cost: 25,
            tags: "gear magic"
        },
        {
            name: "Costume Clothes",
            cost: 5,
            tags: "gear",
            spec: "costume" 
        },
        {
            name: "Crossbow Bolt Case",
            cost: 1,
            tags: "gear weapon"
        },
        {
            name: "Crowbar",
            cost: 2,
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
            name: "Fine Clothes",
            cost: 15,
            tags: "gear"
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
            name: "Glass Bottle",
            cost: 2,
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
            name: "Healer's Kit",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Hempen Rope (50 feet)",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Holy Water (flask)",
            cost: 25,
            tags: "gear magic potion"
        },
        {
            name: "Hooded Lantern",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Hourglass",
            cost: 25,
            tags: "gear"
        },
        {
            name: "Hunting Trap",
            cost: 5,
            tags: "gear weapon"
        },
        {
            name: "Ink (1-ounce bottle)",
            cost: 10,
            tags: "gear book"
        },
        {
            name: "Ink Pen",
            cost: 0.02,
            tags: "gear book"
        },
        {
            name: "Iron Pot",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Iron Spike",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Iron Spikes (10)",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Jug",
            cost: 0.02,
            tags: "gear"
        },
        {
            name: "Ladder (10-foot)",
            cost: 0.1,
            tags: "tags"
        },
        {
            name: "Lamp",
            cost: 0.5,
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
            name: "Map or Scroll Case",
            cost: 1,
            tags: "gear book"
        },
        {
            name: "Merchant's Scale",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Mess Kit",
            cost: 0.2,
            tags: "gear"
        },
        {
            name: "Miner's Pick",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Oil (flask)",
            cost: 0.1,
            tags: "gear potion poison weapon"
        },
        {
            name: "Paper (one sheet)",
            cost: 0.2,
            tags: "gear book"
        },
        {
            name: "Parchment (one sheet)",
            cost: 0.1,
            tags: "gear book"
        },
        {
            name: "Perfume (vial)",
            cost: 5,
            tags: "gear potion"
        },
        {
            name: "Pitcher",
            cost: 0.02,
            tags: "gear"
        },
        {
            name: "Piton",
            cost: 0.05,
            tags: "gear"
        },
        {
            name: "Pole (10-foot)",
            cost: 0.05,
            tags: "gear"
        },
        {
            name: "Portable Ram",
            cost: 4,
            tags: "gear weapon"
        },
        {
            name: "Pouch",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Priest's Pack",
            cost: 19,
            tags: "gear"
        },
        {
            name: "Alms Box",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Block of Incense",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Censer",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Vestments",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Quiver",
            cost: 1,
            tags: "gear weapon"
        },
        {
            name: "Rations (1 day)",
            cost: 0.5,
            tags: "gear"
        },
        {
            name: "Robes",
            cost: 1,
            tags: "gear"
        },
        {
            name: "Sack",
            cost: 0.01,
            tags: "gear"
        },
        {
            name: "Scholar's Pack",
            cost: 40,
            tags: "gear book"
        },
        {
            name: "Little Bag of Sand",
            cost: 0.1,
            tags: "gear book"
        },
        {
            name: "Small Knife",
            cost: 0.1,
            tags: "gear"
        },
        {
            name: "Sealing Wax",
            cost: 0.5,
            tags: "gear book"
        },
        {
            name: "Shovel",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Signal Whistle",
            cost: 0.05,
            tags: "gear music"
        },
        {
            name: "Signet Ring",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Silk Rope (50 feet)",
            cost: 10,
            tags: "gear"
        },
        {
            name: "Sledgehammer",
            cost: 2,
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
            name: "Spyglass",
            cost: 1000,
            tags: "gear"
        },
        {
            name: "Steel Mirror",
            cost: 5,
            tags: "gear"
        },
        {
            name: "Tankard",
            cost: 0.02,
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
            name: "Traveler's Clothes",
            cost: 2,
            tags: "gear"
        },
        {
            name: "Trinket",
            cost: 0.1,
            tags: "gear",
            spec: "trinket"
        },
        {
            name: "Two-Person Tent",
            cost: 2,
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
            tags: "gear weapon"
        },
        {
            name: "Basic Poison (vial)",
            cost: 100,
            tags: "gear magic poison"
        },
        {
            name: "Arrow",
            cost: 0.05,
            tags: "gear weapon"
        },
        {
            name: "Arrows (20)",
            cost: 1,
            tags: "gear weapon"
        },
        {
            name: "Blowgun Needle",
            cost: 0.02,
            tags: "gear weapon"
        },
        {
            name: "Blowgun Needles (50)",
            cost: 1,
            tags: "gear weapon"
        },
        {
            name: "Crossbow Bolt",
            cost: 0.05,
            tags: "gear weapon"
        },
        {
            name: "Crossbow Bolts (20)",
            cost: 1,
            tags: "gear weapon"
        },

        //#endregion
        
        //#region WEAPON
        
        //#endregion
        
        //#region ARMOR
        
        //#endregion
        
        //#region EQUIPMENT PACKS

        //#endregion
        
        //#region BACKGROUNDS

        //#endregion

        
    ];

    var lore =
    [
        "hello tetsing here",
    ]

    var costume = 
    [

    ]

    

