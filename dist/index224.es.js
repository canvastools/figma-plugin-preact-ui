import { jsx as e } from "./index15.es.js";
import { formatMonth as t, formatMonthYear as n } from "./index202.es.js";
import { getMonthEnd as r, getMonthStart as i } from "./index203.es.js";
import a from "./index211.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/YearView/Month.js
var o = "react-calendar__year-view__months__month";
function s({ classes: s = [], formatMonth: c = t, formatMonthYear: l = n, ...u }) {
	let { date: d, locale: f } = u;
	return e(a, {
		...u,
		classes: [...s, o],
		formatAbbr: l,
		maxDateTransform: r,
		minDateTransform: i,
		view: "year",
		children: c(f, d)
	});
}
//#endregion
export { s as default };
