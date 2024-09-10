// Redirect to home page after login or signup
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Placeholder for authentication logic
    window.location.href = 'home.html';
});

