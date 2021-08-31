/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);

  if (response.status !== 200) {
    throw new Error('Please enter full city name. Cannot fetch the data')
  }
  const data = await response.json();
  return data;
};

const displayWeatherInfo = document.getElementById('displayWeatherCard');

const tempDiv = document.getElementById('tempInDegrees');

function convertTempToCelsius(absoluteTemp) {
  tempDiv.textContent = '';
  const celciusTemp = (absoluteTemp - 273.15).toFixed(2);
  tempDiv.textContent = `The temperature in degrees Celsius is ${celciusTemp}`;
}

function convertTempToFahrenheit(absoluteTemp) {
  tempDiv.textContent = '';
  const celciusTemp = (absoluteTemp - 273.15);
  const fahrenheitTemp = ((celciusTemp * 9/5) + 32).toFixed(2);
  tempDiv.textContent = `The temperature in degrees Fahrenheit is ${fahrenheitTemp}`;
}

function display(data) {
  const absoluteTemp = data.main.temp;
  const mainWeather = data.weather[0].main;
  const weatherDescription = data.weather[0].description;
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = mainWeather;
  const p1 = document.createElement('p');
  p1.textContent = `${weatherDescription} with an Absolute temp in Kelvin of ${absoluteTemp}`;
  const celsiusBtn = document.createElement('button');
  celsiusBtn.textContent = 'Temp in degrees Celsius';
  celsiusBtn.classList.add('btn','btn-warning','m-1');
  celsiusBtn.addEventListener('click', () => {
    convertTempToCelsius(absoluteTemp);
  });
  const fahrenheitBtn = document.createElement('button');
  fahrenheitBtn.textContent = 'Temp in degrees Fahrenheit';
  fahrenheitBtn.classList.add('btn','btn-primary','m-1');
  fahrenheitBtn.addEventListener('click', () => {
    convertTempToFahrenheit(absoluteTemp);
  });
  div.append(h3, p1, celsiusBtn, fahrenheitBtn);
  displayWeatherInfo.textContent = '';
  displayWeatherInfo.appendChild(div);
};

function displayError(errorMessage) {
  displayWeatherInfo.textContent = errorMessage;
}

const checkWeatherForm = document.getElementById('cityWeatherForm');
checkWeatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityValue = document.getElementById('city').value;

  getWeather(cityValue)
    .then((data) => {
      display(data);
    }).catch((err) => {
      displayError(err.message);
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0Esb0ZBQW9GLEtBQUs7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsWUFBWTtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxlQUFlO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CLHFDQUFxQyxhQUFhO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0zYTkwNzg3NGQwZTVhZjFhMzhjZmFjOTA3MjBlOWYwOGApO1xuXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGZ1bGwgY2l0eSBuYW1lLiBDYW5ub3QgZmV0Y2ggdGhlIGRhdGEnKVxuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZGlzcGxheVdlYXRoZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXlXZWF0aGVyQ2FyZCcpO1xuXG5jb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBJbkRlZ3JlZXMnKTtcblxuZnVuY3Rpb24gY29udmVydFRlbXBUb0NlbHNpdXMoYWJzb2x1dGVUZW1wKSB7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgY2VsY2l1c1RlbXAgPSAoYWJzb2x1dGVUZW1wIC0gMjczLjE1KS50b0ZpeGVkKDIpO1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gYFRoZSB0ZW1wZXJhdHVyZSBpbiBkZWdyZWVzIENlbHNpdXMgaXMgJHtjZWxjaXVzVGVtcH1gO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VGVtcFRvRmFocmVuaGVpdChhYnNvbHV0ZVRlbXApIHtcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBjZWxjaXVzVGVtcCA9IChhYnNvbHV0ZVRlbXAgLSAyNzMuMTUpO1xuICBjb25zdCBmYWhyZW5oZWl0VGVtcCA9ICgoY2VsY2l1c1RlbXAgKiA5LzUpICsgMzIpLnRvRml4ZWQoMik7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgVGhlIHRlbXBlcmF0dXJlIGluIGRlZ3JlZXMgRmFocmVuaGVpdCBpcyAke2ZhaHJlbmhlaXRUZW1wfWA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXkoZGF0YSkge1xuICBjb25zdCBhYnNvbHV0ZVRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy50ZXh0Q29udGVudCA9IG1haW5XZWF0aGVyO1xuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGVzY3JpcHRpb259IHdpdGggYW4gQWJzb2x1dGUgdGVtcCBpbiBLZWx2aW4gb2YgJHthYnNvbHV0ZVRlbXB9YDtcbiAgY29uc3QgY2Vsc2l1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjZWxzaXVzQnRuLnRleHRDb250ZW50ID0gJ1RlbXAgaW4gZGVncmVlcyBDZWxzaXVzJztcbiAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCdidG4td2FybmluZycsJ20tMScpO1xuICBjZWxzaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnZlcnRUZW1wVG9DZWxzaXVzKGFic29sdXRlVGVtcCk7XG4gIH0pO1xuICBjb25zdCBmYWhyZW5oZWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZhaHJlbmhlaXRCdG4udGV4dENvbnRlbnQgPSAnVGVtcCBpbiBkZWdyZWVzIEZhaHJlbmhlaXQnO1xuICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ2J0bi1wcmltYXJ5JywnbS0xJyk7XG4gIGZhaHJlbmhlaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udmVydFRlbXBUb0ZhaHJlbmhlaXQoYWJzb2x1dGVUZW1wKTtcbiAgfSk7XG4gIGRpdi5hcHBlbmQoaDMsIHAxLCBjZWxzaXVzQnRuLCBmYWhyZW5oZWl0QnRuKTtcbiAgZGlzcGxheVdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gJyc7XG4gIGRpc3BsYXlXZWF0aGVySW5mby5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yTWVzc2FnZSkge1xuICBkaXNwbGF5V2VhdGhlckluZm8udGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG59XG5cbmNvbnN0IGNoZWNrV2VhdGhlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eVdlYXRoZXJGb3JtJyk7XG5jaGVja1dlYXRoZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBjaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlO1xuXG4gIGdldFdlYXRoZXIoY2l0eVZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkaXNwbGF5KGRhdGEpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGRpc3BsYXlFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==