import "./index.es30.css";
import { jsx as r } from "./index.es178.js";
/* empty css            */
import { typedForwardRef as v } from "./index.es180.js";
import { bem as l } from "./index.es63.js";
const f = ({ id: e, className: t, width: n, height: a, showArrow: o, constrainHeight: i = !1, tabIndex: m, children: s, ...p }, c) => {
  const d = l("PopoverContainer", void 0, {
    arrow: o,
    "constrain-height": i
  });
  return /* @__PURE__ */ r(
    "div",
    {
      id: e,
      className: [d, t].join(" ").trim(),
      ref: c,
      ...p,
      tabIndex: m ?? -1,
      style: {
        width: n,
        height: a
      },
      children: [
        o && /* @__PURE__ */ r("div", { className: "PopoverContainer__arrow" }),
        s
      ]
    }
  );
}, _ = v(f);
export {
  _ as PopoverContainer
};
