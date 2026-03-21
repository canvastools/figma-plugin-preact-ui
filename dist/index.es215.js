import "preact/compat";
import { jsx as e } from "./index.es129.js";
import { getHours as m } from "./index.es197.js";
import { clsx as D } from "./index.es180.js";
import { convert24to12 as n } from "./index.es222.js";
import { getAmPmLabels as L } from "./index.es223.js";
function w({ ariaLabel: i, autoFocus: s, className: a, disabled: d, inputRef: p, locale: u, maxTime: t, minTime: r, onChange: c, onKeyDown: f, required: b, value: o }) {
  const h = r ? n(m(r))[1] === "pm" : !1, _ = t ? n(m(t))[1] === "am" : !1, l = "amPm", [g, v] = L(u);
  return e("select", {
    "aria-label": i,
    // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
    autoFocus: s,
    className: D(`${a}__input`, `${a}__${l}`),
    "data-input": "true",
    "data-select": "true",
    disabled: d,
    name: l,
    onChange: c,
    onKeyDown: f,
    // Assertion is needed for React 18 compatibility
    ref: p,
    required: b,
    value: o !== null ? o : "",
    children: [!o && e("option", { value: "", children: "--" }), e("option", { disabled: h, value: "am", children: g }), e("option", { disabled: _, value: "pm", children: v })]
  });
}
export {
  w as default
};
