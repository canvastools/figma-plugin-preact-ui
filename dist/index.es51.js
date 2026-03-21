import "./index.es51.css";
import { jsx as t } from "./index.es129.js";
/* empty css            */
import { Text as l } from "./index.es47.js";
import { typedForwardRef as d } from "./index.es131.js";
import { bem as c } from "./index.es62.js";
const f = ({ id: r, className: i, width: e, height: n, showArrow: o, children: a, ...m }, p) => {
  const s = c("TooltipContainer", void 0, {
    arrow: o
  });
  return /* @__PURE__ */ t(
    "div",
    {
      id: r,
      className: [s, i].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: p,
      ...m,
      style: {
        width: e,
        height: n
      },
      children: [
        o && /* @__PURE__ */ t("div", { className: "TooltipContainer__arrow" }),
        /* @__PURE__ */ t(l, { intent: "neutral-inverted-fixed", children: a })
      ]
    }
  );
}, N = d(f);
export {
  N as TooltipContainer
};
