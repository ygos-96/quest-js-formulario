const camposFormulario = document.querySelectorAll(".input");
const botaoEnviar = document.querySelector(".button");

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    camposFormulario.forEach((input) => {
        if (!input.value) {
            input.classList.remove("confirm");
            input.classList.add("required");
            input.nextElementSibling.style.display = "block";
        } else {
            input.classList.add("confirm");
            input.nextElementSibling.style.display = "none";
        }
    });
});
