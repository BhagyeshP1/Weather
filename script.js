let weather = {
  "apiKey": "ab6a9ed0efa3bd0e502fdd5ad0840944",
  fetchWeather: function() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.apiKey}`
      ).then((response) => response.json())
      .then((data) => console.log(data));
      data =  { latitude , longitude };
  },

};