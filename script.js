let listElement = document.querySelector("#app ul"); // para adicionar o que foi digitado
let inputElement = document.querySelector("#app input"); // pegar o que foi digitado
let buttonElement = document.querySelector("#app button");

let tarefas = []; // craindo array para a lista de tarefas

// adicionando as tarefas na ul>li

function renderTarefas() {
  listElement.innerHTML = ""; // zerando o que esta na ul

  tarefas.map((texto) => {
    // .map() -> percorre o que tem no array e pega ele recebendo um parâmetro que é o item digitado
    let liElement = document.createElement("li");
    let tarefaTexto = document.createTextNode(texto); // criar texto

    liElement.appendChild(tarefaTexto); // coloar o texto na li
    listElement.appendChild(liElement); // colocar o li na ul
  });
}

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
  }
}

buttonElement.onclick = adicionarTarefas;
