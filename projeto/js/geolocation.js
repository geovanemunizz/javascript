// 05-01-2024 geolocalização js aula 116

const longitude = document.querySelector("#longitude");
const latitude = document.querySelector("#latitude");

try {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mapLocation);
  } else {
    throw new Error("Geolocation is not supported by this browser");
  }
} catch (error) {
  console.log(error.message);
}

function mapLocation(position) {
  longitude.innerHTML = `Longitude: ${position.coords.longitude}`;
  latitude.innerHTML = `Latirude: ${position.coords.latitude}`;;
  console.log(position);
}
