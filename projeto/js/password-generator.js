const generatePasswordButton = document.querySelector("#password-generate");
const generatedSenha = document.querySelector("#generated-senha");

const openCloseGenerator = document.querySelector("#generator-password");

const generateOptions = document.querySelector("#option-generate");

const lengthInput = document.querySelector("#length");
const SymbolInput = document.querySelector("#symbols");
const numberInput = document.querySelector("#numero");
const letterInput = document.querySelector("#letter");
const copyBtn = document.querySelector("#copy-senha");

const passwordInput = document.querySelector("#inputPass");
const confirmPassword = document.querySelector("#confirmpassword");
const cadastrar = document.querySelector("#cadastrar");


function getLetterLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getLetterUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return Math.floor(Math.random() * 10).toString();
}

function getSymbols() {
  const symbols = "(){}[]=<>/!@#$%&*+=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const generateSenha = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbols
) => {
  let password = "";

  // second

  const passwordLength = +lengthInput.value;

  const generators = [];

  if (letterInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }
  if (numberInput.checked) {
    generators.push(getNumber);
  }
  if (SymbolInput.checked) {
    generators.push(getSymbols);
  }

  console.log(generators.length);

  if (generators.length === 0) {
    return;
  }

  for (let i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();
      password += randomValue;
    });
  }

  password = password.slice(0, passwordLength);

  generatedSenha.style.display = "block";
  generatedSenha.querySelector("h4").innerText = password;
};

generatePasswordButton.addEventListener("click", () => {
  generateSenha(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols);
});

openCloseGenerator.addEventListener("click", () => {
  generateOptions.classList.toggle("hide");
});

copyBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  const password = generatedSenha.querySelector("h4").innerText;

  navigator.clipboard.writeText(password).then(() => {
    copyBtn.innerText = "Senha copiada com sucesso";

    setTimeout(() => {
      copyBtn.innerText = "copiar";
    }, 1000);
  });
});
