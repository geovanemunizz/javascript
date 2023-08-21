//template strings - aula 56

//permite incorporar expressões dentro de strings de maneira mais legível e conveniente.

//para utilizar, se usa a crase (` `) ao invés de aspas simples ou duplas , pode incorporar expressões usando notação `${expressão}`
const resultado = document.getElementById("caixa");
const nome = "Jasmin";
const idade = 19;

let letras = `oi ${nome} 
você tem ${idade} 
anos né?`;
//quebra de linha no enter, juntamente com o inner.Text
resultado.innerText = letras;

// function newList(...el){
//     return el.map((elem)=>
//         `<li> ${elem}</>`
//     )
// }

// newList("letras","Items","forno").forEach((elem)=>{
//     resultado.innerHTML += elem
// })

function items (...el) {
    return el.map((elem)=> `<li> ${elem}</>`)
}

items("robs", "croc", "tinowns", "route", "ceos").forEach((el)=>{
    resultado.innerHTML += el
})

let item = ["it", "cor", "paz"]


function perc (...el){
    return el.map((elem)=> `<li> ${elem} </>`)
}
perc(...item).forEach((el)=>{
    resultado.innerHTML += el
})
console.log(item)

function elemArr (...el){
    return el.map((elem)=> `<li> ${elem} </> <hr>`)
}
elemArr(...item.concat("vida")).forEach((el)=>{
    resultado.innerHTML += el
})
console.log(item)
