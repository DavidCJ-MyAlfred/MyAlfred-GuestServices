webpackHotUpdate(5,{

/***/ "./components/AddToCart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_moltin__ = __webpack_require__("./lib/moltin.js");

var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/AddToCart.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AddToCart = function (_React$Component) {
  _inherits(AddToCart, _React$Component);

  function AddToCart() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, AddToCart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddToCart.__proto__ || Object.getPrototypeOf(AddToCart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      quantity: 1
    }, _this._handleSubmit = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var productId, quantity, cartId, cart;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productId = _this.props.productId;
              quantity = _this.state.quantity;
              _context.next = 4;
              return localStorage.getItem('mcart');

            case 4:
              cartId = _context.sent;


              _this.setState({
                loading: true
              });

              _context.next = 8;
              return Object(__WEBPACK_IMPORTED_MODULE_3__lib_moltin__["a" /* addToCart */])(cartId, productId, quantity);

            case 8:
              cart = _context.sent;


              _this.setState({
                loading: false,
                quantity: 1
              });

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this._handleChange = function (_ref3) {
      var value = _ref3.target.value;
      return _this.setState({
        quantity: value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddToCart, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          loading = _state.loading,
          quantity = _state.quantity;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Input */], {
        type: 'number',
        placeholder: 'Quantity',
        value: quantity,
        onChange: function onChange(e) {
          return _this3._handleChange(e);
        },
        action: {
          color: 'orange',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: this._handleSubmit,
          loading: loading,
          disabled: loading
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AddToCart;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = AddToCart;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AddToCart, 'AddToCart', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/AddToCart.js');
  reactHotLoader.register(_default, 'default', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/AddToCart.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("./node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/Header.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();







__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeStart = function (url) {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};
__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};
__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

var _default = function _default(_ref) {
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
      __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Menu */],
      { inverted: true, fixed: 'top', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["b" /* Container */],
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
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Menu */].Item,
            { as: 'a', header: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Image */], {
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
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Menu */].Item,
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
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Menu */].Item,
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
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Menu */].Item,
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
            __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Menu */].Item,
            { position: 'right', name: 'cart', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Icon */], { name: 'cart', __source: {
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
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/Header.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Container */],
          { text: true, style: { paddingTop: '7em' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          children
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, 'Layout', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/Layout.js');
  reactHotLoader.register(_default, 'default', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/Layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ProductAttributes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/ProductAttributes.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(_ref) {
  var description = _ref.description,
      material = _ref.material,
      max_watt = _ref.max_watt,
      bulb_qty = _ref.bulb_qty,
      finish = _ref.finish,
      bulb = _ref.bulb;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["d" /* Header */],
      { as: "h3", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      "About this product"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      description
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Divider */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */],
      { celled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Row,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].HeaderCell,
            { colSpan: "2", __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            "Attributes"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Body,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Row,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            "Material"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            material
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Row,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            "Max watt."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            max_watt
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Row,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            "Bulb qty."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            bulb_qty
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Row,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            "Finish"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            finish
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Row,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            "Fitting"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Table */].Cell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            bulb
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/ProductAttributes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ProductSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AddToCart__ = __webpack_require__("./components/AddToCart.js");
var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/ProductSummary.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default(_ref) {
  var id = _ref.id,
      image = _ref.image,
      name = _ref.name,
      meta = _ref.meta,
      sku = _ref.sku;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Item */].Group,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Item */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Item */].Image, { size: 'medium', src: image, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Item */].Content,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Item */].Header,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Item */].Description,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            meta.display_price.with_tax.formatted
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* Label */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            'SKU: ',
            sku
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Item */].Extra,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__AddToCart__["a" /* default */], { productId: id, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          })
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/components/ProductSummary.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/moltin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* unused harmony export getCartItems */
/* unused harmony export removeFromCart */
/* unused harmony export checkoutCart */
/* unused harmony export payForOrder */
/* unused harmony export register */
/* unused harmony export login */
/* unused harmony export getOrders */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moltin_sdk__ = __webpack_require__("./node_modules/@moltin/sdk/dist/moltin.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moltin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__moltin_sdk__);


var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Moltin, 'Moltin', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(getProducts, 'getProducts', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(getProductById, 'getProductById', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(addToCart, 'addToCart', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(getCartItems, 'getCartItems', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(removeFromCart, 'removeFromCart', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(checkoutCart, 'checkoutCart', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(payForOrder, 'payForOrder', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(register, 'register', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(login, 'login', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  reactHotLoader.register(getOrders, 'getOrders', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/lib/moltin.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/collections/Message/Message.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isNil__ = __webpack_require__("./node_modules/lodash/isNil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_without__ = __webpack_require__("./node_modules/lodash/without.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__elements_Icon__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__MessageContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__MessageHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__MessageList__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MessageItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageItem.js");



















/**
 * A message displays information that explains nearby content.
 * @see Form
 */

var Message = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Message, _Component);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.handleDismiss = function (e) {
      var onDismiss = _this.props.onDismiss;


      if (onDismiss) onDismiss(e, _this.props);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          attached = _props.attached,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          compact = _props.compact,
          content = _props.content,
          error = _props.error,
          floating = _props.floating,
          header = _props.header,
          hidden = _props.hidden,
          icon = _props.icon,
          info = _props.info,
          list = _props.list,
          negative = _props.negative,
          onDismiss = _props.onDismiss,
          positive = _props.positive,
          size = _props.size,
          success = _props.success,
          visible = _props.visible,
          warning = _props.warning;


      var classes = __WEBPACK_IMPORTED_MODULE_7_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(floating, 'floating'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(hidden, 'hidden'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(icon, 'icon'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(info, 'info'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(negative, 'negative'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(positive, 'positive'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(success, 'success'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(visible, 'visible'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["C" /* useKeyOnly */])(warning, 'warning'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["D" /* useKeyOrValueAndKey */])(attached, 'attached'), 'message', className);

      var dismissIcon = onDismiss && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__elements_Icon__["a" /* default */], { name: 'close', onClick: this.handleDismiss });
      var rest = Object(__WEBPACK_IMPORTED_MODULE_10__lib__["s" /* getUnhandledProps */])(Message, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_10__lib__["r" /* getElementType */])(Message, this.props);

      if (!__WEBPACK_IMPORTED_MODULE_10__lib__["d" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          ElementType,
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, { className: classes }),
          dismissIcon,
          children
        );
      }

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, { className: classes }),
        dismissIcon,
        __WEBPACK_IMPORTED_MODULE_11__elements_Icon__["a" /* default */].create(icon),
        (!__WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default()(header) || !__WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default()(content) || !__WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default()(list)) && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_12__MessageContent__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_13__MessageHeader__["a" /* default */].create(header),
          __WEBPACK_IMPORTED_MODULE_14__MessageList__["a" /* default */].create(list),
          Object(__WEBPACK_IMPORTED_MODULE_10__lib__["j" /* createHTMLParagraph */])(content)
        )
      );
    }
  }]);

  return Message;
}(__WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

Message._meta = {
  name: 'Message',
  type: __WEBPACK_IMPORTED_MODULE_10__lib__["b" /* META */].TYPES.COLLECTION
};
Message.Content = __WEBPACK_IMPORTED_MODULE_12__MessageContent__["a" /* default */];
Message.Header = __WEBPACK_IMPORTED_MODULE_13__MessageHeader__["a" /* default */];
Message.List = __WEBPACK_IMPORTED_MODULE_14__MessageList__["a" /* default */];
Message.Item = __WEBPACK_IMPORTED_MODULE_15__MessageItem__["a" /* default */];
Message.handledProps = ['as', 'attached', 'children', 'className', 'color', 'compact', 'content', 'error', 'floating', 'header', 'hidden', 'icon', 'info', 'list', 'negative', 'onDismiss', 'positive', 'size', 'success', 'visible', 'warning'];
/* unused harmony default export */ var _unused_webpack_default_export = (Message);
Message.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_10__lib__["n" /* customPropTypes */].as,

  /** A message can be formatted to attach itself to other content. */
  attached: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['bottom', 'top'])]),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** A message can be formatted to be different colors. */
  color: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_10__lib__["c" /* SUI */].COLORS),

  /** A message can only take up the width of its content. */
  compact: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_10__lib__["n" /* customPropTypes */].contentShorthand,

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message can float above content that it is related to. */
  floating: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Shorthand for MessageHeader. */
  header: __WEBPACK_IMPORTED_MODULE_10__lib__["n" /* customPropTypes */].itemShorthand,

  /** A message can be hidden. */
  hidden: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message can contain an icon. */
  icon: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_10__lib__["n" /* customPropTypes */].itemShorthand, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool]),

  /** A message may be formatted to display information. */
  info: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list: __WEBPACK_IMPORTED_MODULE_10__lib__["n" /* customPropTypes */].collectionShorthand,

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onDismiss: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_10__lib__["c" /* SUI */].SIZES, 'medium')),

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message can be set to visible to force itself to be shown. */
  visible: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message may be formatted to display warning messages. */
  warning: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
} : {};

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/collections/Message/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Message__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/Message.js");
/* unused harmony reexport default */



/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/index.js");







/**
 * A loader alerts a user to wait for an activity to complete.
 * @see Dimmer
 */
function Loader(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      disabled = props.disabled,
      indeterminate = props.indeterminate,
      inline = props.inline,
      inverted = props.inverted,
      size = props.size;


  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["C" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["C" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["C" /* useKeyOnly */])(indeterminate, 'indeterminate'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["C" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["C" /* useKeyOnly */])(children || content, 'text'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["D" /* useKeyOrValueAndKey */])(inline, 'inline'), 'loader', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["s" /* getUnhandledProps */])(Loader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getElementType */])(Loader, props);

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, { className: classes }),
    __WEBPACK_IMPORTED_MODULE_4__lib__["d" /* childrenUtils */].isNil(children) ? content : children
  );
}

Loader.handledProps = ['active', 'as', 'children', 'className', 'content', 'disabled', 'indeterminate', 'inline', 'inverted', 'size'];
Loader._meta = {
  name: 'Loader',
  type: __WEBPACK_IMPORTED_MODULE_4__lib__["b" /* META */].TYPES.ELEMENT
};

Loader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["n" /* customPropTypes */].as,

  /** A loader can be active or visible. */
  active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["n" /* customPropTypes */].contentShorthand,

  /** A loader can be disabled or hidden. */
  disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Loaders can appear inline with content. */
  inline: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['centered'])]),

  /** Loaders can have their colors inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Loaders can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* SUI */].SIZES)
} : {};

