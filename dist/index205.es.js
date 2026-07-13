"use client";
import { Fragment as e, jsx as t } from "./index14.es.js";
import n from "./index200.es.js";
import { formatMonthYear as r, formatYear as i } from "./index201.es.js";
import { getBeginNext as a, getBeginNext2 as o, getBeginPrevious as s, getBeginPrevious2 as c, getCenturyLabel as l, getDecadeLabel as u, getEndPrevious as d, getEndPrevious2 as f } from "./index204.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/Calendar/Navigation.js
var p = "react-calendar__navigation";
function m({ activeStartDate: m, drillUp: h, formatMonthYear: g = r, formatYear: _ = i, locale: v, maxDate: y, minDate: b, navigationAriaLabel: x = "", navigationAriaLive: S, navigationLabel: C, next2AriaLabel: w = "", next2Label: T = "»", nextAriaLabel: E = "", nextLabel: D = "›", prev2AriaLabel: O = "", prev2Label: k = "«", prevAriaLabel: A = "", prevLabel: j = "‹", setActiveStartDate: M, showDoubleView: N, view: P, views: F }) {
	let I = F.indexOf(P) > 0, L = P !== "century", R = s(P, m), z = L ? c(P, m) : void 0, B = a(P, m), V = L ? o(P, m) : void 0, H = (() => {
		if (R.getFullYear() < 0) return !0;
		let e = d(P, m);
		return b && b >= e;
	})(), U = L && (() => {
		if (z.getFullYear() < 0) return !0;
		let e = f(P, m);
		return b && b >= e;
	})(), W = y && y < B, G = L && y && y < V;
	function K() {
		M(R, "prev");
	}
	function q() {
		M(z, "prev2");
	}
	function J() {
		M(B, "next");
	}
	function Y() {
		M(V, "next2");
	}
	function X(e) {
		let t = (() => {
			switch (P) {
				case "century": return l(v, _, e);
				case "decade": return u(v, _, e);
				case "year": return _(v, e);
				case "month": return g(v, e);
				default: throw Error(`Invalid view: ${P}.`);
			}
		})();
		return C ? C({
			date: e,
			label: t,
			locale: v || n() || void 0,
			view: P
		}) : t;
	}
	function Z() {
		let n = `${p}__label`;
		return t("button", {
			"aria-label": x,
			"aria-live": S,
			className: n,
			disabled: !I,
			onClick: h,
			style: { flexGrow: 1 },
			type: "button",
			children: [t("span", {
				className: `${n}__labelText ${n}__labelText--from`,
				children: X(m)
			}), N ? t(e, { children: [t("span", {
				className: `${n}__divider`,
				children: " – "
			}), t("span", {
				className: `${n}__labelText ${n}__labelText--to`,
				children: X(B)
			})] }) : null]
		});
	}
	return t("div", {
		className: p,
		children: [
			k !== null && L ? t("button", {
				"aria-label": O,
				className: `${p}__arrow ${p}__prev2-button`,
				disabled: U,
				onClick: q,
				type: "button",
				children: k
			}) : null,
			j !== null && t("button", {
				"aria-label": A,
				className: `${p}__arrow ${p}__prev-button`,
				disabled: H,
				onClick: K,
				type: "button",
				children: j
			}),
			Z(),
			D !== null && t("button", {
				"aria-label": E,
				className: `${p}__arrow ${p}__next-button`,
				disabled: W,
				onClick: J,
				type: "button",
				children: D
			}),
			T !== null && L ? t("button", {
				"aria-label": w,
				className: `${p}__arrow ${p}__next2-button`,
				disabled: G,
				onClick: Y,
				type: "button",
				children: T
			}) : null
		]
	});
}
//#endregion
export { m as default };
