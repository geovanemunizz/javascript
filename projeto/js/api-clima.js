//

const apiKey = "e7558e1305f74383f23f92553c6af138";
const apiSplashArt = "https://source.unsplash.com/1600x900/?";

const inputCidade = document.querySelector("#city-input");
const botaoSearch = document.querySelector("#search");

const cidade = document.querySelector("#city");
const temperatura = document.querySelector("#temperature span");
const descricao = document.querySelector("#description");
const weatherIcon = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidade = document.querySelector("#humidity span");
const velocidadeVento = document.querySelector("#wind span");

const weatherData = document.querySelector("#weather-data");

const errorMessage = document.querySelector("#error-message");
const loading = document.querySelector("#loading");

const sugestao = document.querySelector("#sugestao");
const sugestaoButton = document.querySelectorAll("#sugestao button");

// loading

function toggleLoading() {
  loading.classList.toggle("hide");
}

// Funções

// busca o nome da cidade na api: https://openweathermap.org/api

async function getWeatherData(city) {
  toggleLoading();

  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const response = await fetch(apiWeatherUrl);
  const data = await response.json();

  toggleLoading();

  return data;
}

// tratamento de erro:

function showError() {
  errorMessage.classList.remove("hide");
}

function ocultarInformation() {
  errorMessage.classList.add("hide");
  weatherData.classList.add("hide");

  sugestao.classList.add("hide");
}

async function showWeather(city) {
  ocultarInformation();

  const data = await getWeatherData(city);


  if (data.cod === "404" || data.cod === "400") {
    showError();
    return;
  }

  cidade.innerText = data.name;
  temperatura.innerText = parseInt(data.main.temp);
  umidade.innerText = `${data.main.humidity}%`;
  velocidadeVento.innerText = `${data.wind.speed}km/h`;
  descricao.innerText = data.weather[0].description;

  // altera o icon do clima
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );

  //altera a bandeira do país:
  countryElement.setAttribute(
    "src",
    `https://flagsapi.com/${data.sys.country}/flat/64.png`
  );

  // altera o background com uma api que busca pela cidade pesquisada
  document.body.style.backgroundImage = `url("${apiSplashArt + city}")`

  //remoção da class "hide" na div
  weatherData.classList.remove("hide");
}

// Eventos

botaoSearch.addEventListener("click", (evt) => {
  evt.preventDefault();

  const city = inputCidade.value;
  showWeather(city);
  // getWeatherData(city);
});

//
inputCidade.addEventListener("keyup", (evt) => {
  evt.preventDefault();
  if (evt.key === "Enter") {
    const city = evt.target.value;
    showWeather(city);
  }
});

sugestaoButton.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    const city = btn.getAttribute("id")

    showWeather(city)
  })
})