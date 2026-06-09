import "./index.es8.css";
import { jsx as t } from "./index.es178.js";
import { useRef as j, useState as v, useEffect as _ } from "preact/hooks";
import { Icon as d } from "./index.es16.js";
import { Text as z } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as C } from "./index.es180.js";
import { bem as I } from "./index.es63.js";
import { check as K } from "./index.es74.js";
import { mixed as P } from "./index.es138.js";
const F = ({
  id: y,
  className: N,
  intent: p = "neutral",
  intentModifier: m = "default",
  checked: l,
  defaultChecked: b = !1,
  mixed: c = !1,
  disabled: i = !1,
  label: f,
  tabIndex: k,
  onCheckedChange: r,
  ...B
}, a) => {
  const h = j(null), e = l !== void 0, [s, u] = v(e ? !!l : !!b);
  _(() => {
    e && u(!!l);
  }, [e, l]), _(() => {
    const o = h.current;
    o && (o.indeterminate = !!c);
  }, [c]);
  const D = I("Checkbox", void 0, {
    intent: `${p}-${m}`,
    checked: s,
    mixed: c,
    disabled: i,
    label: !!f
  }), E = (o) => {
    if (i) {
      o.preventDefault();
      return;
    }
    o.stopPropagation();
    const n = !s;
    e || u(n), r == null || r({ event: o, checked: n });
  }, w = (o) => {
    var x;
    if (i) {
      (x = o.preventDefault) == null || x.call(o);
      return;
    }
    const n = o.currentTarget.checked;
    e || u(n), r == null || r({ event: o, checked: n });
  }, R = (o) => {
    o.stopPropagation();
  }, T = (o) => {
    (o.key === "Escape" || o.key === "Esc") && o.currentTarget.blur();
  };
  return /* @__PURE__ */ t("div", { id: y, className: [D, N].join(" ").trim(), "data-pui-interactive": "true", ...B, children: [
    /* @__PURE__ */ t("div", { className: "Checkbox__input", children: [
      /* @__PURE__ */ t(
        "input",
        {
          className: "Checkbox__input-native",
          type: "checkbox",
          ref: (o) => {
            h.current = o, typeof a == "function" ? a(o) : a && (a.current = o), o && (o.indeterminate = !!c);
          },
          checked: s,
          disabled: i,
          ...k !== void 0 ? { tabIndex: k } : {},
          onClick: R,
          onChange: w,
          onKeyDown: T
        }
      ),
      s && !c && /* @__PURE__ */ t("div", { className: "Checkbox__icon", children: /* @__PURE__ */ t(d, { glyph: K, intent: p, intentModifier: m, size: 16 }) }),
      s && c && /* @__PURE__ */ t("div", { className: "Checkbox__icon", children: /* @__PURE__ */ t(d, { glyph: P, intent: p, intentModifier: m, size: 16 }) })
    ] }),
    f && /* @__PURE__ */ t("div", { className: "Checkbox__label", onClick: E, children: /* @__PURE__ */ t(z, { disabled: i, children: f }) })
  ] });
}, U = C(F);
export {
  U as Checkbox
};
