module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__);
var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/Header.js';







__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeStart = function (url) {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};
__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};
__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var token = _ref.token;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/nprogress.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"],
      { inverted: true, fixed: 'top', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Container"],
        { text: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { href: '/', prefetch: true, passHref: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item,
            { as: 'a', header: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Image"], {
              size: 'mini',
              src: '/static/moltin-light-hex.svg',
              style: { marginRight: '1.5em' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            }),
            'NextJS Store'
          )
        ),
        token ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { href: '/myaccount', passHref: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            'My account'
          )
        ) : [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { href: '/register', passHref: true, prefetch: true, key: 'register', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            'Sign up'
          )
        ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { href: '/login', passHref: true, prefetch: true, key: 'login', __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            'Sign in'
          )
        )],
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { href: '/cart', passHref: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item,
            { position: 'right', name: 'cart', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Icon"], { name: 'cart', __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            }),
            'Cart'
          )
        )
      )
    )
  );
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      token: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var token = localStorage.getItem('customerToken');

      var cartId = localStorage.getItem('mcart');

      if (!cartId) {
        var _cartId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
          return (Math.random() * 16 | 0).toString(16);
        });
        localStorage.setItem('mcart', _cartId);
      }

      this.setState({
        token: token,
        cartId: cartId
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title;
      var token = this.state.token;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', {
            rel: 'stylesheet',
            href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            title
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], { token: token, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"],
          { text: true, style: { paddingTop: '7em' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          children
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/ProductList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/ProductList.js';




var mapProductsToItems = function mapProductsToItems(products) {
  return products.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        image = _ref.image,
        description = _ref.description,
        meta = _ref.meta;

    var price = meta.display_price.with_tax.formatted || null;

    return {
      childKey: id,
      image: image,
      header: name,
      meta: price,
      fluid: true,
      href: '/product?id=' + id
    };
  });
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref2) {
  var products = _ref2.products;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, { items: mapProductsToItems(products), itemsPerRow: '3', stackable: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  });
});

/***/ }),

/***/ "./lib/moltin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* unused harmony export getCartItems */
/* unused harmony export removeFromCart */
/* unused harmony export checkoutCart */
/* unused harmony export payForOrder */
/* unused harmony export register */
/* unused harmony export login */
/* unused harmony export getOrders */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moltin_sdk__ = __webpack_require__("@moltin/sdk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moltin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__moltin_sdk__);


var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var Moltin = Object(__WEBPACK_IMPORTED_MODULE_1__moltin_sdk__["gateway"])({
  client_id: process && process.env && process.env.MOLTIN_CLIENT_ID || undefined || 'igJNFfKzGRbvePJcPKhW4m3ECYnREOxqMzh87ZY8S5'
});

var getProducts = function getProducts() {
  return Moltin.Products.With('main_image').All();
};

var getProductById = function getProductById(id) {
  return Moltin.Products.With('main_image').Get(id);
};

var addToCart = function addToCart(cartId, productId, quantity) {
  return Moltin.Cart(cartId).AddProduct(productId, quantity);
};

var getCartItems = function getCartItems(id) {
  return Moltin.Cart(id).Items();
};

var removeFromCart = function removeFromCart(productId, cartId) {
  return Moltin.Cart(cartId).RemoveItem(productId);
};

var checkoutCart = function checkoutCart(cartId, customer, billing) {
  return Moltin.Cart(cartId).Checkout(customer, billing);
};

var payForOrder = function payForOrder(orderId, token, email) {
  return Moltin.Orders.Payment(orderId, {
    gateway: 'stripe',
    method: 'purchase',
    payment: token,
    options: {
      receipt_email: email
    }
  });
};

var register = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var email = _ref.email,
        password = _ref.password,
        rest = _objectWithoutProperties(_ref, ['email', 'password']);

    var _ref3, _ref3$json$data, name, id, _ref4, token;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Moltin.Customers.Create(_extends({
              email: email,
              password: password,
              type: 'customer'
            }, rest));

          case 2:
            _ref3 = _context.sent;
            _ref3$json$data = _ref3.json.data;
            name = _ref3$json$data.name;
            id = _ref3$json$data.id;
            _context.next = 8;
            return login({ email: email, password: password });

          case 8:
            _ref4 = _context.sent;
            token = _ref4.token;
            return _context.abrupt('return', {
              id: id,
              name: name,
              email: email,
              token: token
            });

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function register(_x) {
    return _ref2.apply(this, arguments);
  };
}();


var login = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(_ref5) {
    var email = _ref5.email,
        password = _ref5.password;

    var _ref7, _ref7$json$data, id, token;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Moltin.Customers.Token(email, password);

          case 2:
            _ref7 = _context2.sent;
            _ref7$json$data = _ref7.json.data;
            id = _ref7$json$data.customer_id;
            token = _ref7$json$data.token;
            return _context2.abrupt('return', {
              id: id,
              token: token
            });

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function login(_x2) {
    return _ref6.apply(this, arguments);
  };
}();

var getOrders = function getOrders(token) {
  return Moltin.Orders.With('items').All(token);
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProductList__ = __webpack_require__("./components/ProductList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_moltin__ = __webpack_require__("./lib/moltin.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/pages/index.js',
    _this = this;



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var Home = function Home(_ref) {
  var products = _ref.products;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
    { title: 'Home', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ProductList__["a" /* default */], { products: products, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    })
  );
};

Home.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var _ref3, _ref3$json, data, included, products;

  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_4__lib_moltin__["c" /* getProducts */])();

        case 2:
          _ref3 = _context.sent;
          _ref3$json = _ref3.json;
          data = _ref3$json.data;
          included = _ref3$json.included;
          products = data.map(function (product) {
            var imageId = product.relationships.main_image ? product.relationships.main_image.data.id : false;

            return _extends({}, product, {
              image: imageId ? included.main_images.find(function (img) {
                return img.id === imageId;
              }).link.href : '/static/moltin-light-hex.svg'
            });
          });
          return _context.abrupt('return', {
            products: products
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@moltin/sdk":
/***/ (function(module, exports) {

module.exports = require("@moltin/sdk");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map