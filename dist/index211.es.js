import { jsx as e } from "./index14.es.js";
import { formatYear as t } from "./index201.es.js";
import { getCenturyStart as n, getDecadeEnd as r, getDecadeStart as i } from "./index202.es.js";
import { getDecadeLabel as a } from "./index204.es.js";
import o from "./index210.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/CenturyView/Decade.js
var s = "react-calendar__century-view__decades__decade";
function c({ classes: c = [], currentCentury: l, formatYear: u = t, ...d }) {
	let { date: f, locale: p } = d, m = [];
	return c && m.push(...c), m.push(s), n(f).getFullYear() !== l && m.push(`${s}--neighboringCentury`), e(o, {
		...d,
		classes: m,
		maxDateTransform: r,
		minDateTransform: i,
		view: "century",
		children: a(p, u, f)
	});
}
//#endregion
export { c as default };
