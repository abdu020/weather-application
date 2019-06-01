// Setup connection
const url =
  "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337";

// Fetch the data
fetch(url)
  .then(resp => resp.json())
  .then(function(myArr) {
    let request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById("weather").innerHTML = `Summary: ${
          myArr.currently.summary
        }`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById(
          "current-apparentTemperature"
        ).innerHTML = `Temperature: ${myArr.currently.apparentTemperature}`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById("current-dewPoint").innerHTML = `Dew Point: ${
          myArr.currently.dewPoint
        }`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById("current-humidity").innerHTML = `Humidity: ${
          myArr.currently.humidity
        }`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById("current-ozone").innerHTML = `Ozone: ${
          myArr.currently.ozone
        }`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById(
          "current-pressure"
        ).innerHTML = `Current Pressure: ${myArr.currently.pressure}`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById(
          "current-visibility"
        ).innerHTML = `Visibility: ${myArr.currently.visibility}`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById(
          "current-windBearing"
        ).innerHTML = `Wind Bearing: ${myArr.currently.windBearing}`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById("current-windGust").innerHTML = `Wind Gust: ${
          myArr.currently.windGust
        }`;
      });

    request = document
      .getElementById("get-current-weather")
      .addEventListener("click", function() {
        document.getElementById("current-windSpeed").innerHTML = `Wind Speed: ${
          myArr.currently.windSpeed
        }`;
      });
  })
  .catch(err => {
    // Unsuccesfull callback for error
    console.log("Error, something");
  });
