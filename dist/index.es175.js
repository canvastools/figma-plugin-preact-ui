import { useState as be, useRef as W, useEffect as q, useCallback as d, useMemo as Ce, createElement as M, createPortal as _e } from "preact/compat";
import { jsx as o } from "./index.es129.js";
import { clsx as S } from "./index.es180.js";
import ve from "./index.es208.js";
import Pe from "./index.es209.js";
import ge from "./index.es210.js";
import ye from "./index.es211.js";
const n = "react-time-picker", $e = ["mousedown", "focusin", "touchstart"], j = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 19,
  height: 19,
  viewBox: "0 0 19 19",
  stroke: "black",
  strokeWidth: 2
}, Ae = o("svg", { ...j, "aria-hidden": "true", className: `${n}__clock-button__icon ${n}__button__icon`, fill: "none", children: [o("circle", { cx: "9.5", cy: "9.5", r: "7.5" }), o("path", { d: "M9.5 4.5 v5 h4" })] }), xe = o("svg", { ...j, "aria-hidden": "true", className: `${n}__clear-button__icon ${n}__button__icon`, children: [o("line", { x1: "4", x2: "15", y1: "4", y2: "15" }), o("line", { x1: "15", x2: "4", y1: "4", y2: "15" })] });
function Te(v) {
  const { amPmAriaLabel: B, autoFocus: G, className: K, clearAriaLabel: R, clearIcon: i = xe, clockAriaLabel: z, clockIcon: u = Ae, closeClock: H = !0, "data-testid": J, hourAriaLabel: Q, hourPlaceholder: U, disableClock: P, disabled: l, format: V, id: X, isOpen: m = null, locale: g, maxTime: Y, maxDetail: Z = "minute", minTime: ee, minuteAriaLabel: oe, minutePlaceholder: ne, name: te = "time", nativeInputAriaLabel: ce, onClockClose: p, onClockOpen: y, onChange: $, onFocus: A, onInvalidChange: ae, openClockOnFocus: se = !0, required: re, value: f, secondAriaLabel: le, secondPlaceholder: ie, shouldCloseClock: k, shouldOpenClock: x, ...w } = v, [c, h] = be(m), N = W(null), F = W(null);
  q(() => {
    h(m);
  }, [m]);
  function L({ reason: e }) {
    x && !x({ reason: e }) || (h(!0), y && y());
  }
  const s = d(({ reason: e }) => {
    k && !k({ reason: e }) || (h(!1), p && p());
  }, [p, k]);
  function ue() {
    c ? s({ reason: "buttonClick" }) : L({ reason: "buttonClick" });
  }
  function E(e, t = H) {
    t && s({ reason: "select" }), $ && $(e);
  }
  function de(e) {
    A && A(e), // Internet Explorer still fires onFocus on disabled elements
    !(l || c || !se || e.target.dataset.select === "true") && L({ reason: "focus" });
  }
  const b = d((e) => {
    e.key === "Escape" && s({ reason: "escape" });
  }, [s]);
  function me() {
    E(null);
  }
  function O(e) {
    e.stopPropagation();
  }
  const C = d((e) => {
    const { current: t } = N, { current: a } = F, r = "composedPath" in e ? e.composedPath()[0] : e.target;
    r && t && !t.contains(r) && (!a || !a.contains(r)) && s({ reason: "outsideAction" });
  }, [s]), _ = d((e = c) => {
    for (const t of $e)
      e ? document.addEventListener(t, C) : document.removeEventListener(t, C);
    e ? document.addEventListener("keydown", b) : document.removeEventListener("keydown", b);
  }, [c, C, b]);
  q(() => (_(), () => {
    _(!1);
  }), [_]);
  function pe() {
    const [e] = Array.isArray(f) ? f : [f], t = {
      amPmAriaLabel: B,
      hourAriaLabel: Q,
      minuteAriaLabel: oe,
      nativeInputAriaLabel: ce,
      secondAriaLabel: le
    }, a = {
      hourPlaceholder: U,
      minutePlaceholder: ne,
      secondPlaceholder: ie
    };
    return o("div", { className: `${n}__wrapper`, children: [o(ye, { ...t, ...a, autoFocus: G, className: `${n}__inputGroup`, disabled: l, format: V, isClockOpen: c, locale: g, maxDetail: Z, maxTime: Y, minTime: ee, name: te, onChange: E, onInvalidChange: ae, required: re, value: e }), i !== null && o("button", { "aria-label": R, className: `${n}__clear-button ${n}__button`, disabled: l, onClick: me, onFocus: O, type: "button", children: typeof i == "function" ? M(i) : i }), u !== null && !P && o("button", { "aria-expanded": c || !1, "aria-label": z, className: `${n}__clock-button ${n}__button`, disabled: l, onClick: ue, onFocus: O, type: "button", children: typeof u == "function" ? M(u) : u })] });
  }
  function fe() {
    if (c === null || P)
      return null;
    const { clockProps: e, portalContainer: t, value: a } = v, r = `${n}__clock`, I = S(r, `${r}--${c ? "open" : "closed"}`), [he] = Array.isArray(a) ? a : [a], T = o(Pe, { locale: g, value: he, ...e });
    return t ? _e(o("div", { ref: F, className: I, children: T }), t) : o(ge, { children: o("div", { ref: (D) => {
      D && !c && D.removeAttribute("style");
    }, className: I, children: T }) });
  }
  const ke = Ce(
    () => ve(w),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [w]
  );
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
    o("div", { className: S(n, `${n}--${c ? "open" : "closed"}`, `${n}--${l ? "disabled" : "enabled"}`, K), "data-testid": J, id: X, ...ke, onFocus: de, ref: N, children: [pe(), fe()] })
  );
}
export {
  Te as default
};
