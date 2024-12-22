const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const {
    elements: { email, password },
    } = event.target;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    }
    
    const formData = {
    email: emailValue,
    password: passwordValue,
    };

    console.log(formData);

    loginForm.reset();
})
