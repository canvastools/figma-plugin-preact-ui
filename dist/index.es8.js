import "./index.es8.css";
import { jsx as t } from "./index.es129.js";
import { useRef as R, useState as T, useEffect as x } from "preact/hooks";
import { Icon as _ } from "./index.es16.js";
import { Text as j } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as z } from "./index.es131.js";
import { bem as C } from "./index.es62.js";
import { check as K } from "./index.es65.js";
import { mixed as P } from "./index.es99.js";
const v = ({
  id: d,
  className: y,
  intent: p = "neutral",
  intentModifier: m = "default",
  checked: a,
  defaultChecked: b = !1,
  mixed: c = !1,
  disabled: i = !1,
  label: f,
  onCheckedChange: r,
  ...N
}, l) => {
  const k = R(null), e = a !== void 0, [s, u] = T(e ? !!a : !!b);
  x(() => {
    e && u(!!a);
  }, [e, a]), x(() => {
    const o = k.current;
    o && (o.indeterminate = !!c);
  }, [c]);
  const B = C("Checkbox", void 0, {
    intent: `${p}-${m}`,
    checked: s,
    mixed: c,
    disabled: i,
    label: !!f
  }), D = (o) => {
    if (i) {
      o.preventDefault();
      return;
    }
    o.stopPropagation();
    const n = !s;
    e || u(n), r == null || r({ event: o, checked: n });
  }, E = (o) => {
    var h;
    if (i) {
      (h = o.preventDefault) == null || h.call(o);
      return;
    }
    const n = o.currentTarget.checked;
    e || u(n), r == null || r({ event: o, checked: n });
  }, w = (o) => {
    o.stopPropagation();
  }, I = (o) => {
    (o.key === "Escape" || o.key === "Esc") && o.currentTarget.blur();
  };
  return /* @__PURE__ */ t("div", { id: d, className: [B, y].join(" ").trim(), "data-pui-interactive": "true", ...N, children: [
    /* @__PURE__ */ t("div", { className: "Checkbox__input", children: [
      /* @__PURE__ */ t(
        "input",
        {
          className: "Checkbox__input-native",
          type: "checkbox",
          ref: (o) => {
            k.current = o, typeof l == "function" ? l(o) : l && (l.current = o), o && (o.indeterminate = !!c);
          },
          checked: s,
          disabled: i,
          onClick: w,
          onChange: E,
          onKeyDown: I
        }
      ),
      s && !c && /* @__PURE__ */ t("div", { className: "Checkbox__icon", children: /* @__PURE__ */ t(_, { glyph: K, intent: p, intentModifier: m, size: 16 }) }),
      s && c && /* @__PURE__ */ t("div", { className: "Checkbox__icon", children: /* @__PURE__ */ t(_, { glyph: P, intent: p, intentModifier: m, size: 16 }) })
    ] }),
    f && /* @__PURE__ */ t("div", { className: "Checkbox__label", onClick: D, children: /* @__PURE__ */ t(j, { disabled: i, children: f }) })
  ] });
}, Q = z(v);
export {
  Q as Checkbox
};
