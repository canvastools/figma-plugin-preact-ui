import "./index34.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css           */
var r = t(({ id: t, className: r, glyph: i, intent: a = "neutral", intentModifier: o = "default", variant: s = "default", size: c = 24, disabled: l = !1, selected: u = !1, iconColor: d, children: f, ...p }, m) => {
	let h = e("Icon", void 0, {
		...!d && {
			intent: `${a}-${o}`,
			disabled: l,
			selected: u
		},
		iconColor: d,
		variant: s,
		size: c.toString()
	}), g;
	if (f) g = f;
	else if (i) g = i({ variant: s });
	else throw Error("Icon component error: No valid glyph or children provided");
	return /* @__PURE__ */ n("div", {
		id: t,
		className: [h, r].join(" ").trim(),
		ref: m,
		...p,
		style: { ...d ? { color: d } : {} },
		children: g
	});
});
//#endregion
export { r as Icon };
