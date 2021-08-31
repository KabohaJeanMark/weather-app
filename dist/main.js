/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);
  const data = await response.json();
  return data;
};

const displayWeatherInfo = document.getElementById('displayWeatherCard');

const tempDiv = document.getElementById('tempInDegrees');

function convertTempToCelsius(absoluteTemp) {
  tempDiv.textContent = '';
  const celciusTemp = absoluteTemp - 273;
  tempDiv.textContent = `The temperature in degrees Celsius is ${celciusTemp}`;
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
  div.append(h3, p1, celsiusBtn);
  displayWeatherInfo.textContent = '';
  displayWeatherInfo.appendChild(div);
};

const checkWeatherForm = document.getElementById('cityWeatherForm');
checkWeatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityValue = document.getElementById('city').value;

  getWeather(cityValue)
    .then((data) => {
      display(data);
    }).catch((err) => {
      console.log(err)
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxZQUFZO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CLHFDQUFxQyxhQUFhO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0zYTkwNzg3NGQwZTVhZjFhMzhjZmFjOTA3MjBlOWYwOGApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5V2VhdGhlckNhcmQnKTtcblxuY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wSW5EZWdyZWVzJyk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRUZW1wVG9DZWxzaXVzKGFic29sdXRlVGVtcCkge1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNlbGNpdXNUZW1wID0gYWJzb2x1dGVUZW1wIC0gMjczO1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gYFRoZSB0ZW1wZXJhdHVyZSBpbiBkZWdyZWVzIENlbHNpdXMgaXMgJHtjZWxjaXVzVGVtcH1gO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5KGRhdGEpIHtcbiAgY29uc3QgYWJzb2x1dGVUZW1wID0gZGF0YS5tYWluLnRlbXA7XG4gIGNvbnN0IG1haW5XZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMudGV4dENvbnRlbnQgPSBtYWluV2VhdGhlcjtcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRlc2NyaXB0aW9ufSB3aXRoIGFuIEFic29sdXRlIHRlbXAgaW4gS2VsdmluIG9mICR7YWJzb2x1dGVUZW1wfWA7XG4gIGNvbnN0IGNlbHNpdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2Vsc2l1c0J0bi50ZXh0Q29udGVudCA9ICdUZW1wIGluIGRlZ3JlZXMgQ2Vsc2l1cyc7XG4gIGNlbHNpdXNCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywnYnRuLXdhcm5pbmcnLCdtLTEnKTtcbiAgY2Vsc2l1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb252ZXJ0VGVtcFRvQ2Vsc2l1cyhhYnNvbHV0ZVRlbXApO1xuICB9KTtcbiAgZGl2LmFwcGVuZChoMywgcDEsIGNlbHNpdXNCdG4pO1xuICBkaXNwbGF5V2VhdGhlckluZm8udGV4dENvbnRlbnQgPSAnJztcbiAgZGlzcGxheVdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBjaGVja1dlYXRoZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHlXZWF0aGVyRm9ybScpO1xuY2hlY2tXZWF0aGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgY2l0eVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZTtcblxuICBnZXRXZWF0aGVyKGNpdHlWYWx1ZSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGlzcGxheShkYXRhKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==