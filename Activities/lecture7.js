
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

let randomNum = getRandomNumber(1, 10);
console.log("Random Number between 1 and 10:", randomNum);

let area = calculateCircleArea(6);
console.log("Area of Circle with radius 6:", area);