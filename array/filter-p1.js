// método filter - aula 42

// o método filter vai percorrer o array, e permite fazer uma filtragem dos elementos especificos.

//para usar o filter, é possivel criar uma função seperada ou criar diretamente uma arrow function.

//por padrão o filter passa para a função que está operando, o valor, posição(indice) e o array. Não é necessário colocar todos os três parâmetros.

//função separada:
//const filtro = idade.filter(filtragem)
// const filtragem = (valor, indice, array) => {
//     if (valor >= 18) {
//      return valor
//     }
//  }


//arrow function
const idade = [19, 3, 43, 72, 18, 15, 13, 16, 23, 48]
// const maiorIdade = idade.filter((val) => {
//     if (val >= 18) {
//         return val
//     }

// })

// const menorIdade = idade.filter((val) => {
//     if(val < 18) {
//         return val
//     }
// })


const menorIdade = idade.filter((valor) => {
    if(valor < 18) {
        return valor
    }
})


const maiorIdade = idade.filter((val) => {
    if(val >= 18) {
        return val
    }
})

console.log(idade) // saída do array completo
console.log(maiorIdade) //saída apenas de 6 elementos maior ou igual a 18
console.log(menorIdade)//saída  apenas 4 elementos menor que 18
