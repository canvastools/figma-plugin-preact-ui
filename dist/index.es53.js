import "./index.es53.css";
import { jsx as j } from "./index.es129.js";
import { useRef as x, useEffect as y } from "preact/hooks";
/* empty css            */
import { typedForwardRef as A } from "./index.es131.js";
import { bem as D } from "./index.es62.js";
const H = ({ id: L, className: M, minWidth: u, minHeight: c, maxWidth: d, maxHeight: a, onResize: o, ...W }, r) => {
  const g = D("WindowResizer", void 0, void 0), l = x(null), F = (e) => {
    if (l.current = e, typeof r == "function")
      r(e);
    else if (r) {
      const i = r;
      i.current = e;
    }
  };
  return y(() => {
    const e = l.current;
    if (!e) return;
    let i, v, p, f, t = null, w = 0, h = 0;
    const R = () => {
      o == null || o({ width: w, height: h }), t = null;
    }, s = (n) => {
      const X = Math.min(Math.max(p + n.clientX - i, u), d), Y = Math.min(Math.max(f + n.clientY - v, c), a);
      w = X, h = Y, t === null && (t = requestAnimationFrame(R));
    }, m = () => {
      document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", m), t !== null && (cancelAnimationFrame(t), t = null);
    }, E = (n) => {
      n.preventDefault(), i = n.clientX, v = n.clientY, p = window.innerWidth, f = window.innerHeight, document.addEventListener("mousemove", s), document.addEventListener("mouseup", m);
    };
    return e.addEventListener("mousedown", E), () => {
      e.removeEventListener("mousedown", E), document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", m);
    };
  }, [u, c, d, a, o]), /* @__PURE__ */ j(
    "div",
    {
      id: L ?? "WindowResizer",
      className: [g, M].join(" ").trim(),
      "data-pui-interactive": "true",
      ...W,
      ref: F
    }
  );
}, U = A(H);
export {
  U as WindowResizer
};
