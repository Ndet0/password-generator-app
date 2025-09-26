// DOM element references for form buttons and fields
let buttonup = document.getElementById("buttonUp");
let buttonin = document.getElementById("buttonIn");
let title = document.getElementById("title");
let namefield = document.getElementById("nameField");
let passfield = document.getElementById("pass");
let emailField = document.querySelector('input[type="email"]');
let passwordField = document.querySelector('input[type="password"]');

let forgotLink = document.getElementById("forgotLink");

forgotLink.onclick = function(e) {
    e.preventDefault();
    let email = prompt("Enter your email to retrieve password:");
    if (!email) return;
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.email === email);
    if (user) {
        alert("Your password is: " + user.password);
    } else {
        alert("Email not registered.");
    }
};

// Initially hide the password field for sign-up mode
passfield.parentElement.style.maxHeight = "0px";

// Function to generate a random password of specified length
function generatePassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Event handler for sign-in button click
buttonin.onclick = function(){
    if (title.innerHTML !== "Sign In") {
        namefield.parentElement.style.maxHeight = "0px";
        passfield.parentElement.style.maxHeight = "65px";
        title.innerHTML = "Sign In";
        buttonin.classList.remove('disable');
        buttonup.classList.add('disable');
    } else {
        // Sign In logic: validate credentials and redirect if valid
        let email = emailField.value.trim();
        let password = passwordField.value.trim();

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'user-details.html';
        } else {
            alert("Invalid email or password.");
        }
    }
}

// Event handler for sign-up button click
buttonup.onclick = function(){
    if (title.innerHTML !== "Create an account") {
        namefield.parentElement.style.maxHeight = "65px";
        passfield.parentElement.style.maxHeight = "0px";
        title.innerHTML = "Create an account";
        buttonin.classList.add('disable');
        buttonup.classList.remove('disable');
    } else {
        // Sign Up logic: validate inputs, check for existing user, generate password, and store in localStorage
        let name = namefield.value.trim();
        let email = emailField.value.trim();

        if (!name || !email) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert("Email already registered. Please sign in.");
            return;
        }

        let password = generatePassword();
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Account created successfully! Your generated password is: " + password + ". Please remember it for sign-in.");
        buttonin.click(); // Switch to sign in mode
    }
}

// Function to validate email format using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
