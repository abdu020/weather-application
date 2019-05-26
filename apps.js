/* function weather() {
  var location = document.getElementById("location");
  var apiKey = "c5dd4d4949520c4f85675def7c5a3a41";
  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longtitude = position.coords.longtitude;

    location.innerHTML =
      "Latitude is " + latitude + "° Longtitude is " + longtitude + "°";
  }


     function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xml.responseText);
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
  } 

     function success(position) {
    latitude = position.coords.latitude;
    longtitude = position.coords.longtitude;

    location.innerHTML =
      "Latitude is " + latitude + "° Longtitude is " + longtitude + "°";

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longtitude + "?callback=?",
      function(data) {
        $("#temp").html(data.currently.temperature + "° F");
        $("#minutely").html(data.minutely.summary);
      }
    );
  } 

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
  location.innerHTML = "Locating..";
} */

// weather();

document.querySelector(".getWeather").addEventListener("click", getWeather);

function getWeather(e) {
  const temp = document.getElementById("temp");
  const location = document.getElementById("location");
  const minutely = document.getElementById("minutely");

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/37.8267,-122.4233",
    true
  );

  function success() {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;
  }

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";

      if (response.type === "success") {
        response.value.forEach(function() {
          output += `<li>Latitude: ${latitude} °, Longtitude: ${longtitude} °</li>`;
        });
      } else {
        output += "<li>Something went wrong </li>";
      }

      document.querySelector(".weather-forecasting").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
