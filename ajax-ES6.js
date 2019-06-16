class XMLHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  // HTTP GET Request
  get = (url, callback) => {
    this.http.open("GET", url, true);

    // let self = this;
    this.http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);

        callback(
          null,
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
        );
      } else if (this.readyState == 4 && this.status == 200) {
      }
    };

    this.http.send();
  };
}
