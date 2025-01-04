// Variables
const form = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Collection (Array)
const formFields = [firstName, lastName, email, phone];

// Function to validate form
function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Loop through form fields
    formFields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = 'green';
        }
    });

    // If statement
    if (isValid) {
        alert('Thank you for reaching out to us. Rahma or one of our team meber will reach out to you!');
        form.reset();
    } else {
        alert('Please fill out all fields.');
    }
}

// Event Listener
form.addEventListener('submit', validateForm);
