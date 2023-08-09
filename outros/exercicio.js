const verificar = () => {
    const opcao = parseInt(document.getElementById("entrada").value)
    if(opcao == 1 || opcao ==2 || opcao ==3) {
        console.log("tem direito a fila")
    } else if (opcao > 4) {
        console.log("incorreto")
    }
    else {
        console.log("não tem direito")
    }
}
verficar()