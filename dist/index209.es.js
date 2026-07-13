import { jsx as e } from "./index14.es.js";
import t from "./index207.es.js";
import { getTileClasses as n } from "./index208.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/TileGroup.js
function r({ className: r, count: i = 3, dateTransform: a, dateType: o, end: s, hover: c, offset: l, renderTile: u, start: d, step: f = 1, value: p, valueType: m }) {
	let h = [];
	for (let e = d; e <= s; e += f) {
		let t = a(e);
		h.push(u({
			classes: n({
				date: t,
				dateType: o,
				hover: c,
				value: p,
				valueType: m
			}),
			date: t
		}));
	}
	return e(t, {
		className: r,
		count: i,
		offset: l,
		wrap: !0,
		children: h
	});
}
//#endregion
export { r as default };
