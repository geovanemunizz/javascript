// symbol - aula 98

class esports {
  constructor(nome) {
    this.nome = nome;
    this.id = Symbol();
  }
}

let players = [
  new esports("player1"),
  new esports("player2"),
  new esports("player3"),
  new esports("player4"),
  new esports("player5"),
  new esports("player5"),
];

let del = players[0].id
// exbibe apenas os valores diferentes de 'del':
players = players.filter((play)=>{
    return play.id != del
})

//exibe apenas os valores diferentes de "player5"
// players = players.filter((play)=>{
//     return play.nome != "player5"
// })

let Simbol = players.filter((el)=>{
  return el.nome == "player5"
})
console.log(players)
console.log(del)
console.log(Simbol)
