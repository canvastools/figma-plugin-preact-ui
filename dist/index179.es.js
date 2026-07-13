import "./index179.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
import { Tooltip as ee } from "./index29.es.js";
/* empty css            */
import { useEffect as i, useImperativeHandle as a, useRef as o, useState as s } from "preact/hooks";
import { Fragment as c } from "preact";
var l = t(({ id: t, className: l, variant: u = "default", label: d, placeholder: f, type: p = "text", value: m, defaultValue: h, ghost: g = !1, grouped: _, error: v = !1, disabled: y = !1, prefix: b, suffix: x, showSuffixOnHover: S = !1, focusOnDoubleClick: C = !1, focusOnPrefix: w = !1, minLength: T = 0, maxLength: E, tooltip: D, autoFocus: O = !1, selectOnFocus: k = !1, maxWidth: A, onValueChange: j, onBlur: M, onFocus: te, onKeyDown: ne, tabIndex: N, ...P }, F) => {
	let I = m !== void 0, [L, R] = s(() => h ?? ""), [z, B] = s(!1), [V, H] = s(!1), [U, W] = s(!1), [G, K] = s(!!(m ?? L ?? "")), [q, J] = s(!1), Y = o(null), X = o(null), Z = o(!1);
	a(F, () => Y.current, []), i(() => {
		if (!O) return;
		let e = window.setTimeout(() => {
			X.current?.focus();
		}, 25);
		return () => clearTimeout(e);
	}, [O]), i(() => {
		I && m !== void 0 && K(m.length > 0);
	}, [I, m]);
	let re = e("Input", void 0, {
		filled: G,
		ghost: g,
		disabled: y,
		variant: u,
		label: !!d,
		grouped: !!_,
		groupedPosition: _ ?? void 0,
		prefix: !!b,
		suffix: !!x,
		suffixOnHover: !!S,
		focused: z,
		keyboardFocus: C && U && V,
		editing: q,
		doubleClick: C,
		error: v
	}), ie = e("Input__display", void 0, { placeholder: !!(f && !G) }), ae = (e) => {
		e.stopPropagation();
		let t = e.currentTarget.value;
		I || R(t), K(t.length > 0), j?.({
			event: e,
			value: t
		});
	}, oe = (e) => {
		e.stopPropagation(), B(!1), K(e.currentTarget.value.length > 0), M?.({
			event: e,
			value: e.currentTarget.value
		}), C && Y.current && q && setTimeout(() => {
			Y.current?.focus();
		}, 0);
	}, se = (e) => {
		e.currentTarget === e.target && (W(!0), H(!Z.current));
	}, ce = (e) => {
		e.currentTarget === e.target && (W(!1), H(!1));
	}, le = (e) => {
		if (e.stopPropagation(), B(!0), k) {
			let t = e.currentTarget;
			setTimeout(() => t.select(), 0);
		}
		te?.({
			event: e,
			value: e.currentTarget.value
		});
	}, ue = (e) => {
		e.stopPropagation(), ne?.({
			event: e,
			value: e.currentTarget.value
		}), (e.key === "Enter" || e.key === "Escape" || e.key === "Esc") && e.currentTarget.blur();
	}, de = (e) => {
		e.stopPropagation();
	}, fe = () => {
		Z.current = !0;
	}, pe = (e) => {
		C && e.target === e.currentTarget && (e.key === " " || e.key === "Spacebar" || e.key === "Enter") && (e.preventDefault(), e.stopPropagation(), Z.current = !1, J(!0));
	}, Q = () => {
		Z.current = !0, q ? setTimeout(() => X.current?.focus(), 0) : J(!0);
	}, me = () => {
		C && Q();
	}, he = (e) => {
		y || (e.preventDefault(), X.current?.focus());
	}, ge = (e) => {
		y || (e.preventDefault(), e.stopPropagation(), Q());
	}, _e = (e) => {
		e.stopPropagation();
	};
	i(() => {
		C && q && setTimeout(() => {
			X.current?.focus(), X.current?.select?.();
		}, 0);
	}, [C, q]);
	let $ = !C || q, ve = I ? m ?? "" : L;
	return /* @__PURE__ */ n(c, { children: [/* @__PURE__ */ n("div", {
		id: t,
		className: [re, l].join(" ").trim(),
		"data-pui-interactive": $ ? "true" : "false",
		ref: Y,
		...P,
		children: [d && /* @__PURE__ */ n(r, {
			className: "Input__label",
			intentModifier: "secondary",
			size: u === "list" ? "medium" : "small",
			truncate: !0,
			children: d
		}), /* @__PURE__ */ n("div", {
			className: "Input__container",
			onKeyDown: pe,
			onMouseDown: fe,
			onFocus: se,
			onBlur: ce,
			onDblClick: me,
			tabIndex: C ? N ?? 0 : void 0,
			style: {
				maxWidth: u === "default" ? void 0 : typeof A == "number" ? `${A}px` : A,
				flexShrink: A ? 0 : void 0
			},
			children: [
				b && /* @__PURE__ */ n("div", {
					className: "Input__prefix",
					onMouseDownCapture: w && !C ? he : void 0,
					onDblClickCapture: w && C ? ge : !w && C ? _e : void 0,
					children: b
				}),
				$ ? /* @__PURE__ */ n("input", {
					className: "Input__input-native",
					ref: (e) => {
						X.current = e;
					},
					minLength: T,
					maxLength: E,
					type: p,
					disabled: y,
					...N !== void 0 && !C ? { tabIndex: N } : {},
					placeholder: f,
					value: I ? m : L,
					onInput: ae,
					onClick: de,
					onBlur: (e) => {
						oe(e), C && (J(!1), H(!1));
					},
					onFocus: le,
					onKeyDown: ue
				}) : /* @__PURE__ */ n("div", {
					className: ie,
					children: ve || f
				}),
				x && /* @__PURE__ */ n("div", {
					className: "Input__suffix",
					children: x
				})
			]
		})]
	}), D && /* @__PURE__ */ n(ee, {
		anchorRef: Y,
		children: D
	})] });
});
//#endregion
export { l as Input };
