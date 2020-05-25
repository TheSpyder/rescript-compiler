'use strict';


function f(x) {
  return x + 1 | 0;
}

function f_0(x) {
  return x - 1 | 0;
}

function f2(param) {
  if (param >= 3) {
    return /* T003 */3;
  } else {
    return param;
  }
}

function f3(param) {
  return param;
}

function f4(param) {
  return 3;
}

function f5(param) {
  if (typeof param === "number") {
    switch (param) {
      case /* A */0 :
          return 1;
      case /* B */1 :
          return 3;
      case /* F */2 :
          return 4;
      
    }
  } else {
    switch (param.tag | 0) {
      case /* C */0 :
      case /* D */1 :
          return 1;
      case /* E */2 :
          return 2;
      
    }
  }
}

function f6(param) {
  if (typeof param === "number") {
    if (param >= 2) {
      return 2;
    } else {
      return 0;
    }
  } else {
    return 1;
  }
}

function f7(param) {
  if (typeof param === "number") {
    switch (param) {
      case /* A */0 :
          return 1;
      case /* B */1 :
          return 2;
      case /* F */2 :
          return -1;
      
    }
  } else {
    switch (param.tag | 0) {
      case /* C */0 :
          return 3;
      case /* D */1 :
          return 4;
      case /* E */2 :
          return -1;
      
    }
  }
}

function f8(param) {
  if (typeof param === "number") {
    switch (param) {
      case /* T60 */0 :
      case /* T61 */1 :
          return 1;
      default:
        return 3;
    }
  } else {
    switch (param.tag | 0) {
      case /* T64 */0 :
      case /* T65 */1 :
          return 2;
      default:
        return 3;
    }
  }
}

function f9(param) {
  if (typeof param === "number") {
    if (param === /* T63 */3) {
      return 3;
    } else {
      return 1;
    }
  }
  switch (param.tag | 0) {
    case /* T64 */0 :
    case /* T65 */1 :
        return 2;
    case /* T66 */2 :
    case /* T68 */3 :
        return 3;
    
  }
}

function f10(param) {
  if (typeof param === "number") {
    switch (param) {
      case /* T60 */0 :
          return 0;
      case /* T61 */1 :
          return 2;
      case /* T62 */2 :
          return 4;
      case /* T63 */3 :
          return 1;
      
    }
  } else {
    switch (param.tag | 0) {
      case /* T64 */0 :
      case /* T65 */1 :
          return 2;
      case /* T66 */2 :
      case /* T68 */3 :
          return 3;
      
    }
  }
}

function f11(x) {
  if (typeof x === "number") {
    return 2;
  }
  if (!x.tag) {
    return 1;
  }
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "adt_optimize_test.ml",
          191,
          9
        ],
        Error: new Error()
      };
}

exports.f = f;
exports.f_0 = f_0;
exports.f2 = f2;
exports.f3 = f3;
exports.f4 = f4;
exports.f5 = f5;
exports.f6 = f6;
exports.f7 = f7;
exports.f8 = f8;
exports.f9 = f9;
exports.f10 = f10;
exports.f11 = f11;
/* No side effect */
