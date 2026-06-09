import "preact/compat";
import { jsx as d } from "./index.es178.js";
function m(t) {
  var o = t.angle, i = o === void 0 ? 0 : o, c = t.name, a = t.length, r = a === void 0 ? 100 : a, e = t.oppositeLength, l = e === void 0 ? 10 : e, n = t.width, h = n === void 0 ? 1 : n;
  return d("div", { className: "react-clock__hand react-clock__".concat(c, "-hand"), style: {
    transform: "rotate(".concat(i, "deg)")
  }, children: d("div", { className: "react-clock__hand__body react-clock__".concat(c, "-hand__body"), style: {
    width: "".concat(h, "px"),
    top: "".concat(50 - r / 2, "%"),
    bottom: "".concat(50 - l / 2, "%")
  } }) });
}
export {
  m as default
};
