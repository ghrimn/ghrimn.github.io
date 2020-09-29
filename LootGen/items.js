// goods, gear, magic, weapon, armor, potion, poison, gems, arts, book, scroll
var itemList =
    [
        //COINAGE
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
        
        //ARMOR
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
        
        //WEAPON
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
        
        //MUNDANE GEAR
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
        
    ];

    var book =
    [

    ]

    var costume = 
    [

    ]
