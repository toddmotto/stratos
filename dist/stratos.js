/*! Stratos v1.4.0 | (c) 2014 @toddmotto | github.com/toddmotto/stratos */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.Stratos = factory();
  }
})(this, function () {

  'use strict';

  var exports = {};

  exports.has = function (object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
  };

  exports.type = function (object) {
    return Object.prototype.toString.call(object);
  };

  exports.add = function (object, key, val) {
    object[key] = val;
  };

  exports.remove = function (object, key) {
    if (exports.has(object, key)) {
      delete object[key];
    }
  };

  exports.extend = function() {
    var process = function(destination, source) { 
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          destination[key] = source[key];
        }
      }
      return destination;
    };
    var result = arguments[0];
    for(var i=1; i<arguments.length; i++) {
      result = process(result, arguments[i]);
    }
    return result;
  };

  exports.destroy = function (object) {
    for (var key in object) {
      if (exports.has(object, key)) {
        exports.remove(object, key);
      }
    }
  };

  exports.keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
      if (exports.has(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };

  exports.vals = function (object) {
    var vals = [];
    for (var key in object) {
      if (exports.has(object, key)) {
        vals.push(object[key]);
      }
    }
    return vals;
  };

  exports.toJSON = function (object) {
    return JSON.stringify(object);
  };

  exports.fromJSON = function (object) {
    return JSON.parse(object);
  };

  return exports;

});
