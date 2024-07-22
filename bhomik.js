// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // You can add code here to send the form data to your email or a server

        contactForm.reset();
        alert('Thank you for your message!');
    });
});
