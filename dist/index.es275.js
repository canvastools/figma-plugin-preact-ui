import "preact/compat";
import { jsx as h } from "./index.es203.js";
import x from "./index.es278.js";
import { getTileClasses as N } from "./index.es264.js";
function C(e) {
  for (var l = e.className, t = e.count, u = t === void 0 ? 3 : t, v = e.dateTransform, d = e.dateType, f = e.end, p = e.hover, m = e.offset, T = e.renderTile, i = e.start, s = e.step, n = s === void 0 ? 1 : s, c = e.value, y = e.valueType, o = [], r = i; r <= f; r += n) {
    var a = v(r);
    o.push(T({
      classes: N({
        date: a,
        dateType: d,
        hover: p,
        value: c,
        valueType: y
      }),
      date: a
    }));
  }
  return h(x, { className: l, count: u, offset: m, wrap: !0, children: o });
}
export {
  C as default
};
