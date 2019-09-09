"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Banner = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Banner, _BaseComponent);

  function Banner() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Banner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Banner.__proto__ || Object.getPrototypeOf(Banner)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["imgList"], _this.state = {
      imgList: [{
        imgUrl: "https://yanxuan.nosdn.127.net/98a37057c54be2d13d65e8725a3d2837.png"
      }, {
        imgUrl: "https://yanxuan.nosdn.127.net/cd721640cf4ad978c06baa27febc2ef9.jpg"
      }, {
        imgUrl: "https://yanxuan.nosdn.127.net/3b4eb23a111ca747eeeccc5b2306de3b.jpg"
      }, {
        imgUrl: "https://yanxuan.nosdn.127.net/9cbe43dca87a2142909069becda61c79.jpg"
      }]
    }, _this.bannerChange = function () {
      console.log('滚动');
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Banner, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Banner.prototype.__proto__ || Object.getPrototypeOf(Banner.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var imgList = this.__state.imgList;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Banner;
}(_index.Component), _class.$$events = ["bannerChange"], _class.$$componentPath = "pages/home/banner/index", _temp2);
exports.default = Banner;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Banner));