import "preact/compat";
import { jsx as r } from "./index.es129.js";
import { getUserLocale as ee } from "./index.es194.js";
import { getBeginPrevious as te, getBeginPrevious2 as ae, getBeginNext as re, getBeginNext2 as ne, getEndPrevious as ie, getEndPrevious2 as le, getDecadeLabel as oe, getCenturyLabel as ce } from "./index.es186.js";
import { formatMonthYear as ve, formatYear as ue } from "./index.es195.js";
import { Fragment as be } from "preact";
var n = "react-calendar__navigation";
function Le(e) {
  var i = e.activeStartDate, T = e.drillUp, d = e.formatMonthYear, U = d === void 0 ? ve : d, m = e.formatYear, b = m === void 0 ? ue : m, o = e.locale, c = e.maxDate, v = e.minDate, p = e.navigationAriaLabel, F = p === void 0 ? "" : p, M = e.navigationAriaLive, f = e.navigationLabel, x = e.next2AriaLabel, j = x === void 0 ? "" : x, L = e.next2Label, g = L === void 0 ? "»" : L, h = e.nextAriaLabel, V = h === void 0 ? "" : h, A = e.nextLabel, D = A === void 0 ? "›" : A, _ = e.prev2AriaLabel, $ = _ === void 0 ? "" : _, w = e.prev2Label, N = w === void 0 ? "«" : w, C = e.prevAriaLabel, G = C === void 0 ? "" : C, k = e.prevLabel, y = k === void 0 ? "‹" : k, u = e.setActiveStartDate, I = e.showDoubleView, a = e.view, O = e.views, q = O.indexOf(a) > 0, l = a !== "century", B = te(a, i), S = l ? ae(a, i) : void 0, s = re(a, i), Y = l ? ne(a, i) : void 0, z = function() {
    if (B.getFullYear() < 0)
      return !0;
    var t = ie(a, i);
    return v && v >= t;
  }(), H = l && function() {
    if (S.getFullYear() < 0)
      return !0;
    var t = le(a, i);
    return v && v >= t;
  }(), J = c && c < s, K = l && c && c < Y;
  function Q() {
    u(B, "prev");
  }
  function R() {
    u(S, "prev2");
  }
  function W() {
    u(s, "next");
  }
  function X() {
    u(Y, "next2");
  }
  function P(t) {
    var E = function() {
      switch (a) {
        case "century":
          return ce(o, b, t);
        case "decade":
          return oe(o, b, t);
        case "year":
          return b(o, t);
        case "month":
          return U(o, t);
        default:
          throw new Error("Invalid view: ".concat(a, "."));
      }
    }();
    return f ? f({
      date: t,
      label: E,
      locale: o || ee() || void 0,
      view: a
    }) : E;
  }
  function Z() {
    var t = "".concat(n, "__label");
    return r("button", { "aria-label": F, "aria-live": M, className: t, disabled: !q, onClick: T, style: { flexGrow: 1 }, type: "button", children: [r("span", { className: "".concat(t, "__labelText ").concat(t, "__labelText--from"), children: P(i) }), I ? r(be, { children: [r("span", { className: "".concat(t, "__divider"), children: " – " }), r("span", { className: "".concat(t, "__labelText ").concat(t, "__labelText--to"), children: P(s) })] }) : null] });
  }
  return r("div", { className: n, children: [N !== null && l ? r("button", { "aria-label": $, className: "".concat(n, "__arrow ").concat(n, "__prev2-button"), disabled: H, onClick: R, type: "button", children: N }) : null, y !== null && r("button", { "aria-label": G, className: "".concat(n, "__arrow ").concat(n, "__prev-button"), disabled: z, onClick: Q, type: "button", children: y }), Z(), D !== null && r("button", { "aria-label": V, className: "".concat(n, "__arrow ").concat(n, "__next-button"), disabled: J, onClick: W, type: "button", children: D }), g !== null && l ? r("button", { "aria-label": j, className: "".concat(n, "__arrow ").concat(n, "__next2-button"), disabled: K, onClick: X, type: "button", children: g }) : null] });
}
export {
  Le as default
};
