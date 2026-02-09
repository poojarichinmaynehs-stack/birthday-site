document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = 1;
});
function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === "Akkos29") {   // 👈 apna password yaha
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-site").style.display = "block";
    document.body.style.overflow = "auto"; // 👈 scroll unlock
  } else {
    error.textContent = "Wrong code 😅 Try again";
  }
}
error.classList.add("shake");




