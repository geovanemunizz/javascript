// funcao de adicionar tarefa:

function addTarefa() {
  const title = document.querySelector("#task-text").value;

  if (title) {
    // clonar template
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);
    newTask.querySelector(".task-title").textContent = title;

    //remove class
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    //add tarefa na lista
    const lista = document.querySelector("#task-list");
    lista.appendChild(newTask);

    //remove
    const removeList = newTask
      .querySelector(".remove-btn")
      .addEventListener("click", () => {
        removeTarefa(newTask);
      });

    //completa task:

    const doneTask = newTask.querySelector(".done-btn");
    doneTask.addEventListener("click", () => {
      completarTask(newTask);
    });
    //limpar texto

    document.querySelector("#task-text").value = "";
  }
}

function removeTarefa(task) {
  task.parentNode.removeChild(task);
}

function completarTask(task) {
  task.classList.toggle("done");
}

const addBotao = document.querySelector("#botao");
addBotao.addEventListener("click", (evt) => {
  evt.preventDefault();
  addTarefa();
});
