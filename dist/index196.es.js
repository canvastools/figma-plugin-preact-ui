import "./index196.es.css";
import { bem as e } from "./index8.es.js";
import { clamp as t, colorToHex as n, colorToHexAlpha as r, colorToRgba as i, hexAlphaToColor as a, hexToColor as o, rgbaToColor as s, roundAlpha as c } from "./index9.es.js";
import { typedForwardRef as l } from "./index11.es.js";
import { Fragment as u, jsx as d } from "./index15.es.js";
import { Text as f } from "./index16.es.js";
import { Input as p } from "./index180.es.js";
import { Select as m } from "./index189.es.js";
import { ControlGroup as h } from "./index191.es.js";
import { useNumericInput as g } from "./index192.es.js";
import { useStringInput as _ } from "./index193.es.js";
import { HexAlphaColorPicker as v, HexColorPicker as y, RgbColorPicker as b, RgbaColorPicker as x } from "./index194.es.js";
/* empty css            */
import { useEffect as S, useMemo as C, useRef as w, useState as T } from "preact/hooks";
//#region src/components/ColorPicker/ColorPicker.tsx
var E = {
	r: {
		min: 0,
		max: 255,
		defaultValue: 200
	},
	g: {
		min: 0,
		max: 255,
		defaultValue: 0
	},
	b: {
		min: 0,
		max: 255,
		defaultValue: 35
	},
	a: {
		min: 0,
		max: 1,
		defaultValue: .5
	}
}, D = {
	v: {
		min: 6,
		max: 6,
		defaultValue: "FF0000"
	},
	a: {
		min: 0,
		max: 1,
		defaultValue: .5
	}
}, O = [
	{
		value: "rgba",
		label: "RGB"
	},
	{
		value: "hex",
		label: "Hex"
	},
	{
		value: "hexAlpha",
		label: "Hex alpha"
	}
], k = (e, t) => t ? e : e.map((e) => e === "hexAlpha" ? "hex" : e).filter((e, t, n) => n.indexOf(e) === t), A = (e, t) => t.includes(e) ? e : e === "hexAlpha" && t.includes("hex") ? "hex" : t[0], j = (e) => e.toUpperCase().replace(/[^0-9A-F]/g, "0").padEnd(6, "0").slice(0, 6), M = ({ color: e, setColor: n, type: r, setType: a, options: o, selectRef: l, showOpacity: _ = !0 }) => {
	let v = i(e), y = g({
		value: v.r.toString(),
		required: !0,
		min: E.r.min,
		max: E.r.max,
		precision: 0,
		step: 1,
		stepLarge: 10,
		normalizeOnError: !0
	}), b = g({
		value: v.g.toString(),
		required: !0,
		min: E.g.min,
		max: E.g.max,
		precision: 0,
		step: 1,
		stepLarge: 10,
		normalizeOnError: !0
	}), x = g({
		value: v.b.toString(),
		required: !0,
		min: E.b.min,
		max: E.b.max,
		precision: 0,
		step: 1,
		stepLarge: 10,
		normalizeOnError: !0
	}), C = g({
		value: Math.round(v.a * 100).toString(),
		required: !0,
		min: 0,
		max: 100,
		precision: 0,
		step: 1,
		stepLarge: 10,
		normalizeOnError: !0
	}), [w, D] = T(v.r.toString()), [O, k] = T(v.g.toString()), [A, j] = T(v.b.toString()), [M, N] = T(Math.round(v.a * 100).toString());
	return S(() => {
		let t = i(e);
		D(t.r.toString()), k(t.g.toString()), j(t.b.toString()), N(Math.round(t.a * 100).toString());
	}, [e]), /* @__PURE__ */ d(u, { children: [/* @__PURE__ */ d("div", {
		style: { width: "52px" },
		children: /* @__PURE__ */ d(m, {
			ref: l,
			options: o,
			value: r,
			onValueChange: (e) => a(e.value),
			tooltip: "Color mode",
			menuContainerProps: { width: 120 },
			fullWidth: !0
		})
	}), /* @__PURE__ */ d("div", {
		className: "ColorPicker__controlsValues",
		children: /* @__PURE__ */ d(h, {
			groupFocus: !0,
			fullWidth: !0,
			children: [
				/* @__PURE__ */ d(p, {
					className: "ColorPicker__inputCompact",
					tooltip: "Red",
					selectOnFocus: !0,
					value: w,
					onValueChange: (e) => D(e.value),
					onBlur: (e) => {
						let t = y.parse(e.value);
						if (t.error === "required" || t.error === "invalid_number" || t.error === "not_integer") {
							n(s({
								r: E.r.min,
								g: v.g,
								b: v.b,
								a: v.a
							})), D(String(t.formattedValue ?? "0"));
							return;
						}
						if (t.error === "less_than_min") {
							n(s({
								r: E.r.min,
								g: v.g,
								b: v.b,
								a: v.a
							})), D(String(t.formattedValue ?? "0"));
							return;
						}
						if (t.error === "greater_than_max") {
							n(s({
								r: E.r.max,
								g: v.g,
								b: v.b,
								a: v.a
							})), D(String(t.formattedValue ?? "0"));
							return;
						}
						n(s({
							r: t.normalizedValue ?? 0,
							g: v.g,
							b: v.b,
							a: v.a
						})), D(String(t.formattedValue ?? "0"));
					},
					onKeyDown: (e) => y.handleKeyDown(e, (e) => {
						D(String(e));
					})
				}),
				/* @__PURE__ */ d(p, {
					className: "ColorPicker__inputCompact",
					tooltip: "Green",
					selectOnFocus: !0,
					value: O,
					onValueChange: (e) => k(e.value),
					onBlur: (e) => {
						let t = b.parse(e.value);
						if (t.error === "required" || t.error === "invalid_number" || t.error === "not_integer") {
							n(s({
								r: v.r,
								g: E.g.min,
								b: v.b,
								a: v.a
							})), k(String(t.formattedValue ?? "0"));
							return;
						}
						if (t.error === "less_than_min") {
							n(s({
								r: v.r,
								g: E.g.min,
								b: v.b,
								a: v.a
							})), k(String(t.formattedValue ?? "0"));
							return;
						}
						if (t.error === "greater_than_max") {
							n(s({
								r: v.r,
								g: E.g.max,
								b: v.b,
								a: v.a
							})), k(String(t.formattedValue ?? "0"));
							return;
						}
						n(s({
							r: v.r,
							g: t.normalizedValue ?? 0,
							b: v.b,
							a: v.a
						})), k(String(t.formattedValue ?? "0"));
					},
					onKeyDown: (e) => b.handleKeyDown(e, (e) => {
						k(String(e));
					})
				}),
				/* @__PURE__ */ d(p, {
					className: "ColorPicker__inputCompact",
					tooltip: "Blue",
					selectOnFocus: !0,
					value: A,
					onValueChange: (e) => j(e.value),
					onBlur: (e) => {
						let t = x.parse(e.value);
						if (t.error === "required" || t.error === "invalid_number" || t.error === "not_integer") {
							n(s({
								r: v.r,
								g: v.g,
								b: E.b.min,
								a: v.a
							})), j(String(t.formattedValue ?? "0"));
							return;
						}
						if (t.error === "less_than_min") {
							n(s({
								r: v.r,
								g: v.g,
								b: E.b.min,
								a: v.a
							})), j(String(t.formattedValue ?? "0"));
							return;
						}
						if (t.error === "greater_than_max") {
							n(s({
								r: v.r,
								g: v.g,
								b: E.b.max,
								a: v.a
							})), j(String(t.formattedValue ?? "0"));
							return;
						}
						n(s({
							r: v.r,
							g: v.g,
							b: t.normalizedValue ?? 0,
							a: v.a
						})), j(String(t.formattedValue ?? "0"));
					},
					onKeyDown: (e) => x.handleKeyDown(e, (e) => {
						j(String(e));
					})
				}),
				_ && /* @__PURE__ */ d(p, {
					className: "ColorPicker__controlOpacity",
					tooltip: "Opacity",
					selectOnFocus: !0,
					value: M,
					suffix: /* @__PURE__ */ d(f, {
						intentModifier: "secondary",
						children: /* @__PURE__ */ d("div", {
							className: "ColorPicker__controlOpacityContainer",
							children: "%"
						})
					}),
					onValueChange: (e) => N(e.value),
					onBlur: (e) => {
						let r = C.parse(e.value);
						if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
							n(s({
								r: v.r,
								g: v.g,
								b: v.b,
								a: E.a.min
							})), N(String(r.formattedValue ?? "0"));
							return;
						}
						if (r.error === "less_than_min") {
							n(s({
								r: v.r,
								g: v.g,
								b: v.b,
								a: E.a.min
							})), N(String(r.formattedValue ?? "0"));
							return;
						}
						if (r.error === "greater_than_max") {
							n(s({
								r: v.r,
								g: v.g,
								b: v.b,
								a: E.a.max
							})), N(String(r.formattedValue ?? "0"));
							return;
						}
						let i = c(t((r.normalizedValue ?? 0) / 100, E.a.min, E.a.max));
						n(s({
							r: v.r,
							g: v.g,
							b: v.b,
							a: i
						})), N(String(r.formattedValue ?? "0"));
					},
					onKeyDown: (e) => C.handleKeyDown(e, (e) => {
						if (N(String(e)), typeof e != "number") return;
						let r = c(t(e / 100, E.a.min, E.a.max));
						n(s({
							r: v.r,
							g: v.g,
							b: v.b,
							a: r
						}));
					})
				})
			]
		})
	})] });
}, N = ({ color: e, setColor: t, type: r, setType: i, options: a, selectRef: s }) => {
	let [c, l] = T(n(e).slice(1));
	S(() => {
		l(n(e).slice(1));
	}, [e]);
	let f = _({
		value: n(e).slice(1),
		required: !0,
		minLength: 6,
		maxLength: 6,
		allowedCharacters: "0123456789abcdefABCDEF",
		trim: !0,
		format: j,
		normalizeOnError: !0
	});
	return /* @__PURE__ */ d(u, { children: [/* @__PURE__ */ d("div", {
		style: { width: "52px" },
		children: /* @__PURE__ */ d(m, {
			ref: s,
			options: a,
			value: r,
			onValueChange: (e) => i(e.value),
			tooltip: "Color mode",
			menuContainerProps: { width: 120 },
			fullWidth: !0
		})
	}), /* @__PURE__ */ d("div", {
		className: "ColorPicker__controlsValues",
		children: /* @__PURE__ */ d(p, {
			tooltip: "Hex value",
			selectOnFocus: !0,
			value: c.toUpperCase(),
			onValueChange: (e) => l(e.value),
			onBlur: (n) => {
				let r = f.parse(n.value), i = o(r.formattedValue, e.a);
				i && t({
					...e,
					...i
				}), l(r.formattedValue);
			}
		})
	})] });
}, P = ({ color: e, setColor: r, type: i, setType: a, options: s, selectRef: l }) => {
	let [v, y] = T(n(e).slice(1));
	S(() => {
		y(n(e).slice(1));
	}, [e]);
	let b = _({
		value: n(e).slice(1),
		required: !0,
		minLength: 6,
		maxLength: 6,
		allowedCharacters: "0123456789abcdefABCDEF",
		trim: !0,
		format: j,
		normalizeOnError: !0
	}), x = g({
		value: Math.round(e.a * 100).toString(),
		required: !0,
		min: 0,
		max: 100,
		precision: 0,
		step: 1,
		stepLarge: 10,
		normalizeOnError: !0
	}), [C, w] = T(Math.round(e.a * 100).toString());
	return S(() => {
		w(Math.round(e.a * 100).toString());
	}, [e.a]), /* @__PURE__ */ d(u, { children: [/* @__PURE__ */ d("div", {
		style: { width: "52px" },
		children: /* @__PURE__ */ d(m, {
			ref: l,
			options: s,
			value: i,
			onValueChange: (e) => a(e.value),
			tooltip: "Color mode",
			menuContainerProps: { width: 120 },
			fullWidth: !0
		})
	}), /* @__PURE__ */ d("div", {
		className: "ColorPicker__controlsValues",
		children: /* @__PURE__ */ d(h, {
			groupFocus: !0,
			fullWidth: !0,
			children: [/* @__PURE__ */ d(p, {
				tooltip: "Hex value",
				selectOnFocus: !0,
				value: v.toUpperCase(),
				onValueChange: (e) => y(e.value),
				onBlur: (t) => {
					let n = b.parse(t.value), i = o(n.formattedValue, e.a);
					i && r({
						...e,
						...i
					}), y(n.formattedValue);
				}
			}), /* @__PURE__ */ d(p, {
				tooltip: "Opacity",
				selectOnFocus: !0,
				className: "ColorPicker__controlOpacity",
				value: C,
				suffix: /* @__PURE__ */ d(f, {
					intentModifier: "secondary",
					children: /* @__PURE__ */ d("div", {
						className: "ColorPicker__controlOpacityContainer",
						children: "%"
					})
				}),
				onValueChange: (e) => {
					w(e.value);
				},
				onBlur: (n) => {
					let i = x.parse(n.value);
					if (i.error === "required" || i.error === "invalid_number" || i.error === "not_integer") {
						r({
							...e,
							a: D.a.min
						}), w(String(i.formattedValue));
						return;
					}
					if (i.error === "less_than_min") {
						r({
							...e,
							a: D.a.min
						}), w(String(i.formattedValue));
						return;
					}
					if (i.error === "greater_than_max") {
						r({
							...e,
							a: D.a.max
						}), w(String(i.formattedValue));
						return;
					}
					let a = c(t((i.normalizedValue ?? 0) / 100, D.a.min, D.a.max));
					r({
						...e,
						a
					}), w(String(i.formattedValue));
				},
				onKeyDown: (n) => x.handleKeyDown(n, (n) => {
					if (w(String(n)), typeof n != "number") return;
					let i = c(t(n / 100, D.a.min, D.a.max));
					r({
						...e,
						a: i
					});
				})
			})]
		})
	})] });
}, F = l(({ id: l, className: u, defaultType: f = "hex", type: p, defaultColor: m, types: h, color: g, showControls: _ = !0, alpha: E = !0, width: D = 207, fullWidth: j = !1, onTypeChange: F, onColorChange: ee, ...te }, ne) => {
	let [I, L] = T(() => g || m || {
		r: 1,
		g: 0,
		b: 0,
		a: 1
	}), R = w(null);
	S(() => {
		if (g) {
			let e = {
				...g,
				a: c(t(g.a, 0, 1))
			};
			L(e), R.current = e;
		}
	}, [g]);
	let z = C(() => h && h.length ? h : [
		"hex",
		"hexAlpha",
		"rgba"
	], [h]), B = C(() => k(z, E), [z, E]), [V, H] = T(() => A(f, k(z, E)));
	S(() => {
		p && H(p);
	}, [p]);
	let U = C(() => B && B.length ? B.join("|") : "", [B]), W = w(B);
	W.current = B, S(() => {
		if (p || W.current.includes(V)) return;
		let e = A(V, W.current);
		e !== V && (H(e), F?.({ type: e }));
	}, [
		V,
		U,
		p,
		F
	]);
	let G = A(V, B), K = (e) => {
		e !== V && (H(e), F?.({ type: e }));
	}, q = w(null), J = w(!1), Y = w(null), X = w(null), re = (e, t) => e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a, ie = () => {
		let e = Y.current;
		if (Y.current = null, X.current = null, !e) return;
		let r = {
			...e,
			a: c(t(e.a, 0, 1))
		}, i = R.current;
		i !== null && re(r, i) || (R.current = r, L(r), ee?.({
			color: r,
			hex: n(r),
			opacity: r.a
		}));
	}, Z = (e) => {
		Y.current = e, X.current ?? (X.current = window.requestAnimationFrame(ie));
	};
	S(() => () => {
		X.current != null && (cancelAnimationFrame(X.current), X.current = null), Y.current = null;
	}, []);
	let ae = e("ColorPicker", void 0, {
		type: G,
		controls: _,
		fullWidth: !!j
	}), oe = (e) => {
		e.key && (J.current = !0);
	}, se = () => {
		J.current = !1;
	};
	S(() => {
		!_ || !q.current || J.current && (q.current.focus(), J.current = !1);
	}, [G, _]);
	let Q = O.filter((e) => B.includes(e.value)), $ = !B.includes("hex") && B.includes("hexAlpha") ? Q.map((e) => e.value === "hexAlpha" ? {
		...e,
		label: "Hex"
	} : e) : Q;
	return /* @__PURE__ */ d("div", {
		id: l,
		className: [ae, u].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: ne,
		onKeyDownCapture: oe,
		onMouseDownCapture: se,
		onKeyDown: (e) => {
			let t = e.key;
			if (t === "Escape" || t === "Esc") {
				e.stopPropagation(), e.preventDefault();
				let t = e.target;
				t && typeof t.blur == "function" && t.blur();
			}
		},
		...te,
		style: { width: j ? void 0 : D },
		children: [
			G === "hex" && /* @__PURE__ */ d(y, {
				color: n(I),
				onChange: (e) => {
					let t = o(e, I.a);
					t && Z(t);
				}
			}),
			G === "hexAlpha" && /* @__PURE__ */ d(v, {
				color: r(I),
				onChange: (e) => {
					let t = a(e);
					t && Z(t);
				}
			}),
			G === "rgba" && E && /* @__PURE__ */ d(x, {
				color: i(I),
				onChange: (e) => {
					Z(s(e));
				}
			}),
			G === "rgba" && !E && /* @__PURE__ */ d(b, {
				color: i(I),
				onChange: (e) => {
					Z(s({
						...e,
						a: I.a
					}));
				}
			}),
			_ && /* @__PURE__ */ d("div", {
				className: "ColorPicker__controls",
				children: [
					G === "hex" && /* @__PURE__ */ d(N, {
						color: I,
						setColor: (e) => Z(e),
						type: G,
						setType: K,
						options: $,
						selectRef: q
					}),
					G === "hexAlpha" && /* @__PURE__ */ d(P, {
						color: I,
						setColor: Z,
						type: G,
						setType: K,
						options: $,
						selectRef: q
					}),
					G === "rgba" && /* @__PURE__ */ d(M, {
						color: I,
						setColor: Z,
						type: G,
						setType: K,
						options: $,
						selectRef: q,
						showOpacity: E
					})
				]
			})
		]
	});
});
//#endregion
export { F as ColorPicker };
