'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * address-parse
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MIT License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * By www.asseek.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _area = require('../area');

var _area2 = _interopRequireDefault(_area);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProvinceKeys = ['特别行政区', '古自治区', '维吾尔自治区', '壮族自治区', '回族自治区', '自治区', '省省直辖', '省', '市'];

var CityKeys = ['布依族苗族自治州', '苗族侗族自治州', '藏族羌族自治州', '哈尼族彝族自治州', '壮族苗族自治州', '傣族景颇族自治州', '蒙古族藏族自治州', '傣族自治州', '白族自治州', '藏族自治州', '彝族自治州', '回族自治州', '蒙古自治州', '朝鲜族自治州', '地区', '哈萨克自治州', '盟', '市'];

var AreaKeys = ['满族自治县', '满族蒙古族自治县', '蒙古族自治县', '朝鲜族自治县', '回族彝族自治县', '彝族回族苗族自治县', '彝族苗族自治县', '土家族苗族自治县', '布依族苗族自治县', '苗族布依族自治县', '彝族傣族自治县', '傣族彝族自治县', '仡佬族苗族自治县', '黎族苗族自治县', '苗族侗族自治县', '哈尼族彝族傣族自治县', '哈尼族彝族自治县', '彝族哈尼族拉祜族自治县', '傣族拉祜族佤族自治县', '傣族佤族自治县', '拉祜族佤族布朗族傣族自治县', '苗族瑶族傣族自治县', '彝族回族自治县', '独龙族怒族自治县', '保安族东乡族撒拉族自治县', '回族土族自治县', '撒拉族自治县', '哈萨克自治县', '塔吉克自治县', '回族自治县', '畲族自治县', '土家族自治县', '布依族自治县', '苗族自治县', '瑶族自治县', '侗族自治县', '水族自治县', '傈僳族自治县', '仫佬族自治县', '毛南族自治县', '黎族自治县', '羌族自治县', '彝族自治县', '藏族自治县', '纳西族自治县', '裕固族自治县', '哈萨克族自治县', '哈尼族自治县', '拉祜族自治县', '佤族自治县', '左旗', '右旗', '中旗', '后旗', '联合旗', '自治旗', '旗', '自治县', '区', '县', '市'];

