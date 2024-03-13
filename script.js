function changeMode() {

    let container = document.querySelector('html');
    let wrap = document.querySelector(".wrap-icons");
    container.classList.toggle("dark-mode-active");
    wrap.classList.toggle("change");

}

document.addEventListener("DOMContentLoaded", changeMode());