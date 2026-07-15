// ===== Toast Notification =====
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

// ===== Button Interactions =====
document.getElementById('primaryBtn').addEventListener('click', () => {
    showToast('Primary button clicked!');
});

document.getElementById('secondaryBtn').addEventListener('click', () => {
    showToast('Secondary button clicked!');
});

// ===== Form Submission =====
document.getElementById('demoForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();

    if (!name || !email) {
        showToast('Please fill in all fields.');
        return;
    }

    showToast(`Hello, ${name}! Form submitted.`);
    e.target.reset();
});
