import "./index261.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Icon as r } from "./index33.es.js";
import { chevronDown as i } from "./index57.es.js";
import { chevronRight as a } from "./index59.es.js";
import { Section as o } from "./index259.es.js";
/* empty css            */
import { useEffect as s, useState as c } from "preact/hooks";
var l = t(({ id: t, className: l, collapsed: u, onCollapsedChange: d, sectionProps: f, children: p, tabIndex: m, ...h }, g) => {
	let _ = u !== void 0, [v, y] = c(u ?? !0);
	s(() => {
		_ && y(!!u);
	}, [u]);
	let b = _ ? !!u : v, x = e("SectionCollapsible", void 0, { collapsed: b }), S = (e) => {
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
		id: t,
		className: [x, l].join(" ").trim(),
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
					intentModifier: "secondary"
				})
			}), /* @__PURE__ */ n(o, { ...f })]
		}), !b && p != null && p !== !1 && p !== !0 && /* @__PURE__ */ n("div", {
			className: "SectionCollapsible__content",
			children: p
		})]
	});
});
//#endregion
export { l as SectionCollapsible };
