const nome = document.getElementById("name");
const email = document.getElementById("email");
const telefone = document.getElementById("tele");
const area = document.getElementById("textarea");
const form = document.querySelector("form");

const validadeName = () => {
    if (!nome.value) {
        nome.classList.remove("confirm");
        nome.classList.add("required");
        nome.nextElementSibling.style.display = "block";
    } else {
        nome.classList.add("confirm");
        nome.nextElementSibling.style.display = "none";
    }
};

const validadeEmail = () => {
    if (!email.value) {
        email.classList.remove("confirm");
        email.classList.add("required");
        email.nextElementSibling.style.display = "block";
    } else {
        email.classList.add("confirm");
        email.nextElementSibling.style.display = "none";
    }
};

const validadeTelefone = () => {
    if (!telefone.value) {
        telefone.classList.remove("confirm");
        telefone.classList.add("required");
        telefone.nextElementSibling.style.display = "block";
    } else {
        telefone.classList.add("confirm");
        telefone.nextElementSibling.style.display = "none";
    }
};

const validadeArea = () => {
    if (!area.value) {
        area.classList.remove("confirm");
        area.classList.add("required");
        area.nextElementSibling.style.display = "block";
    } else {
        area.classList.add("confirm");
        area.nextElementSibling.style.display = "none";
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validadeName();
    validadeEmail();
    validadeTelefone();
    validadeArea();
});
