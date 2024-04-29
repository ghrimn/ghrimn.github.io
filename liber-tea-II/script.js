function randomSelection(options, numSelections) {
    if (numSelections > options.length) {
        console.log("Error: Number of selections exceeds the number of options.");
        return [];
    }

    let selections = [];
    let weaponSelected = false;
    let backpackSelected = false;

    while (selections.length < numSelections) {
        let randomIndex = Math.floor(Math.random() * options.length);
        let randomOption = options[randomIndex];

        if (!selections.find(option => option.name === randomOption.name)) {
            if (randomOption.category === "support") {
                if (randomOption.tags.includes("weapon") && !weaponSelected) {
                    selections.push(randomOption);
                    weaponSelected = true;
                } else if (randomOption.tags.includes("backpack") && !backpackSelected) {
                    selections.push(randomOption);
                    backpackSelected = true;
                }
            } else {
                selections.push(randomOption);
            }
        }
    }

    return selections;
}

function selectRandom() {
    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            let options = [];
            Object.values(data).forEach(category => {
                if (Array.isArray(category)) {
                    options.push(...category);
                } else {
                    Object.values(category).forEach(subcategory => {
                        options.push(...subcategory);
                    });
                }
            });

            let numSelections = 4;
            let randomSelections = randomSelection(options, numSelections);
            let outputDiv = document.getElementById("randomSelections");
            outputDiv.innerHTML = "<h2>Random Selections:</h2><ul>";
            randomSelections.forEach(function(option) {
                let color;
                switch (option.category) {
                    case "offense":
                        color = "red";
                        break;
                    case "defense":
                        color = "green";
                        break;
                    case "vehicle":
                    case "support":
                        color = "blue";
                        break;
                    default:
                        color = "black";
                }
                outputDiv.innerHTML += "<li style='color: " + color + "'>" + option.name + " - Category: " + option.tags + "</li>";
            });
            outputDiv.innerHTML += "</ul>";
        })
        .catch(error => console.error('Error loading JSON:', error));
}

selectRandom();
