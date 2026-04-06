import { memo as l } from "preact/compat";
import { jsx as e } from "./index.es143.js";
var s = l(function(t) {
  var a = t.angle, m = a === void 0 ? 0 : a, c = t.length, n = c === void 0 ? 10 : c, o = t.name, r = t.width, d = r === void 0 ? 1 : r;
  return e("div", { className: "react-clock__mark react-clock__".concat(o, "-mark"), style: {
    transform: "rotate(".concat(m, "deg)")
  }, children: e("div", { className: "react-clock__mark__body react-clock__".concat(o, "-mark__body"), style: {
    width: "".concat(d, "px"),
    top: 0,
    bottom: "".concat(100 - n / 2, "%")
  } }) });
});
export {
  s as default
};