/* unused harmony default export */ var _unused_webpack_default_export = (Loader);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Loader/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js");
/* unused harmony reexport default */



/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Segment/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Segment__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js");
/* unused harmony reexport default */



/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addons_Confirm__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Confirm/index.js");
/* unused harmony reexport Confirm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addons_MountNode__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/MountNode/index.js");
/* unused harmony reexport MountNode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addons_Pagination__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Pagination/index.js");
/* unused harmony reexport Pagination */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addons_Pagination_PaginationItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Pagination/PaginationItem.js");
/* unused harmony reexport PaginationItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addons_Portal__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Portal/index.js");
/* unused harmony reexport Portal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addons_Radio__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Radio/index.js");
/* unused harmony reexport Radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addons_Ref__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Ref/index.js");
/* unused harmony reexport Ref */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addons_Responsive__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Responsive/index.js");
/* unused harmony reexport Responsive */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addons_Select__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Select/index.js");
/* unused harmony reexport Select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addons_TextArea__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/TextArea/index.js");
/* unused harmony reexport TextArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addons_TransitionablePortal__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/TransitionablePortal/index.js");
/* unused harmony reexport TransitionablePortal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__behaviors_Visibility__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/behaviors/Visibility/index.js");
/* unused harmony reexport Visibility */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__collections_Breadcrumb__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/index.js");
/* unused harmony reexport Breadcrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__collections_Breadcrumb_BreadcrumbDivider__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/BreadcrumbDivider.js");
/* unused harmony reexport BreadcrumbDivider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__collections_Breadcrumb_BreadcrumbSection__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/BreadcrumbSection.js");
/* unused harmony reexport BreadcrumbSection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__collections_Form__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/index.js");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__collections_Form_FormButton__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormButton.js");
/* unused harmony reexport FormButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__collections_Form_FormCheckbox__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormCheckbox.js");
/* unused harmony reexport FormCheckbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__collections_Form_FormDropdown__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormDropdown.js");
/* unused harmony reexport FormDropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__collections_Form_FormField__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormField.js");
/* unused harmony reexport FormField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__collections_Form_FormGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormGroup.js");
/* unused harmony reexport FormGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__collections_Form_FormInput__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormInput.js");
/* unused harmony reexport FormInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__collections_Form_FormRadio__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormRadio.js");
/* unused harmony reexport FormRadio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__collections_Form_FormSelect__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormSelect.js");
/* unused harmony reexport FormSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__collections_Form_FormTextArea__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormTextArea.js");
/* unused harmony reexport FormTextArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__collections_Grid__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/index.js");
/* unused harmony reexport Grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__collections_Grid_GridColumn__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/GridColumn.js");
/* unused harmony reexport GridColumn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__collections_Grid_GridRow__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/GridRow.js");
/* unused harmony reexport GridRow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__collections_Menu__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Menu/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_28__collections_Menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__collections_Menu_MenuHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuHeader.js");
/* unused harmony reexport MenuHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__collections_Menu_MenuItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuItem.js");
/* unused harmony reexport MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__collections_Menu_MenuMenu__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuMenu.js");
/* unused harmony reexport MenuMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__collections_Message__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/index.js");
/* unused harmony reexport Message */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__collections_Message_MessageContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageContent.js");
/* unused harmony reexport MessageContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__collections_Message_MessageHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageHeader.js");
/* unused harmony reexport MessageHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__collections_Message_MessageItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageItem.js");
/* unused harmony reexport MessageItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__collections_Message_MessageList__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageList.js");
/* unused harmony reexport MessageList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__collections_Table__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_37__collections_Table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__collections_Table_TableBody__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableBody.js");
/* unused harmony reexport TableBody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__collections_Table_TableCell__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableCell.js");
/* unused harmony reexport TableCell */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__collections_Table_TableFooter__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableFooter.js");
/* unused harmony reexport TableFooter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__collections_Table_TableHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableHeader.js");
/* unused harmony reexport TableHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__collections_Table_TableHeaderCell__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableHeaderCell.js");
/* unused harmony reexport TableHeaderCell */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__collections_Table_TableRow__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableRow.js");
/* unused harmony reexport TableRow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__elements_Button_Button__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js");
/* unused harmony reexport Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__elements_Button_ButtonContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonContent.js");
/* unused harmony reexport ButtonContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__elements_Button_ButtonGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonGroup.js");
/* unused harmony reexport ButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__elements_Button_ButtonOr__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonOr.js");
/* unused harmony reexport ButtonOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__elements_Container__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_48__elements_Container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__elements_Divider__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Divider/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_49__elements_Divider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__elements_Flag__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Flag/index.js");
/* unused harmony reexport Flag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__elements_Header__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Header/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_51__elements_Header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__elements_Header_HeaderContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderContent.js");
/* unused harmony reexport HeaderContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__elements_Header_HeaderSubheader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderSubheader.js");
/* unused harmony reexport HeaderSubheader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__elements_Icon__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_54__elements_Icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__elements_Icon_IconGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js");
/* unused harmony reexport IconGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__elements_Image__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_56__elements_Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__elements_Image_ImageGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js");
/* unused harmony reexport ImageGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__elements_Input__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Input/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_58__elements_Input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__elements_Label__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_59__elements_Label__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__elements_Label_LabelDetail__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js");
/* unused harmony reexport LabelDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__elements_Label_LabelGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js");
/* unused harmony reexport LabelGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__elements_List__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/index.js");
/* unused harmony reexport List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__elements_List_ListContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListContent.js");
/* unused harmony reexport ListContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__elements_List_ListDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListDescription.js");
/* unused harmony reexport ListDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__elements_List_ListHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListHeader.js");
/* unused harmony reexport ListHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__elements_List_ListIcon__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListIcon.js");
/* unused harmony reexport ListIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__elements_List_ListItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListItem.js");
/* unused harmony reexport ListItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__elements_List_ListList__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListList.js");
/* unused harmony reexport ListList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__elements_Loader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Loader/index.js");
/* unused harmony reexport Loader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__elements_Rail__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Rail/index.js");
/* unused harmony reexport Rail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__elements_Reveal__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Reveal/index.js");
/* unused harmony reexport Reveal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__elements_Reveal_RevealContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Reveal/RevealContent.js");
/* unused harmony reexport RevealContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__elements_Segment__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/index.js");
/* unused harmony reexport Segment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__elements_Segment_SegmentGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/SegmentGroup.js");
/* unused harmony reexport SegmentGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__elements_Step__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/index.js");
/* unused harmony reexport Step */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__elements_Step_StepContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/StepContent.js");
/* unused harmony reexport StepContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__elements_Step_StepDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/StepDescription.js");
/* unused harmony reexport StepDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__elements_Step_StepGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/StepGroup.js");
/* unused harmony reexport StepGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__elements_Step_StepTitle__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/StepTitle.js");
/* unused harmony reexport StepTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__modules_Accordion_Accordion__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/Accordion.js");
/* unused harmony reexport Accordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__modules_Accordion_AccordionAccordion__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionAccordion.js");
/* unused harmony reexport AccordionAccordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__modules_Accordion_AccordionContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionContent.js");
/* unused harmony reexport AccordionContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__modules_Accordion_AccordionTitle__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionTitle.js");
/* unused harmony reexport AccordionTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__modules_Checkbox__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Checkbox/index.js");
/* unused harmony reexport Checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__modules_Dimmer__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dimmer/index.js");
/* unused harmony reexport Dimmer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__modules_Dimmer_DimmerDimmable__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js");
/* unused harmony reexport DimmerDimmable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__modules_Dropdown__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/index.js");
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__modules_Dropdown_DropdownDivider__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownDivider.js");
/* unused harmony reexport DropdownDivider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__modules_Dropdown_DropdownHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownHeader.js");
/* unused harmony reexport DropdownHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__modules_Dropdown_DropdownItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownItem.js");
/* unused harmony reexport DropdownItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__modules_Dropdown_DropdownMenu__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownMenu.js");
/* unused harmony reexport DropdownMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__modules_Dropdown_DropdownSearchInput__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownSearchInput.js");
/* unused harmony reexport DropdownSearchInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__modules_Embed__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Embed/index.js");
/* unused harmony reexport Embed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__modules_Modal__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/index.js");
/* unused harmony reexport Modal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__modules_Modal_ModalActions__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalActions.js");
/* unused harmony reexport ModalActions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__modules_Modal_ModalContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalContent.js");
/* unused harmony reexport ModalContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__modules_Modal_ModalDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalDescription.js");
/* unused harmony reexport ModalDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__modules_Modal_ModalHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalHeader.js");
/* unused harmony reexport ModalHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__modules_Popup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Popup/index.js");
/* unused harmony reexport Popup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__modules_Popup_PopupContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Popup/PopupContent.js");
/* unused harmony reexport PopupContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__modules_Popup_PopupHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Popup/PopupHeader.js");
/* unused harmony reexport PopupHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__modules_Progress__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Progress/index.js");
/* unused harmony reexport Progress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__modules_Rating__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Rating/index.js");
/* unused harmony reexport Rating */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__modules_Rating_RatingIcon__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Rating/RatingIcon.js");
/* unused harmony reexport RatingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__modules_Search__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Search/index.js");
/* unused harmony reexport Search */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__modules_Search_SearchCategory__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Search/SearchCategory.js");
/* unused harmony reexport SearchCategory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__modules_Search_SearchResult__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Search/SearchResult.js");
/* unused harmony reexport SearchResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__modules_Search_SearchResults__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Search/SearchResults.js");
/* unused harmony reexport SearchResults */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__modules_Sidebar__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Sidebar/index.js");
/* unused harmony reexport Sidebar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__modules_Sidebar_SidebarPushable__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPushable.js");
/* unused harmony reexport SidebarPushable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__modules_Sidebar_SidebarPusher__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPusher.js");
/* unused harmony reexport SidebarPusher */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__modules_Sticky__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Sticky/index.js");
/* unused harmony reexport Sticky */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__modules_Tab__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Tab/index.js");
/* unused harmony reexport Tab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__modules_Tab_TabPane__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Tab/TabPane.js");
/* unused harmony reexport TabPane */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__modules_Transition__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Transition/index.js");
/* unused harmony reexport Transition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__modules_Transition_TransitionGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Transition/TransitionGroup.js");
/* unused harmony reexport TransitionGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__views_Advertisement__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Advertisement/index.js");
/* unused harmony reexport Advertisement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__views_Card_Card__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/Card.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_118__views_Card_Card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__views_Card_CardContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardContent.js");
/* unused harmony reexport CardContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__views_Card_CardDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardDescription.js");
/* unused harmony reexport CardDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__views_Card_CardGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardGroup.js");
/* unused harmony reexport CardGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__views_Card_CardHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardHeader.js");
/* unused harmony reexport CardHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__views_Card_CardMeta__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardMeta.js");
/* unused harmony reexport CardMeta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__views_Comment__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/index.js");
/* unused harmony reexport Comment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__views_Comment_CommentAction__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAction.js");
/* unused harmony reexport CommentAction */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__views_Comment_CommentActions__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentActions.js");
/* unused harmony reexport CommentActions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__views_Comment_CommentAuthor__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAuthor.js");
/* unused harmony reexport CommentAuthor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__views_Comment_CommentAvatar__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAvatar.js");
/* unused harmony reexport CommentAvatar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__views_Comment_CommentContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentContent.js");
/* unused harmony reexport CommentContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__views_Comment_CommentGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentGroup.js");
/* unused harmony reexport CommentGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__views_Comment_CommentMetadata__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentMetadata.js");
/* unused harmony reexport CommentMetadata */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__views_Comment_CommentText__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentText.js");
/* unused harmony reexport CommentText */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__views_Feed__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/index.js");
/* unused harmony reexport Feed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__views_Feed_FeedContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedContent.js");
/* unused harmony reexport FeedContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__views_Feed_FeedDate__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedDate.js");
/* unused harmony reexport FeedDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__views_Feed_FeedEvent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedEvent.js");
/* unused harmony reexport FeedEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__views_Feed_FeedExtra__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedExtra.js");
/* unused harmony reexport FeedExtra */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__views_Feed_FeedLabel__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedLabel.js");
/* unused harmony reexport FeedLabel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__views_Feed_FeedLike__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedLike.js");
/* unused harmony reexport FeedLike */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__views_Feed_FeedMeta__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedMeta.js");
/* unused harmony reexport FeedMeta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__views_Feed_FeedSummary__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedSummary.js");
/* unused harmony reexport FeedSummary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__views_Feed_FeedUser__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedUser.js");
/* unused harmony reexport FeedUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__views_Item__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_143__views_Item__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__views_Item_ItemContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemContent.js");
/* unused harmony reexport ItemContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__views_Item_ItemDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemDescription.js");
/* unused harmony reexport ItemDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__views_Item_ItemExtra__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemExtra.js");
/* unused harmony reexport ItemExtra */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__views_Item_ItemGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemGroup.js");
/* unused harmony reexport ItemGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__views_Item_ItemHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemHeader.js");
/* unused harmony reexport ItemHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__views_Item_ItemImage__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemImage.js");
/* unused harmony reexport ItemImage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__views_Item_ItemMeta__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemMeta.js");
/* unused harmony reexport ItemMeta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__views_Statistic__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Statistic/index.js");
/* unused harmony reexport Statistic */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__views_Statistic_StatisticGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticGroup.js");
/* unused harmony reexport StatisticGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__views_Statistic_StatisticLabel__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticLabel.js");
/* unused harmony reexport StatisticLabel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__views_Statistic_StatisticValue__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticValue.js");
/* unused harmony reexport StatisticValue */
// Addons












