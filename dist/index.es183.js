import "preact/compat";
import { jsx as i } from "./index.es129.js";
import s from "./index.es189.js";
var t = function() {
  return t = Object.assign || function(r) {
    for (var e, n = 1, o = arguments.length; n < o; n++) {
      e = arguments[n];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, t.apply(this, arguments);
};
function f(r) {
  function e() {
    return i(s, t({}, r));
  }
  return i("div", { className: "react-calendar__decade-view", children: e() });
}
export {
  f as default
};
