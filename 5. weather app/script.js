const apiKey = 'd95ee06ce7349cfd36c24b4e780ce51a';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}`;

const input = document.querySelector('input');
const btn = document.querySelector('button');

const icon = document.querySelector('.icon');

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature'); 
const description = document.querySelector('.description');


btn.addEventListener('click',()=>{
    let city = input.value;
    getWeather(city);

})

async function getWeather(city){
   console.log(apiUrl.replace('{city name}', city));
   const response = await fetch(apiUrl.replace('{city name}', city))
   const data = await response.json();
   console.log(data);
   const iconCode = data.weather[0].icon;
   icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">`;

    weather.innerText = data.weather[0].main;
    temperature.innerText = `${Math.round(data.main.temp - 273.15)}°C`;
    description.innerText = data.weather[0].description;

}

