const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const togglePassword = document.getElementById('togglePassword');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = evaluatePasswordStrength(password);
    updateStrengthUI(strength);
});

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    // Toggle the eye slash icon
    togglePassword.classList.toggle('fa-eye-slash');
});

function evaluatePasswordStrength(password) {
    let strength = 0;

    // Check the length
    if (password.length >= 12) strength++;

    // Check for lowercase letters
    if (password.match(/[a-z]/)) strength++;

    // Check for uppercase letters
    if (password.match(/[A-Z]/)) strength++;

    // Check for digits
    if (password.match(/[0-9]/)) strength++;

    // Check for special characters
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    // If all OWASP criteria are met, add an extra point for strong password
    if (strength === 5) strength++;

    return strength;
}

function updateStrengthUI(strength) {
    switch (strength) {
        case 1:
        case 2:
            strengthBar.className = 'strength-bar low';
            strengthText.textContent = 'Weak';
            break;
        case 3:
        case 4:
            strengthBar.className = 'strength-bar medium';
            strengthText.textContent = 'Medium';
            break;
        case 5:
        case 6:
            strengthBar.className = 'strength-bar high';
            strengthText.textContent = 'Strong';
            break;
        default:
            strengthBar.className = 'strength-bar';
            strengthText.textContent = '';
            break;
    }
}
