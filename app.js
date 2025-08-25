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
function mine() {

    cheese += 1;
    clickUpgrades.forEach((click) => {
        if (click.quantity >= 1) {
            //FIXME click.quantity TIMES click.bonus
            cheese += click.bonus

        }

    })

    drawCheese()
    drawAutoUpgrades()
    drawButtonUpgrades()

}


function buyClickUpgrade() {

    // TODO use a FIND to get the correct upgrade out of the array (reference getAnimal)
    // TODO we don't need the double for loop, but all of the logic in your if statement is correct
    for (let i = 0; i < clickUpgrades.length; i++) {

        // let click = clickUpgrades[i]
        clickUpgrades.forEach((click) => {
            if (cheese >= click.price) {
                click.quantity += 1;
                cheese -= click.price;
                click.price += click.price;
            }
        })
    }

    drawCheese()
    drawButtonUpgrades()

}




function buyAutoMaticUpgrade() {

    // TODO reference buyClickUpgrade for refactoring this

    automaticUpgrades.forEach((a) => {
        if (cheese >= a.price) {
            a.quantity += 1;
            cheese -= a.price;
            a.price += a.price;
            a.bonus += a.bonus;

        }

    })


    drawCheese()
    drawAutoUpgrades()
    // TODO call drawcpc

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
    // TODO call drawcpi


}

// function collectAuto() {
//     let autoPayout = 0
//     automaticUpgrades.forEach((a) => {
// TODO a.bonus TIMES a.quantity
//         cheese += a.bonus

//     })
//     drawAutoUpgrades()
// }


// TODO you need to call your collect auto function here instead of buying
setInterval(buyAutoMaticUpgrade, 1000 * 3)


// VISUALIZERS -------------------------------------------------

let cheeseElm = document.getElementById("cheese")
let clickElm = document.getElementById(`clicks`)


function drawCheese() {
    cheeseElm.innerHTML = `${cheese}`
    console.log('🧀', cheese)
}


function drawCPC() {
    let cpc = 0
    // TODO looop over your clickUpgrades array, and add each upgrade's bonus * quantity to cpc
    clickElm.innerHTML = `Clicks: ${cpc}`
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
        let buttonUpgradeElm = document.getElementById(`${u.name}-button`)
        let upgradeStatElm = document.getElementById(`${u.name}-stats`)
        buttonUpgradeElm.innerHTML = `<h3>${u.name} 🧀${u.price}</h3> bonus: ${u.bonus}`
        upgradeStatElm.innerHTML = `<span class="text-capitalize">${u.name}: ${u.quantity}</span>`
    })
}



// ANCHOR page load
// mine()
// clickWeight()
drawCheese()
drawButtonUpgrades()
drawAutoUpgrades()
// buyClickUpgrade()
// buyDrillUpgrade()
// buyClickUpgrade0()
// buyClickUpgrade1()
// buyAutoMaticUpgrade()
// buyAutoMaticUpgrade()
drawCPC()