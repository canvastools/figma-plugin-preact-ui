import { jsx as e } from "./index15.es.js";
import { useCallback as t, useContext as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "preact/hooks";
import { createContext as s } from "preact";
//#region src/components/TabContext/TabContext.tsx
var c = s(void 0), l = () => {
	let e = n(c);
	if (!e) throw Error("TabContext not found");
	return e;
}, u = ({ defaultActiveId: n = "", activeId: s, onTabChange: l, children: u }) => {
	let [d, f] = o(n), p = s === void 0 ? d : s, m = t((e) => {
		s === void 0 && f(e), l?.({ id: e });
	}, [s, l]);
	r(() => {
		s !== void 0 && f(s);
	}, [s]);
	let h = a([]), g = a(null), _ = t((e, t) => {
		let n = h.current, r = n.findIndex((t) => t.id === e);
		if (!t) {
			r !== -1 && n.splice(r, 1);
			return;
		}
		r === -1 ? n.push({
			id: e,
			ref: t
		}) : n[r].ref = t;
	}, []), v = t((e) => {
		let t = h.current;
		if (!t.length) return;
		let n = e ?? t[0]?.id;
		if (!n) return;
		let r = t.find((e) => e.id === n) ?? t[0];
		r?.ref && r.ref.focus();
	}, []), y = (e) => {
		let t = h.current;
		if (!t.length) return;
		let n = document.activeElement, r = n ? t.findIndex((e) => e.ref === n) : -1;
		r === -1 && (r = 0);
		let i = t[(r + (e === "next" ? 1 : -1) + t.length) % t.length];
		i?.ref && i.ref.focus();
	}, b = (e) => {
		let t = e.key;
		if (t === "ArrowLeft" || t === "ArrowRight" || t === "ArrowUp" || t === "ArrowDown" || t === "Tab") {
			let n = document.activeElement, r = h.current;
			if (!(n && r.some((e) => e.ref === n))) return;
			let i = n ? r.findIndex((e) => e.ref === n) : -1;
			if (t === "Tab") {
				let t = r.length - 1;
				if (!e.shiftKey && i === t || e.shiftKey && i === 0) return;
				e.stopPropagation(), e.preventDefault(), g.current = null;
				let n = r[i + (e.shiftKey ? -1 : 1)];
				n?.ref && n.ref.focus();
				return;
			}
			e.stopPropagation(), e.preventDefault(), y(t === "ArrowRight" || t === "ArrowDown" ? "next" : "prev");
			return;
		}
		if (t === "Escape" || t === "Esc") {
			let e = document.activeElement, t = h.current;
			if (!(e && t.some((t) => t.ref === e))) return;
			e && typeof e.blur == "function" && e.blur();
		}
	}, x = i(() => ({
		activeId: p,
		onTabChange: m,
		setActiveTab: f,
		registerTab: _,
		setFocusedTab: v
	}), [
		p,
		m,
		_,
		v
	]), S = a(b);
	return S.current = b, r(() => {
		let e = (e) => {
			S.current(e);
		};
		return window.addEventListener("keydown", e), () => {
			window.removeEventListener("keydown", e);
		};
	}, []), r(() => {
		let e = (e) => {
			e.key === "Tab" && (g.current = e.shiftKey ? "backward" : "forward");
		}, t = () => {
			g.current = null;
		}, n = (e) => {
			let t = e.target;
			if (!t) return;
			let n = h.current;
			if (n.findIndex((e) => e.ref === t) === -1) return;
			let r = g.current;
			if (!r) return;
			let i = r === "backward" ? n.length - 1 : 0;
			if (i < 0) return;
			let a = n[i];
			a?.ref && a.ref !== t && a.ref.focus(), g.current = null;
		};
		return window.addEventListener("keydown", e), window.addEventListener("pointerdown", t, !0), window.addEventListener("focusin", n), () => {
			window.removeEventListener("keydown", e), window.removeEventListener("pointerdown", t, !0), window.removeEventListener("focusin", n);
		};
	}, []), /* @__PURE__ */ e(c.Provider, {
		value: x,
		children: u
	});
};
//#endregion
export { u as TabContext, l as useTabContext };
