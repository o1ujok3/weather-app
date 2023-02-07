//https://https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

var apiKey = "993fe4dc40ea497120aa35240de660b9";
var city = "London";
var cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API key}&units=metric`
var forecastURL = https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric`;


function handleResponse(responseObj) {
    var dataPromise = responseObj.json();
    return dataPromise;
}

fetch (cityURL)
    .then(handleResponse)
    .then(currentData => {
        console.log(currentData);
        return fetch(foreCastURL + `&lat=${currentData.coord.lat}&lon=${currentData.coord.lon}`).then(handleResponse);
    }).then(forecastData => console.log(forecastData));

$.get(
  `https://https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API key}&units=metric`
).then(function (currentData) {
    var lon = currentData.coord.lon;
    var lat = currentData.coord.lat;
    //console.log(data);
  console.log(`
  -----Current Conditions----
  Temp: ${Math.round(currentData.main.temp)}C 
  Wind: ${currentData.wind.speed} M/S
  Humidity: ${currentData.main.humidity}%
  `);




  $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API key}&units=metric
  `)
    .then(function (forecastData) {
        console.long(forecastData);
    });
});
