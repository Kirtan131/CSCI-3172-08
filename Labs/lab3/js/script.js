function changeColor(){
    const selected = document.getElementById("select");

    const day = document.getElementById("weekdays").value;

    switch(day){

        case "Monday":
            selected.style.backgroundColor = "blue";
            break;
        case "Tuesday":
            selected.style.backgroundColor = "red";
            break;
        case "Wednesday":
            selected.style.backgroundColor = "yellow";
            break;
        case "Thursday":
            selected.style.backgroundColor = "green";
            break;        
        case "Friday":
            selected.style.backgroundColor = "orange";
            break;     
        case "Saturday":
            selected.style.backgroundColor = "pink";
            break;   
        case "Sunday":
            selected.style.backgroundColor = "cyan";
            break;     
    }

}

function determine(event){

    event.preventDefault();
    
    const number = parseInt(document.getElementById("number").value);
    let output = 'The number entered is an ';

    if(number % 2 === 0){

        output += 'even ';

    }else{
        output += 'odd ';
    }

    if (number <= 1) {
        output += 'neither prime nor composite number ';
    } else if (isPrime(number)) {
        output += 'prime number ';
    } else {
        output += 'composite number ';
    }

    if (number <= 50) {
        output +=  'less than or equal to 50.';
    } else if (number > 50 && number <= 75) {
        output += 'greater than 50 and less than or equal to 75.';
    } else if (number > 75 && number <= 100) {
        output += 'greater than 75 and less than or equal to 100.';
    } else {
        output += 'greater than 100.';
    }

    document.getElementById("message").innerHTML = output;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}