// Behaviors


// Collections






































// Elements



















































// Modules



















































// Views












































/***/ }),

/***/ "./pages/product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProductSummary__ = __webpack_require__("./components/ProductSummary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ProductAttributes__ = __webpack_require__("./components/ProductAttributes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_moltin__ = __webpack_require__("./lib/moltin.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/pages/product.js',
    _this = this;



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var ProductPage = function ProductPage(_ref) {
  var product = _ref.product;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
    { title: product.name, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ProductSummary__["a" /* default */], _extends({}, product, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    })),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ProductAttributes__["a" /* default */], _extends({}, product, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }))
  );
};

ProductPage.getInitialProps = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
    var id = _ref2.query.id;

    var _ref4, _ref4$json, data, main_images, imageId;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["b" /* getProductById */])(id);

          case 2:
            _ref4 = _context.sent;
            _ref4$json = _ref4.json;
            data = _ref4$json.data;
            main_images = _ref4$json.included.main_images;
            imageId = data.relationships.main_image ? data.relationships.main_image.data.id : false;
            return _context.abrupt('return', {
              product: _extends({}, data, {
                image: imageId ? main_images.find(function (img) {
                  return img.id === imageId;
                }).link.href : '/static/moltin-light-hex.svg'
              })
            });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = ProductPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductPage, 'ProductPage', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/pages/product.js');
  reactHotLoader.register(_default, 'default', '/Users/daryneldavidcerquerajimenez/Desktop/nextjs-demo-store-master/pages/product.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.5aec2d303ea594c0d72d.hot-update.js.map