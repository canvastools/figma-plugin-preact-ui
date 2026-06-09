import "./index.es36.css";
import { jsx as o } from "./index.es178.js";
/* empty css            */
import { typedForwardRef as f } from "./index.es180.js";
import { bem as S } from "./index.es63.js";
const l = ({ id: r, className: e, children: i, padding: t, variant: m = "default", ...c }, n) => {
  const s = S("Section", void 0, {
    ...t && t.top !== void 0 && { paddingTop: String(t.top) },
    ...t && t.right !== void 0 && { paddingRight: String(t.right) },
    ...t && t.bottom !== void 0 && {
      paddingBottom: String(t.bottom)
    },
    ...t && t.left !== void 0 && { paddingLeft: String(t.left) },
    variant: m
  });
  return /* @__PURE__ */ o("div", { id: r, className: [s, e].join(" ").trim(), ref: n, ...c, children: /* @__PURE__ */ o("div", { className: "Section__content", children: i }) });
}, u = f(l);
export {
  u as Section
};
