
const form = document.querySelector(".login-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    const inputData = {
        Email: `${email.value}`,
        Password: `${password.value}`
    }
    console.log(inputData)
    
    if (email.value === "" || password.value === "") {
        return window.alert("Please fill in all fields!");
    }
   event.currentTarget.reset();
});