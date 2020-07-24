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
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "w-48 h-48 cover-fill mx-auto mt-4 ",
    src: "img/".concat(product.pictureUrl),
    alt: "Pizza",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "px-4 py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "font-bold text-xl mb-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, product.name), __jsx("div", {
    className: "flex justify-between center w-10 mx-auto ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "img/hoja.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "img/aji-picante.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: "text-gray-600 h-8 text-xs mt-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, product.ingredients), __jsx("div", {
    className: "flex text-center mx-auto w-10 mt-2 pr-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "font-bold mt-1 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "$"), __jsx("p", {
    className: " font-bold text-xl ml-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, product.price), __jsx("p", {
    className: "font-bold mt-1 ml-2 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "CUC"))), __jsx("div", {
    className: "px-6 py-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RDYXJkLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsInVzZUNvbnRleHQiLCJQcm9kdWN0c0luQ2FydENvbnRleHQiLCJwcm9kdWN0c0luQ2FydCIsInNldFByb2R1Y3RzSW5DYXJ0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiSGFuZGxlRGVjcmVtZW50IiwiYXV4VmFsIiwiSGFuZGxlSW5jcmVtZW50IiwiZSIsIkhhbmRsZUFkZFByb2R1Y3RUb0NhcnQiLCJhdXhQcm9kdWN0cyIsInB1c2giLCJpIiwicGljdHVyZVVybCIsIm5hbWUiLCJpbmdyZWRpZW50cyIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsb0JBQ0hDLHdEQUFVLENBQUNDLG1GQUFELENBRFA7QUFBQSxNQUN4Q0MsY0FEd0M7QUFBQSxNQUN4QkMsaUJBRHdCOztBQUFBLGtCQUd2QkMsc0RBQVEsQ0FBQyxDQUFELENBSGU7QUFBQSxNQUcxQ0MsS0FIMEM7QUFBQSxNQUduQ0MsUUFIbUM7O0FBSS9DLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJQyxNQUFNLEdBQUdILEtBQWI7QUFDQSxRQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlRyxNQUFNO0FBQ3JCRixZQUFRLENBQUNFLE1BQUQsQ0FBUjtBQUNELEdBSkQ7O0FBS0EsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQU87QUFDN0IsUUFBSUYsTUFBTSxHQUFHSCxLQUFiO0FBQ0FHLFVBQU07QUFDTkYsWUFBUSxDQUFDRSxNQUFELENBQVI7QUFDRCxHQUpEOztBQUtBLE1BQU1HLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ1osT0FBRCxFQUFhO0FBRTFDLFFBQUlhLFdBQVcsR0FBRyxFQUFsQjtBQUNBQSxlQUFXLEdBQUcsNkZBQUlWLGNBQVAsQ0FBWDs7QUFDQSxRQUFJRyxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmTyxpQkFBVyxDQUFDQyxJQUFaLENBQWlCZCxPQUFqQjtBQUNBSSx1QkFBaUIsQ0FBQ1MsV0FBRCxDQUFqQjtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsS0FBcEIsRUFBMkJTLENBQUMsRUFBNUIsRUFBZ0M7QUFFOUJGLG1CQUFXLENBQUNDLElBQVosQ0FBaUJkLE9BQWpCO0FBQ0FJLHlCQUFpQixDQUFDUyxXQUFELENBQWpCO0FBQ0Q7O0FBQ0ROLGNBQVEsQ0FBQyxDQUFELENBQVI7QUFDRDtBQUNGLEdBZkQ7O0FBaUJBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLG9DQURaO0FBRUUsT0FBRyxnQkFBU1AsT0FBTyxDQUFDZ0IsVUFBakIsQ0FGTDtBQUdFLE9BQUcsRUFBQyxPQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcURoQixPQUFPLENBQUNpQixJQUE3RCxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsT0FBRyxFQUFDLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssT0FBRyxFQUFDLHFCQUFUO0FBQStCLE9BQUcsRUFBQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGRixFQU9FO0FBQUcsYUFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLE9BQU8sQ0FBQ2tCLFdBRFgsQ0FQRixFQVVFO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsRUFFRTtBQUFHLGFBQVMsRUFBQywwQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDbEIsT0FBTyxDQUFDbUIsS0FBakQsQ0FGRixFQUdFO0FBQUcsYUFBUyxFQUFDLG1DQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRixDQVZGLENBTkYsRUFzQkU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLG1CQUFlLEVBQUVYLGVBRG5CO0FBRUUsbUJBQWUsRUFBRUUsZUFGbkI7QUFHRSwwQkFBc0IsRUFBRUUsc0JBSDFCO0FBSUUsU0FBSyxFQUFFTixLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXRCRixDQURGO0FBaUNEOztHQWhFdUJQLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjExNmE1ZWYwODBmZDk2MWI2MDA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4vY291bnRlci9jb3VudGVyXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RzSW5DYXJ0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3Byb2R1Y3RJbkNhcnRDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3QgfSkge1xyXG4gIGNvbnN0IFtwcm9kdWN0c0luQ2FydCwgc2V0UHJvZHVjdHNJbkNhcnRdID0gdXNlQ29udGV4dChQcm9kdWN0c0luQ2FydENvbnRleHQpO1xyXG5cclxuICBsZXQgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBIYW5kbGVEZWNyZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXV4VmFsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPiAxKSBhdXhWYWwtLTtcclxuICAgIHNldFZhbHVlKGF1eFZhbCk7XHJcbiAgfTtcclxuICBjb25zdCBIYW5kbGVJbmNyZW1lbnQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGF1eFZhbCA9IHZhbHVlO1xyXG4gICAgYXV4VmFsKys7XHJcbiAgICBzZXRWYWx1ZShhdXhWYWwpO1xyXG4gIH07XHJcbiAgY29uc3QgSGFuZGxlQWRkUHJvZHVjdFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XHJcblxyXG4gICAgbGV0IGF1eFByb2R1Y3RzID0gW107XHJcbiAgICBhdXhQcm9kdWN0cyA9IFsuLi5wcm9kdWN0c0luQ2FydF07XHJcbiAgICBpZiAodmFsdWUgPT09IDEpIHtcclxuICAgICAgYXV4UHJvZHVjdHMucHVzaChwcm9kdWN0KTtcclxuICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoYXV4UHJvZHVjdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXV4UHJvZHVjdHMucHVzaChwcm9kdWN0KTtcclxuICAgICAgICBzZXRQcm9kdWN0c0luQ2FydChhdXhQcm9kdWN0cyk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VmFsdWUoMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdW5kZWQgYmctd2hpdGUgbXgtMiBzaGFkb3ctbGcgdy1mdWxsIGxnOnctNjQgbXgtMSBsZzpteC0yIG1iLTEwXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTQ4IGgtNDggY292ZXItZmlsbCBteC1hdXRvIG10LTQgXCJcclxuICAgICAgICBzcmM9e2BpbWcvJHtwcm9kdWN0LnBpY3R1cmVVcmx9YH1cclxuICAgICAgICBhbHQ9XCJQaXp6YVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yIHRleHQtY2VudGVyXCI+e3Byb2R1Y3QubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGNlbnRlciB3LTEwIG14LWF1dG8gXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob2phLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hamktcGljYW50ZS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGgtOCB0ZXh0LXhzIG10LTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIHtwcm9kdWN0LmluZ3JlZGllbnRzfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1jZW50ZXIgbXgtYXV0byB3LTEwIG10LTIgcHItMjBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC0xIHRleHQtZ3JheS01MDBcIj4kPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCB0ZXh0LXhsIG1sLTIgXCI+e3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTEgbWwtMiB0ZXh0LWdyYXktNTAwXCI+Q1VDPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTIgXCI+XHJcbiAgICAgICAgPENvdW50ZXJcclxuICAgICAgICAgIEhhbmRsZURlY3JlbWVudD17SGFuZGxlRGVjcmVtZW50fVxyXG4gICAgICAgICAgSGFuZGxlSW5jcmVtZW50PXtIYW5kbGVJbmNyZW1lbnR9XHJcbiAgICAgICAgICBIYW5kbGVBZGRQcm9kdWN0VG9DYXJ0PXtIYW5kbGVBZGRQcm9kdWN0VG9DYXJ0fVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9