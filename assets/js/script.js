// A stub: intercepts form submission and prints to console
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! I’ll get back to you soon.');
  form.reset();
});
