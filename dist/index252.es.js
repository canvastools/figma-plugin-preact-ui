import "./index252.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { OverlayPositioner as r } from "./index23.es.js";
import { PopoverContainer as i } from "./index247.es.js";
import { PopoverHeader as a } from "./index249.es.js";
import { PopoverContext as o, usePopoverContext as s } from "./index250.es.js";
/* empty css            */
import { useEffect as c, useRef as l, useState as u } from "preact/hooks";
//#region src/components/Popover/Popover.tsx
var d = ({ popoverHeaderProps: e, draggable: t, width: o, height: u, constrainHeight: d = !1, placement: f, placementFallback: p, offsetX: m, offsetY: h, offsetEdge: g, showArrow: _, tabIndex: v, autoReposition: y = !1, children: b }) => {
	let { triggerRef: x, anchorRef: S, open: C, setOpen: w } = s(), T = l(null), E = () => {
		w?.(!1), x?.current?.focus();
	};
	return c(() => {
		C && T.current?.focus();
	}, [C]), /* @__PURE__ */ n(r, {
		anchorRef: S,
		open: C,
		draggable: t,
		placement: f,
		placementFallback: p ?? [],
		offsetX: m,
		offsetY: h,
		offsetEdge: g,
		autoReposition: y,
		constrainHeight: d,
		onClose: E,
		closeOnClickOutside: !0,
		children: /* @__PURE__ */ n(i, {
			ref: T,
			width: o,
			height: u,
			showArrow: _,
			constrainHeight: d,
			tabIndex: v,
			children: [/* @__PURE__ */ n(a, {
				onClose: E,
				children: e?.children
			}), b]
		})
	});
}, f = t(({ id: t, className: r, triggerRef: i, anchorRef: a, defaultOpen: s = !1, open: c, popoverHeaderProps: l, draggable: f = !0, width: p, height: m, constrainHeight: h = !1, placement: g = "bottom-left", placementFallback: _ = [
	"bottom-right",
	"top-left",
	"top-right"
], offsetX: v = 0, offsetY: y = 8, offsetEdge: b = 16, showArrow: x = !1, tabIndex: S, autoReposition: C = !1, children: w, onOpen: T, onClose: E, ...D }, O) => {
	let k = e("Popover", void 0, void 0), A = c !== void 0, [j, M] = u(s), N = A ? c : j;
	return /* @__PURE__ */ n(o, {
		triggerRef: i,
		anchorRef: a,
		open: N,
		setOpen: (e) => {
			e !== N && (A || M(e), e ? T?.() : E?.());
		},
		children: N && /* @__PURE__ */ n("div", {
			id: t,
			className: [k, r].join(" ").trim(),
			ref: O,
			...D,
			children: /* @__PURE__ */ n(d, {
				popoverHeaderProps: l,
				draggable: f,
				width: p,
				height: m,
				constrainHeight: h,
				placement: g,
				placementFallback: _,
				offsetX: v,
				offsetY: y,
				offsetEdge: b,
				showArrow: x,
				tabIndex: S,
				autoReposition: C,
				children: w
			})
		})
	});
});
//#endregion
export { f as Popover };
