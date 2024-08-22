document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        let valid = true;
        const messages = [];

        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                valid = false;
                const fieldName = input.previousElementSibling.textContent.trim();
                messages.push(`O campo "${fieldName}" é obrigatório.`);
            }
        });

        if (!valid) {
            event.preventDefault();
            errorMessage.textContent = messages.join(' ');
            errorMessage.style.display = 'block';
        }
    });
});
