import "./index35.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Tooltip as r } from "./index29.es.js";
import { Icon as i } from "./index33.es.js";
/* empty css           */
import { useRef as a } from "preact/hooks";
import { Fragment as o, cloneElement as s, toChildArray as c } from "preact";
var l = t(({ id: t, className: l, intent: u = "neutral", intentModifier: d = "default", ghost: f = !1, size: p = "medium", grouped: m, translucent: h = !1, disabled: g = !1, selected: _ = !1, tooltip: v, children: y, icon: b, tabIndex: x, onClick: S, ...C }, w) => {
	let T = e("ButtonIcon", void 0, {
		intent: `${u}-${d}`,
		ghost: f,
		size: p,
		grouped: !!m,
		groupedPosition: m ?? void 0,
		translucent: h,
		disabled: g,
		selected: _,
		tooltip: !!v
	}), E = (e) => {
		if (g) {
			e.preventDefault();
			return;
		}
		e.stopPropagation(), S?.({ event: e });
	}, D = (e) => {
		(e.key === "Escape" || e.key === "Esc") && e.currentTarget.blur();
	}, O = a(null);
	return /* @__PURE__ */ n(o, { children: [/* @__PURE__ */ n("button", {
		id: t,
		className: [T, l].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: (e) => {
			typeof w == "function" ? w(e) : w && (w.current = e), O.current = e;
		},
		disabled: g,
		...x === void 0 ? {} : { tabIndex: x },
		onClick: E,
		onKeyDown: D,
		...C,
		children: (y || b) && /* @__PURE__ */ n("div", {
			className: "ButtonIcon__children",
			children: [b && /* @__PURE__ */ n(i, {
				glyph: b.glyph,
				intent: u,
				intentModifier: d,
				variant: b.variant,
				size: b.size,
				selected: _,
				disabled: g
			}), y && !b && c(y).map((e) => {
				if (typeof e == "object" && e) {
					let t = e;
					if (t.type === i) return s(t, {
						disabled: g,
						selected: _
					});
				}
				return e;
			})]
		})
	}), v && /* @__PURE__ */ n(r, {
		anchorRef: O,
		children: v
	})] });
});
//#endregion
export { l as ButtonIcon };
