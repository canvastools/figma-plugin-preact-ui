import { jsx as e } from "./index14.es.js";
//#region ../node_modules/.pnpm/react-clock@6.0.0_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-clock/dist/Hand.js
function t(t) {
	var n = t.angle, r = n === void 0 ? 0 : n, i = t.name, a = t.length, o = a === void 0 ? 100 : a, s = t.oppositeLength, c = s === void 0 ? 10 : s, l = t.width, u = l === void 0 ? 1 : l;
	return e("div", {
		className: `react-clock__hand react-clock__${i}-hand`,
		style: { transform: `rotate(${r}deg)` },
		children: e("div", {
			className: `react-clock__hand__body react-clock__${i}-hand__body`,
			style: {
				width: `${u}px`,
				top: `${50 - o / 2}%`,
				bottom: `${50 - c / 2}%`
			}
		})
	});
}
//#endregion
export { t as default };
