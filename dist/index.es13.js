import "./index.es13.css";
import { jsx as a } from "./index.es129.js";
import R from "./index.es142.js";
import { Icon as o } from "./index.es16.js";
/* empty css            */
import { typedForwardRef as j } from "./index.es131.js";
import { bem as k } from "./index.es62.js";
import { chevronDoubleRight as E } from "./index.es68.js";
import { chevronRight as N } from "./index.es72.js";
import { chevronDoubleLeft as I } from "./index.es67.js";
import { chevronLeft as P } from "./index.es71.js";
const S = ({
  id: d,
  className: u,
  locale: c = "en-US",
  type: s = "iso8601",
  defaultView: f = "month",
  view: i,
  defaultDate: y = null,
  date: v = null,
  minDate: b = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 5)),
  maxDate: h = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 5)),
  minDetail: g = "century",
  maxDetail: L = "month",
  showNavigation: F = !0,
  navigation: w = "full",
  onDateChange: l,
  onDetailUp: n,
  onDetailDown: m,
  onViewChange: p,
  ...x
}, Y) => {
  const K = k("Calendar", void 0, {
    navigation: F ? w : void 0
  });
  return /* @__PURE__ */ a("div", { id: d, ref: Y, onKeyDown: (e) => {
    const t = e.key;
    if (t === "Escape" || t === "Esc") {
      e.stopPropagation(), e.preventDefault();
      const r = e.target;
      r && typeof r.blur == "function" && r.blur();
    }
  }, "data-pui-interactive": "true", children: /* @__PURE__ */ a(
    R,
    {
      className: [K, u].join(" ").trim(),
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
      nextLabel: /* @__PURE__ */ a(o, { glyph: N }),
      next2Label: /* @__PURE__ */ a(o, { glyph: E }),
      onChange: (e) => {
        l == null || l({ date: e });
      },
      onDrillUp: (e) => {
        const { value: t, ...r } = e;
        n == null || n({ ...r, date: t });
      },
      onDrillDown: (e) => {
        const { value: t, ...r } = e;
        m == null || m({ ...r, date: t });
      },
      onViewChange: (e) => {
        const { value: t, ...r } = e;
        p == null || p({ ...r, date: t });
      },
      ...x
    }
  ) });
}, O = j(S);
export {
  O as Calendar
};
