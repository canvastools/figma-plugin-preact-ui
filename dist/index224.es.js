import { jsx as e } from "./index14.es.js";
import { getMonthStart as t, getYear as n } from "./index202.es.js";
import r from "./index209.es.js";
import i from "./index223.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/YearView/Months.js
function a(a) {
	let { activeStartDate: o, hover: s, value: c, valueType: l, ...u } = a, d = n(o);
	return e(r, {
		className: "react-calendar__year-view__months",
		dateTransform: (e) => {
			let n = /* @__PURE__ */ new Date();
			return n.setFullYear(d, e, 1), t(n);
		},
		dateType: "month",
		end: 11,
		hover: s,
		renderTile: ({ date: t, ...n }) => e(i, {
			...u,
			...n,
			activeStartDate: o,
			date: t
		}, t.getTime()),
		start: 0,
		value: c,
		valueType: l
	});
}
//#endregion
export { a as default };
