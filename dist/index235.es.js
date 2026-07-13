import "./index235.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { useListContext as r } from "./index233.es.js";
/* empty css            */
import { useEffect as i, useRef as a } from "preact/hooks";
var o = t(({ id: t, className: o, children: s, ...c }, l) => {
	let { reorderItems: u, registerRootElement: d, getPathForId: f } = r(), p = a(null), m = a(null), h = a({
		el: null,
		pos: null
	});
	i(() => {
		let e = p.current;
		if (!e) return;
		let t = e.closest(".ListItem"), n = t?.getAttribute("data-nesting-level"), r = t ? (n ? parseInt(n, 10) : 0) + 1 : 0;
		try {
			e.style.setProperty("--level", String(r));
		} catch {}
	}, []), i(() => {
		let e = p.current;
		if (!(!d || !e)) return d(e);
	}, [d]);
	let g = () => {
		let e = p.current;
		e && (e.querySelectorAll(".ListItem").forEach((e) => {
			e.classList.remove("ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self", "ListItem_drop-parent");
		}), h.current = {
			el: null,
			pos: null
		}, m.current = null);
	};
	i(() => {
		let e = () => {
			g();
		};
		return document.addEventListener("resetDragStates", e), document.addEventListener("dragend", e), () => {
			document.removeEventListener("resetDragStates", e), document.removeEventListener("dragend", e);
		};
	}, []);
	let _ = (e) => {
		let t = e.currentTarget, n = e.relatedTarget;
		n && t.contains(n) || g();
	}, v = (e) => {
		let t = e.currentTarget;
		e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move");
		let n = Array.from(t.children).filter((e) => e.classList.contains("ListItem")), r = e.clientY, i = t.closest(".ListItem");
		if (i) {
			i.classList.remove("ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self");
			let e = i.parentElement?.closest(".ListContainer");
			e && Array.from(e.children).filter((e) => e.classList.contains("ListItem")).forEach((e) => {
				e.classList.remove("ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self");
			});
		}
		let a = [], o = window.__puiDraggingIds;
		if (Array.isArray(o)) a = o;
		else {
			let t = e.dataTransfer?.getData("text/plain");
			t && (a = [t]);
		}
		let s = null, c = Infinity;
		for (let e of n) {
			let t = e.getAttribute("data-item-id") || "";
			if (!a.includes(t)) continue;
			let n = e.querySelector(".ListItem__content");
			if (!n) continue;
			let i = n.getBoundingClientRect();
			if (r < i.top || r > i.bottom) continue;
			let o = i.top + i.height / 2, l = Math.abs(r - o);
			l < c && (c = l, s = e);
		}
		if (s) {
			e.stopPropagation();
			let n = h.current, i = s.querySelector(".ListItem__content");
			if (!i) {
				let e = s.classList.contains("ListItem_drag-over"), t = s.classList.contains("ListItem_drag-self");
				if (e && t && n.el === s && n.pos === "self") return;
				n.el && n.el !== s && n.el.classList.remove("ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), s.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), s.classList.add("ListItem_drag-over", "ListItem_drag-self"), h.current = {
					el: s,
					pos: "self"
				};
				return;
			}
			let a = i.getBoundingClientRect(), o = r - a.top, c = a.height, l = Math.max(0, c - 8), u = c + 1, d = "inside";
			o >= 0 && o <= 8 ? d = "above" : o >= l && o <= u && (d = "below");
			let f = s.classList.contains("ListItem_has-children"), p = s.classList.contains("ListItem_collapsed");
			d === "below" && f && !p && (d = "inside");
			let g = d === "above", _ = d === "below", v = s.classList.contains("ListItem_drag-over"), y = s.classList.contains("ListItem_drag-self"), b = s.classList.contains("ListItem_drag-above"), x = s.classList.contains("ListItem_drag-below"), S = s.classList.contains("ListItem_drag-inside");
			if (n.el === s && n.pos === "self" && v === !0 && y === !0 && b === g && x === _ && S === !1) return;
			n.el && n.el !== s ? n.el.classList.remove("ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self") : n.el === s && n.el.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), s.classList.add("ListItem_drag-over", "ListItem_drag-self"), d === "above" ? s.classList.add("ListItem_drag-above") : d === "below" && s.classList.add("ListItem_drag-below"), h.current = {
				el: s,
				pos: "self"
			};
			let C = s.getAttribute("data-accepts-children") !== "false", w = t.closest(".ListItem"), T;
			T = d === "inside" && C ? s : w || s, (m.current !== T || T && !T.classList.contains("ListItem_drop-parent")) && (document.querySelectorAll(".ListItem_drop-parent").forEach((e) => {
				e.classList.remove("ListItem_drop-parent");
			}), T && T.classList.add("ListItem_drop-parent"), m.current = T);
			return;
		}
		let l = null, u = null, d = Infinity;
		for (let e of n) {
			let t = e.getAttribute("data-item-id") || "";
			if (a.includes(t)) continue;
			let n = e.querySelector(".ListItem__content");
			if (!n) continue;
			let i = n.getBoundingClientRect();
			if (r < i.top || r > i.bottom + 16) continue;
			let o = r - i.top, s = i.height, c = Math.max(0, s - 8), f = s + 1, p, m = o >= 0 && o <= 8, h = o >= c && o <= f, g = e.getAttribute("data-accepts-children") !== "false", _ = e.classList.contains("ListItem_has-children"), v = e.classList.contains("ListItem_collapsed");
			p = m ? "above" : h ? "below" : g ? "inside" : o < s / 2 ? "above" : "below", p === "below" && _ && !v && g && (p = "inside");
			let y = p === "above" ? i.top : p === "below" ? i.bottom : i.top + s / 2, b = Math.abs(r - y);
			b < d && (d = b, l = e, u = p);
		}
		if (!l || !u) {
			let e = h.current;
			e.el && (e.el.classList.remove("ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), h.current = {
				el: null,
				pos: null
			});
			return;
		}
		let f = h.current, p = l.getAttribute("data-accepts-children") !== "false", g = u === "inside" && !p ? "below" : u, _ = g === "above", v = g === "below", y = g === "inside", b = l.classList.contains("ListItem_drag-over"), x = l.classList.contains("ListItem_drag-above"), S = l.classList.contains("ListItem_drag-below"), C = l.classList.contains("ListItem_drag-inside");
		if (f.el === l && f.pos === u && b === !0 && x === _ && S === v && C === y) {
			let n = t.closest(".ListItem"), r = u === "inside" ? l : n || null;
			m.current !== r && (document.querySelectorAll(".ListItem_drop-parent").forEach((e) => {
				e.classList.remove("ListItem_drop-parent");
			}), r && r.classList.add("ListItem_drop-parent"), m.current = r), h.current = {
				el: l,
				pos: u
			}, e.stopPropagation();
			return;
		}
		f.el && f.el !== l ? f.el.classList.remove("ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self") : f.el === l && f.el.classList.remove("ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self"), l.classList.add("ListItem_drag-over"), g === "above" ? l.classList.add("ListItem_drag-above") : g === "below" ? l.classList.add("ListItem_drag-below") : g === "inside" && l.classList.add("ListItem_drag-inside");
		let w = t.closest(".ListItem"), T;
		T = u === "inside" ? l : w || l, (m.current !== T || T && !T.classList.contains("ListItem_drop-parent")) && (document.querySelectorAll(".ListItem_drop-parent").forEach((e) => {
			e.classList.remove("ListItem_drop-parent");
		}), T && T.classList.add("ListItem_drop-parent"), m.current = T), h.current = {
			el: l,
			pos: u
		}, e.stopPropagation();
	}, y = (e) => {
		e.preventDefault(), e.stopPropagation();
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
					let r = e && f?.(e) || [];
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
			i < 0 && (i = 0), i > r.length && (i = r.length), u(t, i, o.length ? o : void 0);
		}
	};
	return /* @__PURE__ */ n("div", {
		id: t,
		className: [e("ListContainer", void 0, void 0), o].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: (e) => {
			p.current = e, typeof l == "function" ? l(e) : l && (l.current = e);
		},
		...c,
		onDragOver: v,
		onDrop: y,
		onDragLeave: _,
		children: s
	});
});
//#endregion
export { o as ListContainer };
