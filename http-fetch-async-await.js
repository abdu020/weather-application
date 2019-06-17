const http = new ASYNCHTTP();

http
  .get(
    "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337"
  )
  .then(data =>
    document
      .getElementById("get-current-weather")
      .addEventListener(
        "click",
        () =>
          (document.getElementById("all-the-weather").innerHTML =
            `Summary: ${data.currently.summary} <br> <br>` +
            `Temperature: ${data.currently.apparentTemperature} <br> <br>` +
            `Dew Point: ${data.currently.dewPoint} <br> <br>` +
            `Humidity: ${data.currently.humidity} <br> <br>` +
            `Ozone: ${data.currently.ozone} <br> <br>` +
            `Current Pressure: ${data.currently.pressure} <br> <br>` +
            `Visibility: ${data.currently.visibility} <br> <br>` +
            `Wind Bearing: ${data.currently.windBearing} <br> <br>` +
            `Wind Gust: ${data.currently.windGust} <br> <br>` +
            `Wind Speed: ${data.currently.windSpeed}`)
      )
  )
  .catch(err => console.log(err));
