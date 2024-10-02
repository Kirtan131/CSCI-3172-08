function getValues(){
	const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);

	if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return null;
    }
    return { num1, num2 };
}

function addition() {
    const values = getValues();
    if (values) {
        alert("The sum is: " + (values.num1 + values.num2));
    }
}

function subtraction() {
    const values = getValues();
    if (values) {
        alert("The difference is: " + (values.num1 - values.num2));
    }
}

function multiplication() {
    const values = getValues();
    if (values) {
        alert("The product is: " + (values.num1 * values.num2));
    }
}

function division() {
    const values = getValues();
    if (values) {
        if (values.num2 === 0) {
            alert("Cannot divide by zero!");
        } else {
            alert("The quotient is: " + (values.num1 / values.num2));
        }
    }
}