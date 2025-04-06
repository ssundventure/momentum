const API_KEY = "334496adb817156ebeb9f69e88c10a56";
const WEATHER_MAIN_URL = "https://api.openweathermap.org/data/2.5";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `${WEATHER_MAIN_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError(error) {
    console.log(error);
    alert("Can't find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);