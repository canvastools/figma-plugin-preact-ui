import { jsx as e } from "./index14.es.js";
import { formatDay as t, formatLongDate as n } from "./index201.es.js";
import { getDayEnd as r, getDayStart as i } from "./index202.es.js";
import { isWeekend as a } from "./index204.es.js";
import o from "./index210.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/MonthView/Day.js
var s = "react-calendar__month-view__days__day";
function c({ calendarType: c, classes: l = [], currentMonthIndex: u, formatDay: d = t, formatLongDate: f = n, ...p }) {
	let { date: m, locale: h } = p, g = [];
	return l && g.push(...l), g.push(s), a(m, c) && g.push(`${s}--weekend`), m.getMonth() !== u && g.push(`${s}--neighboringMonth`), e(o, {
		...p,
		classes: g,
		formatAbbr: f,
		maxDateTransform: r,
		minDateTransform: i,
		view: "month",
		children: d(h, m)
	});
}
//#endregion
export { c as default };
