//caixa de diálogo js

// As caixas de diálogo são elementos gráficos que permite interagir com o usário exibindo mensagens, solicitando entrada de dados, etc.

//existem três tipos principais de caixa de diálogo no JavaScript: alert(),confirm() e prompt()

//alert(): 
// alert("mensagem de alerta")

//confirm(): exibe um botão "OK" e um botão "Cancelar". Ela é usada para obter uma confirmação do usuário. Retorna true se clicar em "OK" e false se clicar em "Cancelar".
// var confirme = confirm("Tem certeza de que quer avançar?")

//prompt() exibe uma mensagem e um campo de entrada de texto. Retorna o valor inserido pelo usuário ou "null" se clicar em "cancelar"
// var nome = prompt("digite seu nome")
// console.log(nome)


const botaoAlerta = document.getElementById("BotaoAlerta")
const botaoConfirm = document.getElementById("BotaoConfirm")
const botaoPrompt = document.getElementById("BotaoPrompt")


botaoAlerta.addEventListener("click",(evento)=>{
    alert()
});
botaoConfirm.addEventListener("click",(evento)=>{
    const click = confirm("Tem certeza que quer sair da página?")
    if(click){
        console.log("resultado é verdadeiro")
    } else {
        console.log("resultado é false")
    }

});
botaoPrompt.addEventListener("click",(evento)=>{   
    prompt("digite sua idade")
});
