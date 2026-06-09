import "./index.es2.css";
import { jsx as t } from "./index.es178.js";
import { Text as f } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as p } from "./index.es180.js";
import { bem as c } from "./index.es63.js";
const u = ({ id: m, className: o, variant: l = "circle", size: r = "medium", src: a, backgroundColor: i, textColor: n, children: e, ...s }, d) => {
  const v = c("Avatar", void 0, {
    variant: l,
    size: r,
    src: !!a
  });
  return /* @__PURE__ */ t(
    "div",
    {
      id: m,
      className: [v, o].join(" ").trim(),
      ref: d,
      ...s,
      style: {
        ...i !== void 0 ? { backgroundColor: i } : {}
      },
      children: [
        a && /* @__PURE__ */ t("img", { className: "Avatar__image", src: a, alt: "Avatar" }),
        /* @__PURE__ */ t("div", { className: "Avatar__children", children: typeof e == "string" ? /* @__PURE__ */ t(
          f,
          {
            variant: "body",
            size: r === "small" ? "small" : "large",
            strong: !0,
            intent: "neutral-inverted",
            intentModifier: "default",
            textColor: n,
            fullWidth: !0,
            wrap: !1,
            align: "center",
            children: e
          }
        ) : e })
      ]
    }
  );
}, x = p(u);
export {
  x as Avatar
};
