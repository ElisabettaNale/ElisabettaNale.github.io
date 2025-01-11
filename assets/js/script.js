// Function to activate the home page animation
// Initial delay 2 seconds
// Delay between each slide 2 seconds
document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    document.querySelector(".home-bottom-job"),
    document.querySelector(".home-bottom-student-of"),
    document.querySelector(".home-bottom-location")
  ];

  let currentIndex = 0;

  function updateElements() {
    elements[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % elements.length;
    elements[currentIndex].style.display = "flex";
  }

  setTimeout(() => {
    elements[currentIndex].style.display = "flex";
    setInterval(updateElements, 2000); 
  }, 2000); 
});


// Function to activate the slide-in animation 
const slideInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-visible');
          observer.unobserve(entry.target);  
      }
  });
}, {
  threshold: 0.5 
});
document.querySelectorAll('.slide-in').forEach(element => {
  slideInObserver.observe(element);
});


// Function to close the menu
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
      document.getElementById('menu-checkbox').checked = false; 
  });
});


// Function to send an email
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



