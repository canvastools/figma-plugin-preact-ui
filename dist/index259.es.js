import "./index259.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
/* empty css            */
var r = t(({ id: t, className: r, children: i, padding: a, variant: o = "default", ...s }, c) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("Section", void 0, {
		...a && a.top !== void 0 && { paddingTop: String(a.top) },
		...a && a.right !== void 0 && { paddingRight: String(a.right) },
		...a && a.bottom !== void 0 && { paddingBottom: String(a.bottom) },
		...a && a.left !== void 0 && { paddingLeft: String(a.left) },
		variant: o
	}), r].join(" ").trim(),
	ref: c,
	...s,
	children: /* @__PURE__ */ n("div", {
		className: "Section__content",
		children: i
	})
}));
//#endregion
export { r as Section };
