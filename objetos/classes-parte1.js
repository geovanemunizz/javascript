//exercicios sobre classes em js - aula 63

const NomeManga = document.querySelector("#nome");
const personagem = document.querySelector("#personagem");
const capitulo = document.querySelector("#capitulos");
const NumeroDePaginas = document.querySelector("#NumPaginas");
const visitantes = document.querySelector("#visitas");
const RadioAnime = document.querySelector("#anime");
const RadioManhwa = document.querySelector("#manhwa");
const RadioYes = document.querySelector("#yes");
const RadioNot = document.querySelector("#not");
const botao = document.getElementById("botao");
const caixa = document.querySelector("#box")

function desabilitar() {
  const RadioYesChecked = RadioYes.checked; //estado dos radio
  const radioNotChecked = RadioNot.checked;
  capitulo.disabled = RadioYesChecked;
  NumeroDePaginas.disabled = RadioYesChecked;

  capitulo.checked = !radioNotChecked; //definição com base no botão não
  NumeroDePaginas.checked = !radioNotChecked;
}

//função para caso o mangá seja descontinuado
function MangaEncerrado() {
  if (RadioYes.checked != false) alert("Mangá encerrado");
}

RadioAnime.addEventListener("click", () => {
  capitulo.removeAttribute("disabled");
  NumeroDePaginas.removeAttribute("disabled");
  desabilitar();
});
RadioManhwa.addEventListener("click", () => {
  capitulo.removeAttribute("disabled");
  NumeroDePaginas.removeAttribute("disabled");
  desabilitar();
});

// Evento de click para os radio
RadioYes.addEventListener("click", () => {
  desabilitar();
});

RadioNot.addEventListener("click", () => {
  desabilitar();
});

//valores do input para a div box
let Array_anime = [];

const ExibiçaoDeValores = () => {
  Array_anime.forEach((el) => {
  caixa.innerHTML = "";
    const div = document.createElement("div");
    const BtnRemover = document.createElement("button");
    const RemoveAll = document.createElement("button");
    RemoveAll.setAttribute("class", "botao");
    RemoveAll.innerHTML = "Remover Tudo";
    BtnRemover.setAttribute("class", "botao");
    BtnRemover.innerHTML = "Remover";
    div.setAttribute("class", "exibir");
    div.innerHTML = `Nome: ${el.nome}${"<br>"}`;
    div.innerHTML += `Capitulo: ${el.capitulo}${"<br>"}`; // += para não concatenar
    div.innerHTML += `personagem: ${el.personagem}${"<br>"}`;
    div.innerHTML += `Número de páginas: ${el.NumeroPaginas}${"<br>"}`;
    div.innerHTML += `Visitas: ${el.visitas}${"<br>"}`;
    caixa.appendChild(div);
    div.appendChild(BtnRemover);
    div.appendChild(RemoveAll);
    BtnRemover.addEventListener("click", () => {
      caixa.removeChild(div);
      caixa.removeChild(BtnRemover);
    });
    RemoveAll.addEventListener("click", () => {
      caixa.innerHTML = "";
      NomeManga.value = "";
      capitulo.value = 0;
      personagem.value = "";
      NumeroDePaginas.value = 0;
      visitantes.value = 0;
    });
  });
};

botao.addEventListener("click", () => {
  if (RadioAnime.checked) {
    const novo = new manga(NomeManga.value, capitulo.value,personagem.value);
    // capitulo.value
    Array_anime.push(novo);
  } else {
    const novo = new manga(
      NomeManga.value,
      capitulo.value,
      personagem.value,
      NumeroDePaginas.value,
      visitantes.value
    );
    console.log(novo);
    console.log(personagem.value);
    console.log(capitulo.value);
    console.log(NomeManga.value);
    console.log(NumeroDePaginas.value);
    console.log(visitantes.value);
  }
  ExibiçaoDeValores();
});

class manga {
  constructor(nome, capitulo) {
    this.nome = nome;
    this.capitulo = capitulo;
    this.personagem = personagem.value;
    this.NumeroPaginas = NumeroDePaginas.value;
    this.visitas = visitantes.value;
    this.continuacaoAnime = MangaEncerrado();
  }
}

class manhwa extends manga {
  constructor(nome, capitulo, autor, visitas) {
    super(nome, capitulo);
    this.autor = autor;
    this.visitas = visitas;
  }
  VisualNovel = function () {
    if (this.visitas >= 0) {
      this.visitas--;
    }
  };
}

class anime extends manga {
  constructor(nome, capitulo) {
    super(nome, capitulo);
    this.estudio = estudio;
    this.animacao = "2D";
  }
}
