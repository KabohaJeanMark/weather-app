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
  celsiusBtn.addEventListener('click', convertTempToCelsius(absoluteTemp));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxZQUFZO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CLHFDQUFxQyxhQUFhO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9M2E5MDc4NzRkMGU1YWYxYTM4Y2ZhYzkwNzIwZTlmMDhgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheVdlYXRoZXJDYXJkJyk7XG5cbmNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcEluRGVncmVlcycpO1xuXG5mdW5jdGlvbiBjb252ZXJ0VGVtcFRvQ2Vsc2l1cyhhYnNvbHV0ZVRlbXApIHtcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBjZWxjaXVzVGVtcCA9IGFic29sdXRlVGVtcCAtIDI3MztcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gZGVncmVlcyBDZWxzaXVzIGlzICR7Y2VsY2l1c1RlbXB9YDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheShkYXRhKSB7XG4gIGNvbnN0IGFic29sdXRlVGVtcCA9IGRhdGEubWFpbi50ZW1wO1xuICBjb25zdCBtYWluV2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzLnRleHRDb250ZW50ID0gbWFpbldlYXRoZXI7XG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEZXNjcmlwdGlvbn0gd2l0aCBhbiBBYnNvbHV0ZSB0ZW1wIGluIEtlbHZpbiBvZiAke2Fic29sdXRlVGVtcH1gO1xuICBjb25zdCBjZWxzaXVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNlbHNpdXNCdG4udGV4dENvbnRlbnQgPSAnVGVtcCBpbiBkZWdyZWVzIENlbHNpdXMnO1xuICBjZWxzaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udmVydFRlbXBUb0NlbHNpdXMoYWJzb2x1dGVUZW1wKSk7XG4gIGRpdi5hcHBlbmQoaDMsIHAxLCBjZWxzaXVzQnRuKTtcbiAgZGlzcGxheVdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gJyc7XG4gIGRpc3BsYXlXZWF0aGVySW5mby5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuY29uc3QgY2hlY2tXZWF0aGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5V2VhdGhlckZvcm0nKTtcbmNoZWNrV2VhdGhlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG5cbiAgZ2V0V2VhdGhlcihjaXR5VmFsdWUpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BsYXkoZGF0YSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=