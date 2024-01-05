const weatherApiKey = 'a435cdac1340cfbcac761f45e54d29ff';

const inputLocation = document.getElementById('inputLoccation')
const submitButton = document.getElementById('submitButton')
const currentWeather = doccument.getElementById('currentWeather')

function fetchWeatherData(city) {
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric'
}