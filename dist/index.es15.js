import "./index.es15.css";
import { jsx as t } from "./index.es143.js";
import { useState as p, useEffect as u } from "preact/hooks";
/* empty css            */
import { typedForwardRef as f } from "./index.es145.js";
import { bem as d } from "./index.es62.js";
const v = ({ id: i, className: r, delay: e = 0, children: s, ...m }, a) => {
  const [n, c] = p(!1);
  u(() => {
    const o = window.setTimeout(() => {
      c(!0);
    }, e);
    return () => clearTimeout(o);
  }, [e]);
  const l = d("Fog", void 0, { visible: n });
  return /* @__PURE__ */ t("div", { id: i, className: [l, r].join(" ").trim(), ref: a, ...m, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "Fog__overlay",
        onClick: (o) => {
          o.stopPropagation(), o.preventDefault();
        }
      }
    ),
    s && /* @__PURE__ */ t("div", { className: "Fog__children", children: s })
  ] });
}, w = f(v);
export {
  w as Fog
};
