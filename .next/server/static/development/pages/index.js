module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/navBar/avatar/avatar.js":
/*!********************************************!*\
  !*** ./components/navBar/avatar/avatar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shoppingCartButton_shoppingCartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shoppingCartButton/shoppingCartButton */ "./components/navBar/shoppingCartButton/shoppingCartButton.js");
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\components\\navBar\\avatar\\avatar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Avatar = ({
  HandleOpen,
  user
}) => {
  //user for show
  user = true;
  return user ? __jsx("div", {
    className: "flex flex-row items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-white font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, " Yochiro Lee Cruz")), __jsx("div", {
    className: "bg-white mx-4 rounded-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: " rounded-full  w-8 h-8 ",
    src: "img/avatar.jpg",
    alt: "Avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx(_shoppingCartButton_shoppingCartButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    HandleOpen: HandleOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  })) : __jsx("div", {
    className: "flex flex-row items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./components/navBar/navBar.js":
/*!*************************************!*\
  !*** ./components/navBar/navBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sideBar_SideBardProductsInCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sideBar/SideBardProductsInCart */ "./components/sideBar/SideBardProductsInCart.js");
/* harmony import */ var _avatar_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar/avatar */ "./components/navBar/avatar/avatar.js");
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\components\\navBar\\navBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function NavBar() {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const HandleOpen = () => {
    setOpen(!open);
  };

  return __jsx("nav", {
    className: "flex flex-row w-full lg:mx-20  justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "lg:text-xl  mt-1 lg:mt-0 text-base text-white font-bold ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Delivery 2.0")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_avatar_avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    HandleOpen: HandleOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_sideBar_SideBardProductsInCart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/navBar/shoppingCartButton/shoppingCartButton.js":
/*!********************************************************************!*\
  !*** ./components/navBar/shoppingCartButton/shoppingCartButton.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_productInCartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/productInCartContext */ "./context/productInCartContext.js");
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\components\\navBar\\shoppingCartButton\\shoppingCartButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ShoppingCartButton = ({
  HandleOpen
}) => {
  const {
    0: productsInCart,
    1: setProductsInCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_productInCartContext__WEBPACK_IMPORTED_MODULE_1__["ProductsInCartContext"]);
  return __jsx("div", {
    className: "flex flex-col border-l ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "fixed w-5 h-5 ml-6 -mt-2  text-center text-xs text-white rounded-full bg-red-600 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 8
    }
  }, productsInCart.length), __jsx("button", {
    onClick: HandleOpen,
    className: "border-none text-2xl flex items-center px-3  border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-shopping-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartButton);

/***/ }),

/***/ "./components/products/counter/counter.js":
/*!************************************************!*\
  !*** ./components/products/counter/counter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\components\\products\\counter\\counter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Counter({
  HandleAddProductToCart,
  HandleDecrement,
  HandleIncrement,
  product,
  value
}) {
  return __jsx("div", {
    className: "flex flex-row border-t  border-gray-400 pt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-24 mx-auto flex flex-row border rounded-full border-gray-400  justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("p", {
    onClick: HandleDecrement,
    className: "px-2 text-gray-700 border-r font-bold hover: cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "-"), __jsx("span", {
    className: "font-bold text-gray-700 pt-1  w-full text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, value), __jsx("p", {
    onClick: HandleIncrement,
    className: "px-2 text-gray-700 border-l font-bold hover: cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "+")), __jsx("div", {
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "border-none px-4 py-1 rounded bg-gray-800 hover:border-transparent",
    onClick: e => HandleAddProductToCart(product),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-cart-plus text-gray-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/products/productCard.js":
/*!********************************************!*\
  !*** ./components/products/productCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counter_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter/counter */ "./components/products/counter/counter.js");
/* harmony import */ var _context_productInCartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/productInCartContext */ "./context/productInCartContext.js");
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\components\\products\\productCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProductCard({
  product
}) {
  const {
    0: productsInCart,
    1: setProductsInCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_productInCartContext__WEBPACK_IMPORTED_MODULE_2__["ProductsInCartContext"]);
  let {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);

  const HandleDecrement = () => {
    let auxVal = value;
    if (value > 1) auxVal--;
    setValue(auxVal);
  };

  const HandleIncrement = e => {
    let auxVal = value;
    auxVal++;
    setValue(auxVal);
  };

  const HandleAddProductToCart = product => {
    let auxProducts = [];
    auxProducts = [...productsInCart];

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
    src: `img/${product.pictureUrl}`,
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
  }, __jsx(_counter_counter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    HandleDecrement: HandleDecrement,
    HandleIncrement: HandleIncrement,
    HandleAddProductToCart: HandleAddProductToCart,
    value: value,
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/sideBar/SideBardProductsInCart.js":
/*!******************************************************!*\
  !*** ./components/sideBar/SideBardProductsInCart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_productInCartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/productInCartContext */ "./context/productInCartContext.js");
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\components\\sideBar\\SideBardProductsInCart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SideBarProductsInCart = ({
  open
}) => {
  const {
    0: productsInCart,
    1: setProductsInCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_productInCartContext__WEBPACK_IMPORTED_MODULE_1__["ProductsInCartContext"]);
  return __jsx("div", {
    className: open ? " transition delay-150 duration-300 ease-in-out transfom:right fixed right-0 lg:w-2/6  mr-1 w-3/4 bg-gray-100 h-full mt-2 " : "hidden  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, productsInCart.map(product => __jsx("div", {
    className: "flex flex-row ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: " w-4/6 ml-1 py-2 text-sm text-gray-700  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, product.name), __jsx("p", {
    className: "w-1/6 block ml-1 py-2 text-sm text-gray-700",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, product.price), __jsx("button", {
    className: " pl-1 w-1/6 py-2 text-sm text-gray-700  hover:text-red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "X"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBarProductsInCart);

/***/ }),

/***/ "./context/productInCartContext.js":
/*!*****************************************!*\
  !*** ./context/productInCartContext.js ***!
  \*****************************************/
/*! exports provided: ProductsInCartContext, ProductsInCartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsInCartContext", function() { return ProductsInCartContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsInCartProvider", function() { return ProductsInCartProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\context\\productInCartContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ProductsInCartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const ProductsInCartProvider = props => {
  const {
    0: productsInCart,
    1: setProductsInCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  return __jsx(ProductsInCartContext.Provider, {
    value: [productsInCart, setProductsInCart],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, props.children);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_partials_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/partials/header */ "./templates/partials/header.js");
/* harmony import */ var _templates_partials_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/partials/footer */ "./templates/partials/footer.js");
/* harmony import */ var _components_products_productCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/products/productCard */ "./components/products/productCard.js");
/* harmony import */ var _context_productInCartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/productInCartContext */ "./context/productInCartContext.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Home(props) {
  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const config = {
    apiKey: "AIzaSyBBjKdrfUqYxzv8AuFezBLttmiUj6evhz0",
    authDomain: "testing-2b05e.firebaseapp.com",
    databaseURL: "https://testing-2b05e.firebaseio.com",
    projectId: "testing-2b05e",
    storageBucket: "testing-2b05e.appspot.com",
    messagingSenderId: "671346717916",
    appId: "1:671346717916:web:273e09a3717613e7c3b019"
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.apps.length) {
      firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.initializeApp(config);
    }

    setLoading(true);
    const unsubcribe = firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.firestore().collection("products").onSnapshot(snapshot => {
      const newProducts = snapshot.docs.map(doc => _objectSpread({
        id: doc.id
      }, doc.data()));
      setProducts(newProducts);
    });
    setLoading(false);
    return () => unsubcribe();
  }, []);
  return __jsx("div", {
    className: "jsx-3379920139",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_context_productInCartContext__WEBPACK_IMPORTED_MODULE_5__["ProductsInCartProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_templates_partials_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, products.map(product => __jsx(_components_products_productCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: product,
    key: product.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 24
    }
  })))))), __jsx(_templates_partials_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9zaG9cXERvY3VtZW50c1xcTmV4dC1SZXN0YXVyYW50XFxkZWxpdmVyeS1yZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkR5QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xceW9zaG9cXERvY3VtZW50c1xcTmV4dC1SZXN0YXVyYW50XFxkZWxpdmVyeS1yZXN0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFydGlhbHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFydGlhbHMvZm9vdGVyXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdENhcmRcIjtcbmltcG9ydCB7IFByb2R1Y3RzSW5DYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9wcm9kdWN0SW5DYXJ0Q29udGV4dFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QkJqS2RyZlVxWXh6djhBdUZlekJMdHRtaVVqNmV2aHowXCIsXG4gICAgYXV0aERvbWFpbjogXCJ0ZXN0aW5nLTJiMDVlLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdGVzdGluZy0yYjA1ZS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJ0ZXN0aW5nLTJiMDVlXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0aW5nLTJiMDVlLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjcxMzQ2NzE3OTE2XCIsXG4gICAgYXBwSWQ6IFwiMTo2NzEzNDY3MTc5MTY6d2ViOjI3M2UwOWEzNzE3NjEzZTdjM2IwMTlcIixcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgICB9XG4gXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB1bnN1YmNyaWJlID0gZmlyZWJhc2VcbiAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKVxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RzID0gc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcbiAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgIC4uLmRvYy5kYXRhKCksXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0UHJvZHVjdHMobmV3UHJvZHVjdHMpO1xuICAgICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3ViY3JpYmUoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQcm9kdWN0c0luQ2FydFByb3ZpZGVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIiAgYmctcmVkLTcwMCAgYmFja2dyb3VuZCAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4IHctZnVsbCBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjAgZmxleCAgZmxleC1yb3cgbXgtYXV0byB3LTUvNiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCk9PihcbiAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IGtleT17cHJvZHVjdC5pZH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9Qcm9kdWN0c0luQ2FydFByb3ZpZGVyPlxuXG4gICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\yosho\\\\Documents\\\\Next-Restaurant\\\\delivery-rest\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ "./templates/partials/footer.js":
/*!**************************************!*\
  !*** ./templates/partials/footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\templates\\partials\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Footer() {
  return __jsx("div", {
    className: "jsx-3460793431",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, " ", __jsx("footer", {
    className: "jsx-3460793431",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3460793431",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "Powered by Cel", " ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    className: "jsx-3460793431" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3460793431",
    __self: this
  }, "footer.jsx-3460793431{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3460793431 img.jsx-3460793431{margin-left:0.5rem;}footer.jsx-3460793431 a.jsx-3460793431{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (max-width.jsx-3460793431:600px) .grid{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9zaG9cXERvY3VtZW50c1xcTmV4dC1SZXN0YXVyYW50XFxkZWxpdmVyeS1yZXN0XFx0ZW1wbGF0ZXNcXHBhcnRpYWxzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBSXNCLEFBU1EsQUFJTixBQVVBLFdBdEJBLEFBdUJXLFFBZDFCLEtBUitCLDZCQUNoQixxQkFXVSxlQVd2QixzQ0FyQnVCLDhDQVdKLHFEQVZBLHdDQVdyQixxREFWQSIsImZpbGUiOiJDOlxcVXNlcnNcXHlvc2hvXFxEb2N1bWVudHNcXE5leHQtUmVzdGF1cmFudFxcZGVsaXZlcnktcmVzdFxcdGVtcGxhdGVzXFxwYXJ0aWFsc1xcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7XCIgXCJ9XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBvd2VyZWQgYnkgQ2Vse1wiIFwifVxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\yosho\\\\Documents\\\\Next-Restaurant\\\\delivery-rest\\\\templates\\\\partials\\\\footer.js */"));
}

