import "./index249.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
import { ButtonIcon as i } from "./index35.es.js";
import { close as a } from "./index61.es.js";
/* empty css            */
var o = t(({ id: t, className: o, children: s, onClose: c, ...l }, u) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("PopoverHeader", void 0, void 0), o].join(" ").trim(),
	ref: u,
	...l,
	children: /* @__PURE__ */ n("div", {
		className: "PopoverHeader__content",
		children: [/* @__PURE__ */ n(r, {
			strong: !0,
			fullWidth: !0,
			children: s
		}), /* @__PURE__ */ n(i, {
			ghost: !0,
			icon: { glyph: a },
			onClick: c ? () => c() : void 0
		})]
	})
}));
//#endregion
export { o as PopoverHeader };
