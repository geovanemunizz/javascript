const pessoa = Symbol("nome");
const role = Symbol("nome");
const org = Symbol("G2");
console.log(org.description); //exibe a descrição do Symbol

const player = {
  [pessoa]: "Tinowns",
  [role]: "Mid Lane",
  [org]: "Loud",
};
for (let prop in player) {
  console.log(prop);
}
console.log(player[pessoa]);
