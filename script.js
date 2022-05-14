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
    console.log(data)
    document.getElementById("tempe").innerHTML = `Temp: ${temp}°C`
    document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`
    document.getElementById("location").innerHTML = `Weather in: ${city}`
    
}};