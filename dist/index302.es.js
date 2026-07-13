import { jsx as e } from "./index14.es.js";
import { getHours as t, getMinutes as n } from "./index202.es.js";
import { safeMax as r, safeMin as i } from "./index296.es.js";
import a from "./index299.es.js";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimeInput/MinuteInput.js
function o({ hour: o, maxTime: s, minTime: c, showLeadingZeros: l = !0, ...u }) {
	function d(e) {
		return o === t(e).toString();
	}
	return e(a, {
		max: i(59, s && d(s) && n(s)),
		min: r(0, c && d(c) && n(c)),
		name: "minute",
		showLeadingZeros: l,
		...u
	});
}
//#endregion
export { o as default };
