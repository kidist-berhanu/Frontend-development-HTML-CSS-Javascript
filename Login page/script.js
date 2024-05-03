document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        // If authentication fails, show an error message
        document.getElementById("error-message").textContent = "Invalid username or password";
    }
});
