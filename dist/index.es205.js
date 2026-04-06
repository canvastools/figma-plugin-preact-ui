import "preact/compat";
import { jsx as t } from "./index.es143.js";
import { clsx as _ } from "./index.es194.js";
import { getMonthStart as M, getYear as g, getMonth as x } from "./index.es211.js";
import p from "./index.es218.js";
import { getDayOfWeek as N, isWeekend as O, isCurrentDayOfWeek as S } from "./index.es200.js";
import { formatWeekday as b, formatShortWeekday as w } from "./index.es209.js";
var v = "react-calendar__month-view__weekdays", n = "".concat(v, "__weekday");
function I(e) {
  for (var m = e.calendarType, c = e.formatShortWeekday, h = c === void 0 ? w : c, l = e.formatWeekday, u = l === void 0 ? b : l, i = e.locale, d = e.onMouseLeave, y = /* @__PURE__ */ new Date(), o = M(y), W = g(o), k = x(o), f = [], a = 1; a <= 7; a += 1) {
    var r = new Date(W, k, a - N(o, m)), s = u(i, r);
    f.push(t("div", { className: _(n, S(r) && "".concat(n, "--current"), O(r, m) && "".concat(n, "--weekend")), children: t("abbr", { "aria-label": s, title: s, children: h(i, r).replace(".", "") }) }, a));
  }
  return t(p, { className: v, count: 7, onFocus: d, onMouseOver: d, children: f });
}
export {
  I as default
};
