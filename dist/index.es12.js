import "./index.es12.css";
import { jsx as f } from "./index.es203.js";
import { toChildArray as u, isValidElement as c, cloneElement as C } from "preact";
/* empty css            */
import { typedForwardRef as h } from "./index.es205.js";
import { bem as g } from "./index.es65.js";
const v = ({ id: e, className: l, groupFocus: a = !1, fullWidth: i = !1, disabled: n = !1, children: s, ...m }, p) => {
  const o = u(s).filter(c), d = g("ControlGroup", void 0, {
    groupFocus: !!a,
    fullWidth: !!i,
    disabled: !!n
  });
  return /* @__PURE__ */ f("div", { id: e, className: [d, l].join(" ").trim(), "data-pui-interactive": "true", ref: p, ...m, children: o.map(
    (r, t) => C(r, {
      ...r.props,
      grouped: t === 0 ? "first" : t === o.length - 1 ? "last" : "middle"
    })
  ) });
}, A = h(v);
export {
  A as ControlGroup
};
