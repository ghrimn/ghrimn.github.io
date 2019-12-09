var change = function () //show item tags only if exchanging coins for items
{
    var item_type = document.getElementById("type");

    if (document.getElementById("zero").checked == true)
    {
        item_type.style.display = "none";
    }
    else
    {
        item_type.style.display = "block";
    }
};


function minmax() // set min or max value if value is outside
{

    if (document.getElementById("itemcap").value > 100)
    {
        document.getElementById("itemcap").value = 100;
    }
    if (document.getElementById("itemcap").value < 1)
    {
        document.getElementById("itemcap").value = 1;
    }
};

function checkall(source) //check or uncheck all item tags
{
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

function capnum() //disable max number if no items are checked
{
    var checked = document.querySelectorAll('input.itemtags:checked');
    if (checked.length == 0)
    {
        document.getElementById("itemcap").disabled = true;
    }
    else
    {
        document.getElementById("itemcap").disabled = false;
    }
}

var toggle = true;
function toggleOptions() //hide or show options
{
    var optionsDiv = document.getElementById('settings');
    if (toggle === true)
    {
        toggle = false;
        optionsDiv.style.display = "none";
        document.getElementById("options").innerText = "Show Options"
    } else
    {
        toggle = true;
        optionsDiv.style.display = "block";
        document.getElementById("options").innerText = "Hide Options"

    }
}

function discord_message(message) //send message to discord
{/*
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discordapp.com/api/webhooks/638401815259381762/CQ4VZlkB0La4uzee03m22ns2GPgquaPBA1AOGgRjlBhEcRRLffvTeP9Pde3wIeQtt2Gi", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "embeds": [{
            "description": message,
            "color": 16777215
        }]
    }));
*/}

function copyLoot() //copy loot to clipboard
{

    // Create an auxiliary hidden input
    var aux = document.createElement("textarea");

    // Get the text from the element passed into the input
    aux.value = "**Loot:**\n```\n" + document.getElementById("treasuretext").innerText + "```";
    // Append the aux input to the body
    document.body.appendChild(aux);

    discord_message(document.getElementById("treasuretext").innerText);

    // Highlight the content
    aux.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the input from the body
    document.body.removeChild(aux);
}



//where the magic happens!
var MAIN = function ()
{
    var d100 = Math.ceil(Math.random() * 100); //d100 roll for loot
    var max_loot; //maximum value of loot
    var coinArray = ["cp", "sp", "ep", "gp", "pp"]; //different type of coins
    var coinType; //a variable that will get the value of coinpos later on.

    //#region dicebag (array of dice rolls), dicesum (sum of array values), coinpos (cointype of each array)
    var dicebag1 = [];
    var dicesum1;
    var coinpos1;

    var dicebag2 = [];
    var dicesum2;
    var coinpos2;

    var dicebag3 = [];
    var dicesum3;
    var coinpos3;

    var dicebag4 = [];
    var dicesum4;
    var coinpos4;
    //#endregion

    //#region Individual Treasure
    //#region Challenge 0-4 (roll for loot) 
    if (document.getElementById("0-4").checked == true) //get value of loot challenge
    {
        if (1 <= d100 && d100 <= 30) //check value of d100
        {
            for (var i = 0; i < 5; i++) //repeat for number of dice
            {
                dicebag1.push(Math.ceil(Math.random() * 6)); //send values to array
            }
            max_loot = dicebag1.reduce((a, b) => a + b, 0) //sum values in array

            dicesum1 = max_loot; //set coin quantity
            max_loot = max_loot / 100; //set currency value
            coinpos1 = 5; //set coin type

        }

        /* --> everything that sets the total loot value will function under the same rules with some alterations <-- */

        else if (31 <= d100 && d100 <= 60)
        {
            for (var i = 0; i < 4; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            max_loot = dicebag1.reduce((a, b) => a + b, 0)

            dicesum1 = max_loot;
            max_loot = max_loot / 10;
            coinpos1 = 4;
        }
        else if (61 <= d100 && d100 <= 70)
        {
            for (var i = 0; i < 3; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            max_loot = dicebag1.reduce((a, b) => a + b, 0)

            dicesum1 = max_loot;
            max_loot = max_loot / 2;
            coinpos1 = 3;
        }
        else if (71 <= d100 && d100 <= 95)
        {
            for (var i = 0; i < 3; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            max_loot = dicebag1.reduce((a, b) => a + b, 0)

            dicesum1 = max_loot;
            coinpos1 = 2;
        }
        else if (96 <= d100 && d100 <= 100)
        {
            dicebag1.push(Math.ceil(Math.random() * 6));
            max_loot = dicebag1.reduce((a, b) => a + b, 0)

            dicesum1 = max_loot;
            max_loot = max_loot * 10
            coinpos1 = 1;
        }
    }
    //#endregion 

    //#region  Challenge 5-10 (roll for loot)
    else if (document.getElementById("5-10").checked == true)
    {
        if (1 <= d100 && d100 <= 30)
        {
            for (var i = 0; i < 4; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)

            dicebag2.push(Math.ceil(Math.random() * 6));
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)

            dicesum1 = dicesum1 * 100;
            dicesum2 = dicesum2 * 10;

            coinpos1 = 5;
            coinpos2 = 3;

            max_loot = (dicesum1 / 100) + (dicesum2 / 2);
        }
        else if (31 <= d100 && d100 <= 60)
        {
            for (var i = 0; i < 6; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)

            for (var i = 0; i < 2; i++)
            {
                dicebag2.push(Math.ceil(Math.random() * 6));
            }
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)

            dicesum1 = dicesum1 * 10;
            dicesum2 = dicesum2 * 10;

            coinpos1 = 4;
            coinpos2 = 2;

            max_loot = (dicesum1 / 10) + (dicesum2);
        }
        else if (61 <= d100 && d100 <= 70)
        {
            dicebag1.push(Math.ceil(Math.random() * 6));
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)

            for (var i = 0; i < 2; i++)
            {
                dicebag2.push(Math.ceil(Math.random() * 6));
            }
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)

            dicesum1 = dicesum1 * 100;
            dicesum2 = dicesum2 * 10;

            coinpos1 = 3;
            coinpos2 = 2;

            max_loot = (dicesum1 / 2) + (dicesum2);
        }
        else if (71 <= d100 && d100 <= 95)
        {
            for (var i = 0; i < 4; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)

            dicesum1 = dicesum1 * 10;

            coinpos1 = 2;

            max_loot = dicesum1;
        }
        else if (96 <= d100 && d100 <= 100)
        {
            for (var i = 0; i < 2; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)

            for (var i = 0; i < 3; i++)
            {
                dicebag2.push(Math.ceil(Math.random() * 6));
            }
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)

            dicesum1 = dicesum1 * 10;

            coinpos1 = 2;
            coinpos2 = 1;

            max_loot = dicesum1 + (dicesum2 * 10)
        }
    }
    //#endregion

    //#region Challenge 11-16 (roll for loot)
    else if (document.getElementById("11-16").checked == true)
    {
        if (1 <= d100 && d100 <= 20)
        {
            for (var i = 0; i < 4; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)
            dicesum1 = dicesum1 * 100;
            coinpos1 = 4;

            dicebag2.push(Math.ceil(Math.random() * 6));
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)
            dicesum2 = dicesum2 * 100
            coinpos2 = 2;

            max_loot = (dicesum1 / 10) + dicesum2;
        }
        else if (21 <= d100 && d100 <= 35)
        {
            dicebag1.push(Math.ceil(Math.random() * 6));
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)
            dicesum1 = dicesum1 * 100;
            coinpos1 = 3;

            dicebag2.push(Math.ceil(Math.random() * 6));
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)
            dicesum2 = dicesum2 * 100;
            coinpos2 = 2;

            max_loot = (dicesum1 / 2) + dicesum2;
        }
        else if (36 <= d100 && d100 <= 75)
        {
            for (var i = 0; i < 2; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)
            dicesum1 = dicesum1 * 100;
            coinpos1 = 2;

            dicebag2.push(Math.ceil(Math.random() * 6));
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)
            dicesum2 = dicesum2 * 10;
            coinpos2 = 1;

            max_loot = dicesum1 + (dicesum2 * 10);
        }
        else if (76 <= d100 && d100 <= 100)
        {
            for (var i = 0; i < 2; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)
            dicesum1 = dicesum1 * 100;
            coinpos1 = 2;

            for (var i = 0; i < 2; i++)
            {
                dicebag2.push(Math.ceil(Math.random() * 6));
            }
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)
            dicesum2 = dicesum2 * 10;
            coinpos2 = 1;

            max_loot = dicesum1 + (dicesum2 * 10);
        }
    }
    //#endregion

    //#region Challenge 17+ (roll for loot)
    else if (document.getElementById("17+").checked == true)
    {
        if (1 <= d100 && d100 <= 15)
        {
            for (var i = 0; i < 2; i++)
            {
                dicebag1.push(Math.ceil(Math.random() * 6));
            }
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)
            dicesum1 = dicesum1 * 1000;
            coinpos1 = 3;

            for (var i = 0; i < 8; i++)
            {
                dicebag2.push(Math.ceil(Math.random() * 6));
            }
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)
            dicesum2 = dicesum2 * 100;
            coinpos2 = 2;

            max_loot = (dicesum1 / 2) + dicesum2;
        }
        else if (16 <= d100 && d100 <= 55)
        {
            dicebag1.push(Math.ceil(Math.random() * 6));
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)
            dicesum1 = dicesum1 * 1000;
            coinpos1 = 2;

            dicebag2.push(Math.ceil(Math.random() * 6));
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)
            dicesum2 = dicesum2 * 100;
            coinpos2 = 1;

            max_loot = dicesum1 + (dicesum2 * 10);
        }
        else if (56 <= d100 && d100 <= 100)
        {
            dicebag1.push(Math.ceil(Math.random() * 6));
            dicesum1 = dicebag1.reduce((a, b) => a + b, 0)
            dicesum1 = dicesum1 * 1000;
            coinpos1 = 2;

            for (var i = 0; i < 2; i++)
            {
                dicebag2.push(Math.ceil(Math.random() * 6));
            }
            dicesum2 = dicebag2.reduce((a, b) => a + b, 0)
            dicesum2 = dicesum2 * 100;
            coinpos2 = 1;

            max_loot = dicesum1 + (dicesum2 * 10);
        }
    }
    //#endregion
    //#endregion

    //#region Filter Items by Type
