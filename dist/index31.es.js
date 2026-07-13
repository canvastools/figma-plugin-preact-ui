import "./index31.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
import { Tooltip as i } from "./index29.es.js";
/* empty css           */
import { useRef as a } from "preact/hooks";
import { Fragment as o } from "preact";
var s = t(({ id: t, className: s, intent: c = "neutral", intentModifier: l = "default", ghost: u = !1, size: d = "medium", grouped: f, disabled: p = !1, fullWidth: m = !1, prefix: h, suffix: g, children: _, tooltip: v, tabIndex: y, onClick: b, ...x }, S) => {
	let C = typeof _ == "string" || typeof _ == "number", w = e("Button", void 0, {
		intent: `${c}-${l}`,
		ghost: u,
		size: d,
		grouped: !!f,
		groupedPosition: f ?? void 0,
		disabled: p,
		fullWidth: m,
		prefix: !!h,
		suffix: !!g,
		tooltip: !!v,
		customChildren: !C
	}), T = (e) => {
		if (p) {
			e.preventDefault();
			return;
		}
		e.stopPropagation(), b?.({ event: e });
	}, E = (e) => {
		(e.key === "Escape" || e.key === "Esc") && e.currentTarget.blur();
	}, D = a(null);
	return /* @__PURE__ */ n(o, { children: [/* @__PURE__ */ n("button", {
		id: t,
		className: [w, s].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: (e) => {
			typeof S == "function" ? S(e) : S && (S.current = e), D.current = e;
		},
		disabled: p,
		...y === void 0 ? {} : { tabIndex: y },
		onClick: T,
		onKeyDown: E,
		...x,
		children: /* @__PURE__ */ n("div", {
			className: "Button__content",
			children: [
				h && /* @__PURE__ */ n("div", {
					className: "Button__prefix",
					children: h
				}),
				_ != null && _ !== !1 && _ !== !0 && /* @__PURE__ */ n("div", {
					className: "Button__children",
					children: C ? /* @__PURE__ */ n(r, {
						variant: "body",
						size: "medium",
						intent: c,
						intentModifier: l,
						disabled: p,
						truncate: !0,
						children: _
					}) : _
				}),
				g && /* @__PURE__ */ n("div", {
					className: "Button__suffix",
					children: g
				})
			]
		})
	}), v && /* @__PURE__ */ n(i, {
		anchorRef: D,
		children: v
	})] });
});
//#endregion
export { s as Button };
