import "./index.es16.css";
import { jsx as I } from "./index.es129.js";
/* empty css            */
import { typedForwardRef as v } from "./index.es131.js";
import { bem as w } from "./index.es62.js";
const N = ({
  id: m,
  className: i,
  glyph: o,
  intent: l = "neutral",
  intentModifier: a = "default",
  variant: r = "default",
  size: n = 24,
  disabled: c = !1,
  selected: d = !1,
  iconColor: e,
  children: s,
  ...f
}, p) => {
  const u = w("Icon", void 0, {
    // derived styles are driven by intent/variant/size; glyph is a render fn
    ...!e && {
      intent: `${l}-${a}`,
      disabled: c,
      selected: d
    },
    iconColor: e,
    variant: r,
    size: n.toString()
  });
  let t;
  if (s)
    t = s;
  else if (o)
    t = o({ variant: r, size: n });
  else
    throw new Error("Icon component error: No valid glyph or children provided");
  return /* @__PURE__ */ I(
    "div",
    {
      id: m,
      className: [u, i].join(" ").trim(),
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
