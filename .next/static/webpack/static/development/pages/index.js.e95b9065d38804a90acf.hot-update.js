webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/products/productCard.js":
/*!********************************************!*\
  !*** ./components/products/productCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counter_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter/counter */ "./components/products/counter/counter.js");
/* harmony import */ var _context_productInCartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/productInCartContext */ "./context/productInCartContext.js");
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\components\\products\\productCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProductCard(_ref) {
  _s();

  var product = _ref.product;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_productInCartContext__WEBPACK_IMPORTED_MODULE_2__["ProductsInCartContext"]),
      productsInCart = _useContext[0],
      setProductsInCart = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      value = _useState[0],
      setValue = _useState[1];

  var HandleDecrement = function HandleDecrement() {
    var auxVal = value;
    if (value > 1) auxVal--;
    setValue(auxVal);
  };

  var HandleIncrement = function HandleIncrement(e) {
    var auxVal = value;
    auxVal++;
    setValue(auxVal);
  };

  return __jsx("div", {
    className: " rounded bg-white mx-2 shadow-lg w-full lg:w-64 mx-1 lg:mx-2 mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "w-48 h-48 cover-fill mx-auto mt-4 ",
    src: "img/".concat(product.pictureUrl),
    alt: "Pizza",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "px-4 py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "font-bold text-xl mb-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, product.name), __jsx("div", {
    className: "flex justify-between center w-10 mx-auto ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "img/hoja.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "img/aji-picante.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: "text-gray-600 h-8 text-xs mt-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, product.ingredients), __jsx("div", {
    className: "flex text-center mx-auto w-10 mt-2 pr-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "font-bold mt-1 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "$"), __jsx("p", {
    className: " font-bold text-xl ml-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, product.price), __jsx("p", {
    className: "font-bold mt-1 ml-2 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "CUC"))), __jsx("div", {
    className: "px-6 py-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_counter_counter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    HandleDecrement: HandleDecrement,
    HandleIncrement: HandleIncrement,
    HandleAddProductToCart: HandleAddProductToCart,
    value: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })));
}

_s(ProductCard, "xh9zj4kEiBlL/G/bSUGQkUc0FQc=");

_c = ProductCard;

var _c;

