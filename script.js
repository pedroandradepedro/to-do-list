let listElement = document.querySelector("#app ul"); // para adicionar o que foi digitado
let inputElement = document.querySelector("#app input"); // pegar o que foi digitado
let buttonElement = document.querySelector("#app button");

let tarefas = []; // craindo array para a lista de tarefas

// adicionando uma operacao para criar a lista

function adicionarTarefas() {
  if (inputElement.value === "") {
    alert("Digite uma tarefa!");
    return false; // para a execução da função e não faz o restante dela
  } else {
    let novaTarefa = inputElement.value; // variavel para pegar valor do input

    tarefas.push(novaTarefa); // adiciona o que foi digitado no array tarefas
    inputElement.value = ""; // apaga o que foi digitado
  }
}

buttonElement.onclick = adicionarTarefas;
