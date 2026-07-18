import { jsx as e } from "./index15.es.js";
import { getDayStart as t, getDaysInMonth as n, getMonth as r, getYear as i } from "./index203.es.js";
import { getDayOfWeek as a } from "./index205.es.js";
import o from "./index210.es.js";
import s from "./index218.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/MonthView/Days.js
function c(c) {
	let { activeStartDate: l, calendarType: u, hover: d, showFixedNumberOfWeeks: f, showNeighboringMonth: p, value: m, valueType: h, ...g } = c, _ = i(l), v = r(l), y = f || p, b = a(l, u), x = y ? 0 : b, S = (y ? -b : 0) + 1;
	return e(o, {
		className: "react-calendar__month-view__days",
		count: 7,
		dateTransform: (e) => {
			let n = /* @__PURE__ */ new Date();
			return n.setFullYear(_, v, e), t(n);
		},
		dateType: "day",
		hover: d,
		end: (() => {
			if (f) return S + 42 - 1;
			let e = n(l);
			if (p) {
				let t = /* @__PURE__ */ new Date();
				return t.setFullYear(_, v, e), t.setHours(0, 0, 0, 0), e + (7 - a(t, u) - 1);
			}
			return e;
		})(),
		renderTile: ({ date: t, ...n }) => e(s, {
			...g,
			...n,
			activeStartDate: l,
			calendarType: u,
			currentMonthIndex: v,
			date: t
		}, t.getTime()),
		offset: x,
		start: S,
		value: m,
		valueType: h
	});
}
//#endregion
export { c as default };
