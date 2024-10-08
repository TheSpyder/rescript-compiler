// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Nodetest = require("node:test");
let Belt_MapInt = require("../../lib/js/belt_MapInt.js");
let Node_test_util = require("./node_test_util.js");

Nodetest.describe("Belt.Map.Int", () => {
  Nodetest.test("set", () => {
    let m;
    for (let i = 0; i <= 999999; ++i) {
      m = Belt_MapInt.set(m, i, i);
    }
    for (let i$1 = 0; i$1 <= 999999; ++i$1) {
      Node_test_util.ok("File \"belt_mapint_ntest.res\", line 17, characters 9-16", Belt_MapInt.get(m, i$1) !== undefined);
    }
    for (let i$2 = 0; i$2 <= 999999; ++i$2) {
      m = Belt_MapInt.remove(m, i$2);
    }
    Node_test_util.ok("File \"belt_mapint_ntest.res\", line 23, characters 7-14", Belt_MapInt.isEmpty(m));
  });
});

let M;

exports.M = M;
/*  Not a pure module */
