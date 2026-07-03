import "./index.es13.css";
import { jsx as a } from "./index.es203.js";
import R from "./index.es216.js";
import { Icon as o } from "./index.es16.js";
/* empty css            */
import { typedForwardRef as k } from "./index.es205.js";
import { bem as E } from "./index.es65.js";
import { chevronDoubleRight as N } from "./index.es84.js";
import { chevronRight as j } from "./index.es88.js";
import { chevronDoubleLeft as I } from "./index.es83.js";
import { chevronLeft as P } from "./index.es87.js";
const S = ({
  id: n,
  className: u,
  locale: c = "en-US",
  type: s = "iso8601",
  defaultView: f = "month",
  view: i,
  defaultDate: y = null,
  // No default here: `undefined` keeps the calendar uncontrolled (selection
  // is stored internally), while an explicit `null` means "controlled,
  // nothing selected". react-calendar treats these differently.
  date: v,
  minDate: b = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 5)),
  maxDate: h = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 5)),
  minDetail: g = "century",
  maxDetail: L = "month",
  showNavigation: F = !0,
  navigation: w = "full",
  onDateChange: l,
  onDetailUp: p,
  onDetailDown: d,
  onViewChange: m,
  ...x
}, Y) => {
  const K = E("Calendar", void 0, {
    navigation: F ? w : void 0
  });
  return /* @__PURE__ */ a("div", { id: n, className: u, ref: Y, onKeyDown: (e) => {
    const t = e.key;
    if (t === "Escape" || t === "Esc") {
      e.stopPropagation(), e.preventDefault();
      const r = e.target;
      r && typeof r.blur == "function" && r.blur();
    }
  }, "data-pui-interactive": "true", children: /* @__PURE__ */ a(
    R,
    {
      className: K,
      locale: c,
      calendarType: s,
      defaultView: f,
      view: i,
      defaultValue: y,
      value: v,
      minDate: b,
      maxDate: h,
      minDetail: g,
      maxDetail: L,
      prevLabel: /* @__PURE__ */ a(o, { glyph: P }),
      prev2Label: /* @__PURE__ */ a(o, { glyph: I }),
      nextLabel: /* @__PURE__ */ a(o, { glyph: j }),
      next2Label: /* @__PURE__ */ a(o, { glyph: N }),
      onChange: (e) => {
        l == null || l({ date: e });
      },
      onDrillUp: (e) => {
        const { value: t, ...r } = e;
        p == null || p({ ...r, date: t });
      },
      onDrillDown: (e) => {
        const { value: t, ...r } = e;
        d == null || d({ ...r, date: t });
      },
      onViewChange: (e) => {
        const { value: t, ...r } = e;
        m == null || m({ ...r, date: t });
      },
      ...x
    }
  ) });
}, O = k(S);
export {
  O as Calendar
};
