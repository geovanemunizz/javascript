const caixaMarcas = document.querySelector("#caixaMarcas");
const marcas = [...document.querySelectorAll(".nome")];
const items = ["Kaguya-sama", "one piece", "Bleach", "oshi no ko", "Kimetsu"];
const novo = document.querySelector("#c1");

const botaoSelecionado = document.getElementById("selecionaMarca");
const removeMarca = document.getElementById("removeMarca");
const adicionaAntes = document.getElementById("adicionaAntes");
const adicionaDepois = document.getElementById("adicionaDepois");
const forms = document.getElementById("nomeMarca");

let indice = 0;
const novoItem = (el) => {
  const newElement = document.createElement("div");
  newElement.setAttribute("class", "nome c1");
  newElement.setAttribute("id", "c" + indice);
  newElement.innerHTML = el;

  const ordem = document.createElement("div");
  ordem.setAttribute("class", "ordem");

  const entrada = document.createElement("input");
  entrada.setAttribute("type", "radio");
  entrada.setAttribute("name", "alcunha");

  ordem.appendChild(entrada);
  newElement.appendChild(ordem);
  return newElement;
};

items.map((el) => {
  const novo = novoItem(el);
  caixaMarcas.appendChild(novo);
  indice++;
});

const inputSelecionada = () => {
   const radios = document.querySelectorAll("input[type=radio]")
   for(const radio of radios) {
    if(radio.checked) {
        return radio
    }
   }
   return null
  };
  
botaoSelecionado.addEventListener("click", (evt) => {
  const todosRadio = inputSelecionada();
  try {
    const linguagemSelecionada =
      todosRadio.parentNode.previousSibling.textContent;
    alert("linguagem selecionada: " + linguagemSelecionada);
  } catch (excecao) {
    alert("selecione um item");
  }

});

removeMarca.addEventListener("click", (evt)=> {
  const allRadio = inputSelecionada()
  if(allRadio != undefined) {
    const lsSelecionada = allRadio.parentNode.parentNode
    lsSelecionada.remove()
  } else {
    alert("seelecione um item para remover")
  }
})

adicionaAntes.addEventListener("click", (evt)=> {
  const allRadio = inputSelecionada()

  try {
    if(forms.value != "") {
      const linguagemSelecionada = allRadio.parentNode.parentNode
      console.log(linguagemSelecionada)
      const novaLinguagem = novoItem(forms.value)

      caixaMarcas.insertBefore(novaLinguagem,linguagemSelecionada)
    } else{
      alert("adicione um anime ")
    }
  } catch {
    alert("selecione um item")
  }
})

adicionaDepois.addEventListener("click", (evt) => {
  const allRadio = inputSelecionada()

  try {
    if(forms.value !="") {
      const linguagemSelecionada = allRadio.parentNode.parentNode;
      const novaLinguagem = novoItem(forms.value)

      caixaMarcas.insertBefore(novaLinguagem, linguagemSelecionada.nextSibling) 
    } else{
      alert("selecione um anime")
    }
  } catch {
    alert("selecione um item")
  }
})