"use strict";
module.exports = function generics (object) {
  return Object.getOwnPropertyNames(object).reduce(function (result, name) {
    var property = object[name];
    if (typeof property === "function") {
      result[name] = Function.prototype.call.bind(property);
    }
    return result;
  }, {});
};
