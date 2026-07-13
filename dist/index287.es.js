import { jsx as e } from "./index14.es.js";
import { getHours as t, getMilliseconds as n, getMinutes as r, getSeconds as i } from "./index202.es.js";
import { clsx as a } from "./index206.es.js";
import o from "./index282.es.js";
import s from "./index283.es.js";
import c from "./index284.es.js";
import { formatHour as l } from "./index285.es.js";
import { safeMax as u } from "./index286.es.js";
//#region ../node_modules/.pnpm/react-clock@6.0.0_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-clock/dist/Clock.js
function d(d) {
	var f = d.className, p = d.formatHour, m = p === void 0 ? l : p, h = d.hourHandLength, g = h === void 0 ? 50 : h, _ = d.hourHandOppositeLength, v = d.hourHandWidth, y = v === void 0 ? 4 : v, b = d.hourMarksLength, x = b === void 0 ? 10 : b, S = d.hourMarksWidth, C = S === void 0 ? 3 : S, w = d.locale, T = d.minuteHandLength, E = T === void 0 ? 70 : T, D = d.minuteHandOppositeLength, O = d.minuteHandWidth, k = O === void 0 ? 2 : O, A = d.minuteMarksLength, j = A === void 0 ? 6 : A, M = d.minuteMarksWidth, N = M === void 0 ? 1 : M, P = d.renderHourMarks, F = P === void 0 || P, I = d.renderMinuteHand, L = I === void 0 || I, R = d.renderMinuteMarks, z = R === void 0 || R, B = d.renderNumbers, V = d.renderSecondHand, H = V === void 0 || V, U = d.secondHandLength, W = U === void 0 ? 90 : U, G = d.secondHandOppositeLength, K = d.secondHandWidth, q = K === void 0 ? 1 : K, J = d.size, Y = J === void 0 ? 150 : J, X = d.useMillisecondPrecision, Z = d.value;
	function Q() {
		if (!z) return null;
		for (var t = [], n = 1; n <= 60; n += 1) F && !(n % 5) || t.push(e(s, {
			angle: n * 6,
			length: j,
			name: "minute",
			width: N
		}, `minute_${n}`));
		return t;
	}
	function $() {
		if (!F) return null;
		for (var t = [], n = 1; n <= 12; n += 1) t.push(e(s, {
			angle: n * 30,
			length: x,
			name: "hour",
			width: C
		}, `hour_${n}`));
		return t;
	}
	function ee() {
		if (!B) return null;
		for (var t = [], n = 1; n <= 12; n += 1) t.push(e(c, {
			angle: n * 30,
			length: u(F && x, z && j, 0),
			name: "number",
			number: m(w, n)
		}, `number_${n}`));
		return t;
	}
	function te() {
		return e("div", {
			className: "react-clock__face",
			children: [
				Q(),
				$(),
				ee()
			]
		});
	}
	function ne() {
		return e(o, {
			angle: Z ? t(Z) * 30 + r(Z) / 2 + i(Z) / 120 + (X ? n(Z) / 12e4 : 0) : 0,
			length: g,
			name: "hour",
			oppositeLength: _,
			width: y
		});
	}
	function re() {
		return L ? e(o, {
			angle: Z ? t(Z) * 360 + r(Z) * 6 + i(Z) / 10 + (X ? n(Z) / 1e4 : 0) : 0,
			length: E,
			name: "minute",
			oppositeLength: D,
			width: k
		}) : null;
	}
	function ie() {
		return H ? e(o, {
			angle: Z ? r(Z) * 360 + i(Z) * 6 + (X ? n(Z) * .006 : 0) : 0,
			length: W,
			name: "second",
			oppositeLength: G,
			width: q
		}) : null;
	}
	return e("time", {
		className: a("react-clock", f),
		dateTime: Z instanceof Date ? Z.toLocaleTimeString("en", {
			hourCycle: "h23",
			hour: "2-digit",
			minute: L ? "2-digit" : void 0,
			second: H ? "2-digit" : void 0
		}) : Z || void 0,
		style: {
			width: Y,
			height: Y
		},
		children: [
			te(),
			ne(),
			re(),
			ie()
		]
	});
}
//#endregion
export { d as default };
