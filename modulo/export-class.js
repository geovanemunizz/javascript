// exportando e importando classes em js - aula 95

//pode usar os membos static sem instanciar a class na importação
class objetos {
  static itens = ["escova","sapato","sandália", "meia", "controle"]

  constructor(){}

  static getAllItens(){
    return this.itens
  }
  static getItem(index){
    return this.itens[index]
  }
  static addNewItems(value){
    this.itens.push(value)
  }
  static removeItems(){
    this.itens = []
  }
}
export default objetos