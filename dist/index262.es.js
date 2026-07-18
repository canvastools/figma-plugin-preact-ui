import "./index262.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
import { Icon as r } from "./index34.es.js";
import { chevronDown as i } from "./index58.es.js";
import { chevronRight as a } from "./index60.es.js";
import { Section as o } from "./index260.es.js";
/* empty css            */
import { useEffect as s, useState as c } from "preact/hooks";
var l = t(({ className: t, collapsed: l, defaultCollapsed: u = !0, onCollapsedChange: d, sectionProps: f, children: p, tabIndex: m, ...h }, g) => {
	let _ = l !== void 0, [v, y] = c(u);
	s(() => {
		_ && y(!!l);
	}, [l]);
	let b = _ ? !!l : v, x = e("SectionCollapsible", void 0, { collapsed: b }), S = (e) => {
		let t = !b;
		_ || y(t), d?.({
			event: e,
			collapsed: t
		});
	}, C = (e) => {
		S(e);
	}, w = (e) => {
		let { key: t } = e;
		(t === "Enter" || t === " " || t === "Spacebar") && (e.preventDefault(), e.stopPropagation(), S(e));
	};
	return /* @__PURE__ */ n("div", {
		className: [x, t].join(" ").trim(),
		ref: g,
		...h,
		children: [/* @__PURE__ */ n("div", {
			className: "SectionCollapsible__trigger",
			"data-pui-interactive": "true",
			role: "button",
			"aria-expanded": !b,
			tabIndex: m ?? 0,
			onClick: C,
			onKeyDown: w,
			children: [/* @__PURE__ */ n("div", {
				className: "SectionCollapsible__trigger-icon",
				children: /* @__PURE__ */ n(r, {
					glyph: b ? a : i,
					size: 16,
					intentModifier: "tertiary",
					variant: "downscaled"
				})
			}), /* @__PURE__ */ n(o, {
				className: "SectionCollapsible__section",
				...f
			})]
		}), !b && p != null && p !== !1 && p !== !0 && /* @__PURE__ */ n("div", {
			className: "SectionCollapsible__content",
			children: p
		})]
	});
});
//#endregion
export { l as SectionCollapsible };
