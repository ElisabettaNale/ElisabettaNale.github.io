///////////////////////////////////////////////////////////////
// Funzioni
///////////////////////////////////////////////////////////////

// Funzione per creare gli elementi del DOM
function createElement(type, cssClass, text) {
  let element = document.createElement(type);
  element.classList.add(cssClass);
  element.textContent = text;

  return element;
}

///////////////////////////////////////////////////////////////
// STRUTTURA DOM
///////////////////////////////////////////////////////////////

// Inizializza il counter
let counter = document.querySelector(".counter");

// Crea il numero
let number = createElement("div", "number", "0");
counter.appendChild(number);

// Crea il contenitore per i pulsanti
let buttonsContainer = createElement("div", "buttons", "");
counter.appendChild(buttonsContainer);

// Crea i pulsanti +/-
let plusButton = createElement("button", "button", "+");
let minusButton = createElement("button", "button", "-");
buttonsContainer.appendChild(plusButton);
buttonsContainer.appendChild(minusButton);

// Crea il pulsante reset
let resetButton = createElement("button", "button-reset", "RESET");
counter.appendChild(resetButton);

///////////////////////////////////////////////////////////////
// EVENTI
///////////////////////////////////////////////////////////////

// Funzione per aggiungere e rimuovere l'effetto click
function applyClickEffect(button, effectClass = "button-clicked") {
  button.classList.add(effectClass);
  setTimeout(() => {
    button.classList.remove(effectClass);
  }, 100);
}
// Funzione per gestire gli eventi sui pulsanti
function handleEvent(event) {
  let target = event.target;

  // click
  if (event.type === "click") {
    if (target === plusButton) {
      number.textContent++;
    } else if (target === minusButton) {
      number.textContent--;
    } else if (target === resetButton) {
      number.textContent = 0;
    }
    applyClickEffect(target);
  }
}

// Event listener per click
counter.addEventListener("click", handleEvent);