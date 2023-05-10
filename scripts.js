var form = documents.getElementById("contact-form");

function handleSubmit(event) {
    event.preventDefault();

    var name = form.elements["nome"].value;
    var email = form.elements["email"].value;
    var mensagem = form.elements["mensagem"].value;

    console.log(nome, email, mensagem);


    var resultado = `Nome: ${name} \nE-mail: ${email} \nMensagem: ${mensagem}`;
    alert(resultado);
}

form.addEventListener("submit", handleSubmit);