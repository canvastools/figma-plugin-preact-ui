import { memo as l } from "preact/compat";
import { jsx as c } from "./index.es143.js";
var u = l(function(r) {
  var e = r.angle, a = e === void 0 ? 0 : e, t = r.length, o = t === void 0 ? 10 : t, m = r.name, n = r.number;
  return c("div", { className: "react-clock__mark react-clock__".concat(m, "-mark"), style: {
    transform: "rotate(".concat(a, "deg)")
  }, children: c("div", { className: "react-clock__mark__number", style: {
    transform: "rotate(-".concat(a, "deg)"),
    top: "".concat(o / 2, "%")
  }, children: n }) });
});
export {
  u as default
};
