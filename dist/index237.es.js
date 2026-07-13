import "./index237.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Icon as r } from "./index33.es.js";
import { chevronDown as i } from "./index57.es.js";
import { chevronRight as a } from "./index59.es.js";
import { dragHandle as o } from "./index69.es.js";
import { useListContext as s } from "./index233.es.js";
/* empty css            */
import { useEffect as c, useRef as l, useState as u } from "preact/hooks";
var d = t(({ id: t, className: d, variant: f = "default", nestingLevel: p = 0, padding: m, draggable: h = !1, acceptsChildren: ee = !1, selectionScope: g = "individual", collapsed: _, collapsable: v = !1, collapseIconIntent: y = "default", onCollapsedChange: b, onDragStart: x, onDragEnd: te, selectable: S = !1, hoverable: C = !1, onSelect: w, items: T, children: E, tabIndex: ne, ...re }, D) => {
	let { selectedItemIds: O, selectionOriginIds: ie, toggleSelect: k, selectionMode: A, setSelection: j, registerItem: M, getItemMeta: N, getBranchIds: P, dragImage: F, reorderItems: I, getPathForId: L, onKeyDown: ae } = s(), [oe, R] = u(!1), [se, z] = u(!1), [ce, le] = u(!1), B = l(null), V = l(null), H = l(null), U = l(null), W = _ !== void 0, [ue, G] = u(!!_);
	c(() => {
		W && G(!!_);
	}, [_]);
	let K = W ? !!_ : ue;
	c(() => {
		let e = B.current;
		if (!e) return;
		let t = e.parentElement;
		if (!t) return;
		let n = () => {
			let n = t.children, r = null;
			for (let e = n.length - 1; e >= 0; e--) if (n[e].classList?.contains("ListItem")) {
				r = n[e];
				break;
			}
			le(r === e);
		};
		n();
		let r = new MutationObserver(n);
		return r.observe(t, { childList: !0 }), () => r.disconnect();
	}, []);
	let q = O.has(t), de = g === "individual" ? q : !!ie?.has(t), fe = !!T;
	c(() => {
		let e = M?.(t, {
			selectable: S,
			selectionScope: g,
			draggable: h
		}), n = () => {
			R(!1), document.documentElement.classList.remove("pui-dragging"), H.current?.classList.remove("ListItem__end-dropzone-active"), U.current = null;
		}, r = () => {
			R(!1), document.documentElement.classList.remove("pui-dragging"), H.current?.classList.remove("ListItem__end-dropzone-active"), U.current = null;
		};
		return document.addEventListener("dragend", n), document.addEventListener("resetDragStates", r), () => {
			document.removeEventListener("dragend", n), document.removeEventListener("resetDragStates", r), e?.();
		};
	}, [
		t,
		M,
		S,
		g,
		h
	]);
	let pe = e("ListItem", void 0, {
		"selection-scope-descendants": g === "withDescendants",
		variant: f,
		nested: p > 0,
		draggable: h,
		selectable: S,
		selected: q,
		"selection-origin": de,
		focused: se,
		hoverable: C,
		"has-children": fe,
		collapsed: K,
		collapsable: v,
		dragging: oe
	}), J = (e) => {
		if (!e) return !1;
		let t = e;
		for (; t && t !== B.current;) {
			let e = t.getAttribute("data-pui-interactive");
			if (e === "true") return !0;
			if (e === "false") return !1;
			t = t.parentElement;
		}
		return !1;
	}, me = (e) => {
		if (e.detail > 1 || J(e.target) || !S || A === void 0) return;
		let n = e.shiftKey, r = e.metaKey || e.ctrlKey, i = k(t, {
			range: n,
			additive: r
		});
		w?.({
			event: e,
			selected: i.has(t)
		});
	}, Y = (e) => {
		let t = B.current;
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
	}, X = (e) => {
		let n = L?.(t);
		if (!n || n.length === 0) return;
		let r = n.slice(0, -1), i = S && O.has(t) && O.size > 1 ? Array.from(O).filter((e) => e === t || N?.(e)?.draggable !== !1) : [t], a = [];
		for (let e of i) {
			let t = L?.(e);
			if (!t || t.length === 0) continue;
			let n = t.slice(0, -1);
			n.length === r.length && n.every((e, t) => e === r[t]) && a.push({
				id: e,
				index: t[t.length - 1]
			});
		}
		if (a.length === 0) return;
		a.sort((e, t) => e.index - t.index);
		let o = a.map((e) => e.id), s = a[0].index, c = a[a.length - 1].index, l = B.current?.parentElement, u = l ? Array.from(l.children).filter((e) => e.classList.contains("ListItem")) : [], d = u.length, f = () => {
			requestAnimationFrame(() => {
				let e = document.querySelector(`[data-item-id="${t}"]`);
				e instanceof HTMLElement && e.focus({ preventScroll: !1 });
			});
		};
		switch (e) {
			case "up": {
				if (s === 0) return;
				let e = r.length > 0 ? r : void 0;
				I(o, s - 1, e), f();
				break;
			}
			case "down": {
				if (c >= d - 1) return;
				let e = r.length > 0 ? r : void 0;
				I(o, c + 2, e), f();
				break;
			}
			case "right": {
				if (s === 0) return;
				let e = u[s - 1];
				if (!e || e.getAttribute("data-accepts-children") === "false") return;
				let t = [...r, s - 1], n = e.querySelector(":scope > .ListItem__items > .ListContainer"), i = n ? Array.from(n.children).filter((e) => e.classList.contains("ListItem")).length : 0;
				I(o, i, t), f();
				break;
			}
			case "left": {
				if (r.length === 0) return;
				let e = r.slice(0, -1), t = r[r.length - 1], n = e.length > 0 ? e : void 0;
				I(o, t + 1, n), f();
				break;
			}
		}
	}, he = (e) => {
		if (!J(e.target)) switch (ae?.({
			event: e,
			itemId: t
		}), e.key) {
			case "ArrowUp":
				if (e.altKey) {
					h && (e.preventDefault(), e.stopPropagation(), X("up"));
					break;
				}
				e.preventDefault(), e.stopPropagation(), Y("prev");
				break;
			case "ArrowDown":
				if (e.altKey) {
					h && (e.preventDefault(), e.stopPropagation(), X("down"));
					break;
				}
				e.preventDefault(), e.stopPropagation(), Y("next");
				break;
			case "ArrowLeft":
				e.altKey && h && (e.preventDefault(), e.stopPropagation(), X("left"));
				break;
			case "ArrowRight":
				e.altKey && h && (e.preventDefault(), e.stopPropagation(), X("right"));
				break;
			case "Enter":
				if (S && A !== void 0) {
					e.preventDefault(), e.stopPropagation();
					let n = e.shiftKey, r = e.metaKey || e.ctrlKey, i = k(t, {
						range: n,
						additive: r
					});
					w?.({
						event: e,
						selected: i.has(t)
					});
				}
				break;
			case " ":
			case "Spacebar":
				if (v) {
					e.preventDefault(), e.stopPropagation();
					let t = !K;
					W || G(t), b?.({
						event: e,
						collapsed: t
					});
				}
				break;
			default: break;
		}
	}, Z = (e) => {
		if (h) {
			R(!0), document.documentElement.classList.add("pui-dragging");
			let n = S && O.has(t) && O.size > 1, r;
			if (n) {
				let e = Array.from(O), n = e.filter((e) => e === t || N?.(e)?.draggable !== !1), i = new Set(n);
				n.forEach((e) => {
					P?.(e).forEach((e) => {
						O.has(e) && i.add(e);
					});
				}), r = Array.from(i), A !== void 0 && r.length !== e.length && j(r);
			} else r = [t], S && A !== void 0 && j(g === "withDescendants" ? P?.(t) ?? [t] : [t]);
			let i = { ids: r };
			try {
				e.dataTransfer?.setData("application/json", JSON.stringify(i));
			} catch {}
			e.dataTransfer?.setData("text/plain", r[0]), window.__puiDraggingIds = r;
			try {
				e.dataTransfer?.setDragImage(F, 0, 0);
			} catch {}
			x?.({ event: e });
		}
	}, Q = (e) => {
		if (h) {
			R(!1), document.documentElement.classList.remove("pui-dragging");
			try {
				delete window.__puiDraggingIds;
			} catch {}
			te?.({ event: e });
		}
	}, ge = (e) => {
		e.preventDefault(), e.stopPropagation(), e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.currentTarget.classList.add("ListItem__end-dropzone-active");
		let t = B.current?.closest(".ListContainer"), n = null;
		if (t) {
			let e = t;
			for (; e;) {
				Array.from(e.children).filter((e) => e.classList.contains("ListItem")).forEach((e) => {
					e.classList.remove("ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self");
				});
				let t = e.closest(".ListItem");
				!n && t && (n = t), e = t?.parentElement?.closest(".ListContainer") ?? null;
			}
		}
		let r = n || t?.closest(".ListItem") || null;
		U.current !== r && (document.querySelectorAll(".ListItem_drop-parent").forEach((e) => {
			e.classList.remove("ListItem_drop-parent");
		}), r && r.classList.add("ListItem_drop-parent"), U.current = r);
	}, $ = (e) => {
		e.preventDefault(), e.stopPropagation(), e.currentTarget.classList.remove("ListItem__end-dropzone-active"), U.current &&= (U.current.classList.remove("ListItem_drop-parent"), null);
		let t = null, n = window.__puiDraggingIds;
		Array.isArray(n) && (t = n);
		let r = e.dataTransfer?.getData("application/json");
		if (r) try {
			let e = JSON.parse(r);
			e && Array.isArray(e.ids) && (t = e.ids);
		} catch {}
		if (!t) {
			let n = e.dataTransfer?.getData("text/plain");
			n && (t = [n]);
		}
		if (t && t.length) {
			let e = new CustomEvent("resetDragStates");
			document.dispatchEvent(e);
			let n = B.current?.closest(".ListContainer"), r = n ? Array.from(n.children).filter((e) => e.classList?.contains("ListItem")).length : 0, i = (n?.closest(".ListItem"))?.getAttribute("data-item-id") || null, a = i && L?.(i) || [];
			I(t, r, i ? a : void 0);
		}
	}, _e = (e) => {
		e.currentTarget.classList.remove("ListItem__end-dropzone-active"), U.current &&= (U.current.classList.remove("ListItem_drop-parent"), null);
	};
	return /* @__PURE__ */ n("div", {
		id: t,
		className: [pe, d].join(" ").trim(),
		ref: (e) => {
			B.current = e, typeof D == "function" ? D(e) : D && (D.current = e);
		},
		...re,
		tabIndex: ne ?? (S || h || v ? 0 : void 0),
		onFocus: (e) => {
			e.currentTarget === e.target && z(!0);
		},
		onBlur: (e) => {
			e.currentTarget === e.target && z(!1);
		},
		onKeyDown: he,
		"data-nesting-level": p,
		"data-item-id": t,
		"data-accepts-children": ee ? "true" : "false",
		style: [
			`--level: ${p}`,
			m?.top === void 0 ? "" : `--li-pt: var(--pui-spacing-${m.top})`,
			m?.right === void 0 ? "" : `--li-pr: var(--pui-spacing-${m.right})`,
			m?.bottom === void 0 ? "" : `--li-pb: var(--pui-spacing-${m.bottom})`,
			m?.left === void 0 ? "" : `--li-pl: var(--pui-spacing-${m.left})`
		].filter(Boolean).join("; "),
		children: [
			/* @__PURE__ */ n("div", {
				className: "ListItem__content",
				onClick: me,
				draggable: h,
				onMouseDown: h ? (e) => {
					V.current = e.target;
				} : void 0,
				onDragStart: h ? (e) => {
					if (J(V.current)) {
						e.preventDefault();
						return;
					}
					Z(e);
				} : void 0,
				onDragEnd: h ? Q : void 0,
				children: /* @__PURE__ */ n("div", {
					className: "ListItem__content-inner",
					children: [
						v && /* @__PURE__ */ n("div", {
							className: "ListItem__collapse-toggle",
							"data-pui-interactive": "true",
							onClick: (e) => {
								e.stopPropagation(), W || G((e) => !e), b?.({
									event: e,
									collapsed: !K
								});
							},
							children: /* @__PURE__ */ n(r, {
								intent: "neutral",
								intentModifier: y,
								disabled: y === "default",
								glyph: K ? a : i,
								size: 16,
								variant: "default"
							})
						}),
						h && /* @__PURE__ */ n("div", {
							className: "ListItem__drag-handle",
							draggable: !0,
							onDragStart: (e) => {
								e.stopPropagation(), Z(e);
							},
							onDragEnd: Q,
							children: /* @__PURE__ */ n(r, {
								glyph: o,
								iconColor: "var(--pui-color-neutral-icon-tertiary)",
								size: 16
							})
						}),
						E && /* @__PURE__ */ n("div", {
							className: "ListItem__children",
							children: E
						})
					]
				})
			}),
			T && /* @__PURE__ */ n("div", {
				className: "ListItem__items",
				children: T
			}),
			ce && /* @__PURE__ */ n("div", {
				ref: H,
				className: "ListItem__end-dropzone",
				onDragOver: ge,
				onDrop: $,
				onDragLeave: _e
			})
		]
	});
});
//#endregion
export { d as ListItem };
