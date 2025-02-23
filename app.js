// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome do amigo à lista
function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();

    if (nome) {
        amigos.push(nome);  // Adiciona o nome ao array
        atualizarLista();
        document.getElementById("amigo").value = "";  // Limpa o campo de entrada
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    // Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos.splice(indiceSorteado, 1)[0];  // Remove o nome da lista

    // Exibe o nome sorteado
    document.getElementById("resultado").innerHTML = `<li>${nomeSorteado} foi sorteado!</li>`;

    // Atualiza a lista de amigos visível
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');  // Atualiza a lista
}
