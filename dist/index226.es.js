"use client";
import { jsx as e } from "./index14.es.js";
import { getBegin as t, getBeginNext as n, getEnd as r, getValueRange as i } from "./index204.es.js";
import a from "./index205.es.js";
import { clsx as o } from "./index206.es.js";
import { between as s } from "./index208.es.js";
import c from "./index213.es.js";
import l from "./index216.es.js";
import u from "./index222.es.js";
import ee from "./index225.es.js";
import { forwardRef as d, useCallback as f, useImperativeHandle as te, useState as p } from "preact/compat";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/Calendar.js
var m = "react-calendar", h = [
	"century",
	"decade",
	"year",
	"month"
], ne = [
	"decade",
	"year",
	"month",
	"day"
], g = /* @__PURE__ */ new Date();
g.setFullYear(1, 0, 1), g.setHours(0, 0, 0, 0);
var re = /* @__PURE__ */ new Date(864e13);
function _(e) {
	return e instanceof Date ? e : new Date(e);
}
function ie(e, t) {
	return h.slice(h.indexOf(e), h.indexOf(t) + 1);
}
function v(e, t, n) {
	return ie(t, n).indexOf(e) !== -1;
}
function y(e, t, n) {
	return e && v(e, t, n) ? e : n;
}
function ae(e) {
	return ne[h.indexOf(e)];
}
function oe(e, t) {
	let n = Array.isArray(e) ? e[t] : e;
	if (!n) return null;
	let r = _(n);
	if (Number.isNaN(r.getTime())) throw Error(`Invalid date: ${e}`);
	return r;
}
function b({ value: e, minDate: n, maxDate: i, maxDetail: a }, o) {
	let c = oe(e, o);
	if (!c) return null;
	let l = ae(a);
	return s((() => {
		switch (o) {
			case 0: return t(l, c);
			case 1: return r(l, c);
			default: throw Error(`Invalid index value: ${o}`);
		}
	})(), n, i);
}
var x = (e) => b(e, 0), se = (e) => b(e, 1), ce = (e) => [x, se].map((t) => t(e));
function le({ maxDate: e, maxDetail: n, minDate: r, minDetail: i, value: a, view: o }) {
	return t(y(o, i, n), x({
		value: a,
		minDate: r,
		maxDate: e,
		maxDetail: n
	}) || /* @__PURE__ */ new Date());
}
function ue({ activeStartDate: e, defaultActiveStartDate: n, defaultValue: r, defaultView: i, maxDate: a, maxDetail: o, minDate: s, minDetail: c, value: l, view: u }) {
	let ee = y(u, c, o), d = e || n;
	return d ? t(ee, d) : le({
		maxDate: a,
		maxDetail: o,
		minDate: s,
		minDetail: c,
		value: l || r,
		view: u || i
	});
}
function S(e) {
	return e && (!Array.isArray(e) || e.length === 1);
}
function C(e, t) {
	return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var w = d(function(r, s) {
	let { activeStartDate: d, allowPartialRange: h, calendarType: ne, className: v, "data-testid": oe, defaultActiveStartDate: b, defaultValue: w, defaultView: de, formatDay: fe, formatLongDate: pe, formatMonth: me, formatMonthYear: T, formatShortWeekday: he, formatWeekday: ge, formatYear: E, goToRangeStartOnSelect: _e = !0, inputRef: ve, locale: ye, maxDate: D = re, maxDetail: O = "month", minDate: k = g, minDetail: A = "century", navigationAriaLabel: be, navigationAriaLive: xe, navigationLabel: Se, next2AriaLabel: Ce, next2Label: we, nextAriaLabel: Te, nextLabel: Ee, onActiveStartDateChange: j, onChange: M, onClickDay: N, onClickDecade: De, onClickMonth: Oe, onClickWeekNumber: ke, onClickYear: Ae, onDrillDown: P, onDrillUp: F, onViewChange: I, prev2AriaLabel: je, prev2Label: Me, prevAriaLabel: Ne, prevLabel: Pe, returnValue: Fe = "start", selectRange: L, showDoubleView: R, showFixedNumberOfWeeks: Ie, showNavigation: Le = !0, showNeighboringCentury: Re, showNeighboringDecade: ze, showNeighboringMonth: Be = !0, showWeekNumbers: Ve, tileClassName: He, tileContent: Ue, tileDisabled: We, value: z, view: Ge } = r, [Ke, B] = p(b), [qe, Je] = p(null), [Ye, Xe] = p(Array.isArray(w) ? w.map((e) => e === null ? null : _(e)) : w == null ? null : _(w)), [Ze, Qe] = p(de), V = d || Ke || ue({
		activeStartDate: d,
		defaultActiveStartDate: b,
		defaultValue: w,
		defaultView: de,
		maxDate: D,
		maxDetail: O,
		minDate: k,
		minDetail: A,
		value: z,
		view: Ge
	}), H = (() => {
		let e = L && S(Ye) || z === void 0 ? Ye : z;
		return e ? Array.isArray(e) ? e.map((e) => e === null ? null : _(e)) : e === null ? null : _(e) : null;
	})(), U = ae(O), W = y(Ge || Ze, A, O), G = ie(A, O), $e = L ? qe : null, K = G.indexOf(W) < G.length - 1, et = G.indexOf(W) > 0, tt = f((e) => (() => {
		switch (Fe) {
			case "start": return x;
			case "end": return se;
			case "range": return ce;
			default: throw Error("Invalid returnValue.");
		}
	})()({
		maxDate: D,
		maxDetail: O,
		minDate: k,
		value: e
	}), [
		D,
		O,
		k,
		Fe
	]), q = f((e, t) => {
		B(e);
		let n = {
			action: t,
			activeStartDate: e,
			value: H,
			view: W
		};
		j && !C(V, e) && j(n);
	}, [
		V,
		j,
		H,
		W
	]), J = f((e, t) => {
		let n = (() => {
			switch (W) {
				case "century": return De;
				case "decade": return Ae;
				case "year": return Oe;
				case "month": return N;
				default: throw Error(`Invalid view: ${W}.`);
			}
		})();
		n && n(e, t);
	}, [
		N,
		De,
		Oe,
		Ae,
		W
	]), Y = f((e, t) => {
		if (!K) return;
		J(e, t);
		let n = G[G.indexOf(W) + 1];
		if (!n) throw Error("Attempted to drill down from the lowest view.");
		B(e), Qe(n);
		let r = {
			action: "drillDown",
			activeStartDate: e,
			value: H,
			view: n
		};
		j && !C(V, e) && j(r), I && W !== n && I(r), P && P(r);
	}, [
		V,
		K,
		j,
		J,
		P,
		I,
		H,
		W,
		G
	]), X = f(() => {
		if (!et) return;
		let e = G[G.indexOf(W) - 1];
		if (!e) throw Error("Attempted to drill up from the highest view.");
		let n = t(e, V);
		B(n), Qe(e);
		let r = {
			action: "drillUp",
			activeStartDate: n,
			value: H,
			view: e
		};
		j && !C(V, n) && j(r), I && W !== e && I(r), F && F(r);
	}, [
		V,
		et,
		j,
		F,
		I,
		H,
		W,
		G
	]), Z = f((e, n) => {
		let r = H;
		J(e, n);
		let a = L && !S(r), o;
		if (L) if (a) o = t(U, e);
		else {
			if (!r) throw Error("previousValue is required");
			if (Array.isArray(r)) throw Error("previousValue must not be an array");
			o = i(U, r, e);
		}
		else o = tt(e);
		let s = !L || a || _e ? le({
			maxDate: D,
			maxDetail: O,
			minDate: k,
			minDetail: A,
			value: o,
			view: W
		}) : null;
		n.persist(), B(s), Xe(o);
		let c = {
			action: "onChange",
			activeStartDate: s,
			value: o,
			view: W
		};
		if (j && !C(V, s) && j(c), M) if (L) {
			if (!S(o)) M(o || null, n);
			else if (h) {
				if (Array.isArray(o)) throw Error("value must not be an array");
				M([o || null, null], n);
			}
		} else M(o || null, n);
	}, [
		V,
		h,
		tt,
		_e,
		D,
		O,
		k,
		A,
		j,
		M,
		J,
		L,
		H,
		U,
		W
	]);
	function nt(e) {
		Je(e);
	}
	function Q() {
		Je(null);
	}
	te(s, () => ({
		activeStartDate: V,
		drillDown: Y,
		drillUp: X,
		onChange: Z,
		setActiveStartDate: q,
		value: H,
		view: W
	}), [
		V,
		Y,
		X,
		Z,
		q,
		H,
		W
	]);
	function $(r) {
		let i = {
			activeStartDate: r ? n(W, V) : t(W, V),
			hover: $e,
			locale: ye,
			maxDate: D,
			minDate: k,
			onClick: K ? Y : Z,
			onMouseOver: L ? nt : void 0,
			tileClassName: He,
			tileContent: Ue,
			tileDisabled: We,
			value: H,
			valueType: U
		};
		switch (W) {
			case "century": return e(c, {
				formatYear: E,
				showNeighboringCentury: Re,
				...i
			});
			case "decade": return e(l, {
				formatYear: E,
				showNeighboringDecade: ze,
				...i
			});
			case "year": return e(ee, {
				formatMonth: me,
				formatMonthYear: T,
				...i
			});
			case "month": return e(u, {
				calendarType: ne,
				formatDay: fe,
				formatLongDate: pe,
				formatShortWeekday: he,
				formatWeekday: ge,
				onClickWeekNumber: ke,
				onMouseLeave: L ? Q : void 0,
				showFixedNumberOfWeeks: Ie === void 0 ? R : Ie,
				showNeighboringMonth: Be,
				showWeekNumbers: Ve,
				...i
			});
			default: throw Error(`Invalid view: ${W}.`);
		}
	}
	function rt() {
		return Le ? e(a, {
			activeStartDate: V,
			drillUp: X,
			formatMonthYear: T,
			formatYear: E,
			locale: ye,
			maxDate: D,
			minDate: k,
			navigationAriaLabel: be,
			navigationAriaLive: xe,
			navigationLabel: Se,
			next2AriaLabel: Ce,
			next2Label: we,
			nextAriaLabel: Te,
			nextLabel: Ee,
			prev2AriaLabel: je,
			prev2Label: Me,
			prevAriaLabel: Ne,
			prevLabel: Pe,
			setActiveStartDate: q,
			showDoubleView: R,
			view: W,
			views: G
		}) : null;
	}
	return e("div", {
		className: o(m, L && (Array.isArray(H) ? H : [H]).length === 1 && `${m}--selectRange`, R && `${m}--doubleView`, v),
		"data-testid": oe,
		ref: ve,
		children: [rt(), e("div", {
			className: `${m}__viewContainer`,
			onBlur: L ? Q : void 0,
			onMouseLeave: L ? Q : void 0,
			children: [$(), R ? $(!0) : null]
		})]
	});
});
//#endregion
export { w as default };
