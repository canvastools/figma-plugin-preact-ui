import "./index.es30.css";
import { jsx as r } from "./index.es129.js";
/* empty css            */
import { typedForwardRef as c } from "./index.es131.js";
import { bem as d } from "./index.es62.js";
const v = ({ id: e, className: t, width: n, height: a, showArrow: o, children: i, ...m }, p) => {
  const s = d("PopoverContainer", void 0, {
    arrow: o
  });
  return /* @__PURE__ */ r(
    "div",
    {
      id: e,
      className: [s, t].join(" ").trim(),
      ref: p,
      tabIndex: -1,
      ...m,
      style: {
        width: n,
        height: a
      },
      children: [
        o && /* @__PURE__ */ r("div", { className: "PopoverContainer__arrow" }),
        i
      ]
    }
  );
}, x = c(v);
export {
  x as PopoverContainer
};
