import { jsx as e } from "./index15.es.js";
import { getHours as t } from "./index203.es.js";
import { safeMax as n, safeMin as r } from "./index297.es.js";
import i from "./index300.es.js";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimeInput/Hour24Input.js
function a({ maxTime: a, minTime: o, ...s }) {
	return e(i, {
		max: r(23, a && t(a)),
		min: n(0, o && t(o)),
		name: "hour24",
		nameForClass: "hour",
		...s
	});
}
//#endregion
export { a as default };
