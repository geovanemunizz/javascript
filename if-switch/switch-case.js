// switch case aula - 14

// switch case, avalia uma expressão e de acordo com o resultado, ele compara com  os case que ele está programado

let caso = 6;

switch (caso) {
  case 1:
    console.log("primeiro lugar");
    break; //terminar todo caso com um break

  case 2:
    console.log("segundo lugar");
    break;

  case 3:
    console.log("terceiro lugar");
    break;

  case 4:
  case 5:
  case 6:
    console.log("classificado");
    break;

  default: //padrão
    console.log("Não se classificou");
    break;
}

let dia = 6;
let mensagem = "";

switch (dia) {
  case 1:
    mensagem = "Segunda feira";
    break;
  case 2:
    mensagem = "Terça-Feira";
    break;
  case 3:
    mensagem = "Quarta-Feira";
    break;
  case 4:
    mensagem = "Quinta-Feira";
    break;
  case 5:
    mensagem = "Sexta-Feira";
    break;

  default:
    console.log("Final de semana");
    break;
}

console.log(mensagem);
