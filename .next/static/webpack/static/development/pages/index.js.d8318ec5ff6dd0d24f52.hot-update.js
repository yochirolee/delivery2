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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _counter_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter/counter */ "./components/products/counter/counter.js");
/* harmony import */ var _context_productInCartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/productInCartContext */ "./context/productInCartContext.js");


var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\components\\products\\productCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ProductCard(_ref) {
  _s();

  var product = _ref.product;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_productInCartContext__WEBPACK_IMPORTED_MODULE_3__["ProductsInCartContext"]),
      productsInCart = _useContext[0],
      setProductsInCart = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
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

  var HandleAddProductToCart = function HandleAddProductToCart(product) {
    var auxProducts = [];
    auxProducts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(productsInCart);
    console.log(auxProducts);

    if (value === 1) {
      auxProducts.push(product);
      setProductsInCart(auxProducts);
    } else {
      for (var i = 0; i < value; i++) {
        auxProducts.push(product);
        setProductsInCart(auxProducts);
      }

      setValue(1);
    }
  };

  return __jsx("div", {
    className: " rounded bg-white mx-2 shadow-lg w-full lg:w-64 mx-1 lg:mx-2 mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "w-48 h-48 cover-fill mx-auto mt-4 ",
    src: "img/".concat(product.pictureUrl),
    alt: "Pizza",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "px-4 py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "font-bold text-xl mb-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, product.name), __jsx("div", {
    className: "flex justify-between center w-10 mx-auto ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "img/hoja.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "img/aji-picante.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: "text-gray-600 h-8 text-xs mt-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, product.ingredients), __jsx("div", {
    className: "flex text-center mx-auto w-10 mt-2 pr-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "font-bold mt-1 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "$"), __jsx("p", {
    className: " font-bold text-xl ml-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, product.price), __jsx("p", {
    className: "font-bold mt-1 ml-2 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "CUC"))), __jsx("div", {
    className: "px-6 py-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_counter_counter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    HandleDecrement: HandleDecrement,
    HandleIncrement: HandleIncrement,
    HandleAddProductToCart: HandleAddProductToCart,
    value: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })));
}

