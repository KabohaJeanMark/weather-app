/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0EsdUZBQXVGLEtBQUs7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdIaSB0ZXN0aW5nJyk7XG5cbmxldCB3ZWF0aGVyO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3QgY2l0eVdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTNhOTA3ODc0ZDBlNWFmMWEzOGNmYWM5MDcyMGU5ZjA4YCk7XG4gIGNpdHlXZWF0aGVyLmpzb24oKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICB3ZWF0aGVyID0gcmVzcG9uc2Uud2VhdGhlcjtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgfSlcblxufVxuXG5nZXRXZWF0aGVyKCdLYW1wYWxhJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9