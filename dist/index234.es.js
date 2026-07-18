import { jsx as e } from "./index15.es.js";
import { useCallback as t, useContext as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "preact/hooks";
import { createContext as s } from "preact";
//#region src/components/ListContext/ListContext.tsx
var c = s(void 0), l = [], u = (e, t) => {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}, d = (e) => typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e)), f = () => {
	let e = n(c);
	if (!e) throw Error("ListContext not found");
	return e;
}, p = (n) => {
	let { items: s, selectedItemIds: f = l, selectionMode: p, deselectOnClickOutside: m = !1, onItemsChange: h, onSelectionChange: g, onKeyDown: _, children: v } = n, y = s !== void 0, [b, x] = o(s ?? []), [S, C] = o(new Set(f)), [w, T] = o(/* @__PURE__ */ new Set()), E = a(/* @__PURE__ */ new Map()), D = a(/* @__PURE__ */ new Map()), O = y && h !== void 0, k = g !== void 0, A = y ? s : b, j = i(() => k ? new Set(f) : S, [
		k,
		f,
		S
	]), M = a(null), N = a(/* @__PURE__ */ new Set()), P = t((e) => {
		let t = [], n = (e) => {
			e.forEach((e) => {
				t.push(e.id), e.items && e.items.length && n(e.items);
			});
		};
		return n(e), t;
	}, []), F = t((e) => {
		let t = [], n = (r) => {
			for (let i = 0; i < r.length; i++) {
				let a = r[i];
				if (a.id === e) {
					let e = (n) => {
						if (n) for (let r = 0; r < n.length; r++) {
							let i = n[r];
							t.push(i.id), e(i.items);
						}
					};
					return e(a.items), !0;
				}
				if (a.items && n(a.items)) return !0;
			}
			return !1;
		};
		return n(A), t;
	}, [A]), I = t((e) => [e, ...F(e)].filter((e) => E.current.get(e)?.selectable !== !1), [F]), L = t((e) => {
		let t = new Set(e);
		k || C(t), g?.({ selectedItemIds: Array.from(t) });
	}, [k, g]), R = t((e, t) => {
		if (p === void 0) return j;
		let n = E.current.get(e);
		if (n?.selectable === !1) return j;
		let r = n?.selectionScope === "withDescendants", i = !!t?.additive, a = !!t?.range, o = (t) => (M.current = e, u(t, j) ? j : (k || C(t), g?.({ selectedItemIds: Array.from(t) }), t));
		if (p === "single") {
			let t;
			if (r) {
				let n = I(e);
				t = n.length > 0 && n.every((e) => j.has(e)) ? /* @__PURE__ */ new Set() : new Set(n);
			} else {
				let n = j.has(e);
				t = /* @__PURE__ */ new Set(), n || t.add(e);
			}
			return o(t);
		}
		if (a) {
			let t = P(A), n = M.current || e, r = t.indexOf(n), i = t.indexOf(e);
			if (r === -1 && (n = e, r = t.indexOf(n)), r === -1 || i === -1) return j;
			let [a, s] = r <= i ? [r, i] : [i, r], c = t.slice(a, s + 1), l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), f = (e, t) => {
				e.forEach((e) => {
					d.set(e.id, t), e.items && f(e.items, e.id);
				});
			};
			f(A, null);
			let p = (e) => {
				let t = e;
				for (; t;) {
					if (u.has(t)) return !0;
					t = d.get(t) || null;
				}
				return !1;
			};
			return c.forEach((e) => {
				let t = E.current.get(e);
				if (t?.selectable === !1) {
					t?.selectionScope === "withDescendants" && u.add(e);
					return;
				}
				p(e) || (t?.selectionScope === "withDescendants" ? I(e).forEach((e) => l.add(e)) : l.add(e));
			}), o(l);
		}
		if (i) {
			let t = new Set(j);
			if (r) {
				let n = I(e);
				n.length > 0 && n.every((e) => t.has(e)) ? n.forEach((e) => t.delete(e)) : n.forEach((e) => t.add(e));
			} else t.has(e) ? t.delete(e) : t.add(e);
			return o(t);
		}
		let s;
		if (r) {
			let t = I(e), n = new Set(t);
			s = n.size === j.size && t.every((e) => j.has(e)) ? /* @__PURE__ */ new Set() : n;
		} else s = j.size === 1 && j.has(e) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([e]);
		return o(s);
	}, [
		p,
		j,
		k,
		g,
		A,
		P,
		I
	]), z = t((e, t, n) => {
		if (e.length === 0) return;
		let r = d(A), i = (() => {
			let e = /* @__PURE__ */ new Map(), t = (n, r) => {
				n.forEach((n, i) => {
					let a = [...r, i];
					e.set(n.id, a), n.items && n.items.length && t(n.items, a);
				});
			};
			return t(A, []), e;
		})();
		if (n && n.length > 0) for (let t of e) {
			let e = i.get(t);
			if (e && n.length >= e.length && e.every((e, t) => n[t] === e)) return;
		}
		let a = (e, t) => {
			let n = [];
			for (let r = e.length - 1; r >= 0; r--) t.includes(e[r].id) && n.unshift(e.splice(r, 1)[0]);
			return e.forEach((e) => {
				if (e.items) {
					let r = a(e.items, t);
					n.push(...r);
				}
			}), n;
		}, o = (e, t, n, r) => {
			if (t.length === 0) {
				let t = Math.max(0, Math.min(n, e.length));
				e.splice(t, 0, ...r);
				return;
			}
			let i = e[Math.max(0, Math.min(t[0], Math.max(0, e.length - 1)))];
			if (t.length === 1) {
				if (!i) return;
				i.items || (i.items = []);
				let e = Math.max(0, Math.min(n, i.items.length));
				i.items.splice(e, 0, ...r);
				return;
			}
			for (let e = 1; e < t.length; e++) {
				if (!i) return;
				i.items || (i.items = []);
				let n = Math.max(0, Math.min(t[e], Math.max(0, i.items.length - 1)));
				i = i.items[n];
			}
			if (!i) return;
			i.items || (i.items = []);
			let a = Math.max(0, Math.min(n, i.items.length));
			i.items.splice(a, 0, ...r);
		}, s = a(r, e);
		if (s.length === 0) return;
		let c = n && n.length ? n : [], l = 0;
		e.forEach((e) => {
			let n = i.get(e);
			if (!n || n.length === 0) return;
			let r = n.slice(0, n.length - 1), a = n[n.length - 1];
			r.length === c.length && r.every((e, t) => e === c[t]) && a < t && l++;
		});
		let u = Math.max(0, t - l), f = [...c];
		if (f.length > 0) {
			let t = f.slice(0, f.length - 1), n = f[f.length - 1], r = 0;
			e.forEach((e) => {
				let a = i.get(e);
				if (!a || a.length === 0) return;
				let o = a.slice(0, a.length - 1), s = a[a.length - 1];
				o.length === t.length && o.every((e, n) => e === t[n]) && s < n && r++;
			}), f[f.length - 1] = Math.max(0, n - r);
		}
		o(r, f, u, s), O || x(r), h?.({ items: r });
	}, [
		A,
		h,
		O
	]);
	r(() => {
		if (p === void 0 || !m) return;
		let e = (e) => {
			let t = e.target;
			if (t) {
				for (let e of N.current) if (e.contains(t)) return;
				if (j.size > 0) {
					let e = /* @__PURE__ */ new Set();
					k || C(e), g?.({ selectedItemIds: Array.from(e) });
				}
			}
		};
		return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
	}, [
		p,
		m,
		j,
		k,
		g
	]);
	let [B, V] = o(null);
	r(() => {
		let e = document.createElement("div");
		return e.style.width = "20px", e.style.height = "20px", e.style.opacity = "0", e.style.position = "absolute", e.style.top = "-1000px", e.style.pointerEvents = "none", document.body.appendChild(e), V(e), () => {
			document.body.removeChild(e), V(null);
		};
	}, []);
	let H = t((e) => e ? (N.current.add(e), () => {
		N.current.delete(e);
	}) : () => {}, []), U = t((e, t) => (E.current.set(e, t), () => {
		E.current.delete(e);
	}), []), W = t((e) => D.current.get(e) || null, []), G = t((e) => E.current.get(e), []);
	r(() => {
		let e = /* @__PURE__ */ new Map(), t = (n, r) => {
			n.forEach((n, i) => {
				let a = [...r, i];
				e.set(n.id, a), n.items && n.items.length && t(n.items, a);
			});
		};
		t(A, []), D.current = e;
	}, [A]), r(() => {
		k && C((e) => {
			let t = new Set(f);
			return u(e, t) ? e : t;
		});
	}, [f, k]), r(() => {
		let e = j;
		if (e.size === 0) {
			T(/* @__PURE__ */ new Set());
			return;
		}
		let t = /* @__PURE__ */ new Map(), n = (e, r) => {
			e.forEach((e) => {
				t.set(e.id, r), e.items && e.items.length && n(e.items, e.id);
			});
		};
		n(A, null);
		let r = /* @__PURE__ */ new Map(), i = (t) => {
			if (r.has(t)) return r.get(t);
			let n = I(t), i = n.length > 0 && n.every((t) => e.has(t));
			return r.set(t, i), i;
		}, a = /* @__PURE__ */ new Set();
		E.current.forEach((t, n) => {
			t.selectionScope === "individual" && e.has(n) && a.add(n);
		}), E.current.forEach((n, r) => {
			if (n.selectionScope !== "withDescendants" || !e.has(r) || !i(r)) return;
			let o = t.get(r) ?? null;
			for (; o;) {
				if (E.current.get(o)?.selectionScope === "withDescendants" && e.has(o) && i(o)) return;
				o = t.get(o) ?? null;
			}
			a.add(r);
		}), T(a);
	}, [
		I,
		A,
		j
	]);
	let K = i(() => ({
		items: A,
		selectedItemIds: j,
		selectionOriginIds: w,
		deselectOnClickOutside: m,
		setSelection: L,
		toggleSelect: R,
		reorderItems: z,
		selectionMode: p,
		registerRootElement: H,
		registerItem: U,
		getPathForId: W,
		getItemMeta: G,
		getBranchIds: I,
		dragImage: B,
		onKeyDown: _
	}), [
		A,
		j,
		w,
		m,
		L,
		R,
		z,
		p,
		H,
		U,
		W,
		G,
		I,
		B,
		_
	]);
	return /* @__PURE__ */ e(c.Provider, {
		value: K,
		children: v
	});
};
//#endregion
export { p as ListContext, f as useListContext };
