/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetchGifDisplay.js":
/*!********************************!*\
  !*** ./src/fetchGifDisplay.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getGif = async (weather) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=7FddFo9ujYHVGiLO4CG3l5wlUF5NUM29&s=${weather} weather`, { mode: 'cors' });

  if (response.status !== 200) {
    throw new Error('Cannot fetch the data');
  }
  const gifData = await response.json();
  return gifData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGif);

/***/ }),

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getWeather = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);

  if (response.status !== 200) {
    throw new Error('Please enter full city name. Cannot fetch the data');
  }
  const data = await response.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

/***/ }),

/***/ "./src/temp.js":
/*!*********************!*\
  !*** ./src/temp.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTempToCelsius": () => (/* binding */ convertTempToCelsius),
/* harmony export */   "convertTempToFahrenheit": () => (/* binding */ convertTempToFahrenheit)
/* harmony export */ });
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



/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "displayError": () => (/* binding */ displayError)
/* harmony export */ });
/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp */ "./src/temp.js");
/* harmony import */ var _fetchGifDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchGifDisplay */ "./src/fetchGifDisplay.js");



const displayWeatherInfo = document.getElementById('displayWeatherCard');

const gifBody = document.querySelector('img');

const display = async (data) => {
  const absoluteTemp = data.main.temp;
  const mainWeather = data.weather[0].main;
  const weatherDescription = data.weather[0].description;
  const gifData = await (0,_fetchGifDisplay__WEBPACK_IMPORTED_MODULE_1__.default)(weatherDescription);
  const imgUrl = gifData.data.images.original.url;
  console.log(imgUrl);
  gifBody.src = imgUrl;
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = mainWeather;
  const p1 = document.createElement('p');
  p1.textContent = `${weatherDescription} with an Absolute temp in Kelvin of ${absoluteTemp}`;
  const celsiusBtn = document.createElement('button');
  celsiusBtn.textContent = 'Temp in degrees Celsius';
  celsiusBtn.classList.add('btn', 'btn-warning', 'm-1');
  celsiusBtn.addEventListener('click', () => {
    (0,_temp__WEBPACK_IMPORTED_MODULE_0__.convertTempToCelsius)(absoluteTemp);
  });
  const fahrenheitBtn = document.createElement('button');
  fahrenheitBtn.textContent = 'Temp in degrees Fahrenheit';
  fahrenheitBtn.classList.add('btn', 'btn-primary', 'm-1');
  fahrenheitBtn.addEventListener('click', () => {
    (0,_temp__WEBPACK_IMPORTED_MODULE_0__.convertTempToFahrenheit)(absoluteTemp);
  });
  div.append(h3, p1, celsiusBtn, fahrenheitBtn);
  displayWeatherInfo.textContent = '';
  displayWeatherInfo.appendChild(div);
};

const displayError = (errorMessage) => {
  displayWeatherInfo.textContent = errorMessage;
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather */ "./src/fetchWeather.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");



