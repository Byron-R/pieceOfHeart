<script>
    document.getElementById('send-email-button').addEventListener('click', function () {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const ipDisplay = document.getElementById('ip-address');
        const confirmationMessage = document.getElementById('confirmation-message');

        // Email validation using a basic regular expression
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!email.match(emailPattern)) {
            alert('Invalid email address');
            return;
        }

        // Password length validation
        if (password.length < 10) {
            alert('Password must be at least 10 characters long');
            return;
        }

        // Simulate getting the user's IP address (you can use a third-party service)
        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const userIP = data.ip;
                ipDisplay.innerText = `Your IP address: ${userIP}`;
                ipDisplay.style.display = 'block';

                // Display a confirmation message
                confirmationMessage.innerText = 'Email sent successfully!';
                confirmationMessage.style.display = 'block';

                // You can perform the actual email sending logic here (e.g., using a server-side script).
            })
            .catch(error => {
                console.error('Failed to fetch IP address:', error);
            });
    });
</script>