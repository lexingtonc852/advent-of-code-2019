const fs = require('fs');
let inputs: number[] = fs.readFileSync('input.txt', 'utf-8').split('\n').map(Number);


let requireFuel = 0;
function calculateFuel (module: number[]) {
    for (let mass of module) {
        if (mass) {
            requireFuel += Math.floor(mass / 3) - 2;
        }
    }
    return requireFuel;
}
console.log(calculateFuel(inputs));  