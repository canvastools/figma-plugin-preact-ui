import { jsx as e } from "./index14.es.js";
import { getHours as t } from "./index202.es.js";
import { clsx as n } from "./index206.es.js";
import { convert24to12 as r } from "./index294.es.js";
import { getAmPmLabels as i } from "./index296.es.js";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimeInput/AmPm.js
function a({ ariaLabel: a, autoFocus: o, className: s, disabled: c, inputRef: l, locale: u, maxTime: d, minTime: f, onChange: p, onKeyDown: m, required: h, value: g }) {
	let _ = f ? r(t(f))[1] === "pm" : !1, v = d ? r(t(d))[1] === "am" : !1, y = "amPm", [b, x] = i(u);
	return e("select", {
		"aria-label": a,
		autoFocus: o,
		className: n(`${s}__input`, `${s}__${y}`),
		"data-input": "true",
		"data-select": "true",
		disabled: c,
		name: y,
		onChange: p,
		onKeyDown: m,
		ref: l,
		required: h,
		value: g === null ? "" : g,
		children: [
			!g && e("option", {
				value: "",
				children: "--"
			}),
			e("option", {
				disabled: _,
				value: "am",
				children: b
			}),
			e("option", {
				disabled: v,
				value: "pm",
				children: x
			})
		]
	});
}
//#endregion
export { a as default };
