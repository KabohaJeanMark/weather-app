

async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);
  const data = await response.json();
  const temp = data.main.temp - 273.15;
  console.log(temp);
  const mainWeather = data.weather[0].main;
  console.log(mainWeather);
  const weatherDescription = data.weather[0].description;
  console.log(weatherDescription);
  return data;
};

const checkWeatherForm = document.getElementById('cityWeatherForm');
checkWeatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityValue = document.getElementById('city').value;
  
  getWeather(cityValue)
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err)
    });
});

