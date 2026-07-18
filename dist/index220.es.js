import { jsx as e } from "./index15.es.js";
import { formatShortWeekday as t, formatWeekday as n } from "./index202.es.js";
import { getMonth as r, getMonthStart as i, getYear as a } from "./index203.es.js";
import { getDayOfWeek as o, isCurrentDayOfWeek as s, isWeekend as c } from "./index205.es.js";
import { clsx as l } from "./index207.es.js";
import u from "./index208.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/MonthView/Weekdays.js
var d = "react-calendar__month-view__weekdays", f = `${d}__weekday`;
function p(p) {
	let { calendarType: m, formatShortWeekday: h = t, formatWeekday: g = n, locale: _, onMouseLeave: v } = p, y = i(/* @__PURE__ */ new Date()), b = a(y), x = r(y), S = [];
	for (let t = 1; t <= 7; t += 1) {
		let n = new Date(b, x, t - o(y, m)), r = g(_, n);
		S.push(e("div", {
			className: l(f, s(n) && `${f}--current`, c(n, m) && `${f}--weekend`),
			children: e("abbr", {
				"aria-label": r,
				title: r,
				children: h(_, n).replace(".", "")
			})
		}, t));
	}
	return e(u, {
		className: d,
		count: 7,
		onFocus: v,
		onMouseOver: v,
		children: S
	});
}
//#endregion
export { p as default };
