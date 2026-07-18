import "./index26.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
import { Text as r } from "./index16.es.js";
/* empty css           */
var i = t(({ id: t, className: i, width: a, height: o, showArrow: s, children: c, ...l }, u) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("TooltipContainer", void 0, { arrow: s }), i].join(" ").trim(),
	"data-pui-interactive": "true",
	ref: u,
	...l,
	style: {
		width: a,
		height: o
	},
	children: [s && /* @__PURE__ */ n("div", { className: "TooltipContainer__arrow" }), /* @__PURE__ */ n(r, {
		intent: "neutral-inverted-fixed",
		children: c
	})]
}));
//#endregion
export { i as TooltipContainer };
