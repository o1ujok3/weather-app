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

Access Weather Dashboard Application here:

In order to commence the weather search enter a city in the input below 'Search for a city:' and click 'Search'

#### Screenshot of landing page for weather dashboard

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for London.](./assets/10-server-side-apis-challenge-demo.png)

The city name is used to fetch data from the OpenWeatherMap API. Relevant parts of the data retrieved are displayed to show current weather and 5 day forecast which represented the weather at noon on each day. The search is saved into local storage and when the user re-enters the site buttons in the aside on the left update with all recent searches. The user can click these buttons to generate a search. Screenshot of search results

## Credits

N/A

## License

Please refer to the LICENSE in the repo.

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).
