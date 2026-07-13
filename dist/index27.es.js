import { jsx as e } from "./index14.es.js";
import "./index26.es.js";
import { useCallback as t, useContext as n, useMemo as r, useRef as i } from "preact/hooks";
import { createContext as a } from "preact";
//#region src/components/TooltipContext/TooltipContext.tsx
var o = a(void 0), s = (e) => e?.showDelay ?? 1200, c = (e) => e?.hideDelay ?? 480, l = () => n(o), u = ({ children: n }) => {
	let a = i(null), l = i({
		ref: null,
		setOpen: null
	}), u = i({
		ref: null,
		setOpen: null,
		hideDelay: 480
	}), d = i(null), f = i(null), p = t((e, t) => {
		l.current = {
			ref: e,
			setOpen: t
		};
	}, []), m = t(() => {
		l.current = {
			ref: null,
			setOpen: null
		};
	}, []), h = t((e, t, n = 480) => {
		a.current = Date.now(), u.current = {
			ref: e,
			setOpen: t,
			hideDelay: n
		}, f.current != null && clearTimeout(f.current), f.current = window.setTimeout(() => {
			f.current = null;
			let e = u.current;
			!e.ref || !e.setOpen || (e.setOpen(!1), l.current.ref && l.current.ref === e.ref && m(), u.current = {
				ref: null,
				setOpen: null,
				hideDelay: 480
			});
		}, n);
	}, [m]), g = t(() => {
		f.current != null && (clearTimeout(f.current), f.current = null), u.current = {
			ref: null,
			setOpen: null,
			hideDelay: 480
		};
	}, []), _ = t((e, t, n) => {
		d.current != null && clearTimeout(d.current);
		let r = () => {
			t(!0), p(e, t);
		};
		if (n === 0) {
			r();
			return;
		}
		d.current = window.setTimeout(() => {
			d.current = null, r();
		}, n);
	}, [p]), v = t((e, t, n) => {
		let r = s(n), i = Date.now(), o = a.current, c = u.current.hideDelay;
		if (o != null && i - o < c && u.current.ref && u.current.setOpen) {
			let n = u.current;
			g(), n.ref === e ? (n.setOpen?.(!0), p(e, n.setOpen ?? null)) : (n.setOpen?.(!1), t(!0), p(e, t)), d.current != null && (clearTimeout(d.current), d.current = null);
			return;
		}
		_(e, t, r);
	}, [
		g,
		_,
		p
	]), y = t(() => {
		d.current != null && (clearTimeout(d.current), d.current = null);
		let e = l.current;
		e.ref && e.setOpen && (e.setOpen(!1), m()), g(), a.current = null;
	}, [g, m]), b = t((e, t, n) => {
		let r = c(n);
		d.current != null && (clearTimeout(d.current), d.current = null), !(!l.current.ref || l.current.ref !== e) && h(e, t, r);
	}, [h]), x = t((e, t, n) => {
		let r = s(n), i = c(n), o = Date.now(), v = a.current, y = u.current;
		if (v != null && o - v < y.hideDelay && y.ref === e && y.setOpen && f.current != null) {
			g(), t(!0), p(e, t), d.current != null && (clearTimeout(d.current), d.current = null);
			return;
		}
		d.current != null && (clearTimeout(d.current), d.current = null);
		let b = l.current;
		if (b.ref === e && b.setOpen) {
			h(e, t, i);
			return;
		}
		b.ref && b.setOpen && b.ref !== e && (b.setOpen(!1), m()), g(), _(e, t, r);
	}, [
		g,
		m,
		h,
		_,
		p
	]), S = r(() => ({
		registerHoverStart: v,
		registerHoverEnd: b,
		registerPointerDown: y,
		registerClick: x
	}), [
		v,
		b,
		y,
		x
	]);
	return /* @__PURE__ */ e(o.Provider, {
		value: S,
		children: n
	});
};
//#endregion
export { u as TooltipContext, l as useTooltipContext };
