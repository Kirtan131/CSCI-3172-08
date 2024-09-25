// The const variable is only accessible within the block where it is defined(i.e {}).

// The let and const keywords were added to Javascript with the ECMAScript6 specification, which was officially released in June 2015.

function calculateAreaOfCircle(){

    const radius = 6;
    const pi = 3.1415;
    const area = pi * radius * radius;
    const output = document.getElementById("area");
    output.innerText = "The area of circle is " + area;
}

function arithmeticOperation(num1, num2){

    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;

    const arithOutput = document.getElementById("operations");
    arithOutput.innerHTML = "Addition: " + addition + "\n" + "Subtraction: " + subtraction + "\n" + "Multiplication: " + multiplication + "\n" + "Division: " + division;

}

function calculateAreaOfRectangle(){

    const length = 20;
    const width = 15;
    const area = length * width;
    const output = document.getElementById("rectangle");
    output.innerText = "The area of Rectangle is " + area;

}

document.addEventListener("DOMContentLoaded", function() {
    calculateAreaOfCircle();
    performArithmeticOperations(10, 5); 
    calculateAreaOfRectangle();
});