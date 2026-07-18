import "./index248.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css            */
var r = t(({ id: t, className: r, width: i, height: a, showArrow: o, constrainHeight: s = !1, tabIndex: c, children: l, ...u }, d) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("PopoverContainer", void 0, {
		arrow: o,
		"constrain-height": s
	}), r].join(" ").trim(),
	ref: d,
	...u,
	tabIndex: c ?? -1,
	style: {
		width: i,
		height: a
	},
	children: [o && /* @__PURE__ */ n("div", { className: "PopoverContainer__arrow" }), l]
}));
//#endregion
export { r as PopoverContainer };
