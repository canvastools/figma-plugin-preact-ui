import "./index.es42.css";
import { jsx as i } from "./index.es129.js";
import { useState as y, useEffect as k } from "preact/hooks";
/* empty css            */
import { typedForwardRef as N } from "./index.es131.js";
import { bem as x } from "./index.es62.js";
const B = ({ id: p, className: m, checked: o, defaultChecked: u = !1, disabled: r = !1, onCheckedChange: s, ...f }, d) => {
  const c = o !== void 0, [a, e] = y(c ? !!o : !!u);
  k(() => {
    c && e(!!o);
  }, [c, o]);
  const h = x("Switch", void 0, {
    checked: a,
    disabled: r
  }), w = (t) => {
    var l;
    if (r) {
      (l = t.preventDefault) == null || l.call(t);
      return;
    }
    const n = t.currentTarget.checked;
    c || e(n), s == null || s({
      event: t,
      checked: n
    });
  }, S = (t) => {
    t.stopPropagation();
  }, _ = (t) => {
    (t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  };
  return /* @__PURE__ */ i("div", { id: p, className: [h, m].join(" ").trim(), "data-pui-interactive": "true", ...f, ref: d, children: /* @__PURE__ */ i("div", { className: "Switch__input", children: [
    /* @__PURE__ */ i(
      "input",
      {
        className: "Switch__input-native",
        type: "checkbox",
        checked: a,
        disabled: r,
        onClick: S,
        onChange: w,
        onKeyDown: _
      }
    ),
    /* @__PURE__ */ i("div", { className: "Switch__control" })
  ] }) });
}, T = N(B);
export {
  T as Switch
};
