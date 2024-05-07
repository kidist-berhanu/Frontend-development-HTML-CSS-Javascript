function reverseString() {
    // Get the input string
    var inputString = document.getElementById("inputString").value;
  
    // Reverse the string
    var reversedString = inputString.split("").reverse().join("");
  
    // Display the reversed string
    document.getElementById("reversedString").textContent = "Reversed String: " + reversedString;
  }
  