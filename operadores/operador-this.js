//operador this - aula 29

function aluno(nome, nota) {
  this.nome = nome; //é como se fosse uma variavel declarada para a função aluno e recebe o parametro nome
  this.nota = nota; //this faz referencia a propria função que está relacionada
  return nome + "sua nota foi: " + nota;
}
console.log(aluno("geovane ", 2));

function escola(materia, idade) {
  this.idade = idade;
  this.materia = materia;

  this.dados_anom = function () {
    setTimeout(function () {
      //não consegue encontrar o this.idade e nem this.materia
      //setTimeout gera um atraso. o setTimout sombreia o this.idade=idade e o materia, por isso é undefined
      console.log(this.idade);
      console.log(this.materia);
    }, 2000); //atraso de 2seg
  };

  this.dados_arrow = function () {
    setTimeout(() => {
      // o arrow function contorna o problema do this gerado pelo setTimeout
      console.log(this.idade);
      console.log(this.materia);
    }, 2000); //atraso de 2seg
  };
}
const director = new escola("Filosofia", 18); //usa o operador new já que este é um sistema de classes
director.dados_anom();
director.dados_arrow();