_s(ProductCard, "2VoorYBJn54xgqm3/I2WXJikG90=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RDYXJkLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsInVzZUNvbnRleHQiLCJQcm9kdWN0c0luQ2FydENvbnRleHQiLCJwcm9kdWN0c0luQ2FydCIsInNldFByb2R1Y3RzSW5DYXJ0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiSGFuZGxlRGVjcmVtZW50IiwiYXV4VmFsIiwiSGFuZGxlSW5jcmVtZW50IiwiZSIsIkhhbmRsZUFkZFByb2R1Y3RUb0NhcnQiLCJhdXhQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiaSIsInBpY3R1cmVVcmwiLCJuYW1lIiwiaW5ncmVkaWVudHMiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLG9CQUNIQyx3REFBVSxDQUFDQyxtRkFBRCxDQURQO0FBQUEsTUFDeENDLGNBRHdDO0FBQUEsTUFDeEJDLGlCQUR3Qjs7QUFBQSxrQkFHdkJDLHNEQUFRLENBQUMsQ0FBRCxDQUhlO0FBQUEsTUFHMUNDLEtBSDBDO0FBQUEsTUFHbkNDLFFBSG1DOztBQUkvQyxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBSUMsTUFBTSxHQUFHSCxLQUFiO0FBQ0EsUUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZUcsTUFBTTtBQUNyQkYsWUFBUSxDQUFDRSxNQUFELENBQVI7QUFDRCxHQUpEOztBQUtBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCLFFBQUlGLE1BQU0sR0FBR0gsS0FBYjtBQUNBRyxVQUFNO0FBQ05GLFlBQVEsQ0FBQ0UsTUFBRCxDQUFSO0FBQ0QsR0FKRDs7QUFLQSxNQUFNRyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNaLE9BQUQsRUFBYTtBQUUxQyxRQUFJYSxXQUFXLEdBQUcsRUFBbEI7QUFDQUEsZUFBVyxHQUFHLDZGQUFJVixjQUFQLENBQVg7QUFDQVcsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7O0FBQ0EsUUFBSVAsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZk8saUJBQVcsQ0FBQ0csSUFBWixDQUFpQmhCLE9BQWpCO0FBQ0FJLHVCQUFpQixDQUFDUyxXQUFELENBQWpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsV0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxLQUFwQixFQUEyQlcsQ0FBQyxFQUE1QixFQUFnQztBQUU5QkosbUJBQVcsQ0FBQ0csSUFBWixDQUFpQmhCLE9BQWpCO0FBQ0FJLHlCQUFpQixDQUFDUyxXQUFELENBQWpCO0FBQ0Q7O0FBQ0ROLGNBQVEsQ0FBQyxDQUFELENBQVI7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxTQUNFO0FBQUssYUFBUyxFQUFDLG9FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxvQ0FEWjtBQUVFLE9BQUcsZ0JBQVNQLE9BQU8sQ0FBQ2tCLFVBQWpCLENBRkw7QUFHRSxPQUFHLEVBQUMsT0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFEbEIsT0FBTyxDQUFDbUIsSUFBN0QsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxjQUFUO0FBQXdCLE9BQUcsRUFBQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixPQUFHLEVBQUMsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsRUFPRTtBQUFHLGFBQVMsRUFBQyw0Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0duQixPQUFPLENBQUNvQixXQURYLENBUEYsRUFVRTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsMEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q3BCLE9BQU8sQ0FBQ3FCLEtBQWpELENBRkYsRUFHRTtBQUFHLGFBQVMsRUFBQyxtQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEYsQ0FWRixDQU5GLEVBc0JFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxtQkFBZSxFQUFFYixlQURuQjtBQUVFLG1CQUFlLEVBQUVFLGVBRm5CO0FBR0UsMEJBQXNCLEVBQUVFLHNCQUgxQjtBQUlFLFNBQUssRUFBRU4sS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F0QkYsQ0FERjtBQWlDRDs7R0FqRXVCUCxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kODMxOGVjNWZmNmRkMGQyNGY1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuL2NvdW50ZXIvY291bnRlclwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0luQ2FydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9wcm9kdWN0SW5DYXJ0Q29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBwcm9kdWN0IH0pIHtcclxuICBjb25zdCBbcHJvZHVjdHNJbkNhcnQsIHNldFByb2R1Y3RzSW5DYXJ0XSA9IHVzZUNvbnRleHQoUHJvZHVjdHNJbkNhcnRDb250ZXh0KTtcclxuXHJcbiAgbGV0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgSGFuZGxlRGVjcmVtZW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IGF1eFZhbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlID4gMSkgYXV4VmFsLS07XHJcbiAgICBzZXRWYWx1ZShhdXhWYWwpO1xyXG4gIH07XHJcbiAgY29uc3QgSGFuZGxlSW5jcmVtZW50ID0gKGUpID0+IHtcclxuICAgIGxldCBhdXhWYWwgPSB2YWx1ZTtcclxuICAgIGF1eFZhbCsrO1xyXG4gICAgc2V0VmFsdWUoYXV4VmFsKTtcclxuICB9O1xyXG4gIGNvbnN0IEhhbmRsZUFkZFByb2R1Y3RUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG5cclxuICAgIGxldCBhdXhQcm9kdWN0cyA9IFtdO1xyXG4gICAgYXV4UHJvZHVjdHMgPSBbLi4ucHJvZHVjdHNJbkNhcnRdO1xyXG4gICAgY29uc29sZS5sb2coYXV4UHJvZHVjdHMpO1xyXG4gICAgaWYgKHZhbHVlID09PSAxKSB7XHJcbiAgICAgIGF1eFByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KGF1eFByb2R1Y3RzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF1eFByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoYXV4UHJvZHVjdHMpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFZhbHVlKDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3VuZGVkIGJnLXdoaXRlIG14LTIgc2hhZG93LWxnIHctZnVsbCBsZzp3LTY0IG14LTEgbGc6bXgtMiBtYi0xMFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy00OCBoLTQ4IGNvdmVyLWZpbGwgbXgtYXV0byBtdC00IFwiXHJcbiAgICAgICAgc3JjPXtgaW1nLyR7cHJvZHVjdC5waWN0dXJlVXJsfWB9XHJcbiAgICAgICAgYWx0PVwiUGl6emFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMiB0ZXh0LWNlbnRlclwiPntwcm9kdWN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBjZW50ZXIgdy0xMCBteC1hdXRvIFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9qYS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYWppLXBpY2FudGUuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBoLTggdGV4dC14cyBtdC0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICB7cHJvZHVjdC5pbmdyZWRpZW50c31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtY2VudGVyIG14LWF1dG8gdy0xMCBtdC0yIHByLTIwXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtMSB0ZXh0LWdyYXktNTAwXCI+JDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBmb250LWJvbGQgdGV4dC14bCBtbC0yIFwiPntwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC0xIG1sLTIgdGV4dC1ncmF5LTUwMFwiPkNVQzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS0yIFwiPlxyXG4gICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICBIYW5kbGVEZWNyZW1lbnQ9e0hhbmRsZURlY3JlbWVudH1cclxuICAgICAgICAgIEhhbmRsZUluY3JlbWVudD17SGFuZGxlSW5jcmVtZW50fVxyXG4gICAgICAgICAgSGFuZGxlQWRkUHJvZHVjdFRvQ2FydD17SGFuZGxlQWRkUHJvZHVjdFRvQ2FydH1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==