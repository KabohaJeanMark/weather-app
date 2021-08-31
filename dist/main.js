/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('Hi testing');

let weather;

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

getWeather('Kampala')
  .then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err)
  })
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUcsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdIaSB0ZXN0aW5nJyk7XG5cbmxldCB3ZWF0aGVyO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTNhOTA3ODc0ZDBlNWFmMWEzOGNmYWM5MDcyMGU5ZjA4YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHRlbXAgPSBkYXRhLm1haW4udGVtcCAtIDI3My4xNTtcbiAgY29uc29sZS5sb2codGVtcCk7XG4gIGNvbnN0IG1haW5XZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnNvbGUubG9nKG1haW5XZWF0aGVyKTtcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmdldFdlYXRoZXIoJ0thbXBhbGEnKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==