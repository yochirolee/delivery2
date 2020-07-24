webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_partials_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/partials/header */ "./templates/partials/header.js");
/* harmony import */ var _templates_partials_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/partials/footer */ "./templates/partials/footer.js");
/* harmony import */ var _components_products_productCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/products/productCard */ "./components/products/productCard.js");
/* harmony import */ var _context_productInCartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/productInCartContext */ "./context/productInCartContext.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");


var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var __N_SSG = true;
function Home(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var config = {
    apiKey: "AIzaSyBBjKdrfUqYxzv8AuFezBLttmiUj6evhz0",
    authDomain: "testing-2b05e.firebaseapp.com",
    databaseURL: "https://testing-2b05e.firebaseio.com",
    projectId: "testing-2b05e",
    storageBucket: "testing-2b05e.appspot.com",
    messagingSenderId: "671346717916",
    appId: "1:671346717916:web:273e09a3717613e7c3b019"
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoading(true);
    var unsubcribe = firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.firestore().collection("products").onSnapshot(function (snapshot) {
      var newProducts = snapshot.docs.map(function (doc) {
        return _objectSpread({
          id: doc.id
        }, doc.data());
      });
      setProducts(newProducts);
    });
    setLoading(false);
    return function () {
      return unsubcribe();
    };
  }, []);
  return __jsx("div", {
    className: "jsx-3379920139",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_context_productInCartContext__WEBPACK_IMPORTED_MODULE_6__["ProductsInCartProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_templates_partials_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("main", {
    className: "jsx-3379920139" + " " + "  bg-red-700  background  ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3379920139" + " " + " flex flex w-full ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3379920139" + " " + "pt-20 flex  flex-row mx-auto w-5/6 flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_components_products_productCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    product: props.product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }))))), __jsx(_templates_partials_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9zaG9cXERvY3VtZW50c1xcTmV4dC1SZXN0YXVyYW50XFxkZWxpdmVyeS1yZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0R5QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xceW9zaG9cXERvY3VtZW50c1xcTmV4dC1SZXN0YXVyYW50XFxkZWxpdmVyeS1yZXN0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFydGlhbHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFydGlhbHMvZm9vdGVyXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdENhcmRcIjtcbmltcG9ydCB7IFByb2R1Y3RzSW5DYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9wcm9kdWN0SW5DYXJ0Q29udGV4dFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QkJqS2RyZlVxWXh6djhBdUZlekJMdHRtaVVqNmV2aHowXCIsXG4gICAgYXV0aERvbWFpbjogXCJ0ZXN0aW5nLTJiMDVlLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdGVzdGluZy0yYjA1ZS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJ0ZXN0aW5nLTJiMDVlXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0aW5nLTJiMDVlLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjcxMzQ2NzE3OTE2XCIsXG4gICAgYXBwSWQ6IFwiMTo2NzEzNDY3MTc5MTY6d2ViOjI3M2UwOWEzNzE3NjEzZTdjM2IwMTlcIixcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgdW5zdWJjcmliZSA9IGZpcmViYXNlXG4gICAgICAuZmlyZXN0b3JlKClcbiAgICAgIC5jb2xsZWN0aW9uKFwicHJvZHVjdHNcIilcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9kdWN0cyA9IHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XG4gICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldFByb2R1Y3RzKG5ld1Byb2R1Y3RzKTtcbiAgICAgIH0pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YmNyaWJlKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UHJvZHVjdHNJbkNhcnRQcm92aWRlcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCIgIGJnLXJlZC03MDAgIGJhY2tncm91bmQgIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleCB3LWZ1bGwgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIwIGZsZXggIGZsZXgtcm93IG14LWF1dG8gdy01LzYgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBwcm9kdWN0PXtwcm9wcy5wcm9kdWN0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvUHJvZHVjdHNJbkNhcnRQcm92aWRlcj5cblxuICAgICAgPEZvb3RlciAvPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZSBvbiBzZXJ2ZXItc2lkZS5cbi8vIEl0IHdvbid0IGJlIGNhbGxlZCBvbiBjbGllbnQtc2lkZSwgc28geW91IGNhbiBldmVuIGRvXG4vLyBkaXJlY3QgZGF0YWJhc2UgcXVlcmllcy4gU2VlIHRoZSBcIlRlY2huaWNhbCBkZXRhaWxzXCIgc2VjdGlvbi5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBuYW1lOiBcIlBpenphIGRlIEphbW9uXCIsXG4gICAgcGljdHVyZVVybDogXCJwaXp6YS1taXh0YS5qcGdcIixcbiAgICBpbmdyZWRpZW50czogXCJnYXJsaWMtY2hlc3NlLWJhY29uXCIsXG4gICAgcHJpY2U6IFwiNS45MFwiLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\yosho\\\\Documents\\\\Next-Restaurant\\\\delivery-rest\\\\pages\\\\index.js */"));
} // This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

