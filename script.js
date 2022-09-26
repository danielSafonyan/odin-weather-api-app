import view from './view.js';

const preLoader = document.querySelector('#preloader');

const apiKey = 'cbe4068c303885baf947474faa0052c1';

async function getWeather(place, units) {
    try {
        preLoader.style.display = 'block';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=${units}`
        const response = await fetch(url, {'mode': 'cors'});
        const responseData = await response.json();
        view.updateWeather(responseData);
        preLoader.style.display = 'none';
    } catch(err) {
        console.log(err);
        view.location.innerText = "Enter a Valid Location";
    }
}

getWeather('Moscow', 'Metric');

const form = document.querySelector('#getWeather');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const place = formData.get('place');
    const units = formData.get('unit');
    getWeather(place, units);
    view.placeInput.value = '';

})