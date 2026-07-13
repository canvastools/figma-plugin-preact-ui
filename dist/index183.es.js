import "./index183.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Icon as r } from "./index33.es.js";
import { chevronDown as i } from "./index57.es.js";
import { chevronUp as a } from "./index60.es.js";
import { RawMenuContext as o } from "./index181.es.js";
/* empty css            */
import { useCallback as s, useContext as c, useEffect as l, useRef as u, useState as d } from "preact/hooks";
//#region src/components/MenuContainer/MenuContainer.tsx
var f = 6, p = t(({ id: t, className: p, width: m, height: h, children: g, ..._ }, v) => {
	let y = c(o)?.keyboardInteraction ?? !1, b = u(null), x = u(null), S = u(!1), [C, w] = d(!1), [T, E] = d(!1), D = s(() => {
		let e = b.current;
		if (!e) {
			w(!1), E(!1);
			return;
		}
		w(e.scrollTop > 1), E(e.scrollTop + e.clientHeight < e.scrollHeight - 1);
	}, []);
	l(() => {
		let e = b.current;
		if (!e) return;
		D();
		let t = null;
		try {
			t = new ResizeObserver(D), t.observe(e);
		} catch {}
		return window.addEventListener("resize", D), () => {
			t?.disconnect(), window.removeEventListener("resize", D);
		};
	}, [D]);
	let O = s((e) => {
		let t = b.current;
		if (!t || !t.contains(e)) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect(), i = r.top - n.top + t.scrollTop + r.height / 2 - t.clientHeight / 2, a = t.scrollHeight - t.clientHeight;
		t.scrollTop = Math.max(0, Math.min(a, i)), D();
	}, [D]);
	l(() => {
		let e = b.current;
		if (!e) return;
		let t = 0, n = 0;
		return t = requestAnimationFrame(() => {
			n = requestAnimationFrame(() => {
				let t = e.querySelector("[data-pui-selected=\"true\"]");
				t && O(t);
			});
		}), () => {
			cancelAnimationFrame(t), cancelAnimationFrame(n);
		};
	}, [O]);
	let k = s(() => {
		x.current != null && (cancelAnimationFrame(x.current), x.current = null);
	}, []), A = s((e) => {
		k();
		let t = () => {
			let n = b.current;
			n && (n.scrollTop += f * e, D(), (e > 0 ? n.scrollTop + n.clientHeight < n.scrollHeight - 1 : n.scrollTop > 1) ? x.current = requestAnimationFrame(t) : x.current = null);
		};
		x.current = requestAnimationFrame(t);
	}, [k, D]);
	return l(() => {
		let e = b.current;
		if (!e) return;
		let t = () => {
			S.current = !0;
		}, n = () => {
			S.current = !1;
		}, r = (t) => {
			if (S.current) return;
			let n = t.target;
			!n || !e.contains(n) || O(n);
		};
		return e.addEventListener("pointerdown", t, !0), window.addEventListener("pointerup", n, !0), e.addEventListener("focusin", r), () => {
			e.removeEventListener("pointerdown", t, !0), window.removeEventListener("pointerup", n, !0), e.removeEventListener("focusin", r);
		};
	}, [O]), l(() => () => k(), [k]), /* @__PURE__ */ n("div", {
		id: t,
		className: [e("MenuContainer", void 0, { "keyboard-interaction": y }), p].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: v,
		..._,
		style: {
			width: m,
			height: h
		},
		children: [
			/* @__PURE__ */ n("div", {
				className: "MenuContainer__scroll-area",
				ref: b,
				onScroll: D,
				children: g
			}),
			C && /* @__PURE__ */ n("div", {
				className: "MenuContainer__scroll-zone MenuContainer__scroll-zone_top",
				onMouseEnter: () => A(-1),
				onMouseLeave: k,
				children: /* @__PURE__ */ n("div", {
					className: "MenuContainer__scroll-zone-inner",
					children: /* @__PURE__ */ n(r, {
						glyph: a,
						intent: "neutral-inverted-fixed"
					})
				})
			}),
			T && /* @__PURE__ */ n("div", {
				className: "MenuContainer__scroll-zone MenuContainer__scroll-zone_bottom",
				onMouseEnter: () => A(1),
				onMouseLeave: k,
				children: /* @__PURE__ */ n("div", {
					className: "MenuContainer__scroll-zone-inner",
					children: /* @__PURE__ */ n(r, {
						glyph: i,
						intent: "neutral-inverted-fixed"
					})
				})
			})
		]
	});
});
//#endregion
export { p as MenuContainer };
