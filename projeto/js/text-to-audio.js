const textearea = document.querySelector("#textarea");
const optionsList = document.querySelector("#options");

const btnTalk = document.querySelector("#btn-talk");

let voicesTalk = 0;

// window.speechSynthesis.addEventListener("voiceschanged", () => {
//   const voiceList = window.speechSynthesis.getVoices();
//   // console.log(voiceList);

//   for (let i in voiceList) {
//     const list = document.createElement("option");
//     list.setAttribute("value", i);
//     list.innerText = voiceList[i].name;
//     optionsList.appendChild(list);
//   }
// });

window.speechSynthesis.addEventListener("voiceschanged", () => {
  const voiceList = window.speechSynthesis.getVoices();

  // cria um loop que percorre a variavel, e a cada iteração cria um option no html, passando um atributo value, e um texto.
  for (let i in voiceList) {
    const option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerText = voiceList[i].name;
    optionsList.appendChild(option);
  }
});

// btnTalk.addEventListener("click", () => {
//   if (textearea.value !== "") {
//     let uterrance = new SpeechSynthesisUtterance(textearea.value);
//     const voiceList = window.speechSynthesis.getVoices();
//     uterrance.voice = voiceList[voicesTalk];
//     window.speechSynthesis.speak(uterrance);
//   }
// });

optionsList.addEventListener("change", () => {
  voicesTalk = parseInt(optionsList.value);
});

//incializa o objeto SSU, e passa o textearea.value para "leitura", depois obtém todas as voices do sistema pelo getVoices(). passa que a propriedade voice do sitema, recebe todas as vozes, depois só pede para que seja lido a primeira variavel.
btnTalk.addEventListener("click", () => {
  if (textearea.value !== "") {
    const ut = new SpeechSynthesisUtterance(textearea.value);
    const voiceList = window.speechSynthesis.getVoices();
    ut.voice = voiceList[voicesTalk];
    window.speechSynthesis.speak(ut);
  }
});

//funcção que verifica se o "speechSynthesis" está "falando"
function checkStatus() {
  if (window.speechSynthesis.speaking) {
    optionsList.setAttribute("disabled", "disabled");
    btnTalk.setAttribute("disabled", "disabled");
  } else {
    optionsList.removeAttribute("disabled");
    btnTalk.removeAttribute("disabled");
  }
}

setInterval(checkStatus, 100);
