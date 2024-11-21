// auth.js
// Save the user's logged-in status to localStorage
function login(username, password) {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true; // Login successful
    }
    return false; // Invalid credentials
}

// Register a new user and store in localStorage
function register(username, password) {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find(user => user.username === username);

    if (existingUser) {
        return false; // User already exists
    }

    storedUsers.push({ username, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));
    return true; // Registration successful
}

// Log out and clear the session
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentUser');
}

// Check if the user is logged in
function checkLoginStatus() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Get the current logged-in user's data
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Update the Navbar to show login/logout options
function updateNavbar() {
    const navbar = document.getElementById('navbar_container');
    const loggedIn = checkLoginStatus();

    if (loggedIn) {
        const user = getCurrentUser();
        navbar.innerHTML = `
            <p>Welcome, ${user.username}</p>
            <button onclick="logout()">Logout</button>
        `;
    } else {
        navbar.innerHTML = `
            <a href="login.html">Login</a> | <a href="register.html">Register</a>
        `;
    }
}
