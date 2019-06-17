class FETCHTTP {
  // HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data =>
          resolve(
            `Summary: ${data.currently.summary} <br> <br>` +
              `Temperature: ${data.currently.apparentTemperature} <br> <br>` +
              `Dew Point: ${data.currently.dewPoint} <br> <br>` +
              `Humidity: ${data.currently.humidity} <br> <br>` +
              `Ozone: ${data.currently.ozone} <br> <br>` +
              `Current Pressure: ${data.currently.pressure} <br> <br>` +
              `Visibility: ${data.currently.visibility} <br> <br>` +
              `Wind Bearing: ${data.currently.windBearing} <br> <br>` +
              `Wind Gust: ${data.currently.windGust} <br> <br>` +
              `Wind Speed: ${data.currently.windSpeed}`
          )
        )
        .catch(err => reject(err));
    });
  }
}
