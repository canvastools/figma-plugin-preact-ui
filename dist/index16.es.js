import "./index16.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
/* empty css           */
import { jsx as n } from "./index15.es.js";
//#region src/components/Text/Text.tsx
var r = (e) => {
	let t = [], r = /\[([^\]]+)\]\(([^)]+)\)/g, i = 0, a = r.exec(e), o = 0;
	for (; a;) {
		let [s, c, l] = a;
		a.index > i && t.push(e.slice(i, a.index)), t.push(/* @__PURE__ */ n("a", {
			className: "Text__link",
			href: l,
			children: c
		}, `Text-link-${o}`)), o += 1, i = a.index + s.length, a = r.exec(e);
	}
	return i < e.length && t.push(e.slice(i)), t.length > 0 ? t : e;
}, i = (e) => {
	let t = (e) => typeof e == "string" ? r(e) : e;
	if (Array.isArray(e)) {
		let n = [];
		return e.forEach((e) => {
			let r = t(e);
			Array.isArray(r) ? n.push(...r) : n.push(r);
		}), n;
	}
	return t(e);
}, a = t(({ id: t, className: r, intent: a = "neutral", intentModifier: o = "default", variant: s = "body", size: c = "medium", strong: l = !1, align: u = "left", disabled: d = !1, selected: f = !1, wrap: p = !0, textColor: m, truncate: h = !1, inline: g = !1, fullWidth: _ = !1, children: v, ...y }, b) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("Text", void 0, {
		...!m && {
			intent: `${a}-${o}`,
			disabled: d,
			selected: f
		},
		variant: s,
		size: c,
		strong: l,
		align: u,
		inline: g,
		fullWidth: _,
		wrap: p,
		truncated: h
	}), r].join(" ").trim(),
	ref: b,
	...y,
	style: { ...m ? { color: m } : {} },
	children: i(v)
}));
//#endregion
export { a as Text };
