document.getElementById("formulario-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores do formulário
    var name = document.getElementById("nomeInput").value;
    var phone = document.getElementById("telefoneInput").value;

    // Criar uma nova linha na tabela de contatos
    var table = document.getElementById("tabela-contato");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var phoneCell = row.insertCell(1);
    var deleteCell = row.insertCell(2);
    nameCell.innerHTML = name;
    phoneCell.innerHTML = phone;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", function() {
        deleteContact(this);
    });
    deleteCell.appendChild(deleteButton);

    // Limpar os campos do formulário
    document.getElementById("nomeInput").value = "";
    document.getElementById("telefoneInput").value = "";
});

function deleteContact(button) {
    // Obter a linha da tabela que contém o botão "Excluir" clicado
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}