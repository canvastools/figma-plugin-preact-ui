import "./index.es25.css";
import { jsx as e } from "./index.es129.js";
/* empty css            */
import { typedForwardRef as s } from "./index.es131.js";
import { bem as d } from "./index.es62.js";
const a = ({ id: i, className: r, variant: o = "full", ...m }, n) => {
  const t = d("MenuDivider", void 0, {
    variant: o
  });
  return /* @__PURE__ */ e("div", { id: i, className: [t, r].join(" ").trim(), ref: n, ...m, children: /* @__PURE__ */ e("div", { className: "MenuDivider__line" }) });
}, v = s(a);
export {
  v as MenuDivider
};
