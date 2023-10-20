const palavras = ["cor", "Logo", "happening", "sexta","sexta","sexta","sexta","sexta","sexta"]

const filtragem = palavras.filter((item,index,elemento)=>{
    return elemento.indexOf(item) === index
})
console.log(filtragem)