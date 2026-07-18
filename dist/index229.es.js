import "./index229.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
import { Icon as r } from "./index34.es.js";
import { chevronDoubleLeft as i } from "./index55.es.js";
import { chevronDoubleRight as a } from "./index56.es.js";
import { chevronLeft as o } from "./index59.es.js";
import { chevronRight as s } from "./index60.es.js";
import c from "./index227.es.js";
/* empty css            */
var l = t(({ id: t, className: l, locale: u = "en-US", type: d = "iso8601", defaultView: f = "month", view: p, defaultDate: m = null, date: h, minDate: g = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 5)), maxDate: _ = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 5)), minDetail: v = "century", maxDetail: y = "month", showNavigation: b = !0, navigation: x = "full", onDateChange: S, onDetailUp: C, onDetailDown: w, onViewChange: T, ...E }, D) => /* @__PURE__ */ n("div", {
	id: t,
	className: l,
	ref: D,
	onKeyDown: (e) => {
		let t = e.key;
		if (t === "Escape" || t === "Esc") {
			e.stopPropagation(), e.preventDefault();
			let t = e.target;
			t && typeof t.blur == "function" && t.blur();
		}
	},
	"data-pui-interactive": "true",
	children: /* @__PURE__ */ n(c, {
		className: e("Calendar", void 0, { navigation: b ? x : void 0 }),
		locale: u,
		calendarType: d,
		defaultView: f,
		view: p,
		defaultValue: m,
		value: h,
		minDate: g,
		maxDate: _,
		minDetail: v,
		maxDetail: y,
		prevLabel: /* @__PURE__ */ n(r, {
			glyph: o,
			variant: "downscaled"
		}),
		prev2Label: /* @__PURE__ */ n(r, {
			glyph: i,
			variant: "downscaled"
		}),
		nextLabel: /* @__PURE__ */ n(r, {
			glyph: s,
			variant: "downscaled"
		}),
		next2Label: /* @__PURE__ */ n(r, {
			glyph: a,
			variant: "downscaled"
		}),
		onChange: (e) => {
			S?.({ date: e });
		},
		onDrillUp: (e) => {
			let { value: t, ...n } = e;
			C?.({
				...n,
				date: t
			});
		},
		onDrillDown: (e) => {
			let { value: t, ...n } = e;
			w?.({
				...n,
				date: t
			});
		},
		onViewChange: (e) => {
			let { value: t, ...n } = e;
			T?.({
				...n,
				date: t
			});
		},
		...E
	})
}));
//#endregion
export { l as Calendar };
