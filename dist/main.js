/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/tempMethods.js":
/*!****************************!*\
  !*** ./src/tempMethods.js ***!
  \****************************/
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
/* harmony import */ var _tempMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempMethods */ "./src/tempMethods.js");
/* harmony import */ var _fetchWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWeather */ "./src/fetchWeather.js");



const displayWeatherInfo = document.getElementById('displayWeatherCard');

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
    (0,_tempMethods__WEBPACK_IMPORTED_MODULE_0__.convertTempToCelsius)(absoluteTemp);
  });
  const fahrenheitBtn = document.createElement('button');
  fahrenheitBtn.textContent = 'Temp in degrees Fahrenheit';
  fahrenheitBtn.classList.add('btn', 'btn-primary', 'm-1');
  fahrenheitBtn.addEventListener('click', () => {
    (0,_tempMethods__WEBPACK_IMPORTED_MODULE_0__.convertTempToFahrenheit)(absoluteTemp);
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

  (0,_fetchWeather__WEBPACK_IMPORTED_MODULE_1__.default)(cityValue)
    .then((data) => {
      display(data);
    }).catch((err) => {
      displayError(err.message);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0Esb0ZBQW9GLEtBQUs7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNWekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFlBQVk7QUFDN0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsZUFBZTtBQUNuRjs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044RTtBQUN0Qzs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0IscUNBQXFDLGFBQWE7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFvQjtBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUF1QjtBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLHNEQUFVO0FBQ1o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2hXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXBNZXRob2RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0zYTkwNzg3NGQwZTVhZjFhMzhjZmFjOTA3MjBlOWYwOGApO1xuXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGZ1bGwgY2l0eSBuYW1lLiBDYW5ub3QgZmV0Y2ggdGhlIGRhdGEnKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7IiwiY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wSW5EZWdyZWVzJyk7XG5cbmNvbnN0IGNvbnZlcnRUZW1wVG9DZWxzaXVzID0gKGFic29sdXRlVGVtcCkgPT4ge1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNlbGNpdXNUZW1wID0gKGFic29sdXRlVGVtcCAtIDI3My4xNSkudG9GaXhlZCgyKTtcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gZGVncmVlcyBDZWxzaXVzIGlzICR7Y2VsY2l1c1RlbXB9YDtcbn07XG5cbmNvbnN0IGNvbnZlcnRUZW1wVG9GYWhyZW5oZWl0ID0gKGFic29sdXRlVGVtcCkgPT4ge1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNlbGNpdXNUZW1wID0gKGFic29sdXRlVGVtcCAtIDI3My4xNSk7XG4gIGNvbnN0IGZhaHJlbmhlaXRUZW1wID0gKChjZWxjaXVzVGVtcCAqICg5IC8gNSkpICsgMzIpLnRvRml4ZWQoMik7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgVGhlIHRlbXBlcmF0dXJlIGluIGRlZ3JlZXMgRmFocmVuaGVpdCBpcyAke2ZhaHJlbmhlaXRUZW1wfWA7XG59O1xuXG5leHBvcnQgeyBjb252ZXJ0VGVtcFRvQ2Vsc2l1cywgY29udmVydFRlbXBUb0ZhaHJlbmhlaXQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNvbnZlcnRUZW1wVG9DZWxzaXVzLCBjb252ZXJ0VGVtcFRvRmFocmVuaGVpdCB9IGZyb20gJy4vdGVtcE1ldGhvZHMnO1xuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9mZXRjaFdlYXRoZXInO1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheVdlYXRoZXJDYXJkJyk7XG5cbmNvbnN0IGRpc3BsYXkgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBhYnNvbHV0ZVRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy50ZXh0Q29udGVudCA9IG1haW5XZWF0aGVyO1xuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGVzY3JpcHRpb259IHdpdGggYW4gQWJzb2x1dGUgdGVtcCBpbiBLZWx2aW4gb2YgJHthYnNvbHV0ZVRlbXB9YDtcbiAgY29uc3QgY2Vsc2l1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjZWxzaXVzQnRuLnRleHRDb250ZW50ID0gJ1RlbXAgaW4gZGVncmVlcyBDZWxzaXVzJztcbiAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXdhcm5pbmcnLCAnbS0xJyk7XG4gIGNlbHNpdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udmVydFRlbXBUb0NlbHNpdXMoYWJzb2x1dGVUZW1wKTtcbiAgfSk7XG4gIGNvbnN0IGZhaHJlbmhlaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmFocmVuaGVpdEJ0bi50ZXh0Q29udGVudCA9ICdUZW1wIGluIGRlZ3JlZXMgRmFocmVuaGVpdCc7XG4gIGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1wcmltYXJ5JywgJ20tMScpO1xuICBmYWhyZW5oZWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnZlcnRUZW1wVG9GYWhyZW5oZWl0KGFic29sdXRlVGVtcCk7XG4gIH0pO1xuICBkaXYuYXBwZW5kKGgzLCBwMSwgY2Vsc2l1c0J0biwgZmFocmVuaGVpdEJ0bik7XG4gIGRpc3BsYXlXZWF0aGVySW5mby50ZXh0Q29udGVudCA9ICcnO1xuICBkaXNwbGF5V2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlFcnJvciA9IChlcnJvck1lc3NhZ2UpID0+IHtcbiAgZGlzcGxheVdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xufTtcblxuY29uc3QgY2hlY2tXZWF0aGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5V2VhdGhlckZvcm0nKTtcbmNoZWNrV2VhdGhlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG5cbiAgZ2V0V2VhdGhlcihjaXR5VmFsdWUpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BsYXkoZGF0YSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgZGlzcGxheUVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9