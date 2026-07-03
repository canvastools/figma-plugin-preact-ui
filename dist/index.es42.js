import "./index.es42.css";
import { jsx as r } from "./index.es203.js";
/* empty css            */
import { typedForwardRef as s } from "./index.es205.js";
import { bem as t } from "./index.es65.js";
const a = ({ id: n, className: e, size: i = "medium", ...o }, m) => {
  const p = t("Spinner", void 0, { size: i });
  return /* @__PURE__ */ r("div", { id: n, className: [p, e].join(" ").trim(), ref: m, ...o, children: /* @__PURE__ */ r("div", { className: "Spinner__spinner" }) });
}, S = s(a);
export {
  S as Spinner
};
