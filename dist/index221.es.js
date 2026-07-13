import { jsx as e } from "./index14.es.js";
import { getDate as t, getDaysInMonth as n, getMonth as r, getYear as i } from "./index202.es.js";
import { getBeginOfWeek as a, getDayOfWeek as o, getWeekNumber as s } from "./index204.es.js";
import c from "./index207.es.js";
import l from "./index220.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/MonthView/WeekNumbers.js
function u(u) {
	let { activeStartDate: d, calendarType: f, onClickWeekNumber: p, onMouseLeave: m, showFixedNumberOfWeeks: h } = u, g = (() => {
		if (h) return 6;
		let e = n(d) - (7 - o(d, f));
		return 1 + Math.ceil(e / 7);
	})(), _ = (() => {
		let e = i(d), n = r(d), o = t(d), s = [];
		for (let t = 0; t < g; t += 1) s.push(a(new Date(e, n, o + t * 7), f));
		return s;
	})();
	return e(c, {
		className: "react-calendar__month-view__weekNumbers",
		count: g,
		direction: "column",
		onFocus: m,
		onMouseOver: m,
		style: {
			flexBasis: "calc(100% * (1 / 8)",
			flexShrink: 0
		},
		children: _.map((e) => s(e, f)).map((t, n) => {
			let r = _[n];
			if (!r) throw Error("date is not defined");
			return e(l, {
				date: r,
				onClickWeekNumber: p,
				weekNumber: t
			}, t);
		})
	});
}
//#endregion
export { u as default };
