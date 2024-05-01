document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var education = document.getElementById("education").value;
    
    alert(fullname + " registered successfully!");
  });
  
