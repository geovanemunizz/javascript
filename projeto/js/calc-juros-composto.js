// document.querySelector("#calculate").addEventListener("click", () => {
//   const value = document.querySelector("#value").value;
//   const interest = document.querySelector("#interest").value / 100;
//   const time = document.querySelector("#time").value;

//   const total = value * (1 * interest) ** time;

//   document.querySelector("#total").innerText = ("R$" + total.toFixed(2)).replace(".",",")

// });

function calculator() {
  const value = document.querySelector("#value").value;
  const interest = (document.querySelector("#interest").value) / 100;
  const time = document.querySelector("#time").value;

  const total = value * (1 * interest) ** time;

  document.querySelector("#total").innerText = "R$" + total.toFixed(2).replace(".",",")
}

document.querySelector("#calculate").addEventListener("click", calculator);
