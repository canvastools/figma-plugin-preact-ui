import "./index.es21.css";
import { jsx as h } from "./index.es203.js";
import { useState as $, useRef as q, useEffect as C } from "preact/hooks";
/* empty css            */
import { useListContext as bt } from "./index.es20.js";
import { Icon as at } from "./index.es16.js";
import { typedForwardRef as Kt } from "./index.es205.js";
import { bem as Nt } from "./index.es65.js";
import { chevronRight as Zt } from "./index.es88.js";
import { chevronDown as zt } from "./index.es86.js";
import { dragHandle as Bt } from "./index.es98.js";
const Mt = ({
  id: f,
  className: ct,
  variant: lt = "default",
  nestingLevel: O = 0,
  padding: m,
  draggable: d = !1,
  acceptsChildren: ut = !1,
  selectionScope: N = "individual",
  collapsed: T,
  collapsable: Z = !1,
  collapseIconIntent: ft = "secondary",
  onCollapsedChange: p,
  onDragStart: H,
  onDragEnd: G,
  selectable: I = !1,
  hoverable: mt = !1,
  onSelect: E,
  items: J,
  children: tt,
  tabIndex: dt,
  ...vt
}, z) => {
  const {
    selectedItemIds: _,
    selectionOriginIds: F,
    toggleSelect: et,
    selectionMode: U,
    setSelection: pt,
    registerItem: B,
    dragImage: gt,
    reorderItems: k,
    getPathForId: D,
    onKeyDown: Q
  } = bt(), [Lt, M] = $(!1), [ht, rt] = $(!1), [It, Dt] = $(!1), w = q(null), nt = q(null), V = q(null), L = q(null), R = T !== void 0, [yt, W] = $(!!T);
  C(() => {
    R && W(!!T);
  }, [T]);
  const b = R ? !!T : yt;
  C(() => {
    const t = w.current;
    if (!t) return;
    const r = t.parentElement;
    if (!r) return;
    const e = () => {
      var c;
      const a = r.children;
      let n = null;
      for (let o = a.length - 1; o >= 0; o--)
        if ((c = a[o].classList) != null && c.contains("ListItem")) {
          n = a[o];
          break;
        }
      Dt(n === t);
    };
    e();
    const i = new MutationObserver(e);
    return i.observe(r, { childList: !0 }), () => i.disconnect();
  }, []);
  const S = _.has(f), _t = N === "individual" ? S : !!(F != null && F.has(f)), wt = !!J;
  C(() => {
    const t = B == null ? void 0 : B(f, {
      selectable: I,
      selectionScope: N
    }), r = () => {
      var i;
      M(!1), document.documentElement.classList.remove("pui-dragging"), (i = V.current) == null || i.classList.remove("ListItem__end-dropzone-active"), L.current = null;
    }, e = () => {
      var i;
      M(!1), document.documentElement.classList.remove("pui-dragging"), (i = V.current) == null || i.classList.remove("ListItem__end-dropzone-active"), L.current = null;
    };
    return document.addEventListener("dragend", r), document.addEventListener("resetDragStates", e), () => {
      document.removeEventListener("dragend", r), document.removeEventListener("resetDragStates", e), t == null || t();
    };
  }, [f, B, I, N]);
  const Et = Nt("ListItem", void 0, {
    "selection-scope-descendants": N === "withDescendants",
    variant: lt,
    nested: O > 0,
    draggable: d,
    selectable: I,
    selected: S,
    "selection-origin": _t,
    focused: ht,
    hoverable: mt,
    "has-children": wt,
    collapsed: b,
    collapsable: Z,
    dragging: Lt
  }), X = (t) => {
    if (!t) return !1;
    let r = t;
    for (; r && r !== w.current; ) {
      const e = r.getAttribute("data-pui-interactive");
      if (e === "true")
        return !0;
      if (e === "false")
        return !1;
      r = r.parentElement;
    }
    return !1;
  }, Pt = (t) => {
    if (t.detail > 1 || X(t.target) || !I || U === void 0) return;
    const r = t.shiftKey, e = t.metaKey || t.ctrlKey;
    et(f, { range: r, additive: e }), E == null || E({ event: t, selected: !S });
  }, st = (t) => {
    var u;
    const r = w.current;
    if (!r) return;
    let e = r.closest(".ListContainer");
    for (; e; ) {
      const v = (u = e.parentElement) == null ? void 0 : u.closest(".ListContainer");
      if (!v) break;
      e = v;
    }
    if (!e) return;
    const i = Array.from(e.querySelectorAll(".ListItem"));
    if (!i.length) return;
    const a = i.filter((v) => v.offsetParent !== null), n = a.indexOf(r);
    if (n === -1) return;
    const c = a.length - 1, o = t === "prev" ? n === 0 ? c : n - 1 : n === c ? 0 : n + 1, l = a[o];
    l && l !== r && l.focus();
  }, j = (t) => {
    const r = D == null ? void 0 : D(f);
    if (!r || r.length === 0) return;
    const e = r.slice(0, -1), a = I && _.has(f) && _.size > 1 ? Array.from(_) : [f], n = [];
    for (const s of a) {
      const g = D == null ? void 0 : D(s);
      if (!g || g.length === 0) continue;
      const y = g.slice(0, -1);
      y.length === e.length && y.every((x, Y) => x === e[Y]) && n.push({ id: s, index: g[g.length - 1] });
    }
    if (n.length === 0) return;
    n.sort((s, g) => s.index - g.index);
    const c = n.map((s) => s.id), o = n[0].index, l = n[n.length - 1].index, u = w.current, v = u == null ? void 0 : u.parentElement, P = v ? Array.from(v.children).filter((s) => s.classList.contains("ListItem")) : [], K = P.length, A = () => {
      requestAnimationFrame(() => {
        const s = document.querySelector(`[data-item-id="${f}"]`);
        s instanceof HTMLElement && s.focus({ preventScroll: !1 });
      });
    };
    switch (t) {
      case "up": {
        if (o === 0) return;
        const s = e.length > 0 ? e : void 0;
        k(c, o - 1, s), A();
        break;
      }
      case "down": {
        if (l >= K - 1) return;
        const s = e.length > 0 ? e : void 0;
        k(c, l + 2, s), A();
        break;
      }
      case "right": {
        if (o === 0) return;
        const s = P[o - 1];
        if (!s || s.getAttribute("data-accepts-children") === "false") return;
        const g = [...e, o - 1], y = s.querySelector(":scope > .ListItem__items > .ListContainer"), x = y ? Array.from(y.children).filter((Y) => Y.classList.contains("ListItem")).length : 0;
        k(c, x, g), A();
        break;
      }
      case "left": {
        if (e.length === 0) return;
        const s = e.slice(0, -1), g = e[e.length - 1], y = s.length > 0 ? s : void 0;
        k(c, g + 1, y), A();
        break;
      }
    }
  }, At = (t) => {
    if (!X(t.target))
      switch (Q == null || Q({ event: t, itemId: f }), t.key) {
        case "ArrowUp":
          if (t.altKey) {
            d && (t.preventDefault(), t.stopPropagation(), j("up"));
            break;
          }
          t.preventDefault(), t.stopPropagation(), st("prev");
          break;
        case "ArrowDown":
          if (t.altKey) {
            d && (t.preventDefault(), t.stopPropagation(), j("down"));
            break;
          }
          t.preventDefault(), t.stopPropagation(), st("next");
          break;
        case "ArrowLeft":
          t.altKey && d && (t.preventDefault(), t.stopPropagation(), j("left"));
          break;
        case "ArrowRight":
          t.altKey && d && (t.preventDefault(), t.stopPropagation(), j("right"));
          break;
        case "Enter":
          if (I && U !== void 0) {
            t.preventDefault(), t.stopPropagation();
            const r = t.shiftKey, e = t.metaKey || t.ctrlKey;
            et(f, { range: r, additive: e }), E == null || E({
              event: t,
              selected: !S
            });
          }
          break;
        case " ":
        case "Spacebar": {
          if (Z) {
            t.preventDefault(), t.stopPropagation();
            const r = !b;
            R ? p == null || p({
              event: t,
              collapsed: r
            }) : (W(r), p == null || p({
              event: t,
              collapsed: r
            }));
          }
          break;
        }
      }
  }, it = (t) => {
    var r, e, i;
    if (d) {
      M(!0), document.documentElement.classList.add("pui-dragging");
      const a = I && _.has(f) && _.size > 1, n = a ? Array.from(_) : [f];
      I && U !== void 0 && !a && pt([f]);
      const c = { ids: n };
      try {
        (r = t.dataTransfer) == null || r.setData("application/json", JSON.stringify(c));
      } catch {
      }
      (e = t.dataTransfer) == null || e.setData("text/plain", n[0]), window.__puiDraggingIds = n;
      try {
        (i = t.dataTransfer) == null || i.setDragImage(gt, 0, 0);
      } catch {
      }
      H == null || H({ event: t });
    }
  }, ot = (t) => {
    if (d) {
      M(!1), document.documentElement.classList.remove("pui-dragging");
      try {
        delete window.__puiDraggingIds;
      } catch {
      }
      G == null || G({ event: t });
    }
  }, xt = (t) => {
    var n, c;
    t.preventDefault(), t.stopPropagation(), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.currentTarget.classList.add("ListItem__end-dropzone-active");
    const e = (n = w.current) == null ? void 0 : n.closest(".ListContainer");
    let i = null;
    if (e) {
      let o = e;
      for (; o; ) {
        Array.from(o.children).filter(
          (v) => v.classList.contains("ListItem")
        ).forEach((v) => {
          v.classList.remove(
            "ListItem_drag-over",
            "ListItem_drag-above",
            "ListItem_drag-below",
            "ListItem_drag-inside",
            "ListItem_drag-self"
          );
        });
        const u = o.closest(".ListItem");
        !i && u && (i = u), o = ((c = u == null ? void 0 : u.parentElement) == null ? void 0 : c.closest(".ListContainer")) ?? null;
      }
    }
    const a = i || (e == null ? void 0 : e.closest(".ListItem")) || null;
    L.current !== a && (document.querySelectorAll(".ListItem_drop-parent").forEach((l) => {
      l.classList.remove("ListItem_drop-parent");
    }), a && a.classList.add("ListItem_drop-parent"), L.current = a);
  }, Tt = (t) => {
    var n, c, o;
    t.preventDefault(), t.stopPropagation(), t.currentTarget.classList.remove("ListItem__end-dropzone-active"), L.current && (L.current.classList.remove("ListItem_drop-parent"), L.current = null);
    let e = null;
    const i = window.__puiDraggingIds;
    Array.isArray(i) && (e = i);
    const a = (n = t.dataTransfer) == null ? void 0 : n.getData("application/json");
    if (a)
      try {
        const l = JSON.parse(a);
        l && Array.isArray(l.ids) && (e = l.ids);
      } catch {
      }
    if (!e) {
      const l = (c = t.dataTransfer) == null ? void 0 : c.getData("text/plain");
      l && (e = [l]);
    }
    if (e && e.length) {
      const l = new CustomEvent("resetDragStates");
      document.dispatchEvent(l);
      const u = (o = w.current) == null ? void 0 : o.closest(".ListContainer"), v = u ? Array.from(u.children).filter((y) => {
        var x;
        return (x = y.classList) == null ? void 0 : x.contains("ListItem");
      }).length : 0, P = u == null ? void 0 : u.closest(".ListItem"), K = (P == null ? void 0 : P.getAttribute("data-item-id")) || null, A = K ? (D == null ? void 0 : D(K)) || [] : [];
      k(e, v, K ? A : void 0);
    }
  }, kt = (t) => {
    t.currentTarget.classList.remove("ListItem__end-dropzone-active"), L.current && (L.current.classList.remove("ListItem_drop-parent"), L.current = null);
  };
  return /* @__PURE__ */ h(
    "div",
    {
      id: f,
      className: [Et, ct].join(" ").trim(),
      ref: (t) => {
        w.current = t, typeof z == "function" ? z(t) : z && (z.current = t);
      },
      ...vt,
      tabIndex: dt ?? (I || d || Z ? 0 : void 0),
      onFocus: (t) => {
        t.currentTarget === t.target && rt(!0);
      },
      onBlur: (t) => {
        t.currentTarget === t.target && rt(!1);
      },
      onKeyDown: At,
      "data-nesting-level": O,
      "data-item-id": f,
      "data-accepts-children": ut ? "true" : "false",
      style: [
        `--level: ${O}`,
        (m == null ? void 0 : m.top) !== void 0 ? `--li-pt: var(--pui-spacing-${m.top})` : "",
        (m == null ? void 0 : m.right) !== void 0 ? `--li-pr: var(--pui-spacing-${m.right})` : "",
        (m == null ? void 0 : m.bottom) !== void 0 ? `--li-pb: var(--pui-spacing-${m.bottom})` : "",
        (m == null ? void 0 : m.left) !== void 0 ? `--li-pl: var(--pui-spacing-${m.left})` : ""
      ].filter(Boolean).join("; "),
      children: [
        /* @__PURE__ */ h(
          "div",
          {
            className: "ListItem__content",
            onClick: Pt,
            draggable: d,
            onMouseDown: d ? (t) => {
              nt.current = t.target;
            } : void 0,
            onDragStart: d ? (t) => {
              if (X(nt.current)) {
                t.preventDefault();
                return;
              }
              it(t);
            } : void 0,
            onDragEnd: d ? ot : void 0,
            children: /* @__PURE__ */ h("div", { className: "ListItem__content-inner", children: [
              Z && /* @__PURE__ */ h(
                "div",
                {
                  className: "ListItem__collapse-toggle",
                  "data-pui-interactive": "true",
                  onClick: (t) => {
                    t.stopPropagation(), R ? p == null || p({
                      event: t,
                      collapsed: !b
                    }) : (W((r) => !r), p == null || p({
                      event: t,
                      collapsed: !b
                    }));
                  },
                  children: /* @__PURE__ */ h(
                    at,
                    {
                      intent: "neutral",
                      intentModifier: ft,
                      glyph: b ? Zt : zt,
                      size: 16,
                      variant: "default"
                    }
                  )
                }
              ),
              d && /* @__PURE__ */ h(
                "div",
                {
                  className: "ListItem__drag-handle",
                  draggable: !0,
                  onDragStart: (t) => {
                    t.stopPropagation(), it(t);
                  },
                  onDragEnd: ot,
                  children: /* @__PURE__ */ h(at, { glyph: Bt, iconColor: "var(--pui-color-neutral-icon-tertiary)", size: 16 })
                }
              ),
              tt && /* @__PURE__ */ h("div", { className: "ListItem__children", children: tt })
            ] })
          }
        ),
        J && /* @__PURE__ */ h("div", { className: "ListItem__items", children: J }),
        It && /* @__PURE__ */ h(
          "div",
          {
            ref: V,
            className: "ListItem__end-dropzone",
            onDragOver: xt,
            onDrop: Tt,
            onDragLeave: kt
          }
        )
      ]
    }
  );
}, Ut = Kt(Mt);
export {
  Ut as ListItem
};
