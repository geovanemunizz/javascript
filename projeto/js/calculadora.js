// const previousOperation = document.querySelector("#previous-operation");
// const currentOperation = document.querySelector("#current-operation");
// const botao = document.querySelectorAll("#buttons button");

// class calculadora {
//   constructor(previousOperationText, currentOperationText) {
//     this.previousOperationText = previousOperationText;
//     this.currentOperationText = currentOperationText;
//     this.currentOperation = "";
//     this.previousOperation = "";
//   }
//   //add digito no display da calculadora
//   addDigito(digito) {
//     if (digito === "." && this.currentOperationText.innerText.includes(".")) {
//       return;
//     }
//     this.currentOperation = digito;
//     this.updateDisplay();
//   }

//   processOperation(operation) {
//     if (this.currentOperationText.innerText === "" && operation !== "C") {
//       if (this.previousOperationText.innerText !== "") {
//         this.changeOperation(operation);
//       }
//       return;
//     }

//     let operationValue;
//     let previous = +this.previousOperationText.innerText.split(" ")[0];
//     let current = +this.currentOperationText.innerText;

//     switch (operation) {
//       case "+":
//         operationValue = previous + current;
//         this.updateDisplay(operationValue, operation, current, previous);
//         break;
//       case "-":
//         operationValue = previous - current;
//         this.updateDisplay(operationValue, operation, current, previous);
//         break;
//       case "/":
//         operationValue = previous / current;
//         this.updateDisplay(operationValue, operation, current, previous);
//         break;
//       case "*":
//         operationValue = previous * current;
//         this.updateDisplay(operationValue, operation, current, previous);
//         break;
//       case "DEL":
//         this.processDelOperation();
//         break;
//       case "CE":
//         this.clearCurrentOperation();
//         break;
//       case "C":
//         this.processClearAllOperation();
//         break;
//       case "=":
//         this.processEqualOperator()
//         break;
//       default:
//         return;
//     }
//   }

//   //change value para a calculadora
//   updateDisplay(
//     operationValue = null,
//     operation = null,
//     current = null,
//     previous = null
//   ) {
//     if (operationValue === null) {
//       this.currentOperationText.innerText += this.currentOperation;
//     } else {
//       //check value is zero
//       if (previous === 0) {
//         operationValue = current;
//       }
//       // add current value
//       this.previousOperationText.innerText = `${operationValue} ${operation}`;
//       this.currentOperationText.innerText = "";
//     }
//   }

//   changeOperation(operation) {
//     const mathComplete = ["*", "/", "+", "-"];
//     if (!mathComplete.includes(operation)) {
//       return;
//     }
//     this.previousOperationText.innerText =
//       this.previousOperationText.innerText.slice(0, -1) + operation;
//   }

//   processDelOperation() {
//     this.currentOperationText.innerText =
//       this.currentOperationText.innerText.slice(0, -1);
//   }
//   clearCurrentOperation() {
//     this.currentOperationText.innerText = "";
//   }
//   processClearAllOperation() {
//     this.previousOperationText.innerText = "";
//     this.currentOperationText.innerText = "";
//   }
//   processEqualOperator(){
//     const operacao = this.previousOperationText.innerText.split(" ")[1];
//     this.processOperation(operacao)
//   }
// }

// const calc = new calculadora(previousOperation, currentOperation);
// botao.forEach((el) => {
//   el.addEventListener("click", (evt) => {
//     const valor = evt.target.innerText;
//     if (+valor >= 0 || valor === ".") {
//       calc.addDigito(valor);
//     } else {
//       calc.processOperation(valor);
//     }
//   });
// });

const currentOperation = document.querySelector("#current-operation");
const previousOperation = document.querySelector("#previous-operation");
const botao = document.querySelectorAll("#buttons button");

class calculadora {
  constructor(previousOperation, currentOperation) {
    this.previousOperationText = previousOperation;
    this.currentOperationText = currentOperation;
    this.previousOperation = "";
    this.currentOperation = "";
  }

  addDigito(digito) {
    if (digito === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }
    this.currentOperation = digito;
    this.updateDisplay();
  }

  processOperation(operation){
    if(this.currentOperationText.innerText ==="" && operation !== "C"){
      if(this.previousOperationText.innerText !== ""){
        this.changeOperation(operation)
      }
      return;
    }

    let operationValue;
    let previous = +this.previousOperationText.innerText.split(" ")[0];
    let current = +this.currentOperationText.innerText;

    switch(operation){
      case "+":
        operationValue = current + previous
        this.updateDisplay(operationValue,operation, current,previous)
        break;
      case "-":
        operationValue = current - previous
        this.updateDisplay(operationValue,operation, current,previous)
        break;
      case "*":
        operationValue = current * previous
        this.updateDisplay(operationValue,operation, current,previous)
        break;
      case "/":
        operationValue = current + previous
        this.updateDisplay(operationValue,operation, current,previous)
        break;
      case "DEL":
        this.delOperation()
        break;
      case "CE":
        this.clearOperation()
        break;
      case "C":
       this.clearAllOperation()
        break;
      case "=":
        this.equalOperation()
        break;
      default:
        return;
    }
  }

  updateDisplay(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ){
    if(operationValue === null){
      this.currentOperationText.innerText += this.currentOperation;
    } else{
      if(previous === 0){
        operationValue = current
      }
      this.previousOperationText.innerText = `${operationValue} ${operation}`
      this.currentOperationText.innerText = ""
    }
  }
  changeOperation(operation){
    const mathComplete = ["+","-","*","/"]
    if(!mathComplete.includes(operation)){
      return;
    }
    this.previousOperationText.innerText = 
      this.previousOperationText.innerText.slice(0,-1) + operation;
  }

  delOperation(){
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1);
  }
  clearOperation(){
    this.currentOperationText.innerText =  ""
  }
  clearAllOperation(){
    this.currentOperationText.innerText = ""
    this.previousOperationText.innerText = "";
  }
  equalOperation(){
    const operacao = this.previousOperationText.innerText.split(" ")[1];
    this.processOperation(operacao)
  }
}

const calc = new calculadora(previousOperation, currentOperation);
botao.forEach((el) => {
  el.addEventListener("click", (evt) => {
    const valor = evt.target.innerText;
    if (+valor >= 0 || valor === ".") {
      calc.addDigito(valor);
    } else {
      calc.processOperation(valor);
    }
  });
});
