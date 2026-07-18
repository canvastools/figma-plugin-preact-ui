import "./index176.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
import { Text as r } from "./index16.es.js";
import { Icon as i } from "./index34.es.js";
import { check as a } from "./index52.es.js";
import { mixed as o } from "./index129.es.js";
/* empty css            */
import { useEffect as s, useRef as c, useState as l } from "preact/hooks";
var u = t(({ id: t, className: u, intent: d = "neutral", intentModifier: f = "default", checked: p, defaultChecked: m = !1, mixed: h = !1, disabled: g = !1, label: _, tabIndex: v, onCheckedChange: y, ...b }, x) => {
	let S = c(null), C = p !== void 0, [w, T] = l(C ? !!p : !!m);
	s(() => {
		C && T(!!p);
	}, [C, p]), s(() => {
		let e = S.current;
		e && (e.indeterminate = !!h);
	}, [h]);
	let E = e("Checkbox", void 0, {
		intent: `${d}-${f}`,
		checked: w,
		mixed: h,
		disabled: g,
		label: !!_
	}), D = (e) => {
		if (g) {
			e.preventDefault();
			return;
		}
		e.stopPropagation();
		let t = !w;
		C || T(t), y?.({
			event: e,
			checked: t
		});
	}, O = (e) => {
		if (g) {
			e.preventDefault?.();
			return;
		}
		let t = e.currentTarget.checked;
		C || T(t), y?.({
			event: e,
			checked: t
		});
	}, k = (e) => {
		e.stopPropagation();
	}, A = (e) => {
		(e.key === "Escape" || e.key === "Esc") && e.currentTarget.blur();
	};
	return /* @__PURE__ */ n("div", {
		id: t,
		className: [E, u].join(" ").trim(),
		"data-pui-interactive": "true",
		...b,
		children: [/* @__PURE__ */ n("div", {
			className: "Checkbox__input",
			children: [
				/* @__PURE__ */ n("input", {
					className: "Checkbox__input-native",
					type: "checkbox",
					ref: (e) => {
						S.current = e, typeof x == "function" ? x(e) : x && (x.current = e), e && (e.indeterminate = !!h);
					},
					checked: w,
					disabled: g,
					...v === void 0 ? {} : { tabIndex: v },
					onClick: k,
					onChange: O,
					onKeyDown: A
				}),
				w && !h && /* @__PURE__ */ n("div", {
					className: "Checkbox__icon",
					children: /* @__PURE__ */ n(i, {
						glyph: a,
						intent: d,
						intentModifier: f,
						size: 16
					})
				}),
				w && h && /* @__PURE__ */ n("div", {
					className: "Checkbox__icon",
					children: /* @__PURE__ */ n(i, {
						glyph: o,
						intent: d,
						intentModifier: f,
						size: 16
					})
				})
			]
		}), _ && /* @__PURE__ */ n("div", {
			className: "Checkbox__label",
			onClick: D,
			children: /* @__PURE__ */ n(r, {
				disabled: g,
				children: _
			})
		})]
	});
});
//#endregion
export { u as Checkbox };
