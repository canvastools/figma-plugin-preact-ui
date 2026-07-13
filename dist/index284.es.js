import { jsx as e } from "./index14.es.js";
import { memo as t } from "preact/compat";
//#region ../node_modules/.pnpm/react-clock@6.0.0_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-clock/dist/MarkNumber.js
var n = t(function(t) {
	var n = t.angle, r = n === void 0 ? 0 : n, i = t.length, a = i === void 0 ? 10 : i, o = t.name, s = t.number;
	return e("div", {
		className: `react-clock__mark react-clock__${o}-mark`,
		style: { transform: `rotate(${r}deg)` },
		children: e("div", {
			className: "react-clock__mark__number",
			style: {
				transform: `rotate(-${r}deg)`,
				top: `${a / 2}%`
			},
			children: s
		})
	});
});
//#endregion
export { n as default };
