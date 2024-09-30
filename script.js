const password = document.querySelector("[id='pass']");
const confirmPassword = document.querySelector("[id='confirm_pass']");
const message = document.querySelector(".pass-error"); // first pass error span

function validatePassword() {
    if (
        password.value === confirmPassword.value ||
        (password.value === "" && confirmPassword.value !== "") ||
        (password.value !== "" && confirmPassword.value === "")
    ) {
        return (message.textContent = "");
    }
    return (message.textContent = "Passwords do not match");
}
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);
