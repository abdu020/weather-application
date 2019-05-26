class UI {
  constructor() {
    this.weather = document.getElementById("weather");
    this.temperature = document.getElementById("current-apparentTemperature");
    this.dewPoint = document.getElementById("current-dewPoint");
    this.humidity = document.getElementById("current-humidity");
    this.ozone = document.getElementById("current-ozone");
    this.pressure = document.getElementById("current-pressure");
    this.visibility = document.getElementById("current-visibility");
    this.windBearing = document.getElementById("current-windBearing");
    this.windGust = document.getElementById("current-windGust");
    this.windSpeed = document.getElementById("current-windSpeed");
  }
  paint(weather) {
    this.weather.textContent = myArr.weather.weather.currently.summary;
    /*       
        this.desc.textContent = weather.weather[0].description;
    
        this.string.textContent = weather.main.temp; */

    // this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);

    /*           this.visibility.textContent = `Visibility: ${weather.visibility}`;
    
        this.clouds.textContent = `Clouds: ${weather.clouds.all}`;
    
        this.wind.textContent = `Wind: ${weather.wind.deg}`;
    
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`; */
  }
}
