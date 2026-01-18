 const apiKey = "a4600581b2e5a8bf442e6dae54b34466";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

  async function checkWeather(){
    const response = await fetch(apiUrl + '&appid=${apiKey}');
    var data = await response.json();
    console.log(data);
  }
checkWeather();