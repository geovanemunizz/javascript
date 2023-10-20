//array que vai ser importado para outro arquivo

const linguagem = ["português", "francês", "espanhol", "Japonês"];
const loteria = [4362, 7181, 9181, 8290, 6351, 9183, 3541];
const cores = ["Azul", "verde", "Vermelho"];

//exportações:
export { linguagem, loteria, cores };
export default loteria; //exportação padrão

// exporta e renomeia os array:
// export {linguagem as linguasFaladas, cores as novascores}

//pode definir uma função para ser exportada diretamente na linha, e nao ao final do script:
//exportando função padrão:

// export default function allElementos(){
//     return loteria
// }

//exportando função comum
export function allElementos(value) {
  return linguagem[value];
}
