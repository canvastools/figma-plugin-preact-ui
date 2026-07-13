import "./index197.es.css";
import { bem as e } from "./index8.es.js";
import { colorToHex as t, colorToHexAlpha as n } from "./index9.es.js";
import { typedForwardRef as r } from "./index10.es.js";
import { jsx as i } from "./index14.es.js";
import { Tooltip as a } from "./index29.es.js";
/* empty css            */
import { useRef as o } from "preact/hooks";
//#region src/components/ColorSwatch/ColorSwatch.tsx
var s = (e) => "gradientStops" in e, c = (e) => e.a < 1, l = (e, t = !1) => {
	let { r: n, g: r, b: i, a } = e.color;
	return `rgba(${Math.round(n * 255)}, ${Math.round(r * 255)}, ${Math.round(i * 255)}, ${t ? 1 : a}) ${e.position * 100}%`;
}, u = (e, t = !1) => {
	let n = e.gradientStops.map((e) => l(e, t)).join(", "), [r, i] = e.gradientHandlePositions;
	switch (e.type) {
		case "gradient-linear": return `linear-gradient(${Math.atan2(i.y - r.y, i.x - r.x) * (180 / Math.PI) + 90}deg, ${n})`;
		case "gradient-radial": return `radial-gradient(circle at ${r.x * 100}% ${r.y * 100}%, ${n})`;
		case "gradient-angular": return `conic-gradient(from ${Math.atan2(i.y - r.y, i.x - r.x) * (180 / Math.PI) + 90}deg at ${r.x * 100}% ${r.y * 100}%, ${n})`;
	}
}, d = (e, r = !0) => s(e) ? [{ background: u(e) }] : r && c(e) ? [{ backgroundColor: t(e) }, { backgroundColor: n(e) }] : [{ backgroundColor: n(e) }], f = r(({ id: t, className: n, size: r = "medium", fill: s, alpha: c = !0, disabled: l = !1, selected: u = !1, selection: f = "default", tooltip: p, children: m, tabIndex: h, onClick: g, ..._ }, v) => {
	let y = o(null), b = Array.isArray(s), x = e("ColorSwatch", void 0, {
		selection: f,
		value: b ? s.length > 0 : s !== void 0,
		size: r,
		disabled: l,
		selected: u
	}), S = (e) => {
		l || (e.key === "Escape" || e.key === "Esc") && e.currentTarget.blur();
	}, { onClick: C, onKeyDown: w, ...T } = _;
	return /* @__PURE__ */ i("button", {
		id: t,
		className: [x, n].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: (e) => {
			typeof v == "function" ? v(e) : v && (v.current = e), y.current = e;
		},
		...T,
		"aria-disabled": l || void 0,
		tabIndex: l ? -1 : h,
		onClick: (e) => {
			l || (C?.(e), g?.({
				event: e,
				fill: s
			}));
		},
		onKeyDown: (e) => {
			S(e), w?.(e);
		},
		children: [/* @__PURE__ */ i("div", {
			className: "ColorSwatch__container",
			children: [b ? s.map((e, t) => /* @__PURE__ */ i("div", {
				className: "ColorSwatch__layer",
				children: d(e, c).map((e, t) => /* @__PURE__ */ i("div", {
					className: "ColorSwatch__fill",
					style: e
				}, t))
			}, t)) : s && d(s, c).map((e, t) => /* @__PURE__ */ i("div", {
				className: "ColorSwatch__fill",
				style: e
			}, t)), m && /* @__PURE__ */ i("div", {
				className: "ColorSwatch__children",
				children: m
			})]
		}), p && /* @__PURE__ */ i(a, {
			anchorRef: y,
			children: p
		})]
	});
});
//#endregion
export { f as ColorSwatch };
