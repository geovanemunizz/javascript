function aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;

  this.anomimous = function () {
    setTimeout(function () {
      console.log(this.nome);
      console.log(this.nota);
    }, 2000);
  };

  this.arrow = function () {
    setTimeout(() => {
      console.log(this.nome);
      console.log(this.nota);
    }, 1000);
  };
}
const chamada = new aluno("Geovane", 10);
chamada.anomimous();
chamada.arrow()