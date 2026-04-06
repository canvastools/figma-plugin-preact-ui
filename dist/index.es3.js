import "./index.es3.css";
import { jsx as e } from "./index.es143.js";
import { Text as c } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as B } from "./index.es145.js";
import { bem as _ } from "./index.es62.js";
const p = ({
  id: s,
  className: t,
  intent: m = "neutral",
  intentModifier: r = "default",
  prefix: o,
  suffix: d,
  children: a,
  ...i
}, l) => {
  const n = _("Badge", void 0, {
    intent: `${m}-${r}`,
    prefix: !!o,
    suffix: !!d
  });
  return /* @__PURE__ */ e(
    "div",
    {
      id: s,
      className: [n, t].join(" ").trim(),
      ref: l,
      ...i,
      children: /* @__PURE__ */ e("div", { className: "Badge__content", children: [
        o && /* @__PURE__ */ e("div", { className: "Badge__prefix", children: o }),
        a != null && a !== !1 && a !== !0 && /* @__PURE__ */ e("div", { className: "Badge__children", children: /* @__PURE__ */ e(
          c,
          {
            variant: "body",
            size: "medium",
            intent: m,
            intentModifier: r,
            children: a
          }
        ) }),
        d && /* @__PURE__ */ e("div", { className: "Badge__suffix", children: d })
      ] })
    }
  );
}, h = B(p);
export {
  h as Badge
};
