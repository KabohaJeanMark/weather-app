import { convertTempToCelsius, convertTempToFahrenheit } from './temp';
import getGif from './fetchGifDisplay';

const displayWeatherInfo = document.getElementById('displayWeatherCard');

const gifBody = document.querySelector('img');

const display = async (data) => {
  const absoluteTemp = data.main.temp;
  const mainWeather = data.weather[0].main;
  const weatherDescription = data.weather[0].description;
  const gifData = await getGif(weatherDescription);
  const imgUrl = gifData.data.images.original.url;
  gifBody.src = imgUrl;
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = mainWeather;
  const p1 = document.createElement('p');
  p1.textContent = `${weatherDescription} with an Absolute temp in Kelvin of ${absoluteTemp}`;
  const celsiusBtn = document.createElement('button');
  celsiusBtn.textContent = 'Temp in degrees Celsius';
  celsiusBtn.classList.add('btn', 'btn-warning', 'm-1');
  celsiusBtn.addEventListener('click', () => {
    convertTempToCelsius(absoluteTemp);
  });
  const fahrenheitBtn = document.createElement('button');
  fahrenheitBtn.textContent = 'Temp in degrees Fahrenheit';
  fahrenheitBtn.classList.add('btn', 'btn-primary', 'm-1');
  fahrenheitBtn.addEventListener('click', () => {
    convertTempToFahrenheit(absoluteTemp);
  });
  div.append(h3, p1, celsiusBtn, fahrenheitBtn);
  displayWeatherInfo.textContent = '';
  displayWeatherInfo.appendChild(div);
};

const displayError = (errorMessage) => {
  displayWeatherInfo.textContent = errorMessage;
};

export { display, displayError };