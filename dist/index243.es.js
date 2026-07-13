import "./index243.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
/* empty css            */
var i = t(({ className: t, children: i, paddingLikeOption: a = !1, ...o }, s) => /* @__PURE__ */ n("div", {
	className: [e("MenuItemGroup", void 0, { paddingLikeOption: a }), t].join(" ").trim(),
	ref: s,
	...o,
	children: /* @__PURE__ */ n("div", {
		className: "MenuItemGroup__content",
		children: /* @__PURE__ */ n("div", {
			className: "MenuItemGroup__children",
			children: /* @__PURE__ */ n(r, {
				variant: "body",
				size: "medium",
				intent: "neutral-inverted-fixed",
				disabled: !0,
				children: i
			})
		})
	})
}));
//#endregion
export { i as MenuItemGroup };
