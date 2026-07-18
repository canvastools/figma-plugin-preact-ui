import "./index24.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { useRefElement as n } from "./index13.es.js";
import { jsx as r } from "./index15.es.js";
/* empty css           */
import { createPortal as i } from "preact/compat";
import { useCallback as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "preact/hooks";
//#region src/components/OverlayPositioner/OverlayPositioner.tsx
var d = (e, t) => {
	let n = e.scrollHeight - e.clientHeight;
	if (n < 0 && (n = 0), t >= 6) return n;
	for (let r = 0; r < e.children.length; r++) {
		let i = d(e.children[r], t + 1);
		i > n && (n = i);
	}
	return n;
}, f = (e, t, n, r, i, a, o, s, c, l, u, d = i) => {
	let f = [a];
	if (o && Array.isArray(o)) for (let e of o) f.push(e);
	let p = (n, a) => n >= l && a >= l && n + r <= e - l && a + i <= t - l, m = (e, t, n) => Math.max(t, Math.min(n, Math.round(e))), h = (a) => {
		switch (a) {
			case "over": return {
				coords: {
					left: Math.max(l, Math.min(e - r - l, Math.round(n.left + s))),
					top: Math.max(l, Math.min(t - i - l, Math.round(n.top + c)))
				},
				arrow: {
					left: 0,
					top: 0,
					side: "top"
				}
			};
			case "top": {
				let t = Math.max(l, Math.min(e - r - l, Math.round(n.left + n.width / 2 - r / 2 + s))), a = n.top - i - c, o = m(n.left + n.width / 2 - t, u, r - u);
				return {
					coords: {
						left: t,
						top: a
					},
					arrow: {
						left: o,
						top: d,
						side: "top"
					}
				};
			}
			case "top-left": {
				let t = Math.max(l, Math.min(e - r - l, Math.round(n.left + s))), a = n.top - i - c, o = m(n.left - t + n.width / 2, u, r - u);
				return {
					coords: {
						left: t,
						top: a
					},
					arrow: {
						left: o,
						top: d,
						side: "top"
					}
				};
			}
			case "top-right": {
				let t = Math.max(l, Math.min(e - r - l, Math.round(n.right - r - s))), a = n.top - i - c, o = m(n.left - t + n.width / 2, u, r - u);
				return {
					coords: {
						left: t,
						top: a
					},
					arrow: {
						left: o,
						top: d,
						side: "top"
					}
				};
			}
			case "bottom": {
				let t = Math.max(l, Math.min(e - r - l, Math.round(n.left + n.width / 2 - r / 2 + s))), i = n.bottom + c, a = m(n.left - t + n.width / 2, u, r - u);
				return {
					coords: {
						left: t,
						top: i
					},
					arrow: {
						left: a,
						top: 0,
						side: "bottom"
					}
				};
			}
			case "bottom-left": {
				let t = Math.max(l, Math.min(e - r - l, Math.round(n.left + s))), i = n.bottom + c, a = m(n.left - t + n.width / 2, u, r - u);
				return {
					coords: {
						left: t,
						top: i
					},
					arrow: {
						left: a,
						top: 0,
						side: "bottom"
					}
				};
			}
			case "bottom-right": {
				let t = Math.max(l, Math.min(e - r - l, Math.round(n.right - r - s))), i = n.bottom + c, a = m(n.left - t + n.width / 2, u, r - u);
				return {
					coords: {
						left: t,
						top: i
					},
					arrow: {
						left: a,
						top: 0,
						side: "bottom"
					}
				};
			}
			case "left": {
				let e = n.left - r - s, a = Math.max(l, Math.min(t - i - l, Math.round(n.top + n.height / 2 - i / 2 + c))), o = m(n.top - a + n.height / 2, u, d - u);
				return {
					coords: {
						left: e,
						top: a
					},
					arrow: {
						left: r,
						top: o,
						side: "left"
					}
				};
			}
			case "left-top": {
				let e = n.left - r - s, a = Math.max(l, Math.min(t - i - l, Math.round(n.top + c))), o = m(n.top - a + n.height / 2, u, d - u);
				return {
					coords: {
						left: e,
						top: a
					},
					arrow: {
						left: r,
						top: o,
						side: "left"
					}
				};
			}
			case "left-bottom": {
				let e = n.left - r - s, a = Math.max(l, Math.min(t - i - l, Math.round(n.bottom - i - c))), o = m(n.top - a + n.height / 2, u, d - u);
				return {
					coords: {
						left: e,
						top: a
					},
					arrow: {
						left: r,
						top: o,
						side: "left"
					}
				};
			}
			case "right": {
				let e = n.right + s, r = Math.max(l, Math.min(t - i - l, Math.round(n.top + n.height / 2 - i / 2 + c))), a = m(n.top - r + n.height / 2, u, d - u);
				return {
					coords: {
						left: e,
						top: r
					},
					arrow: {
						left: 0,
						top: a,
						side: "right"
					}
				};
			}
			case "right-top": {
				let e = n.right + s, r = Math.max(l, Math.min(t - i - l, Math.round(n.top + c))), a = m(n.top - r + n.height / 2, u, d - u);
				return {
					coords: {
						left: e,
						top: r
					},
					arrow: {
						left: 0,
						top: a,
						side: "right"
					}
				};
			}
			case "right-bottom": {
				let e = n.right + s, r = Math.max(l, Math.min(t - i - l, Math.round(n.bottom - i - c))), a = m(n.top - r + n.height / 2, u, d - u);
				return {
					coords: {
						left: e,
						top: r
					},
					arrow: {
						left: 0,
						top: a,
						side: "right"
					}
				};
			}
			default: {
				let t = Math.max(l, Math.min(e - r - l, Math.round(n.left + n.width / 2 - r / 2))), i = n.bottom + c, a = m(n.left - t + n.width / 2, u, r - u);
				return {
					coords: {
						left: t,
						top: i
					},
					arrow: {
						left: a,
						top: d,
						side: "bottom"
					}
				};
			}
		}
	};
	for (let n of f) {
		let a = h(n);
		if (!o || p(a.coords.left, a.coords.top)) return {
			coords: {
				left: Math.max(l, Math.min(e - r - l, Math.round(a.coords.left))),
				top: Math.max(l, Math.min(t - i - l, Math.round(a.coords.top)))
			},
			arrow: a.arrow,
			placement: n
		};
	}
	let g = h(f[0]);
	return {
		coords: {
			left: Math.max(l, Math.min(e - r - l, Math.round(g.coords.left))),
			top: Math.max(l, Math.min(t - i - l, Math.round(g.coords.top)))
		},
		arrow: g.arrow,
		placement: f[0]
	};
}, p = t(({ id: t, className: p, anchorRef: m, placement: h = "bottom", placementFallback: g, offsetX: _ = 0, offsetY: v = 0, offsetEdge: y = 0, trigger: b = "click", draggable: ee = !1, open: x, defaultOpen: te = !1, closeOnClickOutside: S = !0, autoReposition: C = !1, constrainHeight: w = !1, onOpen: T, onClose: E, children: D }, O) => {
	let k = l(null), [A, ne] = u({
		top: 0,
		left: 0
	}), [j, M] = u(!1), [N, P] = u(null), [F, I] = u(null), [L, R] = u(te), z = typeof x == "boolean", B = z ? x : L, [re, ie] = u(h), V = l(null), H = l(!1), U = l(null);
	o(() => () => {
		let e = U.current;
		e && (window.removeEventListener("mousemove", e.move), window.removeEventListener("mouseup", e.up), U.current = null), H.current = !1;
	}, []);
	let W = c(() => g && Array.isArray(g) ? g : void 0, [g]), G = a(() => {
		let e = window.innerWidth, t = window.innerHeight, n = m.current;
		if (!n) return;
		let r = n.getBoundingClientRect(), i = k.current, a = i?.getBoundingClientRect(), o = Math.round(a?.width || 0), s = Math.round(a?.height || 0);
		if (!o || !s) {
			V.current != null && cancelAnimationFrame(V.current), V.current = requestAnimationFrame(() => {
				V.current = null, G();
			});
			return;
		}
		let c = s;
		if (w && i) {
			let e = d(i, 0);
			e > 1 && (s += e);
		}
		let l = f(e, t, r, o, s, h, W, _, v, y, 8, c);
		ne(l.coords), P(l.arrow), ie(l.placement), M(!0);
	}, [
		m,
		h,
		_,
		v,
		y,
		W,
		w
	]), K = a(() => {
		let e = k.current;
		if (!e) return;
		let t = window.innerWidth, n = window.innerHeight, r = e.getBoundingClientRect(), i = Math.round(r.width), a = Math.round(r.height);
		if (!(!i || !a)) {
			if (w) {
				let t = d(e, 0);
				t > 1 && (a += t);
			}
			I((e) => {
				if (!e) return e;
				let r = Math.max(y, Math.min(t - i - y, Math.round(e.left))), o = Math.max(y, Math.min(n - a - y, Math.round(e.top)));
				return r === e.left && o === e.top ? e : {
					left: r,
					top: o
				};
			});
		}
	}, [w, y]), q = l(null);
	q.current = F;
	let J = a(() => {
		if (q.current) {
			K();
			return;
		}
		I(null), G();
	}, [K, G]);
	s(() => {
		B && (M(!1), G());
	}, [B, G]), o(() => {
		B || I(null);
	}, [B]), o(() => {
		if (!B) return;
		let e = null, t = () => {
			H.current || (e ?? (e = requestAnimationFrame(() => {
				e = null, H.current || J();
			})));
		}, n = () => t();
		window.addEventListener("resize", n), window.addEventListener("scroll", n, !0);
		let r = k.current, i = null, a = null;
		if (C && r) {
			try {
				i = new ResizeObserver(t), i.observe(r);
			} catch {}
			try {
				a = new MutationObserver(t), a.observe(r, {
					childList: !0,
					subtree: !0,
					characterData: !0
				});
			} catch {}
		}
		return () => {
			window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0), i && i.disconnect(), a && a.disconnect(), e != null && cancelAnimationFrame(e), V.current != null && (cancelAnimationFrame(V.current), V.current = null);
		};
	}, [
		B,
		G,
		C,
		J
	]);
	let Y = l(!1);
	o(() => {
		if (B && !Y.current) Y.current = !0, T?.();
		else if (!B && Y.current) {
			if (Y.current = !1, z) return;
			E?.();
		}
	}, [
		z,
		B,
		E,
		T
	]), o(() => {
		if (!B || !S) return;
		let e = (e) => {
			let t = e.target, n = k.current, r = m.current;
			if (!n || !t || !r) return;
			let i = document.activeElement;
			if (i && i !== t) {
				let e = i.contains(t) || i === t, n = i.tagName === "INPUT" || i.tagName === "TEXTAREA" || i.isContentEditable;
				!e && n && i.blur();
			}
			let a = n.contains(t), o = r.contains(t);
			if (a || o || t.closest?.("[data-overlay-keep-open]")) return;
			let s = t?.closest ? t.closest(".OverlayPositioner") : null;
			s && !s.contains(r) || (z ? E?.() : R(!1));
		};
		return window.addEventListener("mousedown", e, !0), () => window.removeEventListener("mousedown", e, !0);
	}, [
		B,
		S,
		m,
		z,
		E
	]);
	let X = n(m);
	o(() => {
		if (!z && X) {
			if (b === "click") {
				let e = (e) => {
					e.preventDefault(), R((e) => !e);
				};
				return X.addEventListener("click", e), () => X.removeEventListener("click", e);
			}
			if (b === "hover") {
				let e = () => {
					R(!0);
				}, t = () => {
					R(!1);
				};
				return X.addEventListener("mouseenter", e), X.addEventListener("mouseleave", t), () => {
					X.removeEventListener("mouseenter", e), X.removeEventListener("mouseleave", t);
				};
			}
		}
	}, [
		z,
		b,
		X
	]);
	let Z = (F ? F.top : A.top) || 0, ae = (F ? F.left : A.left) || 0, Q = {
		top: `${Z}px`,
		left: `${ae}px`,
		visibility: j ? "visible" : "hidden",
		pointerEvents: j ? void 0 : "none"
	};
	N && (Q["--overlay-arrow-left"] = `${N.left}px`, Q["--overlay-arrow-top"] = `${N.top}px`);
	let $ = typeof window < "u" ? Math.max(window.innerHeight - Z - y, 100) : void 0;
	$ != null && (Q["--overlay-available-height"] = `${$}px`);
	let oe = e("OverlayPositioner", void 0, { placement: re });
	if (!B) return null;
	let se = (e) => {
		if (!e) return !1;
		let t = k.current, n = e, r = [
			"button",
			"input",
			"select",
			"textarea",
			"a[href]",
			"canvas",
			"video",
			"audio",
			"[data-pui-interactive='true']"
		].join(",");
		if (e.closest && e.closest(r)) return !0;
		for (; n && t && n !== t;) {
			let e = n.getAttribute && n.getAttribute("tabindex");
			if (e != null && e !== "" && !Number.isNaN(Number(e)) && Number(e) >= 0) return !0;
			n = n.parentElement;
		}
		return !1;
	}, ce = (e) => {
		if (!ee || e.button !== 0) return;
		let t = e.target;
		if (se(t)) return;
		e.preventDefault(), H.current = !0;
		let n = F ? F.left : A.left, r = F ? F.top : A.top, i = e.clientX, a = e.clientY, o = (e) => {
			let t = e.clientX - i, o = e.clientY - a;
			I({
				left: n + t,
				top: r + o
			});
		}, s = () => {
			H.current = !1, window.removeEventListener("mousemove", o), window.removeEventListener("mouseup", s), U.current = null;
		};
		U.current = {
			move: o,
			up: s
		}, window.addEventListener("mousemove", o), window.addEventListener("mouseup", s);
	};
	return i(/* @__PURE__ */ r("div", {
		id: t,
		className: [oe, p].join(" ").trim(),
		ref: (e) => {
			k.current = e, typeof O == "function" ? O(e) : O && (O.current = e);
		},
		style: Q,
		"data-arrow-side": N?.side,
		onMouseDown: (e) => ce(e),
		children: D
	}), document.body);
});
//#endregion
export { p as OverlayPositioner };
