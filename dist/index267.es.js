import "./index267.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
/* empty css            */
var r = t(({ id: t, className: r, size: i = "medium", ...a }, o) => /* @__PURE__ */ n("div", {
	id: t,
	className: [e("Spinner", void 0, { size: i }), r].join(" ").trim(),
	ref: o,
	...a,
	children: /* @__PURE__ */ n("div", { className: "Spinner__spinner" })
}));
//#endregion
export { r as Spinner };
