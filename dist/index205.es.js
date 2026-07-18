import { formatYear as e } from "./index202.es.js";
import { getCenturyEnd as t, getCenturyRange as n, getCenturyStart as r, getDayEnd as i, getDayRange as a, getDayStart as o, getDecadeEnd as s, getDecadeRange as c, getDecadeStart as l, getMonth as u, getMonthEnd as d, getMonthRange as f, getMonthStart as p, getNextCenturyStart as m, getNextDecadeStart as h, getNextMonthStart as g, getNextYearStart as _, getPreviousCenturyEnd as v, getPreviousCenturyStart as y, getPreviousDecadeEnd as b, getPreviousDecadeStart as x, getPreviousMonthEnd as S, getPreviousMonthStart as C, getPreviousYearEnd as w, getPreviousYearStart as T, getYear as E, getYearEnd as D, getYearRange as O, getYearStart as k } from "./index203.es.js";
import { CALENDAR_TYPES as A, WEEKDAYS as j } from "./index204.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/shared/dates.js
var M = j[0], N = j[5], P = j[6];
function F(e, t = A.ISO_8601) {
	let n = e.getDay();
	switch (t) {
		case A.ISO_8601: return (n + 6) % 7;
		case A.ISLAMIC: return (n + 1) % 7;
		case A.HEBREW:
		case A.GREGORY: return n;
		default: throw Error("Unsupported calendar type.");
	}
}
function I(e) {
	return E(r(e));
}
function L(e) {
	return E(l(e));
}
function R(e, t = A.ISO_8601) {
	let n = E(e), r = u(e), i = e.getDate() - F(e, t);
	return new Date(n, r, i);
}
function z(e, t = A.ISO_8601) {
	let n = t === A.GREGORY ? A.GREGORY : A.ISO_8601, r = R(e, t), i = E(e) + 1, a, o;
	do
		a = new Date(i, 0, n === A.ISO_8601 ? 4 : 1), o = R(a, t), --i;
	while (e < o);
	return Math.round((r.getTime() - o.getTime()) / (864e5 * 7)) + 1;
}
function B(e, t) {
	switch (e) {
		case "century": return r(t);
		case "decade": return l(t);
		case "year": return k(t);
		case "month": return p(t);
		case "day": return o(t);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function V(e, t) {
	switch (e) {
		case "century": return y(t);
		case "decade": return x(t);
		case "year": return T(t);
		case "month": return C(t);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function H(e, t) {
	switch (e) {
		case "century": return m(t);
		case "decade": return h(t);
		case "year": return _(t);
		case "month": return g(t);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function U(e, t) {
	switch (e) {
		case "decade": return x(t, -100);
		case "year": return T(t, -10);
		case "month": return C(t, -12);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function W(e, t) {
	switch (e) {
		case "decade": return h(t, 100);
		case "year": return _(t, 10);
		case "month": return g(t, 12);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function G(e, n) {
	switch (e) {
		case "century": return t(n);
		case "decade": return s(n);
		case "year": return D(n);
		case "month": return d(n);
		case "day": return i(n);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function K(e, t) {
	switch (e) {
		case "century": return v(t);
		case "decade": return b(t);
		case "year": return w(t);
		case "month": return S(t);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function q(e, t) {
	switch (e) {
		case "decade": return b(t, -100);
		case "year": return w(t, -10);
		case "month": return S(t, -12);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function J(e, t) {
	switch (e) {
		case "century": return n(t);
		case "decade": return c(t);
		case "year": return O(t);
		case "month": return f(t);
		case "day": return a(t);
		default: throw Error(`Invalid rangeType: ${e}`);
	}
}
function Y(e, t, n) {
	let r = [t, n].sort((e, t) => e.getTime() - t.getTime());
	return [B(e, r[0]), G(e, r[1])];
}
function X(t, n, r) {
	return r.map((r) => (n || e)(t, r)).join(" – ");
}
function Z(e, t, r) {
	return X(e, t, n(r));
}
function Q(e, t, n) {
	return X(e, t, c(n));
}
function $(e) {
	return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function ee(e, t = A.ISO_8601) {
	let n = e.getDay();
	switch (t) {
		case A.ISLAMIC:
		case A.HEBREW: return n === N || n === P;
		case A.ISO_8601:
		case A.GREGORY: return n === P || n === M;
		default: throw Error("Unsupported calendar type.");
	}
}
//#endregion
export { B as getBegin, H as getBeginNext, W as getBeginNext2, I as getBeginOfCenturyYear, L as getBeginOfDecadeYear, R as getBeginOfWeek, V as getBeginPrevious, U as getBeginPrevious2, Z as getCenturyLabel, F as getDayOfWeek, Q as getDecadeLabel, G as getEnd, K as getEndPrevious, q as getEndPrevious2, J as getRange, Y as getValueRange, z as getWeekNumber, $ as isCurrentDayOfWeek, ee as isWeekend };
