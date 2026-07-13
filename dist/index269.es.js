import "./index269.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
/* empty css            */
var r = t(({ id: t, className: r, direction: i = "column", spacing: a, x: o = "start", y: s = "start", fullHeight: c = !1, fullWidth: l = !1, children: u, ...d }, f) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("Stack", void 0, {
		direction: i,
		spacing: String(a),
		x: o,
		y: s,
		fullHeight: c,
		fullWidth: l
	}), r].join(" ").trim(),
	ref: f,
	...d,
	children: u
}));
//#endregion
export { r as Stack };
