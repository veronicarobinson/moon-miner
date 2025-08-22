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



function mine() {

    string = cheese += 1;

    console.log(cheese)


    drawCheese()
    clickWeight()
    drawClickMine()
    drawAutoUpgrades()
    drawButtonUpgrades()

}


// GO LOOK AT ZOO KEEPER CPC 
function clickWeight() {
    let currentaMine = 0;
    clickUpgrades.forEach((click) => {
        if (click.quantity >= 1) {
            cheese += click.bonus

        }

    })


    drawCheese()
    drawClickMine
    drawButtonUpgrades()
    mine()

}

function buyClickUpgrade() {
    for (let i = 0; i < clickUpgrades.length; i++) {

        let click = clickUpgrades[i]
        clickUpgrades.forEach((click) => {
            if (cheese >= click.price) {
                click.quantity += 1;
                cheese -= click.price;
                click.price += click.price;
                click.bonus += click.bonus;

            }

        })
    }

    drawCheese()
    drawClickMine
    drawButtonUpgrades()
    mine()

}


function buyAutoMaticUpgrade() {
    for (let i = 0; i < automaticUpgrades.length; i++) {
        let a = automaticUpgrades[i];
        automaticUpgrades.forEach((a) => {
            if (cheese >= a.price) {
                a.quantity += 1;
                cheese -= a.price;
                a.price += a.price;
                a.bonus += a.bonus

            }

        })


    }

    drawCheese()
    drawAutoUpgrades()

}





// VISUALIZERS -------------------------------------------------

let cheeseElm = document.getElementById("cheese")


function drawCheese() {
    cheeseElm.innerHTML = cheese
    console.log('🧀', cheese)
}

let clickWeightElm = document.getElementById("mine")

function drawClickMine() {
    clickWeightElm.innerHTML = 
}

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
        let buttonUpgradeElm = document.getElementById(`${u.name}-button`)
        let upgradeStatElm = document.getElementById(`${u.name}-stats`)
        buttonUpgradeElm.innerHTML = `<h3>${u.name} 🧀${u.price}</h3> bonus: ${u.bonus}`
        upgradeStatElm.innerHTML = `<span class="text-capitalize">${u.name}: ${u.quantity}</span>`
    })
}


mine()
clickWeight()
drawClickMine
drawCheese()
drawButtonUpgrades()
drawAutoUpgrades()
buyClickUpgrade()
buyAutoMaticUpgrade()

// POP UP WINDOW
// alert(cheese)