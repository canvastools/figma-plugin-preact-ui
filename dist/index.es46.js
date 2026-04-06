import "./index.es46.css";
import { jsx as e } from "./index.es143.js";
import { Fragment as l } from "preact";
/* empty css            */
import { useTabContext as p } from "./index.es44.js";
import { typedForwardRef as d } from "./index.es145.js";
import { bem as f } from "./index.es62.js";
const b = ({ id: t, className: a, tabId: o, fullHeight: m = !1, children: n, ...i }, s) => {
  const { activeId: r } = p();
  if (o !== r) return /* @__PURE__ */ e(l, {});
  const c = f("TabPanel", void 0, {
    selected: o === r,
    fullHeight: m
  });
  return /* @__PURE__ */ e("div", { id: t, className: [c, a].join(" ").trim(), ref: s, ...i, children: /* @__PURE__ */ e("div", { className: "TabPanel__children", children: n }) });
}, _ = d(b);
export {
  _ as TabPanel
};
