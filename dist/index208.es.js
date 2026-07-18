import { jsx as e } from "./index15.es.js";
import { Children as t, cloneElement as n } from "preact/compat";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/Flex.js
function r(e) {
	return `${e}%`;
}
function i({ children: i, className: a, count: o, direction: s, offset: c, style: l, wrap: u, ...d }) {
	return e("div", {
		className: a,
		style: {
			display: "flex",
			flexDirection: s,
			flexWrap: u ? "wrap" : "nowrap",
			...l
		},
		...d,
		children: t.map(i, (e, t) => {
			let i = c && t === 0 ? r(100 * c / o) : null;
			return n(e, {
				...e.props,
				style: {
					flexBasis: r(100 / o),
					flexShrink: 0,
					flexGrow: 0,
					overflow: "hidden",
					marginLeft: i,
					marginInlineStart: i,
					marginInlineEnd: 0
				}
			});
		})
	});
}
//#endregion
export { i as default };
