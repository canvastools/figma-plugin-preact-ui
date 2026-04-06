import "./index.es32.css";
import { jsx as o } from "./index.es143.js";
import { ButtonIcon as d } from "./index.es6.js";
import { Text as c } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as s } from "./index.es145.js";
import { bem as a } from "./index.es62.js";
import { close as l } from "./index.es81.js";
const v = ({ id: e, className: t, children: i, onClose: r, ...m }, n) => {
  const p = a("PopoverHeader", void 0, void 0);
  return /* @__PURE__ */ o("div", { id: e, className: [p, t].join(" ").trim(), ref: n, ...m, children: /* @__PURE__ */ o("div", { className: "PopoverHeader__content", children: [
    /* @__PURE__ */ o(c, { strong: !0, fullWidth: !0, children: i }),
    /* @__PURE__ */ o(d, { ghost: !0, icon: { glyph: l }, onClick: r ? () => r() : void 0 })
  ] }) });
}, N = s(v);
export {
  N as PopoverHeader
};
