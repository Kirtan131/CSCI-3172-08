function validate(){

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/; 
    const lastNameRegex = /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,}$/; 

    if (!nameRegex.test(firstName)) {
        alert("First Name is invalid. Only letters and one space for a middle name are allowed.");
        return false;
    }
    
    if (!lastNameRegex.test(lastName)) {
        alert("Last Name is invalid. Only letters, apostrophes, and hyphens are allowed.");
        return false;
    }
    
    if (!emailRegex.test(email)) {
        alert("Email is invalid. Please enter a valid email.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password is invalid. It must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 12 characters long.");
        return false;
    }

    alert("The form is successfully submitted!");
    return true;
}