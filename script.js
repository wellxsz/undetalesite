(function() {
    emailjs.init('5tAhgDpIvV6eZ1lFG');  // Substitua com seu User ID
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Exibe a mensagem de status (enviando)
    document.getElementById("status-message").innerHTML = "Enviando...";

    // Obter os valores do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Enviar o e-mail usando o EmailJS
    emailjs.send("service_6ldbzfd", "template_48t8jc8", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log("Mensagem enviada:", response);
        document.getElementById("status-message").innerHTML = "Mensagem enviada com sucesso!";
    }, function(error) {
        console.log("Erro ao enviar a mensagem:", error);
        document.getElementById("status-message").innerHTML = "Falha ao enviar a mensagem. Tente novamente.";
    });
});

window.onload = function() {
    document.querySelector('h1 span').classList.add('typing');
};
