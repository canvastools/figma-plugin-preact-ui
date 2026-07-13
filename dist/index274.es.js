import "./index274.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
import { Tooltip as i } from "./index29.es.js";
import { Icon as a } from "./index33.es.js";
import { useTabContext as o } from "./index272.es.js";
/* empty css            */
import { useRef as s } from "preact/hooks";
import { Fragment as c, cloneElement as l, toChildArray as u } from "preact";
var d = t(({ id: t, className: d, variant: f = "default", prefix: p, suffix: m, children: h, tooltip: g, tabIndex: _, onClick: v, ...y }, b) => {
	let x = typeof h == "string" || typeof h == "number", { activeId: S, onTabChange: C, registerTab: w } = o(), T = s(null), E = (e) => {
		if (T.current = e, w(t, e), typeof b == "function") b(e);
		else if (b) {
			let t = b;
			t.current = e;
		}
	}, D = e("Tab", void 0, {
		variant: f,
		selected: t === S,
		prefix: !!p,
		suffix: !!m,
		tooltip: !!g,
		customChildren: !x
	}), O = (e) => {
		e.stopPropagation(), C(t), v?.({
			event: e,
			id: t
		});
	}, k = (e, t) => u(e).map((e) => {
		if (typeof e == "object" && e) {
			let n = e;
			if (n.type === a) return l(n, { intentModifier: t ? "default" : "secondary" });
		}
		return e;
	}), A = ({ fake: e = !1, selected: i = !1 }) => /* @__PURE__ */ n("div", {
		className: "Tab__content",
		children: [
			p && /* @__PURE__ */ n("div", {
				className: "Tab__prefix",
				children: p && k(p, i)
			}),
			h != null && h !== !1 && h !== !0 && /* @__PURE__ */ n("div", {
				className: "Tab__children",
				children: x ? /* @__PURE__ */ n(r, {
					variant: "body",
					size: "medium",
					strong: e || t === S,
					intent: "neutral",
					intentModifier: i ? "default" : "secondary",
					children: h
				}) : h
			}),
			m && /* @__PURE__ */ n("div", {
				className: "Tab__suffix",
				children: m && k(m, i)
			})
		]
	});
	return /* @__PURE__ */ n(c, { children: [/* @__PURE__ */ n("button", {
		id: t,
		className: [D, d].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: E,
		...y,
		tabIndex: _ ?? (t === S ? 0 : -1),
		onClick: O,
		children: [/* @__PURE__ */ n("div", {
			className: "Tab__container Tab__container_fake",
			children: A({
				fake: !0,
				selected: t === S
			})
		}), /* @__PURE__ */ n("div", {
			className: "Tab__container Tab__container_real",
			children: A({ selected: t === S })
		})]
	}), g && /* @__PURE__ */ n(i, {
		anchorRef: T,
		children: g
	})] });
});
//#endregion
export { d as Tab };
