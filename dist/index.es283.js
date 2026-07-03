import { useMemo as v } from "preact/compat";
import { jsx as D } from "./index.es203.js";
import { clsx as h } from "./index.es257.js";
function O(e) {
  var a = e.activeStartDate, u = e.children, b = e.classes, t = e.date, m = e.formatAbbr, C = e.locale, f = e.maxDate, x = e.maxDateTransform, d = e.minDate, y = e.minDateTransform, s = e.onClick, l = e.onMouseOver, w = e.style, r = e.tileClassName, o = e.tileContent, c = e.tileDisabled, n = e.view, S = v(function() {
    var i = { activeStartDate: a, date: t, view: n };
    return typeof r == "function" ? r(i) : r;
  }, [a, t, r, n]), T = v(function() {
    var i = { activeStartDate: a, date: t, view: n };
    return typeof o == "function" ? o(i) : o;
  }, [a, t, o, n]);
  return D("button", { className: h(b, S), disabled: d && y(d) > t || f && x(f) < t || (c == null ? void 0 : c({ activeStartDate: a, date: t, view: n })), onClick: s ? function(i) {
    return s(t, i);
  } : void 0, onFocus: l ? function() {
    return l(t);
  } : void 0, onMouseOver: l ? function() {
    return l(t);
  } : void 0, style: w, type: "button", children: [m ? D("abbr", { "aria-label": m(C, t), children: u }) : u, T] });
}
export {
  O as default
};
