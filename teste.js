// const inver = (el) => parseInt(el)
// const dobro = (el) => el * 2
// let croc = ["44", "33", "12", "32"].map(inver)
// console.log(croc)


const aumentoSalario = (salario) => {
  let perAumento, valorAumento, novoSalario

  if(salario <= 280) {
    perAumento = 20;
  } else if (salario <= 700) {
    perAumento = 15;
  } else if (salario <= 1500) {
    perAumento = 10
  } else {
    perAumento = 5
  }

  valorAumento = (salario * perAumento) /100
  novoSalario = salario + valorAumento

  console.log("salario antes do reajuste: " + salario)
  console.log("percentual de salario : " + perAumento)
  console.log("Valor de aumento: " + valorAumento)
  console.log(" novo salario: " + novoSalario)
}

let salarioContador = parseFloat(prompt("digite o seu sálario"))
aumentoSalario(salarioContador)