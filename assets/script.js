// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

var currentTime = moment().format("(DD/MM/YYYY)");
var apiKey = "993fe4dc40ea497120aa35240de660b9";
var city = "London";
var baseURL = "https://api.openweathermap.org/data/2.5/";
var currentURL = baseURL + `weather?appid=${apiKey}&units=metric&`;
var forecastURL = baseURL + `forecast?appid=${apiKey}&units=metric&`;
// var iconURL = "https://openweathermap.org/img/w/"; - Displays icon images

function inputSubmitted(cityName) {
  $.get(currentURL + `q=${cityName}`).then(function (currentData) {
    console.log(currentData);

    console.log(`
    Temp: ${Math.round(currentData.main.temp)}
    Humidity: ${currentData.main.humidity}%
    Wind: ${currentData.wind.speed}
    IconURL: ${iconURL + currentData.weather[0].icon}.png
    `);
    //Function getting 5-day forecast data
    $.get(
      forecastURL + `lat=${currentData.coord.lat}&lon=${currentData.coord.lon}`
    ).then(function (forecastData) {
      //   console.log(forecastData);
      for (var castObj of forecastData.list) {
        console.log(`${iconURL + castObj.weather[0].icon}.png`);
      }
    });
  });
}

// Function to return icon image for weather
function outputImg(data) {
  return `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}"></img>`;
}

/*
When page loads: 

1. Show user an input to allow them to search for a city
    •Show a message on the page to point them, or guide them, to the input
    -Once city has been inputted:
    a) Show current forecast
    b) show 5 day forecast
    c) add city to search history
        - Get previous searches from localStorage
        - If inoutted city has not been stored to search history, push the city name
        - Set the search history to localStorage
2. Show search history
    -Pull search history from localStorage
    -If search history is not empty, output each city to the search history display in the DOM

*/
//function getting data for current date
