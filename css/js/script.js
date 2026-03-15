const modal = document.getElementById('callbackModal');
const btn = document.getElementById('callbackBtn');
const closeBtn = document.querySelector('.modal-close');

if (btn) {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const leadForm = document.getElementById('lead-form');
if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        leadForm.reset();
    });
}

const callbackForm = document.getElementById('callback-form');
if (callbackForm) {
    callbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Мы перезвоним вам в течение часа.');
        callbackForm.reset();
        modal.style.display = 'none';
    });
}
