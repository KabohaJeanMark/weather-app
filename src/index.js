console.log('Hi testing');

let weather;

async function getWeather(city) {
  const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);
  cityWeather.json().then(function(response){
    weather = response.weather;
    console.log(weather);
  })

}

getWeather('Kampala');