import { useRef as h, useCallback as q, Children as D, useEffect as G } from "preact/compat";
import { jsx as J } from "./index.es143.js";
import B from "./index.es238.js";
import R from "./index.es239.js";
var K = function(t, i) {
  var r = {};
  for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && i.indexOf(e) < 0 && (r[e] = t[e]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, e = Object.getOwnPropertySymbols(t); s < e.length; s++)
      i.indexOf(e[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, e[s]) && (r[e[s]] = t[e[s]]);
  return r;
};
const Q = typeof window < "u", Y = Q && "MutationObserver" in window;
function P(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Z(t) {
  let i = t.parentElement;
  for (; i; ) {
    const { overflow: r } = window.getComputedStyle(i);
    if (r.split(" ").every((e) => e === "auto" || e === "scroll"))
      return i;
    i = i.parentElement;
  }
  return document.documentElement;
}
function T({ axis: t, container: i, element: r, invertAxis: e, scrollContainer: s, secondary: l, spacing: o }) {
  const w = window.getComputedStyle(r), u = i.parentElement;
  if (!u)
    return;
  const d = B(u, s), p = B(u, document.documentElement), m = t === "x", a = m ? "left" : "top", n = m ? "right" : "bottom", c = m ? "width" : "height", y = `overflow${P(a)}`, S = `overflow${P(n)}`, v = `scroll${P(a)}`, x = P(c), b = `offset${x}`, j = `client${x}`, M = `min-${c}`, L = s[b] - s[j], N = typeof o == "object" ? o[a] : o;
  let O = -Math.max(d[y], p[y] + document.documentElement[v]) - N;
  const U = typeof o == "object" ? o[n] : o;
  let g = -Math.max(d[S], p[S] - document.documentElement[v]) - U - L;
  l && (O += u[j], g += u[j]);
  const V = r[b];
  function A() {
    r.style[a] = "auto", r.style[n] = l ? "0" : "100%";
  }
  function C() {
    r.style[a] = l ? "0" : "100%", r.style[n] = "auto";
  }
  function F(z, E) {
    const f = V <= z;
    return f && E(), f;
  }
  function I() {
    return F(O, A);
  }
  function W() {
    return F(g, C);
  }
  function X() {
    const z = O > g, E = w.getPropertyValue(M), f = E ? Number.parseInt(E, 10) : null;
    function H(_) {
      R(!f || _ >= f, `<Fit />'s child will not fit anywhere with its current ${M} of ${f}px.`);
      const k = Math.max(_, f || 0);
      R(!1, `<Fit />'s child needed to have its ${c} decreased to ${k}px.`), r.style[c] = `${k}px`;
    }
    z ? (H(O), A()) : (H(g), C());
  }
  let $;
  e ? $ = I() || W() : $ = W() || I(), $ || X();
}
function tt(t) {
  T(t);
}
function et(t) {
  T(Object.assign(Object.assign({}, t), { axis: t.axis === "x" ? "y" : "x", secondary: !0 }));
}
function nt(t) {
  const { invertAxis: i, invertSecondaryAxis: r } = t, e = K(t, ["invertAxis", "invertSecondaryAxis"]);
  tt(Object.assign(Object.assign({}, e), { invertAxis: i })), et(Object.assign(Object.assign({}, e), { invertAxis: r }));
}
function ct({ children: t, invertAxis: i, invertSecondaryAxis: r, mainAxis: e = "y", spacing: s = 8 }) {
  const l = h(void 0), o = h(void 0), w = h(void 0), u = h(void 0), d = h(void 0), p = q(() => {
    if (!d.current || !l.current || !o.current)
      return;
    const n = o.current.clientWidth, c = o.current.clientHeight;
    if (w.current === n && u.current === c)
      return;
    w.current = n, u.current = c;
    const y = l.current.parentElement;
    if (!y)
      return;
    const S = window.getComputedStyle(o.current), { position: v } = S;
    v !== "absolute" && (o.current.style.position = "absolute");
    const x = window.getComputedStyle(y), { position: b } = x;
    b !== "relative" && b !== "absolute" && (y.style.position = "relative"), nt({
      axis: e,
      container: l.current,
      element: o.current,
      invertAxis: i,
      invertSecondaryAxis: r,
      scrollContainer: d.current,
      spacing: s
    });
  }, [i, r, e, s]), m = D.only(t);
  G(() => {
    p();
    function n() {
      p();
    }
    Y && o.current && new MutationObserver(n).observe(o.current, {
      attributes: !0,
      attributeFilter: ["class", "style"]
    });
  }, [p]);
  function a(n) {
    !n || !(n instanceof HTMLElement) || (o.current = n, d.current = Z(n));
  }
  return J("span", { ref: (n) => {
    if (!n)
      return;
    l.current = n;
    const c = n == null ? void 0 : n.firstElementChild;
    a(c);
  }, style: { display: "contents" }, children: m });
}
export {
  ct as default
};
