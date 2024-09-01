function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress-bar-fill").style.width = `${value}%`;
    progressBar.querySelector(".progress-bar-text").textContent = `${value}%`;
}

const pBar = document.querySelector(".progress-bar")
updateProgressBar(pBar, 25);