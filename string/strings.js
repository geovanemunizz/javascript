let nome = new String("Daenerys");
let secondName = new String("Daenery");
console.log(nome.localeCompare(secondName)); //1

/* por serem objetos string, a forma correta de fazer a comparação entre essas strings é com localeCompare().
    E retorna um número que indica se a string de referência vem antes ou depois, ou se são iguais 
*/

let praia =  new String ("água")
let mar = new String ("barco")
mar = "água de coco"
console.log(mar.replace(mar,praia)) // água
console.log(praia.replace(praia,"areia")) // areia
console.log(mar) //"água de coco"

var thirdName = "Senhora dos sete reinos"
console.log(thirdName.search("S")) //0
console.log(thirdName.slice(12,23))
console.log(thirdName.split(" "))