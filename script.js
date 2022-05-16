let weather = {
  "apiKey": "",
  fetchCords: function(city) {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.apiKey}`
      ).then((response) => response.json())
      .then((data) => {
        let latitude = data[0].lat;
        let longitude = data[0].lon;
        this.fetchWeather(latitude , longitude );
      });
  },
  fetchWeather: function(latitude , longitude) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.apiKey}`
    ).then((response) => response.json())
    .then((data) => {
      this.displayWeather(data)
    })
  },
  displayWeather: function(data) {
    let city = data.name;
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let icon = data.weather[0].icon;
    let description = data.weather[0].description;
    let windy = data.wind.speed;
    document.getElementById("tempe").innerHTML = `Temp: ${temp}°C`
    document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`
    document.getElementById("location").innerHTML = `Weather in: ${city}`
    document.querySelector(".icon").src=`https://openweathermap.org/img/wn/${icon}@2x.png`
    document.querySelector(".description").innerText = description
    document.querySelector(".windy").innerText = `Wind Speeds: ${windy} km/h` 
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${city})`
    
}};
    document.querySelector(".search-bar").addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        weather.fetchCords(document.querySelector('.search-bar').value);
      }
    });