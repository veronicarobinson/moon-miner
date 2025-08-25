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

    cheese += 1;
    clickUpgrades.forEach((click) => {
        if (click.quantity >= 1) {
            cheese += click.bonus

        }

    })

    drawCheese()

    drawAutoUpgrades()
    drawButtonUpgrades()

}


function buyClickUpgrade() {
    // for (let i = 0; i < clickUpgrades.length; i++) {

    let click = clickUpgrades[0]
    clickUpgrades.forEach((click) => {
        if (cheese >= click.price) {
            click.quantity += 1;
            cheese -= click.price;
            click.price += click.price;
            click.bonus += click.bonus;
        }

    })
    // }

    drawCheese()

    drawButtonUpgrades()
    mine()

}


// NOTE why did this function grab drill, but the function above only grabbed pickaxe
function buyDrillUpgrade() {


    let click = clickUpgrades[1]
    clickUpgrades.forEach((click) => {
        if (cheese >= click.price) {
            click.quantity += 1;
            cheese -= click.price;
            click.price += click.price;
            click.bonus += click.bonus;
        }

    })


    drawCheese()

    drawButtonUpgrades()
    mine()

}
// NOTE talk to Mick ------------------------------------------------------------------


function buyAutoMaticUpgrade() {

    let a = automaticUpgrades[0];
    automaticUpgrades.forEach((a) => {
        if (cheese >= a.price) {
            a.quantity += 1;
            cheese - a.price;
            a.price += a.price;
            a.bonus += a.bonus;

        }

    })


    drawCheese()
    drawAutoUpgrades()

}

function buyAutoMaticUpgrade() {

    let a = automaticUpgrades[1];
    automaticUpgrades.forEach((a) => {
        if (cheese >= a.price) {
            a.quantity += 1;
            cheese -= a.price;
            a.price += a.price;
            a.bonus += a.bonus

        }

    })

    drawCheese()
    drawAutoUpgrades()

}

// let currentClicks = 0;
// // GO LOOK AT ZOO KEEPER CPC 
// function clickWeight() {

//     let currentClicks = mine();
//     clickUpgrades.forEach((click) => {
//         if (click.quantity >= 1) {
//             cheese += click.bonus

//         }

//     })


//     drawCheese()

//     drawButtonUpgrades()
//     mine()

// }



// VISUALIZERS -------------------------------------------------

let cheeseElm = document.getElementById("cheese")


function drawCheese() {
    cheeseElm.innerHTML = cheese
    console.log('🧀', cheese)
}

let clicks = 0;
function drawCPC() {

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
// clickWeight()
drawCheese()
drawButtonUpgrades()
drawAutoUpgrades()
buyClickUpgrade()
buyDrillUpgrade()
// buyClickUpgrade0()
// buyClickUpgrade1()
buyAutoMaticUpgrade()
buyAutoMaticUpgrade()
drawCPC()