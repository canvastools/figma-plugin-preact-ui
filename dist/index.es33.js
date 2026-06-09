import "./index.es33.css";
import { jsx as r } from "./index.es178.js";
import { useState as l, useEffect as p } from "preact/hooks";
/* empty css            */
import { typedForwardRef as f } from "./index.es180.js";
import { bem as b } from "./index.es63.js";
const g = ({ id: s, className: i, variant: e = "indeterminate", delay: t = 0, value: o = 0, ...m }, n) => {
  const [a, c] = l(!1);
  p(() => {
    const u = window.setTimeout(() => {
      c(!0);
    }, t);
    return () => clearTimeout(u);
  }, [t]);
  const d = b("Progress", void 0, { variant: e, visible: a });
  return /* @__PURE__ */ r("div", { id: s, className: [d, i].join(" ").trim(), "data-pui-interactive": "true", ref: n, ...m, children: e === "determinate" && /* @__PURE__ */ r("div", { className: "Progress__bar", style: { width: `${o}%` } }) });
}, h = f(g);
export {
  h as Progress
};
