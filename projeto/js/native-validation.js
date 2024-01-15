// 06-01-2024 validaçaõ nativa - aula 119

const name_input = document.querySelector("#input_name");
const number_input = document.querySelector("#number_phone");

const button_validate = document.querySelector("#validate_button");

const error_name = document.querySelector("#name_error");
const error_number = document.querySelector("#number_error");

button_validate.addEventListener("click", (evt) => {
  const showError = (input, erroElement) => {
    const message = input.validationMessage;
    erroElement.innerHTML = message;
    erroElement.classList.add("erro");
  };
  if (!name_input.checkValidity() && !number_input.checkValidity()) {
    evt.preventDefault();
    showError(name_input, error_name);
    showError(number_input, error_number);
  }
});

//
function validationPassword(senha) {
  if (senha.length < 8 || !/[A-Z]/.test(senha) || !/\d/.test(senha)) {
    return false;
  }
  return true;

  // !/[A-Z]/.test() verifica se ao menos tem uma letra maiuscula;
  // !/\d/.test verifica se ao menos tem um número;
}
console.log(validationPassword("Movsen1"));

