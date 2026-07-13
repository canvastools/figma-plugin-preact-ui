import { jsx as e } from "./index14.es.js";
import { formatYear as t } from "./index201.es.js";
import { getDecadeStart as n, getYearEnd as r, getYearStart as i } from "./index202.es.js";
import a from "./index210.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/DecadeView/Year.js
var o = "react-calendar__decade-view__years__year";
function s({ classes: s = [], currentDecade: c, formatYear: l = t, ...u }) {
	let { date: d, locale: f } = u, p = [];
	return s && p.push(...s), p.push(o), n(d).getFullYear() !== c && p.push(`${o}--neighboringDecade`), e(a, {
		...u,
		classes: p,
		maxDateTransform: r,
		minDateTransform: i,
		view: "decade",
		children: l(f, d)
	});
}
//#endregion
export { s as default };
