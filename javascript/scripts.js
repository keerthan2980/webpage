document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation check
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
});