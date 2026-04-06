import "./index.es21.css";
import { jsx as v } from "./index.es143.js";
import { useState as N, useRef as Z, useEffect as J } from "preact/hooks";
/* empty css            */
import { Icon as C } from "./index.es16.js";
import { useListContext as wt } from "./index.es20.js";
import { typedForwardRef as Tt } from "./index.es145.js";
import { bem as Et } from "./index.es62.js";
import { chevronRight as xt } from "./index.es79.js";
import { chevronDown as At } from "./index.es77.js";
import { dragHandle as Pt } from "./index.es84.js";
const Nt = ({
  id: l,
  className: tt,
  variant: et = "default",
  nestingLevel: k = 0,
  padding: i,
  draggable: p = !1,
  acceptsChildren: rt = !1,
  selectionScope: y = "individual",
  collapsed: h,
  collapsable: b = !1,
  onCollapsedChange: u,
  onDragStart: z,
  onDragEnd: B,
  selectable: I = !1,
  hoverable: st = !1,
  onSelect: L,
  items: K,
  children: S,
  ...nt
}, w) => {
  const {
    selectedItemIds: T,
    selectionOriginIds: R,
    toggleSelect: G,
    selectionMode: M,
    setSelection: it,
    registerItem: E,
    dragImage: ot,
    reorderItems: at,
    getPathForId: j
  } = wt(), [ct, x] = N(!1), [lt, U] = N(!1), [ut, ft] = N(!1), g = Z(null), Q = Z(null), O = Z(null), d = Z(null), A = h !== void 0, [mt, $] = N(!!h);
  J(() => {
    A && $(!!h);
  }, [h]);
  const _ = A ? !!h : mt;
  J(() => {
    const t = g.current;
    if (!t) return;
    const r = t.parentElement;
    if (!r) return;
    const e = () => {
      var c;
      const n = r.children;
      let a = null;
      for (let o = n.length - 1; o >= 0; o--)
        if ((c = n[o].classList) != null && c.contains("ListItem")) {
          a = n[o];
          break;
        }
      ft(a === t);
    };
    e();
    const s = new MutationObserver(e);
    return s.observe(r, { childList: !0 }), () => s.disconnect();
  }, []);
  const P = T.has(l), dt = y === "individual" ? P : !!(R != null && R.has(l)), vt = !!K;
  J(() => {
    const t = E == null ? void 0 : E(l, {
      selectable: I,
      selectionScope: y
    }), r = () => {
      var s;
      x(!1), (s = O.current) == null || s.classList.remove("ListItem__end-dropzone-active"), d.current = null;
    }, e = () => {
      var s;
      x(!1), (s = O.current) == null || s.classList.remove("ListItem__end-dropzone-active"), d.current = null;
    };
    return document.addEventListener("dragend", r), document.addEventListener("resetDragStates", e), () => {
      document.removeEventListener("dragend", r), document.removeEventListener("resetDragStates", e), t == null || t();
    };
  }, [l, E, I, y]);
  const pt = Et("ListItem", void 0, {
    "selection-scope-descendants": y === "withDescendants",
    variant: et,
    nested: k > 0,
    draggable: p,
    selectable: I,
    selected: P,
    "selection-origin": dt,
    focused: lt,
    hoverable: st,
    "has-children": vt,
    collapsed: _,
    collapsable: b,
    dragging: ct
  }), F = (t) => {
    if (!t) return !1;
    let r = t;
    for (; r && r !== g.current; ) {
      const e = r.getAttribute("data-pui-interactive");
      if (e === "true")
        return !0;
      if (e === "false")
        return !1;
      r = r.parentElement;
    }
    return !1;
  }, It = (t) => {
    if (t.detail > 1 || F(t.target) || !I || M === void 0) return;
    const r = t.shiftKey, e = t.metaKey || t.ctrlKey;
    G(l, { range: r, additive: e }), L == null || L({ event: t, selected: !P });
  }, V = (t) => {
    const r = Array.from(document.querySelectorAll(".ListItem"));
    if (!r.length) return;
    const e = g.current, s = r.filter((o) => o.offsetParent !== null), n = s.indexOf(e);
    if (n === -1) return;
    const a = t === "prev" ? Math.max(0, n - 1) : Math.min(s.length - 1, n + 1), c = s[a];
    c && c !== e && c.focus();
  }, Lt = (t) => {
    if (!F(t.target))
      switch (t.key) {
        case "ArrowUp":
          t.preventDefault(), t.stopPropagation(), V("prev");
          break;
        case "ArrowDown":
          t.preventDefault(), t.stopPropagation(), V("next");
          break;
        case "Enter":
          if (I && M !== void 0) {
            t.preventDefault(), t.stopPropagation();
            const r = t.shiftKey, e = t.metaKey || t.ctrlKey;
            G(l, { range: r, additive: e }), L == null || L({
              event: t,
              selected: !P
            });
          }
          break;
        case " ":
        case "Spacebar": {
          if (b) {
            t.preventDefault(), t.stopPropagation();
            const r = !_;
            A ? u == null || u({
              // Cast to MouseEvent for compatibility with callback type
              event: t,
              collapsed: r
            }) : ($(r), u == null || u({
              event: t,
              collapsed: r
            }));
          }
          break;
        }
      }
  }, W = (t) => {
    var r, e, s;
    if (p) {
      x(!0);
      const n = T.has(l) && T.size > 1, a = n ? Array.from(T) : [l];
      M !== void 0 && !n && it([l]);
      const c = { ids: a };
      try {
        (r = t.dataTransfer) == null || r.setData("application/json", JSON.stringify(c));
      } catch {
      }
      (e = t.dataTransfer) == null || e.setData("text/plain", a[0]), window.__puiDraggingIds = a;
      try {
        (s = t.dataTransfer) == null || s.setDragImage(ot, 0, 0);
      } catch {
      }
      z == null || z({ event: t });
    }
  }, X = (t) => {
    if (p) {
      x(!1);
      try {
        delete window.__puiDraggingIds;
      } catch {
      }
      B == null || B({ event: t });
    }
  }, gt = (t) => {
    var a, c;
    t.preventDefault(), t.stopPropagation(), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.currentTarget.classList.add("ListItem__end-dropzone-active");
    const e = (a = g.current) == null ? void 0 : a.closest(".ListContainer");
    let s = null;
    if (e) {
      let o = e;
      for (; o; ) {
        Array.from(o.children).filter(
          (D) => D.classList.contains("ListItem")
        ).forEach((D) => {
          D.classList.remove(
            "ListItem_drag-over",
            "ListItem_drag-above",
            "ListItem_drag-below",
            "ListItem_drag-inside",
            "ListItem_drag-self"
          );
        });
        const m = o.closest(".ListItem");
        !s && m && (s = m), o = ((c = m == null ? void 0 : m.parentElement) == null ? void 0 : c.closest(".ListContainer")) ?? null;
      }
    }
    const n = s || (e == null ? void 0 : e.closest(".ListItem")) || null;
    d.current !== n && (document.querySelectorAll(".ListItem_drop-parent").forEach((f) => {
      f.classList.remove("ListItem_drop-parent");
    }), n && n.classList.add("ListItem_drop-parent"), d.current = n);
  }, ht = (t) => {
    var a, c, o;
    t.preventDefault(), t.stopPropagation(), t.currentTarget.classList.remove("ListItem__end-dropzone-active"), d.current && (d.current.classList.remove("ListItem_drop-parent"), d.current = null);
    let e = null;
    const s = window.__puiDraggingIds;
    Array.isArray(s) && (e = s);
    const n = (a = t.dataTransfer) == null ? void 0 : a.getData("application/json");
    if (n)
      try {
        const f = JSON.parse(n);
        f && Array.isArray(f.ids) && (e = f.ids);
      } catch {
      }
    if (!e) {
      const f = (c = t.dataTransfer) == null ? void 0 : c.getData("text/plain");
      f && (e = [f]);
    }
    if (e && e.length) {
      const f = new CustomEvent("resetDragStates");
      document.dispatchEvent(f);
      const m = (o = g.current) == null ? void 0 : o.closest(".ListContainer"), D = m ? Array.from(m.children).filter((yt) => {
        var Y;
        return (Y = yt.classList) == null ? void 0 : Y.contains("ListItem");
      }).length : 0, H = m == null ? void 0 : m.closest(".ListItem"), q = (H == null ? void 0 : H.getAttribute("data-item-id")) || null, Dt = q ? (j == null ? void 0 : j(q)) || [] : [];
      at(e, D, q ? Dt : void 0);
    }
  }, _t = (t) => {
    t.currentTarget.classList.remove("ListItem__end-dropzone-active"), d.current && (d.current.classList.remove("ListItem_drop-parent"), d.current = null);
  };
  return /* @__PURE__ */ v(
    "div",
    {
      id: l,
      className: [pt, tt].join(" ").trim(),
      ref: (t) => {
        g.current = t, typeof w == "function" ? w(t) : w && (w.current = t);
      },
      ...nt,
      tabIndex: I ? 0 : -1,
      onFocus: (t) => {
        t.currentTarget === t.target && U(!0);
      },
      onBlur: (t) => {
        t.currentTarget === t.target && U(!1);
      },
      onKeyDown: Lt,
      "data-nesting-level": k,
      "data-item-id": l,
      "data-accepts-children": rt ? "true" : "false",
      style: [
        `--level: ${k}`,
        (i == null ? void 0 : i.top) !== void 0 ? `--li-pt: var(--pui-spacing-${i.top})` : "",
        (i == null ? void 0 : i.right) !== void 0 ? `--li-pr: var(--pui-spacing-${i.right})` : "",
        (i == null ? void 0 : i.bottom) !== void 0 ? `--li-pb: var(--pui-spacing-${i.bottom})` : "",
        (i == null ? void 0 : i.left) !== void 0 ? `--li-pl: var(--pui-spacing-${i.left})` : ""
      ].filter(Boolean).join("; "),
      children: [
        /* @__PURE__ */ v(
          "div",
          {
            className: "ListItem__content",
            onClick: It,
            draggable: p,
            onMouseDown: p ? (t) => {
              Q.current = t.target;
            } : void 0,
            onDragStart: p ? (t) => {
              if (F(Q.current)) {
                t.preventDefault();
                return;
              }
              W(t);
            } : void 0,
            onDragEnd: p ? X : void 0,
            children: /* @__PURE__ */ v("div", { className: "ListItem__content-inner", children: [
              b && /* @__PURE__ */ v(
                "div",
                {
                  className: "ListItem__collapse-toggle",
                  "data-pui-interactive": "true",
                  onClick: (t) => {
                    t.stopPropagation(), A ? u == null || u({
                      event: t,
                      collapsed: !_
                    }) : ($((r) => !r), u == null || u({
                      event: t,
                      collapsed: !_
                    }));
                  },
                  children: /* @__PURE__ */ v(
                    C,
                    {
                      intent: "neutral",
                      intentModifier: "secondary",
                      glyph: _ ? xt : At,
                      size: 16
                    }
                  )
                }
              ),
              p && /* @__PURE__ */ v(
                "div",
                {
                  className: "ListItem__drag-handle",
                  "data-pui-interactive": "true",
                  draggable: !0,
                  onDragStart: (t) => {
                    t.stopPropagation(), W(t);
                  },
                  onDragEnd: X,
                  children: /* @__PURE__ */ v(C, { glyph: Pt, iconColor: "var(--pui-color-neutral-icon-tertiary)", size: 16 })
                }
              ),
              S && /* @__PURE__ */ v("div", { className: "ListItem__children", children: S })
            ] })
          }
        ),
        K && /* @__PURE__ */ v("div", { className: "ListItem__items", children: K }),
        ut && /* @__PURE__ */ v(
          "div",
          {
            ref: O,
            className: "ListItem__end-dropzone",
            onDragOver: gt,
            onDrop: ht,
            onDragLeave: _t
          }
        )
      ]
    },
    l
  );
}, Ht = Tt(Nt);
export {
  Ht as ListItem
};
