import { jsx as e } from "./index15.es.js";
import { getYearStart as t } from "./index203.es.js";
import { getBeginOfDecadeYear as n } from "./index205.es.js";
import r from "./index210.es.js";
import i from "./index215.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/DecadeView/Years.js
function a(a) {
	let { activeStartDate: o, hover: s, showNeighboringDecade: c, value: l, valueType: u, ...d } = a, f = n(o);
	return e(r, {
		className: "react-calendar__decade-view__years",
		dateTransform: t,
		dateType: "year",
		end: f + (c ? 11 : 9),
		hover: s,
		renderTile: ({ date: t, ...n }) => e(i, {
			...d,
			...n,
			activeStartDate: o,
			currentDecade: f,
			date: t
		}, t.getTime()),
		start: f,
		value: l,
		valueType: u
	});
}
//#endregion
export { a as default };
