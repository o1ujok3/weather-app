# Weather Dashboard

## Description

Weather dashboard that utilises uses the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities of interest. This app is ideal for travelers who want to see the weather outlook for multiple cities so that they can plan a trip accordingly.

### Features of weather dashboard

- When a user searches for a city, they are presented with current and future conditions for that city and that city is added to the search history
- When a user views the current weather conditions for that city they are presented with:
  - The city name
  - The date
  - An icon representation of weather conditions
  - The temperature
  - The humidity
  - The wind speed
- When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
  - The date
  - An icon representation of weather conditions
  - The temperature
  - The humidity
- When a user click on a city in the search history they are again presented with current and future conditions for that city

## Installation

Moment.js (https://momentjs.com/): Version 2.29.4
Jquery (https://jquery.com/): Version 3.2.1
Bootstraps (https://getbootstrap.com/): Version 4.3.1
Font awesome (https://fontawesome.com/): Version 4.7.0

## Usage

Access Weather Dashboard Application here: [(https://o1ujok3.github.io/weather-app/)]

In order to commence the weather search, enter a city in the input area titled 'Search for a city:' and then click 'Search'

#### Screenshot of landing page for weather dashboard

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for London.](./assets/Screenshot%202023-02-10%20at%2010.25.57.png)

- The city name is used to fetch data from the OpenWeatherMap API
- Key data retrieved are displayed on the dashboard. The search is saved unto local storage and can be seen when the user re-enters the site on the left-side of the screen which displays all recent searches.
- The user can click these buttons to generate a repeat search.

#### Screenshot of search results

![Alt](./assets/Screenshot%202023-02-10%20at%2010.29.02.png)

## Credits

N/A

## License

Please refer to the LICENSE in the repo.

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).
