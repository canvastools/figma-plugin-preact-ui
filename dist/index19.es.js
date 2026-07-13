import "./index19.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
/* empty css           */
var i = t(({ id: t, className: i, intent: a = "neutral", intentModifier: o = "default", prefix: s, suffix: c, children: l, ...u }, d) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("Badge", void 0, {
		intent: `${a}-${o}`,
		prefix: !!s,
		suffix: !!c
	}), i].join(" ").trim(),
	ref: d,
	...u,
	children: /* @__PURE__ */ n("div", {
		className: "Badge__content",
		children: [
			s && /* @__PURE__ */ n("div", {
				className: "Badge__prefix",
				children: s
			}),
			l != null && l !== !1 && l !== !0 && /* @__PURE__ */ n("div", {
				className: "Badge__children",
				children: /* @__PURE__ */ n(r, {
					variant: "body",
					size: "medium",
					intent: a,
					intentModifier: o,
					children: l
				})
			}),
			c && /* @__PURE__ */ n("div", {
				className: "Badge__suffix",
				children: c
			})
		]
	})
}));
//#endregion
export { i as Badge };
