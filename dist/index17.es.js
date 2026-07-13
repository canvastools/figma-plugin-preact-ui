import "./index17.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
/* empty css           */
var i = t(({ id: t, className: i, variant: a = "circle", size: o = "medium", src: s, backgroundColor: c, textColor: l, children: u, ...d }, f) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("Avatar", void 0, {
		variant: a,
		size: o,
		src: !!s
	}), i].join(" ").trim(),
	ref: f,
	...d,
	style: { ...c === void 0 ? {} : { backgroundColor: c } },
	children: [s && /* @__PURE__ */ n("img", {
		className: "Avatar__image",
		src: s,
		alt: "Avatar"
	}), /* @__PURE__ */ n("div", {
		className: "Avatar__children",
		children: typeof u == "string" ? /* @__PURE__ */ n(r, {
			variant: "body",
			size: o === "small" ? "small" : "large",
			strong: !0,
			intent: "neutral-inverted",
			intentModifier: "default",
			textColor: l,
			fullWidth: !0,
			wrap: !1,
			align: "center",
			children: u
		}) : u
	})]
}));
//#endregion
export { i as Avatar };
