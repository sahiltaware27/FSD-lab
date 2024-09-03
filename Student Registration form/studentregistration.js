document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        let valid = true;

        // Clear previous errors
        document.querySelectorAll('.form-text').forEach(el => el.textContent = '');

        // Function to trim spaces and check if a field is empty
        function isFieldEmpty(value) {
            return !value.trim();
        }

        // Username validation
        const username = document.getElementById('username').value;
        if (isFieldEmpty(username)) {
            document.getElementById('usernameError').textContent = 'Username is required.';
            valid = false;
        }

        // Phone number validation
        const phone = document.getElementById('phone').value;
        const phoneDigitsOnly = phone.replace(/\D/g, ''); // Remove non-digit characters
        if (phoneDigitsOnly.length !== 10) {
            document.getElementById('phoneError').textContent = 'Phone number must be exactly 10 digits.';
            valid = false;
        }

        // Email validation (simplified approach)
        const email = document.getElementById('email').value;
        if (isFieldEmpty(email) || !isValidEmail(email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email address.';
            valid = false;
        }

        // Password validation
        const password = document.getElementById('password').value;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasDigit = /[0-9]/.test(password);
        const hasSpecialChar = /[@$!%*?&]/.test(password);
        if (isFieldEmpty(password) || password.length < 7 || !hasUpperCase || !hasDigit || !hasSpecialChar) {
            document.getElementById('passwordError').textContent = 'Password must be at least 7 characters long and include at least one capital letter, one digit, and one special character.';
            valid = false;
        }

        // Confirm password validation
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (isFieldEmpty(confirmPassword) || password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Simple email validation function
    function isValidEmail(email) {
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    }
});
