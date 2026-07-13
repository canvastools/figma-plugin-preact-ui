import { jsx as e } from "./index14.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/MonthView/WeekNumber.js
var t = "react-calendar__tile";
function n(n) {
	let { onClickWeekNumber: r, weekNumber: i } = n, a = e("span", { children: i });
	if (r) {
		let { date: r, onClickWeekNumber: i, weekNumber: o, ...s } = n;
		return e("button", {
			...s,
			className: t,
			onClick: (e) => i(o, r, e),
			type: "button",
			children: a
		});
	} else {
		let { date: r, onClickWeekNumber: i, weekNumber: o, ...s } = n;
		return e("div", {
			...s,
			className: t,
			children: a
		});
	}
}
//#endregion
export { n as default };
