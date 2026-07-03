import "./index.es27.css";
import { jsx as e } from "./index.es203.js";
import { Text as d } from "./index.es49.js";
/* empty css            */
import { typedForwardRef as s } from "./index.es205.js";
import { bem as a } from "./index.es65.js";
const u = ({ className: r, children: t, paddingLikeOption: o = !1, ...m }, n) => {
  const i = a("MenuItemGroup", void 0, {
    paddingLikeOption: o
  });
  return /* @__PURE__ */ e("div", { className: [i, r].join(" ").trim(), ref: n, ...m, children: /* @__PURE__ */ e("div", { className: "MenuItemGroup__content", children: /* @__PURE__ */ e("div", { className: "MenuItemGroup__children", children: /* @__PURE__ */ e(d, { variant: "body", size: "medium", intent: "neutral-inverted-fixed", disabled: !0, children: t }) }) }) });
}, G = s(u);
export {
  G as MenuItemGroup
};
