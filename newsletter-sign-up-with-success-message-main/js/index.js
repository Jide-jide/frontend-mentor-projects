// DOM elements
const signupBtn = document.querySelector(".sign-up__btn");
const dismissBtn = document.querySelector(".dismiss__btn");
const signupPage = document.querySelector(".newsletter-card__sign-up");
const successPage = document.querySelector(".newsletter-card__success");
const userEmailInput = document.querySelector(".email");
const invalidEmailAlert = document.querySelector(".mailInvalid");
const successEmail = document.getElementById("success__email");

// Validation function
function validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

// Sign-up section
signupBtn.addEventListener("click", function () {
    const userEmailValue = userEmailInput.value.trim();
    
    if (validateEmail(userEmailValue)) {
        successPage.classList.remove("hidden");
        signupPage.classList.add("hidden");
        successEmail.textContent = userEmailValue;
        userEmailInput.value = "";
    } else {
        userEmailInput.classList.add("error-box");
        invalidEmailAlert.style.display = "block";
    }
});

// Dismiss success section
dismissBtn.addEventListener("click", function () {
    successPage.classList.add("hidden");
    signupPage.classList.remove("hidden");
    userEmailInput.classList.remove("error-box");
    invalidEmailAlert.style.display = "none";
    successEmail.textContent = "";
});
