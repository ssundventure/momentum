import { HIDDEN_CLASSNAME } from "../util/utility";

const API_KEY = "334496adb817156ebeb9f69e88c10a56";
const WEATHER_MAIN_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_IMG_URL = " https://openweathermap.org/img/wn/";

const weather = document.querySelector("#weather");
const icon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#weather-temperature");
const region = document.querySelector("#weather-region");



function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `${WEATHER_MAIN_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.classList.remove(HIDDEN_CLASSNAME);
            icon.innerHTML = `<img src="${WEATHER_IMG_URL}${data.weather[0].icon}.png" alt="${data.weather[0].main}"/>`;
            temperature.innerHTML = `${data.main.temp} &deg;`;
            region.innerHTML = data.name;
        });
}

function onGeoError(error) {
    console.log(error);
    weather.classList.remove(HIDDEN_CLASSNAME);

    weather.innerText = "Can't find you. No weather for you.";
}



navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);