import "./index277.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css            */
var r = t(({ id: t, className: r, variant: i = "default", scrollable: a = !0, children: o, ...s }, c) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("TabList", void 0, {
		variant: i,
		scrollable: a
	}), r].join(" ").trim(),
	ref: c,
	...s,
	children: o != null && o !== !1 && o !== !0 && /* @__PURE__ */ n("div", {
		className: "TabList__children",
		children: o
	})
}));
//#endregion
export { r as TabList };
