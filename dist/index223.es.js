import { jsx as e } from "./index15.es.js";
import { CALENDAR_TYPES as t, CALENDAR_TYPE_LOCALES as n } from "./index204.es.js";
import { clsx as r } from "./index207.es.js";
import i from "./index219.es.js";
import a from "./index220.es.js";
import o from "./index222.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/MonthView.js
function s(e) {
	if (e) {
		for (let [t, r] of Object.entries(n)) if (r.includes(e)) return t;
	}
	return t.ISO_8601;
}
function c(t) {
	let { activeStartDate: n, locale: c, onMouseLeave: l, showFixedNumberOfWeeks: u } = t, { calendarType: d = s(c), formatShortWeekday: f, formatWeekday: p, onClickWeekNumber: m, showWeekNumbers: h, ...g } = t;
	function _() {
		return e(a, {
			calendarType: d,
			formatShortWeekday: f,
			formatWeekday: p,
			locale: c,
			onMouseLeave: l
		});
	}
	function v() {
		return h ? e(o, {
			activeStartDate: n,
			calendarType: d,
			onClickWeekNumber: m,
			onMouseLeave: l,
			showFixedNumberOfWeeks: u
		}) : null;
	}
	function y() {
		return e(i, {
			calendarType: d,
			...g
		});
	}
	let b = "react-calendar__month-view";
	return e("div", {
		className: r(b, h ? `${b}--weekNumbers` : ""),
		children: e("div", {
			style: {
				display: "flex",
				alignItems: "flex-end"
			},
			children: [v(), e("div", {
				style: {
					flexGrow: 1,
					width: "100%"
				},
				children: [_(), y()]
			})]
		})
	});
}
//#endregion
export { c as default };
