// https://openweathermap.org/api
const API_KEY = "e2e07f5966f0d0163ef73c71a4ed9115";

function onGeoOk(position){
    const 위도 = position.coords.latitude;
    const 경도 = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${위도}&lon=${경도}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)