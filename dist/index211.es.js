import { jsx as e } from "./index15.es.js";
import { clsx as t } from "./index207.es.js";
import { useMemo as n } from "preact/compat";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/Tile.js
function r(r) {
	let { activeStartDate: i, children: a, classes: o, date: s, formatAbbr: c, locale: l, maxDate: u, maxDateTransform: d, minDate: f, minDateTransform: p, onClick: m, onMouseOver: h, style: g, tileClassName: _, tileContent: v, tileDisabled: y, view: b } = r, x = n(() => typeof _ == "function" ? _({
		activeStartDate: i,
		date: s,
		view: b
	}) : _, [
		i,
		s,
		_,
		b
	]), S = n(() => typeof v == "function" ? v({
		activeStartDate: i,
		date: s,
		view: b
	}) : v, [
		i,
		s,
		v,
		b
	]);
	return e("button", {
		className: t(o, x),
		disabled: f && p(f) > s || u && d(u) < s || y?.({
			activeStartDate: i,
			date: s,
			view: b
		}),
		onClick: m ? (e) => m(s, e) : void 0,
		onFocus: h ? () => h(s) : void 0,
		onMouseOver: h ? () => h(s) : void 0,
		style: g,
		type: "button",
		children: [c ? e("abbr", {
			"aria-label": c(l, s),
			children: a
		}) : a, S]
	});
}
//#endregion
export { r as default };
