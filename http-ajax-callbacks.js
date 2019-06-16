const http = new XMLHTTP();

// Get weather information using GET
http.get(
  "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337",
  (err, posts) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(posts.toString().split(" "));

      document
        .getElementById("get-current-weather")
        .addEventListener(
          "click",
          () => (document.getElementById("all-the-weather").innerHTML = posts)
        );
    }
  }
);
