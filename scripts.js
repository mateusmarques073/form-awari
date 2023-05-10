var form = document.getElementById("contact-form");

function handleSubmit(event) {
    event.preventDefault();

    var name = form.elements["nome"].value;
    var email = form.elements["email"].value;
    var mensagem = form.elements["mensagem"].value;

    var resultado = `Nome: ${name} \nE-mail: ${email} \nMensagem: ${mensagem}`;
    alert(resultado);
}

form.addEventListener("submit", handleSubmit);