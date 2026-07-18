import "./index311.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css            */
import { useEffect as r, useRef as i } from "preact/hooks";
var a = t(({ id: t, className: a, minWidth: o, minHeight: s, maxWidth: c, maxHeight: l, onResize: u, ...d }, f) => {
	let p = e("WindowResizer", void 0, void 0), m = i(null), h = (e) => {
		if (m.current = e, typeof f == "function") f(e);
		else if (f) {
			let t = f;
			t.current = e;
		}
	};
	return r(() => {
		let e = m.current;
		if (!e) return;
		let t, n, r, i, a = null, d = 0, f = 0, p = () => {
			u?.({
				width: d,
				height: f
			}), a = null;
		}, h = (e) => {
			let u = Math.min(Math.max(r + e.clientX - t, o), c), m = Math.min(Math.max(i + e.clientY - n, s), l);
			d = u, f = m, a === null && (a = requestAnimationFrame(p));
		}, g = () => {
			document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", g), a !== null && (cancelAnimationFrame(a), a = null);
		}, _ = (e) => {
			e.preventDefault(), t = e.clientX, n = e.clientY, r = window.innerWidth, i = window.innerHeight, document.addEventListener("mousemove", h), document.addEventListener("mouseup", g);
		};
		return e.addEventListener("mousedown", _), () => {
			e.removeEventListener("mousedown", _), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", g);
		};
	}, [
		o,
		s,
		c,
		l,
		u
	]), /* @__PURE__ */ n("div", {
		id: t ?? "WindowResizer",
		className: [p, a].join(" ").trim(),
		"data-pui-interactive": "true",
		"data-overlay-keep-open": "true",
		...d,
		ref: h
	});
});
//#endregion
export { a as WindowResizer };
