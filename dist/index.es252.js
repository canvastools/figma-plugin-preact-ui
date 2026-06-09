import { Children as m, cloneElement as y } from "preact/compat";
import { jsx as g } from "./index.es178.js";
var l = function() {
  return l = Object.assign || function(e) {
    for (var t, o = 1, n = arguments.length; o < n; o++) {
      t = arguments[o];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, l.apply(this, arguments);
}, h = function(e, t) {
  var o = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]]);
  return o;
};
function c(e) {
  return "".concat(e, "%");
}
function w(e) {
  var t = e.children, o = e.className, n = e.count, r = e.direction, a = e.offset, s = e.style, u = e.wrap, p = h(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return g("div", l({ className: o, style: l({ display: "flex", flexDirection: r, flexWrap: u ? "wrap" : "nowrap" }, s) }, p, { children: m.map(t, function(i, d) {
    var f = a && d === 0 ? c(100 * a / n) : null;
    return y(i, l(l({}, i.props), { style: {
      flexBasis: c(100 / n),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: f,
      marginInlineStart: f,
      marginInlineEnd: 0
    } }));
  }) }));
}
export {
  w as default
};
