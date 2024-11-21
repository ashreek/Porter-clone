document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // Fake authentication check
    if (email === 'user@example.com' && password === 'password') {
        // Save user session and remember me option
        localStorage.setItem('user', JSON.stringify({ email }));
        if (rememberMe) {
            localStorage.setItem('rememberMe', true);
        }

        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page after successful login
    } else {
        alert('Invalid credentials');
    }
});

// Check if remember me is set
if (localStorage.getItem('rememberMe')) {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('login-email').value = user.email;
    document.getElementById('remember-me').checked = true;
}
