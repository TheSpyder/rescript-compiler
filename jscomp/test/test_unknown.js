'use strict';

var Caml_option = require("../../lib/js/caml_option.js");

function some(x) {
  return Caml_option.some(x);
}

function some2(x) {
  return Caml_option.some(x);
}

var h = [
  3,
  2,
  2
];

exports.some = some;
exports.some2 = some2;
exports.h = h;
/* No side effect */
