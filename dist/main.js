/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('Hi testing');

let weather;

async function getWeather(city) {
  const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);
  const response = await cityWeather.json();
  weather = response.weather;
  console.log(weather);
};

getWeather('Kampala');
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0EsdUZBQXVGLEtBQUs7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSGkgdGVzdGluZycpO1xuXG5sZXQgd2VhdGhlcjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0zYTkwNzg3NGQwZTVhZjFhMzhjZmFjOTA3MjBlOWYwOGApO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNpdHlXZWF0aGVyLmpzb24oKTtcbiAgd2VhdGhlciA9IHJlc3BvbnNlLndlYXRoZXI7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xufTtcblxuZ2V0V2VhdGhlcignS2FtcGFsYScpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==