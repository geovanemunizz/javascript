const textearea = document.querySelector("#textarea");
const optionsList = document.querySelector("#options");

const btnTalk = document.querySelector("#btn-talk");

let voicesTalk = 0;

window.speechSynthesis.addEventListener("voiceschanged", () => {
  const voiceList = window.speechSynthesis.getVoices();
  // console.log(voiceList);

  for (let i in voiceList) {
    const list = document.createElement("option");
    list.setAttribute("value", i);
    list.innerText = voiceList[i].name;
    optionsList.appendChild(list);
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

btnTalk.addEventListener("click", () => {
  if (textearea.value !== "") {
    const ut = new SpeechSynthesisUtterance(textearea.value);
    const voicelist = window.speechSynthesis.getVoices();
    ut.voice = voicelist[voicesTalk];
    window.speechSynthesis.speak(ut);
  }
});
