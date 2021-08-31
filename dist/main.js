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

const pageContainer = document.querySelector('.container');

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
  pageContainer.style.cssText = `background-image:url("Rain.gif"); background-repeat:repeat;`;          
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0Esb0ZBQW9GLEtBQUs7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsWUFBWTtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxlQUFlO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLHlCQUF5QjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0IscUNBQXFDLGFBQWE7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTNhOTA3ODc0ZDBlNWFmMWEzOGNmYWM5MDcyMGU5ZjA4YCk7XG5cbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZW50ZXIgZnVsbCBjaXR5IG5hbWUuIENhbm5vdCBmZXRjaCB0aGUgZGF0YScpXG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheVdlYXRoZXJDYXJkJyk7XG5cbmNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcEluRGVncmVlcycpO1xuXG5mdW5jdGlvbiBjb252ZXJ0VGVtcFRvQ2Vsc2l1cyhhYnNvbHV0ZVRlbXApIHtcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBjZWxjaXVzVGVtcCA9IChhYnNvbHV0ZVRlbXAgLSAyNzMuMTUpLnRvRml4ZWQoMik7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgVGhlIHRlbXBlcmF0dXJlIGluIGRlZ3JlZXMgQ2Vsc2l1cyBpcyAke2NlbGNpdXNUZW1wfWA7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUZW1wVG9GYWhyZW5oZWl0KGFic29sdXRlVGVtcCkge1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNlbGNpdXNUZW1wID0gKGFic29sdXRlVGVtcCAtIDI3My4xNSk7XG4gIGNvbnN0IGZhaHJlbmhlaXRUZW1wID0gKChjZWxjaXVzVGVtcCAqIDkvNSkgKyAzMikudG9GaXhlZCgyKTtcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gZGVncmVlcyBGYWhyZW5oZWl0IGlzICR7ZmFocmVuaGVpdFRlbXB9YDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheShkYXRhKSB7XG4gIGNvbnN0IGFic29sdXRlVGVtcCA9IGRhdGEubWFpbi50ZW1wO1xuICBjb25zdCBtYWluV2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIHBhZ2VDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWltYWdlOnVybChcIlJhaW4uZ2lmXCIpOyBiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQ7YDsgICAgICAgICAgXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzLnRleHRDb250ZW50ID0gbWFpbldlYXRoZXI7XG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEZXNjcmlwdGlvbn0gd2l0aCBhbiBBYnNvbHV0ZSB0ZW1wIGluIEtlbHZpbiBvZiAke2Fic29sdXRlVGVtcH1gO1xuICBjb25zdCBjZWxzaXVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNlbHNpdXNCdG4udGV4dENvbnRlbnQgPSAnVGVtcCBpbiBkZWdyZWVzIENlbHNpdXMnO1xuICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ2J0bi13YXJuaW5nJywnbS0xJyk7XG4gIGNlbHNpdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udmVydFRlbXBUb0NlbHNpdXMoYWJzb2x1dGVUZW1wKTtcbiAgfSk7XG4gIGNvbnN0IGZhaHJlbmhlaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmFocmVuaGVpdEJ0bi50ZXh0Q29udGVudCA9ICdUZW1wIGluIGRlZ3JlZXMgRmFocmVuaGVpdCc7XG4gIGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywnYnRuLXByaW1hcnknLCdtLTEnKTtcbiAgZmFocmVuaGVpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb252ZXJ0VGVtcFRvRmFocmVuaGVpdChhYnNvbHV0ZVRlbXApO1xuICB9KTtcbiAgZGl2LmFwcGVuZChoMywgcDEsIGNlbHNpdXNCdG4sIGZhaHJlbmhlaXRCdG4pO1xuICBkaXNwbGF5V2VhdGhlckluZm8udGV4dENvbnRlbnQgPSAnJztcbiAgZGlzcGxheVdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3IoZXJyb3JNZXNzYWdlKSB7XG4gIGRpc3BsYXlXZWF0aGVySW5mby50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbn1cblxuY29uc3QgY2hlY2tXZWF0aGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5V2VhdGhlckZvcm0nKTtcbmNoZWNrV2VhdGhlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG5cbiAgZ2V0V2VhdGhlcihjaXR5VmFsdWUpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BsYXkoZGF0YSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgZGlzcGxheUVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9