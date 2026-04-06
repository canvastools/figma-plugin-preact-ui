import "./index.es53.css";
import { jsx as Y } from "./index.es143.js";
import { useRef as j, useEffect as x } from "preact/hooks";
/* empty css            */
import { typedForwardRef as A } from "./index.es145.js";
import { bem as D } from "./index.es62.js";
const H = ({ id: L, className: M, minWidth: u, minHeight: c, maxWidth: a, maxHeight: d, onResize: o, ...W }, r) => {
  const g = D("WindowResizer", void 0, void 0), l = j(null), F = (e) => {
    if (l.current = e, typeof r == "function")
      r(e);
    else if (r) {
      const i = r;
      i.current = e;
    }
  };
  return x(() => {
    const e = l.current;
    if (!e) return;
    let i, v, p, f, t = null, w = 0, h = 0;
    const R = () => {
      o == null || o({ width: w, height: h }), t = null;
    }, s = (n) => {
      const y = Math.min(Math.max(p + n.clientX - i, u), a), X = Math.min(Math.max(f + n.clientY - v, c), d);
      w = y, h = X, t === null && (t = requestAnimationFrame(R));
    }, m = () => {
      document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", m), t !== null && (cancelAnimationFrame(t), t = null);
    }, E = (n) => {
      n.preventDefault(), i = n.clientX, v = n.clientY, p = window.innerWidth, f = window.innerHeight, document.addEventListener("mousemove", s), document.addEventListener("mouseup", m);
    };
    return e.addEventListener("mousedown", E), () => {
      e.removeEventListener("mousedown", E), document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", m);
    };
  }, [u, c, a, d, o]), /* @__PURE__ */ Y(
    "div",
    {
      id: L ?? "WindowResizer",
      className: [g, M].join(" ").trim(),
      "data-pui-interactive": "true",
      "data-overlay-keep-open": "true",
      ...W,
      ref: F
    }
  );
}, C = A(H);
export {
  C as WindowResizer
};
