const paises = {
    1: "Argentina",
    2: "Bolivia",
    3: "Brasil",
    4: "Chile",
    5: "Colombia",
    6: "Ecuador",
    7: "Paraguay",
    8: "Perú",
    9: "Uruguay",
    10: "Venezuela",
    11: "Otro..."
}

const fechaNacimiento = document.getElementById("edad");
let date = new Date(Date.now());
date = date.toLocaleDateString("en-GB").split('/').reverse().join('-');
fechaNacimiento.max = date;
fechaNacimiento.value = date;


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
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());

        const d = new Date(value['edad']);
        value['edad'] = d;
        value['pais'] = paises[value['pais']];

        let usuario = {
            "nombre": value['nombre'],
            "apellido": value['apellido'],
            "email": value['email'],
            "contrasena": value['contrasena'],
            "fechaNacimiento": value['edad'],
            "pais": value['pais']
        }
        
        fetch("http://localhost:8080/webapp/usuarios", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(usuario)
        })
        .then(res => console.log("Request complete! response:", res))
        .catch(err => console.error(err));
        
        document.getElementById("formRegistro").submit();
        window.location.href = "../index.html";
    } else {
        console.log(message);
        error.innerText = message;
        document.getElementById('contrasena').value = '';
        document.getElementById('formRegistro').classList.add("was-validated");
    }
});


const formToJSON = (elements) =>
    [].reduce.call(
        elements,
        (data, element) => {
            data[element.name] = element.value;
            return data;
        },
        {}
    );








