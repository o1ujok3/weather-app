// Variables
var currentTime = moment().format("(DD/MM/YYYY)");
var apiKey = "993fe4dc40ea497120aa35240de660b9";
var city = "London";
var baseURL = "https://api.openweathermap.org/data/2.5/";
var currentURL = baseURL + `weather?appid=${apiKey}&units=metric&`;
var forecastURL = baseURL + `forecast?appid=${apiKey}&units=metric&`;
var iconURL = "https://openweathermap.org/img/w/";

// Function to display current weather conditions for a city
function displayCurrentWeather(data) {
  // Extract data from response
  var cityName = data.name;
  var weatherIcon = iconURL + data.weather[0].icon + ".png";
  var temperature = data.main.temp;
  var humidity = data.main.humidity;
  var windSpeed = data.wind.speed;

  // Update the UI with the extracted data
  document.getElementById("city-name").innerHTML = cityName;
  document.getElementById("date").innerHTML = currentTime;
  document.getElementById("weather-icon").src = weatherIcon;
  document.getElementById("temperature").innerHTML = temperature;
  document.getElementById("humidity").innerHTML = humidity;
  document.getElementById("wind-speed").innerHTML = windSpeed;
}

// Function to display the 5-day forecast for a city
function displayForecast(data) {
  // Extract the forecast data from response
  var forecastData = data.list.slice(0, 5);

  // Loop through the forecast data and update the UI
  for (var i = 0; i < forecastData.length; i++) {
    var forecast = forecastData[i];
    var forecastDate = moment(forecast.dt * 1000).format("(DD/MM/YYYY)");
    var forecastIcon = iconURL + forecast.weather[0].icon + ".png";
    var forecastTemperature = forecast.main.temp;
    var forecastHumidity = forecast.main.humidity;

    // Update the UI with the extracted data
    document.getElementById("forecast-date-" + (i + 1)).innerHTML =
      forecastDate;
    document.getElementById("forecast-icon-" + (i + 1)).src = forecastIcon;
    document.getElementById("forecast-temperature-" + (i + 1)).innerHTML =
      forecastTemperature;
    document.getElementById("forecast-humidity-" + (i + 1)).innerHTML =
      forecastHumidity;
  }
}

// Function to fetch weather data for a city
function getWeather(city) {
  // Fetch current weather data
  fetch(currentURL + "q=" + city)
    .then((response) => response.json())
    .then((data) => displayCurrentWeather(data))
    .catch((error) => console.error(error));

  // Fetch 5-day forecast data
  fetch(forecastURL + "q=" + city).then((response) => response.json());
}
