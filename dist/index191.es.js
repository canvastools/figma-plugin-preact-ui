import "./index191.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css            */
import { cloneElement as r, isValidElement as i, toChildArray as a } from "preact";
var o = t(({ id: t, className: o, groupFocus: s = !1, fullWidth: c = !1, disabled: l = !1, children: u, ...d }, f) => {
	let p = a(u).filter(i);
	return /* @__PURE__ */ n("div", {
		id: t,
		className: [e("ControlGroup", void 0, {
			groupFocus: !!s,
			fullWidth: !!c,
			disabled: !!l
		}), o].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: f,
		...d,
		children: p.map((e, t) => r(e, {
			...e.props,
			grouped: t === 0 ? "first" : t === p.length - 1 ? "last" : "middle"
		}))
	});
});
//#endregion
export { o as ControlGroup };
