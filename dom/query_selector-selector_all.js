// querySelector e queryselectorAll - aula 33

// não são especificos para um tipo de index

// querySelector é mais génerico, obtem os elementos especificados, independente da classe, id, tag.

const query_todasDiv = document.querySelector("div"); //retorna o primeiro elemento encontrado, do elemento especificado

const query_todasDiv2 = [...document.querySelectorAll("#c3")]; //retorna a coleção com todos os elementos especificados.

const query_todosNomes = [...document.querySelectorAll(".nome")]; // usa o . para chamar a classe nome no arquivo html, usa o # para id

const selecao = [...document.querySelectorAll("div[class]")]; //obtem somente as div que tem o atributo class no html, pode colocar o id ou outros atributos

const dois_items = [...document.querySelectorAll("p, #c5, #c9 ")]; //usando a virgula é possivel obter dois ou mais elementos do html

const elem_dentro = [...document.querySelectorAll("div > p")]; // obtem as div que tem a tag p dentro dela

query_todasDiv2.map((elementos) => {
  elementos.classList.add("estrela");
});

// console.log(query_todasDiv);
// console.log(query_todasDiv2);
// console.log(query_todosNomes);
// console.log(selecao)
// console.log(dois_items);
console.log(elem_dentro);
