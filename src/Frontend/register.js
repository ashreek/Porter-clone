document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Fake registration (in a real app, you would save to a database)
    localStorage.setItem('user', JSON.stringify({ email, password }));

    alert('Registration successful! Please login.');
    window.location.href = 'login.html'; // Redirect to login after registration
});
