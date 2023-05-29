const validation = () => {
    const form = document.querySelector('form');
    const email = document.querySelector('#email').value;
    const error = document.querySelector('#error-message');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        error.innerHTML = "Your Email Address is Valid.";
        error.style.color = "#00ff00";
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        error.innerHTML = "Please Enter Valid Email Address.";
        error.style.color = "#ff0000";
    }

    if (email === "") {
        form.classList.add('valid');
        form.classList.remove('invalid');
        error.innerHTML = "";
        error.style.color = "#00ff00";
    }

}
