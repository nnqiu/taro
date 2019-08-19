"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _descriptor; /**
                                               * @file 主容器 - store
                                               * @author xingyifei
                                               */

var _mobx = require("../npm/mobx/lib/mobx.js");

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MainHome = (_dec = _mobx.action.bound, (_class = function () {
  function MainHome() {
    _classCallCheck(this, MainHome);

    _initDefineProp(this, "listData", _descriptor, this);
  }

  _createClass(MainHome, [{
    key: "getListData",


    // action.bound可以用来自动地将动作绑定到目标对象
    value: function getListData() {
      var _this = this;

      _index2.default.request({
        url: 'http://116.62.7.205:8080/getList',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          pageSize: 20,
          pageNum: 1
        },
        method: 'POST',
        success: function success(res) {
          _this.listData = res.data.data.list;
        }
      });
    }
  }]);

  return MainHome;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "listData", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "getListData", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "getListData"), _class.prototype)), _class));
exports.default = new MainHome();