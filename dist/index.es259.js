import "preact/compat";
import { jsx as i } from "./index.es203.js";
import o from "./index.es265.js";
var a = function() {
  return a = Object.assign || function(r) {
    for (var e, n = 1, u = arguments.length; n < u; n++) {
      e = arguments[n];
      for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    }
    return r;
  }, a.apply(this, arguments);
};
function d(r) {
  function e() {
    return i(o, a({}, r));
  }
  return i("div", { className: "react-calendar__century-view", children: e() });
}
export {
  d as default
};