const checkWeatherForm = document.getElementById('cityWeatherForm');
checkWeatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityValue = document.getElementById('city').value;

  (0,_fetchWeather__WEBPACK_IMPORTED_MODULE_0__.default)(cityValue)
    .then((data) => {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.display)(data);
    }).catch((err) => {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayError)(err.message);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EscUhBQXFILFNBQVMsWUFBWSxjQUFjOztBQUV4SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNWckI7QUFDQSxvRkFBb0YsS0FBSzs7QUFFekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ1Z6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsWUFBWTtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxlQUFlO0FBQ25GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVFO0FBQ2hDOztBQUV2Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0IscUNBQXFDLGFBQWE7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFvQjtBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUF1QjtBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNPOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSxzREFBVTtBQUNaO0FBQ0EsTUFBTSw4Q0FBTztBQUNiLEtBQUs7QUFDTCxNQUFNLG1EQUFZO0FBQ2xCLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2hHaWZEaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZW1wLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRHaWYgPSBhc3luYyAod2VhdGhlcikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT03RmRkRm85dWpZSFZHaUxPNENHM2w1d2xVRjVOVU0yOSZzPSR7d2VhdGhlcn0gd2VhdGhlcmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZldGNoIHRoZSBkYXRhJyk7XG4gIH1cbiAgY29uc3QgZ2lmRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGdpZkRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRHaWY7IiwiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0zYTkwNzg3NGQwZTVhZjFhMzhjZmFjOTA3MjBlOWYwOGApO1xuXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGZ1bGwgY2l0eSBuYW1lLiBDYW5ub3QgZmV0Y2ggdGhlIGRhdGEnKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7IiwiY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wSW5EZWdyZWVzJyk7XG5cbmNvbnN0IGNvbnZlcnRUZW1wVG9DZWxzaXVzID0gKGFic29sdXRlVGVtcCkgPT4ge1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNlbGNpdXNUZW1wID0gKGFic29sdXRlVGVtcCAtIDI3My4xNSkudG9GaXhlZCgyKTtcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gZGVncmVlcyBDZWxzaXVzIGlzICR7Y2VsY2l1c1RlbXB9YDtcbn07XG5cbmNvbnN0IGNvbnZlcnRUZW1wVG9GYWhyZW5oZWl0ID0gKGFic29sdXRlVGVtcCkgPT4ge1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNlbGNpdXNUZW1wID0gKGFic29sdXRlVGVtcCAtIDI3My4xNSk7XG4gIGNvbnN0IGZhaHJlbmhlaXRUZW1wID0gKChjZWxjaXVzVGVtcCAqICg5IC8gNSkpICsgMzIpLnRvRml4ZWQoMik7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgVGhlIHRlbXBlcmF0dXJlIGluIGRlZ3JlZXMgRmFocmVuaGVpdCBpcyAke2ZhaHJlbmhlaXRUZW1wfWA7XG59O1xuXG5leHBvcnQgeyBjb252ZXJ0VGVtcFRvQ2Vsc2l1cywgY29udmVydFRlbXBUb0ZhaHJlbmhlaXQgfTsiLCJpbXBvcnQgeyBjb252ZXJ0VGVtcFRvQ2Vsc2l1cywgY29udmVydFRlbXBUb0ZhaHJlbmhlaXQgfSBmcm9tICcuL3RlbXAnO1xuaW1wb3J0IGdldEdpZiBmcm9tICcuL2ZldGNoR2lmRGlzcGxheSc7XG5cbmNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5V2VhdGhlckNhcmQnKTtcblxuY29uc3QgZ2lmQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgYWJzb2x1dGVUZW1wID0gZGF0YS5tYWluLnRlbXA7XG4gIGNvbnN0IG1haW5XZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2lmRGF0YSA9IGF3YWl0IGdldEdpZih3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICBjb25zdCBpbWdVcmwgPSBnaWZEYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgY29uc29sZS5sb2coaW1nVXJsKTtcbiAgZ2lmQm9keS5zcmMgPSBpbWdVcmw7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzLnRleHRDb250ZW50ID0gbWFpbldlYXRoZXI7XG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEZXNjcmlwdGlvbn0gd2l0aCBhbiBBYnNvbHV0ZSB0ZW1wIGluIEtlbHZpbiBvZiAke2Fic29sdXRlVGVtcH1gO1xuICBjb25zdCBjZWxzaXVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNlbHNpdXNCdG4udGV4dENvbnRlbnQgPSAnVGVtcCBpbiBkZWdyZWVzIENlbHNpdXMnO1xuICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4td2FybmluZycsICdtLTEnKTtcbiAgY2Vsc2l1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb252ZXJ0VGVtcFRvQ2Vsc2l1cyhhYnNvbHV0ZVRlbXApO1xuICB9KTtcbiAgY29uc3QgZmFocmVuaGVpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmYWhyZW5oZWl0QnRuLnRleHRDb250ZW50ID0gJ1RlbXAgaW4gZGVncmVlcyBGYWhyZW5oZWl0JztcbiAgZmFocmVuaGVpdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXByaW1hcnknLCAnbS0xJyk7XG4gIGZhaHJlbmhlaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udmVydFRlbXBUb0ZhaHJlbmhlaXQoYWJzb2x1dGVUZW1wKTtcbiAgfSk7XG4gIGRpdi5hcHBlbmQoaDMsIHAxLCBjZWxzaXVzQnRuLCBmYWhyZW5oZWl0QnRuKTtcbiAgZGlzcGxheVdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gJyc7XG4gIGRpc3BsYXlXZWF0aGVySW5mby5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuY29uc3QgZGlzcGxheUVycm9yID0gKGVycm9yTWVzc2FnZSkgPT4ge1xuICBkaXNwbGF5V2VhdGhlckluZm8udGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5LCBkaXNwbGF5RXJyb3IgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vZmV0Y2hXZWF0aGVyJztcbmltcG9ydCB7IGRpc3BsYXksIGRpc3BsYXlFcnJvciB9IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IGNoZWNrV2VhdGhlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eVdlYXRoZXJGb3JtJyk7XG5jaGVja1dlYXRoZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBjaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlO1xuXG4gIGdldFdlYXRoZXIoY2l0eVZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkaXNwbGF5KGRhdGEpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGRpc3BsYXlFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==