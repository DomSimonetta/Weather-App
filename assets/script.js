const weatherApiKey = 'a435cdac1340cfbcac761f45e54d29ff';

const inputLocation = document.getElementById('inputLoccation')
const submitButton = document.getElementById('submitButton')
const currentWeather = doccument.getElementById('currentWeather')

function fetchWeatherData(city) {
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric'
    
    fectch(weatherApiUrl)
    .then(response => response.json())
    .then(data => displayWeather(data))
}

function displayWeather(weatherData) {

    currentWeather.innerHTML = '';

    weatherCard.appendChild(weatherCity);
    weatherCard.appendChild(weatherTemp);
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    var input =inputValue.value;
    varinputValue = JSON.parse(localStorage.getitem('location'));
    
})

//function saveHistory(city) {
//cityHistory.appendChild;
//}

fetchWeatherData();
displayWeather();