import { jsx as e } from "./index15.es.js";
import { getHours as t } from "./index203.es.js";
import { convert24to12 as n } from "./index295.es.js";
import { safeMax as r, safeMin as i } from "./index297.es.js";
import a from "./index300.es.js";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimeInput/Hour12Input.js
function o({ amPm: o, maxTime: s, minTime: c, value: l, ...u }) {
	return e(a, {
		max: i(12, s && (() => {
			let [e, r] = n(t(s));
			return r === o ? e : null;
		})()),
		min: r(1, c && (() => {
			let [e, r] = n(t(c));
			return r !== o || e === 12 ? null : e;
		})()),
		name: "hour12",
		nameForClass: "hour",
		value: l ? n(l)[0].toString() : "",
		...u
	});
}
//#endregion
export { o as default };
