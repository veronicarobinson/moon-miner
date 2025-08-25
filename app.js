console.log('hi')

let cheese = 0;






let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 10,
        quantity: 0,
        bonus: 1
    },
    {
        name: 'drill',
        price: 50,
        quantity: 0,
        bonus: 5
    }
]

let automaticUpgrades = [
    {
        name: 'rover',
        price: 600,
        quantity: 0,
        bonus: 20
    },
    {
        name: 'station',
        price: 1000,
        quantity: 0,
        bonus: 100
    }

]


// NOTE this should only be called when the img is clicked

// NOTE forEach - does something with each item in the array 
// NOTE find - does something with one item from an array
function mine() {

    cheese += 1;
    clickUpgrades.forEach((click) => {
        if (click.quantity >= 1) {
            // click.quantity * click.bonus
            cheese += click.quantity * click.bonus
        }

    })

    drawCheese()
    drawAutoUpgrades()
    drawButtonUpgrades()
    // drawCPC()
    // drawCPI()

}


function buyClickUpgrade(cName) {

    // TODO use a FIND to get the correct upgrade out of the array (reference getAnimal)
    // TODO we don't need the double for loop, but all of the logic in your if statement is correct

    let selectedClick = clickUpgrades.find((click) => click.name == cName)
    if (cheese >= selectedClick.price) {
        selectedClick.quantity += 1;
        cheese -= selectedClick.price;
        selectedClick.price += selectedClick.price;
    }
    console.log('selected', selectedClick)


    drawCheese()
    drawButtonUpgrades()
    drawCPC()

}




function buyAutoMaticUpgrade(aName) {

    // TODO reference buyClickUpgrade for refactoring this
    let selectedAutomatic = automaticUpgrades.find((a) => a.name == aName)

    if (cheese >= selectedAutomatic.price) {
        selectedAutomatic.quantity += 1;
        cheese -= selectedAutomatic.price;
        selectedAutomatic.price += selectedAutomatic.price;


    }


    drawCheese()
    drawAutoUpgrades()
    drawCPI()
}



function collectAuto() {
    // let autoPayout = 0
    automaticUpgrades.forEach((a) => {
        if (a.quantity >= 1) {
            // a.bonus * a.quantity;
            cheese += a.bonus * a.quantity

        }

    })
    drawCheese()
    drawAutoUpgrades()
    // drawCPI()
}

setInterval(collectAuto, 1000 * 3)

// TODO you need to call your collect auto function here instead of buying


// VISUALIZERS -------------------------------------------------

let cheeseElm = document.getElementById("cheese")
let clickElm = document.getElementById("clicks")
let aElm = document.getElementById("automatic")

function drawCheese() {

    cheeseElm.innerHTML = `<b> Cheese: ${cheese} </b>`

}

function drawCPC() {
    let cpc = 1;
    console.log('hi')
    clickUpgrades.forEach((c) => {
        if (c.quantity >= 1) {
            cpc += c.bonus * c.quantity
        }
    })

    // TODO looop over your clickUpgrades array, and add each upgrade's bonus * quantity to cpc
    clickElm.innerHTML = `<b>Clicks: ${cpc}</b>`
}

function drawCPI() {
    let cpi = 0;
    automaticUpgrades.forEach((a) => {
        if (a.quantity >= 1) {
            cpi += a.bonus * a.quantity
        }
    })
    aElm.innerHTML = `<b>Automatic: ${cpi}</b>`
}
// TODO write a draw cpi function, use drawCPC as a reference

function drawButtonUpgrades() {
    clickUpgrades.forEach((u) => {
        console.log('🫡')
        let buttonUpgradeElm = document.getElementById(`${u.name}-button`)
        let upgradeStatElm = document.getElementById(`${u.name}-stats`)
        buttonUpgradeElm.innerHTML = `<h3>${u.name} 🧀${u.price}</h3>  bonus: ${u.bonus}`
        upgradeStatElm.innerHTML = `<span class="text-capitalize">${u.name}: ${u.quantity}</span>`
    })

}

function drawAutoUpgrades() {
    automaticUpgrades.forEach((u) => {
        let buttonAutoUpgradeElm = document.getElementById(`${u.name}-button`)
        let upgradeStatElm = document.getElementById(`${u.name}-stats`)
        buttonAutoUpgradeElm.innerHTML = `<h3>${u.name} 🧀${u.price}</h3> bonus: ${u.bonus}`
        upgradeStatElm.innerHTML = `<span class="text-capitalize">${u.name}: ${u.quantity}</span>`
    })
}



// ANCHOR page load
// mine()
// clickWeight()
drawCheese()
drawButtonUpgrades()
drawAutoUpgrades()

drawCPC()
drawCPI()