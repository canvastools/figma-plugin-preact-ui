//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/shared/dates.js
function e(e, t) {
	let n = Number(e);
	return t === "am" && n === 12 ? n = 0 : t === "pm" && n < 12 && (n += 12), n;
}
function t(e) {
	return [Number(e) % 12 || 12, Number(e) < 12 ? "am" : "pm"];
}
//#endregion
export { e as convert12to24, t as convert24to12 };
