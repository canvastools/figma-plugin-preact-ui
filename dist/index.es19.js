import "./index.es19.css";
import { jsx as At } from "./index.es129.js";
import { useListContext as Dt } from "./index.es20.js";
import { useRef as Y, useEffect as Q } from "preact/hooks";
/* empty css            */
import { typedForwardRef as St } from "./index.es131.js";
import { bem as Ct } from "./index.es62.js";
const yt = ({ id: st, className: nt, children: it, ...rt }, B) => {
  const { reorderItems: at, registerRootElement: x, getPathForId: j } = Dt(), q = Y(null), E = Y(null), h = Y(null), w = Y({ el: null, pos: null });
  Q(() => {
    const t = q.current;
    if (!t) return;
    const n = t.closest(".ListItem"), c = n == null ? void 0 : n.getAttribute("data-nesting-level"), m = c ? parseInt(c, 10) : 0, y = n ? m + 1 : 0;
    try {
      t.style.setProperty("--level", String(y));
    } catch {
    }
  }, []), Q(() => {
    const t = q.current;
    if (!x || !t) return;
    const n = x(t);
    return h.current = n, () => {
      var c;
      (c = h.current) == null || c.call(h), h.current = null;
    };
  }, [x]);
  const U = () => {
    const t = q.current;
    if (!t) return;
    t.querySelectorAll(".ListItem").forEach((c) => {
      c.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self",
        "ListItem_drop-parent"
      );
    }), w.current = { el: null, pos: null }, E.current = null;
  };
  Q(() => {
    const t = () => {
      U();
    };
    return document.addEventListener("resetDragStates", t), document.addEventListener("dragend", t), () => {
      document.removeEventListener("resetDragStates", t), document.removeEventListener("dragend", t);
    };
  }, []);
  const ot = (t) => {
    const n = t.currentTarget, c = t.relatedTarget;
    c && n.contains(c) || U();
  }, ct = (t) => {
    var W, X;
    const n = t.currentTarget;
    t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move");
    const c = Array.from(n.children).filter(
      (s) => s.classList.contains("ListItem")
    ), m = t.clientY, y = n.closest(".ListItem");
    if (y) {
      y.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      );
      const s = (W = y.parentElement) == null ? void 0 : W.closest(".ListContainer");
      s && Array.from(s.children).filter(
        (f) => f.classList.contains("ListItem")
      ).forEach((f) => {
        f.classList.remove(
          "ListItem_drag-over",
          "ListItem_drag-above",
          "ListItem_drag-below",
          "ListItem_drag-inside",
          "ListItem_drag-self"
        );
      });
    }
    let P = [];
    const g = window.__puiDraggingIds;
    if (Array.isArray(g))
      P = g;
    else {
      const s = (X = t.dataTransfer) == null ? void 0 : X.getData("text/plain");
      s && (P = [s]);
    }
    let e = null, l = 1 / 0;
    const _ = 16;
    for (const s of c) {
      const d = s.getAttribute("data-item-id") || "";
      if (!P.includes(d)) continue;
      const f = s.querySelector(".ListItem__content");
      if (!f) continue;
      const a = f.getBoundingClientRect();
      if (m < a.top || m > a.bottom)
        continue;
      const v = a.top + a.height / 2, b = Math.abs(m - v);
      b < l && (l = b, e = s);
    }
    if (e) {
      t.stopPropagation();
      const s = w.current, d = e.querySelector(".ListItem__content");
      if (!d) {
        const et = e.classList.contains("ListItem_drag-over"), K = e.classList.contains("ListItem_drag-self");
        if (et && K && s.el === e && s.pos === "self")
          return;
        s.el && s.el !== e && s.el.classList.remove(
          "ListItem_drag-over",
          "ListItem_drag-above",
          "ListItem_drag-below",
          "ListItem_drag-inside",
          "ListItem_drag-self"
        ), e.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), e.classList.add("ListItem_drag-over", "ListItem_drag-self"), w.current = { el: e, pos: "self" };
        return;
      }
      const f = d.getBoundingClientRect(), a = m - f.top, v = f.height, b = 8, O = 0, k = b, N = Math.max(0, v - b), Z = v + 1;
      let I = "inside";
      const u = a >= O && a <= k, F = a >= N && a <= Z;
      u ? I = "above" : F && (I = "below");
      const H = e.classList.contains("ListItem_has-children"), $ = e.classList.contains("ListItem_collapsed");
      I === "below" && H && !$ && (I = "inside");
      const R = !0, J = !0, z = I === "above", G = I === "below", M = e.classList.contains("ListItem_drag-over"), _t = e.classList.contains("ListItem_drag-self"), vt = e.classList.contains("ListItem_drag-above"), bt = e.classList.contains("ListItem_drag-below"), ht = e.classList.contains("ListItem_drag-inside");
      if (s.el === e && s.pos === "self" && M === R && _t === J && vt === z && bt === G && ht === !1)
        return;
      s.el && s.el !== e ? s.el.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      ) : s.el === e && s.el.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), e.classList.add("ListItem_drag-over", "ListItem_drag-self"), I === "above" ? e.classList.add("ListItem_drag-above") : I === "below" && e.classList.add("ListItem_drag-below"), w.current = { el: e, pos: "self" };
      const wt = e.getAttribute("data-accepts-children") !== "false", tt = n.closest(".ListItem");
      let C;
      I === "inside" && wt ? C = e : tt ? C = tt : C = e, (E.current !== C || C && !C.classList.contains("ListItem_drop-parent")) && (document.querySelectorAll(".ListItem_drop-parent").forEach((K) => {
        K.classList.remove("ListItem_drop-parent");
      }), C && C.classList.add("ListItem_drop-parent"), E.current = C);
      return;
    }
    let i = null, p = null, o = 1 / 0;
    for (const s of c) {
      const d = s.getAttribute("data-item-id") || "";
      if (P.includes(d))
        continue;
      const f = s.querySelector(".ListItem__content");
      if (!f) continue;
      const a = f.getBoundingClientRect();
      if (m < a.top || m > a.bottom + _)
        continue;
      const v = m - a.top, b = a.height, O = 8, k = 0, N = O, Z = Math.max(0, b - O), I = b + 1;
      let u;
      const F = v >= k && v <= N, H = v >= Z && v <= I, R = s.getAttribute("data-accepts-children") !== "false", J = s.classList.contains("ListItem_has-children"), z = s.classList.contains("ListItem_collapsed");
      F ? u = "above" : H ? u = "below" : R ? u = "inside" : u = v < b / 2 ? "above" : "below", u === "below" && J && !z && R && (u = "inside");
      const G = u === "above" ? a.top : u === "below" ? a.bottom : a.top + b / 2, M = Math.abs(m - G);
      M < o && (o = M, i = s, p = u);
    }
    if (!i || !p) {
      const s = w.current;
      s.el && (s.el.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      ), w.current = { el: null, pos: null });
      return;
    }
    const r = w.current, D = i.getAttribute("data-accepts-children") !== "false", L = p === "inside" && !D ? "below" : p, T = !0, mt = L === "above", Lt = L === "below", ft = L === "inside", gt = i.classList.contains("ListItem_drag-over"), pt = i.classList.contains("ListItem_drag-above"), It = i.classList.contains("ListItem_drag-below"), ut = i.classList.contains("ListItem_drag-inside");
    if (r.el === i && r.pos === p && gt === T && pt === mt && It === Lt && ut === ft) {
      const s = n.closest(".ListItem"), d = p === "inside" ? i : s || null;
      E.current !== d && (document.querySelectorAll(".ListItem_drop-parent").forEach((a) => {
        a.classList.remove("ListItem_drop-parent");
      }), d && d.classList.add("ListItem_drop-parent"), E.current = d), w.current = { el: i, pos: p }, t.stopPropagation();
      return;
    }
    r.el && r.el !== i ? r.el.classList.remove(
      "ListItem_drag-over",
      "ListItem_drag-above",
      "ListItem_drag-below",
      "ListItem_drag-inside",
      "ListItem_drag-self"
    ) : r.el === i && r.el.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), i.classList.add("ListItem_drag-over"), L === "above" ? i.classList.add("ListItem_drag-above") : L === "below" ? i.classList.add("ListItem_drag-below") : L === "inside" && i.classList.add("ListItem_drag-inside");
    const V = n.closest(".ListItem");
    let S;
    p === "inside" ? S = i : V ? S = V : S = i, (E.current !== S || S && !S.classList.contains("ListItem_drop-parent")) && (document.querySelectorAll(".ListItem_drop-parent").forEach((d) => {
      d.classList.remove("ListItem_drop-parent");
    }), S && S.classList.add("ListItem_drop-parent"), E.current = S), w.current = { el: i, pos: p }, t.stopPropagation();
  }, lt = (t) => {
    var y, P;
    t.preventDefault(), t.stopPropagation();
    let n = null;
    const c = window.__puiDraggingIds;
    Array.isArray(c) && (n = c);
    const m = (y = t.dataTransfer) == null ? void 0 : y.getData("application/json");
    if (m)
      try {
        const g = JSON.parse(m);
        g && Array.isArray(g.ids) && (n = g.ids);
      } catch {
      }
    if (!n) {
      const g = (P = t.dataTransfer) == null ? void 0 : P.getData("text/plain");
      g && (n = [g]);
    }
    if (n && n.length) {
      const g = t.currentTarget, e = Array.from(g.children);
      let l = e.length, _ = "below";
      for (let o = 0; o < e.length; o++) {
        const r = e[o];
        if (r.classList.contains("ListItem_drag-over")) {
          const D = r.getAttribute("data-accepts-children") !== "false";
          if (r.classList.contains("ListItem_drag-above"))
            _ = "above", l = o;
          else if (r.classList.contains("ListItem_drag-below")) {
            const L = r.querySelector(".ListItem__sub-items") !== null, T = r.classList.contains("ListItem_collapsed");
            L && !T && D ? (_ = "inside", l = 0) : (_ = "below", l = o + 1);
          } else r.classList.contains("ListItem_drag-inside") && (r.getAttribute("data-accepts-children") !== "false" ? (_ = "inside", l = 0) : (_ = "below", l = o + 1));
          break;
        }
      }
      let i = [];
      for (let o = 0; o < e.length; o++) {
        const r = e[o];
        if (r.classList.contains("ListItem_drag-over")) {
          const A = r.getAttribute("data-item-id") || "";
          if (A && n.includes(A)) {
            const L = new CustomEvent("resetDragStates");
            document.dispatchEvent(L);
            return;
          }
          const D = A ? (j == null ? void 0 : j(A)) || [] : [];
          if (_ === "inside")
            i = D, l = 0;
          else if (D.length) {
            const L = D.slice(0, -1), T = D[D.length - 1];
            i = L, l = _ === "above" ? T : T + 1;
          }
          break;
        }
      }
      const p = new CustomEvent("resetDragStates");
      if (document.dispatchEvent(p), _ !== "inside")
        for (let o = 0; o < e.length; o++) {
          const r = e[o];
          if (r.classList.contains("ListItem_drag-above") || r.classList.contains("ListItem_drag-below")) {
            const A = r.getAttribute("data-item-id");
            if (A && n.includes(A)) return;
            break;
          }
        }
      l < 0 && (l = 0), l > e.length && (l = e.length), at(n, l, i.length ? i : void 0);
    }
  }, dt = Ct("ListContainer", void 0, void 0);
  return /* @__PURE__ */ At(
    "div",
    {
      id: st,
      className: [dt, nt].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (t) => {
        q.current = t, h.current && (h.current(), h.current = null), t && x && (h.current = x(t)), typeof B == "function" ? B(t) : B && (B.current = t);
      },
      ...rt,
      onDragOver: ct,
      onDrop: lt,
      onDragLeave: ot,
      children: it
    }
  );
}, Rt = St(yt);
export {
  Rt as ListContainer
};
