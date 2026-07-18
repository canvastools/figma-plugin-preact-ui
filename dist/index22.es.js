import "./index22.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css           */
var r = t(({ id: t, className: r, showDividerTop: i = !1, showDividerBottom: a = !1, children: o, ...s }, c) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("Bar", void 0, {
		dividerTop: i,
		dividerBottom: a
	}), r].join(" ").trim(),
	ref: c,
	...s,
	children: o
}));
//#endregion
export { r as Bar };
