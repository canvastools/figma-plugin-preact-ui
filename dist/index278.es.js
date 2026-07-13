import "./index278.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { useTabContext as r } from "./index272.es.js";
/* empty css            */
import { Fragment as i } from "preact";
var a = t(({ id: t, className: a, tabId: o, fullHeight: s = !1, children: c, ...l }, u) => {
	let { activeId: d } = r();
	return o === d ? /* @__PURE__ */ n("div", {
		id: t,
		className: [e("TabPanel", void 0, {
			selected: o === d,
			fullHeight: s
		}), a].join(" ").trim(),
		ref: u,
		...l,
		children: /* @__PURE__ */ n("div", {
			className: "TabPanel__children",
			children: c
		})
	}) : /* @__PURE__ */ n(i, {});
});
//#endregion
export { a as TabPanel };
