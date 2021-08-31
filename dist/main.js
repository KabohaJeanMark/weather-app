/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('Hi testing');

// const API_KEY = 'My API Key';

async function getWeather(city) {
  const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);
  const data = cityWeather.json();
  console.log(data);
}

getWeather('Kampala');
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0EsdUZBQXVGLEtBQUs7QUFDNUY7QUFDQTtBQUNBOztBQUVBLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0hpIHRlc3RpbmcnKTtcblxuLy8gY29uc3QgQVBJX0tFWSA9ICdNeSBBUEkgS2V5JztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0zYTkwNzg3NGQwZTVhZjFhMzhjZmFjOTA3MjBlOWYwOGApO1xuICBjb25zdCBkYXRhID0gY2l0eVdlYXRoZXIuanNvbigpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn1cblxuZ2V0V2VhdGhlcignS2FtcGFsYScpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==