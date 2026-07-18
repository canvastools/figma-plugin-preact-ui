import "./index255.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
/* empty css            */
import { useEffect as r, useState as i } from "preact/hooks";
var a = t(({ id: t, className: a, variant: o = "indeterminate", delay: s = 0, value: c = 0, ...l }, u) => {
	let [d, f] = i(!1);
	return r(() => {
		let e = window.setTimeout(() => {
			f(!0);
		}, s);
		return () => clearTimeout(e);
	}, [s]), /* @__PURE__ */ n("div", {
		id: t,
		className: [e("Progress", void 0, {
			variant: o,
			visible: d
		}), a].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: u,
		...l,
		children: o === "determinate" && /* @__PURE__ */ n("div", {
			className: "Progress__bar",
			style: { width: `${c}%` }
		})
	});
});
//#endregion
export { a as Progress };
