//estrutura do try:

try {
// Código que pode gerar uma exceção
} catch (erro) {
// Tratamento da exceção (opcional)
} finally {
// Bloco opcional que será executado sempre, independentemente de ocorrer ou não uma exceção
}

//try contém o código que pode gerar uma exceção. Caso uma exceção ocorra dentro do bloco try, a execução é interrompida e o controle passa para o bloco catch.

//catch é opcional, mas quando fornecido, permite capturar a exceção gerada no bloco try e executar um código específico para tratá-la. A variável erro representa a exceção capturada

// finally também é opcional e é usado para conter código que será executado independentemente de ocorrer ou não uma exceção no bloco try.

try {
    const resultado = 25/5
    console.log(resultado)
} catch (erro) {
    console.log("ocorreu um erro", erro) //exbibe mensagem de erro
} finally {
    console.log("final") //será exibido mesmo se tiver exceção
}

  