import "./index30.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { useRefElement as n } from "./index13.es.js";
import { jsx as r } from "./index15.es.js";
import { OverlayPositioner as i } from "./index24.es.js";
import { TooltipContainer as a } from "./index26.es.js";
import { useTooltipContext as o } from "./index28.es.js";
/* empty css           */
import { useEffect as s, useMemo as c, useRef as l, useState as u } from "preact/hooks";
var d = t(({ id: t, className: d, anchorRef: f, width: p, height: m, showArrow: h = !0, placement: g = "bottom", placementFallback: _ = [
	"top",
	"left",
	"right"
], offsetX: v = 0, offsetY: y = 8, offsetEdge: b = 8, trigger: x = "hover", showDelay: S, hideDelay: C, onOpen: w, onClose: T, children: E, ...D }, O) => {
	let k = o(), [A, j] = u(!1), M = l(!1), N = l(!1), P = c(() => ({
		showDelay: S,
		hideDelay: C
	}), [S, C]), F = () => {
		k?.registerHoverEnd(f, j, P);
	};
	s(() => {
		A && !M.current ? (M.current = !0, w?.()) : !A && M.current && (M.current = !1, T?.());
	}, [
		A,
		w,
		T
	]);
	let I = n(f);
	s(() => {
		if (!I) return;
		if (!k) {
			N.current || (N.current = !0, console.warn("[figma-plugin-preact-ui] Tooltip requires a <TooltipContext> provider. Wrap your app (or plugin root) in <TooltipContext> — tooltips will not be shown otherwise."));
			return;
		}
		let e = I, t = f;
		if (x === "click") {
			let n = (e) => {
				e.preventDefault(), k.registerClick(t, j, P);
			};
			return e.addEventListener("click", n), () => {
				e.removeEventListener("click", n);
			};
		}
		let n = () => {
			k.registerHoverStart(t, j, P);
		}, r = () => {
			k.registerHoverEnd(t, j, P);
		}, i = () => {
			k.registerPointerDown(t, j, P);
		};
		return e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", r), e.addEventListener("pointerdown", i), () => {
			e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", r), e.removeEventListener("pointerdown", i);
		};
	}, [
		I,
		f,
		k,
		P,
		x
	]);
	let L = e("Tooltip", void 0, void 0);
	return /* @__PURE__ */ r(i, {
		anchorRef: f,
		open: A,
		placement: g,
		placementFallback: _,
		offsetX: v,
		offsetY: y,
		offsetEdge: b,
		closeOnClickOutside: x === "click",
		trigger: "hover",
		onClose: x === "click" ? F : () => j(!1),
		children: /* @__PURE__ */ r("div", {
			id: t,
			className: [L, d].join(" ").trim(),
			"data-pui-interactive": "true",
			...D,
			ref: O,
			children: /* @__PURE__ */ r(a, {
				width: p,
				height: m,
				showArrow: h,
				children: E
			})
		})
	});
});
//#endregion
export { d as Tooltip };
