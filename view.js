function getLocalTime(epochTime, offset) {
    const date = new Date((epochTime + offset) * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`
}

class View {
    constructor() {
        this.location = document.querySelector('#location');
        this.temp = document.querySelector('#temp');
        this.minTemp = document.querySelector('#min-temp');
        this.maxTemp = document.querySelector('#max-temp');
        this.weatherDescr = document.querySelector('#weather-descr');
        this.sunrise = document.querySelector('#sunrise');
        this.sunset = document.querySelector('#sunset');
        this.humidity = document.querySelector('#humidity');
        this.pressure = document.querySelector('#pressure');
    }
    updateWeather(weatherObject) {
        this.location.innerText = weatherObject.name;
        this.temp.innerText = weatherObject.main.temp;
        this.minTemp.innerText = weatherObject.main.temp_min;
        this.maxTemp.innerText = weatherObject.main.temp_max;
        this.weatherDescr.innerText = weatherObject.weather[0].description;
        this.sunrise.innerText = getLocalTime(weatherObject.sys.sunrise, weatherObject.timezone);
        this.sunset.innerText = getLocalTime(weatherObject.sys.sunset, weatherObject.timezone);
        this.humidity.innerText = weatherObject.main.humidity; 
        this.pressure.innerText = weatherObject.main.pressure;
    }
}

const view = new View();
export default view;