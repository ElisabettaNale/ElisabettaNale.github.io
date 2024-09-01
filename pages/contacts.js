function sendMail() {

    let emailField = document.getElementById("email");
    let params = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: emailField.value,
        message: document.getElementById("message").value,
    }

    if (params.name === "" || params.surname === "" || params.email === "" || params.message === "") {
        alert("Compila tutti i campi prima di inviare!")
        return
    } else if (!emailField.checkValidity()) {
        alert("Formato dell'email non valido!")
        return
    } else {
        emailjs.send("service_mqemc18", "template_ilqfayo", params).then(alert("L'email è stata inviata correttamente!"))

        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }

}

