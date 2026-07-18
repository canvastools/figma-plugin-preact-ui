import { jsx as e } from "./index15.es.js";
import { useCallback as t, useContext as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "preact/hooks";
import { createContext as s } from "preact";
//#region src/components/ScrollContext/ScrollContext.tsx
var c = s(void 0), l = () => {
	let e = n(c);
	if (!e) throw Error("ScrollContext not found");
	return e;
}, u = () => n(c), d = ({ defaultPositionY: n = 0, positionY: s, onScroll: l, spyThreshold: u = 0, onSpyTargetChange: d, children: f }) => {
	let [p, m] = o(n), [h, g] = o(n === 0), [_, v] = o(!1), [y, b] = o(!1), [x, S] = o(null), C = a(null), w = a(u), T = a(null), E = a([]), D = a(null), O = a(null), k = s === void 0 ? p : s, A = t((e) => {
		b(e.scrollHeight - e.clientHeight > 0);
	}, []), j = () => {
		let e = T.current;
		if (!e) return;
		let t = E.current;
		if (!t.length) {
			x !== null && (S(null), d?.({ id: null }));
			return;
		}
		let n = e.getBoundingClientRect(), r = w.current ?? 0, i = null, a = -Infinity;
		for (let { id: e, element: o } of t) {
			if (!o) continue;
			let t = o.getBoundingClientRect().top - n.top - r;
			t <= 0 && t > a && (a = t, i = e);
		}
		i !== x && (S(i), d?.({ id: i ?? null }));
	}, M = a(j);
	M.current = j;
	let N = t(() => {
		D.current ?? (D.current = requestAnimationFrame(() => {
			D.current = null;
			try {
				M.current();
			} catch {}
		}));
	}, []), P = t((e) => {
		if (O.current?.(), O.current = null, T.current = e, !e) {
			b(!1);
			return;
		}
		A(e);
		let t = () => A(e), n = new ResizeObserver(t), r = new MutationObserver(t);
		n.observe(e), r.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), O.current = () => {
			n.disconnect(), r.disconnect();
		}, N();
	}, [A, N]), F = t((e, t) => {
		let n = E.current, r = n.findIndex((t) => t.id === e);
		if (!t) {
			r !== -1 && (n.splice(r, 1), N());
			return;
		}
		r === -1 ? n.push({
			id: e,
			element: t
		}) : n[r].element = t, N();
	}, [N]), I = t((e) => {
		let t = e.currentTarget || e.target;
		if (!t) return;
		let n = t.scrollHeight - t.clientHeight;
		C.current = n;
		let r = n > 0, i = !1, a = !1, o;
		r ? (i = t.scrollTop <= 0, a = t.scrollTop >= n, o = i ? 0 : a ? n : t.scrollTop) : o = 0, g(!r || i), v(!r || a), b(r), s === void 0 && m(o), l?.({ positionY: o }), E.current.length && T.current && N();
	}, [
		s,
		l,
		N
	]), L = t((e) => {
		m(e);
		let t = C.current, n = typeof t == "number" && t > 0;
		g(!n || e === 0), v(!n || e >= t), b(n);
	}, []), R = t(() => {
		L(0);
	}, [L]);
	r(() => {
		s !== void 0 && L(s);
	}, [s, L]), r(() => {
		w.current = u, N();
	}, [u]), r(() => () => O.current?.(), []);
	let z = i(() => ({
		positionY: k,
		isAtTop: h,
		isAtBottom: _,
		hasScroll: y,
		onScroll: I,
		setPositionY: L,
		resetPositionY: R,
		spyActiveId: x,
		registerSpyTarget: F,
		registerScrollRoot: P
	}), [
		k,
		h,
		_,
		y,
		I,
		L,
		R,
		x,
		F,
		P
	]);
	return /* @__PURE__ */ e(c.Provider, {
		value: z,
		children: f
	});
};
//#endregion
export { d as ScrollContext, l as useScrollContext, u as useScrollContextOptional };
