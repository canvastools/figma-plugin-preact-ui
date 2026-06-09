import "./index.es42.css";
import { jsx as c } from "./index.es178.js";
import { useState as k, useEffect as N } from "preact/hooks";
/* empty css            */
import { typedForwardRef as x } from "./index.es180.js";
import { bem as B } from "./index.es63.js";
const D = ({ id: m, className: u, checked: o, defaultChecked: f = !1, disabled: r = !1, tabIndex: a, onCheckedChange: s, ...d }, h) => {
  const i = o !== void 0, [e, n] = k(i ? !!o : !!f);
  N(() => {
    i && n(!!o);
  }, [i, o]);
  const w = B("Switch", void 0, {
    checked: e,
    disabled: r
  }), S = (t) => {
    var p;
    if (r) {
      (p = t.preventDefault) == null || p.call(t);
      return;
    }
    const l = t.currentTarget.checked;
    i || n(l), s == null || s({
      event: t,
      checked: l
    });
  }, _ = (t) => {
    t.stopPropagation();
  }, y = (t) => {
    (t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  };
  return /* @__PURE__ */ c("div", { id: m, className: [w, u].join(" ").trim(), "data-pui-interactive": "true", ...d, ref: h, children: /* @__PURE__ */ c("div", { className: "Switch__input", children: [
    /* @__PURE__ */ c(
      "input",
      {
        className: "Switch__input-native",
        type: "checkbox",
        checked: e,
        disabled: r,
        ...a !== void 0 ? { tabIndex: a } : {},
        onClick: _,
        onChange: S,
        onKeyDown: y
      }
    ),
    /* @__PURE__ */ c("div", { className: "Switch__control" })
  ] }) });
}, v = x(D);
export {
  v as Switch
};
