//Declaring global variables
var apiKey = "993fe4dc40ea497120aa35240de660b9";
var baseURL = "https://api.openweathermap.org/data/2.5/";
var currentURL = baseURL + `weather?&appid=${apiKey}&units=metric&`;
var forecastURL = baseURL + `forecast?&appid=${apiKey}&units=metric&`;
var currentTime = moment().format("(DD/MM/YYYY)");

// Populating elements from current and 5 day forecast
function populateElements(obj) {
  var mainObj = obj.main;

  var windSpd = obj.wind.speed * 3.6;

  return `
    <p>Temp: ${mainObj.temp}&#8451;</p>
    <p>Wind: ${windSpd.toFixed(2)} KPH</p>
    <p>Humidity: ${mainObj.humidity} %</p>
    `;
}

//Return icon for weather for specific day
function outputIcon(data) {
  return `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}"></img>`;
}

//Get 5-day forecast data
function fetch5DayForecast(lon, lat) {
  $.get(forecastURL + `lat=${lat}&lon=${lon}`).then(function (data) {
    $("#forecast").removeClass("invisible");

    var count = 1;

    var cardContainer = $(".card-container");

    cardContainer.html("");

    var forecastArr = data.list;

    for (var index in forecastArr) {
      var dateTxt = forecastArr[index].dt_txt;

      var isMidday = dateTxt.includes("12:");

      if (isMidday) {
        var futureDate = moment().add(count, "days").format("DD/MM/YYYY");

        var currentItem = forecastArr[index];

        cardContainer.append(`
                <div class="card">
                  <div class="card-body">
                    <h5 class="mt-1 h5">${futureDate}</h5>
                    ${outputIcon(currentItem)}
                    ${populateElements(currentItem)}
                  </div>
                </div>
                `);

        count++;
      }
    }
  });
}

//Get data for current date
function fetchCurrentWeather(search) {
  $.get(currentURL + `q=${search}`).then(function (data) {
    $("#today")
      .html(
        `
        <h3 class="mt-1 h3">${data.name} ${currentTime} ${outputIcon(data)}</h3>
        ${populateElements(data)}
        `
      )
      .removeClass("invisible");

    var coord = data.coord;

    fetch5DayForecast(coord.lon, coord.lat);
  });
}

//When search button is clicked
function searchBtnClicked(event) {
  event.preventDefault();

  var searchInput = $("#search-input");

  var searchVal = searchInput.val().toLowerCase();

  if (searchVal) {
    fetchCurrentWeather(searchVal);

    var returnedLocalStorage = getLocalStorage();

    returnedLocalStorage[searchVal] = searchVal;

    localStorage.setItem(
      "weather-history",
      JSON.stringify(returnedLocalStorage)
    );

    searchInput.val("");
  }
}

//Return search history from local storage
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("weather-history")) || {};
}

function init() {
  var historyElement = $("#history");

  historyElement.html("");

  var history = getLocalStorage();

  if (history) {
    for (var item in history) {
      historyElement.append(`
            <button class="historyBtn btn btn-secondary m-1">${history[item]}</button>
            `);
    }
  }

  $(".historyBtn").on("click", function (event) {
    fetchCurrentWeather(event.target.innerHTML);
  });

  $("#search-button").on("click", searchBtnClicked);
}

init();
