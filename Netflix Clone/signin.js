document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
      alert("Sign in successfully");
    } else {
      alert("Please enter both email and password.");
    }
  });