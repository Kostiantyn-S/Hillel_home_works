let weather = {};

weather.createDOM = function () {
    let element = new CreateElement;
    element.create('autocomplete-weather', 'div').id('weather-container').class('weather-container').position(1);
        element.create('weather-container', 'div').id('weather-icon').class('weather-icon').position(0);
        element.create('weather-container', 'div').id('weather-temp').class('weather-temp').position(1);
};

weather.getWeather = function () {
    let link = `https://api.openweathermap.org/data/2.5/weather?`;
    let lat = `lat=${parseInt(window.localStorage.getItem('lat') || 6)}`;
    let lon = `lon=${parseInt(window.localStorage.getItem('lon') || 80)}`;
    let api = `APPID=0ad56c244434d4b3ec1cacb5dd73578c`;

    fetch(`${link}${lat}&${lon}&${api}&units=metric`)
        .then(
            response => {
                return response.json();
            }
        )
        .then(
            weather => {
                document.getElementById('weather-icon').innerHTML = `<img src='https://openweathermap.org/img/w/${weather.weather[0].icon}.png' alt='weather icon' id="weather-image">`;
                document.getElementById('weather-temp').innerHTML = `${parseInt(weather.main.temp)}°C`;
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
};

weather.refreshWeather = function () {
    let self = this;
    document.getElementById('pac-input').addEventListener('change', () => {
        self.getWeather();
    });
};

weather.turnOn = function () {
    this.createDOM();
    this.getWeather();
    this.refreshWeather();
};

weather.turnOn();