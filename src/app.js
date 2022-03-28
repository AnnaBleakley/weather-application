//Feature 1: updating dates
let longDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
console.log(now);
let days = longDays[now.getDay()];
let hour = now.getHours();
let min = now.getMinutes();
let timeDate = document.querySelector("h2#currentDate");
timeDate.innerHTML = `${days} ${hour}:${min}`;

//Feature 2: display name on page of user's value
function cityAlert(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  let newCity = document.querySelector("#currentCity");
  newCity.innerHTML = `${cityInput.value}`;
  //alert(`${cityInput.value}`);
}

let cityInsert = document.querySelector("#signup-form");
cityInsert.addEventListener("submit", cityAlert);

//Get Current temperature in current city
function showWeather(response) {
  let currentTemp = document.querySelector("#celcius");
  let temperature = Math.round(response.data.main.temp);
  currentTemp.innerHTML = `${temperature}°`;
}

function showPosition(position) {
  let apiKey = "ada02e10de1af69bc78fee31cecf36f4";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(showPosition);
