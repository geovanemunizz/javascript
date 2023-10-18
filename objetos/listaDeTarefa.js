const listaDeTarefa = {
  tarefas: [],

  adicionarTarefa(descricao, dataLimite) {
    const newTarefa = {
      descricao,
      concluida: false,
      dataLimite,
    };
    this.tarefas.push(newTarefa);
  },
  TarefasConcluidas(index) {
    if (index >= 0 && index < this.tarefas.length) {
      this.tarefas[index].concluida = true;
    }
  },
  listarTarefa() {
    console.log("lista de Tarefas: ");
    this.tarefas.forEach((tarefa, elemento) => {
      const status = tarefa.concluida ? "Concluida" : "Pendente";
      console.log(
        `${elemento + 1}. ${tarefa.descricao} (Data Limite: ${
          tarefa.dataLimite
        }, Status: ${status})`
      );
    });
  },
};

listaDeTarefa.adicionarTarefa("Tomar banho", "21h");
listaDeTarefa.adicionarTarefa("Escovar os dentes", "22h");
listaDeTarefa.adicionarTarefa("Ir dormir", "23h");
listaDeTarefa.listarTarefa();
listaDeTarefa.TarefasConcluidas(0); //tomar banho: concluida
listaDeTarefa.TarefasConcluidas(1); //escovar os dentes: concluida
listaDeTarefa.listarTarefa();