var testing = itemList.tags;

    var found = []; //list of filtered items
    function findInObjArray(tag)
    {
        function findInObj(item, tag)
        {
            return Object.values(item).some(v => typeof v == 'string' ? v.indexOf(tag) >= 0 : v == tag);
        };

        itemList.forEach(function (item)
        {
            if (findInObj(item, tag)) found.push(item);
        })

        return found;
    };

    var cap_items = [];
    var checked = document.querySelectorAll('input.itemtags:checked');
    //console.log(checked);

    if (document.getElementById("zero").checked == true || checked.length == 0)
    {
        cap_items = itemList;
        found = itemList;
    }
    else
    {
        if (document.getElementById("coins").checked == true)
        {
            findInObjArray("coins");
        }
        if (document.getElementById("goods").checked == true)
        {
            findInObjArray("goods");
        }
        if (document.getElementById("gear").checked == true)
        {
            findInObjArray("gear");
        }
        if (document.getElementById("magic").checked == true)
        {
            findInObjArray("magic");
        }
        if (document.getElementById("weapon").checked == true)
        {
            findInObjArray("weapon");
        }
        if (document.getElementById("armor").checked == true)
        {
            findInObjArray("armor");
        }
        if (document.getElementById("potion").checked == true)
        {
            findInObjArray("potion");
        }
        if (document.getElementById("poison").checked == true)
        {
            findInObjArray("poison");
        }
        if (document.getElementById("gems").checked == true)
        {
            findInObjArray("gems");
        }
        if (document.getElementById("arts").checked == true)
        {
            findInObjArray("arts");
        }
        if (document.getElementById("book").checked == true)
        {
            findInObjArray("book");
        }
        if (document.getElementById("scroll").checked == true)
        {
            findInObjArray("scroll");
        }
    }

    //#endregion


    function slotItem()
    {

        for (var i = 0; i < found.length; i++)
        {
            if (found[i].spec == "music")
            {
                found[i] = music[Math.floor(Math.random() * music.length)];
            }
            if (found[i].spec == "barb")
            {
                found[i] = barb[Math.floor(Math.random() * barb.length)];
            }
            if (found[i].spec == "text")
            {
                found[i].name = text[Math.floor(Math.random() * text.length)] + " (book)";
            }
        }
    }


    //#region choose random items

    var item_perc; //percentage of items
    if (document.getElementById("zero").checked == true) item_perc = 0;
    else if (document.getElementById("half").checked == true) item_perc = 0.5;
    else if (document.getElementById("full").checked == true) item_perc = 1;

    if (checked.length == 0) item_perc = 0;
    var coin_perc; //percentage of coins

    //check if there is an item (in the filtered array) with a cost equal to or less than the maximum value 
    var checkvalue = false;
    for (var i = 0; i < found.length; i++)
    {
        if (found[i].cost <= max_loot * item_perc)
        {
            checkvalue = true;
            break;
        }
    }

    //if no item is found, then act as if no items are being traded
    if (checkvalue == false)
    {
        cap_items = itemList;
        found = itemList;
        item_perc = 0;
    }

    var randomitem;
    var randomitem1;
    var chosen_items = []; //list of chosen items

    var maxItems = Math.floor(document.getElementById("itemcap").value);

    var tries = 0;
    var cap_tries = 0;
    var max_tries = 9999;

    var loot_sum = 0; //sum of chosen items cost
    var cap_sum = 0;
    coin_perc = 1 - item_perc; //set coin percentage


    //function to only choose N number of items
    var CAP = function ()
    {
        do
        {
            slotItem();
            if (cap_tries == max_tries) return cap_items;
            if (cap_sum == max_loot) return cap_items;

            randomitem = found[Math.floor(Math.random() * found.length)];
            if (cap_sum + randomitem.cost > (max_loot * item_perc).toFixed(2))
            {
                cap_tries++;
            }

            else
            {
                cap_sum += randomitem.cost;
                if (!cap_items.find(({ name }) => name === randomitem.name))
                {
                    cap_items.push(randomitem);
                }
            }

        } while (cap_items.length < maxItems);
    }

    //function to choose which items will be traded
    var LOOT = function ()
    {

        {

            while (true)
            {

                if (tries == max_tries) return chosen_items;
                if (loot_sum == max_loot) return chosen_items;

                randomitem1 = cap_items[Math.floor(Math.random() * cap_items.length)];
                if (loot_sum + randomitem1.cost > (max_loot * item_perc).toFixed(2))
                {
                    tries++;
                }
                else
                {
                    loot_sum += randomitem1.cost;
                    chosen_items.push(randomitem1);
                    //console.log(randomitem.name + "\t" + randomitem.cost);
                    //console.log(Math.round(loot_sum*100)/100);
                }
            }
        }


    };


    //#endregion

    CAP();
    LOOT();


    console.log(LOOT());
    console.log("itemlist");

    console.log(itemList);
    console.log("found");

    console.log(found)

    //console.log("max_loot");
    //console.log(max_loot);
    console.log("cap_items")
    console.log(cap_items);
    //console.log(found[i]);
    console.log("checkvalue")
    console.log(checkvalue);



    var itemQTY = [];
    for (var i = 0; i < chosen_items.length; i += 1)
    {
        itemQTY[chosen_items[i].name] = (itemQTY[chosen_items[i].name] || 0) + 1;

    }
    //console.log("itemqty")
    //console.log(itemQTY)

    let costSUM = chosen_items.reduce((uni, sum) =>
    {
        let total = uni.get(sum.name) || 0;
        uni.set(sum.name, sum.cost + total);
        return uni;
    }, new Map());

    // then, map your costSUM object back to an array
    let itemSUM = [...costSUM].map(([name, cost]) =>
    {
        return { name, cost }
    })
    //console.log("testing")
    //console.log(chosen_items)
    //console.log(itemSUM);

    //#region sum item duplicates

    //#endregion

    //#region 

    var currency = function (dicesum, coinpos)
    {
        var mark = "; "

        if (dicesum != null)
        {
            coinType = coinArray[coinArray.length - coinpos];
            var coinone = Math.floor(dicesum * coin_perc); //get integer part of value
            var cointwo = (dicesum * coin_perc + "").split(".")[1]; //get decimal part of value

            if (coinone == 0)
            {
                coinone = "";
                coinType = "";
                mark = "";
            }
            var cpcoin = "";

            //#region Coin Loot

            if (coin_perc != 0)
            {
                document.getElementById("gold").innerHTML += coinone + " " + coinType;

                if (coinType == "ep" && cointwo != null)
                {
                    cointwo = Math.floor(cointwo / 2);
                    cpcoin = "; 5 cp";
                }

                if (coinType != "gp")
                {
                    coinType = coinArray[coinArray.length - coinpos - 1];
                }
                else
                {
                    coinType = coinArray[coinArray.length - coinpos - 2];
                }

                if (cointwo == undefined || coinType == undefined)
                {
                    cointwo = "";
                    coinType = "";
                }
                else
                {
                    document.getElementById("gold").innerHTML += mark + cointwo + " " + coinType + cpcoin;
                }

                document.getElementById("gold").innerHTML += "<br>"
            }

            //#endregion

            //#region Item Loot          

            document.getElementById("items").innerHTML = ""
            var set = 0;

            for (var key in itemQTY)
            {
                if (key == "cp" || key == "sp" || key == "ep" || key == "gp" || key == "pp")
                {
                    document.getElementById("items").innerHTML += itemQTY[key] + " " + key + "<br>";
                }
                else
                {
                    document.getElementById("items").innerHTML += itemQTY[key] + " " + key + " " + "(" + Math.round(itemSUM[set].cost * 100) / 100 + " gp)" + "<br>";
                }
                set++
            }

            if (document.getElementById("trinket").checked == true && document.getElementById("zero").checked == false)
            {
                document.getElementById("items").innerHTML += "<hr>" + trinkets[Math.floor(Math.random() * trinkets.length)];
            }
            //#endregion
        }
    }

    //console.log(dicebag1)
    //#endregion
    document.getElementById("treasuretext").style.display = "inline-block";
    document.getElementById("gold").innerHTML = ""; //clean innerHTML
    currency(dicesum1, coinpos1);
    currency(dicesum2, coinpos2);


};

//look at my code, my code is amazing!
