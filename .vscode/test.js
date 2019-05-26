// Define variables
const weather = document.getElementById("weather");
const getCurrent = document.getElementById("current");
const container = document.createElement("DIV");
container.setAttribute("class", "container");
weather.appendChild(container);

// Set up connection
const url =
  "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/37.8267,-122.4233";
const request = new XMLHttpRequest();

// Establish connection
request.open("GET", url, true);

/* request.onload = function() {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
     console.log(data);
    data.forEach(weather => {
      const h1 = document.createElement("h1");
      h1.textContent = weather.currently;
      container.appendChild(h1);
      app.appendChild(container);
    });
         Array.prototype.forEach.call(data, weather => {
      const h1 = document.createElement("h1");
      h1.textContent = weather.currently;
      container.appendChild(h1);
      app.appendChild(container);
    }); 
  } else {
    console.log("Error, something went wrong");
  }
}; */

request.send();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.response);
    // myFunction(myArr);
    // console.log(myArr);
    document.getElementById("weather").innerHTML = myArr.hourly.summary;
  }
};
