import "./index236.es.css";
import { bem as e } from "./index8.es.js";
import { DRAG_ZONE_CLASSES as t, clearDropItself as n, getChildListItems as r, getDragOverIds as i, mergeRefs as a, resolveDraggedIds as o, setDropParentElement as s } from "./index10.es.js";
import { typedForwardRef as c } from "./index11.es.js";
import { jsx as l } from "./index15.es.js";
import { useListContext as u } from "./index234.es.js";
/* empty css            */
import { useEffect as d, useRef as f } from "preact/hooks";
//#region src/components/ListContainer/ListContainer.tsx
var p = (e, t, n) => {
	if (e.classList.remove("ListItem_drag-between-selected"), t !== "above" && t !== "below") return;
	let i = e.getAttribute("data-item-id");
	if (!i || !n.includes(i)) return;
	let a = t === "above" ? e.previousElementSibling : e.nextElementSibling;
	if (a?.classList.contains("ListItem")) {
		let t = a.getAttribute("data-item-id");
		if (t && n.includes(t)) {
			e.classList.add("ListItem_drag-between-selected");
			return;
		}
	}
	if (t === "below") {
		let t = e.querySelector(":scope > .ListItem__items > .ListContainer > .ListItem")?.getAttribute("data-item-id");
		t && n.includes(t) && e.classList.add("ListItem_drag-between-selected");
		return;
	}
	let o = e.parentElement?.closest(".ListItem"), s = e.parentElement;
	if (!o || !s?.classList.contains("ListContainer") || r(s)[0] !== e) return;
	let c = o.getAttribute("data-item-id");
	c && n.includes(c) && e.classList.add("ListItem_drag-between-selected");
}, m = c(({ id: c, className: m, children: h, ...g }, _) => {
	let { reorderItems: v, registerRootElement: y, getPathForId: b } = u(), x = f(null), S = f(null), C = f({
		el: null,
		pos: null
	});
	d(() => {
		let e = x.current;
		if (!e) return;
		let t = e.closest(".ListItem"), n = t?.getAttribute("data-nesting-level"), r = t ? (n ? parseInt(n, 10) : 0) + 1 : 0;
		try {
			e.style.setProperty("--level", String(r));
		} catch {}
	}, []), d(() => {
		let e = x.current;
		if (!(!y || !e)) return y(e);
	}, [y]);
	let w = () => {
		let e = x.current;
		e && (e.querySelectorAll(".ListItem").forEach((e) => {
			e.classList.remove(...t, "ListItem_drop-parent", "ListItem_drop-itself");
		}), n(), C.current = {
			el: null,
			pos: null
		}, S.current = null);
	}, T = (e) => {
		s(e, S);
	};
	d(() => {
		let e = () => {
			w();
		};
		return document.addEventListener("resetDragStates", e), document.addEventListener("dragend", e), () => {
			document.removeEventListener("resetDragStates", e), document.removeEventListener("dragend", e);
		};
	}, []);
	let E = (e) => {
		let t = e.currentTarget, n = e.relatedTarget;
		n && t.contains(n) || w();
	}, D = (e) => {
		let n = e.currentTarget;
		e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move");
		let a = r(n), o = e.clientY, s = n.closest(".ListItem");
		if (s) {
			s.classList.remove(...t);
			let e = s.parentElement?.closest(".ListContainer");
			e && r(e).forEach((e) => {
				e.classList.remove(...t);
			});
		}
		let c = i(e.dataTransfer), l = null, u = Infinity;
		for (let e of a) {
			let t = e.getAttribute("data-item-id") || "";
			if (!c.includes(t)) continue;
			let n = e.querySelector(".ListItem__content");
			if (!n) continue;
			let r = n.getBoundingClientRect();
			if (o < r.top || o > r.bottom) continue;
			let i = r.top + r.height / 2, a = Math.abs(o - i);
			a < u && (u = a, l = e);
		}
		if (l) {
			e.stopPropagation();
			let r = C.current, i = l.querySelector(".ListItem__content");
			if (!i) {
				let e = l.classList.contains("ListItem_drag-over"), n = l.classList.contains("ListItem_drag-self");
				if (e && n && r.el === l && r.pos === "self") return;
				r.el && r.el !== l && r.el.classList.remove(...t), l.classList.remove(...t), l.classList.add("ListItem_drag-over", "ListItem_drag-self"), C.current = {
					el: l,
					pos: "self"
				};
				return;
			}
			let a = i.getBoundingClientRect(), s = o - a.top, u = a.height, d = Math.max(0, u - 8), f = u + 1, m = "inside";
			s >= 0 && s <= 8 ? m = "above" : s >= d && s <= f && (m = "below");
			let h = l.classList.contains("ListItem_has-children"), g = l.classList.contains("ListItem_collapsed");
			m === "below" && h && !g && (m = "inside");
			let _ = m === "above", v = m === "below", y = l.classList.contains("ListItem_drag-over"), b = l.classList.contains("ListItem_drag-self"), x = l.classList.contains("ListItem_drag-above"), S = l.classList.contains("ListItem_drag-below"), w = l.classList.contains("ListItem_drag-inside");
			if (r.el === l && r.pos === "self" && y === !0 && b === !0 && x === _ && S === v && w === !1) return;
			(r.el && r.el !== l || r.el === l) && r.el.classList.remove(...t), l.classList.add("ListItem_drag-over", "ListItem_drag-self"), m === "above" ? l.classList.add("ListItem_drag-above") : m === "below" && l.classList.add("ListItem_drag-below"), p(l, m, c), C.current = {
				el: l,
				pos: "self"
			};
			let E = l.getAttribute("data-accepts-children") !== "false", D = n.closest(".ListItem"), O;
			O = m === "inside" && E ? l : D || l, T(O);
			return;
		}
		let d = null, f = null, m = Infinity;
		for (let e of a) {
			let t = e.getAttribute("data-item-id") || "";
			if (c.includes(t)) continue;
			let n = e.querySelector(".ListItem__content");
			if (!n) continue;
			let r = n.getBoundingClientRect();
			if (o < r.top || o > r.bottom + 16) continue;
			let i = o - r.top, a = r.height, s = Math.max(0, a - 8), l = a + 1, u, p = i >= 0 && i <= 8, h = i >= s && i <= l, g = e.getAttribute("data-accepts-children") !== "false", _ = e.classList.contains("ListItem_has-children"), v = e.classList.contains("ListItem_collapsed");
			u = p ? "above" : h ? "below" : g ? "inside" : i < a / 2 ? "above" : "below", u === "below" && _ && !v && g && (u = "inside");
			let y = u === "above" ? r.top : u === "below" ? r.bottom : r.top + a / 2, b = Math.abs(o - y);
			b < m && (m = b, d = e, f = u);
		}
		if (!d || !f) {
			let e = C.current;
			e.el && (e.el.classList.remove(...t), C.current = {
				el: null,
				pos: null
			});
			return;
		}
		let h = C.current, g = d.getAttribute("data-accepts-children") !== "false", _ = f === "inside" && !g ? "below" : f, v = _ === "above", y = _ === "below", b = _ === "inside", x = d.classList.contains("ListItem_drag-over"), S = d.classList.contains("ListItem_drag-above"), w = d.classList.contains("ListItem_drag-below"), E = d.classList.contains("ListItem_drag-inside");
		if (h.el === d && h.pos === f && x === !0 && S === v && w === y && E === b) {
			let t = n.closest(".ListItem");
			T(f === "inside" ? d : t || null), C.current = {
				el: d,
				pos: f
			}, e.stopPropagation();
			return;
		}
		(h.el && h.el !== d || h.el === d) && h.el.classList.remove(...t), d.classList.add("ListItem_drag-over"), _ === "above" ? d.classList.add("ListItem_drag-above") : _ === "below" ? d.classList.add("ListItem_drag-below") : _ === "inside" && d.classList.add("ListItem_drag-inside"), p(d, _, c);
		let D = n.closest(".ListItem"), O;
		O = f === "inside" ? d : D || d, T(O), C.current = {
			el: d,
			pos: f
		}, e.stopPropagation();
	}, O = (e) => {
		e.preventDefault(), e.stopPropagation();
		let t = o(e.dataTransfer);
		if (t && t.length) {
			let n = e.currentTarget, r = Array.from(n.children), i = r.length, a = "below";
			for (let e = 0; e < r.length; e++) {
				let t = r[e];
				if (t.classList.contains("ListItem_drag-over")) {
					t.classList.contains("ListItem_drag-above") ? (a = "above", i = e) : t.classList.contains("ListItem_drag-below") ? (a = "below", i = e + 1) : t.classList.contains("ListItem_drag-inside") && (t.getAttribute("data-accepts-children") === "false" ? (a = "below", i = e + 1) : (a = "inside", i = 0));
					break;
				}
			}
			let o = [];
			for (let e = 0; e < r.length; e++) {
				let n = r[e];
				if (n.classList.contains("ListItem_drag-over")) {
					let e = n.getAttribute("data-item-id") || "";
					if (e && t.includes(e)) {
						let e = new CustomEvent("resetDragStates");
						document.dispatchEvent(e);
						return;
					}
					let r = e && b?.(e) || [];
					if (a === "inside") o = r, i = 0;
					else if (r.length) {
						let e = r.slice(0, -1), t = r[r.length - 1];
						o = e, i = a === "above" ? t : t + 1;
					}
					break;
				}
			}
			let s = new CustomEvent("resetDragStates");
			if (document.dispatchEvent(s), a !== "inside") for (let e = 0; e < r.length; e++) {
				let n = r[e];
				if (n.classList.contains("ListItem_drag-above") || n.classList.contains("ListItem_drag-below")) {
					let e = n.getAttribute("data-item-id");
					if (e && t.includes(e)) return;
					break;
				}
			}
			i < 0 && (i = 0), i > r.length && (i = r.length), v(t, i, o.length ? o : void 0);
		}
	};
	return /* @__PURE__ */ l("div", {
		id: c,
		className: [e("ListContainer", void 0, void 0), m].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: a(x, _),
		...g,
		onDragOver: D,
		onDrop: O,
		onDragLeave: E,
		children: h
	});
});
//#endregion
export { m as ListContainer };
