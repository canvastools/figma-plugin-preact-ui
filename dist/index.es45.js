import "./index.es45.css";
import { jsx as o } from "./index.es178.js";
/* empty css            */
import { typedForwardRef as p } from "./index.es180.js";
import { bem as f } from "./index.es63.js";
const l = ({ id: s, className: a, variant: r = "default", scrollable: m = !0, children: t, ...e }, i) => {
  const n = f("TabList", void 0, {
    variant: r,
    scrollable: m
  });
  return /* @__PURE__ */ o("div", { id: s, className: [n, a].join(" ").trim(), ref: i, ...e, children: t != null && t !== !1 && t !== !0 && /* @__PURE__ */ o("div", { className: "TabList__children", children: t }) });
}, L = p(l);
export {
  L as TabList
};
