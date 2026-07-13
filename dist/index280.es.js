import "./index280.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
import { Tooltip as i } from "./index29.es.js";
/* empty css            */
import { useEffect as a, useImperativeHandle as o, useLayoutEffect as s, useRef as c, useState as l } from "preact/hooks";
import { Fragment as u } from "preact";
//#region src/components/TextArea/TextArea.tsx
var d = 24;
function f(e, t, n) {
	return Math.min(n, Math.max(t, Math.round(e)));
}
function p(e) {
	let t = getComputedStyle(e), n = parseFloat(t.minHeight), r = Number.isFinite(n) && n > 0 ? n : d, i = parseFloat(t.maxHeight);
	return {
		minPx: r,
		maxPx: Number.isFinite(i) ? Math.max(r, i) : 2 ** 53 - 1
	};
}
var m = t(({ id: t, className: m, variant: h = "default", label: g, placeholder: _, value: v, defaultValue: ee, error: y = !1, disabled: b = !1, minLength: x = 0, maxLength: S, tooltip: C, autoFocus: w = !1, selectOnFocus: T = !1, maxWidth: E, minHeight: D, maxHeight: O, resize: k, onValueChange: A, onBlur: j, onFocus: M, onKeyDown: N, tabIndex: P, ...F }, I) => {
	let L = v !== void 0, [R, z] = l(() => ee ?? ""), [B, V] = l(!1), [H, U] = l(!!(v ?? R ?? "")), [W, G] = l(d), K = c(null), q = c(null), J = c(null), Y = c(null);
	a(() => () => {
		let e = Y.current;
		e && (window.removeEventListener("pointermove", e.move), window.removeEventListener("pointerup", e.up), window.removeEventListener("pointercancel", e.up), Y.current = null);
	}, []), o(I, () => K.current, []);
	let X = L ? v ?? "" : R, Z = k !== "y";
	s(() => {
		if (k !== "y" || !q.current) return;
		let { minPx: e, maxPx: t } = p(q.current);
		G((n) => f(n, e, t));
	}, [
		k,
		D,
		O
	]), s(() => {
		let e = J.current, t = q.current;
		if (!e || !t) return;
		if (k === "y") {
			e.style.removeProperty("height");
			return;
		}
		e.style.height = "0px";
		let { minPx: n, maxPx: r } = p(t), i = f(e.scrollHeight, n, r);
		e.style.height = `${i}px`;
	}, [
		k,
		O,
		D,
		X
	]), a(() => {
		if (!w) return;
		let e = window.setTimeout(() => {
			J.current?.focus();
		}, 25);
		return () => clearTimeout(e);
	}, [w]), a(() => {
		L && v !== void 0 && U(v.length > 0);
	}, [L, v]);
	let Q = e("TextArea", void 0, {
		filled: H,
		disabled: b,
		variant: h,
		label: !!g,
		focused: B,
		error: y,
		resizeY: k === "y",
		autoGrow: Z
	}), te = (e) => {
		if (b || k !== "y" || !q.current) return;
		e.preventDefault(), e.stopPropagation();
		let t = q.current, n = e.currentTarget, r = e.clientY, i = t.getBoundingClientRect().height, { minPx: a, maxPx: o } = p(t);
		n.setPointerCapture(e.pointerId);
		let s = (e) => {
			let t = i + (e.clientY - r);
			G(f(t, a, o));
		}, c = (e) => {
			window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), Y.current = null;
			try {
				n.releasePointerCapture(e.pointerId);
			} catch {}
		};
		Y.current = {
			move: s,
			up: c
		}, window.addEventListener("pointermove", s), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
	}, $ = (e) => {
		e.stopPropagation();
		let t = e.currentTarget.value;
		L || z(t), U(t.length > 0), A?.({
			event: e,
			value: t
		});
	}, ne = (e) => {
		e.stopPropagation(), V(!1), U(e.currentTarget.value.length > 0), j?.({
			event: e,
			value: e.currentTarget.value
		});
	}, re = (e) => {
		if (e.stopPropagation(), V(!0), T) {
			let t = e.currentTarget;
			setTimeout(() => t.select(), 0);
		}
		M?.({
			event: e,
			value: e.currentTarget.value
		});
	}, ie = (e) => {
		e.stopPropagation(), N?.({
			event: e,
			value: e.currentTarget.value
		}), (e.key === "Escape" || e.key === "Esc") && e.currentTarget.blur();
	}, ae = (e) => {
		e.stopPropagation();
	}, oe = {
		maxWidth: h === "default" ? void 0 : typeof E == "number" ? `${E}px` : E,
		flexShrink: E ? 0 : void 0,
		minHeight: D === void 0 ? k === "y" ? `${d}px` : void 0 : typeof D == "number" ? `${D}px` : D,
		maxHeight: O === void 0 ? void 0 : typeof O == "number" ? `${O}px` : O,
		height: k === "y" ? `${W}px` : void 0
	};
	return /* @__PURE__ */ n(u, { children: [/* @__PURE__ */ n("div", {
		id: t,
		className: [Q, m].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: K,
		...F,
		children: [g && /* @__PURE__ */ n(r, {
			className: "TextArea__label",
			intentModifier: "secondary",
			size: h === "list" ? "medium" : "small",
			truncate: !0,
			children: g
		}), /* @__PURE__ */ n("div", {
			className: "TextArea__container",
			style: oe,
			ref: q,
			children: [/* @__PURE__ */ n("textarea", {
				className: "TextArea__textarea-native",
				rows: 1,
				ref: (e) => {
					J.current = e;
				},
				minLength: x,
				maxLength: S,
				disabled: b,
				...P === void 0 ? {} : { tabIndex: P },
				placeholder: _,
				value: X,
				onInput: $,
				onClick: ae,
				onBlur: ne,
				onFocus: re,
				onKeyDown: ie
			}), k === "y" && !b && /* @__PURE__ */ n("div", {
				className: "TextArea__resizeHandle",
				"data-pui-interactive": "true",
				onPointerDown: te
			})]
		})]
	}), C && /* @__PURE__ */ n(i, {
		anchorRef: K,
		children: C
	})] });
});
//#endregion
export { m as TextArea };
