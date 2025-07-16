let listElement = document.querySelector("#app ul"); // para adicionar o que foi digitado
let inputElement = document.querySelector("#app input"); // pegar o que foi digitado
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []; // craindo array para a lista de tarefas

// adicionando as tarefas na ul>li

function renderTarefas() {
  listElement.innerHTML = ""; // zerando o que esta na ul

  tarefas.map((texto) => {
    // .map() -> percorre o que tem no array e pega ele recebendo um parâmetro que é o item digitado
    let liElement = document.createElement("li"); // criar li
    let tarefaTexto = document.createTextNode(texto); // criar texto

    let linkElement = document.createElement("a"); // criar botao excluir
    linkElement.setAttribute("href", "#"); // definindo destino do link

    let linkTexto = document.createTextNode("Excluir"); // editando texto do link
    linkElement.appendChild(linkTexto); // aplicando texto ao link

    let posicao = tarefas.indexOf(texto); // pegando a posicao da terefa

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`); // definindo o que o link faz

    liElement.appendChild(tarefaTexto); // coloar o texto na li
    liElement.appendChild(linkElement); // colocar o link na frente da tarefa e dentro do li
    listElement.appendChild(liElement); // colocar o li na ul
  });
}

renderTarefas();

// adicionando uma operacao para criar a lista

function adicionarTarefas() {
  if (inputElement.value === "") {
    alert("Digite uma tarefa!");
    return false; // parar a execução da função e não fazer o restante dela
  } else {
    let novaTarefa = inputElement.value; // variavel para pegar valor do input

    tarefas.push(novaTarefa); // adiciona o que foi digitado no array tarefas
    inputElement.value = ""; // apaga o que foi digitado

    renderTarefas();

    salvarDados();
  }
}

buttonElement.onclick = adicionarTarefas;

// deletando uma tarefa

function deletarTarefa(posicao) {
  tarefas.splice(posicao, 1); // escolhendo o item que vai deletar e somente ele
  renderTarefas(); // renderizando novamente a lista atualizada após exclusão
  salvarDados();
}

function salvarDados() {
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}
