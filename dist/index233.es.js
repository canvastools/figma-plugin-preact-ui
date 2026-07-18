import "./index233.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css            */
import { useEffect as r, useState as i } from "preact/hooks";
var a = t(({ id: t, className: a, delay: o = 0, children: s, ...c }, l) => {
	let [u, d] = i(!1);
	return r(() => {
		let e = window.setTimeout(() => {
			d(!0);
		}, o);
		return () => clearTimeout(e);
	}, [o]), /* @__PURE__ */ n("div", {
		id: t,
		className: [e("Fog", void 0, { visible: u }), a].join(" ").trim(),
		ref: l,
		...c,
		children: [/* @__PURE__ */ n("div", {
			className: "Fog__overlay",
			onClick: (e) => {
				e.stopPropagation(), e.preventDefault();
			}
		}), s && /* @__PURE__ */ n("div", {
			className: "Fog__children",
			children: s
		})]
	});
});
//#endregion
export { a as Fog };
