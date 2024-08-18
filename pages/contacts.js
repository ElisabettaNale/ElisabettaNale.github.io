function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_mqemc18", "template_ilqfayo", params).then(alert("Email has been sent successfully!"))

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

