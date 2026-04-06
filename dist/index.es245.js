import { useLayoutEffect as _, useEffect as I } from "preact/compat";
import { jsx as a } from "./index.es143.js";
import { clsx as b } from "./index.es194.js";
import { updateInputWidth as u, getFontShorthand as K } from "./index.es246.js";
import { Fragment as $ } from "preact";
const l = typeof window < "u", x = l ? _ : I, O = l && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent), W = l && /Firefox/.test(navigator.userAgent);
function k(t) {
  const { target: n } = t;
  O ? requestAnimationFrame(() => n.select()) : n.select();
}
function A(t) {
  if (document.readyState === "complete")
    return;
  function n() {
    u(t);
  }
  window.addEventListener("load", n);
}
function D(t) {
  if (!document.fonts)
    return;
  const n = K(t);
  if (!n || document.fonts.check(n))
    return;
  function i() {
    u(t);
  }
  document.fonts.addEventListener("loadingdone", i);
}
function P(t) {
  if (t && "selectionStart" in t && t.selectionStart !== null && "selectionEnd" in t && t.selectionEnd !== null)
    return t.value.slice(t.selectionStart, t.selectionEnd);
  if ("getSelection" in window) {
    const n = window.getSelection();
    return n == null ? void 0 : n.toString();
  }
  return null;
}
function Z(t) {
  if (t !== null)
    return function(o) {
      if (W)
        return;
      const { key: i, target: e } = o, { value: s } = e, d = i.length === 1 && /\d/.test(i), c = P(e);
      (!d || !(c || s.length < t)) && o.preventDefault();
    };
}
function B({ ariaLabel: t, autoFocus: n, className: o, disabled: i, inputRef: e, max: s, min: d, name: c, nameForClass: h, onChange: p, onKeyDown: L, onKeyUp: f, placeholder: S = "--", required: y, showLeadingZeros: E, step: F, value: r }) {
  x(() => {
    !e || !e.current || (u(e.current), A(e.current), D(e.current));
  }, [e, r]);
  const g = E && r && Number(r) < 10 && (r === "0" || !r.toString().startsWith("0")), w = s ? s.toString().length : null;
  return a($, { children: [g ? a("span", { className: `${o}__leadingZero`, children: "0" }) : null, a("input", {
    "aria-label": t,
    autoComplete: "off",
    // biome-ignore lint/a11y/noAutofocus: This is up to developers' decision
    autoFocus: n,
    className: b(`${o}__input`, `${o}__${h || c}`, g && `${o}__input--hasLeadingZero`),
    "data-input": "true",
    disabled: i,
    inputMode: "numeric",
    max: s,
    min: d,
    name: c,
    onChange: p,
    onFocus: k,
    onKeyDown: L,
    onKeyPress: Z(w),
    onKeyUp: (m) => {
      u(m.target), f && f(m);
    },
    placeholder: S,
    // Assertion is needed for React 18 compatibility
    ref: e,
    required: y,
    step: F,
    type: "number",
    value: r !== null ? r : ""
  })] });
}
export {
  B as default
};
