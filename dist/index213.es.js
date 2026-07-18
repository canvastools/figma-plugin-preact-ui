import { jsx as e } from "./index15.es.js";
import { getDecadeStart as t } from "./index203.es.js";
import { getBeginOfCenturyYear as n } from "./index205.es.js";
import r from "./index210.es.js";
import i from "./index212.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/CenturyView/Decades.js
function a(a) {
	let { activeStartDate: o, hover: s, showNeighboringCentury: c, value: l, valueType: u, ...d } = a, f = n(o);
	return e(r, {
		className: "react-calendar__century-view__decades",
		dateTransform: t,
		dateType: "decade",
		end: f + (c ? 119 : 99),
		hover: s,
		renderTile: ({ date: t, ...n }) => e(i, {
			...d,
			...n,
			activeStartDate: o,
			currentCentury: f,
			date: t
		}, t.getTime()),
		start: f,
		step: 10,
		value: l,
		valueType: u
	});
}
//#endregion
export { a as default };
