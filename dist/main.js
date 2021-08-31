/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const getWeather = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);

  if (response.status !== 200) {
    throw new Error('Please enter full city name. Cannot fetch the data');
  }
  const data = await response.json();
  return data;
};

const displayWeatherInfo = document.getElementById('displayWeatherCard');

const tempDiv = document.getElementById('tempInDegrees');

const convertTempToCelsius = (absoluteTemp) => {
  tempDiv.textContent = '';
  const celciusTemp = (absoluteTemp - 273.15).toFixed(2);
  tempDiv.textContent = `The temperature in degrees Celsius is ${celciusTemp}`;
};

const convertTempToFahrenheit = (absoluteTemp) => {
  tempDiv.textContent = '';
  const celciusTemp = (absoluteTemp - 273.15);
  const fahrenheitTemp = ((celciusTemp * (9 / 5)) + 32).toFixed(2);
  tempDiv.textContent = `The temperature in degrees Fahrenheit is ${fahrenheitTemp}`;
};

const display = (data) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0Esb0ZBQW9GLEtBQUs7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsWUFBWTtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxlQUFlO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CLHFDQUFxQyxhQUFhO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0zYTkwNzg3NGQwZTVhZjFhMzhjZmFjOTA3MjBlOWYwOGApO1xuXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGZ1bGwgY2l0eSBuYW1lLiBDYW5ub3QgZmV0Y2ggdGhlIGRhdGEnKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5V2VhdGhlckNhcmQnKTtcblxuY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wSW5EZWdyZWVzJyk7XG5cbmNvbnN0IGNvbnZlcnRUZW1wVG9DZWxzaXVzID0gKGFic29sdXRlVGVtcCkgPT4ge1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNlbGNpdXNUZW1wID0gKGFic29sdXRlVGVtcCAtIDI3My4xNSkudG9GaXhlZCgyKTtcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gZGVncmVlcyBDZWxzaXVzIGlzICR7Y2VsY2l1c1RlbXB9YDtcbn07XG5cbmNvbnN0IGNvbnZlcnRUZW1wVG9GYWhyZW5oZWl0ID0gKGFic29sdXRlVGVtcCkgPT4ge1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNlbGNpdXNUZW1wID0gKGFic29sdXRlVGVtcCAtIDI3My4xNSk7XG4gIGNvbnN0IGZhaHJlbmhlaXRUZW1wID0gKChjZWxjaXVzVGVtcCAqICg5IC8gNSkpICsgMzIpLnRvRml4ZWQoMik7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgVGhlIHRlbXBlcmF0dXJlIGluIGRlZ3JlZXMgRmFocmVuaGVpdCBpcyAke2ZhaHJlbmhlaXRUZW1wfWA7XG59O1xuXG5jb25zdCBkaXNwbGF5ID0gKGRhdGEpID0+IHtcbiAgY29uc3QgYWJzb2x1dGVUZW1wID0gZGF0YS5tYWluLnRlbXA7XG4gIGNvbnN0IG1haW5XZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMudGV4dENvbnRlbnQgPSBtYWluV2VhdGhlcjtcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRlc2NyaXB0aW9ufSB3aXRoIGFuIEFic29sdXRlIHRlbXAgaW4gS2VsdmluIG9mICR7YWJzb2x1dGVUZW1wfWA7XG4gIGNvbnN0IGNlbHNpdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2Vsc2l1c0J0bi50ZXh0Q29udGVudCA9ICdUZW1wIGluIGRlZ3JlZXMgQ2Vsc2l1cyc7XG4gIGNlbHNpdXNCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi13YXJuaW5nJywgJ20tMScpO1xuICBjZWxzaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnZlcnRUZW1wVG9DZWxzaXVzKGFic29sdXRlVGVtcCk7XG4gIH0pO1xuICBjb25zdCBmYWhyZW5oZWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZhaHJlbmhlaXRCdG4udGV4dENvbnRlbnQgPSAnVGVtcCBpbiBkZWdyZWVzIEZhaHJlbmhlaXQnO1xuICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tcHJpbWFyeScsICdtLTEnKTtcbiAgZmFocmVuaGVpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb252ZXJ0VGVtcFRvRmFocmVuaGVpdChhYnNvbHV0ZVRlbXApO1xuICB9KTtcbiAgZGl2LmFwcGVuZChoMywgcDEsIGNlbHNpdXNCdG4sIGZhaHJlbmhlaXRCdG4pO1xuICBkaXNwbGF5V2VhdGhlckluZm8udGV4dENvbnRlbnQgPSAnJztcbiAgZGlzcGxheVdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBkaXNwbGF5RXJyb3IgPSAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gIGRpc3BsYXlXZWF0aGVySW5mby50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbn07XG5cbmNvbnN0IGNoZWNrV2VhdGhlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eVdlYXRoZXJGb3JtJyk7XG5jaGVja1dlYXRoZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBjaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlO1xuXG4gIGdldFdlYXRoZXIoY2l0eVZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkaXNwbGF5KGRhdGEpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGRpc3BsYXlFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==