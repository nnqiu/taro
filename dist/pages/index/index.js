"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2; /**
                                    * @file 主容器
                                    * @author xingyifei
                                    */

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/mobx/index.js");

var _config = require("./config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.inject)('homeStore'), _dec(_class = (0, _index3.observer)(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray5", "$compid__55", "listData", "homeStore"], _this.config = {
      // 设置导航语
      navigationBarTitleText: 'Hello World!'
    }, _this.customComponents = ["AtTabBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // 获取列表数据
      this.props.homeStore.getListData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "onScrollToLower",
    value: function onScrollToLower() {
      console.log(11);
    }
  }, {
    key: "onScrollToUpper",
    value: function onScrollToUpper() {
      console.log(21);
    }

    // 跳转路由

  }, {
    key: "goRoute",
    value: function goRoute(index) {
      var name = _config.MENU_CONFIG[index].text;
      _index2.default.navigateTo({
        url: "/pages/" + name + "/index"
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__55 = (0, _index.genCompid)(__prefix + "$compid__55");

      var listData = this.__props.homeStore.listData;

      var loopArray5 = listData.map(function (item, _anonIdx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var newItem = item.$original;
        var $loopState__temp2 = newItem.imgHref.split(',')[0];
        return {
          newItem: newItem,
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      _index.propsManager.set({
        "fixed": true,
        "tabList": _config.MENU_CONFIG,
        "onClick": this.goRoute
      }, $compid__55);
      Object.assign(this.__state, {
        loopArray5: loopArray5,
        $compid__55: $compid__55,
        listData: listData
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = ["onScrollToLower", "onScrollToUpper"], _class2.$$componentPath = "pages/index/index", _temp2)) || _class) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));