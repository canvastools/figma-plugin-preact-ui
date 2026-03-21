import "./index.es12.css";
import { jsx as d } from "./index.es129.js";
import { toChildArray as u, isValidElement as c, cloneElement as f } from "preact";
/* empty css            */
import { typedForwardRef as C } from "./index.es131.js";
import { bem as h } from "./index.es62.js";
const g = ({ id: e, className: l, groupFocus: i = !1, fullWidth: n = !1, children: a, ...m }, p) => {
  const o = u(a).filter(c), s = h("ControlGroup", void 0, {
    groupFocus: !!i,
    fullWidth: !!n
  });
  return /* @__PURE__ */ d("div", { id: e, className: [s, l].join(" ").trim(), "data-pui-interactive": "true", ref: p, ...m, children: o.map(
    (r, t) => f(r, {
      ...r.props,
      grouped: t === 0 ? "first" : t === o.length - 1 ? "last" : "middle"
    })
  ) });
}, B = C(g);
export {
  B as ControlGroup
};
