//modulos em js - aula 92


//importando o array linguagem do arquivo "./linguagens.js";

// import {linguagem,cores} from "./linguagens.js";
// import {default as loteria} from "./linguagens.js" // importa a exportação default (padrão);
// console.log(linguagem)
// console.log(loteria)
// console.log(cores)


// usando os novos nome das exportações apos serem renomeados na linha 13 do linguagens.js:

// import {linguasFaladas,novascores} from "./linguagens.js"
// console.log(linguasFaladas);
// console.log(novascores);

//

//também é possivel renomear as exportações e fazer alterações nas importações:

// import { linguagem as idioma , cores as novascores} from "./linguagens.js"; //altera o nome do array linguagem para idioma
// console.log(idioma) 
// console.log(novascores)

// faz mais sentido deixar o código do módulo em paz e fazer as alterações nas importações. Isso faz especialmente sentido quando você está importando de módulos de terceiros sobre os quais você não tem controle.

//

//criação de um objeto de módulo; 
//sintaxe : import * as nome-a-ser-chamado from "caminho-do-arquivo"

import * as arquivos from "./linguagens.js"
console.log(arquivos.cores)
console.log(arquivos.linguagem)
console.log(arquivos.default) //export dafault

//importando a função da linha 24 do "./linguagens.js"
import {allElementos} from "./linguagens.js"
console.log(allElementos(1))


//importando a função export default na linha 17 do "linguagens.js"
// import allElemento from "./linguagens.js"
// console.log(allElemento())