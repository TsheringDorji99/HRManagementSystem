document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Dummy data for login credentials
    var dummyUsername = "Ugyen Tenzin";
    var dummyPassword = "password";
  
    // Check if the input values match the dummy credentials
    if (username === dummyUsername && password === dummyPassword) {
      // Redirect to the home page (replace "home.html" with your actual home page)
      window.location.href = "home.html";
    } else {
      alert("Invalid username or password");
    }
  });