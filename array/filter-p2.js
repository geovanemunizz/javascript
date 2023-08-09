//método filter parte 2 - aula 43

const caixamarcas = document.querySelector("#caixaMarcas");
const marcas = [...document.querySelectorAll(".nome")];
const novo = document.querySelector("#c1");
const items = [
  "html",
  "css",
  "Javascript",
  "Typescript",
  "Angular",
  "php",
  "MySql",
];
const botaoSelecionado = document.getElementById("selecionaMarca");
const removeMarca = document.getElementById("removeMarca");
const botaoAntes = document.getElementById("adicionaAntes");
const botaoDepois = document.getElementById("adicionaDepois");
const forms = document.getElementById("nomeMarca");

let indice = 0;
const oneSelecao = () => {
  const variosInput = [...document.querySelectorAll(".selecionado")];
  variosInput.map((evt) => {
    evt.classList.remove("selecionado");
  });
};

const novoItem = (el) => {
  const newElement = document.createElement("div");
  newElement.setAttribute("class", "nome c1");
  newElement.setAttribute("id", "c" + indice);
  newElement.innerHTML = el;
  newElement.addEventListener("click", (evt) => {
    oneSelecao();
    evt.target.classList.toggle("selecionado");
  });
  return newElement;
  // const ordem = document.createElement("div");
  // ordem.setAttribute("class", "ordem");

  // const entrada = document.createElement("input");
  // entrada.setAttribute("type", "radio");
  // entrada.setAttribute("name", "alcunha");

  // ordem.appendChild(entrada);
  // newElement.appendChild(ordem);
};
items.map((el) => {
  const novo = novoItem(el);
  caixamarcas.appendChild(novo);
  indice++;
  //quando percorrer o map, vai acrescentar em 1 o seu valor
});

// botaoSelecionado.addEventListener("click", (evt) => {
//   const radios = [...document.querySelectorAll("input[type=radio]")]; //obtem todos os input do tipo radio

//   // const radioSelecionado = radios.find(el => el.checked) //poderia usar o método find

//   let radioSelecionado = radios.filter((el, indice, array) => {
//     return el.checked;
//   });
//   radioSelecionado = radioSelecionado[0];
//     const languageSelecionada = radioSelecionado.parentNode.parentNode.firstChild.textContent;
//   const languageSelecionada =
//     radioSelecionado.parentNode.previousSibling.textContent;
//   alert("Linguagem selecionada: " + languageSelecionada);
//   // console.log(radios);
//   // console.log(radioSelecionado);
//   // console.log(languageSelecionada);
// });

// função remove - aula 44

const languageSelecionada = () => {
  const variosInput = [...document.querySelectorAll(".selecionado")];
  return variosInput[0];
};

//botão selecionado
botaoSelecionado.addEventListener("click", (evt) => {
  try {
    alert("linguagem selecionada: " + languageSelecionada().innerHTML);
  } catch (excecao) {
    alert("selecione um item");
  }

  // if (todosRadio != undefined) {
  //   const linguagemSelecionada =
  //     todosRadio.parentNode.previousSibling.textContent;
  //   alert("linguagem selecionada: " + linguagemSelecionada);
  // } else {
  //   alert("selecione um item");
  // }
});

//botao de remover o input
removeMarca.addEventListener("click", (evt) => {
  const lingSelec = languageSelecionada();
  if (lingSelec != undefined) {
    alert("linguagem removida: " + languageSelecionada().innerHTML);
    lingSelec.remove();
  } else {
    alert("selecione um item para remover");
  }
});

// criando os elementos - aula 45

botaoAntes.addEventListener("click", (evt) => {
  try {
    if (forms.value != "") {
      const novaLinguagem = novoItem(forms.value);
      caixamarcas.insertBefore(novaLinguagem, languageSelecionada()); //adiciona o novo item antes
    } else {
      alert("digite uma linguagem");
    }
  } catch (excecao) {
    alert("selecione um item");
  }
});

botaoDepois.addEventListener("click", (evt) => {
  try {
    if (forms.value != "") {
      const newLinguagem = novoItem(forms.value);
      caixamarcas.insertBefore(newLinguagem, languageSelecionada().nextSibling);
    } else {
      alert("digite uma linguagem");
    }
  } catch (excecao) {
    alert("selecione um item");
  }
});

// método toggle - aula 46
