function validate(){

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked'); 
    const country = document.getElementById('country').value;

    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/; 
    const lastNameRegex = /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
     

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

    if (!gender) {
        alert("Please select a gender.");
        return false;
    }

    if (country === "") {
        alert("Please select a country.");
        return false;
    }

    alert("The form is successfully submitted!");
    return true;
}

function displayFormData(){

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified';
    const country = document.getElementById('country').value || 'Not selected';

    const displayDiv = document.getElementById('displayData');

    // (b) To keep the previous data on the page, we should append the new data rather than overwrite it.
    displayDiv.innerHTML = `
        <h4>Form Data:</h4>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> ${country}</p>
    `;
}

document.getElementById('register').addEventListener('submit', function (event) {
    
    // (a) preventDefault() is used to stop the form from submitting in the traditional way (i.e., sending data to a server and refreshing the page). This allows us to handle the form submission using JavaScript and prevent the page reload.
    event.preventDefault();

    if (validate()) {
        displayFormData();
    }
});