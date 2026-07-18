import "./index258.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
import { useScrollContextOptional as r } from "./index256.es.js";
/* empty css            */
import { useCallback as i, useEffect as a, useRef as o, useState as s } from "preact/hooks";
//#region src/components/ScrollContainer/ScrollContainer.tsx
var c = 12, l = t(({ id: t, className: l, children: u, ...d }, f) => {
	let p = r(), [m, h] = s(void 0), [g, _] = s(!0), [v, y] = s(!1), b = p && typeof p.positionY == "number" ? p.positionY : m, x = p ? p.isAtTop : g, S = p ? p.isAtBottom : v, C = p?.registerScrollRoot ?? (() => {}), w = o(null), T = o(null), E = o(null), [D, O] = s({
		top: 0,
		height: 24
	}), [k, A] = s(!1), [j, M] = s(!1), N = o(0), P = o(!1), F = o(""), I = o(null), L = o(!1), R = o(null), z = e("ScrollContainer", void 0, void 0), B = i(() => {
		let e = T.current, t = E.current;
		if (!e || !t) return;
		let n = Math.max(0, e.scrollHeight - e.clientHeight), r = n > 0, i = r ? e.clientHeight / e.scrollHeight : 1, a = t.clientHeight - c * 2, o = Math.max(24, Math.round(a * i)), s = a - o, l = r ? Math.round(s * e.scrollTop / n) : 0;
		O({
			top: l,
			height: o
		}), M(r);
	}, []), V = i(() => {
		I.current ?? (I.current = requestAnimationFrame(() => {
			I.current = null, B();
		}));
	}, [B]);
	a(() => {
		let e = T.current;
		if (!(!e || typeof b != "number")) try {
			let t = Math.max(0, e.scrollHeight - e.clientHeight), n = Math.max(0, Math.min(b, t));
			e.scrollTop !== n && (e.scrollTop = n), V();
		} catch {}
	}, [b, V]), a(() => {
		V();
	}, [
		x,
		S,
		V
	]), a(() => {
		let e = T.current;
		if (!e) return;
		let t = new ResizeObserver(() => {
			if (L.current) {
				let t = Math.max(0, e.scrollHeight - e.clientHeight);
				e.scrollTop = t;
			}
			B();
		});
		return t.observe(e), E.current && t.observe(E.current), () => t.disconnect();
	}, [B]), a(() => {
		B();
		let e = requestAnimationFrame(() => B());
		return () => cancelAnimationFrame(e);
	}, [B]), a(() => {
		let e = T.current;
		if (!e) return;
		let t = new MutationObserver(() => {
			if (L.current) {
				let t = Math.max(0, e.scrollHeight - e.clientHeight);
				e.scrollTop = t;
			}
			V();
		});
		return t.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), () => t.disconnect();
	}, [V]), a(() => {
		let e = () => {
			requestAnimationFrame(() => B());
		};
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, [B]);
	let H = (e) => {
		if (p) p.onScroll(e);
		else {
			let t = e.currentTarget || e.target;
			if (t) {
				let e = t.scrollHeight - t.clientHeight, n = e > 0, r = !1, i = !1, a;
				n ? (r = t.scrollTop <= 0, i = t.scrollTop >= e, a = r ? 0 : i ? e : t.scrollTop) : a = 0, _(!n || r), y(!n || i), h(a);
			}
		}
		let t = T.current;
		if (t) {
			let e = Math.max(0, t.scrollHeight - t.clientHeight);
			L.current = e > 0 && Math.abs(e - t.scrollTop) <= 1;
		}
		V();
	}, U = (e) => {
		if (e.button !== 0) return;
		let t = E.current;
		if (!t) return;
		e.preventDefault(), A(!0), P.current = !0, B();
		let n = e.clientY;
		N.current = n - (t.getBoundingClientRect().top + c + D.top), F.current = document.body.style.userSelect, document.body.style.userSelect = "none";
		let r = (e) => W(e), i = () => G();
		R.current = {
			move: r,
			up: i
		}, window.addEventListener("mousemove", r), window.addEventListener("mouseup", i);
	}, W = (e) => {
		if (!P.current) return;
		let t = T.current, n = E.current;
		if (!t || !n) return;
		let r = Math.max(0, t.scrollHeight - t.clientHeight);
		if (r <= 0) return;
		let i = n.getBoundingClientRect(), a = e.clientY - i.top - c - N.current, o = n.clientHeight - c * 2 - D.height;
		if (o <= 0) return;
		e.preventDefault();
		let s = Math.round(Math.max(0, Math.min(o, a)) * r / o);
		t.scrollTop !== s && (t.scrollTop = s, V());
	}, G = () => {
		let e = R.current;
		e && (window.removeEventListener("mousemove", e.move), window.removeEventListener("mouseup", e.up), R.current = null), A(!1), P.current = !1, document.body.style.userSelect = F.current;
	};
	a(() => () => {
		let e = R.current;
		e && (window.removeEventListener("mousemove", e.move), window.removeEventListener("mouseup", e.up), R.current = null), P.current = !1, document.body.style.userSelect = F.current;
	}, []);
	let K = e("ScrollContainer", "track", {
		noScroll: !j,
		dragging: k
	});
	return /* @__PURE__ */ n("div", {
		id: t,
		className: [z, l].join(" ").trim(),
		ref: (e) => {
			w.current = e, typeof f == "function" ? f(e) : f && (f.current = e);
		},
		...d,
		children: [/* @__PURE__ */ n("div", {
			className: "ScrollContainer__content",
			ref: (e) => {
				T.current = e, C(e);
			},
			onScroll: (e) => H(e),
			children: u
		}), /* @__PURE__ */ n("div", {
			className: K,
			ref: E,
			"data-pui-interactive": "true",
			children: /* @__PURE__ */ n("div", {
				className: "ScrollContainer__thumb",
				style: {
					height: `${D.height}px`,
					top: `${c}px`,
					transform: `translateY(${D.top}px)`
				},
				"data-pui-interactive": "true",
				onMouseDown: (e) => U(e)
			})
		})]
	});
});
//#endregion
export { l as ScrollContainer };
