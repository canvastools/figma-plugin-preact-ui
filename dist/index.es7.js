import { jsx as v } from "./index.es178.js";
import { useState as a, useEffect as c } from "preact/hooks";
import { ButtonIcon as I } from "./index.es6.js";
import { typedForwardRef as B } from "./index.es180.js";
const k = ({ selected: t, defaultSelected: f = !1, onSelectedChange: o, ...m }, p) => {
  const [e, s] = a(f), i = t !== void 0 ? t : e, u = (n) => {
    const r = !i;
    t === void 0 && s(r), n.event.stopPropagation(), o == null || o({ event: n.event, selected: r });
  };
  return c(() => {
    t !== void 0 && s(t);
  }, [t]), /* @__PURE__ */ v(I, { ref: p, ...m, selected: i, onClick: u });
}, j = B(k);
export {
  j as ButtonIconToggle
};
