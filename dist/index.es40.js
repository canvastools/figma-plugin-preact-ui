import "./index.es40.css";
import { jsx as r } from "./index.es129.js";
/* empty css            */
import { typedForwardRef as s } from "./index.es131.js";
import { bem as t } from "./index.es62.js";
const a = ({ id: n, className: e, size: i = "medium", ...o }, m) => {
  const p = t("Spinner", void 0, { size: i });
  return /* @__PURE__ */ r("div", { id: n, className: [p, e].join(" ").trim(), ref: m, ...o, children: /* @__PURE__ */ r("div", { className: "Spinner__spinner" }) });
}, S = s(a);
export {
  S as Spinner
};
