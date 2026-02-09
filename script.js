// Smooth fade-in on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s ease";
  document.body.style.opacity = 1;
});

// Password check
function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === "Akkos29") {   // 👈 password
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-site").style.display = "block";
    document.body.style.overflowY = "auto"; // scroll unlock
  } else {
    error.textContent = "Wrong code 😅 Try again";

    // Restart shake animation
    error.classList.remove("shake");
    void error.offsetWidth; // animation reset trick
    error.classList.add("shake");
  }
}
