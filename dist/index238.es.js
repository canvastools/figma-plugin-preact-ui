import "./index238.es.css";
import { bem as e } from "./index8.es.js";
import { DRAG_ZONE_CLASSES as t, clearDraggingIds as n, clearDropItself as r, getChildListItems as i, mergeRefs as a, resolveDraggedIds as o, setDraggingIds as s, setDropParentElement as c } from "./index10.es.js";
import { typedForwardRef as l } from "./index11.es.js";
import { jsx as u } from "./index15.es.js";
import { Icon as d } from "./index34.es.js";
import { chevronDown as f } from "./index58.es.js";
import { chevronRight as p } from "./index60.es.js";
import { dragHandle as m } from "./index70.es.js";
import { useListContext as ee } from "./index234.es.js";
/* empty css            */
import { useEffect as h, useRef as g, useState as _ } from "preact/hooks";
var v = l(({ id: l, className: v, variant: te = "default", nestingLevel: y = 0, draggable: b = !1, acceptsChildren: ne = !1, selectionScope: x = "individual", collapsed: S, collapsable: C = !1, collapseIconIntent: re = "tertiary", onCollapsedChange: w, onDragStart: ie, onDragEnd: ae, selectable: T = !1, hoverable: oe = !1, onSelect: E, items: D, children: O, tabIndex: se, ...ce }, le) => {
	let { selectedItemIds: k, selectionOriginIds: ue, toggleSelect: de, selectionMode: A, setSelection: j, registerItem: M, getItemMeta: N, getBranchIds: P, dragImage: fe, reorderItems: F, getPathForId: I, onKeyDown: pe } = ee(), [me, L] = _(!1), [he, R] = _(!1), [ge, _e] = _(!1), [ve, z] = _(!1), [ye, B] = _(!1), [be, V] = _(!1), [xe, H] = _(!1), [Se, U] = _(!1), W = g(null), G = g(null), K = g(null), q = g(null), J = S !== void 0, [Ce, Y] = _(!!S);
	h(() => {
		J && Y(!!S);
	}, [S]);
	let X = J ? !!S : Ce, we = k.has(l), Te = x === "individual" ? we : !!ue?.has(l), Ee = !!D;
	h(() => {
		let e = W.current;
		if (!e) return;
		let t = e.parentElement;
		if (!t) return;
		let n = (e) => {
			let t = e.querySelector(":scope > .ListItem__items > .ListContainer");
			if (!t) return null;
			let r = i(t);
			if (r.length === 0) return null;
			let a = r[r.length - 1], o = a.getAttribute("data-item-id");
			return o && k.has(o) ? a : a.classList.contains("ListItem_collapsed") ? null : n(a);
		}, r = (e) => !!n(e), a = (e) => {
			let t = n(e);
			return t ? t.classList.contains("ListItem_selection-origin") && t.classList.contains("ListItem_has-children") && !t.classList.contains("ListItem_collapsed") : !1;
		}, o = (e) => {
			let t = e;
			for (; t;) {
				let e = t.parentElement;
				if (!e?.classList.contains("ListContainer")) return !1;
				let n = i(e);
				if (n[n.length - 1] !== t) return !1;
				let r = e.parentElement?.parentElement;
				if (!r?.classList.contains("ListItem")) return !1;
				let a = r.getAttribute("data-item-id");
				if (a && k.has(a)) return !1;
				let o = r.nextElementSibling, s = o?.classList.contains("ListItem") ? o.getAttribute("data-item-id") : null;
				if (s && k.has(s)) return !0;
				t = r;
			}
			return !1;
		}, s = () => {
			let n = t.children, i = null;
			for (let e = n.length - 1; e >= 0; e--) if (n[e].classList?.contains("ListItem")) {
				i = n[e];
				break;
			}
			if (_e(i === e), !k.has(l)) {
				z(!1), B(!1), V(!1), H(!1), U(!1);
				return;
			}
			let s = e.previousElementSibling, c = e.nextElementSibling, u = !!s?.classList.contains("ListItem"), d = u ? s.getAttribute("data-item-id") : null, f = c?.classList.contains("ListItem") ? c.getAttribute("data-item-id") : null, p = !!(d && k.has(d));
			if (x === "individual") {
				let t = e.closest(".ListContainer");
				for (; t;) {
					let e = t.parentElement?.closest(".ListContainer");
					if (!e) break;
					t = e;
				}
				let n = t ? Array.from(t.querySelectorAll(".ListItem")).filter((e) => e.offsetParent !== null) : [], r = n.indexOf(e), i = r > 0 ? n[r - 1] : null, a = r >= 0 && r < n.length - 1 ? n[r + 1] : null, o = i?.getAttribute("data-item-id"), s = a?.getAttribute("data-item-id");
				z(!o || !k.has(o)), B(!s || !k.has(s));
			} else z(!d || !p), B(!f || !k.has(f));
			let m = u && !p && !s.classList.contains("ListItem_collapsed") && r(s);
			V(m), H(m && a(s)), U(o(e));
		};
		s();
		let c = new MutationObserver(s);
		return c.observe(t, {
			childList: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: ["class"]
		}), () => c.disconnect();
	}, [
		l,
		k,
		x
	]), h(() => {
		let e = M?.(l, {
			selectable: T,
			selectionScope: x,
			draggable: b
		}), t = () => {
			L(!1), document.documentElement.classList.remove("pui-dragging"), K.current?.classList.remove("ListItem__end-dropzone-active"), q.current = null;
		}, n = () => {
			L(!1), document.documentElement.classList.remove("pui-dragging"), K.current?.classList.remove("ListItem__end-dropzone-active"), q.current = null;
		};
		return document.addEventListener("dragend", t), document.addEventListener("resetDragStates", n), () => {
			document.removeEventListener("dragend", t), document.removeEventListener("resetDragStates", n), e?.();
		};
	}, [
		l,
		M,
		T,
		x,
		b
	]);
	let De = e("ListItem", void 0, {
		"selection-scope-descendants": x === "withDescendants",
		variant: te,
		nested: y > 0,
		draggable: b,
		selectable: T,
		selected: we,
		"selection-origin": Te,
		"selection-start": ve,
		"selection-end": ye,
		"selection-after-nested": be,
		"selection-after-nested-secondary": xe,
		"selection-before-sibling": Se,
		focused: he,
		hoverable: oe,
		"has-children": Ee,
		collapsed: X,
		collapsable: C,
		dragging: me
	}), Z = (e) => {
		if (!e) return !1;
		let t = e;
		for (; t && t !== W.current;) {
			let e = t.getAttribute("data-pui-interactive");
			if (e === "true") return !0;
			if (e === "false") return !1;
			t = t.parentElement;
		}
		return !1;
	}, Oe = (e) => {
		if (e.detail > 1 || Z(e.target) || !T || A === void 0) return;
		let t = e.shiftKey, n = e.metaKey || e.ctrlKey, r = de(l, {
			range: t,
			additive: n
		});
		E?.({
			event: e,
			selected: r.has(l)
		});
	}, Q = (e) => {
		let t = W.current;
		if (!t) return;
		let n = t.closest(".ListContainer");
		for (; n;) {
			let e = n.parentElement?.closest(".ListContainer");
			if (!e) break;
			n = e;
		}
		if (!n) return;
		let r = Array.from(n.querySelectorAll(".ListItem"));
		if (!r.length) return;
		let i = r.filter((e) => e.offsetParent !== null), a = i.indexOf(t);
		if (a === -1) return;
		let o = i.length - 1, s = i[e === "prev" ? a === 0 ? o : a - 1 : a === o ? 0 : a + 1];
		s && s !== t && s.focus();
	}, $ = (e) => {
		let t = I?.(l);
		if (!t || t.length === 0) return;
		let n = t.slice(0, -1), r = T && k.has(l) && k.size > 1 ? Array.from(k).filter((e) => e === l || N?.(e)?.draggable !== !1) : [l], a = [];
		for (let e of r) {
			let t = I?.(e);
			if (!t || t.length === 0) continue;
			let r = t.slice(0, -1);
			r.length === n.length && r.every((e, t) => e === n[t]) && a.push({
				id: e,
				index: t[t.length - 1]
			});
		}
		if (a.length === 0) return;
		a.sort((e, t) => e.index - t.index);
		let o = a.map((e) => e.id), s = a[0].index, c = a[a.length - 1].index, u = W.current?.parentElement, d = u ? i(u) : [], f = d.length, p = () => {
			requestAnimationFrame(() => {
				let e = document.querySelector(`[data-item-id="${l}"]`);
				e instanceof HTMLElement && e.focus({ preventScroll: !1 });
			});
		};
		switch (e) {
			case "up": {
				if (s === 0) return;
				let e = n.length > 0 ? n : void 0;
				F(o, s - 1, e), p();
				break;
			}
			case "down": {
				if (c >= f - 1) return;
				let e = n.length > 0 ? n : void 0;
				F(o, c + 2, e), p();
				break;
			}
			case "right": {
				if (s === 0) return;
				let e = d[s - 1];
				if (!e || e.getAttribute("data-accepts-children") === "false") return;
				let t = [...n, s - 1], r = e.querySelector(":scope > .ListItem__items > .ListContainer"), a = r ? i(r).length : 0;
				F(o, a, t), p();
				break;
			}
			case "left": {
				if (n.length === 0) return;
				let e = n.slice(0, -1), t = n[n.length - 1], r = e.length > 0 ? e : void 0;
				F(o, t + 1, r), p();
				break;
			}
		}
	}, ke = (e) => {
		if (!Z(e.target)) switch (pe?.({
			event: e,
			itemId: l
		}), e.key) {
			case "ArrowUp":
				if (e.altKey) {
					b && (e.preventDefault(), e.stopPropagation(), $("up"));
					break;
				}
				e.preventDefault(), e.stopPropagation(), Q("prev");
				break;
			case "ArrowDown":
				if (e.altKey) {
					b && (e.preventDefault(), e.stopPropagation(), $("down"));
					break;
				}
				e.preventDefault(), e.stopPropagation(), Q("next");
				break;
			case "ArrowLeft":
				e.altKey && b && (e.preventDefault(), e.stopPropagation(), $("left"));
				break;
			case "ArrowRight":
				e.altKey && b && (e.preventDefault(), e.stopPropagation(), $("right"));
				break;
			case "Enter":
				if (T && A !== void 0) {
					e.preventDefault(), e.stopPropagation();
					let t = e.shiftKey, n = e.metaKey || e.ctrlKey, r = de(l, {
						range: t,
						additive: n
					});
					E?.({
						event: e,
						selected: r.has(l)
					});
				}
				break;
			case " ":
			case "Spacebar":
				if (C) {
					e.preventDefault(), e.stopPropagation();
					let t = !X;
					J || Y(t), w?.({
						event: e,
						collapsed: t
					});
				}
				break;
			default: break;
		}
	}, Ae = (e) => {
		if (b) {
			L(!0), document.documentElement.classList.add("pui-dragging");
			let t = T && k.has(l) && k.size > 1, n;
			if (t) {
				let e = Array.from(k), t = e.filter((e) => e === l || N?.(e)?.draggable !== !1), r = new Set(t);
				t.forEach((e) => {
					P?.(e).forEach((e) => {
						k.has(e) && r.add(e);
					});
				}), n = Array.from(r), A !== void 0 && n.length !== e.length && j(n);
			} else n = [l], T && A !== void 0 && j(x === "withDescendants" ? P?.(l) ?? [l] : [l]);
			let r = { ids: n };
			try {
				e.dataTransfer?.setData("application/json", JSON.stringify(r));
			} catch {}
			e.dataTransfer?.setData("text/plain", n[0]), s(n);
			try {
				e.dataTransfer?.setDragImage(fe, 0, 0);
			} catch {}
			ie?.({ event: e });
		}
	}, je = (e) => {
		b && (L(!1), document.documentElement.classList.remove("pui-dragging"), n(), ae?.({ event: e }));
	}, Me = (e) => {
		e.preventDefault(), e.stopPropagation(), e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.currentTarget.classList.add("ListItem__end-dropzone-active");
		let n = W.current?.closest(".ListContainer"), r = null;
		if (n) {
			let e = n;
			for (; e;) {
				i(e).forEach((e) => {
					e.classList.remove(...t);
				});
				let n = e.closest(".ListItem");
				!r && n && (r = n), e = n?.parentElement?.closest(".ListContainer") ?? null;
			}
		}
		c(r || n?.closest(".ListItem") || null, q);
	}, Ne = (e) => {
		e.preventDefault(), e.stopPropagation(), e.currentTarget.classList.remove("ListItem__end-dropzone-active"), q.current && (q.current.classList.remove("ListItem_drop-parent"), q.current = null), r();
		let t = o(e.dataTransfer);
		if (t && t.length) {
			let e = new CustomEvent("resetDragStates");
			document.dispatchEvent(e);
			let n = W.current?.closest(".ListContainer"), r = n ? i(n).length : 0, a = (n?.closest(".ListItem"))?.getAttribute("data-item-id") || null, o = a && I?.(a) || [];
			F(t, r, a ? o : void 0);
		}
	}, Pe = (e) => {
		e.currentTarget.classList.remove("ListItem__end-dropzone-active"), q.current && (q.current.classList.remove("ListItem_drop-parent"), q.current = null), r();
	};
	return /* @__PURE__ */ u("div", {
		id: l,
		className: [De, v].join(" ").trim(),
		ref: a(W, le),
		...ce,
		tabIndex: se ?? (T || b || C ? 0 : void 0),
		onFocus: (e) => {
			e.currentTarget === e.target && R(!0);
		},
		onBlur: (e) => {
			e.currentTarget === e.target && R(!1);
		},
		onKeyDown: ke,
		"data-nesting-level": y,
		"data-item-id": l,
		"data-accepts-children": ne ? "true" : "false",
		style: `--level: ${y}`,
		children: [
			/* @__PURE__ */ u("div", {
				className: "ListItem__content",
				onClick: Oe,
				draggable: b,
				onMouseDown: b ? (e) => {
					G.current = e.target;
				} : void 0,
				onDragStart: b ? (e) => {
					if (Z(G.current)) {
						e.preventDefault();
						return;
					}
					Ae(e);
				} : void 0,
				onDragEnd: b ? je : void 0,
				children: /* @__PURE__ */ u("div", {
					className: "ListItem__content-inner",
					children: [
						C && /* @__PURE__ */ u("div", {
							className: "ListItem__collapse-toggle",
							"data-pui-interactive": "true",
							onClick: (e) => {
								e.stopPropagation(), J || Y((e) => !e), w?.({
									event: e,
									collapsed: !X
								});
							},
							children: /* @__PURE__ */ u(d, {
								intent: "neutral",
								intentModifier: re,
								glyph: X ? p : f,
								size: 16,
								variant: "downscaled"
							})
						}),
						b && /* @__PURE__ */ u("div", {
							className: "ListItem__drag-handle",
							draggable: !0,
							onDragStart: (e) => {
								e.stopPropagation(), Ae(e);
							},
							onDragEnd: je,
							children: /* @__PURE__ */ u(d, {
								glyph: m,
								intent: "neutral",
								intentModifier: "tertiary",
								size: 16
							})
						}),
						O && /* @__PURE__ */ u("div", {
							className: "ListItem__children",
							children: O
						})
					]
				})
			}),
			D && /* @__PURE__ */ u("div", {
				className: "ListItem__items",
				children: D
			}),
			ge && /* @__PURE__ */ u("div", {
				ref: K,
				className: "ListItem__end-dropzone",
				onDragOver: Me,
				onDrop: Ne,
				onDragLeave: Pe
			})
		]
	});
});
//#endregion
export { v as ListItem };
