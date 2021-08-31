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

function display(data) {
  const absoluteTemp = data.main.temp;
  console.log(absoluteTemp);
  const mainWeather = data.weather[0].main;
  console.log(mainWeather);
  const weatherDescription = data.weather[0].description;
  console.log(weatherDescription);
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = mainWeather;
  const p1 = document.createElement('p');
  p1.textContent = `${weatherDescription} with an Absolute temp in Kelvin of ${absoluteTemp}`;
  div.append(h3, p1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CLHFDQUFxQyxhQUFhO0FBQzVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9M2E5MDc4NzRkMGU1YWYxYTM4Y2ZhYzkwNzIwZTlmMDhgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheVdlYXRoZXJDYXJkJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXkoZGF0YSkge1xuICBjb25zdCBhYnNvbHV0ZVRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgY29uc29sZS5sb2coYWJzb2x1dGVUZW1wKTtcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgY29uc29sZS5sb2cobWFpbldlYXRoZXIpO1xuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzLnRleHRDb250ZW50ID0gbWFpbldlYXRoZXI7XG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEZXNjcmlwdGlvbn0gd2l0aCBhbiBBYnNvbHV0ZSB0ZW1wIGluIEtlbHZpbiBvZiAke2Fic29sdXRlVGVtcH1gO1xuICBkaXYuYXBwZW5kKGgzLCBwMSk7XG4gIGRpc3BsYXlXZWF0aGVySW5mby50ZXh0Q29udGVudCA9ICcnO1xuICBkaXNwbGF5V2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNoZWNrV2VhdGhlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eVdlYXRoZXJGb3JtJyk7XG5jaGVja1dlYXRoZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBjaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlO1xuXG4gIGdldFdlYXRoZXIoY2l0eVZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkaXNwbGF5KGRhdGEpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9