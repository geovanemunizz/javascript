// entendemndo Elementos do DOM - aula 38

const caixa = document.querySelector("#caixa1");
const items = [...document.querySelectorAll(".nome")];

//os elementos do DOM:


 /*
 raíz(root): é o topo da hierarquia, a raíz do document.

 pai (parent): O elemento pai é o elemento que contém outro elemento dentro de si. Para identificar o elemento pai de um elemento específico, você pode acessar a propriedade parentNode. Todo elemento só tem um pai, exceto o root (html).

 filho (child): O elemento filho é um elemento contido dentro de outro elemento (o pai), na hierarquia está abaixo do pai. Para identificar os elementos filhos de um elemento específico, você pode acessar a propriedade childNodes

 irmãos (siblings): Os elementos irmãos são elementos que têm o mesmo elemento pai. estão no mesmo nível da árvore DOM. Pode acessar a propriedade nextSibling para o próximo irmão e previousSibling para o irmão anterior.
*/

// console.log(caixa.children[caixa.children.length-1]); //retorna a última div <php>

// console.log(caixa.children[0] //array comça no zero por isso o primeiro elemento é [0] 

// console.log(caixa.firstElementChild) //retorna o primeiro filho <css>
// console.log(caixa.lastElementChild)  //retorna o último filho <php>
// console.log(caixa.children) //retorna todos os elementos filhos da div caixa

//root é a raiz

console.log(document.getRootNode()) //getRootNode é um método por isso precisa do (), já o children é uma propriedade

// console.log(items[0].getRootNode()) // o root é o document, todo o html

console.log(items[0].ownerDocument)