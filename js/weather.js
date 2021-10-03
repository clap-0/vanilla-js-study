const API_KEY = "2740cf700865e4acdc28329ae0efc5b6";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector("#weather");
      const weather = weatherContainer.querySelector("span:first-child");
      const city = weatherContainer.querySelector("span:last-child");
      weatherContainer.classList.remove("hidden");
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
