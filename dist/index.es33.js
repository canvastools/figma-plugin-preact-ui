import "./index.es33.css";
import { jsx as o } from "./index.es203.js";
import { Text as d } from "./index.es49.js";
import { ButtonIcon as c } from "./index.es6.js";
/* empty css            */
import { typedForwardRef as s } from "./index.es205.js";
import { bem as a } from "./index.es65.js";
import { close as l } from "./index.es90.js";
const v = ({ id: e, className: t, children: i, onClose: r, ...m }, n) => {
  const p = a("PopoverHeader", void 0, void 0);
  return /* @__PURE__ */ o("div", { id: e, className: [p, t].join(" ").trim(), ref: n, ...m, children: /* @__PURE__ */ o("div", { className: "PopoverHeader__content", children: [
    /* @__PURE__ */ o(d, { strong: !0, fullWidth: !0, children: i }),
    /* @__PURE__ */ o(c, { ghost: !0, icon: { glyph: l }, onClick: r ? () => r() : void 0 })
  ] }) });
}, N = s(v);
export {
  N as PopoverHeader
};
