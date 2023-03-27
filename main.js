let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
}
let today = new Date();
let day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector(".day").innerHTML = dayList[day]
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
document.querySelector(".time").innerHTML = hour + ":" + minute + ":" + second;

let search = document.querySelector("button");
search.addEventListener("submit", updateName);

function updateName(event){
  let update = event.target.value
  let weatherData = weather[update.toLowerCase()];
  if(weatherData){
    let locationName = document.querySelector("#city-name");
    locationName.textContent = update.toUpperCase();
  }
}
let searchBtn = document.getElementById("search-btn");
let cityName = document.getElementById("city-name");
let locationInput = document.querySelector(".location");

searchBtn.addEventListener("click", function () {
  cityName.innerHTML = locationInput.value.toUpperCase();
});

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-name");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}


let apiKey = "b98d12bde72f31eae25d84b6d0a808dd";
let city = "Nairobi";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

function getCurrentLocationWeather() {
  navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  });
}

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocationWeather);