var ParseArea = function () {
  _createClass(ParseArea, null, [{
    key: 'init',
    value: function init() {
      for (var code in _area2.default.province_list) {
        var province = _area2.default.province_list[code];
        ParseArea.ProvinceShort[code] = ProvinceKeys.reduce(function (v, key) {
          return v.replace(key, '');
        }, province);
      }

      for (var _code in _area2.default.city_list) {
        var city = _area2.default.city_list[_code];
        if (city.length > 2) {
          ParseArea.CityShort[_code] = CityKeys.reduce(function (v, key) {
            return v.replace(key, '');
          }, city);
        }
      }
      for (var _code2 in _area2.default.area_list) {
        var area = _area2.default.area_list[_code2];
        if (area === '雨花台区') area = '雨花区';
        if (area.length > 2) {
          ParseArea.AreaShort[_code2] = AreaKeys.reduce(function (v, key) {
            return v.replace(key, '');
          }, area);
        }
      }
      ParseArea.isInit = true;
    }
  }]);

  function ParseArea(address) {
    _classCallCheck(this, ParseArea);

    if (!ParseArea.isInit) {
      ParseArea.init();
    }
    if (address) {
      return this.parse(address);
    }
  }

  /**
   * 开始解析
   * @param address string
   * @param parseAll 是否执行全部解析 默认识别到city终止
   * @returns {Array}
   */


  _createClass(ParseArea, [{
    key: 'parse',
    value: function parse(address, parseAll) {
      var _results;

      this.results = [];

      // 正向解析
      (_results = this.results).unshift.apply(_results, _toConsumableArray(ParseArea.parseByProvince(address)));
      if (parseAll || !this.results[0] || !this.results[0].__parse) {
        var _results2;

        // 逆向城市解析  通过所有CityShort匹配
        (_results2 = this.results).unshift.apply(_results2, _toConsumableArray(ParseArea.parseByCity(address)));
        if (parseAll || !this.results[0] || !this.results[0].__parse) {
          var _results3;

          // 逆向地区解析   通过所有AreaShort匹配
          (_results3 = this.results).unshift.apply(_results3, _toConsumableArray(ParseArea.parseByArea(address)));
        }
      }
      // 可信度排序
      this.results.sort(function (a, b) {
        return a.__parse && !b.__parse ? -1 : !a.__parse && b.__parse ? 1 : a.name.length > b.name.length ? 1 : a.name.length < b.name.length ? -1 : 0;
      });

      return this.results;
    }

    /**
     * 1.1 提取省份
     */

  }], [{
    key: 'parseByProvince',
    value: function parseByProvince(addressBase) {
      var province_list = _area2.default.province_list;
      var results = [];
      var result = {
        province: '',
        city: '',
        area: '',
        details: '',
        name: '',
        code: '',
        __type: 'parseByProvince',
        __parse: false
      };
      var address = addressBase;
      for (var code in province_list) {
        var province = province_list[code];
        var index = address.indexOf(province);
        var shortProvince = index > -1 ? '' : ParseArea.ProvinceShort[code];
        var provinceLength = shortProvince ? shortProvince.length : province.length;
        if (shortProvince) {
          index = address.indexOf(shortProvince);
        }
        if (index > -1) {
          // 如果省份不是第一位 在省份之前的字段识别为名称
          if (index > 0) {
            result.name = address.substr(0, index).trim();
            address = address.substr(index).trim();
          }
          result.province = province;
          result.code = code;
          var _address = address.substr(provinceLength);
          if (_address.charAt(0) !== '市' || _address.indexOf(province) > -1) {
            address = _address;
          }
          //如果是用短名匹配的 要替换省关键字
          if (shortProvince) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = ProvinceKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                if (address.indexOf(ProvinceKeys[key]) === 0) {
                  address = address.substr(ProvinceKeys[key].length);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
          var __address = ParseArea.parse_city_by_province(address, result);
          if (!result.city) {
            __address = ParseArea.parse_area_by_province(address, result);
          }
          if (result.city) {
            address = __address;
            result.__parse = true;
            break;
          } else {
            //如果没有识别到地区 缓存本次结果，并重置数据
            results.unshift(_extends({}, result, { details: address.trim() }));
            result.province = '';
            result.code = '';
            result.name = '';
            address = addressBase;
          }
        }
      }
      if (result.code) {
        results.unshift(_extends({}, result, { details: address.trim() }));
      }
      return results;
    }

    /**
     * 1.2.提取城市
     * @returns {boolean}
     */

  }, {
    key: 'parse_city_by_province',
    value: function parse_city_by_province(address, result) {
      var cityList = _utils2.default.getTargetAreaListByCode('city', result.code);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = cityList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var city = _step2.value;

          var index = address.indexOf(city.name);
          var shortCity = index > -1 ? '' : ParseArea.CityShort[city.code];
          var cityLength = shortCity ? shortCity.length : city.name.length;
          if (shortCity) {
            index = address.indexOf(shortCity);
          }
          if (index > -1 && index < 3) {
            result.city = city.name;
            result.code = city.code;
            address = address.substr(index + cityLength);
            //如果是用短名匹配的 要替换市关键字
            if (shortCity) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = CityKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var key = _step3.value;

                  if (address.indexOf(key) === 0) {
                    //排除几个会导致异常的解析
                    if (key !== '市' && !['市北区', '市南区', '市中区', '市辖区'].some(function (v) {
                      return address.indexOf(v) === 0;
                    })) {
                      address = address.substr(key.length);
                    }
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
            address = ParseArea.parse_area_by_city(address, result);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return address;
    }

    /**
     * 1.3.,2.2 已匹配城市的地址 提取地区
     * @param address string
     * @param result object
     * @returns {string}
     */

  }, {
    key: 'parse_area_by_city',
    value: function parse_area_by_city(address, result) {
      var areaList = _utils2.default.getTargetAreaListByCode('area', result.code);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = areaList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var area = _step4.value;

          var index = address.indexOf(area.name);
          var shortArea = index > -1 ? '' : ParseArea.AreaShort[area.code];
          var areaLength = shortArea ? shortArea.length : area.name.length;
          if (shortArea) {
            index = address.indexOf(shortArea);
          }
          if (index > -1 && index < 3) {
            result.area = area.name;
            result.code = area.code;
            address = address.substr(index + areaLength);
            //如果是用短名匹配的 要替换市关键字
            if (shortArea) {
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = AreaKeys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var key = _step5.value;

                  if (address.indexOf(key) === 0) {
                    address = address.substr(key.length);
                  }
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            }
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return address;
    }

    /**
     * 1.4.提取省份但没有提取到城市的地址尝试通过省份下地区匹配
     */

  }, {
    key: 'parse_area_by_province',
    value: function parse_area_by_province(address, result) {
      var areaList = _utils2.default.getTargetAreaListByCode('area', result.code);
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = areaList[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var area = _step6.value;

          var index = address.indexOf(area.name);
          var shortArea = index > -1 ? '' : ParseArea.AreaShort[area.code];
          var areaLength = shortArea ? shortArea.length : area.name.length;
          if (shortArea) {
            index = address.indexOf(shortArea);
          }
          if (index > -1 && index < 6) {
            var _Utils$getTargetAreaL = _utils2.default.getTargetAreaListByCode('city', area.code, true),
                _Utils$getTargetAreaL2 = _slicedToArray(_Utils$getTargetAreaL, 1),
                city = _Utils$getTargetAreaL2[0];

            result.city = city.name;
            result.area = area.name;
            result.code = area.code;
            address = address.substr(index + areaLength);
            //如果是用短名匹配的 要替换地区关键字
            if (shortArea) {
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = AreaKeys[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var key = _step7.value;

                  if (address.indexOf(key) === 0) {
                    address = address.substr(key.length);
                  }
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7.return) {
                    _iterator7.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }
            }
            break;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return address;
    }

    /**
     * 2.1 通过城市识别地址
     * @param addressBase string
     * @returns {Array}
     */

  }, {
    key: 'parseByCity',
    value: function parseByCity(addressBase) {
      var city_list = _area2.default.city_list;
      var results = [];
      var result = {
        province: '',
        city: '',
        area: '',
        details: '',
        name: '',
        code: '',
        __type: 'parseByCity',
        __parse: false
      };
      var address = addressBase;
      for (var code in city_list) {
        var city = city_list[code];
        if (city.length < 2) break;
        var index = address.indexOf(city);
        var shortCity = index > -1 ? '' : ParseArea.CityShort[code];
        var cityLength = shortCity ? shortCity.length : city.length;
        if (shortCity) {
          index = address.indexOf(shortCity);
        }
        if (index > -1) {
          var _Utils$getTargetAreaL3 = _utils2.default.getTargetAreaListByCode('province', code, true),
              _Utils$getTargetAreaL4 = _slicedToArray(_Utils$getTargetAreaL3, 1),
              province = _Utils$getTargetAreaL4[0];

          result.province = province.name;
          result.city = city;
          result.code = code;
          // 左侧排除省份名剩下的内容识别为姓名
          var leftAddress = address.substr(0, index);
          var _provinceName = '';
          if (leftAddress) {
            _provinceName = province.name;
            var _index = leftAddress.indexOf(_provinceName);
            if (_index === -1) {
              _provinceName = ParseArea.ProvinceShort[province.code];
              _index = leftAddress.indexOf(_provinceName);
              if (_index === -1) _provinceName = '';
            }
            if (_provinceName) {
              leftAddress = leftAddress.replace(new RegExp(_provinceName, 'g'), '');
            }
            if (leftAddress) {
              result.name = leftAddress;
            }
          }

          address = address.substr(index + cityLength);
          address = ParseArea.parse_area_by_city(address, result);
          if (_provinceName || result.area) {
            result.__parse = true;
            break;
          } else {
            //如果没有识别到省份和地区 缓存本次结果，并重置数据
            results.unshift(_extends({}, result, { details: address.trim() }));
            result.name = '';
            result.city = '';
            result.province = '';
            result.code = '';
            address = addressBase;
          }
        }
      }
      if (result.code) {
        results.unshift(_extends({}, result, { details: address.trim() }));
      }
      return results;
    }

    /**
     * 3 通过地区识别地址
     * @returns {Array}
     */

  }, {
    key: 'parseByArea',
    value: function parseByArea(addressBase) {
      var area_list = _area2.default.area_list;
      var results = [];
      var result = {
        province: '',
        city: '',
        area: '',
        details: '',
        name: '',
        code: '',
        __type: 'parseByArea',
        __parse: false
      };
      var address = addressBase;
      for (var code in area_list) {
        var area = area_list[code];
        if (area.length < 2) break;
        var index = address.indexOf(area);
        var shortArea = index > -1 ? '' : ParseArea.AreaShort[code];
        var areaLength = shortArea ? shortArea.length : area.length;
        if (shortArea) {
          index = address.indexOf(shortArea);
        }
        if (index > -1) {
          var _Utils$getTargetAreaL5 = _utils2.default.getTargetAreaListByCode('province', code, true),
              _Utils$getTargetAreaL6 = _slicedToArray(_Utils$getTargetAreaL5, 2),
              province = _Utils$getTargetAreaL6[0],
              city = _Utils$getTargetAreaL6[1];

          result.province = province.name;
          result.city = city.name;
          result.area = area;
          result.code = code;
          // 左侧排除省份城市名剩下的内容识别为姓名
          var leftAddress = address.substr(0, index);
          var _provinceName = '',
              _cityName = '';
          if (leftAddress) {
            _provinceName = province.name;
            var _index = leftAddress.indexOf(_provinceName);
            if (_index === -1) {
              _provinceName = ParseArea.ProvinceShort[province.code];
              _index = leftAddress.indexOf(_provinceName);
              if (_index === -1) _provinceName = '';
            }
            if (_provinceName) {
              leftAddress = leftAddress.replace(new RegExp(_provinceName, 'g'), '');
            }

            _cityName = city.name;
            _index = leftAddress.indexOf(_cityName);
            if (_index === -1) {
              _cityName = ParseArea.CityShort[city.code];
              _index = leftAddress.indexOf(_cityName);
              if (_index === -1) _cityName = '';
            }
            if (_cityName) {
              leftAddress = leftAddress.replace(new RegExp(_cityName, 'g'), '');
            }
            if (leftAddress) {
              result.name = leftAddress;
            }
          }
          address = address.substr(index + areaLength);

          if (_provinceName || _cityName) {
            result.__parse = true;
            break;
          } else {
            //如果没有识别到省份和地区 缓存本次结果，并重置数据
            results.unshift(_extends({}, result, { details: address.trim() }));
            result.name = '';
            result.city = '';
            result.area = '';
            result.province = '';
            result.code = '';
            address = addressBase;
          }
        }
      }
      if (result.code) {
        results.unshift(_extends({}, result, { details: address.trim() }));
      }
      return results;
    }
  }]);

  return ParseArea;
}();

ParseArea.isInit = false;
ParseArea.ProvinceShort = {};
ParseArea.CityShort = {};
ParseArea.AreaShort = {};
exports.default = ParseArea;