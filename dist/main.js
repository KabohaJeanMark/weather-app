/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


const getWeather = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a907874d0e5af1a38cfac90720e9f08`);

  if (response.status !== 200) {
    throw new Error('Please enter full city name. Cannot fetch the data');
  }
  const data = await response.json();
  return data;
};

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

  getWeather(cityValue)
    .then((data) => {
      display(data);
    }).catch((err) => {
      displayError(err.message);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsWUFBWTtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxlQUFlO0FBQ25GOzs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEU7O0FBRTlFO0FBQ0Esb0ZBQW9GLEtBQUs7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9CQUFvQixxQ0FBcUMsYUFBYTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQW9CO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQXVCO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGVtcE1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBJbkRlZ3JlZXMnKTtcblxuY29uc3QgY29udmVydFRlbXBUb0NlbHNpdXMgPSAoYWJzb2x1dGVUZW1wKSA9PiB7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgY2VsY2l1c1RlbXAgPSAoYWJzb2x1dGVUZW1wIC0gMjczLjE1KS50b0ZpeGVkKDIpO1xuICB0ZW1wRGl2LnRleHRDb250ZW50ID0gYFRoZSB0ZW1wZXJhdHVyZSBpbiBkZWdyZWVzIENlbHNpdXMgaXMgJHtjZWxjaXVzVGVtcH1gO1xufTtcblxuY29uc3QgY29udmVydFRlbXBUb0ZhaHJlbmhlaXQgPSAoYWJzb2x1dGVUZW1wKSA9PiB7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgY2VsY2l1c1RlbXAgPSAoYWJzb2x1dGVUZW1wIC0gMjczLjE1KTtcbiAgY29uc3QgZmFocmVuaGVpdFRlbXAgPSAoKGNlbGNpdXNUZW1wICogKDkgLyA1KSkgKyAzMikudG9GaXhlZCgyKTtcbiAgdGVtcERpdi50ZXh0Q29udGVudCA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gZGVncmVlcyBGYWhyZW5oZWl0IGlzICR7ZmFocmVuaGVpdFRlbXB9YDtcbn07XG5cbmV4cG9ydCB7IGNvbnZlcnRUZW1wVG9DZWxzaXVzLCBjb252ZXJ0VGVtcFRvRmFocmVuaGVpdCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY29udmVydFRlbXBUb0NlbHNpdXMsIGNvbnZlcnRUZW1wVG9GYWhyZW5oZWl0IH0gZnJvbSAnLi90ZW1wTWV0aG9kcyc7XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9M2E5MDc4NzRkMGU1YWYxYTM4Y2ZhYzkwNzIwZTlmMDhgKTtcblxuICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBmdWxsIGNpdHkgbmFtZS4gQ2Fubm90IGZldGNoIHRoZSBkYXRhJyk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheVdlYXRoZXJDYXJkJyk7XG5cbmNvbnN0IGRpc3BsYXkgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBhYnNvbHV0ZVRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy50ZXh0Q29udGVudCA9IG1haW5XZWF0aGVyO1xuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGVzY3JpcHRpb259IHdpdGggYW4gQWJzb2x1dGUgdGVtcCBpbiBLZWx2aW4gb2YgJHthYnNvbHV0ZVRlbXB9YDtcbiAgY29uc3QgY2Vsc2l1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjZWxzaXVzQnRuLnRleHRDb250ZW50ID0gJ1RlbXAgaW4gZGVncmVlcyBDZWxzaXVzJztcbiAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXdhcm5pbmcnLCAnbS0xJyk7XG4gIGNlbHNpdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udmVydFRlbXBUb0NlbHNpdXMoYWJzb2x1dGVUZW1wKTtcbiAgfSk7XG4gIGNvbnN0IGZhaHJlbmhlaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZmFocmVuaGVpdEJ0bi50ZXh0Q29udGVudCA9ICdUZW1wIGluIGRlZ3JlZXMgRmFocmVuaGVpdCc7XG4gIGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1wcmltYXJ5JywgJ20tMScpO1xuICBmYWhyZW5oZWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnZlcnRUZW1wVG9GYWhyZW5oZWl0KGFic29sdXRlVGVtcCk7XG4gIH0pO1xuICBkaXYuYXBwZW5kKGgzLCBwMSwgY2Vsc2l1c0J0biwgZmFocmVuaGVpdEJ0bik7XG4gIGRpc3BsYXlXZWF0aGVySW5mby50ZXh0Q29udGVudCA9ICcnO1xuICBkaXNwbGF5V2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlFcnJvciA9IChlcnJvck1lc3NhZ2UpID0+IHtcbiAgZGlzcGxheVdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xufTtcblxuY29uc3QgY2hlY2tXZWF0aGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5V2VhdGhlckZvcm0nKTtcbmNoZWNrV2VhdGhlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG5cbiAgZ2V0V2VhdGhlcihjaXR5VmFsdWUpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BsYXkoZGF0YSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgZGlzcGxheUVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9