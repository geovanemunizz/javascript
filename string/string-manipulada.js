// const value = document.querySelector("#value");
// const reset = document.querySelector("#reset");

// const add = document.querySelector("#add");
// const subtract = document.querySelector("#subtract");

// const inputValue = document.querySelector("#inputValue");

// let intervalo;
// let count = 0;

// add.addEventListener("mousedown", () => {
//   intervalo = setInterval(() => {
//     count++;
//     value.innerHTML = count;
//   }, 100);
// });

// subtract.addEventListener("mousedown", () => {
//   intervalo = setInterval(() => {
//     count--;
//     value.innerHTML = count;
//   }, 100);
// });

// reset.addEventListener("click", () => {
//   count = 0;
//   value.textContent = "0";
//   if (inputValue.value !== "") {
//     inputValue.value = "";
//   }
// });

// inputValue.addEventListener("input", () => {
//   count = inputValue.value;
//   value.innerHTML = count;
// });

// document.addEventListener("mouseup", () => {
//   clearInterval(intervalo);
// });

const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");

const value = document.querySelector("#value");
const reset = document.querySelector("#reset");

const inputValue = document.querySelector("#inputValue");

let count = 0;
let intervalo;

add.addEventListener("mousedown", () => {
  intervalo = setInterval(() => {
    count++;
    value.innerText = count;
  }, 100);
});
subtract.addEventListener("mousedown", () => {
  intervalo = setInterval(() => {
    count--;
    value.innerText = count;
  }, 100);
});

reset.addEventListener("click", () => {
  count = 0;
  value.innerText = "0";
  inputValue.value = "";
});

inputValue.addEventListener("input", () => {
  count = inputValue.value;
  value.innerText = count;
});

document.addEventListener("mouseup", () => {
  clearInterval(intervalo);
});
