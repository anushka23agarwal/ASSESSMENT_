// script.js

document.addEventListener("DOMContentLoaded", function () {
    const continueButton = document.querySelector(".continue");
    continueButton.addEventListener("click", validateForm);
});

function validateForm(event) {
    event.preventDefault();

    const firstNameInput = document.querySelector('input[name="first-name"]');
    const lastNameInput = document.querySelector('input[name="last-name"]');
    const emailInput = document.querySelector('input[name="email"]');

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (!firstNameValue) {
        showError(firstNameInput, "Please enter your first name");
    } else {
        hideError(firstNameInput);
    }

    if (!lastNameValue) {
        showError(lastNameInput, "Please enter your last name");
    } else {
        hideError(lastNameInput);
    }

    if (!emailValue) {
        showError(emailInput, "Please enter your email");
    } else {
        hideError(emailInput);
    }
}

function showError(input, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    const parent = input.parentElement;
    parent.appendChild(errorDiv);

    input.classList.add("error");
    input.style.borderColor = "red";
    errorDiv.style.color = "red";
}

function hideError(input) {
    const parent = input.parentElement;
    const errorDiv = parent.querySelector(".error-message");

    if (errorDiv) {
        parent.removeChild(errorDiv);
        input.classList.remove("error");
    }
}
