import view from './view.js';

const apiKey = 'cbe4068c303885baf947474faa0052c1';
let city = 'Moscow'
let units = 'metric';
let gif = '';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbe4068c303885baf947474faa0052c1&units=${units}`

async function getWeather() {
    const response = await fetch(url, {'mode': 'cors'});
    const responseData = await response.json();
    console.log(responseData);
    view.updateWeather(responseData);
}

getWeather();
