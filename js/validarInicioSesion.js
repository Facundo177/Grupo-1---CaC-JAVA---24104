const checkCredentials = (password, email) => {
    if ("Password123@#" !== password || "email123@gmail.com" !== email) {
        return "Email o contraseña incorrectos";
    }

    return null;
}

document.getElementById('formLogin').addEventListener('submit', (event) => {
    event.preventDefault();

    const error = document.getElementById('errorPassword');
    const password = this.contrasena.value;
    const email = this.email.value;
    const message = checkCredentials(password, email);

    if (!message) {
        document.getElementById("formLogin").submit();
        window.location.href = "../index.html";
    } else {
        console.log(message);
        error.innerText = message;
        document.getElementById('contrasena').value = '';
        document.getElementById('email').classList.add("border-danger");
        document.getElementById('contrasena').classList.add("border-danger");
        document.getElementById('errorPassword').style.display = "block";
    }
});