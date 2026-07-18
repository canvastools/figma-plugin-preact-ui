import { jsx as e } from "./index15.es.js";
import { getHours as t, getMinutes as n, getSeconds as r } from "./index203.es.js";
import { safeMax as i, safeMin as a } from "./index297.es.js";
import o from "./index300.es.js";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimeInput/SecondInput.js
function s({ hour: s, maxTime: c, minTime: l, minute: u, showLeadingZeros: d = !0, ...f }) {
	function p(e) {
		return s === t(e).toString() && u === n(e).toString();
	}
	return e(o, {
		max: a(59, c && p(c) && r(c)),
		min: i(0, l && p(l) && r(l)),
		name: "second",
		showLeadingZeros: d,
		...f
	});
}
//#endregion
export { s as default };