_s(Home, "5kM5tJOLTu4uNHd5g5ws5fZ0PLE=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwidXNlRWZmZWN0IiwidW5zdWJjcmliZSIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsIm5ld1Byb2R1Y3RzIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsInByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxFQUFELENBRE47QUFBQSxNQUMzQkMsUUFEMkI7QUFBQSxNQUNqQkMsV0FEaUI7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsS0FBRCxDQUZKO0FBQUEsTUFFM0JHLE9BRjJCO0FBQUEsTUFFbEJDLFVBRmtCOztBQUdsQyxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsVUFBTSxFQUFFLHlDQURLO0FBRWJDLGNBQVUsRUFBRSwrQkFGQztBQUdiQyxlQUFXLEVBQUUsc0NBSEE7QUFJYkMsYUFBUyxFQUFFLGVBSkU7QUFLYkMsaUJBQWEsRUFBRSwyQkFMRjtBQU1iQyxxQkFBaUIsRUFBRSxjQU5OO0FBT2JDLFNBQUssRUFBRTtBQVBNLEdBQWY7QUFVQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RULGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxRQUFNVSxVQUFVLEdBQUdDLG1EQUFRLENBQ3hCQyxTQURnQixHQUVoQkMsVUFGZ0IsQ0FFTCxVQUZLLEVBR2hCQyxVQUhnQixDQUdMLFVBQUNDLFFBQUQsRUFBYztBQUN4QixVQUFNQyxXQUFXLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLEdBQUQ7QUFBQTtBQUNwQ0MsWUFBRSxFQUFFRCxHQUFHLENBQUNDO0FBRDRCLFdBRWpDRCxHQUFHLENBQUNFLElBQUosRUFGaUM7QUFBQSxPQUFsQixDQUFwQjtBQUlBdkIsaUJBQVcsQ0FBQ2tCLFdBQUQsQ0FBWDtBQUNELEtBVGdCLENBQW5CO0FBVUFoQixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0EsV0FBTztBQUFBLGFBQU1VLFVBQVUsRUFBaEI7QUFBQSxLQUFQO0FBQ0QsR0FkUSxFQWNOLEVBZE0sQ0FBVDtBQWdCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQSx3Q0FBZ0IsNEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQWEsV0FBTyxFQUFFZixLQUFLLENBQUMyQixPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBRkYsQ0FERixFQVlFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGO0FBQUE7QUFBQTtBQUFBLG9sSUFERjtBQStCRCxDLENBRUQ7QUFDQTtBQUNBOztHQWhFd0I1QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yYWM2MjVlZjE4ZDRiNzkwZDNhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vdGVtcGxhdGVzL3BhcnRpYWxzL2hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vdGVtcGxhdGVzL3BhcnRpYWxzL2Zvb3RlclwiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RDYXJkXCI7XG5pbXBvcnQgeyBQcm9kdWN0c0luQ2FydFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvcHJvZHVjdEluQ2FydENvbnRleHRcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUJCaktkcmZVcVl4enY4QXVGZXpCTHR0bWlVajZldmh6MFwiLFxuICAgIGF1dGhEb21haW46IFwidGVzdGluZy0yYjA1ZS5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3Rlc3RpbmctMmIwNWUuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwidGVzdGluZy0yYjA1ZVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdGluZy0yYjA1ZS5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY3MTM0NjcxNzkxNlwiLFxuICAgIGFwcElkOiBcIjE6NjcxMzQ2NzE3OTE2OndlYjoyNzNlMDlhMzcxNzYxM2U3YzNiMDE5XCIsXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHVuc3ViY3JpYmUgPSBmaXJlYmFzZVxuICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdHMgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xuICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXRQcm9kdWN0cyhuZXdQcm9kdWN0cyk7XG4gICAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFByb2R1Y3RzSW5DYXJ0UHJvdmlkZXI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiICBiZy1yZWQtNzAwICBiYWNrZ3JvdW5kICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXggdy1mdWxsIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMCBmbGV4ICBmbGV4LXJvdyBteC1hdXRvIHctNS82IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdD17cHJvcHMucHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L1Byb2R1Y3RzSW5DYXJ0UHJvdmlkZXI+XG5cbiAgICAgIDxGb290ZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWUgb24gc2VydmVyLXNpZGUuXG4vLyBJdCB3b24ndCBiZSBjYWxsZWQgb24gY2xpZW50LXNpZGUsIHNvIHlvdSBjYW4gZXZlbiBkb1xuLy8gZGlyZWN0IGRhdGFiYXNlIHF1ZXJpZXMuIFNlZSB0aGUgXCJUZWNobmljYWwgZGV0YWlsc1wiIHNlY3Rpb24uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgbmFtZTogXCJQaXp6YSBkZSBKYW1vblwiLFxuICAgIHBpY3R1cmVVcmw6IFwicGl6emEtbWl4dGEuanBnXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiZ2FybGljLWNoZXNzZS1iYWNvblwiLFxuICAgIHByaWNlOiBcIjUuOTBcIixcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9