$RefreshReg$(_c, "ProductCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RDYXJkLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsInVzZUNvbnRleHQiLCJQcm9kdWN0c0luQ2FydENvbnRleHQiLCJwcm9kdWN0c0luQ2FydCIsInNldFByb2R1Y3RzSW5DYXJ0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiSGFuZGxlRGVjcmVtZW50IiwiYXV4VmFsIiwiSGFuZGxlSW5jcmVtZW50IiwiZSIsInBpY3R1cmVVcmwiLCJuYW1lIiwiaW5ncmVkaWVudHMiLCJwcmljZSIsIkhhbmRsZUFkZFByb2R1Y3RUb0NhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQUFrQztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxvQkFFTkMsd0RBQVUsQ0FBQ0MsbUZBQUQsQ0FGSjtBQUFBLE1BRXhDQyxjQUZ3QztBQUFBLE1BRXpCQyxpQkFGeUI7O0FBQUEsa0JBSXZCQyxzREFBUSxDQUFDLENBQUQsQ0FKZTtBQUFBLE1BSTFDQyxLQUowQztBQUFBLE1BSW5DQyxRQUptQzs7QUFLL0MsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQUlDLE1BQU0sR0FBR0gsS0FBYjtBQUNBLFFBQUlBLEtBQUssR0FBRyxDQUFaLEVBQWVHLE1BQU07QUFDckJGLFlBQVEsQ0FBQ0UsTUFBRCxDQUFSO0FBQ0QsR0FKRDs7QUFLQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QixRQUFJRixNQUFNLEdBQUdILEtBQWI7QUFDQUcsVUFBTTtBQUNORixZQUFRLENBQUNFLE1BQUQsQ0FBUjtBQUNELEdBSkQ7O0FBTUEsU0FDRTtBQUFNLGFBQVMsRUFBQyxvRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLG9DQURaO0FBRUUsT0FBRyxnQkFBU1QsT0FBTyxDQUFDWSxVQUFqQixDQUZMO0FBR0UsT0FBRyxFQUFDLE9BSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxRFosT0FBTyxDQUFDYSxJQUE3RCxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsT0FBRyxFQUFDLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssT0FBRyxFQUFDLHFCQUFUO0FBQStCLE9BQUcsRUFBQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGRixFQU9FO0FBQUcsYUFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2IsT0FBTyxDQUFDYyxXQURYLENBUEYsRUFVRTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsMEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q2QsT0FBTyxDQUFDZSxLQUFqRCxDQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMsbUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGLENBVkYsQ0FORixFQXNCRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsbUJBQWUsRUFBRVAsZUFEbkI7QUFFRSxtQkFBZSxFQUFFRSxlQUZuQjtBQUdFLDBCQUFzQixFQUFFTSxzQkFIMUI7QUFJRSxTQUFLLEVBQUVWLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdEJGLENBREY7QUFpQ0Q7O0dBakR1QlAsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTk1YjkwNjVkMzg4MDRhOTBhY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi9jb3VudGVyL2NvdW50ZXJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdHNJbkNhcnRDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcHJvZHVjdEluQ2FydENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdCB9KSB7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0c0luQ2FydCxzZXRQcm9kdWN0c0luQ2FydF09dXNlQ29udGV4dChQcm9kdWN0c0luQ2FydENvbnRleHQpO1xyXG5cclxuICBsZXQgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBIYW5kbGVEZWNyZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXV4VmFsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPiAxKSBhdXhWYWwtLTtcclxuICAgIHNldFZhbHVlKGF1eFZhbCk7XHJcbiAgfTtcclxuICBjb25zdCBIYW5kbGVJbmNyZW1lbnQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGF1eFZhbCA9IHZhbHVlO1xyXG4gICAgYXV4VmFsKys7XHJcbiAgICBzZXRWYWx1ZShhdXhWYWwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ICBjbGFzc05hbWU9XCIgcm91bmRlZCBiZy13aGl0ZSBteC0yIHNoYWRvdy1sZyB3LWZ1bGwgbGc6dy02NCBteC0xIGxnOm14LTIgbWItMTBcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cInctNDggaC00OCBjb3Zlci1maWxsIG14LWF1dG8gbXQtNCBcIlxyXG4gICAgICAgIHNyYz17YGltZy8ke3Byb2R1Y3QucGljdHVyZVVybH1gfVxyXG4gICAgICAgIGFsdD1cIlBpenphXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTIgdGV4dC1jZW50ZXJcIj57cHJvZHVjdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gY2VudGVyIHctMTAgbXgtYXV0byBcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2hvamEuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2FqaS1waWNhbnRlLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaC04IHRleHQteHMgbXQtMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAge3Byb2R1Y3QuaW5ncmVkaWVudHN9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWNlbnRlciBteC1hdXRvIHctMTAgbXQtMiBwci0yMFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTEgdGV4dC1ncmF5LTUwMFwiPiQ8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgZm9udC1ib2xkIHRleHQteGwgbWwtMiBcIj57cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtMSBtbC0yIHRleHQtZ3JheS01MDBcIj5DVUM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktMiBcIj5cclxuICAgICAgICA8Q291bnRlclxyXG4gICAgICAgICAgSGFuZGxlRGVjcmVtZW50PXtIYW5kbGVEZWNyZW1lbnR9XHJcbiAgICAgICAgICBIYW5kbGVJbmNyZW1lbnQ9e0hhbmRsZUluY3JlbWVudH1cclxuICAgICAgICAgIEhhbmRsZUFkZFByb2R1Y3RUb0NhcnQ9e0hhbmRsZUFkZFByb2R1Y3RUb0NhcnR9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=