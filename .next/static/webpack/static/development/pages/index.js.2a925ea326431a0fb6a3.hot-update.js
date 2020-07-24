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
    if (!firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.apps.length) {
      firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.initializeApp(config);
    }

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
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_context_productInCartContext__WEBPACK_IMPORTED_MODULE_6__["ProductsInCartProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_templates_partials_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx("main", {
    className: "jsx-3379920139" + " " + "  bg-red-700  background  ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3379920139" + " " + " flex flex w-full ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3379920139" + " " + "pt-20 flex  flex-row mx-auto w-5/6 flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, products.map(produ), __jsx(_components_products_productCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    product: props.product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }))))), __jsx(_templates_partials_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9zaG9cXERvY3VtZW50c1xcTmV4dC1SZXN0YXVyYW50XFxkZWxpdmVyeS1yZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR5QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xceW9zaG9cXERvY3VtZW50c1xcTmV4dC1SZXN0YXVyYW50XFxkZWxpdmVyeS1yZXN0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFydGlhbHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFydGlhbHMvZm9vdGVyXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdENhcmRcIjtcbmltcG9ydCB7IFByb2R1Y3RzSW5DYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9wcm9kdWN0SW5DYXJ0Q29udGV4dFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QkJqS2RyZlVxWXh6djhBdUZlekJMdHRtaVVqNmV2aHowXCIsXG4gICAgYXV0aERvbWFpbjogXCJ0ZXN0aW5nLTJiMDVlLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdGVzdGluZy0yYjA1ZS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJ0ZXN0aW5nLTJiMDVlXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0aW5nLTJiMDVlLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjcxMzQ2NzE3OTE2XCIsXG4gICAgYXBwSWQ6IFwiMTo2NzEzNDY3MTc5MTY6d2ViOjI3M2UwOWEzNzE3NjEzZTdjM2IwMTlcIixcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgICB9XG4gXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB1bnN1YmNyaWJlID0gZmlyZWJhc2VcbiAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKVxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RzID0gc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcbiAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgIC4uLmRvYy5kYXRhKCksXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0UHJvZHVjdHMobmV3UHJvZHVjdHMpO1xuICAgICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3ViY3JpYmUoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQcm9kdWN0c0luQ2FydFByb3ZpZGVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIiAgYmctcmVkLTcwMCAgYmFja2dyb3VuZCAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4IHctZnVsbCBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjAgZmxleCAgZmxleC1yb3cgbXgtYXV0byB3LTUvNiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHUpKX1cbiAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb3BzLnByb2R1Y3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9Qcm9kdWN0c0luQ2FydFByb3ZpZGVyPlxuXG4gICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lIG9uIHNlcnZlci1zaWRlLlxuLy8gSXQgd29uJ3QgYmUgY2FsbGVkIG9uIGNsaWVudC1zaWRlLCBzbyB5b3UgY2FuIGV2ZW4gZG9cbi8vIGRpcmVjdCBkYXRhYmFzZSBxdWVyaWVzLiBTZWUgdGhlIFwiVGVjaG5pY2FsIGRldGFpbHNcIiBzZWN0aW9uLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwcm9kdWN0ID0ge1xuICAgIG5hbWU6IFwiUGl6emEgZGUgSmFtb25cIixcbiAgICBwaWN0dXJlVXJsOiBcInBpenphLW1peHRhLmpwZ1wiLFxuICAgIGluZ3JlZGllbnRzOiBcImdhcmxpYy1jaGVzc2UtYmFjb25cIixcbiAgICBwcmljZTogXCI1LjkwXCIsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICB9O1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\yosho\\\\Documents\\\\Next-Restaurant\\\\delivery-rest\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsInVuc3ViY3JpYmUiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwibmV3UHJvZHVjdHMiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwicHJvZHUiLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsRUFBRCxDQUROO0FBQUEsTUFDM0JDLFFBRDJCO0FBQUEsTUFDakJDLFdBRGlCOztBQUFBLG1CQUVKRixzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRTNCRyxPQUYyQjtBQUFBLE1BRWxCQyxVQUZrQjs7QUFHbEMsTUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFVBQU0sRUFBRSx5Q0FESztBQUViQyxjQUFVLEVBQUUsK0JBRkM7QUFHYkMsZUFBVyxFQUFFLHNDQUhBO0FBSWJDLGFBQVMsRUFBRSxlQUpFO0FBS2JDLGlCQUFhLEVBQUUsMkJBTEY7QUFNYkMscUJBQWlCLEVBQUUsY0FOTjtBQU9iQyxTQUFLLEVBQUU7QUFQTSxHQUFmO0FBVUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0MsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QkYseURBQVEsQ0FBQ0csYUFBVCxDQUF1QlosTUFBdkI7QUFDRDs7QUFFREQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFFBQU1jLFVBQVUsR0FBR0osbURBQVEsQ0FDeEJLLFNBRGdCLEdBRWhCQyxVQUZnQixDQUVMLFVBRkssRUFHaEJDLFVBSGdCLENBR0wsVUFBQ0MsUUFBRCxFQUFjO0FBQ3hCLFVBQU1DLFdBQVcsR0FBR0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsR0FBRDtBQUFBO0FBQ3BDQyxZQUFFLEVBQUVELEdBQUcsQ0FBQ0M7QUFENEIsV0FFakNELEdBQUcsQ0FBQ0UsSUFBSixFQUZpQztBQUFBLE9BQWxCLENBQXBCO0FBSUExQixpQkFBVyxDQUFDcUIsV0FBRCxDQUFYO0FBQ0QsS0FUZ0IsQ0FBbkI7QUFVQW5CLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDQSxXQUFPO0FBQUEsYUFBTWMsVUFBVSxFQUFoQjtBQUFBLEtBQVA7QUFDRCxHQWxCUSxFQWtCTixFQWxCTSxDQUFUO0FBb0JBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBLHdDQUFnQiw0QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakIsUUFBUSxDQUFDd0IsR0FBVCxDQUFjSSxLQUFkLENBREgsRUFFRSxNQUFDLHdFQUFEO0FBQWEsV0FBTyxFQUFFOUIsS0FBSyxDQUFDK0IsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERixDQUZGLENBREYsRUFhRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRjtBQUFBO0FBQUE7QUFBQSxvdklBREY7QUFnQ0QsQyxDQUVEO0FBQ0E7QUFDQTs7R0FyRXdCaEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMmE5MjVlYTMyNjQzMWEwZmI2YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3RlbXBsYXRlcy9wYXJ0aWFscy9oZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3RlbXBsYXRlcy9wYXJ0aWFscy9mb290ZXJcIjtcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IHsgUHJvZHVjdHNJbkNhcnRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L3Byb2R1Y3RJbkNhcnRDb250ZXh0XCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lCQmpLZHJmVXFZeHp2OEF1RmV6Qkx0dG1pVWo2ZXZoejBcIixcbiAgICBhdXRoRG9tYWluOiBcInRlc3RpbmctMmIwNWUuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly90ZXN0aW5nLTJiMDVlLmZpcmViYXNlaW8uY29tXCIsXG4gICAgcHJvamVjdElkOiBcInRlc3RpbmctMmIwNWVcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcInRlc3RpbmctMmIwNWUuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2NzEzNDY3MTc5MTZcIixcbiAgICBhcHBJZDogXCIxOjY3MTM0NjcxNzkxNjp3ZWI6MjczZTA5YTM3MTc2MTNlN2MzYjAxOVwiLFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICAgIH1cbiBcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHVuc3ViY3JpYmUgPSBmaXJlYmFzZVxuICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdHMgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xuICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXRQcm9kdWN0cyhuZXdQcm9kdWN0cyk7XG4gICAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFByb2R1Y3RzSW5DYXJ0UHJvdmlkZXI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiICBiZy1yZWQtNzAwICBiYWNrZ3JvdW5kICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXggdy1mdWxsIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMCBmbGV4ICBmbGV4LXJvdyBteC1hdXRvIHctNS82IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdSkpfVxuICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdD17cHJvcHMucHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L1Byb2R1Y3RzSW5DYXJ0UHJvdmlkZXI+XG5cbiAgICAgIDxGb290ZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWUgb24gc2VydmVyLXNpZGUuXG4vLyBJdCB3b24ndCBiZSBjYWxsZWQgb24gY2xpZW50LXNpZGUsIHNvIHlvdSBjYW4gZXZlbiBkb1xuLy8gZGlyZWN0IGRhdGFiYXNlIHF1ZXJpZXMuIFNlZSB0aGUgXCJUZWNobmljYWwgZGV0YWlsc1wiIHNlY3Rpb24uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgbmFtZTogXCJQaXp6YSBkZSBKYW1vblwiLFxuICAgIHBpY3R1cmVVcmw6IFwicGl6emEtbWl4dGEuanBnXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiZ2FybGljLWNoZXNzZS1iYWNvblwiLFxuICAgIHByaWNlOiBcIjUuOTBcIixcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9