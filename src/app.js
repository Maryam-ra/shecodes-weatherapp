let currentT = new Date();

let days = [`sun`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`];
let day = days[currentT.getDay()];
let hour = currentT.getHours();
let minute = currentT.getMinutes();
let time = `${hour}:${minute}`;
let p = document.querySelector(`#date-time`);
p.innerHTML = `${day},${time}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(`#city-name`);
  let thecity = document.querySelector(`.thecity`);
  if (searchInput.value) {
    thecity.innerHTML = `${searchInput.value}`;
  } else {
    thecity.innerHTML = null;
    alert(`please type a city`);
  }
}
let form = document.querySelector(`#city-finder`);
form.addEventListener("submit", searchCity);

function displayCitiesTemp(response) {
  let city = response.data.name;
  let temperture = Math.round(response.data.main.temp);
  let cityTempMessage = `${temperture} °C`;
  let tempNumber = document.querySelector(`.degree`);
  tempNumber.innerHTML = cityTempMessage;
}
let apiKey = `d001ea5c96d0ee7581bbb5f9230cc357`;
let searchInput = document.querySelector(`#city-name`);

let city = `searchInput`;
let unit = `metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(displayCitiesTemp);
