import { jsx as e } from "./index14.es.js";
import { useCallback as t, useContext as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "preact/hooks";
import { createContext as s } from "preact";
//#region src/components/MenuContext/MenuContext.tsx
var c = s(void 0), l = () => {
	let e = n(c);
	if (!e) throw Error("MenuContext not found");
	return e;
}, u = () => n(c), d = ({ triggerRef: n, anchorRef: s, open: l, setOpen: u, children: d }) => {
	let f = a([]), p = a(!1), m = a({
		query: "",
		lastTime: 0
	}), [h, g] = o(null), [_, v] = o(null), [y, b] = o(!1), [x, S] = o(!1), [C, w] = o(null), T = t((e) => (f.current.push(e), () => {
		f.current = f.current.filter((t) => t.id !== e.id);
	}), []), E = t(() => f.current.filter((e) => !e.disabled && e.ref.current).slice().sort((e, t) => {
		let n = e.ref.current, r = t.ref.current;
		if (!n || !r || n === r) return 0;
		let i = n.compareDocumentPosition(r);
		return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
	}), []), D = t((e) => {
		let t = E();
		if (!t.length) return;
		let n = e ?? t[0]?.id, r = t.find((e) => e.id === n);
		r && r.ref.current && (r.ref.current.focus({ preventScroll: !0 }), g(n ?? null), w(n ?? null));
	}, [E]), O = t(() => {
		x || g(null);
	}, [x]), k = t((e) => {
		x || (v(e), e !== null && b(!1));
	}, [x]), A = t((e) => {
		let t = E();
		if (!t.length) return;
		let n = t.findIndex((e) => e.id === h), r;
		r = n === -1 ? e === "next" ? 0 : t.length - 1 : e === "next" ? (n + 1) % t.length : (n - 1 + t.length) % t.length;
		let i = t[r];
		i?.ref.current && (i.ref.current.focus({ preventScroll: !0 }), g(i.id), w(i.id));
	}, [h, E]);
	r(() => {
		if (!n?.current) return;
		let e = n.current, t = (t) => {
			let { key: n } = t;
			if (n === "Escape" || n === "Esc") {
				if (!l) return;
				t.preventDefault(), u?.(!1), e.focus();
				return;
			}
			if (n === "Enter" || n === " ") {
				if (t.preventDefault(), !l) p.current = !0, u?.(!0);
				else {
					let e = f.current.filter((e) => !e.disabled);
					if (!e.length) return;
					(e.find((e) => e.id === h) ?? e[0]).ref.current?.click();
				}
				return;
			}
			if (n === "ArrowDown") {
				t.preventDefault(), l ? A("next") : (p.current = !0, u?.(!0));
				return;
			}
			n === "ArrowUp" && l && (t.preventDefault(), A("prev"));
		};
		return e.addEventListener("keydown", t), () => {
			e.removeEventListener("keydown", t);
		};
	}, [
		n,
		l,
		u,
		h,
		A
	]), r(() => {
		if (!n?.current) return;
		let e = n.current, t = (e) => {
			e.preventDefault(), p.current = !1, u?.(!l);
		};
		return e.addEventListener("mousedown", t), () => {
			e.removeEventListener("mousedown", t);
		};
	}, [
		n,
		l,
		u
	]), r(() => {
		if (!l) {
			g(null), v(null), b(!1), S(!1), w(null), m.current = {
				query: "",
				lastTime: 0
			};
			return;
		}
		p.current && (p.current = !1, requestAnimationFrame(() => {
			D(void 0);
		}));
	}, [D, l]);
	let j = s ?? n;
	r(() => {
		if (!l) return;
		let e = (e) => {
			let { key: t, shiftKey: r, metaKey: i, ctrlKey: a, altKey: o } = e, s = e.target;
			if (t === "Escape" || t === "Esc") {
				e.preventDefault(), e.stopPropagation(), u?.(!1), n?.current?.focus();
				return;
			}
			if (!(i || a || o)) {
				if (t === "Enter" || t === " ") {
					if (s && (s.tagName === "INPUT" || s.tagName === "TEXTAREA" || s.isContentEditable)) return;
					e.preventDefault(), e.stopPropagation();
					let t = E();
					if (!t.length) return;
					let n;
					!y && _ && (n = t.find((e) => e.id === _)), !n && h && (n = t.find((e) => e.id === h)), n ||= t[0], n?.ref.current && (n.ref.current.click(), n.ref.current.focus({ preventScroll: !0 }), g(n.id), w(n.id), b(!0), S(!0));
					return;
				}
				if (t === "Tab") {
					e.preventDefault(), e.stopPropagation(), A(r ? "prev" : "next"), b(!0), S(!0);
					return;
				}
				if (t === "ArrowDown" || t === "ArrowUp") {
					if (s && (s.tagName === "INPUT" || s.tagName === "TEXTAREA" || s.isContentEditable)) return;
					e.preventDefault(), e.stopPropagation();
					let n = E();
					if (!n.length) return;
					let r = n.length;
					if (!h) {
						if (!y && _) {
							let e = n.findIndex((e) => e.id === _);
							if (e !== -1) {
								let i = n[t === "ArrowDown" ? (e + 1) % r : (e - 1 + r) % r];
								i?.ref.current && (i.ref.current.focus({ preventScroll: !0 }), g(i.id), w(i.id), b(!0), S(!0));
								return;
							}
						}
						if (C) {
							let e = n.findIndex((e) => e.id === C);
							if (e !== -1) {
								let i = n[t === "ArrowDown" ? (e + 1) % r : (e - 1 + r) % r];
								i?.ref.current && (i.ref.current.focus({ preventScroll: !0 }), g(i.id), w(i.id), b(!0), S(!0));
								return;
							}
						}
						D(void 0), b(!0), S(!0);
						return;
					}
					let i = n.findIndex((e) => e.id === h), a = i === -1 ? 0 : i, o = n[t === "ArrowDown" ? (a + 1) % r : (a - 1 + r) % r];
					o?.ref.current && (o.ref.current.focus({ preventScroll: !0 }), g(o.id), w(o.id), b(!0), S(!0));
				}
			}
		};
		return window.addEventListener("keydown", e, !0), () => {
			window.removeEventListener("keydown", e, !0);
		};
	}, [
		D,
		h,
		E,
		y,
		_,
		C,
		A,
		l,
		u,
		n
	]), r(() => {
		if (!l) return;
		let e = () => {
			x && S(!1);
		};
		return window.addEventListener("pointermove", e), () => {
			window.removeEventListener("pointermove", e);
		};
	}, [l, x]), r(() => {
		if (!l) return;
		let e = (e) => {
			let { key: t, metaKey: n, ctrlKey: r, altKey: i } = e, a = e.target;
			if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable) || n || r || i || t === " " || t.length !== 1) return;
			let o = t.toLowerCase();
			if (!/^[\w !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/.test(o)) return;
			e.preventDefault();
			let s = Date.now(), { lastTime: c } = m.current, { query: l } = m.current;
			s - c > 500 && (l = ""), l += o, m.current = {
				query: l,
				lastTime: s
			};
			let u = E();
			if (!u.length) return;
			let d = l.toLowerCase(), f = (e) => {
				let t = e.ref.current;
				return t ? (t.textContent || t.innerText || "").trim().toLowerCase() : "";
			}, p = u.find((e) => f(e).startsWith(d)) || u.find((e) => f(e).includes(d));
			p?.ref.current && (p.ref.current.focus({ preventScroll: !0 }), g(p.id), w(p.id));
		};
		return window.addEventListener("keydown", e), () => {
			window.removeEventListener("keydown", e);
		};
	}, [E, l]);
	let M = t((e) => {
		g(e);
	}, []), N = i(() => ({
		triggerRef: n,
		anchorRef: j,
		open: l !== void 0 && l,
		setOpen: u === void 0 ? () => {} : u,
		registerItem: T,
		focusedItemId: h,
		setFocusedItem: M,
		clearFocus: O,
		setHoveredItem: k,
		keyboardInteraction: y
	}), [
		n,
		j,
		l,
		u,
		T,
		h,
		M,
		O,
		k,
		y
	]);
	return /* @__PURE__ */ e(c.Provider, {
		value: N,
		children: d
	});
};
//#endregion
export { d as MenuContext, c as RawMenuContext, l as useMenuContext, u as useMenuContextOptional };
