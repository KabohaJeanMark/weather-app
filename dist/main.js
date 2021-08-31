/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFDQSxvRkFBb0YsS0FBSztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTNhOTA3ODc0ZDBlNWFmMWEzOGNmYWM5MDcyMGU5ZjA4YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHRlbXAgPSBkYXRhLm1haW4udGVtcCAtIDI3My4xNTtcbiAgY29uc29sZS5sb2codGVtcCk7XG4gIGNvbnN0IG1haW5XZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnNvbGUubG9nKG1haW5XZWF0aGVyKTtcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNoZWNrV2VhdGhlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eVdlYXRoZXJGb3JtJyk7XG5jaGVja1dlYXRoZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBjaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlO1xuICBcbiAgZ2V0V2VhdGhlcihjaXR5VmFsdWUpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KTtcbn0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=