import "./index272.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css            */
import { useEffect as r, useState as i } from "preact/hooks";
var a = t(({ id: t, className: a, checked: o, defaultChecked: s = !1, disabled: c = !1, tabIndex: l, onCheckedChange: u, ...d }, f) => {
	let p = o !== void 0, [m, h] = i(p ? !!o : !!s);
	r(() => {
		p && h(!!o);
	}, [p, o]);
	let g = e("Switch", void 0, {
		checked: m,
		disabled: c
	}), _ = (e) => {
		if (c) {
			e.preventDefault?.();
			return;
		}
		let t = e.currentTarget.checked;
		p || h(t), u?.({
			event: e,
			checked: t
		});
	}, v = (e) => {
		e.stopPropagation();
	}, y = (e) => {
		(e.key === "Escape" || e.key === "Esc") && e.currentTarget.blur();
	};
	return /* @__PURE__ */ n("div", {
		id: t,
		className: [g, a].join(" ").trim(),
		"data-pui-interactive": "true",
		...d,
		ref: f,
		children: /* @__PURE__ */ n("div", {
			className: "Switch__input",
			children: [/* @__PURE__ */ n("input", {
				className: "Switch__input-native",
				type: "checkbox",
				checked: m,
				disabled: c,
				...l === void 0 ? {} : { tabIndex: l },
				onClick: v,
				onChange: _,
				onKeyDown: y
			}), /* @__PURE__ */ n("div", { className: "Switch__control" })]
		})
	});
});
//#endregion
export { a as Switch };
