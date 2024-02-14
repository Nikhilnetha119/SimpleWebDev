// Dummy user data for demonstration
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    loginUser(username, password);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    signUpUser(newUsername, newPassword);
});

function loginUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
}

function signUpUser(username, password) {
    // You can implement signup logic here, such as adding the new user to a database
    alert('Sign up successful!');
}

function uploadImage() {
    // Implement image upload logic here
    alert('Image uploaded successfully!');
}
