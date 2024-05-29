const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
        return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
        return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
        return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
        return "Password must contain at least one Digit.";
    }

    const isContainsSymbol =
        /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(value)) {
        return "Password must contain at least one Special Symbol.";
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
        return "Password must be 8-16 Characters Long.";
    }

    return null;
}



window.onload = () => {
    let passwords = ["asf gfhfg", "gfjgfjgfjhfgh", "FGHFHFJFJGH", "FsdfgdfgG", "FhgjF78hj", "Fg1@d", "Password123@#"];

    passwords.forEach(element => {
        console.log(element);
        const message = checkPasswordValidity(element);

        if (!message) {
            console.log("Hurray! Your Password is Valid and Strong.");
        } else {
            console.log(message);
        }
    });
}




document.getElementById('formRegistro').addEventListener('submit', (event) => {
    event.preventDefault();

    const error = document.getElementById('errorPassword');
    const password = this.contrasena.value;
    const message = checkPasswordValidity(password);

    if (!message) {
        document.getElementById("formRegistro").submit();
    } else {
        console.log(message);
        error.innerText = message;
        document.getElementById('contrasena').value = '';
        document.getElementById('formRegistro').classList.add("was-validated");
    }
});