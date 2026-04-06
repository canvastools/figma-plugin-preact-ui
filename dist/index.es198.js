import "preact/compat";
import { jsx as i } from "./index.es143.js";
import s from "./index.es210.js";
var a = function() {
  return a = Object.assign || function(n) {
    for (var r, e = 1, o = arguments.length; e < o; e++) {
      r = arguments[e];
      for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t]);
    }
    return n;
  }, a.apply(this, arguments);
};
function d(n) {
  function r() {
    return i(s, a({}, n));
  }
  return i("div", { className: "react-calendar__year-view", children: r() });
}
export {
  d as default
};
