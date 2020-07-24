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
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "w-48 h-48 cover-fill mx-auto mt-4 ",
    src: "img/".concat(product.pictureUrl),
    alt: "Pizza",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "px-4 py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "font-bold text-xl mb-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, product.name), __jsx("div", {
    className: "flex justify-between center w-10 mx-auto ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "img/hoja.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "img/aji-picante.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: "text-gray-600 h-8 text-xs mt-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, product.ingredients), __jsx("div", {
    className: "flex text-center mx-auto w-10 mt-2 pr-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "font-bold mt-1 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "$"), __jsx("p", {
    className: " font-bold text-xl ml-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, product.price), __jsx("p", {
    className: "font-bold mt-1 ml-2 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "CUC"))), __jsx("div", {
    className: "px-6 py-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_counter_counter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    HandleDecrement: HandleDecrement,
    HandleIncrement: HandleIncrement,
    HandleAddProductToCart: HandleAddProductToCart,
    value: value,
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RDYXJkLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsInVzZUNvbnRleHQiLCJQcm9kdWN0c0luQ2FydENvbnRleHQiLCJwcm9kdWN0c0luQ2FydCIsInNldFByb2R1Y3RzSW5DYXJ0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiSGFuZGxlRGVjcmVtZW50IiwiYXV4VmFsIiwiSGFuZGxlSW5jcmVtZW50IiwiZSIsIkhhbmRsZUFkZFByb2R1Y3RUb0NhcnQiLCJhdXhQcm9kdWN0cyIsInB1c2giLCJpIiwicGljdHVyZVVybCIsIm5hbWUiLCJpbmdyZWRpZW50cyIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsb0JBQ0hDLHdEQUFVLENBQUNDLG1GQUFELENBRFA7QUFBQSxNQUN4Q0MsY0FEd0M7QUFBQSxNQUN4QkMsaUJBRHdCOztBQUFBLGtCQUd2QkMsc0RBQVEsQ0FBQyxDQUFELENBSGU7QUFBQSxNQUcxQ0MsS0FIMEM7QUFBQSxNQUduQ0MsUUFIbUM7O0FBSy9DLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJQyxNQUFNLEdBQUdILEtBQWI7QUFDQSxRQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlRyxNQUFNO0FBQ3JCRixZQUFRLENBQUNFLE1BQUQsQ0FBUjtBQUNELEdBSkQ7O0FBS0EsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQU87QUFDN0IsUUFBSUYsTUFBTSxHQUFHSCxLQUFiO0FBQ0FHLFVBQU07QUFDTkYsWUFBUSxDQUFDRSxNQUFELENBQVI7QUFDRCxHQUpEOztBQUtBLE1BQU1HLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ1osT0FBRCxFQUFhO0FBRTFDLFFBQUlhLFdBQVcsR0FBRyxFQUFsQjtBQUNBQSxlQUFXLEdBQUcsNkZBQUlWLGNBQVAsQ0FBWDs7QUFFQSxRQUFJRyxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmTyxpQkFBVyxDQUFDQyxJQUFaLENBQWlCZCxPQUFqQjtBQUNBSSx1QkFBaUIsQ0FBQ1MsV0FBRCxDQUFqQjtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsS0FBcEIsRUFBMkJTLENBQUMsRUFBNUIsRUFBZ0M7QUFFOUJGLG1CQUFXLENBQUNDLElBQVosQ0FBaUJkLE9BQWpCO0FBQ0FJLHlCQUFpQixDQUFDUyxXQUFELENBQWpCO0FBQ0Q7O0FBQ0ROLGNBQVEsQ0FBQyxDQUFELENBQVI7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxTQUNFO0FBQUssYUFBUyxFQUFDLG9FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxvQ0FEWjtBQUVFLE9BQUcsZ0JBQVNQLE9BQU8sQ0FBQ2dCLFVBQWpCLENBRkw7QUFHRSxPQUFHLEVBQUMsT0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFEaEIsT0FBTyxDQUFDaUIsSUFBN0QsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxjQUFUO0FBQXdCLE9BQUcsRUFBQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixPQUFHLEVBQUMsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsRUFPRTtBQUFHLGFBQVMsRUFBQyw0Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dqQixPQUFPLENBQUNrQixXQURYLENBUEYsRUFVRTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsMEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q2xCLE9BQU8sQ0FBQ21CLEtBQWpELENBRkYsRUFHRTtBQUFHLGFBQVMsRUFBQyxtQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEYsQ0FWRixDQU5GLEVBc0JFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxtQkFBZSxFQUFFWCxlQURuQjtBQUVFLG1CQUFlLEVBQUVFLGVBRm5CO0FBR0UsMEJBQXNCLEVBQUVFLHNCQUgxQjtBQUlFLFNBQUssRUFBRU4sS0FKVDtBQUtFLFdBQU8sRUFBRU4sT0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F0QkYsQ0FERjtBQWtDRDs7R0FuRXVCRCxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iZDQzMmQ4YmI5YzBmYTA1NDc1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuL2NvdW50ZXIvY291bnRlclwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0luQ2FydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9wcm9kdWN0SW5DYXJ0Q29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBwcm9kdWN0IH0pIHtcclxuICBjb25zdCBbcHJvZHVjdHNJbkNhcnQsIHNldFByb2R1Y3RzSW5DYXJ0XSA9IHVzZUNvbnRleHQoUHJvZHVjdHNJbkNhcnRDb250ZXh0KTtcclxuXHJcbiAgbGV0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IEhhbmRsZURlY3JlbWVudCA9ICgpID0+IHtcclxuICAgIGxldCBhdXhWYWwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSA+IDEpIGF1eFZhbC0tO1xyXG4gICAgc2V0VmFsdWUoYXV4VmFsKTtcclxuICB9O1xyXG4gIGNvbnN0IEhhbmRsZUluY3JlbWVudCA9IChlKSA9PiB7XHJcbiAgICBsZXQgYXV4VmFsID0gdmFsdWU7XHJcbiAgICBhdXhWYWwrKztcclxuICAgIHNldFZhbHVlKGF1eFZhbCk7XHJcbiAgfTtcclxuICBjb25zdCBIYW5kbGVBZGRQcm9kdWN0VG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgXHJcbiAgICBsZXQgYXV4UHJvZHVjdHMgPSBbXTtcclxuICAgIGF1eFByb2R1Y3RzID0gWy4uLnByb2R1Y3RzSW5DYXJ0XTtcclxuICAgXHJcbiAgICBpZiAodmFsdWUgPT09IDEpIHtcclxuICAgICAgYXV4UHJvZHVjdHMucHVzaChwcm9kdWN0KTtcclxuICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoYXV4UHJvZHVjdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXV4UHJvZHVjdHMucHVzaChwcm9kdWN0KTtcclxuICAgICAgICBzZXRQcm9kdWN0c0luQ2FydChhdXhQcm9kdWN0cyk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VmFsdWUoMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdW5kZWQgYmctd2hpdGUgbXgtMiBzaGFkb3ctbGcgdy1mdWxsIGxnOnctNjQgbXgtMSBsZzpteC0yIG1iLTEwXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTQ4IGgtNDggY292ZXItZmlsbCBteC1hdXRvIG10LTQgXCJcclxuICAgICAgICBzcmM9e2BpbWcvJHtwcm9kdWN0LnBpY3R1cmVVcmx9YH1cclxuICAgICAgICBhbHQ9XCJQaXp6YVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yIHRleHQtY2VudGVyXCI+e3Byb2R1Y3QubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGNlbnRlciB3LTEwIG14LWF1dG8gXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob2phLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hamktcGljYW50ZS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGgtOCB0ZXh0LXhzIG10LTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIHtwcm9kdWN0LmluZ3JlZGllbnRzfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1jZW50ZXIgbXgtYXV0byB3LTEwIG10LTIgcHItMjBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC0xIHRleHQtZ3JheS01MDBcIj4kPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCB0ZXh0LXhsIG1sLTIgXCI+e3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTEgbWwtMiB0ZXh0LWdyYXktNTAwXCI+Q1VDPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTIgXCI+XHJcbiAgICAgICAgPENvdW50ZXJcclxuICAgICAgICAgIEhhbmRsZURlY3JlbWVudD17SGFuZGxlRGVjcmVtZW50fVxyXG4gICAgICAgICAgSGFuZGxlSW5jcmVtZW50PXtIYW5kbGVJbmNyZW1lbnR9XHJcbiAgICAgICAgICBIYW5kbGVBZGRQcm9kdWN0VG9DYXJ0PXtIYW5kbGVBZGRQcm9kdWN0VG9DYXJ0fVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==