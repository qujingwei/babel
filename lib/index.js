"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.assign.js");

var obj1 = {
  a: 1
};
var obj2 = {
  b: 1
};
console.log(Object.assign(obj1, obj2))[1].forEach(function (item) {
  console.log(item);
});

var fn = /*#__PURE__*/_regenerator["default"].mark(function gen() {
  return _regenerator["default"].wrap(function gen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, gen);
});

fn().next();