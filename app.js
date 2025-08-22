console.log('hi')

let cheese = 0;

let knife = 50;

let drill = 250;

let clickActions = [
    {
        name: "knife",
        type: "click",
        damage: 1,
        cost: 50,
    },
    {
        name: "drill",
        type: "click",
        damage: 5,
        cost: 250

    },
    {
        name: "mouse",
        type: "automatic",
        damage: 10,
        cost: 1000
    },
    {
        name: "station",
        type: "automatic",
        damage: 100,
        cost: 50000
    }
]




function mine() {
    cheese += 1
    console.log('add cheese', cheese)

}

// function alert() {
//     draw
// }