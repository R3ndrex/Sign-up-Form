const password = document.querySelector("[id='pass']");
const confirmPassword = document.querySelector("[id='confirm_pass']");
const message = document.querySelector("pass-contrainer>p>span");

function validatePassword() {
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
        message.textContent = "";
    } else {
        confirmPassword.setCustomValidity("Passwords do not match");
        message.textContent = "Passwords do not match";
    }
}
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);
