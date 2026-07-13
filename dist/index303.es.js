import { jsx as e } from "./index14.es.js";
import { getHours as t, getHoursMinutes as n, getHoursMinutesSeconds as r } from "./index202.es.js";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimeInput/NativeInput.js
function i({ ariaLabel: i, disabled: a, maxTime: o, minTime: s, name: c, onChange: l, required: u, value: d, valueType: f }) {
	let p = (() => {
		switch (f) {
			case "hour": return (e) => `${t(e)}:00`;
			case "minute": return n;
			case "second": return r;
			default: throw Error("Invalid valueType");
		}
	})(), m = (() => {
		switch (f) {
			case "hour": return 3600;
			case "minute": return 60;
			case "second": return 1;
			default: throw Error("Invalid valueType");
		}
	})();
	function h(e) {
		e.stopPropagation();
	}
	return e("input", {
		"aria-label": i,
		disabled: a,
		hidden: !0,
		max: o ? p(o) : void 0,
		min: s ? p(s) : void 0,
		name: c,
		onChange: l,
		onFocus: h,
		required: u,
		step: m,
		style: {
			visibility: "hidden",
			position: "absolute",
			zIndex: "-999"
		},
		type: "time",
		value: d ? p(d) : ""
	});
}
//#endregion
export { i as default };
