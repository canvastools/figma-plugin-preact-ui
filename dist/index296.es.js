import { getFormatter as e } from "./index295.es.js";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/shared/utils.js
var t = RegExp(`[${["9", "٩"].join("")}]`), n = e({ hour: "numeric" });
function r(e) {
	let r = n(e, new Date(2017, 0, 1, 9)), i = n(e, new Date(2017, 0, 1, 21)), [a, o] = r.split(t), [s, c] = i.split(t);
	if (c !== void 0) {
		if (a !== s) return [a, s].map((e) => e.trim());
		if (o !== c) return [o, c].map((e) => e.trim());
	}
	return ["AM", "PM"];
}
function i(e) {
	return e !== null && e !== !1 && !Number.isNaN(Number(e));
}
function a(...e) {
	return Math.min(...e.filter(i));
}
function o(...e) {
	return Math.max(...e.filter(i));
}
//#endregion
export { r as getAmPmLabels, o as safeMax, a as safeMin };
