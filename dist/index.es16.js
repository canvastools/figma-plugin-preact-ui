import "./index.es16.css";
import { jsx as I } from "./index.es178.js";
/* empty css            */
import { typedForwardRef as v } from "./index.es180.js";
import { bem as w } from "./index.es63.js";
const N = ({
  id: s,
  className: m,
  glyph: o,
  intent: i = "neutral",
  intentModifier: l = "default",
  variant: r = "default",
  size: a = 24,
  disabled: c = !1,
  selected: d = !1,
  iconColor: e,
  children: n,
  ...f
}, p) => {
  const u = w("Icon", void 0, {
    // derived styles are driven by intent/variant/size; glyph is a render fn
    ...!e && {
      intent: `${i}-${l}`,
      disabled: c,
      selected: d
    },
    iconColor: e,
    variant: r,
    size: a.toString()
  });
  let t;
  if (n)
    t = n;
  else if (o)
    t = o({ variant: r });
  else
    throw new Error("Icon component error: No valid glyph or children provided");
  return /* @__PURE__ */ I(
    "div",
    {
      id: s,
      className: [u, m].join(" ").trim(),
      ref: p,
      ...f,
      style: {
        ...e ? { color: e } : {}
      },
      children: t
    }
  );
}, $ = v(N);
export {
  $ as Icon
};