/***/ }),

/***/ "./templates/partials/header.js":
/*!**************************************!*\
  !*** ./templates/partials/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navBar_navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navBar/navBar */ "./components/navBar/navBar.js");
var _jsxFileName = "C:\\Users\\yosho\\Documents\\Next-Restaurant\\delivery-rest\\templates\\partials\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Header() {
  return __jsx("nav", {
    className: "flex  fixed w-full justify-between flex-wrap bg-gray-700 p-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx(_components_navBar_navBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yosho\Documents\Next-Restaurant\delivery-rest\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZCYXIvYXZhdGFyL2F2YXRhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdkJhci9uYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZCYXIvc2hvcHBpbmdDYXJ0QnV0dG9uL3Nob3BwaW5nQ2FydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzL2NvdW50ZXIvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZUJhci9TaWRlQmFyZFByb2R1Y3RzSW5DYXJ0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcHJvZHVjdEluQ2FydENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3BhcnRpYWxzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcGFydGlhbHMvaGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkF2YXRhciIsIkhhbmRsZU9wZW4iLCJ1c2VyIiwiTmF2QmFyIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIlNob3BwaW5nQ2FydEJ1dHRvbiIsInByb2R1Y3RzSW5DYXJ0Iiwic2V0UHJvZHVjdHNJbkNhcnQiLCJ1c2VDb250ZXh0IiwiUHJvZHVjdHNJbkNhcnRDb250ZXh0IiwibGVuZ3RoIiwiQ291bnRlciIsIkhhbmRsZUFkZFByb2R1Y3RUb0NhcnQiLCJIYW5kbGVEZWNyZW1lbnQiLCJIYW5kbGVJbmNyZW1lbnQiLCJwcm9kdWN0IiwidmFsdWUiLCJlIiwiUHJvZHVjdENhcmQiLCJzZXRWYWx1ZSIsImF1eFZhbCIsImF1eFByb2R1Y3RzIiwicHVzaCIsImkiLCJwaWN0dXJlVXJsIiwibmFtZSIsImluZ3JlZGllbnRzIiwicHJpY2UiLCJTaWRlQmFyUHJvZHVjdHNJbkNhcnQiLCJtYXAiLCJjcmVhdGVDb250ZXh0IiwiUHJvZHVjdHNJbkNhcnRQcm92aWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJIb21lIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwidW5zdWJjcmliZSIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJuZXdQcm9kdWN0cyIsImRvY3MiLCJkb2MiLCJpZCIsImRhdGEiLCJGb290ZXIiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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ImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgU2hvcHBpbmdDYXJ0QnV0dG9uIGZyb20gXCIuLi9zaG9wcGluZ0NhcnRCdXR0b24vc2hvcHBpbmdDYXJ0QnV0dG9uXCI7XHJcblxyXG5jb25zdCBBdmF0YXIgPSAoeyBIYW5kbGVPcGVuLCB1c2VyIH0pID0+IHtcclxuIC8vdXNlciBmb3Igc2hvd1xyXG4gIHVzZXI9dHJ1ZTtcclxuXHJcbiAgcmV0dXJuIHVzZXIgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgPHA+IFlvY2hpcm8gTGVlIENydXo8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG14LTQgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCAgdy04IGgtOCBcIlxyXG4gICAgICAgICAgc3JjPVwiaW1nL2F2YXRhci5qcGdcIlxyXG4gICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNob3BwaW5nQ2FydEJ1dHRvbiBIYW5kbGVPcGVuPXtIYW5kbGVPcGVufSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgXCI+PC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaWRlQmFyUHJvZHVjdHNJbkNhcnQgZnJvbSBcIi4uL3NpZGVCYXIvU2lkZUJhcmRQcm9kdWN0c0luQ2FydFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuL2F2YXRhci9hdmF0YXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgSGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1mdWxsIGxnOm14LTIwICBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp0ZXh0LXhsICBtdC0xIGxnOm10LTAgdGV4dC1iYXNlIHRleHQtd2hpdGUgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgIDxoMz5EZWxpdmVyeSAyLjA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QXZhdGFyIEhhbmRsZU9wZW49e0hhbmRsZU9wZW59IC8+XHJcbiAgICAgICAgPFNpZGVCYXJQcm9kdWN0c0luQ2FydCBvcGVuPXtvcGVufSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1Byb2R1Y3RzSW5DYXJ0Q29udGV4dH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9wcm9kdWN0SW5DYXJ0Q29udGV4dCc7XHJcblxyXG5jb25zdCBTaG9wcGluZ0NhcnRCdXR0b24gPSAoeyBIYW5kbGVPcGVuIH0pID0+IHtcclxuICAgIFxyXG4gIGNvbnN0IFtwcm9kdWN0c0luQ2FydCxzZXRQcm9kdWN0c0luQ2FydF09dXNlQ29udGV4dChQcm9kdWN0c0luQ2FydENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBib3JkZXItbCAnPiBcclxuICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZml4ZWQgdy01IGgtNSBtbC02IC1tdC0yICB0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgJz57cHJvZHVjdHNJbkNhcnQubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtIYW5kbGVPcGVufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLW5vbmUgdGV4dC0yeGwgZmxleCBpdGVtcy1jZW50ZXIgcHgtMyAgYm9yZGVyIHJvdW5kZWQgdGV4dC1ncmF5LTIwMCBib3JkZXItZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFNob3BwaW5nQ2FydEJ1dHRvbjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudGVyKHtcclxuICBIYW5kbGVBZGRQcm9kdWN0VG9DYXJ0LFxyXG4gIEhhbmRsZURlY3JlbWVudCxcclxuICBIYW5kbGVJbmNyZW1lbnQsXHJcbiAgcHJvZHVjdCxcclxuICB2YWx1ZSxcclxufSkge1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBib3JkZXItdCAgYm9yZGVyLWdyYXktNDAwIHB0LTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IG14LWF1dG8gZmxleCBmbGV4LXJvdyBib3JkZXIgcm91bmRlZC1mdWxsIGJvcmRlci1ncmF5LTQwMCAganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIG9uQ2xpY2s9e0hhbmRsZURlY3JlbWVudH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgdGV4dC1ncmF5LTcwMCBib3JkZXItciBmb250LWJvbGQgaG92ZXI6IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAtXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHB0LTEgIHctZnVsbCB0ZXh0LWNlbnRlclwiPnt2YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIG9uQ2xpY2s9e0hhbmRsZUluY3JlbWVudH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgdGV4dC1ncmF5LTcwMCBib3JkZXItbCBmb250LWJvbGQgaG92ZXI6IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICArXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItbm9uZSBweC00IHB5LTEgcm91bmRlZCBiZy1ncmF5LTgwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2U9PkhhbmRsZUFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCl9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FydC1wbHVzIHRleHQtZ3JheS0xMDBcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4vY291bnRlci9jb3VudGVyXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RzSW5DYXJ0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3Byb2R1Y3RJbkNhcnRDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3QgfSkge1xyXG4gIGNvbnN0IFtwcm9kdWN0c0luQ2FydCwgc2V0UHJvZHVjdHNJbkNhcnRdID0gdXNlQ29udGV4dChQcm9kdWN0c0luQ2FydENvbnRleHQpO1xyXG5cclxuICBsZXQgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgSGFuZGxlRGVjcmVtZW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IGF1eFZhbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlID4gMSkgYXV4VmFsLS07XHJcbiAgICBzZXRWYWx1ZShhdXhWYWwpO1xyXG4gIH07XHJcbiAgY29uc3QgSGFuZGxlSW5jcmVtZW50ID0gKGUpID0+IHtcclxuICAgIGxldCBhdXhWYWwgPSB2YWx1ZTtcclxuICAgIGF1eFZhbCsrO1xyXG4gICAgc2V0VmFsdWUoYXV4VmFsKTtcclxuICB9O1xyXG4gIGNvbnN0IEhhbmRsZUFkZFByb2R1Y3RUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgbGV0IGF1eFByb2R1Y3RzID0gW107XHJcbiAgICBhdXhQcm9kdWN0cyA9IFsuLi5wcm9kdWN0c0luQ2FydF07XHJcblxyXG4gICAgaWYgKHZhbHVlID09PSAxKSB7XHJcbiAgICAgIGF1eFByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KGF1eFByb2R1Y3RzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xyXG4gICAgICAgIGF1eFByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoYXV4UHJvZHVjdHMpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFZhbHVlKDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3VuZGVkIGJnLXdoaXRlIG14LTIgc2hhZG93LWxnIHctZnVsbCBsZzp3LTY0IG14LTEgbGc6bXgtMiBtYi0xMFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy00OCBoLTQ4IGNvdmVyLWZpbGwgbXgtYXV0byBtdC00IFwiXHJcbiAgICAgICAgc3JjPXtgaW1nLyR7cHJvZHVjdC5waWN0dXJlVXJsfWB9XHJcbiAgICAgICAgYWx0PVwiUGl6emFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMiB0ZXh0LWNlbnRlclwiPntwcm9kdWN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBjZW50ZXIgdy0xMCBteC1hdXRvIFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9qYS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYWppLXBpY2FudGUuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBoLTggdGV4dC14cyBtdC0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICB7cHJvZHVjdC5pbmdyZWRpZW50c31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtY2VudGVyIG14LWF1dG8gdy0xMCBtdC0yIHByLTIwXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtMSB0ZXh0LWdyYXktNTAwXCI+JDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBmb250LWJvbGQgdGV4dC14bCBtbC0yIFwiPntwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC0xIG1sLTIgdGV4dC1ncmF5LTUwMFwiPkNVQzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS0yIFwiPlxyXG4gICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICBIYW5kbGVEZWNyZW1lbnQ9e0hhbmRsZURlY3JlbWVudH1cclxuICAgICAgICAgIEhhbmRsZUluY3JlbWVudD17SGFuZGxlSW5jcmVtZW50fVxyXG4gICAgICAgICAgSGFuZGxlQWRkUHJvZHVjdFRvQ2FydD17SGFuZGxlQWRkUHJvZHVjdFRvQ2FydH1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7dXNlQ29udGV4dCx1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UHJvZHVjdHNJbkNhcnRDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9wcm9kdWN0SW5DYXJ0Q29udGV4dFwiO1xyXG5jb25zdCBTaWRlQmFyUHJvZHVjdHNJbkNhcnQgPSAoeyBvcGVuIH0pID0+IHtcclxuIFxyXG4gIGNvbnN0IFtwcm9kdWN0c0luQ2FydCxzZXRQcm9kdWN0c0luQ2FydF09dXNlQ29udGV4dChQcm9kdWN0c0luQ2FydENvbnRleHQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgb3BlblxyXG4gICAgICAgICAgPyBcIiB0cmFuc2l0aW9uIGRlbGF5LTE1MCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgdHJhbnNmb206cmlnaHQgZml4ZWQgcmlnaHQtMCBsZzp3LTIvNiAgbXItMSB3LTMvNCBiZy1ncmF5LTEwMCBoLWZ1bGwgbXQtMiBcIlxyXG4gICAgICAgICAgOiBcImhpZGRlbiAgXCJcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICB7cHJvZHVjdHNJbkNhcnQubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHctNC82IG1sLTEgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgIFwiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0xLzYgYmxvY2sgbWwtMSBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIHBsLTEgdy0xLzYgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgIGhvdmVyOnRleHQtcmVkXCI+XHJcbiAgICAgICAgICAgIFhcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyUHJvZHVjdHNJbkNhcnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzSW5DYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzSW5DYXJ0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHNJbkNhcnQsIHNldFByb2R1Y3RzSW5DYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb2R1Y3RzSW5DYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3Byb2R1Y3RzSW5DYXJ0LCBzZXRQcm9kdWN0c0luQ2FydF19PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1Byb2R1Y3RzSW5DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFydGlhbHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFydGlhbHMvZm9vdGVyXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdENhcmRcIjtcbmltcG9ydCB7IFByb2R1Y3RzSW5DYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9wcm9kdWN0SW5DYXJ0Q29udGV4dFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QkJqS2RyZlVxWXh6djhBdUZlekJMdHRtaVVqNmV2aHowXCIsXG4gICAgYXV0aERvbWFpbjogXCJ0ZXN0aW5nLTJiMDVlLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdGVzdGluZy0yYjA1ZS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJ0ZXN0aW5nLTJiMDVlXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0aW5nLTJiMDVlLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjcxMzQ2NzE3OTE2XCIsXG4gICAgYXBwSWQ6IFwiMTo2NzEzNDY3MTc5MTY6d2ViOjI3M2UwOWEzNzE3NjEzZTdjM2IwMTlcIixcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgICB9XG4gXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB1bnN1YmNyaWJlID0gZmlyZWJhc2VcbiAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKVxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RzID0gc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcbiAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgIC4uLmRvYy5kYXRhKCksXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0UHJvZHVjdHMobmV3UHJvZHVjdHMpO1xuICAgICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3ViY3JpYmUoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQcm9kdWN0c0luQ2FydFByb3ZpZGVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIiAgYmctcmVkLTcwMCAgYmFja2dyb3VuZCAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4IHctZnVsbCBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjAgZmxleCAgZmxleC1yb3cgbXgtYXV0byB3LTUvNiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCk9PihcbiAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IGtleT17cHJvZHVjdC5pZH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9Qcm9kdWN0c0luQ2FydFByb3ZpZGVyPlxuXG4gICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7XCIgXCJ9XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBvd2VyZWQgYnkgQ2Vse1wiIFwifVxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25hdkJhci9uYXZCYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4ICBmaXhlZCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcCBiZy1ncmF5LTcwMCBwLTIgXCI+XHJcbiAgICAgIDxIZWFkPjwvSGVhZD5cclxuXHJcbiAgICAgIDxOYXZCYXIgLz5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9