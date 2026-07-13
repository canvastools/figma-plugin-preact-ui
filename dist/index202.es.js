//#region ../node_modules/.pnpm/@wojtekmaj+date-utils@2.0.2/node_modules/@wojtekmaj/date-utils/dist/index.js
function e(e, t, n) {
	return function(r, i = n) {
		return t(e(r) + i);
	};
}
function t(e) {
	return function(t) {
		return /* @__PURE__ */ new Date(e(t).getTime() - 1);
	};
}
function n(e, t) {
	return function(n) {
		return [e(n), t(n)];
	};
}
function r(e) {
	if (e instanceof Date) return e.getFullYear();
	if (typeof e == "number") return e;
	let t = Number.parseInt(e, 10);
	if (typeof e == "string" && !Number.isNaN(t)) return t;
	throw Error(`Failed to get year from date: ${e}.`);
}
function i(e) {
	if (e instanceof Date) return e.getMonth();
	throw Error(`Failed to get month from date: ${e}.`);
}
function a(e) {
	if (e instanceof Date) return e.getDate();
	throw Error(`Failed to get year from date: ${e}.`);
}
function o(e) {
	if (e instanceof Date) return e.getHours();
	if (typeof e == "string") {
		let t = e.split(":");
		if (t.length >= 2) {
			let e = t[0];
			if (e) {
				let t = Number.parseInt(e, 10);
				if (!Number.isNaN(t)) return t;
			}
		}
	}
	throw Error(`Failed to get hours from date: ${e}.`);
}
function s(e) {
	if (e instanceof Date) return e.getMinutes();
	if (typeof e == "string") {
		let t = e.split(":");
		if (t.length >= 2) {
			let e = t[1] || "0", n = Number.parseInt(e, 10);
			if (!Number.isNaN(n)) return n;
		}
	}
	throw Error(`Failed to get minutes from date: ${e}.`);
}
function c(e) {
	if (e instanceof Date) return e.getSeconds();
	if (typeof e == "string") {
		let t = e.split(":");
		if (t.length >= 2) {
			let e = t[2] || "0", n = Number.parseInt(e, 10);
			if (!Number.isNaN(n)) return n;
		}
	}
	throw Error(`Failed to get seconds from date: ${e}.`);
}
function l(e) {
	if (e instanceof Date) return e.getMilliseconds();
	if (typeof e == "string") {
		let t = e.split(":");
		if (t.length >= 2) {
			let e = (t[2] || "0").split(".")[1] || "0", n = Number.parseInt(e, 10);
			if (!Number.isNaN(n)) return n;
		}
	}
	throw Error(`Failed to get seconds from date: ${e}.`);
}
function u(e) {
	let t = r(e), n = t + (-t + 1) % 100, i = /* @__PURE__ */ new Date();
	return i.setFullYear(n, 0, 1), i.setHours(0, 0, 0, 0), i;
}
var d = e(r, u, -100), f = e(r, u, 100), p = t(f), m = e(r, p, -100), h = n(u, p);
function g(e) {
	let t = r(e), n = t + (-t + 1) % 10, i = /* @__PURE__ */ new Date();
	return i.setFullYear(n, 0, 1), i.setHours(0, 0, 0, 0), i;
}
var _ = e(r, g, -10), v = e(r, g, 10), y = t(v), b = e(r, y, -10), x = n(g, y);
function S(e) {
	let t = r(e), n = /* @__PURE__ */ new Date();
	return n.setFullYear(t, 0, 1), n.setHours(0, 0, 0, 0), n;
}
var C = e(r, S, -1), w = e(r, S, 1), T = t(w), E = e(r, T, -1), D = n(S, T);
function O(e, t) {
	return function(n, a = t) {
		let o = r(n), s = i(n) + a, c = /* @__PURE__ */ new Date();
		return c.setFullYear(o, s, 1), c.setHours(0, 0, 0, 0), e(c);
	};
}
function k(e) {
	let t = r(e), n = i(e), a = /* @__PURE__ */ new Date();
	return a.setFullYear(t, n, 1), a.setHours(0, 0, 0, 0), a;
}
var A = O(k, -1), j = O(k, 1), M = t(j), N = O(M, -1), P = n(k, M);
function F(e, t) {
	return function(n, o = t) {
		let s = r(n), c = i(n), l = a(n) + o, u = /* @__PURE__ */ new Date();
		return u.setFullYear(s, c, l), u.setHours(0, 0, 0, 0), e(u);
	};
}
function I(e) {
	let t = r(e), n = i(e), o = a(e), s = /* @__PURE__ */ new Date();
	return s.setFullYear(t, n, o), s.setHours(0, 0, 0, 0), s;
}
var L = F(I, 1), R = t(L), z = n(I, R);
function B(e) {
	return a(M(e));
}
function V(e, t = 2) {
	let n = `${e}`;
	return n.length >= t ? e : `0000${n}`.slice(-t);
}
function H(e) {
	return `${V(o(e))}:${V(s(e))}`;
}
function U(e) {
	return `${V(o(e))}:${V(s(e))}:${V(c(e))}`;
}
//#endregion
export { p as getCenturyEnd, h as getCenturyRange, u as getCenturyStart, a as getDate, R as getDayEnd, z as getDayRange, I as getDayStart, B as getDaysInMonth, y as getDecadeEnd, x as getDecadeRange, g as getDecadeStart, o as getHours, H as getHoursMinutes, U as getHoursMinutesSeconds, l as getMilliseconds, s as getMinutes, i as getMonth, M as getMonthEnd, P as getMonthRange, k as getMonthStart, f as getNextCenturyStart, L as getNextDayStart, v as getNextDecadeStart, j as getNextMonthStart, w as getNextYearStart, m as getPreviousCenturyEnd, d as getPreviousCenturyStart, b as getPreviousDecadeEnd, _ as getPreviousDecadeStart, N as getPreviousMonthEnd, A as getPreviousMonthStart, E as getPreviousYearEnd, C as getPreviousYearStart, c as getSeconds, r as getYear, T as getYearEnd, D as getYearRange, S as getYearStart };
