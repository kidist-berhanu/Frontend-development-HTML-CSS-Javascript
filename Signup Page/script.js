document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
});

