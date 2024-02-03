//aula 119 - 120 validação nativa

const input_name = document.querySelector("#input-name");
const input_number = document.querySelector("#input-number");

const enviar_button = document.querySelector("#send-button");

const name_error = document.querySelector("#name-error");
const number_error = document.querySelector("#number-error");

enviar_button.addEventListener("click", (evt) => {
  const showError = (input, errorElement) => {
    const message = input.validationMessage;
    errorElement.innerHTML = message;
    errorElement.classList.add("error");
    validate(input_name);
  };

  if (!input_name.checkValidity() && !input_number.checkValidity()) {
    // evt.preventDefault();
    showError(input_name, name_error);
    showError(input_number, number_error);
    // showError(input_number, number_error);
  }
});

// function checkValidation(password) {
//   if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
//     return false;
//   }
//   return true;
// }
// console.log(checkValidation("MOv1mento"))

function validate() {
  const inputElement = document.getElementById("input_id");
  const valideState = inputElement.validity;

  if (valideState.valueMissing) {
    inputElement.setCustomValidity(
      "Este valor é inapropriado e não deve ser usado aqui"
    );
  } else if (valideState.rangeUnderflow) {
    inputElement.setCustomValidity("mensagem errada");
  } else if (valideState.rangeOverflow) {
    inputElement.setCustomValidity("Valor talvez esteja certo");
  } else {
    inputElement.setCustomValidity("");
  }
  inputElement.reportValidity();
}
