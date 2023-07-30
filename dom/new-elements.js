// criando novos elementos e adicionando no dom - aula 40


const caixa = document.getElementById("caixa1")
const lista = [...document.getElementsByClassName("nome")]
const nome = ["css", "java", "javascript", "typescript","python", "php", "angular"]

// const newElement  = document.createElement("div") //cria uma div
// // newElement.classList.add("nome","c1") //adciona a classe c1 e nome para o newElement
// newElement.setAttribute("class", "nome c1") //outra forma de adicionar as classes.

// newElement.innerHTML="Angular" //altera o texto do elemento

// newElement.setAttribute("id", "c7") //adiciona o id c7 para o elemento. Primeiro passa o atributo e depois o valor

// caixa.appendChild(newElement) //anexa o new element à div caixa

nome.map((el,chave)=> {
    const elemento  = document.createElement("div")
    elemento.setAttribute("class", "nome c1")
    elemento.setAttribute("id", "c" + (chave+1))
    elemento.innerHTML=el
    caixa.appendChild(elemento)
})
