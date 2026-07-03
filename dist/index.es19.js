import "./index.es19.css";
import { jsx as wt } from "./index.es203.js";
import { useListContext as At } from "./index.es20.js";
import { useRef as G, useEffect as K } from "preact/hooks";
/* empty css            */
import { typedForwardRef as Dt } from "./index.es205.js";
import { bem as St } from "./index.es65.js";
const Ct = ({ id: et, className: st, children: nt, ...it }, T) => {
  const { reorderItems: rt, registerRootElement: O, getPathForId: M } = At(), R = G(null), y = G(null), h = G({ el: null, pos: null });
  K(() => {
    const t = R.current;
    if (!t) return;
    const i = t.closest(".ListItem"), d = i == null ? void 0 : i.getAttribute("data-nesting-level"), m = d ? parseInt(d, 10) : 0, C = i ? m + 1 : 0;
    try {
      t.style.setProperty("--level", String(C));
    } catch {
    }
  }, []), K(() => {
    const t = R.current;
    if (!(!O || !t))
      return O(t);
  }, [O]);
  const Q = () => {
    const t = R.current;
    if (!t) return;
    t.querySelectorAll(".ListItem").forEach((d) => {
      d.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self",
        "ListItem_drop-parent"
      );
    }), h.current = { el: null, pos: null }, y.current = null;
  };
  K(() => {
    const t = () => {
      Q();
    };
    return document.addEventListener("resetDragStates", t), document.addEventListener("dragend", t), () => {
      document.removeEventListener("resetDragStates", t), document.removeEventListener("dragend", t);
    };
  }, []);
  const at = (t) => {
    const i = t.currentTarget, d = t.relatedTarget;
    d && i.contains(d) || Q();
  }, ot = (t) => {
    var V, W;
    const i = t.currentTarget;
    t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move");
    const d = Array.from(i.children).filter(
      (s) => s.classList.contains("ListItem")
    ), m = t.clientY, C = i.closest(".ListItem");
    if (C) {
      C.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      );
      const s = (V = C.parentElement) == null ? void 0 : V.closest(".ListContainer");
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
    let E = [];
    const g = window.__puiDraggingIds;
    if (Array.isArray(g))
      E = g;
    else {
      const s = (W = t.dataTransfer) == null ? void 0 : W.getData("text/plain");
      s && (E = [s]);
    }
    let e = null, c = 1 / 0;
    const _ = 16;
    for (const s of d) {
      const l = s.getAttribute("data-item-id") || "";
      if (!E.includes(l)) continue;
      const f = s.querySelector(".ListItem__content");
      if (!f) continue;
      const a = f.getBoundingClientRect();
      if (m < a.top || m > a.bottom)
        continue;
      const v = a.top + a.height / 2, b = Math.abs(m - v);
      b < c && (c = b, e = s);
    }
    if (e) {
      t.stopPropagation();
      const s = h.current, l = e.querySelector(".ListItem__content");
      if (!l) {
        const tt = e.classList.contains("ListItem_drag-over"), z = e.classList.contains("ListItem_drag-self");
        if (tt && z && s.el === e && s.pos === "self")
          return;
        s.el && s.el !== e && s.el.classList.remove(
          "ListItem_drag-over",
          "ListItem_drag-above",
          "ListItem_drag-below",
          "ListItem_drag-inside",
          "ListItem_drag-self"
        ), e.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), e.classList.add("ListItem_drag-over", "ListItem_drag-self"), h.current = { el: e, pos: "self" };
        return;
      }
      const f = l.getBoundingClientRect(), a = m - f.top, v = f.height, b = 8, x = 0, Y = b, j = Math.max(0, v - b), k = v + 1;
      let I = "inside";
      const u = a >= x && a <= Y, N = a >= j && a <= k;
      u ? I = "above" : N && (I = "below");
      const Z = e.classList.contains("ListItem_has-children"), X = e.classList.contains("ListItem_collapsed");
      I === "below" && Z && !X && (I = "inside");
      const B = !0, F = !0, H = I === "above", J = I === "below", q = e.classList.contains("ListItem_drag-over"), ut = e.classList.contains("ListItem_drag-self"), _t = e.classList.contains("ListItem_drag-above"), vt = e.classList.contains("ListItem_drag-below"), bt = e.classList.contains("ListItem_drag-inside");
      if (s.el === e && s.pos === "self" && q === B && ut === F && _t === H && vt === J && bt === !1)
        return;
      s.el && s.el !== e ? s.el.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      ) : s.el === e && s.el.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), e.classList.add("ListItem_drag-over", "ListItem_drag-self"), I === "above" ? e.classList.add("ListItem_drag-above") : I === "below" && e.classList.add("ListItem_drag-below"), h.current = { el: e, pos: "self" };
      const ht = e.getAttribute("data-accepts-children") !== "false", $ = i.closest(".ListItem");
      let S;
      I === "inside" && ht ? S = e : $ ? S = $ : S = e, (y.current !== S || S && !S.classList.contains("ListItem_drop-parent")) && (document.querySelectorAll(".ListItem_drop-parent").forEach((z) => {
        z.classList.remove("ListItem_drop-parent");
      }), S && S.classList.add("ListItem_drop-parent"), y.current = S);
      return;
    }
    let n = null, p = null, o = 1 / 0;
    for (const s of d) {
      const l = s.getAttribute("data-item-id") || "";
      if (E.includes(l))
        continue;
      const f = s.querySelector(".ListItem__content");
      if (!f) continue;
      const a = f.getBoundingClientRect();
      if (m < a.top || m > a.bottom + _)
        continue;
      const v = m - a.top, b = a.height, x = 8, Y = 0, j = x, k = Math.max(0, b - x), I = b + 1;
      let u;
      const N = v >= Y && v <= j, Z = v >= k && v <= I, B = s.getAttribute("data-accepts-children") !== "false", F = s.classList.contains("ListItem_has-children"), H = s.classList.contains("ListItem_collapsed");
      N ? u = "above" : Z ? u = "below" : B ? u = "inside" : u = v < b / 2 ? "above" : "below", u === "below" && F && !H && B && (u = "inside");
      const J = u === "above" ? a.top : u === "below" ? a.bottom : a.top + b / 2, q = Math.abs(m - J);
      q < o && (o = q, n = s, p = u);
    }
    if (!n || !p) {
      const s = h.current;
      s.el && (s.el.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      ), h.current = { el: null, pos: null });
      return;
    }
    const r = h.current, A = n.getAttribute("data-accepts-children") !== "false", L = p === "inside" && !A ? "below" : p, P = !0, dt = L === "above", mt = L === "below", Lt = L === "inside", ft = n.classList.contains("ListItem_drag-over"), gt = n.classList.contains("ListItem_drag-above"), pt = n.classList.contains("ListItem_drag-below"), It = n.classList.contains("ListItem_drag-inside");
    if (r.el === n && r.pos === p && ft === P && gt === dt && pt === mt && It === Lt) {
      const s = i.closest(".ListItem"), l = p === "inside" ? n : s || null;
      y.current !== l && (document.querySelectorAll(".ListItem_drop-parent").forEach((a) => {
        a.classList.remove("ListItem_drop-parent");
      }), l && l.classList.add("ListItem_drop-parent"), y.current = l), h.current = { el: n, pos: p }, t.stopPropagation();
      return;
    }
    r.el && r.el !== n ? r.el.classList.remove(
      "ListItem_drag-over",
      "ListItem_drag-above",
      "ListItem_drag-below",
      "ListItem_drag-inside",
      "ListItem_drag-self"
    ) : r.el === n && r.el.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), n.classList.add("ListItem_drag-over"), L === "above" ? n.classList.add("ListItem_drag-above") : L === "below" ? n.classList.add("ListItem_drag-below") : L === "inside" && n.classList.add("ListItem_drag-inside");
    const U = i.closest(".ListItem");
    let D;
    p === "inside" ? D = n : U ? D = U : D = n, (y.current !== D || D && !D.classList.contains("ListItem_drop-parent")) && (document.querySelectorAll(".ListItem_drop-parent").forEach((l) => {
      l.classList.remove("ListItem_drop-parent");
    }), D && D.classList.add("ListItem_drop-parent"), y.current = D), h.current = { el: n, pos: p }, t.stopPropagation();
  }, ct = (t) => {
    var C, E;
    t.preventDefault(), t.stopPropagation();
    let i = null;
    const d = window.__puiDraggingIds;
    Array.isArray(d) && (i = d);
    const m = (C = t.dataTransfer) == null ? void 0 : C.getData("application/json");
    if (m)
      try {
        const g = JSON.parse(m);
        g && Array.isArray(g.ids) && (i = g.ids);
      } catch {
      }
    if (!i) {
      const g = (E = t.dataTransfer) == null ? void 0 : E.getData("text/plain");
      g && (i = [g]);
    }
    if (i && i.length) {
      const g = t.currentTarget, e = Array.from(g.children);
      let c = e.length, _ = "below";
      for (let o = 0; o < e.length; o++) {
        const r = e[o];
        if (r.classList.contains("ListItem_drag-over")) {
          const A = r.getAttribute("data-accepts-children") !== "false";
          if (r.classList.contains("ListItem_drag-above"))
            _ = "above", c = o;
          else if (r.classList.contains("ListItem_drag-below")) {
            const L = r.querySelector(".ListItem__sub-items") !== null, P = r.classList.contains("ListItem_collapsed");
            L && !P && A ? (_ = "inside", c = 0) : (_ = "below", c = o + 1);
          } else r.classList.contains("ListItem_drag-inside") && (r.getAttribute("data-accepts-children") !== "false" ? (_ = "inside", c = 0) : (_ = "below", c = o + 1));
          break;
        }
      }
      let n = [];
      for (let o = 0; o < e.length; o++) {
        const r = e[o];
        if (r.classList.contains("ListItem_drag-over")) {
          const w = r.getAttribute("data-item-id") || "";
          if (w && i.includes(w)) {
            const L = new CustomEvent("resetDragStates");
            document.dispatchEvent(L);
            return;
          }
          const A = w ? (M == null ? void 0 : M(w)) || [] : [];
          if (_ === "inside")
            n = A, c = 0;
          else if (A.length) {
            const L = A.slice(0, -1), P = A[A.length - 1];
            n = L, c = _ === "above" ? P : P + 1;
          }
          break;
        }
      }
      const p = new CustomEvent("resetDragStates");
      if (document.dispatchEvent(p), _ !== "inside")
        for (let o = 0; o < e.length; o++) {
          const r = e[o];
          if (r.classList.contains("ListItem_drag-above") || r.classList.contains("ListItem_drag-below")) {
            const w = r.getAttribute("data-item-id");
            if (w && i.includes(w)) return;
            break;
          }
        }
      c < 0 && (c = 0), c > e.length && (c = e.length), rt(i, c, n.length ? n : void 0);
    }
  }, lt = St("ListContainer", void 0, void 0);
  return /* @__PURE__ */ wt(
    "div",
    {
      id: et,
      className: [lt, st].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (t) => {
        R.current = t, typeof T == "function" ? T(t) : T && (T.current = t);
      },
      ...it,
      onDragOver: ot,
      onDrop: ct,
      onDragLeave: at,
      children: nt
    }
  );
}, qt = Dt(Ct);
export {
  qt as ListContainer
};
