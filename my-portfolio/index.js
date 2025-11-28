document.addEventListener("click", () => {
    const audio = document.getElementById("bg-audio");
    audio.muted = false;
    audio.play();
}, { once: true });



const emailForm = document.getElementById('contact-form');
const message = document.getElementById('form-message');
const nameDiv = document.getElementById('form-name-id');
if (emailForm && message && nameDiv) {
    emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('form-name-id').value;
    const emailInput = document.getElementById('email-form-id').value;
    if (nameInput === '' || emailInput === '') {
        message.textContent = 'Please fill out all required fields.';
        message.style.color = 'red';
    } else {
        // Successful mock submission
        message.textContent = 'Thank you for your message! I will be in touch shortly.';
        message.style.color = 'green';
        emailForm.reset(); // Clear the form fields
    }
    });
}