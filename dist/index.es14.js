import "./index.es14.css";
import { jsx as i } from "./index.es178.js";
/* empty css            */
import { typedForwardRef as d } from "./index.es180.js";
import { bem as n } from "./index.es63.js";
const a = ({ id: r, className: o, variant: e = "full", ...m }, t) => {
  const s = n("Divider", void 0, {
    variant: e
  });
  return /* @__PURE__ */ i("div", { id: r, className: [s, o].join(" ").trim(), ref: t, ...m, children: /* @__PURE__ */ i("div", { className: "Divider__line" }) });
}, f = d(a);
export {
  f as Divider
};
