import { options as le, cloneElement as me, toChildArray as Pe, Fragment as B1, createContext as Q1 } from "preact";
import t1, { forwardRef as qe, useRef as w1, useLayoutEffect as ze, useEffect as O1, useState as We, useCallback as Ke, useMemo as Ye, createPortal as Ge } from "preact/compat";
import { useState as z, useEffect as j, useMemo as y1, useRef as K, useCallback as c1, useContext as X1, useLayoutEffect as Je } from "preact/hooks";
const s5 = {
  class: "figma-light",
  prefix: "--pui-color",
  variables: {
    neutral: {
      bg: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-hover": "#f5f5f5",
        "default-interactive-pressed": "#e5e5e5",
        "default-interactive-selected": "#e5f4ff",
        "default-interactive-selected-hover": "#bde3ff",
        "default-interactive-selected-pressed": "#e5f4ff",
        secondary: "#f5f5f5",
        "secondary-interactive": "#f5f5f5",
        "secondary-interactive-hover": "#e5e5e5",
        "secondary-interactive-pressed": "#f5f5f5",
        "secondary-interactive-selected": "#f2f9ff",
        "brand-interactive": "#ffffff",
        "brand-interactive-hover": "#e5f4ff",
        "brand-interactive-pressed": "#bde3ff",
        "danger-interactive": "#ffffff",
        "danger-interactive-hover": "#fff0f0",
        "danger-interactive-pressed": "#ffe2e0",
        swatch: "#ffffff",
        disabled: "#ffffff"
      },
      text: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        "default-interactive-selected": "#007be5",
        secondary: "#7d7d7d",
        "secondary-interactive": "#7d7d7d",
        placeholder: "#808080",
        brand: "#007be5",
        "brand-interactive": "#007be5",
        danger: "#dc3412",
        "danger-interactive": "#dc3412",
        warning: "#b86200",
        success: "#009951",
        disabled: "#b3b3b3"
      },
      icon: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        "default-interactive-selected": "#007be5",
        secondary: "#7d7d7d",
        "secondary-interactive": "#7d7d7d",
        tertiary: "#cccccc",
        brand: "#007be5",
        "brand-interactive": "#007be5",
        danger: "#dc3412",
        "danger-interactive": "#dc3412",
        warning: "#b86200",
        success: "#009951",
        disabled: "#b3b3b3"
      },
      border: {
        default: "#e5e5e5",
        "default-interactive": "#e5e5e5",
        "default-interactive-hover": "#bde3ff",
        "default-interactive-selected": "#0d99ff",
        "default-interactive-selected-error": "#f24822",
        secondary: "#cccccc",
        brand: "#80CAFF",
        "brand-interactive": "#80CAFF",
        danger: "#ffc7c2",
        "danger-interactive": "#ffc7c2",
        warning: "#fcd19c",
        success: "#aff4c6",
        "drop-position": "#1a1a1a",
        "drop-position-restricted": "#f24822",
        swatch: "#0000001A",
        disabled: "#e5e5e5"
      }
    },
    "neutral-inverted": {
      bg: {
        default: "#2c2c2c",
        "default-interactive": "#2c2c2c",
        "default-interactive-hover": "#5c5c5c",
        "default-interactive-pressed": "#808080",
        disabled: "#d9d9d9"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#ffffff"
      }
    },
    "neutral-inverted-fixed": {
      bg: {
        default: "#1E1E1E",
        "default-interactive": "#1E1E1E",
        "default-interactive-hover": "#5c5c5c",
        "default-interactive-pressed": "#808080",
        disabled: "#1E1E1E"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        secondary: "#BBBBBB",
        "secondary-interactive": "#BBBBBB",
        disabled: "#808080"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        secondary: "#BBBBBB",
        "secondary-interactive": "#BBBBBB",
        disabled: "#808080"
      },
      border: {
        default: "#383838"
      }
    },
    brand: {
      bg: {
        default: "#0d99ff",
        "default-interactive": "#0d99ff",
        "default-interactive-hover": "#007be5",
        "default-interactive-pressed": "#0768cf",
        disabled: "#d9d9d9"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#ffffff"
      },
      border: {
        "default-interactive": "#007be5"
      }
    },
    danger: {
      bg: {
        default: "#f24822",
        "default-interactive": "#f24822",
        "default-interactive-hover": "#dc3412",
        "default-interactive-pressed": "#bd2915",
        disabled: "#d9d9d9"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#ffffff"
      },
      border: {
        "default-interactive": "#dc3412"
      }
    },
    warning: {
      bg: {
        default: "#ffcd29"
      },
      text: {
        default: "#000000"
      },
      icon: {
        default: "#000000"
      },
      border: {}
    },
    success: {
      bg: {
        default: "#14ae5c",
        "default-interactive": "#14ae5c",
        "default-interactive-hover": "#009951",
        "default-interactive-pressed": "#008043",
        disabled: "#d9d9d9"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#ffffff"
      },
      border: {
        "default-interactive": "#009951"
      }
    },
    system: {
      bg: {
        scrollbar: "#D4D4D4",
        resizer: "#A8A8A8"
      },
      border: {
        focus: "#0d99ff"
      }
    },
    shadow: {
      "popover-hard": "#0000002E",
      "popover-soft": "#0000001F",
      "popover-glare": "#FFFFFF",
      "tooltip-hard": "#0000001a",
      "tooltip-soft": "#0000001f",
      "tooltip-glare": "#ffffff0a",
      "menu-hard": "#0000002E",
      "menu-soft": "#0000001f",
      "menu-glare": "#ffffff0a"
    }
  }
}, c5 = {
  class: "figma-dark",
  prefix: "--pui-color",
  variables: {
    neutral: {
      bg: {
        default: "#2C2C2C",
        "default-interactive": "#2C2C2C",
        "default-interactive-hover": "#383838",
        "default-interactive-pressed": "#444444",
        "default-interactive-selected": "#4A5878",
        "default-interactive-selected-hover": "#394360",
        "default-interactive-selected-pressed": "#4A5878",
        secondary: "#383838",
        "secondary-interactive": "#383838",
        "secondary-interactive-hover": "#444444",
        "secondary-interactive-pressed": "#383838",
        "secondary-interactive-selected": "#394360",
        "brand-interactive": "#2C2C2C",
        "brand-interactive-hover": "#394360",
        "brand-interactive-pressed": "#4A5878",
        "danger-interactive": "#2C2C2C",
        "danger-interactive-hover": "#60332A",
        "danger-interactive-pressed": "#864537",
        swatch: "#ffffff",
        disabled: "#2C2C2C"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-selected": "#7CC4F8",
        secondary: "#C0C0C0",
        "secondary-interactive": "#C0C0C0",
        placeholder: "#A0A0A0",
        brand: "#7CC4F8",
        "brand-interactive": "#7CC4F8",
        danger: "#FCA397",
        "danger-interactive": "#FCA397",
        warning: "#F7D15F",
        success: "#79D297",
        disabled: "#808080"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-selected": "#7CC4F8",
        secondary: "#C0C0C0",
        "secondary-interactive": "#C0C0C0",
        tertiary: "#767676",
        brand: "#7CC4F8",
        "brand-interactive": "#7CC4F8",
        danger: "#FCA397",
        "danger-interactive": "#FCA397",
        warning: "#F7D15F",
        success: "#79D297",
        disabled: "#808080"
      },
      border: {
        default: "#444444",
        "default-interactive": "#444444",
        "default-interactive-hover": "#4A5878",
        "default-interactive-selected": "#0C8CE9",
        "default-interactive-selected-error": "#D4583B",
        secondary: "#767676",
        brand: "#536383",
        "brand-interactive": "#536383",
        danger: "#963323",
        "danger-interactive": "#963323",
        warning: "#925711",
        success: "#0A5C35",
        "drop-position": "#ffffff",
        "drop-position-restricted": "#D4583B",
        swatch: "#00000000",
        disabled: "#444444"
      }
    },
    "neutral-inverted": {
      bg: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-hover": "#e5e5e5",
        "default-interactive-pressed": "#D9D9D9",
        disabled: "#757575"
      },
      text: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        disabled: "#2c2c2c"
      },
      icon: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        disabled: "#2c2c2c"
      }
    },
    "neutral-inverted-fixed": {
      bg: {
        default: "#1E1E1E",
        "default-interactive": "#1E1E1E",
        "default-interactive-hover": "#5c5c5c",
        "default-interactive-pressed": "#808080",
        disabled: "#1E1E1E"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        secondary: "#BBBBBB",
        "secondary-interactive": "#BBBBBB",
        disabled: "#808080"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        secondary: "#BBBBBB",
        "secondary-interactive": "#BBBBBB",
        disabled: "#808080"
      },
      border: {
        default: "#383838"
      }
    },
    brand: {
      bg: {
        default: "#0C8CE9",
        "default-interactive": "#0C8CE9",
        "default-interactive-hover": "#0A6DC2",
        "default-interactive-pressed": "#105CAD",
        disabled: "#757575"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#2c2c2c"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#2c2c2c"
      },
      border: {
        "default-interactive": "#7CC4F8"
      }
    },
    danger: {
      bg: {
        default: "#E03E1A",
        "default-interactive": "#E03E1A",
        "default-interactive-hover": "#C4381C",
        "default-interactive-pressed": "#963323",
        disabled: "#757575"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#2c2c2c"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#2c2c2c"
      },
      border: {
        "default-interactive": "#A55440"
      }
    },
    warning: {
      bg: {
        default: "#F3C11B"
      },
      text: {
        default: "#000000"
      },
      icon: {
        default: "#000000"
      },
      border: {}
    },
    success: {
      bg: {
        default: "#198F51",
        "default-interactive": "#198F51",
        "default-interactive-hover": "#078348",
        "default-interactive-pressed": "#0A5C35",
        disabled: "#757575"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#2c2c2c"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        disabled: "#2c2c2c"
      },
      border: {
        "default-interactive": "#078348"
      }
    },
    system: {
      bg: {
        scrollbar: "#686868",
        resizer: "#A3A3A3"
      },
      border: {
        focus: "#0C8CE9"
      }
    },
    shadow: {
      "popover-hard": "#0000008a",
      "popover-soft": "#00000052",
      "popover-glare": "#ffffff0a",
      "tooltip-hard": "#0000008a",
      "tooltip-soft": "#00000052",
      "tooltip-glare": "#ffffff0a",
      "menu-hard": "#0000008a",
      "menu-soft": "#00000052",
      "menu-glare": "#ffffff0a"
    }
  }
}, u5 = {
  class: ":root",
  prefix: "--pui-spacing",
  variables: {
    100: "4px",
    200: "8px",
    400: "16px",
    600: "24px",
    800: "32px",
    1e3: "40px"
  }
}, d5 = {
  class: ":root",
  prefix: "--pui-radius",
  variables: {
    small: "2px",
    medium: "5px",
    large: "13px",
    full: "100%"
  }
};
var Qe = 0;
function r(e, t, n, i, o, l) {
  t || (t = {});
  var s, u, d = t;
  if ("ref" in d) for (u in d = {}, t) u == "ref" ? s = t[u] : d[u] = t[u];
  var a = { type: e, props: d, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Qe, __i: -1, __u: 0, __source: o, __self: l };
  if (typeof e == "function" && (s = e.defaultProps)) for (u in s) d[u] === void 0 && (d[u] = s[u]);
  return le.vnode && le.vnode(a), a;
}
const W = (e, t, n = {}, i = []) => {
  const o = t ? `${e}__${t}` : e, l = [o];
  for (const [s, u] of Object.entries(n))
    typeof u == "string" ? l.push(`${o}_${s}-${u}`) : u === !0 && l.push(`${o}_${s}`);
  return l.concat(i).join(" ");
}, S1 = (e, t, n) => Math.min(Math.max(e, t), n), P1 = (e) => {
  const t = S1(Math.round(e), 0, 255).toString(16);
  return t.length === 1 ? "0" + t : t;
}, Xe = (e) => {
  const t = e.startsWith("#") ? e.slice(1) : e;
  return /^[0-9a-fA-F]{6}$/.test(t) ? t.toUpperCase() : null;
}, v1 = (e) => `#${P1(e.r)}${P1(e.g)}${P1(
  e.b
)}`, ee = (e, t = 1) => {
  const n = Xe(e);
  if (!n) return null;
  const i = parseInt(n.slice(0, 2), 16), o = parseInt(n.slice(2, 4), 16), l = parseInt(n.slice(4, 6), 16);
  return { r: i, g: o, b: l, a: t };
}, et = (e) => {
  const t = v1(e), i = S1(Math.round(e.a * 255), 0, 255).toString(16).padStart(2, "0").toUpperCase();
  return `${t}${i}`;
}, tt = (e) => {
  const t = e.startsWith("#") ? e.slice(1) : e;
  if (/^[0-9a-fA-F]{8}$/.test(t)) {
    const n = parseInt(t.slice(0, 2), 16), i = parseInt(t.slice(2, 4), 16), o = parseInt(t.slice(4, 6), 16), l = parseInt(t.slice(6, 8), 16) / 255;
    return { r: n, g: i, b: o, a: l };
  }
  if (/^[0-9a-fA-F]{6}$/.test(t)) {
    const n = parseInt(t.slice(0, 2), 16), i = parseInt(t.slice(2, 4), 16), o = parseInt(t.slice(4, 6), 16);
    return { r: n, g: i, b: o, a: 1 };
  }
  return null;
}, T1 = (e) => Math.round(e * 100) / 100, Z1 = (e, t) => {
  if (Array.isArray(e))
    return e.map((n) => Z1(n, t));
  if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
    const n = e, i = n.props || {}, o = { ...t };
    return me(n, o, i.children);
  }
  return e;
};
function Y(e) {
  return qe(e);
}
const nt = ({
  className: e,
  size: t = "medium",
  shape: n = "circle",
  imageSrc: i,
  fillBg: o,
  fillText: l,
  children: s,
  ...u
}, d) => {
  const a = W("Avatar", void 0, {
    size: t,
    shape: n,
    image: !!i
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [a, e].join(" ").trim(),
      ref: d,
      ...u,
      style: {
        backgroundColor: o
      },
      children: [
        i && /* @__PURE__ */ r("img", { className: "Avatar__image", src: i, alt: "Avatar" }),
        s && /* @__PURE__ */ r(
          d1,
          {
            variant: "body",
            size: t === "small" ? "small" : "large",
            strong: !0,
            intent: "neutral-inverted",
            intentModifiers: "default",
            fill: l,
            children: /* @__PURE__ */ r("div", { className: "Avatar__children", children: s })
          }
        )
      ]
    }
  );
}, f5 = Y(
  nt
), rt = ({
  className: e,
  intent: t = "neutral",
  intentModifiers: n = "default",
  prefix: i,
  suffix: o,
  children: l,
  ...s
}, u) => {
  const d = W("Badge", void 0, {
    intent: `${t}-${n}`,
    prefix: !!i,
    suffix: !!o
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [d, e].join(" ").trim(),
      ref: u,
      ...s,
      children: /* @__PURE__ */ r("div", { className: "Badge__content", children: [
        i && /* @__PURE__ */ r("div", { className: "Badge__prefix", children: i }),
        l && /* @__PURE__ */ r("div", { className: "Badge__children", children: /* @__PURE__ */ r(
          d1,
          {
            variant: "body",
            size: "medium",
            intent: t,
            intentModifiers: n,
            children: l
          }
        ) }),
        o && /* @__PURE__ */ r("div", { className: "Badge__suffix", children: o })
      ] })
    }
  );
}, C5 = Y(rt), ot = ({
  className: e,
  borderTop: t = !1,
  borderBottom: n = !1,
  children: i,
  ...o
}, l) => {
  const s = W("Bar", void 0, {
    borderTop: t,
    borderBottom: n
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [s, e].join(" ").trim(),
      ref: l,
      ...o,
      children: i
    }
  );
}, h5 = Y(ot), it = ({
  className: e,
  intent: t = "neutral",
  intentModifiers: n = "default",
  ghost: i = !1,
  size: o = "medium",
  grouped: l = "none",
  disabled: s = !1,
  fullWidth: u = !1,
  prefix: d,
  suffix: a,
  children: c,
  onClick: g,
  ...M
}, _) => {
  const L = W("Button", void 0, {
    intent: `${t}-${n}`,
    ghost: !!i,
    size: o,
    grouped: !!l,
    groupedPosition: l,
    disabled: s,
    fullWidth: u,
    prefix: !!d,
    suffix: !!a
  }), m = (h) => {
    if (s) {
      h.preventDefault();
      return;
    }
    h.stopPropagation(), g == null || g({ event: h });
  };
  return /* @__PURE__ */ r(
    "button",
    {
      className: [L, e, "no-drag"].join(" ").trim(),
      ref: _,
      ...M,
      disabled: s,
      onClick: m,
      children: /* @__PURE__ */ r("div", { className: "Button__content", children: [
        d && /* @__PURE__ */ r("div", { className: "Button__prefix", children: d }),
        c && /* @__PURE__ */ r("div", { className: "Button__children", children: /* @__PURE__ */ r(
          d1,
          {
            variant: "body",
            size: "medium",
            intent: t,
            intentModifiers: n,
            disabled: s,
            children: c
          }
        ) }),
        a && /* @__PURE__ */ r("div", { className: "Button__suffix", children: a })
      ] })
    }
  );
}, m5 = Y(
  it
), at = ({
  className: e,
  intent: t = "neutral",
  intentModifiers: n = "default",
  ghost: i = !1,
  size: o = "medium",
  grouped: l = "none",
  translucent: s = !1,
  disabled: u = !1,
  children: d,
  onClick: a,
  ...c
}, g) => {
  const M = W("ButtonIcon", void 0, {
    intent: `${t}-${n}`,
    ghost: i,
    size: o,
    grouped: !!l,
    groupedPosition: l,
    translucent: s,
    disabled: u
  }), _ = (L) => {
    if (u) {
      L.preventDefault();
      return;
    }
    L.stopPropagation(), a == null || a({ event: L });
  };
  return /* @__PURE__ */ r(
    "button",
    {
      className: [M, e, "no-drag"].join(" ").trim(),
      ref: g,
      ...c,
      disabled: u,
      onClick: _,
      children: d && /* @__PURE__ */ r("div", { className: "ButtonIcon__children", children: d })
    }
  );
}, lt = Y(
  at
), st = ({
  className: e,
  intent: t = "neutral",
  intentModifiers: n = "default",
  ghost: i = !1,
  disabled: o = !1,
  children: l,
  defaultSelected: s = !1,
  selected: u,
  onChange: d,
  ...a
}, c) => {
  const [g, M] = z(s), _ = u !== void 0 ? u : g, L = (m) => {
    if (!o) {
      const h = !_;
      u === void 0 && M(h), m.event.stopPropagation(), d == null || d({ event: m.event, selected: h });
    }
  };
  return j(() => {
    u !== void 0 && M(u);
  }, [u]), /* @__PURE__ */ r(
    lt,
    {
      className: [_ ? "ButtonIcon_selected" : "", e, "no-drag"].join(" ").trim(),
      ref: c,
      intent: t,
      intentModifiers: n,
      ghost: i,
      disabled: o,
      ...a,
      onClick: L,
      children: Pe(l).map((m) => {
        if (typeof m == "object" && m !== null) {
          const h = m;
          if (h.type === g1)
            return me(h, {
              ...h.props,
              selected: _,
              interactive: !0
            });
        }
        return m;
      })
    }
  );
}, v5 = Y(st), ct = ({
  className: e,
  intent: t = "neutral",
  intentModifiers: n = "default",
  checked: i,
  defaultChecked: o = !1,
  mixed: l = !1,
  disabled: s = !1,
  label: u,
  onChange: d,
  ...a
}, c) => {
  const g = i !== void 0, [M, _] = z(
    g ? !!i : !!o
  );
  j(() => {
    g && _(!!i);
  }, [g, i]);
  const L = W("Checkbox", void 0, {
    intent: `${t}-${n}`,
    checked: M,
    mixed: l,
    disabled: s,
    label: !!u
  }), m = (C) => {
    if (s) {
      C.preventDefault();
      return;
    }
    C.stopPropagation();
    const v = !M;
    g || _(v), d == null || d({ event: C, checked: v });
  }, h = (C) => {
    var x;
    if (s) {
      (x = C.preventDefault) == null || x.call(C);
      return;
    }
    const v = C.currentTarget.checked;
    g || _(v), d == null || d({
      event: C,
      checked: v
    });
  }, f = (C) => {
    C.stopPropagation();
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [L, e, "no-drag"].join(" ").trim(),
      ...a,
      children: [
        /* @__PURE__ */ r("div", { className: "Checkbox__input", children: [
          /* @__PURE__ */ r(
            "input",
            {
              className: "Checkbox__input-native",
              type: "checkbox",
              ref: c,
              checked: M,
              disabled: s,
              onClick: f,
              onChange: h
            }
          ),
          M && !l && /* @__PURE__ */ r("div", { className: "Checkbox__icon", children: /* @__PURE__ */ r(
            g1,
            {
              glyph: $e,
              intent: t,
              intentModifiers: n,
              interactive: !0,
              size: 16
            }
          ) }),
          M && l && /* @__PURE__ */ r("div", { className: "Checkbox__icon", children: /* @__PURE__ */ r(
            g1,
            {
              glyph: o5,
              intent: t,
              intentModifiers: n,
              interactive: !0,
              size: 16
            }
          ) })
        ] }),
        u && /* @__PURE__ */ r("div", { className: "Checkbox__label", onClick: m, children: /* @__PURE__ */ r(d1, { disabled: s, children: u }) })
      ]
    }
  );
}, p5 = Y(
  ct
);
function M1() {
  return (M1 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }).apply(this, arguments);
}
function te(e, t) {
  if (e == null) return {};
  var n, i, o = {}, l = Object.keys(e);
  for (i = 0; i < l.length; i++) t.indexOf(n = l[i]) >= 0 || (o[n] = e[n]);
  return o;
}
function W1(e) {
  var t = w1(e), n = w1(function(i) {
    t.current && t.current(i);
  });
  return t.current = e, n.current;
}
var E1 = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, I1 = function(e) {
  return "touches" in e;
}, K1 = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, se = function(e, t, n) {
  var i = e.getBoundingClientRect(), o = I1(t) ? function(l, s) {
    for (var u = 0; u < l.length; u++) if (l[u].identifier === s) return l[u];
    return l[0];
  }(t.touches, n) : t;
  return { left: E1((o.pageX - (i.left + K1(e).pageXOffset)) / i.width), top: E1((o.pageY - (i.top + K1(e).pageYOffset)) / i.height) };
}, ce = function(e) {
  !I1(e) && e.preventDefault();
}, ne = t1.memo(function(e) {
  var t = e.onMove, n = e.onKey, i = te(e, ["onMove", "onKey"]), o = w1(null), l = W1(t), s = W1(n), u = w1(null), d = w1(!1), a = Ye(function() {
    var _ = function(h) {
      ce(h), (I1(h) ? h.touches.length > 0 : h.buttons > 0) && o.current ? l(se(o.current, h, u.current)) : m(!1);
    }, L = function() {
      return m(!1);
    };
    function m(h) {
      var f = d.current, C = K1(o.current), v = h ? C.addEventListener : C.removeEventListener;
      v(f ? "touchmove" : "mousemove", _), v(f ? "touchend" : "mouseup", L);
    }
    return [function(h) {
      var f = h.nativeEvent, C = o.current;
      if (C && (ce(f), !function(x, V) {
        return V && !I1(x);
      }(f, d.current) && C)) {
        if (I1(f)) {
          d.current = !0;
          var v = f.changedTouches || [];
          v.length && (u.current = v[0].identifier);
        }
        C.focus(), l(se(C, f, u.current)), m(!0);
      }
    }, function(h) {
      var f = h.which || h.keyCode;
      f < 37 || f > 40 || (h.preventDefault(), s({ left: f === 39 ? 0.05 : f === 37 ? -0.05 : 0, top: f === 40 ? 0.05 : f === 38 ? -0.05 : 0 }));
    }, m];
  }, [s, l]), c = a[0], g = a[1], M = a[2];
  return O1(function() {
    return M;
  }, [M]), t1.createElement("div", M1({}, i, { onTouchStart: c, onMouseDown: c, className: "react-colorful__interactive", ref: o, onKeyDown: g, tabIndex: 0, role: "slider" }));
}), $1 = function(e) {
  return e.filter(Boolean).join(" ");
}, re = function(e) {
  var t = e.color, n = e.left, i = e.top, o = i === void 0 ? 0.5 : i, l = $1(["react-colorful__pointer", e.className]);
  return t1.createElement("div", { className: l, style: { top: 100 * o + "%", left: 100 * n + "%" } }, t1.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, o1 = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, ve = function(e) {
  return be(Y1(e));
}, Y1 = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? o1(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? o1(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, pe = function(e) {
  return ut(ge(e));
}, we = function(e) {
  var t = e.s, n = e.v, i = e.a, o = (200 - t) * n / 100;
  return { h: o1(e.h), s: o1(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: o1(o / 2), a: o1(i, 2) };
}, G1 = function(e) {
  var t = we(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, q1 = function(e) {
  var t = we(e);
  return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
}, ge = function(e) {
  var t = e.h, n = e.s, i = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, i /= 100;
  var l = Math.floor(t), s = i * (1 - n), u = i * (1 - (t - l) * n), d = i * (1 - (1 - t + l) * n), a = l % 6;
  return { r: o1(255 * [i, u, s, s, d, i][a]), g: o1(255 * [d, i, i, u, s, s][a]), b: o1(255 * [s, s, d, i, i, u][a]), a: o1(o, 2) };
}, R1 = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, ut = function(e) {
  var t = e.r, n = e.g, i = e.b, o = e.a, l = o < 1 ? R1(o1(255 * o)) : "";
  return "#" + R1(t) + R1(n) + R1(i) + l;
}, be = function(e) {
  var t = e.r, n = e.g, i = e.b, o = e.a, l = Math.max(t, n, i), s = l - Math.min(t, n, i), u = s ? l === t ? (n - i) / s : l === n ? 2 + (i - t) / s : 4 + (t - n) / s : 0;
  return { h: o1(60 * (u < 0 ? u + 6 : u)), s: o1(l ? s / l * 100 : 0), v: o1(l / 255 * 100), a: o };
}, Le = t1.memo(function(e) {
  var t = e.hue, n = e.onChange, i = $1(["react-colorful__hue", e.className]);
  return t1.createElement("div", { className: i }, t1.createElement(ne, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: E1(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": o1(t), "aria-valuemax": "360", "aria-valuemin": "0" }, t1.createElement(re, { className: "react-colorful__hue-pointer", left: t / 360, color: G1({ h: t, s: 100, v: 100, a: 1 }) })));
}), _e = t1.memo(function(e) {
  var t = e.hsva, n = e.onChange, i = { backgroundColor: G1({ h: t.h, s: 100, v: 100, a: 1 }) };
  return t1.createElement("div", { className: "react-colorful__saturation", style: i }, t1.createElement(ne, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: E1(t.s + 100 * o.left, 0, 100), v: E1(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + o1(t.s) + "%, Brightness " + o1(t.v) + "%" }, t1.createElement(re, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: G1(t) })));
}), oe = function(e, t) {
  if (e === t) return !0;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}, Me = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || oe(Y1(e), Y1(t));
};
function xe(e, t, n) {
  var i = W1(n), o = We(function() {
    return e.toHsva(t);
  }), l = o[0], s = o[1], u = w1({ color: t, hsva: l });
  O1(function() {
    if (!e.equal(t, u.current.color)) {
      var a = e.toHsva(t);
      u.current = { hsva: a, color: t }, s(a);
    }
  }, [t, e]), O1(function() {
    var a;
    oe(l, u.current.hsva) || e.equal(a = e.fromHsva(l), u.current.color) || (u.current = { hsva: l, color: a }, i(a));
  }, [l, e, i]);
  var d = Ke(function(a) {
    s(function(c) {
      return Object.assign({}, c, a);
    });
  }, []);
  return [l, d];
}
var dt = typeof window < "u" ? ze : O1, ft = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, ue = /* @__PURE__ */ new Map(), He = function(e) {
  dt(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !ue.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, ue.set(t, n);
      var i = ft();
      i && n.setAttribute("nonce", i), t.head.appendChild(n);
    }
  }, []);
}, Ct = function(e) {
  var t = e.className, n = e.colorModel, i = e.color, o = i === void 0 ? n.defaultColor : i, l = e.onChange, s = te(e, ["className", "colorModel", "color", "onChange"]), u = w1(null);
  He(u);
  var d = xe(n, o, l), a = d[0], c = d[1], g = $1(["react-colorful", t]);
  return t1.createElement("div", M1({}, s, { ref: u, className: g }), t1.createElement(_e, { hsva: a, onChange: c }), t1.createElement(Le, { hue: a.h, onChange: c, className: "react-colorful__last-control" }));
}, ht = { defaultColor: "000", toHsva: ve, fromHsva: function(e) {
  return pe({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: Me }, mt = function(e) {
  return t1.createElement(Ct, M1({}, e, { colorModel: ht }));
}, vt = function(e) {
  var t = e.className, n = e.hsva, i = e.onChange, o = { backgroundImage: "linear-gradient(90deg, " + q1(Object.assign({}, n, { a: 0 })) + ", " + q1(Object.assign({}, n, { a: 1 })) + ")" }, l = $1(["react-colorful__alpha", t]), s = o1(100 * n.a);
  return t1.createElement("div", { className: l }, t1.createElement("div", { className: "react-colorful__alpha-gradient", style: o }), t1.createElement(ne, { onMove: function(u) {
    i({ a: u.left });
  }, onKey: function(u) {
    i({ a: E1(n.a + u.left) });
  }, "aria-label": "Alpha", "aria-valuetext": s + "%", "aria-valuenow": s, "aria-valuemin": "0", "aria-valuemax": "100" }, t1.createElement(re, { className: "react-colorful__alpha-pointer", left: n.a, color: q1(n) })));
}, Ve = function(e) {
  var t = e.className, n = e.colorModel, i = e.color, o = i === void 0 ? n.defaultColor : i, l = e.onChange, s = te(e, ["className", "colorModel", "color", "onChange"]), u = w1(null);
  He(u);
  var d = xe(n, o, l), a = d[0], c = d[1], g = $1(["react-colorful", t]);
  return t1.createElement("div", M1({}, s, { ref: u, className: g }), t1.createElement(_e, { hsva: a, onChange: c }), t1.createElement(Le, { hue: a.h, onChange: c }), t1.createElement(vt, { hsva: a, onChange: c, className: "react-colorful__last-control" }));
}, pt = { defaultColor: "0001", toHsva: ve, fromHsva: pe, equal: Me }, wt = function(e) {
  return t1.createElement(Ve, M1({}, e, { colorModel: pt }));
}, gt = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: be, fromHsva: ge, equal: oe }, bt = function(e) {
  return t1.createElement(Ve, M1({}, e, { colorModel: gt }));
};
const e1 = {
  r: {
    min: 0,
    max: 255
  },
  g: {
    min: 0,
    max: 255
  },
  b: {
    min: 0,
    max: 255
  },
  a: {
    min: 0,
    max: 1
  }
}, V1 = {
  a: {
    min: 0,
    max: 1
  }
}, Lt = [
  { value: "rgba", label: "RGB" },
  { value: "hex", label: "Hex" },
  { value: "hexAlpha", label: "Hex alpha" }
], _t = ({
  color: e,
  setColor: t,
  type: n,
  setType: i,
  options: o
}) => {
  const [l, s] = z(e);
  j(() => {
    s(e);
  }, [e]);
  const { getErrorCode: u } = J1({
    required: !0,
    min: e1.r.min,
    max: e1.r.max
  }), { getErrorCode: d } = J1({
    required: !0,
    min: e1.a.min,
    max: e1.a.max
  });
  return /* @__PURE__ */ r(B1, { children: [
    /* @__PURE__ */ r("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ r(
      ae,
      {
        options: o,
        value: n,
        onChange: (a) => i(a.value),
        menuWidth: 160
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "ColorPicker__controlsValues InputGrouped", children: [
      /* @__PURE__ */ r(
        _1,
        {
          className: "ColorPicker__inputCompact",
          type: "number",
          grouped: "right",
          value: l.r.toString(),
          onChange: (a) => {
            const c = Number(a.value);
            Number.isFinite(c) && s({ ...l, r: c });
          },
          onBlur: (a) => {
            const c = Math.round(Number(a.value));
            u(c) === "required" && (t({ ...e, r: e1.r.min }), s({ ...l, r: e1.r.min })), u(c) === "less_than_min" && (t({ ...e, r: e1.r.min }), s({ ...l, r: e1.r.min })), u(c) === "greater_than_max" && (t({ ...e, r: e1.r.max }), s({ ...l, r: e1.r.max })), u(c) === null && (t({ ...e, r: c }), s({ ...l, r: c }));
          }
        }
      ),
      /* @__PURE__ */ r(
        _1,
        {
          className: "ColorPicker__inputCompact",
          type: "number",
          grouped: "both",
          value: l.g.toString(),
          onChange: (a) => {
            const c = Number(a.value);
            Number.isFinite(c) && s({ ...l, g: c });
          },
          onBlur: (a) => {
            const c = Math.round(Number(a.value));
            u(c) === "required" && (t({ ...e, g: e1.g.min }), s({ ...l, g: e1.g.min })), u(c) === "less_than_min" && (t({ ...e, g: e1.g.min }), s({ ...l, g: e1.g.min })), u(c) === "greater_than_max" && (t({ ...e, g: e1.g.max }), s({ ...l, g: e1.g.max })), u(c) === null && (t({ ...e, g: c }), s({ ...l, g: c }));
          }
        }
      ),
      /* @__PURE__ */ r(
        _1,
        {
          className: "ColorPicker__inputCompact",
          type: "number",
          grouped: "both",
          value: l.b.toString(),
          onChange: (a) => {
            const c = Number(a.value);
            Number.isFinite(c) && s({ ...l, b: c });
          },
          onBlur: (a) => {
            const c = Math.round(Number(a.value));
            u(c) === "required" && (t({ ...e, b: e1.b.min }), s({ ...l, b: e1.b.min })), u(c) === "less_than_min" && (t({ ...e, b: e1.b.min }), s({ ...l, b: e1.b.min })), u(c) === "greater_than_max" && (t({ ...e, b: e1.b.max }), s({ ...l, b: e1.b.max })), u(c) === null && (t({ ...e, b: c }), s({ ...l, b: c }));
          }
        }
      ),
      /* @__PURE__ */ r(
        _1,
        {
          className: "ColorPicker__controlOpacity",
          type: "number",
          grouped: "left",
          value: Math.round(l.a * 100).toString(),
          suffix: /* @__PURE__ */ r(d1, { intentModifiers: "secondary", children: /* @__PURE__ */ r("div", { className: "ColorPicker__controlOpacityContainer", children: "%" }) }),
          onChange: (a) => {
            const c = Number(a.value);
            if (Number.isFinite(c)) {
              const g = Math.round(c);
              s({ ...l, a: T1(g / 100) });
            }
          },
          onBlur: (a) => {
            const c = T1(Math.round(Number(a.value)) / 100);
            d(c) === "required" && (t({ ...e, a: e.a }), s({ ...l, a: e.a })), d(c) === "less_than_min" && (t({ ...e, a: e1.a.min }), s({ ...l, a: e1.a.min })), d(c) === "greater_than_max" && (t({ ...e, a: e1.a.max }), s({ ...l, a: e1.a.max })), d(c) === null && (t({ ...e, a: c }), s({ ...l, a: c }));
          }
        }
      )
    ] })
  ] });
}, Mt = ({
  color: e,
  setColor: t,
  type: n,
  setType: i,
  options: o
}) => {
  const [l, s] = z(v1(e).slice(1));
  j(() => {
    s(v1(e).slice(1));
  }, [e]);
  const { getErrorCode: u } = Te({
    required: !0,
    minLength: 6,
    maxLength: 6,
    pattern: /^[0-9a-fA-F]{6}$/,
    trim: !0
  });
  return /* @__PURE__ */ r(B1, { children: [
    /* @__PURE__ */ r("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ r(
      ae,
      {
        options: o,
        value: n,
        onChange: (d) => i(d.value),
        menuWidth: 160
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ r(
      _1,
      {
        value: l.toUpperCase(),
        onChange: (d) => {
          const a = d.value.replace(/^#/, "");
          s(a);
        },
        onBlur: (d) => {
          const a = d.value.replace(/^#/, "").trim();
          if (u(a) === null) {
            const g = ee(a, e.a);
            g && t({ ...e, ...g }), s(a);
          } else
            s(v1(e).slice(1));
        }
      }
    ) })
  ] });
}, xt = ({
  color: e,
  setColor: t,
  type: n,
  setType: i,
  options: o
}) => {
  const [l, s] = z(v1(e).slice(1));
  j(() => {
    s(v1(e).slice(1));
  }, [e]);
  const { getErrorCode: u } = Te({
    required: !0,
    minLength: 6,
    maxLength: 6,
    pattern: /^[0-9a-fA-F]{6}$/,
    trim: !0
  }), { getErrorCode: d } = J1({
    required: !0,
    min: V1.a.min,
    max: V1.a.max
  });
  return /* @__PURE__ */ r(B1, { children: [
    /* @__PURE__ */ r("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ r(
      ae,
      {
        options: o,
        value: n,
        onChange: (a) => i(a.value),
        menuWidth: 160
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "ColorPicker__controlsValues InputGrouped", children: [
      /* @__PURE__ */ r(
        _1,
        {
          grouped: "right",
          value: l.toUpperCase(),
          onChange: (a) => {
            const c = a.value.replace(/^#/, "");
            s(c);
          },
          onBlur: (a) => {
            const c = a.value.replace(/^#/, "").trim();
            if (u(c) === null) {
              const M = ee(c, e.a);
              M && t({ ...e, ...M }), s(c);
            } else
              s(v1(e).slice(1));
          }
        }
      ),
      /* @__PURE__ */ r(
        _1,
        {
          className: "ColorPicker__controlOpacity",
          grouped: "left",
          type: "number",
          value: Math.round(e.a * 100).toString(),
          suffix: /* @__PURE__ */ r(d1, { intentModifiers: "secondary", children: /* @__PURE__ */ r("div", { className: "ColorPicker__controlOpacityContainer", children: "%" }) }),
          onChange: (a) => {
            const c = Number(a.value);
            if (Number.isFinite(c)) {
              const g = T1(
                S1(c / 100, V1.a.min, V1.a.max)
              );
              t({ ...e, a: g });
            }
          },
          onBlur: (a) => {
            const c = T1(Number(a.value) / 100), g = d(c);
            g === "required" && t({ ...e, a: e.a }), g === "less_than_min" && t({ ...e, a: V1.a.min }), g === "greater_than_max" && t({ ...e, a: V1.a.max }), g === null && t({ ...e, a: c });
          }
        }
      )
    ] })
  ] });
}, Ht = ({
  className: e,
  defaultType: t = "hex",
  types: n,
  value: i,
  controls: o = !0,
  width: l = 207,
  onChange: s,
  ...u
}, d) => {
  const a = i !== void 0, [c, g] = z(
    i ?? { r: 200, g: 150, b: 35, a: 0.5 }
  ), M = y1(
    () => n && n.length ? n : ["hex", "hexAlpha", "rgba"],
    [n]
  ), [_, L] = z(
    () => M.includes(t) ? t : M[0]
  );
  j(() => {
    a && i && g({ r: i.r, g: i.g, b: i.b, a: i.a });
  }, [a, i]);
  const m = y1(
    () => M && M.length ? M.join("|") : "",
    [M]
  );
  j(() => {
    const $ = M.includes(
      t
    ) ? t : M[0];
    L($);
  }, [t, m, M]);
  const h = a && i ? i : c, f = _, C = K(null), v = K(null), x = ($, E) => $.r === E.r && $.g === E.g && $.b === E.b && $.a === E.a, V = () => {
    const $ = C.current;
    if (C.current = null, v.current = null, !$) return;
    const E = {
      ...$,
      a: T1(S1($.a, 0, 1))
    };
    a || x(E, c) || g(E), s == null || s({
      rgba: E,
      hex: v1(E),
      opacity: E.a
    });
  }, I = ($) => {
    C.current = $, v.current == null && (v.current = window.requestAnimationFrame(V));
  };
  j(() => () => {
    v.current != null && (cancelAnimationFrame(v.current), v.current = null), C.current = null;
  }, []);
  const T = W("ColorPicker", void 0, {
    type: f,
    controls: o
  }), y = Lt.filter(
    ($) => M.includes($.value)
  ), n1 = !M.includes("hex") && M.includes("hexAlpha") ? y.map(
    ($) => $.value === "hexAlpha" ? { ...$, label: "Hex" } : $
  ) : y;
  return /* @__PURE__ */ r(
    "div",
    {
      className: [T, e, "no-drag"].join(" ").trim(),
      ref: d,
      ...u,
      style: {
        width: l === "auto" ? void 0 : l
      },
      children: [
        f === "hex" && /* @__PURE__ */ r(
          mt,
          {
            color: v1(h),
            onChange: ($) => {
              const E = ee($, h.a);
              E && I(E);
            }
          }
        ),
        f === "hexAlpha" && /* @__PURE__ */ r(
          wt,
          {
            color: et(h),
            onChange: ($) => {
              const E = tt($);
              E && I(E);
            }
          }
        ),
        f === "rgba" && /* @__PURE__ */ r(
          bt,
          {
            color: h,
            onChange: ($) => {
              I($);
            }
          }
        ),
        o && /* @__PURE__ */ r("div", { className: "ColorPicker__controls", children: [
          f === "hex" && /* @__PURE__ */ r(
            Mt,
            {
              color: h,
              setColor: I,
              type: f,
              setType: L,
              options: n1
            }
          ),
          f === "hexAlpha" && /* @__PURE__ */ r(
            xt,
            {
              color: h,
              setColor: I,
              type: f,
              setType: L,
              options: n1
            }
          ),
          f === "rgba" && /* @__PURE__ */ r(
            _t,
            {
              color: h,
              setColor: I,
              type: f,
              setType: L,
              options: n1
            }
          )
        ] })
      ]
    }
  );
}, w5 = Y(
  Ht
), de = (e) => {
  if (!e) return !1;
  const t = e.slice(-2), n = t === "FF" || t === "ff";
  return e.length === 9 && !n;
}, Vt = ({
  className: e,
  size: t = "medium",
  hex: n,
  imageSrc: i,
  title: o,
  selection: l = "default",
  hoverable: s = !1,
  selected: u = !1,
  children: d,
  onClick: a,
  ...c
}, g) => {
  const M = K(null), _ = W("ColorSwatch", void 0, {
    selection: l,
    hasImage: !!i,
    hasHex: !!n,
    size: t,
    hoverable: s,
    selected: u
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [_, e, "no-drag"].join(" ").trim(),
      ref: (L) => {
        typeof g == "function" ? g(L) : g && (g.current = L), M.current = L;
      },
      ...c,
      onClick: (L) => a == null ? void 0 : a({ event: L, hex: n, imageSrc: i }),
      children: [
        /* @__PURE__ */ r("div", { className: "ColorSwatch__container", children: [
          n && de(n) && /* @__PURE__ */ r(B1, { children: [
            /* @__PURE__ */ r(
              "div",
              {
                className: "ColorSwatch__fill",
                style: { backgroundColor: n == null ? void 0 : n.substring(0, n.length - 2) }
              }
            ),
            /* @__PURE__ */ r(
              "div",
              {
                className: "ColorSwatch__fill",
                style: { backgroundColor: n }
              }
            )
          ] }),
          n && !de(n) && /* @__PURE__ */ r("div", { className: "ColorSwatch__fill", style: { backgroundColor: n } }),
          i && /* @__PURE__ */ r(
            "div",
            {
              className: "ColorSwatch__image",
              style: {
                backgroundImage: `url(${i})`
              }
            }
          )
        ] }),
        d && /* @__PURE__ */ r("div", { className: "ColorSwatch__children", children: d }),
        o && /* @__PURE__ */ r(
          ie,
          {
            anchorRef: M,
            placement: "bottom",
            trigger: "hover",
            paddingY: 8,
            visibilityDelay: 1e3,
            arrow: !0,
            children: /* @__PURE__ */ r(Ie, { children: /* @__PURE__ */ r(d1, { intent: "neutral-inverted-fixed", children: o }) })
          }
        )
      ]
    }
  );
}, g5 = Y(
  Vt
), Zt = ({ className: e, variant: t = "full", ...n }, i) => {
  const o = W("Divider", void 0, {
    variant: t
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [o, e].join(" ").trim(),
      ref: i,
      ...n,
      children: /* @__PURE__ */ r("div", { className: "Divider__line" })
    }
  );
}, b5 = Y(
  Zt
), yt = ({
  className: e,
  glyph: t,
  intent: n = "neutral",
  intentModifiers: i = "default",
  disabled: o = !1,
  interactive: l = !1,
  selected: s = !1,
  fill: u,
  variant: d = "default",
  size: a = 24,
  children: c,
  ...g
}, M) => {
  const _ = W("Icon", void 0, {
    // derived styles are driven by intent/variant/size; glyph is a render fn
    ...!u && {
      intent: `${n}-${i}`,
      disabled: o,
      interactive: l,
      selected: s
    },
    fill: u,
    variant: d,
    size: a.toString()
  });
  let L;
  if (c)
    L = c;
  else if (t)
    L = t({ variant: d, size: a });
  else
    throw new Error("Icon component error: No valid glyph or children provided");
  return /* @__PURE__ */ r(
    "div",
    {
      className: [_, e].join(" ").trim(),
      ref: M,
      ...g,
      style: {
        ...u && { color: u }
      },
      children: L
    }
  );
}, g1 = Y(yt), Et = ({
  className: e,
  placeholder: t,
  type: n = "text",
  value: i,
  defaultValue: o,
  ghost: l = !1,
  grouped: s = "none",
  error: u = !1,
  disabled: d = !1,
  prefix: a,
  suffix: c,
  suffixOnHover: g = !1,
  focusOnDoubleClick: M = !1,
  onChange: _,
  onBlur: L,
  onFocus: m,
  onKeyDown: h,
  ...f
}, C) => {
  const [v, x] = z(!1), [V, I] = z(
    !!(i ?? o ?? "")
  ), T = K(null);
  j(() => {
    i !== void 0 && I(i.length > 0);
  }, [i]);
  const y = W("Input", void 0, {
    filled: V,
    disabled: d,
    ghost: l,
    grouped: !!s,
    groupedPosition: s,
    prefix: !!a,
    suffix: !!c,
    suffixOnHover: !!g,
    focused: v,
    error: u
  }), n1 = (w) => {
    w.stopPropagation(), I(w.currentTarget.value.length > 0), _ == null || _({
      event: w,
      value: w.currentTarget.value
    });
  }, $ = (w) => {
    w.stopPropagation(), x(!1), I(w.currentTarget.value.length > 0), L == null || L({
      event: w,
      value: w.currentTarget.value
    });
  }, E = (w) => {
    w.stopPropagation(), x(!0), m == null || m({
      event: w,
      value: w.currentTarget.value
    });
  }, q = (w) => {
    w.stopPropagation(), h == null || h({
      event: w,
      value: w.currentTarget.value
    });
  }, b = (w) => {
    M || w.stopPropagation();
  }, p = () => {
    var w;
    M && ((w = T.current) == null || w.focus());
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [y, e, "no-drag"].join(" ").trim(),
      ...f,
      children: [
        a && /* @__PURE__ */ r("div", { className: "Input__prefix", children: a }),
        /* @__PURE__ */ r(
          "input",
          {
            className: "Input__input-native",
            ref: (w) => {
              T.current = w, typeof C == "function" ? C(w) : C && typeof C == "object" && (C.current = w);
            },
            type: n,
            disabled: d,
            placeholder: t,
            value: i !== void 0 ? i : void 0,
            defaultValue: i === void 0 ? o : void 0,
            onChange: n1,
            onBlur: $,
            onFocus: E,
            onKeyDown: q,
            onClick: b,
            onDblClick: p,
            onMouseDown: (w) => {
              M && w.preventDefault();
            }
          }
        ),
        c && /* @__PURE__ */ r("div", { className: "Input__suffix", children: c })
      ]
    }
  );
}, _1 = Y(
  Et
), Ze = Q1(void 0), ye = () => {
  const e = X1(Ze);
  if (!e) throw new Error("ListContext not found");
  return e;
}, L5 = ({
  items: e = [],
  selectedItems: t = [],
  selectionMode: n = "single",
  onItemsChange: i,
  onSelectionChange: o,
  children: l
}) => {
  const [s, u] = z(e), [d, a] = z(new Set(t)), c = K(/* @__PURE__ */ new Map()), g = K(/* @__PURE__ */ new Map()), M = i !== void 0, _ = o !== void 0, L = M ? e : s, m = y1(
    () => _ ? new Set(t) : d,
    [_, t, d]
  ), h = K(null), f = K(/* @__PURE__ */ new Set()), C = c1(
    (b, p) => {
      const w = new Set(m);
      b.forEach((B) => {
        p ? w.add(B) : w.delete(B);
      }), _ || a(w), o == null || o({ selectedItems: Array.from(w) });
    },
    [m, o, _]
  ), v = c1(
    (b) => {
      const p = new Set(b);
      _ || a(p), o == null || o({ selectedItems: Array.from(p) });
    },
    [_, o]
  ), x = c1(
    (b) => {
      const p = [], w = (B) => {
        B.forEach((S) => {
          p.push(S.id), S.children && S.children.length && w(S.children);
        });
      };
      return w(b), p;
    },
    []
  ), V = c1(
    (b, p) => {
      if (n === "none") return;
      const w = !!(p != null && p.additive), B = !!(p != null && p.range);
      if (n === "single") {
        const G = m.has(b), F = /* @__PURE__ */ new Set();
        G || F.add(b), _ || a(F), o == null || o({ selectedItems: Array.from(F) }), h.current = b;
        return;
      }
      if (B) {
        const G = x(L), F = h.current || b, H = G.indexOf(F), D = G.indexOf(b);
        if (H === -1 || D === -1) return;
        const [O, J] = H <= D ? [H, D] : [D, H], X = G.slice(O, J + 1), Q = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Map(), k = (A, R) => {
          A.forEach((r1) => {
            Z.set(r1.id, R), r1.children && k(r1.children, r1.id);
          });
        };
        k(L, null);
        const N = (A) => {
          let R = A;
          for (; R; ) {
            if (P.has(R)) return !0;
            R = Z.get(R) || null;
          }
          return !1;
        };
        X.forEach((A) => {
          const R = c.current.get(A);
          if ((R == null ? void 0 : R.selectable) === !1) {
            (R == null ? void 0 : R.selectionScope) === "withDescendants" && P.add(A);
            return;
          }
          N(A) || Q.add(A);
        }), _ || a(Q), o == null || o({ selectedItems: Array.from(Q) }), h.current = b;
        return;
      }
      if (w) {
        const G = new Set(m);
        G.has(b) ? G.delete(b) : G.add(b), _ || a(G), o == null || o({ selectedItems: Array.from(G) }), h.current = b;
        return;
      }
      const S = /* @__PURE__ */ new Set([b]);
      _ || a(S), o == null || o({ selectedItems: Array.from(S) }), h.current = b;
    },
    [
      n,
      m,
      _,
      o,
      L,
      x
    ]
  ), I = c1(
    (b, p, w) => {
      if (b.length === 0) return;
      const B = JSON.parse(JSON.stringify(L)), S = (() => {
        const Q = /* @__PURE__ */ new Map(), P = (Z, k) => {
          Z.forEach((N, A) => {
            const R = [...k, A];
            Q.set(N.id, R), N.children && N.children.length && P(N.children, R);
          });
        };
        return P(L, []), Q;
      })();
      if (w && w.length > 0)
        for (const Q of b) {
          const P = S.get(Q);
          if (P && w.length >= P.length && P.every((k, N) => w[N] === k))
            return;
        }
      const G = (Q, P) => {
        const Z = [];
        for (let k = Q.length - 1; k >= 0; k--)
          P.includes(Q[k].id) && Z.unshift(Q.splice(k, 1)[0]);
        return Q.forEach((k) => {
          if (k.children) {
            const N = G(k.children, P);
            Z.push(...N);
          }
        }), Z;
      }, F = (Q, P, Z, k) => {
        if (P.length === 0) {
          const r1 = Math.max(0, Math.min(Z, Q.length));
          Q.splice(r1, 0, ...k);
          return;
        }
        const N = Math.max(
          0,
          Math.min(P[0], Math.max(0, Q.length - 1))
        );
        let A = Q[N];
        if (P.length === 1) {
          if (!A) return;
          A.children || (A.children = []);
          const r1 = Math.max(
            0,
            Math.min(Z, A.children.length)
          );
          A.children.splice(r1, 0, ...k);
          return;
        }
        for (let r1 = 1; r1 < P.length; r1++) {
          if (!A) return;
          A.children || (A.children = []);
          const s1 = Math.max(
            0,
            Math.min(P[r1], Math.max(0, A.children.length - 1))
          );
          A = A.children[s1];
        }
        if (!A) return;
        A.children || (A.children = []);
        const R = Math.max(
          0,
          Math.min(Z, A.children.length)
        );
        A.children.splice(R, 0, ...k);
      }, H = G(B, b);
      if (H.length === 0) return;
      const D = w && w.length ? w : [];
      let O = 0;
      b.forEach((Q) => {
        const P = S.get(Q);
        if (!P || P.length === 0) return;
        const Z = P.slice(0, P.length - 1), k = P[P.length - 1];
        Z.length === D.length && Z.every((A, R) => A === D[R]) && k < p && O++;
      });
      const J = Math.max(0, p - O), X = [...D];
      if (X.length > 0) {
        const Q = X.slice(
          0,
          X.length - 1
        ), P = X[X.length - 1];
        let Z = 0;
        b.forEach((k) => {
          const N = S.get(k);
          if (!N || N.length === 0) return;
          const A = N.slice(0, N.length - 1), R = N[N.length - 1];
          A.length === Q.length && A.every((s1, f1) => s1 === Q[f1]) && R < P && Z++;
        }), X[X.length - 1] = Math.max(
          0,
          P - Z
        );
      }
      F(
        B,
        X,
        J,
        H
      ), M || u(B), i == null || i({ items: B });
    },
    [L, i, M]
  );
  j(() => {
    if (n === "none") return;
    const b = (p) => {
      const w = p.target;
      if (w) {
        for (const B of f.current)
          if (B.contains(w)) return;
        if (m.size > 0) {
          const B = /* @__PURE__ */ new Set();
          _ || a(B), o == null || o({ selectedItems: Array.from(B) });
        }
      }
    };
    return document.addEventListener("pointerdown", b), () => document.removeEventListener("pointerdown", b);
  }, [
    n,
    m,
    _,
    o
  ]);
  const T = K(null);
  j(() => {
    const b = document.createElement("div");
    return b.style.width = "20px", b.style.height = "20px", b.style.opacity = "0", b.style.position = "absolute", b.style.top = "-1000px", b.style.pointerEvents = "none", document.body.appendChild(b), T.current = b, () => {
      document.body.removeChild(b), T.current = null;
    };
  }, []);
  const y = c1((b) => b ? (f.current.add(b), () => {
    f.current.delete(b);
  }) : () => {
  }, []), n1 = c1(
    (b, p) => (c.current.set(b, p), () => {
      c.current.delete(b);
    }),
    []
  ), $ = c1((b) => g.current.get(b) || null, []), E = c1((b, p) => (g.current.set(b, p), () => {
    g.current.delete(b);
  }), []);
  j(() => {
    M && u(e);
  }, [e, M]), j(() => {
    const b = /* @__PURE__ */ new Map(), p = (w, B) => {
      w.forEach((S, G) => {
        const F = [...B, G];
        b.set(S.id, F), S.children && S.children.length && p(S.children, F);
      });
    };
    p(L, []), g.current = b;
  }, [L]), j(() => {
    _ && a(new Set(t));
  }, [t, _]);
  const q = {
    items: L,
    selectedItems: m,
    setSelection: C,
    setExactSelection: v,
    toggleSelect: V,
    reorderItems: I,
    selectionMode: n,
    registerRootElement: y,
    registerItemMeta: n1,
    getPathForId: $,
    registerItemPath: E,
    dragImage: T.current
  };
  return /* @__PURE__ */ r(Ze.Provider, { value: q, children: l });
}, Bt = ({
  className: e,
  children: t,
  ...n
}, i) => {
  const { reorderItems: o, registerRootElement: l, getPathForId: s } = ye(), u = K(null), d = K(null);
  j(() => {
    const m = u.current;
    if (!m) return;
    const h = m.closest(".ListItem"), f = h == null ? void 0 : h.getAttribute("data-nesting-level"), C = f ? parseInt(f, 10) : 0, v = h ? C + 1 : 0;
    try {
      m.style.setProperty("--level", String(v));
    } catch {
    }
  }, [u]), j(() => l == null ? void 0 : l(u.current), [l]);
  const a = (m) => {
    m.preventDefault(), m.dataTransfer.dropEffect = "move";
  }, c = (m) => {
    var v, x;
    m.preventDefault(), m.stopPropagation();
    let h = null;
    const f = window.__puiDraggingIds;
    Array.isArray(f) && (h = f);
    const C = (v = m.dataTransfer) == null ? void 0 : v.getData("application/json");
    if (C)
      try {
        const V = JSON.parse(C);
        V && Array.isArray(V.ids) && (h = V.ids);
      } catch {
      }
    if (!h) {
      const V = (x = m.dataTransfer) == null ? void 0 : x.getData("text/plain");
      V && (h = [V]);
    }
    if (h && h.length) {
      const V = m.currentTarget, I = Array.from(V.children);
      let T = I.length, y = "below";
      for (let E = 0; E < I.length; E++) {
        const q = I[E];
        if (q.classList.contains("ListItem_drag-over")) {
          const p = q.getAttribute("data-accepts-children") !== "false";
          if (q.classList.contains("ListItem_drag-above"))
            y = "above", T = E;
          else if (q.classList.contains("ListItem_drag-below")) {
            const w = q.querySelector(".ListItem__sub-items") !== null, B = q.classList.contains("ListItem_collapsed");
            w && !B && p ? (y = "inside", T = 0) : (y = "below", T = E + 1);
          } else q.classList.contains("ListItem_drag-inside") && (q.getAttribute("data-accepts-children") !== "false" ? (y = "inside", T = 0) : (y = "below", T = E + 1));
          break;
        }
      }
      const n1 = new CustomEvent("resetDragStates");
      document.dispatchEvent(n1);
      let $ = [];
      for (let E = 0; E < I.length; E++) {
        const q = I[E];
        if (q.classList.contains("ListItem_drag-over")) {
          const b = q.getAttribute("data-item-id") || "", p = b ? (s == null ? void 0 : s(b)) || [] : [];
          if (y === "inside")
            $ = p, T = 0;
          else if (p.length) {
            const w = p.slice(0, -1), B = p[p.length - 1];
            $ = w, T = y === "above" ? B : B + 1;
          }
          break;
        }
      }
      if (y !== "inside")
        for (let E = 0; E < I.length; E++) {
          const q = I[E];
          if (q.classList.contains("ListItem_drag-above") || q.classList.contains("ListItem_drag-below")) {
            const b = q.getAttribute("data-item-id");
            if (b && h.includes(b)) return;
            break;
          }
        }
      T < 0 && (T = 0), T > I.length && (T = I.length), o(
        h,
        T,
        $.length ? $ : void 0
      );
    }
  }, g = (m) => {
    m.preventDefault(), m.stopPropagation(), m.dataTransfer.dropEffect = "move", m.currentTarget.classList.add("ListContainer__end-dropzone-active");
    const C = m.currentTarget.parentElement, x = (C == null ? void 0 : C.closest(".ListItem")) || null;
    d.current !== x && (d.current && d.current.classList.remove("ListItem_drop-parent"), x && x.classList.add("ListItem_drop-parent"), d.current = x);
  }, M = (m) => {
    var x, V;
    m.preventDefault(), m.stopPropagation(), m.currentTarget.classList.remove("ListContainer__end-dropzone-active"), d.current && (d.current.classList.remove("ListItem_drop-parent"), d.current = null);
    let f = null;
    const C = window.__puiDraggingIds;
    Array.isArray(C) && (f = C);
    const v = (x = m.dataTransfer) == null ? void 0 : x.getData("application/json");
    if (v)
      try {
        const I = JSON.parse(v);
        I && Array.isArray(I.ids) && (f = I.ids);
      } catch {
      }
    if (!f) {
      const I = (V = m.dataTransfer) == null ? void 0 : V.getData("text/plain");
      I && (f = [I]);
    }
    if (f && f.length) {
      const I = new CustomEvent("resetDragStates");
      document.dispatchEvent(I);
      const y = m.currentTarget.parentElement, n1 = y ? Array.from(y.children).filter(
        (w) => {
          var B;
          return (B = w.classList) == null ? void 0 : B.contains("ListItem");
        }
      ).length : 0, $ = y == null ? void 0 : y.closest(
        ".ListItem"
      ), E = ($ == null ? void 0 : $.getAttribute("data-item-id")) || null, q = E ? (s == null ? void 0 : s(E)) || [] : [];
      o(f, n1, E ? q : void 0);
    }
  }, _ = (m) => {
    m.currentTarget.classList.remove("ListContainer__end-dropzone-active"), d.current && (d.current.classList.remove("ListItem_drop-parent"), d.current = null);
  }, L = W("ListContainer", void 0, void 0);
  return /* @__PURE__ */ r(
    "div",
    {
      className: [L, e, "no-drag"].join(" ").trim(),
      ref: (m) => {
        u.current = m, typeof i == "function" ? i(m) : i && (i.current = m);
      },
      ...n,
      onDragOver: a,
      onDrop: c,
      children: [
        t,
        /* @__PURE__ */ r(
          "div",
          {
            className: "ListContainer__end-dropzone",
            onDragOver: g,
            onDrop: M,
            onDragLeave: _
          }
        )
      ]
    }
  );
}, _5 = Y(Bt), Nt = ({
  className: e,
  id: t,
  isNested: n = !1,
  nestingLevel: i = 0,
  draggable: o = !1,
  dragHandle: l = "default",
  acceptsChildren: s = !1,
  selectionScope: u = "item",
  collapsed: d,
  showCollapseControl: a = !1,
  onCollapsedChange: c,
  onDragStart: g,
  onDragEnd: M,
  selectable: _ = !1,
  hoverable: L = !1,
  onSelect: m,
  subItems: h,
  children: f,
  reducedPaddingRight: C = !1,
  ...v
}, x) => {
  const {
    selectedItems: V,
    toggleSelect: I,
    selectionMode: T,
    setExactSelection: y,
    items: n1,
    registerItemMeta: $,
    dragImage: E
  } = ye(), [q, b] = z(!1), [p, w] = z(null), [B, S] = z(!1), G = K(null), F = K(null), H = K(null), D = K(0), O = K(null), J = K(null), X = d !== void 0, [Q, P] = z(
    !!d
  );
  j(() => {
    X && P(!!d);
  }, [d]);
  const Z = X ? !!d : Q, k = V.has(t), N = !!h;
  j(() => {
    const U = $ == null ? void 0 : $(t, {
      selectable: _,
      selectionScope: u
    }), i1 = () => {
      b(!1), w(null), S(!1), F.current && (F.current.classList.remove("ListItem_drop-parent"), F.current = null), H.current != null && (cancelAnimationFrame(H.current), H.current = null), O.current = null, J.current = null;
    }, a1 = () => {
      b(!1), w(null), S(!1), F.current && (F.current.classList.remove("ListItem_drop-parent"), F.current = null), H.current != null && (cancelAnimationFrame(H.current), H.current = null), O.current = null, J.current = null;
    };
    return document.addEventListener("dragend", i1), document.addEventListener("resetDragStates", a1), () => {
      document.removeEventListener("dragend", i1), document.removeEventListener("resetDragStates", a1), U == null || U();
    };
  }, [t, $, _, u]);
  const A = W("ListItem", void 0, {
    dragHandle: l,
    "selection-scope-descendants": u === "withDescendants",
    nested: n,
    draggable: !!o,
    selectable: !!_,
    selected: k,
    hoverable: !!L,
    "has-children": N,
    collapsed: !!Z,
    collapsable: a,
    "drag-over": q,
    "drag-above": p === "above",
    "drag-below": p === "below",
    "drag-inside": p === "inside",
    "drag-self": p === "self",
    dragging: B,
    "reduced-padding-right": C
  }), R = (U) => {
    if (!_ || T === "none") return;
    const i1 = U.shiftKey, a1 = U.metaKey || U.ctrlKey;
    if (u === "withDescendants") {
      if (I(t, { range: i1, additive: a1 }), T !== "single" && !i1 && !a1) {
        const C1 = /* @__PURE__ */ new Set([t]);
        r1(t).forEach((h1) => C1.add(h1)), y(Array.from(C1));
      }
    } else
      I(t, { range: i1, additive: a1 });
    m == null || m({ event: U, selected: !k });
  }, r1 = (U) => {
    const i1 = [], a1 = (C1) => {
      for (let h1 = 0; h1 < C1.length; h1++) {
        const l1 = C1[h1];
        if (l1.id === U) {
          const b1 = (x1) => {
            if (x1)
              for (let L1 = 0; L1 < x1.length; L1++) {
                const H1 = x1[L1];
                i1.push(H1.id), b1(H1.children);
              }
          };
          return b1(l1.children), !0;
        }
        if (l1.children && a1(l1.children)) return !0;
      }
      return !1;
    };
    return a1(n1), i1;
  }, s1 = (U) => {
    var i1, a1, C1, h1;
    if (o || s) {
      U.preventDefault(), U.stopPropagation(), U.dataTransfer.dropEffect = "move";
      let l1 = [];
      const b1 = window.__puiDraggingIds;
      Array.isArray(b1) && (l1 = b1);
      const x1 = (i1 = U.dataTransfer) == null ? void 0 : i1.getData("application/json");
      if (x1)
        try {
          const u1 = JSON.parse(x1);
          u1 && Array.isArray(u1.ids) && (l1 = u1.ids);
        } catch {
        }
      if (l1.length === 0) {
        const u1 = (a1 = U.dataTransfer) == null ? void 0 : a1.getData("text/plain");
        u1 && (l1 = [u1]);
      }
      if (l1.includes(t)) {
        b(!0), w("self");
        return;
      }
      const L1 = U.currentTarget, H1 = (h1 = (C1 = L1.closest(".ListItem")) == null ? void 0 : C1.parentElement) == null ? void 0 : h1.closest(".ListItem"), De = H1 ? H1.getAttribute("data-accepts-children") !== "false" : !0;
      if (H1 && !De) {
        b(!1), w(null);
        return;
      }
      const U1 = L1.querySelector(
        ".ListItem__content"
      ), D1 = U1 == null ? void 0 : U1.getBoundingClientRect();
      if (!D1) return;
      if (U.clientY < D1.top || U.clientY > D1.bottom) {
        b(!1), w(null);
        return;
      }
      b(!0), O.current = D1, J.current = L1, D.current = U.clientY, H.current == null && (H.current = requestAnimationFrame(() => {
        H.current = null;
        const u1 = O.current, F1 = J.current;
        if (!u1 || !F1) return;
        const N1 = D.current - u1.top, ke = 0, Re = 8, Oe = Math.max(0, u1.height - 8), Se = Math.max(0, u1.height - 0);
        let m1 = "below";
        const Ue = N1 >= ke && N1 <= Re, Fe = N1 >= Oe && N1 <= Se;
        Ue ? m1 = "above" : Fe ? m1 = "below" : s ? m1 = "inside" : m1 = N1 < u1.height / 2 ? "above" : "below", m1 === "below" && N && !Z && s && (m1 = "inside"), m1 !== p && w(m1);
        const j1 = F1.closest(".ListContainer"), je = j1 == null ? void 0 : j1.closest(
          ".ListItem"
        ), k1 = m1 === "inside" && s ? F1 : je || null;
        F.current !== k1 && (F.current && F.current.classList.remove("ListItem_drop-parent"), k1 && k1.classList.add("ListItem_drop-parent"), F.current = k1);
      }));
    }
  }, f1 = () => {
    b(!1), w(null), F.current && (F.current.classList.remove("ListItem_drop-parent"), F.current = null), H.current != null && (cancelAnimationFrame(H.current), H.current = null), O.current = null, J.current = null;
  }, p1 = (U) => {
    var i1, a1, C1;
    if (o) {
      S(!0);
      const h1 = V.has(t) && V.size > 1, l1 = h1 ? Array.from(V) : [t];
      T !== "none" && !h1 && y([t]);
      const b1 = { ids: l1 };
      try {
        (i1 = U.dataTransfer) == null || i1.setData("application/json", JSON.stringify(b1));
      } catch {
      }
      (a1 = U.dataTransfer) == null || a1.setData("text/plain", l1[0]), window.__puiDraggingIds = l1;
      try {
        (C1 = U.dataTransfer) == null || C1.setDragImage(E, 0, 0);
      } catch {
      }
      g == null || g({ event: U });
    }
  }, A1 = (U) => {
    if (o) {
      b(!1), w(null), S(!1);
      try {
        delete window.__puiDraggingIds;
      } catch {
      }
      F.current && (F.current.classList.remove("ListItem_drop-parent"), F.current = null), M == null || M({ event: U });
    }
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [A, e, "no-drag"].join(" ").trim(),
      ref: (U) => {
        G.current = U, typeof x == "function" ? x(U) : x && (x.current = U);
      },
      ...v,
      onDragOver: s1,
      onDragLeave: f1,
      "data-nesting-level": i,
      "data-item-id": t,
      "data-accepts-children": s ? "true" : "false",
      style: `--level: ${i}`,
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: "ListItem__content",
            onClick: R,
            draggable: !!(o && l === "container"),
            onDragStart: l === "container" && o ? p1 : void 0,
            onDragEnd: l === "container" && o ? A1 : void 0,
            children: [
              a && /* @__PURE__ */ r(
                "div",
                {
                  className: "ListItem__collapse-toggle",
                  onClick: (U) => {
                    U.stopPropagation(), X ? c == null || c({
                      event: U,
                      collapsed: !Z
                    }) : (P((i1) => !i1), c == null || c({
                      event: U,
                      collapsed: !Z
                    }));
                  },
                  children: /* @__PURE__ */ r(
                    g1,
                    {
                      intent: "neutral",
                      intentModifiers: "secondary",
                      glyph: Z ? n5 : Ae,
                      size: 16
                    }
                  )
                }
              ),
              o && l !== "container" && /* @__PURE__ */ r(
                "div",
                {
                  className: "ListItem__drag-handle",
                  draggable: !0,
                  onDragStart: p1,
                  onDragEnd: A1,
                  children: /* @__PURE__ */ r(
                    g1,
                    {
                      glyph: r5,
                      fill: "var(--pui-color-neutral-icon-tertiary)",
                      size: 16
                    }
                  )
                }
              ),
              f && /* @__PURE__ */ r("div", { className: "ListItem__children", children: f })
            ]
          }
        ),
        h && /* @__PURE__ */ r("div", { className: "ListItem__sub-items", children: h })
      ]
    },
    t
  );
}, M5 = Y(
  Nt
), It = ({
  className: e,
  width: t = "auto",
  height: n = "auto",
  children: i,
  ...o
}, l) => {
  const s = W("MenuContainer", void 0, void 0);
  return /* @__PURE__ */ r(
    "div",
    {
      className: [s, e, "no-drag"].join(" ").trim(),
      ref: l,
      style: {
        width: t === "auto" ? void 0 : t,
        height: n === "auto" ? void 0 : n
      },
      ...o,
      children: i
    }
  );
}, Tt = Y(It), $t = ({ className: e, variant: t = "full", ...n }, i) => {
  const o = W("MenuDivider", void 0, {
    variant: t
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [o, e].join(" ").trim(),
      ref: i,
      ...n,
      children: /* @__PURE__ */ r("div", { className: "MenuDivider__line" })
    }
  );
}, At = Y(
  $t
), z1 = {
  intent: "brand",
  intentModifiers: "default"
}, Dt = ({
  className: e,
  disabled: t = !1,
  prefix: n,
  suffix: i,
  children: o,
  reducedPaddingRight: l = !1,
  onClick: s,
  ...u
}, d) => {
  const [a, c] = z(!1), g = W("MenuItem", void 0, {
    disabled: t,
    prefix: !!n,
    suffix: !!i,
    reducedPaddingRight: l
  }), M = (m) => {
    if (t) {
      m.preventDefault();
      return;
    }
    m.stopPropagation(), s == null || s({ event: m });
  }, _ = () => {
    t || c(!0);
  }, L = () => {
    t || c(!1);
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [g, e, "no-drag"].join(" ").trim(),
      ref: d,
      ...u,
      onClick: M,
      onMouseEnter: _,
      onMouseLeave: L,
      children: /* @__PURE__ */ r("div", { className: "MenuItem__content", children: [
        n && /* @__PURE__ */ r("div", { className: "MenuItem__prefix", children: a ? Z1(n, {
          ...z1
        }) : n }),
        o && /* @__PURE__ */ r("div", { className: "MenuItem__children", children: /* @__PURE__ */ r(
          d1,
          {
            variant: "body",
            size: "medium",
            intent: a ? "brand" : "neutral-inverted-fixed",
            disabled: t,
            interactive: !0,
            children: a ? Z1(o, {
              ...z1
            }) : o
          }
        ) }),
        i && /* @__PURE__ */ r("div", { className: "MenuItem__suffix", children: a ? Z1(i, {
          ...z1
        }) : i })
      ] })
    }
  );
}, x5 = Y(
  Dt
), fe = {
  intent: "brand",
  intentModifiers: "default"
}, kt = ({
  className: e,
  defaultSelected: t = !1,
  selected: n,
  reducedPaddingRight: i = !1,
  disabled: o = !1,
  suffix: l,
  children: s,
  onChange: u,
  ...d
}, a) => {
  const [c, g] = z(t), M = n !== void 0 ? n : c, [_, L] = z(!1), m = W("MenuItemOption", void 0, {
    disabled: o,
    suffix: !!l,
    selected: M,
    reducedPaddingRight: i
  }), h = (v) => {
    if (!o) {
      const x = !M;
      n === void 0 && g(x), v.stopPropagation(), u == null || u({ event: v, selected: x });
    }
  };
  j(() => {
    n !== void 0 && g(n);
  }, [n]);
  const f = () => {
    o || L(!0);
  }, C = () => {
    o || L(!1);
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [m, e, "no-drag"].join(" ").trim(),
      ref: a,
      ...d,
      onClick: h,
      onMouseEnter: f,
      onMouseLeave: C,
      children: /* @__PURE__ */ r("div", { className: "MenuItemOption__content", children: [
        /* @__PURE__ */ r("div", { className: "MenuItemOption__selection", children: M && /* @__PURE__ */ r(
          g1,
          {
            glyph: $e,
            size: 16,
            intent: _ ? "brand" : "neutral-inverted-fixed",
            disabled: o,
            interactive: !0
          }
        ) }),
        /* @__PURE__ */ r("div", { className: "MenuItemOption__content-container", children: [
          s && /* @__PURE__ */ r("div", { className: "MenuItemOption__children", children: /* @__PURE__ */ r(
            d1,
            {
              variant: "body",
              size: "medium",
              intent: _ ? "brand" : "neutral-inverted-fixed",
              disabled: o,
              interactive: !0,
              children: _ ? Z1(s, {
                ...fe
              }) : s
            }
          ) }),
          l && /* @__PURE__ */ r("div", { className: "MenuItemOption__suffix", children: _ ? Z1(l, {
            ...fe
          }) : l })
        ] })
      ] })
    }
  );
}, Rt = Y(kt), Ot = (e, t, n, i, o, l, s, u, d, a, c) => {
  const g = [l];
  if (s && Array.isArray(s))
    for (const h of s) g.push(h);
  const M = (h, f) => h >= a && f >= a && h + i <= e - a && f + o <= t - a, _ = (h, f, C) => Math.max(f, Math.min(C, Math.round(h))), L = (h) => {
    switch (h) {
      case "over": {
        const f = Math.max(
          a,
          Math.min(e - i - a, Math.round(n.left + u))
        ), C = Math.max(
          a,
          Math.min(t - o - a, Math.round(n.top + d))
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: 0, top: 0, side: "top" }
        };
      }
      case "top": {
        const f = Math.max(
          a,
          Math.min(
            e - i - a,
            Math.round(n.left + n.width / 2 - i / 2 + u)
          )
        ), C = n.top - o - d, v = _(
          n.left + n.width / 2 - f,
          c,
          i - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: v, top: o, side: "top" }
        };
      }
      case "top-left": {
        const f = Math.max(
          a,
          Math.min(e - i - a, Math.round(n.left + u))
        ), C = n.top - o - d, v = _(
          n.left - f + n.width / 2,
          c,
          i - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: v, top: o, side: "top" }
        };
      }
      case "top-right": {
        const f = Math.max(
          a,
          Math.min(e - i - a, Math.round(n.right - i - u))
        ), C = n.top - o - d, v = _(
          n.left - f + n.width / 2,
          c,
          i - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: v, top: o, side: "top" }
        };
      }
      case "bottom": {
        const f = Math.max(
          a,
          Math.min(
            e - i - a,
            Math.round(n.left + n.width / 2 - i / 2 + u)
          )
        ), C = n.bottom + d, v = _(
          n.left - f + n.width / 2,
          c,
          i - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: v, top: 0, side: "bottom" }
        };
      }
      case "bottom-left": {
        const f = Math.max(
          a,
          Math.min(e - i - a, Math.round(n.left + u))
        ), C = n.bottom + d, v = _(
          n.left - f + n.width / 2,
          c,
          i - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: v, top: 0, side: "bottom" }
        };
      }
      case "bottom-right": {
        const f = Math.max(
          a,
          Math.min(e - i - a, Math.round(n.right - i - u))
        ), C = n.bottom + d, v = _(
          n.left - f + n.width / 2,
          c,
          i - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: v, top: 0, side: "bottom" }
        };
      }
      case "left": {
        const f = n.left - i - u, C = Math.max(
          a,
          Math.min(
            t - o - a,
            Math.round(n.top + n.height / 2 - o / 2 + d)
          )
        ), v = _(
          n.top - C + n.height / 2,
          c,
          o - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: i, top: v, side: "left" }
        };
      }
      case "left-top": {
        const f = n.left - i - u, C = Math.max(
          a,
          Math.min(t - o - a, Math.round(n.top + d))
        ), v = _(
          n.top - C + n.height / 2,
          c,
          o - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: i, top: v, side: "left" }
        };
      }
      case "left-bottom": {
        const f = n.left - i - u, C = Math.max(
          a,
          Math.min(t - o - a, Math.round(n.bottom - o - d))
        ), v = _(
          n.top - C + n.height / 2,
          c,
          o - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: i, top: v, side: "left" }
        };
      }
      case "right": {
        const f = n.right + u, C = Math.max(
          a,
          Math.min(
            t - o - a,
            Math.round(n.top + n.height / 2 - o / 2 + d)
          )
        ), v = _(
          n.top - C + n.height / 2,
          c,
          o - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: 0, top: v, side: "right" }
        };
      }
      case "right-top": {
        const f = n.right + u, C = Math.max(
          a,
          Math.min(t - o - a, Math.round(n.top + d))
        ), v = _(
          n.top - C + n.height / 2,
          c / 2,
          o - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: 0, top: v, side: "right" }
        };
      }
      case "right-bottom": {
        const f = n.right + u, C = Math.max(
          a,
          Math.min(t - o - a, Math.round(n.bottom - o - d))
        ), v = _(
          n.top - C + n.height / 2,
          c,
          o - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: 0, top: v, side: "right" }
        };
      }
      default: {
        const f = Math.max(
          a,
          Math.min(
            e - i - a,
            Math.round(n.left + n.width / 2 - i / 2)
          )
        ), C = n.bottom + d, v = _(
          n.left - f + n.width / 2,
          c,
          i - c
        );
        return {
          coords: { left: f, top: C },
          arrow: { left: v, top: o, side: "bottom" }
        };
      }
    }
  };
  for (const h of g) {
    const f = L(h);
    if (!s || M(f.coords.left, f.coords.top)) {
      const C = Math.max(
        a,
        Math.min(e - i - a, Math.round(f.coords.left))
      ), v = Math.max(
        a,
        Math.min(t - o - a, Math.round(f.coords.top))
      );
      return { coords: { left: C, top: v }, arrow: f.arrow };
    }
  }
  const m = L(g[0]);
  return {
    coords: {
      left: Math.max(
        a,
        Math.min(e - i - a, Math.round(m.coords.left))
      ),
      top: Math.max(
        a,
        Math.min(t - o - a, Math.round(m.coords.top))
      )
    },
    arrow: m.arrow
  };
}, St = ({
  className: e,
  anchorRef: t,
  placement: n = "bottom",
  placementFallback: i,
  paddingX: o = 0,
  paddingY: l = 0,
  edgePadding: s = 0,
  trigger: u = "click",
  visibilityDelay: d = 0,
  draggable: a = !1,
  open: c,
  defaultOpen: g = !1,
  closeOnOutsideClick: M = !0,
  arrow: _ = !1,
  onOpen: L,
  onClose: m,
  children: h
}) => {
  const f = K(null), [C, v] = z({ top: 0, left: 0 }), [x, V] = z(!1), [I, T] = z(null), [y, n1] = z(null), [$, E] = z(g), q = typeof c == "boolean", b = q ? c : $, p = K(null), w = K(null), B = y1(
    () => i && Array.isArray(i) ? i : !1,
    [i]
  ), S = y1(
    () => () => {
      var p1;
      const Z = window.innerWidth, k = window.innerHeight, N = t.current;
      if (!N) return;
      const A = N.getBoundingClientRect(), R = (p1 = f.current) == null ? void 0 : p1.getBoundingClientRect(), r1 = Math.round((R == null ? void 0 : R.width) || 0), s1 = Math.round((R == null ? void 0 : R.height) || 0);
      if (!r1 || !s1) {
        p.current != null && cancelAnimationFrame(p.current), p.current = requestAnimationFrame(() => {
          p.current = null, S();
        });
        return;
      }
      const f1 = Ot(
        Z,
        k,
        A,
        r1,
        s1,
        n,
        B,
        o,
        l,
        s,
        8
      );
      v(f1.coords), T(f1.arrow), V(!0);
    },
    [
      t,
      n,
      o,
      l,
      s,
      B
    ]
  );
  Je(() => {
    b && (V(!1), S());
  }, [b, S]), j(() => {
    b || n1(null);
  }, [b]), j(() => {
    if (!b) return;
    const Z = () => S();
    window.addEventListener("resize", Z), window.addEventListener("scroll", Z, !0);
    const k = f.current;
    let N = null;
    if (k)
      try {
        N = new ResizeObserver(() => S()), N.observe(k);
      } catch {
      }
    return () => {
      window.removeEventListener("resize", Z), window.removeEventListener("scroll", Z, !0), N && N.disconnect(), p.current != null && (cancelAnimationFrame(p.current), p.current = null);
    };
  }, [b, S]);
  const G = K(!1);
  j(() => {
    b && !G.current ? (G.current = !0, L == null || L()) : !b && G.current && (G.current = !1, m == null || m());
  }, [b, L, m]), j(() => {
    if (!b || !M) return;
    const Z = (k) => {
      const N = k.target, A = f.current, R = t.current;
      if (!A || !N || !R) return;
      const r1 = A.contains(N), s1 = R.contains(N), f1 = N != null && N.closest ? !!N.closest(".OverlayPositioner") : !1;
      !r1 && !s1 && !f1 && (q ? m == null || m() : E(!1));
    };
    return window.addEventListener("mousedown", Z, !0), () => window.removeEventListener("mousedown", Z, !0);
  }, [b, M, t, q, m]), j(() => {
    if (q) return;
    const Z = t.current;
    if (Z) {
      if (u === "click") {
        const k = (N) => {
          N.preventDefault(), E((A) => !A);
        };
        return Z.addEventListener("click", k), () => Z.removeEventListener("click", k);
      }
      if (u === "hover") {
        const k = () => {
          w.current != null && (clearTimeout(w.current), w.current = null);
        }, N = () => {
          k();
          const R = Math.max(0, d);
          R === 0 ? E(!0) : w.current = window.setTimeout(() => {
            w.current = null, E(!0);
          }, R);
        }, A = () => {
          k(), E(!1);
        };
        return Z.addEventListener("mouseenter", N), Z.addEventListener("mouseleave", A), () => {
          Z.removeEventListener("mouseenter", N), Z.removeEventListener("mouseleave", A), k();
        };
      }
    }
  }, [q, u, t, d]);
  const F = (y ? y.top : C.top) || 0, H = (y ? y.left : C.left) || 0, D = {
    top: `${F}px`,
    left: `${H}px`,
    visibility: x ? "visible" : "hidden",
    pointerEvents: x ? void 0 : "none"
  }, O = W("OverlayPositioner", void 0, {
    placement: n
  });
  if (!b) return null;
  const J = (() => {
    if (n === "over" || !_ || !x || !I) return null;
    const Z = {
      position: "absolute",
      left: `${I.left}px`,
      top: `${I.top}px`
    };
    return /* @__PURE__ */ r("div", { className: "OverlayPositioner__arrow", style: Z });
  })(), X = (Z) => {
    if (!Z) return !1;
    const k = f.current;
    let N = Z;
    const A = [
      "button",
      "input",
      "select",
      "textarea",
      "a[href]",
      "canvas",
      "video",
      "audio",
      ".no-drag"
    ].join(",");
    if (Z.closest && Z.closest(A))
      return !0;
    for (; N && k && N !== k; ) {
      const R = N.getAttribute && N.getAttribute("tabindex");
      if (R != null && R !== "" && !Number.isNaN(Number(R)) && Number(R) >= 0)
        return !0;
      N = N.parentElement;
    }
    return !1;
  }, Q = (Z) => {
    if (!a || Z.button !== 0) return;
    const k = Z.target;
    if (X(k)) return;
    Z.preventDefault();
    const N = y ? y.left : C.left, A = y ? y.top : C.top, R = Z.clientX, r1 = Z.clientY, s1 = (p1) => {
      const A1 = p1.clientX - R, U = p1.clientY - r1;
      n1({ left: N + A1, top: A + U });
    }, f1 = () => {
      window.removeEventListener("mousemove", s1), window.removeEventListener("mouseup", f1);
    };
    window.addEventListener("mousemove", s1), window.addEventListener("mouseup", f1);
  }, P = /* @__PURE__ */ r(
    "div",
    {
      className: [O, e].join(" ").trim(),
      ref: f,
      style: D,
      onMouseDown: (Z) => Q(Z),
      children: [
        J,
        h
      ]
    }
  );
  return Ge(P, document.body);
}, ie = Y(St), Ut = ({
  className: e,
  width: t = "auto",
  height: n = "auto",
  children: i,
  ...o
}, l) => {
  const s = W("Popover", void 0, void 0);
  return /* @__PURE__ */ r(
    "div",
    {
      className: [s, e].join(" ").trim(),
      ref: l,
      style: {
        width: t === "auto" ? void 0 : t,
        height: n === "auto" ? void 0 : n
      },
      ...o,
      children: i
    }
  );
}, H5 = Y(
  Ut
), Ee = Q1(
  void 0
), Ft = () => {
  const e = X1(Ee);
  if (!e) throw new Error("ScrollContext not found");
  return e;
}, V5 = ({
  defaultPositionY: e = 0,
  positionY: t,
  onScroll: n,
  children: i
}) => {
  const [o, l] = z(e), [s, u] = z(e === 0), [d, a] = z(!1), c = K(null), g = t !== void 0 ? t : o, M = (m) => {
    const h = m.currentTarget || m.target;
    if (!h) return;
    const f = h.scrollHeight - h.clientHeight;
    c.current = f;
    const C = f > 0;
    let v = !1, x = !1, V;
    C ? (v = h.scrollTop <= 0, x = h.scrollTop >= f, V = v ? 0 : x ? f : h.scrollTop) : V = 0, u(C ? v : !0), a(C ? x : !0), t === void 0 && l(V), n == null || n({ positionY: V });
  }, _ = (m) => {
    l(m);
    const h = c.current, f = typeof h == "number" && h > 0;
    u(f ? m === 0 : !0), a(f ? m >= h : !0);
  };
  j(() => {
    t !== void 0 && _(t);
  }, [t]);
  const L = {
    positionY: g,
    isAtTop: s,
    isAtBottom: d,
    onScroll: M,
    setPositionY: _
  };
  return /* @__PURE__ */ r(Ee.Provider, { value: L, children: i });
}, jt = ({ className: e, children: t, ...n }, i) => {
  const { onScroll: o, positionY: l, isAtTop: s, isAtBottom: u } = Ft(), d = K(null), a = K(null), c = K(null), [g, M] = z({ top: 0, height: 24 }), [_, L] = z(!1), [m, h] = z(!1), f = K(0), C = K(!1), v = K(""), x = K(null), V = K(!1), I = W("ScrollContainer", void 0, void 0), T = c1(() => {
    const p = a.current, w = c.current;
    if (!p || !w) return;
    const B = Math.max(0, p.scrollHeight - p.clientHeight), S = B > 0, G = S ? p.clientHeight / p.scrollHeight : 1, F = w.clientHeight - 8, H = Math.max(24, Math.round(F * G)), D = F - H, O = S ? Math.round(D * p.scrollTop / B) : 0;
    M({ top: O, height: H }), h(S);
  }, []), y = c1(() => {
    x.current == null && (x.current = requestAnimationFrame(() => {
      x.current = null, T();
    }));
  }, [T]);
  j(() => {
    const p = a.current;
    if (!(!p || typeof l != "number"))
      try {
        const w = Math.max(0, p.scrollHeight - p.clientHeight), B = Math.max(0, Math.min(l, w));
        p.scrollTop !== B && (p.scrollTop = B), y();
      } catch {
      }
  }, [l, y]), j(() => {
    y();
  }, [s, u, y]), j(() => {
    const p = a.current;
    if (!p) return;
    const w = () => {
      if (V.current) {
        const S = Math.max(0, p.scrollHeight - p.clientHeight);
        p.scrollTop = S;
      }
      T();
    }, B = new ResizeObserver(w);
    return B.observe(p), c.current && B.observe(c.current), () => B.disconnect();
  }, [T]), j(() => {
    T();
    const p = requestAnimationFrame(() => T());
    return () => cancelAnimationFrame(p);
  }, [T]), j(() => {
    const p = a.current;
    if (!p) return;
    const w = new MutationObserver(() => {
      if (V.current) {
        const B = Math.max(0, p.scrollHeight - p.clientHeight);
        p.scrollTop = B;
      }
      y();
    });
    return w.observe(p, { childList: !0, subtree: !0, characterData: !0 }), () => w.disconnect();
  }, [y]), j(() => {
    const p = () => {
      requestAnimationFrame(() => T());
    };
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [T]);
  const n1 = (p) => {
    o(p);
    const w = a.current;
    if (w) {
      const B = Math.max(0, w.scrollHeight - w.clientHeight);
      V.current = B > 0 && Math.abs(B - w.scrollTop) <= 1;
    }
    y();
  }, $ = (p) => {
    if (p.button !== 0) return;
    p.preventDefault(), L(!0), C.current = !0, T();
    const w = p.clientY;
    f.current = w - (c.current.getBoundingClientRect().top + g.top + 2), v.current = document.body.style.userSelect, document.body.style.userSelect = "none", window.addEventListener("mousemove", E), window.addEventListener("mouseup", q);
  }, E = (p) => {
    if (!C.current) return;
    const w = a.current, B = c.current;
    if (!w || !B) return;
    const S = Math.max(0, w.scrollHeight - w.clientHeight);
    if (S <= 0) return;
    const G = B.getBoundingClientRect(), F = p.clientY - G.top - 2 - f.current, H = B.clientHeight - 4, D = g.height, O = H - D;
    if (O <= 0) return;
    p.preventDefault();
    const J = Math.max(0, Math.min(O, F)), X = Math.round(J * S / O);
    w.scrollTop !== X && (w.scrollTop = X, y());
  }, q = () => {
    L(!1), C.current = !1, document.body.style.userSelect = v.current, window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", q);
  }, b = W("ScrollContainer", "track", {
    noScroll: !m,
    dragging: _
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [I, e].join(" ").trim(),
      ref: (p) => {
        d.current = p, typeof i == "function" ? i(p) : i && (i.current = p);
      },
      ...n,
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: "ScrollContainer__content",
            ref: a,
            onScroll: (p) => n1(p),
            children: t
          }
        ),
        /* @__PURE__ */ r("div", { className: b, ref: c, children: /* @__PURE__ */ r(
          "div",
          {
            className: "ScrollContainer__thumb",
            style: {
              height: `${g.height}px`,
              transform: `translateY(${g.top}px)`
            },
            onMouseDown: (p) => $(p)
          }
        ) })
      ]
    }
  );
}, Z5 = Y(jt), Pt = ({ className: e, children: t, padding: n, variant: i = "default", ...o }, l) => {
  const s = W("Section", void 0, {
    ...n && n.top && { paddingTop: String(n.top) },
    ...n && n.right && { paddingRight: String(n.right) },
    ...n && n.bottom && { paddingBottom: String(n.bottom) },
    ...n && n.left && { paddingLeft: String(n.left) },
    variant: i
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [s, e].join(" ").trim(),
      ref: l,
      ...o,
      children: /* @__PURE__ */ r("div", { className: "Section__content", children: t })
    }
  );
}, y5 = Y(
  Pt
), qt = ({
  className: e,
  options: t,
  value: n,
  defaultValue: i,
  disabled: o = !1,
  fullWidth: l = !1,
  onChange: s,
  ...u
}, d) => {
  const [a, c] = z(
    i
  ), g = n !== void 0, M = g ? n : a;
  j(() => {
    g && c(n);
  }, [g, n]);
  const _ = W("SegmentedControl", void 0, {
    fullWidth: l
  }), L = K([]);
  L.current = t.map((v, x) => L.current[x] || null);
  const m = y1(
    () => t.findIndex((v) => v.value === M),
    [t, M]
  ), h = (v) => {
    const x = Math.max(0, Math.min(t.length - 1, v)), V = L.current[x];
    V && V.focus();
  }, f = (v, x) => {
    g || c(x), s == null || s({ event: v, value: x });
  }, C = (v) => {
    const x = v, V = x.key;
    if (V !== "ArrowLeft" && V !== "ArrowRight") return;
    x.stopPropagation(), x.preventDefault();
    const I = V === "ArrowRight" ? 1 : -1, y = ((m >= 0 ? m : 0) + I + t.length) % t.length, n1 = t[y];
    n1 && (f(x, n1.value), h(y));
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [_, e, "no-drag"].join(" ").trim(),
      ref: d,
      onKeyDown: C,
      ...u,
      children: t.map((v, x) => {
        const V = v.value === M, I = {
          current: null
        }, T = W("SegmentedControl", "item", {
          selected: V,
          disabled: o,
          icon: !!v.icon
        });
        return /* @__PURE__ */ r(
          "button",
          {
            className: T,
            ref: (y) => {
              L.current[x] = y, I.current = y;
            },
            tabIndex: V ? 0 : -1,
            onClick: (y) => f(y, v.value),
            disabled: o,
            children: [
              v.icon && /* @__PURE__ */ r(
                g1,
                {
                  glyph: typeof v.icon == "function" ? v.icon : void 0,
                  intent: "neutral",
                  intentModifiers: V ? "default" : "secondary",
                  variant: "default",
                  size: 24,
                  interactive: !0,
                  disabled: o,
                  children: typeof v.icon != "function" ? v.icon : void 0
                }
              ),
              v.icon && /* @__PURE__ */ r(
                ie,
                {
                  anchorRef: I,
                  placement: "bottom",
                  trigger: "hover",
                  paddingY: 8,
                  visibilityDelay: 1e3,
                  arrow: !0,
                  children: /* @__PURE__ */ r(Ie, { children: /* @__PURE__ */ r(d1, { intent: "neutral-inverted-fixed", children: v.title }) })
                }
              ),
              !v.icon && /* @__PURE__ */ r(
                d1,
                {
                  intent: "neutral",
                  intentModifiers: V ? "default" : "secondary",
                  interactive: !0,
                  disabled: o,
                  children: v.title
                }
              )
            ]
          },
          v.value
        );
      })
    }
  );
}, E5 = Y(qt), zt = ({
  className: e,
  options: t,
  placeholder: n,
  defaultValue: i,
  value: o,
  grouped: l = "none",
  error: s = !1,
  disabled: u = !1,
  prefix: d,
  menuWidth: a = "auto",
  onBlur: c,
  onFocus: g,
  onChange: M,
  ..._
}, L) => {
  const [m, h] = z(!1), [f, C] = z(!1), [v, x] = z(
    o !== void 0 ? o : i
  ), V = !!(o ?? v ?? "").length, I = (() => {
    const H = t ?? [];
    return Array.isArray(H) && H.length > 0 && Array.isArray(H[0]) ? H : [H];
  })(), T = K(null), y = K(null), n1 = c1(() => {
    const H = T.current;
    H && H.focus();
  }, []), $ = () => {
    u || (C(!0), h(!1), requestAnimationFrame(() => {
      const H = y.current;
      H && H.focus();
    }));
  }, E = c1(() => {
    C(!1), requestAnimationFrame(() => {
      n1(), h(!0);
    });
  }, [n1]), q = W("Select", void 0, {
    filled: V,
    grouped: !!l,
    groupedPosition: l,
    prefix: !!d,
    error: s,
    disabled: u,
    focused: m,
    open: f
  }), b = o !== void 0 ? o : v, p = (() => {
    for (let H = 0; H < I.length; H++) {
      const D = I[H];
      for (let O = 0; O < D.length; O++) {
        const J = D[O];
        if (J.value === b) return J;
      }
    }
  })();
  j(() => {
    o !== void 0 && x(o);
  }, [o]), j(() => {
    if (!f) return;
    const H = (D) => {
      const O = D.target, J = T.current, X = y.current;
      if (!O || !J) return;
      const Q = J.contains(O), P = X ? X.contains(O) : !1;
      !Q && !P && E();
    };
    return window.addEventListener("mousedown", H, !0), () => window.removeEventListener("mousedown", H, !0);
  }, [f, E]);
  const w = () => {
    u || (h(!0), g == null || g());
  }, B = (H) => {
    if (u) return;
    const D = H.relatedTarget, O = T.current, J = y.current, X = !!D && !(O != null && O.contains(D)) && !((J == null ? void 0 : J.contains(D)) ?? !1);
    (!D || X) && (h(!1), C(!1), c == null || c());
  }, S = () => {
    u || C((H) => {
      const D = !H;
      return D ? (h(!1), requestAnimationFrame(() => {
        var O;
        return (O = y.current) == null ? void 0 : O.focus();
      })) : requestAnimationFrame(() => {
        n1(), h(!0);
      }), D;
    });
  }, G = (H) => {
    if (u) return;
    const D = H.key;
    (D === "Enter" || D === " " || D === "Spacebar") && (H.preventDefault(), f || $());
  }, F = (H, D) => {
    o === void 0 && x(D), M == null || M({ event: H, value: D }), C(!1);
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [q, e, "no-drag"].join(" ").trim(),
      ref: (H) => {
        T.current = H, typeof L == "function" ? L(H) : L && typeof L == "object" && (L.current = H);
      },
      tabIndex: u ? -1 : 0,
      onFocus: w,
      onBlur: B,
      onClick: S,
      onKeyDown: G,
      ..._,
      children: [
        d && /* @__PURE__ */ r("div", { className: "Select__prefix", children: d }),
        /* @__PURE__ */ r("div", { className: "Select__content", children: V ? p == null ? void 0 : p.label : n }),
        /* @__PURE__ */ r("div", { className: "Select__suffix", children: /* @__PURE__ */ r(
          g1,
          {
            glyph: Ae,
            size: 16,
            intent: "neutral",
            interactive: !0,
            disabled: u
          }
        ) }),
        /* @__PURE__ */ r(
          ie,
          {
            anchorRef: T,
            placement: "over",
            edgePadding: 16,
            open: f,
            onClose: E,
            children: /* @__PURE__ */ r(
              "div",
              {
                ref: y,
                tabIndex: -1,
                onBlur: (H) => {
                  if (u) return;
                  const D = H.relatedTarget || null, O = T.current, J = y.current, X = !!D && !(O != null && O.contains(D)) && !((J == null ? void 0 : J.contains(D)) ?? !1);
                  (!D || X) && (h(!1), E(), c == null || c());
                },
                children: /* @__PURE__ */ r(Tt, { width: a, children: I.map((H, D) => /* @__PURE__ */ r(B1, { children: [
                  D > 0 ? /* @__PURE__ */ r(At, { variant: "inset" }) : null,
                  H.map((O) => /* @__PURE__ */ r(
                    Rt,
                    {
                      selected: O.value === b,
                      onChange: ({ event: J }) => F(J, O.value),
                      children: O.label
                    },
                    `${D}-${O.value}`
                  ))
                ] }, `group-${D}`)) })
              }
            )
          }
        )
      ]
    }
  );
}, ae = Y(
  zt
), Wt = ({ className: e, size: t, direction: n = "column", ...i }, o) => {
  const l = W("Spacing", void 0, {
    size: String(t),
    direction: n
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [l, e].join(" ").trim(),
      ref: o,
      ...i
    }
  );
}, B5 = Y(
  Wt
), Kt = ({ className: e, ...t }, n) => {
  const i = W("Spinner", void 0, void 0);
  return /* @__PURE__ */ r(
    "div",
    {
      className: [i, e].join(" ").trim(),
      ref: n,
      ...t,
      children: /* @__PURE__ */ r("div", { className: "Spinner__spinner" })
    }
  );
}, N5 = Y(
  Kt
), Yt = ({
  className: e,
  direction: t = "column",
  spacing: n,
  x: i = "start",
  y: o = "start",
  fullHeight: l = !1,
  fullWidth: s = !1,
  children: u,
  ...d
}, a) => {
  const c = W("Stack", void 0, {
    direction: t,
    spacing: String(n),
    x: i,
    y: o,
    fullHeight: l,
    fullWidth: s
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [c, e].join(" ").trim(),
      ref: a,
      ...d,
      children: u
    }
  );
}, I5 = Y(Yt), Gt = ({
  className: e,
  value: t,
  variant: n = "default",
  prefix: i,
  suffix: o,
  children: l,
  onClick: s,
  ...u
}, d) => {
  const { value: a, onChange: c } = Ne(), g = W("Tab", void 0, {
    variant: n,
    selected: t === a,
    prefix: !!i,
    suffix: !!o
  }), M = (L) => {
    L.stopPropagation(), c(t), s == null || s({ event: L, value: t });
  }, _ = ({ fake: L = !1, selected: m = !1 }) => /* @__PURE__ */ r("div", { className: "Tab__content", children: [
    i && /* @__PURE__ */ r("div", { className: "Tab__prefix", children: i }),
    l && /* @__PURE__ */ r("div", { className: "Tab__children", children: /* @__PURE__ */ r(
      d1,
      {
        variant: "body",
        size: "medium",
        strong: L || t === a,
        intent: "neutral",
        intentModifiers: m ? "default" : "secondary",
        interactive: !0,
        children: l
      }
    ) }),
    o && /* @__PURE__ */ r("div", { className: "Tab__suffix", children: o })
  ] });
  return /* @__PURE__ */ r(
    "button",
    {
      className: [g, e, "no-drag"].join(" ").trim(),
      ref: d,
      ...u,
      onClick: M,
      children: [
        /* @__PURE__ */ r("div", { className: "Tab__container Tab__container_fake", children: /* @__PURE__ */ r(_, { fake: !0, selected: t === a }) }),
        /* @__PURE__ */ r("div", { className: "Tab__container Tab__container_real", children: /* @__PURE__ */ r(_, { selected: t === a }) })
      ]
    }
  );
}, T5 = Y(Gt), Be = Q1(void 0), Ne = () => {
  const e = X1(Be);
  if (!e) throw new Error("TabContext not found");
  return e;
}, $5 = ({
  defaultValue: e = "",
  value: t,
  onChange: n,
  children: i
}) => {
  const [o, l] = z(e), s = t !== void 0 ? t : o, u = (a) => {
    t === void 0 && l(a), n == null || n({ value: a });
  };
  j(() => {
    t !== void 0 && l(t);
  }, [t]);
  const d = {
    value: s,
    onChange: u,
    setValue: l
  };
  return /* @__PURE__ */ r(Be.Provider, { value: d, children: i });
}, Jt = ({ className: e, children: t, ...n }, i) => {
  const o = W("TabList", void 0, void 0);
  return /* @__PURE__ */ r(
    "div",
    {
      className: [o, e].join(" ").trim(),
      ref: i,
      ...n,
      children: t && /* @__PURE__ */ r("div", { className: "TabList__children", children: t })
    }
  );
}, A5 = Y(
  Jt
), Qt = ({ className: e, value: t, fullHeight: n = !1, children: i, ...o }, l) => {
  const { value: s } = Ne();
  if (t !== s) return /* @__PURE__ */ r(B1, {});
  const u = W("TabPanel", void 0, {
    selected: t === s,
    fullHeight: n
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [u, e].join(" ").trim(),
      ref: l,
      ...o,
      children: /* @__PURE__ */ r("div", { className: "TabPanel__children", children: i })
    }
  );
}, D5 = Y(
  Qt
), Xt = ({
  className: e,
  intent: t = "neutral",
  intentModifiers: n = "default",
  disabled: i = !1,
  interactive: o = !1,
  selected: l = !1,
  fill: s,
  variant: u = "body",
  size: d = "medium",
  strong: a = !1,
  align: c = "left",
  fullWidth: g = !1,
  noWrap: M = !1,
  children: _,
  ...L
}, m) => {
  const h = W("Text", void 0, {
    ...!s && {
      intent: `${t}-${n}`,
      disabled: i,
      interactive: o,
      selected: l
    },
    variant: u,
    size: d,
    strong: a,
    align: c,
    fullWidth: g,
    noWrap: M
  });
  return /* @__PURE__ */ r(
    "div",
    {
      className: [h, e].join(" ").trim(),
      ref: m,
      ...L,
      style: {
        ...s && { color: s }
      },
      children: _
    }
  );
}, d1 = Y(Xt), e5 = ({
  className: e,
  width: t = "auto",
  height: n = "auto",
  children: i,
  ...o
}, l) => {
  const s = W("Tooltip", void 0, void 0);
  return /* @__PURE__ */ r(
    "div",
    {
      className: [s, e, "no-drag"].join(" ").trim(),
      ref: l,
      style: {
        width: t === "auto" ? void 0 : t,
        height: n === "auto" ? void 0 : n
      },
      ...o,
      children: i
    }
  );
}, Ie = Y(
  e5
), t5 = ({
  className: e,
  minWidth: t,
  minHeight: n,
  maxWidth: i,
  maxHeight: o,
  onResize: l,
  ...s
}, u) => {
  const d = W("WindowResizer", void 0, void 0);
  return j(() => {
    const a = document.getElementById("WindowResizer");
    if (!a) return;
    let c, g, M, _, L = null, m = 0, h = 0;
    const f = () => {
      l == null || l({ width: m, height: h }), L = null;
    }, C = (V) => {
      const I = Math.min(
        Math.max(M + V.clientX - c, t),
        i
      ), T = Math.min(
        Math.max(_ + V.clientY - g, n),
        o
      );
      m = I, h = T, L === null && (L = requestAnimationFrame(f));
    }, v = () => {
      document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", v), L !== null && (cancelAnimationFrame(L), L = null);
    }, x = (V) => {
      V.preventDefault(), c = V.clientX, g = V.clientY, M = window.innerWidth, _ = window.innerHeight, document.addEventListener("mousemove", C), document.addEventListener("mouseup", v);
    };
    return a.addEventListener("mousedown", x), () => {
      a.removeEventListener("mousedown", x), document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", v);
    };
  }, [t, n, i, o, l]), /* @__PURE__ */ r(
    "div",
    {
      id: "WindowResizer",
      className: [d, e, "no-drag"].join(" ").trim(),
      ref: u,
      ...s
    }
  );
}, k5 = Y(t5), Ce = (e, t) => {
  if (e == null) return null;
  const n = String(e);
  return t.trim ? n.trim() : n;
}, Te = (e) => ({ isValid: (i) => {
  const o = Ce(i, e);
  return o === null || o === "" ? !e.required : !(typeof e.minLength == "number" && o.length < e.minLength || typeof e.maxLength == "number" && o.length > e.maxLength || e.pattern && !e.pattern.test(o));
}, getErrorCode: (i) => {
  const o = Ce(i, e);
  return o === null || o === "" ? e.required ? "required" : null : typeof e.minLength == "number" && o.length < e.minLength ? "too_short" : typeof e.maxLength == "number" && o.length > e.maxLength ? "too_long" : e.pattern && !e.pattern.test(o) ? "invalid" : null;
} }), he = (e) => {
  if (e == null || e === "") return null;
  const t = typeof e == "string" ? Number(e) : e;
  return Number.isFinite(t) ? t : null;
}, J1 = (e) => ({ isValid: (i) => {
  const o = he(i);
  return o === null ? !e.required : !(typeof e.min == "number" && o < e.min || typeof e.max == "number" && o > e.max || e.integer && !Number.isInteger(o));
}, getErrorCode: (i) => {
  const o = he(i);
  return o === null ? e.required ? "required" : null : typeof e.min == "number" && o < e.min ? "less_than_min" : typeof e.max == "number" && o > e.max ? "greater_than_max" : e.integer && !Number.isInteger(o) ? "not_integer" : null;
} }), R5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M5 3.5C5 3.22386 5.22386 3 5.5 3C5.77614 3 6 3.22386 6 3.5V8.08535C6.5826 8.29127 7 8.84689 7 9.5C7 10.1531 6.5826 10.7087 6 10.9146V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V10.9146C4.4174 10.7087 4 10.1531 4 9.5C4 8.84689 4.4174 8.29127 5 8.08535V3.5ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM10 12.5C10 12.7761 10.2239 13 10.5 13C10.7761 13 11 12.7761 11 12.5V7.91465C11.5826 7.70873 12 7.15311 12 6.5C12 5.84689 11.5826 5.29127 11 5.08535V3.5C11 3.22386 10.7761 3 10.5 3C10.2239 3 10 3.22386 10 3.5V5.08535C9.4174 5.29127 9 5.84689 9 6.5C9 7.15311 9.4174 7.70873 10 7.91465V12.5ZM10 6.5C10 6.77614 10.2239 7 10.5 7C10.7761 7 11 6.77614 11 6.5C11 6.22386 10.7761 6 10.5 6C10.2239 6 10 6.22386 10 6.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M8 5.5C8 5.22386 8.22386 5 8.5 5C8.77614 5 9 5.22386 9 5.5V12.05C10.1411 12.2816 11 13.2905 11 14.5C11 15.7095 10.1411 16.7184 9 16.95V18.5C9 18.7761 8.77614 19 8.5 19C8.22386 19 8 18.7761 8 18.5V16.95C6.85888 16.7184 6 15.7095 6 14.5C6 13.2905 6.85888 12.2816 8 12.05V5.5ZM7 14.5C7 13.6716 7.67157 13 8.5 13C9.32843 13 10 13.6716 10 14.5C10 15.3284 9.32843 16 8.5 16C7.67157 16 7 15.3284 7 14.5ZM15 18.5C15 18.7761 15.2239 19 15.5 19C15.7761 19 16 18.7761 16 18.5V11.95C17.1411 11.7184 18 10.7095 18 9.5C18 8.29052 17.1411 7.28164 16 7.05001V5.5C16 5.22386 15.7761 5 15.5 5C15.2239 5 15 5.22386 15 5.5V7.05001C13.8589 7.28164 13 8.29052 13 9.5C13 10.7095 13.8589 11.7184 15 11.95V18.5ZM14 9.5C14 10.3284 14.6716 11 15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7 4.5C7 4.22386 7.22386 4 7.5 4C7.77614 4 8 4.22386 8 4.5V12C8 12.0167 7.99918 12.0332 7.99758 12.0495C9.1399 12.2802 10 13.2897 10 14.5C10 15.7103 9.1399 16.7198 7.99758 16.9505C7.99918 16.9668 8 16.9833 8 17V19.5C8 19.7761 7.77614 20 7.5 20C7.22386 20 7 19.7761 7 19.5V17C7 16.9833 7.00082 16.9668 7.00242 16.9505C5.86009 16.7198 5 15.7103 5 14.5C5 13.2897 5.86009 12.2802 7.00242 12.0495C7.00082 12.0332 7 12.0167 7 12V4.5ZM9 14.5C9 15.3284 8.32843 16 7.5 16C6.67157 16 6 15.3284 6 14.5C6 13.6716 6.67157 13 7.5 13C8.32843 13 9 13.6716 9 14.5ZM16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5V12C17 11.9833 16.9992 11.9668 16.9976 11.9505C18.1399 11.7198 19 10.7103 19 9.5C19 8.28967 18.1399 7.28022 16.9976 7.04952C16.9992 7.03323 17 7.01671 17 7V4.5C17 4.22386 16.7761 4 16.5 4C16.2239 4 16 4.22386 16 4.5V7C16 7.01671 16.0008 7.03323 16.0024 7.04952C14.8601 7.28022 14 8.28967 14 9.5C14 10.7103 14.8601 11.7198 16.0024 11.9505C16.0008 11.9668 16 11.9833 16 12V19.5ZM18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11C17.3284 11 18 10.3284 18 9.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `adjust icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, O5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M2.9995 2.99992L3.25696 1.97007C3.32008 1.71758 3.67891 1.71758 3.74203 1.97007L3.9995 2.99992L5.02936 3.25739C5.28184 3.32051 5.28184 3.67934 5.02936 3.74246L3.9995 3.99992L3.74203 5.02978C3.67891 5.28227 3.32008 5.28227 3.25696 5.02978L2.9995 3.99992L1.96964 3.74246C1.71715 3.67934 1.71715 3.32051 1.96964 3.25739L2.9995 2.99992ZM5.06107 7.48456L6.99952 6.99995L7.48413 5.0615L7.54235 4.82864L7.64768 4.4073L7.68908 4.24173C7.76987 3.91855 8.22917 3.91855 8.30997 4.24173L8.35136 4.4073L8.4567 4.82864L8.51491 5.0615L8.99952 6.99995L10.938 7.48456L11.1708 7.54278L11.5922 7.64811L11.7577 7.6895C12.0809 7.7703 12.0809 8.2296 11.7577 8.3104L11.5922 8.35179L11.1708 8.45712L10.938 8.51534L8.99952 8.99995L8.51491 10.9384L8.45669 11.1713L8.35136 11.5926L8.30997 11.7582C8.22917 12.0814 7.76987 12.0814 7.68908 11.7582L7.64768 11.5926L7.54235 11.1713L7.48413 10.9384L6.99952 8.99995L5.06107 8.51534L4.82821 8.45712L4.40688 8.35179L4.2413 8.31039C3.91812 8.2296 3.91812 7.7703 4.2413 7.6895L4.40688 7.64811L4.82821 7.54278L5.06107 7.48456ZM6.1749 9.82457L3.99877 9.28054C2.66562 8.94725 2.66564 7.05264 3.99877 6.71936L6.1749 6.17533L6.71893 3.9992C7.05222 2.66606 8.94683 2.66606 9.28011 3.9992L9.82414 6.17533L12.0003 6.71936C13.3334 7.05265 13.3334 8.94725 12.0003 9.28054L9.82414 9.82457L9.28011 12.0007C8.94682 13.3338 7.05222 13.3338 6.71893 12.0007L6.1749 9.82457ZM12.257 10.9701L11.9995 11.9999L10.9697 12.2574C10.7172 12.3205 10.7172 12.6794 10.9697 12.7425L11.9995 12.9999L12.257 14.0298C12.3201 14.2823 12.6789 14.2823 12.7421 14.0298L12.9995 12.9999L14.0294 12.7425C14.2819 12.6794 14.2819 12.3205 14.0294 12.2574L12.9995 11.9999L12.7421 10.9701C12.6789 10.7176 12.3201 10.7176 12.257 10.9701Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M6.90012 6.89939L7.18967 5.74117C7.27047 5.41798 7.72977 5.41798 7.81056 5.74117L8.10012 6.89939L9.25834 7.18894C9.58152 7.26974 9.58152 7.72904 9.25834 7.80983L8.10012 8.09939L7.81056 9.2576C7.72977 9.58079 7.27047 9.58079 7.18967 9.2576L6.90012 8.09939L5.7419 7.80983C5.41872 7.72904 5.41872 7.26974 5.7419 7.18894L6.90012 6.89939ZM15.9001 15.9001L16.1897 14.7419C16.2705 14.4187 16.7298 14.4187 16.8106 14.7419L17.1001 15.9001L18.2584 16.1897C18.5815 16.2705 18.5815 16.7298 18.2584 16.8106L17.1001 17.1001L16.8106 18.2584C16.7298 18.5815 16.2705 18.5815 16.1897 18.2584L15.9001 17.1001L14.7419 16.8106C14.4187 16.7298 14.4187 16.2705 14.7419 16.1897L15.9001 15.9001ZM10.36 7.21306L9.68571 9.68554L7.21323 10.3599C5.54297 10.8154 5.54296 13.1845 7.21323 13.6401L9.68571 14.3144L10.36 16.7868C10.8156 18.4571 13.1847 18.4571 13.6402 16.7868L14.3145 14.3144L16.787 13.6401C18.4573 13.1845 18.4573 10.8154 16.787 10.3599L14.3145 9.68554L13.6402 7.21307C13.1847 5.5428 10.8156 5.54279 10.36 7.21306ZM11.3248 7.47618L10.5001 10.5L7.47635 11.3246C6.78859 11.5122 6.78859 12.4877 7.47635 12.6753L10.5001 13.5L11.3248 16.5237C11.5124 17.2115 12.4879 17.2115 12.6755 16.5237L13.5001 13.5L16.5239 12.6753C17.2117 12.4877 17.2117 11.5122 16.5239 11.3246L13.5001 10.5L12.6755 7.47618C12.4879 6.78842 11.5124 6.78842 11.3248 7.47618Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M4.69997 4.69997L5.0149 3.44026C5.14114 2.93528 5.8588 2.93528 5.98504 3.44026L6.29997 4.69997L7.55969 5.0149C8.06466 5.14114 8.06466 5.8588 7.55969 5.98504L6.29997 6.29997L5.98504 7.55969C5.8588 8.06466 5.14114 8.06466 5.0149 7.55969L4.69997 6.29997L3.44026 5.98504C2.93528 5.8588 2.93528 5.14114 3.44026 5.0149L4.69997 4.69997ZM9.19113 9.1911L10.3078 5.28293C10.794 3.58094 13.206 3.58095 13.6923 5.28294L14.8089 9.1911L18.7171 10.3077C20.4191 10.794 20.4191 13.206 18.7171 13.6923L14.8089 14.8089L13.6923 18.7171C13.206 20.4191 10.794 20.4191 10.3078 18.7171L9.19113 14.8089L5.28296 13.6923C3.58098 13.206 3.58097 10.794 5.28296 10.3077L9.19113 9.1911ZM10 10L11.2693 5.55765C11.4793 4.8227 12.5208 4.82271 12.7308 5.55766L14 10L18.4424 11.2692C19.1773 11.4792 19.1773 12.5208 18.4424 12.7308L14 14L12.7308 18.4423C12.5208 19.1773 11.4793 19.1773 11.2693 18.4423L10 14L5.55769 12.7308C4.82274 12.5208 4.82273 11.4792 5.55768 11.2692L10 10ZM18.0149 16.4402L17.7 17.6999L16.4403 18.0149C15.9353 18.1411 15.9353 18.8587 16.4403 18.985L17.7 19.2999L18.0149 20.5596C18.1412 21.0646 18.8588 21.0646 18.9851 20.5596L19.3 19.2999L20.5597 18.985C21.0647 18.8587 21.0647 18.1411 20.5597 18.0149L19.3 17.6999L18.9851 16.4402C18.8588 15.9352 18.1412 15.9352 18.0149 16.4402Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `ai icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, $e = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11.7773 4.084C12.0071 4.23717 12.0692 4.54761 11.916 4.77737L7.91603 10.7774C7.83293 10.902 7.69834 10.9828 7.54927 10.9976C7.4002 11.0123 7.25237 10.9595 7.14645 10.8536L4.14645 7.85358C3.95118 7.65831 3.95118 7.34173 4.14645 7.14647C4.34171 6.95121 4.65829 6.95121 4.85355 7.14647L7.42229 9.7152L11.084 4.22267C11.2372 3.99291 11.5476 3.93082 11.7773 4.084Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M15.2519 8.56819C15.4905 8.70733 15.571 9.01349 15.4319 9.25202L11.9319 15.252C11.8498 15.3928 11.7041 15.4848 11.5416 15.4983C11.3792 15.5119 11.2203 15.4454 11.1159 15.3202L8.6159 12.3202C8.43912 12.108 8.46778 11.7928 8.67992 11.616C8.89206 11.4392 9.20734 11.4679 9.38412 11.68L11.4275 14.1321L14.5681 8.74815C14.7073 8.50962 15.0134 8.42905 15.2519 8.56819Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M16.765 7.07607C16.9992 7.22242 17.0704 7.5309 16.924 7.76507L11.924 15.7651C11.8366 15.9049 11.686 15.9926 11.5212 15.9996C11.3565 16.0066 11.1989 15.932 11.1 15.8001L8.10003 11.7999C7.93434 11.579 7.97912 11.2656 8.20004 11.0999C8.42095 10.9343 8.73435 10.979 8.90003 11.2L11.4625 14.6167L16.076 7.23507C16.2224 7.0009 16.5309 6.92971 16.765 7.07607Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `Check icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, Ae = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M10.4751 7.47486C10.6704 7.2796 10.6704 6.96302 10.4751 6.76775C10.2798 6.57249 9.96326 6.57249 9.768 6.76775L8.00023 8.53552L6.23246 6.76775C6.0372 6.57249 5.72062 6.57249 5.52535 6.76775C5.33009 6.96302 5.33009 7.2796 5.52535 7.47486L7.64668 9.59618L8.00023 9.94973L8.35378 9.59618L10.4751 7.47486Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M9.64645 11.1464C9.84171 10.9512 10.1583 10.9512 10.3536 11.1464L12 12.7929L13.6464 11.1464C13.8417 10.9512 14.1583 10.9512 14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536L9.64645 11.8536C9.45118 11.6583 9.45118 11.3417 9.64645 11.1464Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.64645 10.1464C7.84171 9.95118 8.15829 9.95118 8.35355 10.1464L12 13.7929L15.6464 10.1464C15.8417 9.95118 16.1583 9.95118 16.3536 10.1464C16.5488 10.3417 16.5488 10.6583 16.3536 10.8536L12.3536 14.8536C12.1583 15.0488 11.8417 15.0488 11.6464 14.8536L7.64645 10.8536C7.45118 10.6583 7.45118 10.3417 7.64645 10.1464Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `chevronDown icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, n5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M6.76754 5.52511C6.9628 5.32985 7.27938 5.32985 7.47465 5.52511L9.59596 7.64643L9.94952 7.99999L9.59596 8.35354L7.47465 10.4749C7.27938 10.6701 6.9628 10.6701 6.76754 10.4749C6.57228 10.2796 6.57228 9.96302 6.76754 9.76775L8.53531 7.99999L6.76754 6.23222C6.57228 6.03695 6.57228 5.72037 6.76754 5.52511Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11.1464 9.64645C11.3417 9.45118 11.6583 9.45118 11.8536 9.64645L13.8536 11.6464C14.0488 11.8417 14.0488 12.1583 13.8536 12.3536L11.8536 14.3536C11.6583 14.5488 11.3417 14.5488 11.1464 14.3536C10.9512 14.1583 10.9512 13.8417 11.1464 13.6464L12.7929 12L11.1464 10.3536C10.9512 10.1583 10.9512 9.84171 11.1464 9.64645Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M10.1464 16.3536C9.95118 16.1583 9.95118 15.8417 10.1464 15.6464L13.7929 12L10.1464 8.35355C9.95118 8.15829 9.95118 7.84171 10.1464 7.64645C10.3417 7.45118 10.6583 7.45118 10.8536 7.64645L14.8536 11.6464C15.0488 11.8417 15.0488 12.1583 14.8536 12.3536L10.8536 16.3536C10.6583 16.5488 10.3417 16.5488 10.1464 16.3536Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `chevronRight icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, S5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M4.14645 4.14645C4.34171 3.95118 4.65829 3.95118 4.85355 4.14645L8 7.29289L11.1464 4.14645C11.3417 3.95118 11.6583 3.95118 11.8536 4.14645C12.0488 4.34171 12.0488 4.65829 11.8536 4.85355L8.70711 8L11.8536 11.1464C12.0488 11.3417 12.0488 11.6583 11.8536 11.8536C11.6583 12.0488 11.3417 12.0488 11.1464 11.8536L8 8.70711L4.85355 11.8536C4.65829 12.0488 4.34171 12.0488 4.14645 11.8536C3.95118 11.6583 3.95118 11.3417 4.14645 11.1464L7.29289 8L4.14645 4.85355C3.95118 4.65829 3.95118 4.34171 4.14645 4.14645Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M16.1465 7.14653C16.3417 6.95127 16.6583 6.95127 16.8535 7.14653C17.0487 7.3418 17.0487 7.65833 16.8535 7.85356L12.707 12L16.8535 16.1465C17.0487 16.3418 17.0487 16.6583 16.8535 16.8536C16.6583 17.0488 16.3417 17.0487 16.1465 16.8536L12 12.7071L7.85352 16.8536C7.65828 17.0488 7.34174 17.0487 7.14648 16.8536C6.95123 16.6583 6.95126 16.3418 7.14648 16.1465L11.293 12L7.14648 7.85356C6.95124 7.65831 6.95126 7.34179 7.14648 7.14653C7.34175 6.95127 7.65825 6.95127 7.85352 7.14653L12 11.293L16.1465 7.14653Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M16.1465 7.14655C16.3417 6.95128 16.6583 6.95128 16.8535 7.14655C17.0487 7.34182 17.0487 7.65835 16.8535 7.85358L12.707 12.0001L16.8535 16.1465C17.0486 16.3418 17.0487 16.6584 16.8535 16.8536C16.6583 17.0488 16.3417 17.0487 16.1465 16.8536L12 12.7071L7.85352 16.8536C7.65829 17.0488 7.34174 17.0487 7.14648 16.8536C6.95124 16.6583 6.95127 16.3418 7.14648 16.1465L11.293 12.0001L7.14648 7.85358C6.95124 7.65833 6.95127 7.34181 7.14648 7.14655C7.34175 6.95129 7.65826 6.95129 7.85352 7.14655L12 11.293L16.1465 7.14655Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `Close icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, U5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.5 6C6.67157 6 6 6.67157 6 7.5V13.5C6 14.3284 6.67157 15 7.5 15H9V16.5C9 17.3284 9.67157 18 10.5 18H16.5C17.3284 18 18 17.3284 18 16.5V10.5C18 9.67157 17.3284 9 16.5 9H15V7.5C15 6.67157 14.3284 6 13.5 6H7.5ZM15 10V13.5C15 14.3284 14.3284 15 13.5 15H10V16.5C10 16.7761 10.2239 17 10.5 17H16.5C16.7761 17 17 16.7761 17 16.5V10.5C17 10.2239 16.7761 10 16.5 10H15ZM7 7.5C7 7.22386 7.22386 7 7.5 7H13.5C13.7761 7 14 7.22386 14 7.5V13.5C14 13.7761 13.7761 14 13.5 14H7.5C7.22386 14 7 13.7761 7 13.5V7.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M14.2041 4.01074C15.2128 4.113 16 4.96435 16 6V8H18L18.2041 8.01074C19.2128 8.113 20 8.96435 20 10V18L19.9893 18.2041C19.8938 19.1457 19.1457 19.8938 18.2041 19.9893L18 20H10C8.96435 20 8.113 19.2128 8.01074 18.2041L8 18V16H6C4.96435 16 4.113 15.2128 4.01074 14.2041L4 14V6C4 4.89543 4.89543 4 6 4H14L14.2041 4.01074ZM6 5C5.48232 5 5.05621 5.39333 5.00488 5.89746L5 6V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V6C15 5.48232 14.6067 5.05621 14.1025 5.00488L14 5H6ZM9 18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.48232 18.6067 9.05621 18.1025 9.00488L18 9H16V14L15.9893 14.2041C15.8938 15.1457 15.1457 15.8938 14.2041 15.9893L14 16H9V18Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `copy icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, F5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M8.90012 6H8.87947H8.87865C8.47653 6 8.14462 6 7.87421 6.02209C7.59315 6.04506 7.33481 6.09435 7.09215 6.21799C6.71582 6.40973 6.40985 6.7157 6.21811 7.09203C6.09447 7.33469 6.04518 7.59303 6.02222 7.87408C6.00012 8.1445 6.00012 8.47641 6.00012 8.87852V8.87935V8.89999V9.5C6.00012 9.77614 6.22398 10 6.50012 10C6.77626 10 7.00012 9.77614 7.00012 9.5V8.89999C7.00012 8.47171 7.0005 8.18056 7.01889 7.95552C7.0368 7.73631 7.06927 7.62421 7.10912 7.54601C7.20499 7.35785 7.35797 7.20486 7.54613 7.10899C7.62433 7.06915 7.73643 7.03668 7.95564 7.01877C8.18068 7.00038 8.47183 7 8.90012 7H9.50012C9.77626 7 10.0001 6.77614 10.0001 6.5C10.0001 6.22386 9.77626 6 9.50012 6H8.90012ZM15.1 6H15.1207H15.1215C15.5236 6 15.8555 6 16.1259 6.02209C16.407 6.04506 16.6653 6.09435 16.908 6.21799C17.2843 6.40973 17.5903 6.7157 17.782 7.09203C17.9057 7.33469 17.9549 7.59303 17.9779 7.87408C18 8.1445 18 8.47641 18 8.87852V8.87935V8.89999V9.5C18 9.77614 17.7761 10 17.5 10C17.2239 10 17 9.77614 17 9.5V8.89999C17 8.47171 16.9996 8.18056 16.9812 7.95552C16.9633 7.73631 16.9308 7.62421 16.891 7.54601C16.7951 7.35785 16.6422 7.20486 16.454 7.10899C16.3758 7.06915 16.2637 7.03668 16.0445 7.01877C15.8194 7.00038 15.5283 7 15.1 7H14.5C14.2239 7 14 6.77614 14 6.5C14 6.22386 14.2239 6 14.5 6H15.1ZM15.1207 18H15.1H14.5C14.2239 18 14 17.7761 14 17.5C14 17.2239 14.2239 17 14.5 17H15.1C15.5283 17 15.8194 16.9996 16.0445 16.9812C16.2637 16.9633 16.3758 16.9308 16.454 16.891C16.6422 16.7951 16.7951 16.6422 16.891 16.454C16.9308 16.3758 16.9633 16.2637 16.9812 16.0445C16.9996 15.8194 17 15.5283 17 15.1V14.5C17 14.2239 17.2239 14 17.5 14C17.7761 14 18 14.2239 18 14.5V15.1V15.1207V15.1215C18 15.5236 18 15.8555 17.9779 16.1259C17.9549 16.407 17.9057 16.6653 17.782 16.908C17.5903 17.2843 17.2843 17.5903 16.908 17.782C16.6653 17.9057 16.407 17.9549 16.1259 17.9779C15.8555 18 15.5236 18 15.1215 18H15.1207ZM8.89999 18H8.87935H8.87852C8.47641 18 8.1445 18 7.87408 17.9779C7.59303 17.9549 7.33469 17.9057 7.09203 17.782C6.7157 17.5903 6.40973 17.2843 6.21799 16.908C6.09435 16.6653 6.04506 16.407 6.02209 16.1259C6 15.8555 6 15.5236 6 15.1215V15.1207V15.1V14.5C6 14.2239 6.22386 14 6.5 14C6.77614 14 7 14.2239 7 14.5V15.1C7 15.5283 7.00038 15.8194 7.01877 16.0445C7.03668 16.2637 7.06915 16.3758 7.10899 16.454C7.20486 16.6422 7.35785 16.7951 7.54601 16.891C7.62421 16.9308 7.73631 16.9633 7.95552 16.9812C8.18056 16.9996 8.47171 17 8.89999 17H9.5C9.77614 17 10 17.2239 10 17.5C10 17.7761 9.77614 18 9.5 18H8.89999Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `corners icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, r5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M11 12H5V10H11V12ZM11 9H5V7H11V9ZM11 6H5V4H11V6Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `dragHandle icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, j5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.5 7H13.5C13.7761 7 14 7.22386 14 7.5V9H10.5C9.67157 9 9 9.67157 9 10.5V14H7.5C7.22386 14 7 13.7761 7 13.5V7.5C7 7.22386 7.22386 7 7.5 7ZM16.5 9H15V7.5C15 6.67157 14.3284 6 13.5 6H7.5C6.67157 6 6 6.67157 6 7.5V13.5C6 14.3284 6.67157 15 7.5 15H9V16.5C9 17.3284 9.67157 18 10.5 18H16.5C17.3284 18 18 17.3284 18 16.5V10.5C18 9.67157 17.3284 9 16.5 9ZM10.5 10C10.2239 10 10 10.2239 10 10.5V16.5C10 16.7761 10.2239 17 10.5 17H16.5C16.7761 17 17 16.7761 17 16.5V10.5C17 10.2239 16.7761 10 16.5 10H10.5ZM14 12C14 11.7239 13.7761 11.5 13.5 11.5C13.2239 11.5 13 11.7239 13 12V13H12C11.7239 13 11.5 13.2239 11.5 13.5C11.5 13.7761 11.7239 14 12 14H13V15C13 15.2761 13.2239 15.5 13.5 15.5C13.7761 15.5 14 15.2761 14 15V14H15C15.2761 14 15.5 13.7761 15.5 13.5C15.5 13.2239 15.2761 13 15 13H14V12Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `duplicate icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, P5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M17.5207 6.46951C16.8864 5.83521 15.8576 5.8365 15.2249 6.47238L13.3544 8.35235L13.0009 8.70765L12.6464 8.35326L12.6362 8.34308C12.2848 7.99165 11.7149 7.99167 11.3635 8.34312L11.3434 8.36324C10.9919 8.71473 10.9919 9.28459 11.3434 9.63606L11.8535 10.1461L11.8535 10.1461L13.8535 12.1461L13.8535 12.1461L14.3636 12.6563C14.7151 13.0078 15.2849 13.0078 15.6364 12.6563L15.6565 12.6362C16.0079 12.2848 16.0079 11.7149 15.6565 11.3634L15.6464 11.3534L15.2938 11.0007L15.6455 10.6472L17.5236 8.75953C18.1541 8.12589 18.1528 7.10155 17.5207 6.46951ZM14.5161 5.76705C15.539 4.73897 17.2023 4.73689 18.2278 5.7624C19.2497 6.78427 19.2518 8.44039 18.2325 9.46484L16.6622 11.0432C17.0867 11.7707 16.9871 12.7198 16.3636 13.3433L16.3435 13.3634C15.6015 14.1054 14.3984 14.1054 13.6565 13.3633L13.4998 13.2067L7.85342 18.8489C7.75967 18.9425 7.63254 18.9952 7.5 18.9952H5.50439C5.22867 18.9952 5.00499 18.772 5.00439 18.4963L5 16.5007C4.99971 16.3677 5.05241 16.2401 5.14645 16.1461L10.7928 10.4997L10.6363 10.3432C9.89426 9.60121 9.89424 8.39816 10.6363 7.65614L10.6564 7.63602C11.2794 7.01301 12.2274 6.9131 12.9547 7.3363L14.5161 5.76705ZM11.4999 11.2068L12.7927 12.4995L7.293 17.9952L6.00329 17.9952L6.00046 16.7063L11.4999 11.2068Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M19.3966 4.60357C18.6253 3.83234 17.3749 3.83234 16.6037 4.60357L13.3536 7.8537L13 8.20727L12.6464 7.85367L12.601 7.80826C12.2691 7.47628 11.7309 7.47627 11.3989 7.80823L11.3083 7.89886C10.9763 8.2308 10.9763 8.76899 11.3083 9.10094L11.8537 9.64635L14.3537 12.1463L14.8991 12.6917C15.231 13.0237 15.7692 13.0237 16.1012 12.6918L16.1918 12.6011C16.5238 12.2692 16.5237 11.7309 16.1918 11.399L16.1465 11.3537L15.7929 11.0002L16.1464 10.6466L19.3966 7.39647C20.1678 6.62523 20.1678 5.37481 19.3966 4.60357ZM15.8966 3.89647C17.0583 2.73471 18.9419 2.73471 20.1037 3.89647C21.2654 5.05823 21.2654 6.94181 20.1037 8.10357L17.1706 11.0367C17.6058 11.749 17.5152 12.6919 16.8989 13.3082L16.8083 13.3989C16.0858 14.1213 14.9144 14.1213 14.192 13.3989L14.0001 13.207L6.64645 20.5607C6.36514 20.842 5.98361 21 5.58579 21H3.5C3.22386 21 3 20.7762 3 20.5V18.4142C3 18.0164 3.15804 17.6349 3.43934 17.3536L10.793 9.9999L10.6012 9.80805C9.87869 9.08558 9.87869 7.91422 10.6012 7.19175L10.6918 7.10112C11.3081 6.48477 12.2512 6.39424 12.9635 6.82952L15.8966 3.89647ZM11.5001 10.707L4.14645 18.0607C4.05268 18.1544 4 18.2816 4 18.4142V20H5.58579C5.71839 20 5.84557 19.9473 5.93934 19.8536L13.293 12.4999L11.5001 10.707Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `eyeDropper icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, q5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM7.37077 9.13353V9.2074H8.31679V9.13353C8.31869 8.93278 8.34236 8.76422 8.38782 8.62785C8.43517 8.48959 8.50714 8.36933 8.60373 8.26706C8.70221 8.16478 8.82816 8.0663 8.98157 7.9716C9.15581 7.86744 9.30638 7.74906 9.43327 7.61649C9.56017 7.48391 9.6577 7.3324 9.72589 7.16194C9.79596 6.99149 9.831 6.79831 9.831 6.5824C9.831 6.26232 9.75335 5.98581 9.59804 5.75285C9.44464 5.518 9.22967 5.33713 8.95316 5.21024C8.67854 5.08334 8.36036 5.0199 7.99861 5.0199C7.66717 5.0199 7.36414 5.0805 7.08952 5.20172C6.81679 5.32293 6.5971 5.50475 6.43043 5.74717C6.26566 5.98959 6.17854 6.29073 6.16907 6.65058H7.18043C7.1899 6.47255 7.23346 6.32577 7.31111 6.21024C7.39066 6.09281 7.49009 6.00569 7.60941 5.94887C7.73062 5.89016 7.85846 5.86081 7.99293 5.86081C8.13876 5.86081 8.27039 5.89111 8.38782 5.95172C8.50714 6.01232 8.60183 6.09755 8.67191 6.2074C8.74198 6.31725 8.77702 6.44698 8.77702 6.5966C8.77702 6.72918 8.75051 6.84944 8.69748 6.9574C8.64445 7.06346 8.57153 7.16005 8.47873 7.24717C8.38782 7.3324 8.2846 7.411 8.16907 7.48297C8.00051 7.58713 7.85751 7.70172 7.74009 7.82672C7.62267 7.94982 7.53176 8.1127 7.46736 8.31535C7.40486 8.518 7.37267 8.79073 7.37077 9.13353ZM7.42475 10.7983C7.54786 10.9195 7.69464 10.9801 7.86509 10.9801C7.97873 10.9801 8.08195 10.9527 8.17475 10.8977C8.26945 10.8409 8.3452 10.7652 8.40202 10.6705C8.46073 10.5758 8.49009 10.4707 8.49009 10.3551C8.49009 10.1847 8.42759 10.0388 8.30259 9.91762C8.17948 9.79641 8.03365 9.73581 7.86509 9.73581C7.69464 9.73581 7.54786 9.79641 7.42475 9.91762C7.30164 10.0388 7.24009 10.1847 7.24009 10.3551C7.24009 10.5294 7.30164 10.6771 7.42475 10.7983Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M12.5 4C16.6421 4 20 7.35786 20 11.5C20 15.6421 16.6421 19 12.5 19C8.35786 19 5 15.6421 5 11.5C5 7.35786 8.35786 4 12.5 4ZM12.5 5C8.91015 5 6 7.91015 6 11.5C6 15.0899 8.91015 18 12.5 18C16.0899 18 19 15.0899 19 11.5C19 7.91015 16.0899 5 12.5 5ZM12.5 14C12.9142 14 13.25 14.3358 13.25 14.75C13.25 15.1642 12.9142 15.5 12.5 15.5C12.0858 15.5 11.75 15.1642 11.75 14.75C11.75 14.3358 12.0858 14 12.5 14ZM12.5 8C13.6046 8 14.5 8.89543 14.5 10C14.5 10.8747 13.9387 11.6167 13.1582 11.8887C13.0956 11.9105 13.0468 11.9454 13.0195 11.9756C13.0076 11.9888 13.0027 11.9981 13.001 12.002L13 12.0039V12.5029C13 12.7791 12.7761 13.0029 12.5 13.0029C12.2239 13.0029 12 12.7791 12 12.5029V12.0029C12.0001 11.4251 12.4633 11.0718 12.8291 10.9443C13.2203 10.808 13.5 10.4362 13.5 10C13.5 9.44772 13.0523 9 12.5 9C11.9477 9 11.5 9.44772 11.5 10C11.5 10.2761 11.2761 10.5 11 10.5C10.7239 10.5 10.5 10.2761 10.5 10C10.5 8.89543 11.3954 8 12.5 8Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M11.5 15.5C11.9142 15.5 12.25 15.8358 12.25 16.25C12.25 16.6642 11.9142 17 11.5 17C11.0858 17 10.75 16.6642 10.75 16.25C10.75 15.8358 11.0858 15.5 11.5 15.5ZM11.5 7C13.1569 7 14.5 8.34315 14.5 10C14.5 11.0383 13.9706 11.7641 13.1777 12.1523C12.4629 12.5024 12 12.9813 12 13.5V14C12 14.2761 11.7761 14.5 11.5 14.5C11.2239 14.5 11 14.2761 11 14V13.5C11 12.362 11.9642 11.6325 12.7373 11.2539C13.207 11.024 13.5 10.6352 13.5 10C13.5 8.89543 12.6046 8 11.5 8C10.3954 8 9.5 8.89543 9.5 10C9.5 10.2761 9.27614 10.5 9 10.5C8.72386 10.5 8.5 10.2761 8.5 10C8.5 8.34315 9.84315 7 11.5 7Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `Help icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, z5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M7.66782 2.79524L7.33564 2.42154V2.42154L7.66782 2.79524ZM8.33218 2.79524L8.66436 2.42154V2.42154L8.33218 2.79524ZM3.66782 6.3508L4 6.7245L4 6.7245L3.66782 6.3508ZM12.3322 6.3508L12.6644 5.97709L12.6644 5.97709L12.3322 6.3508ZM8 3.16895L8.66436 2.42154C8.28548 2.08475 7.71452 2.08475 7.33564 2.42154L8 3.16895ZM4 6.7245L8 3.16895L7.33564 2.42154L3.33564 5.97709L4 6.7245ZM4 6.7245H4L3.33564 5.97709C3.12215 6.16686 3 6.43886 3 6.7245H4ZM4 12V6.7245H3V12H4ZM4 12H4H3C3 12.5523 3.44772 13 4 13V12ZM6 12H4V13H6V12ZM7 12V8.99997H6V12H7ZM7 8.99997V7.99997C6.44772 7.99997 6 8.44769 6 8.99997H7ZM7 8.99997H9V7.99997H7V8.99997ZM9 8.99997H10C10 8.44769 9.55228 7.99997 9 7.99997V8.99997ZM9 8.99997V12H10V8.99997H9ZM12 12H10V13H12V12ZM12 12V13C12.5523 13 13 12.5523 13 12H12ZM12 6.7245V12H13V6.7245H12ZM12 6.7245L12 6.7245H13C13 6.43886 12.8779 6.16686 12.6644 5.97709L12 6.7245ZM8 3.16895L12 6.7245L12.6644 5.97709L8.66436 2.42154L8 3.16895ZM9 12C9 12.5523 9.44771 13 10 13V12H9ZM6 13C6.55228 13 7 12.5523 7 12H6V13Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11 17C11 17.5523 10.5523 18 10 18H7C6.44772 18 6 17.5523 6 17V10C6 9.69622 6.13809 9.4089 6.3753 9.21913L11.3753 5.21913C11.7405 4.92696 12.2595 4.92696 12.6247 5.21913L17.6247 9.21913C17.8619 9.4089 18 9.69622 18 10V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V13H11V17ZM8 17H7V16V10L12 6L17 10V16V17H16H15H14V16V13C14 12.4477 13.5523 12 13 12H11C10.4477 12 10 12.4477 10 13V16V17H9H8Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M10 19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V10C4 9.70808 4.12756 9.43073 4.34921 9.24074L11.3492 3.24074C11.7237 2.91975 12.2763 2.91975 12.6508 3.24074L19.6508 9.24074C19.8724 9.43073 20 9.70808 20 10V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V13H10V19ZM6 19H5V18V10L12 4L19 10V18V19H18H16H15V18V13C15 12.4477 14.5523 12 14 12H10C9.44772 12 9 12.4477 9 13V18V19H8H6Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `home icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, W5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H16C17.1046 18 18 17.1046 18 16V9.5C18 9.22386 17.7761 9 17.5 9C17.2239 9 17 9.22386 17 9.5V16C17 16.5523 16.5523 17 16 17H8C7.44771 17 7 16.5523 7 16V8C7 7.44771 7.44771 7 8 7H11C11.2761 7 11.5 6.77614 11.5 6.5C11.5 6.22386 11.2761 6 11 6H8ZM17 6C13.9624 6 11.5 8.46243 11.5 11.5V13.2929L9.85355 11.6465C9.65829 11.4512 9.34171 11.4512 9.14645 11.6465C8.95119 11.8417 8.95119 12.1583 9.14645 12.3535L11.6465 14.8535C11.8417 15.0488 12.1583 15.0488 12.3535 14.8535L14.8535 12.3535C15.0488 12.1583 15.0488 11.8417 14.8535 11.6465C14.6583 11.4512 14.3417 11.4512 14.1465 11.6465L12.5 13.2929V11.5C12.5 9.01472 14.5147 7 17 7H17.5C17.7761 7 18 6.77614 18 6.5C18 6.22386 17.7761 6 17.5 6H17Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `impors icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, K5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM7.48297 10.5355C7.48297 10.8195 7.71318 11.0497 7.99717 11.0497C8.28116 11.0497 8.51137 10.8195 8.51137 10.5355V7.20027C8.51137 6.91629 8.28116 6.68607 7.99717 6.68607C7.71318 6.68607 7.48297 6.91629 7.48297 7.20027V10.5355ZM7.57956 5.90482C7.69698 6.01277 7.83713 6.06675 8.00001 6.06675C8.16478 6.06675 8.30493 6.01277 8.42047 5.90482C8.53789 5.79497 8.5966 5.66334 8.5966 5.50993C8.5966 5.35463 8.53789 5.223 8.42047 5.11505C8.30493 5.0052 8.16478 4.95027 8.00001 4.95027C7.83713 4.95027 7.69698 5.0052 7.57956 5.11505C7.46213 5.223 7.40342 5.35463 7.40342 5.50993C7.40342 5.66334 7.46213 5.79497 7.57956 5.90482Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M12.5 4C16.6421 4 20 7.35786 20 11.5C20 15.6421 16.6421 19 12.5 19C8.35786 19 5 15.6421 5 11.5C5 7.35786 8.35786 4 12.5 4ZM12.5 5C8.91015 5 6 7.91015 6 11.5C6 15.0899 8.91015 18 12.5 18C16.0899 18 19 15.0899 19 11.5C19 7.91015 16.0899 5 12.5 5ZM12.5 11C12.7761 11 13 11.2239 13 11.5V14.5C13 14.7761 12.7761 15 12.5 15C12.2239 15 12 14.7761 12 14.5V11.5C12 11.2239 12.2239 11 12.5 11ZM12.5 8C12.9142 8 13.25 8.33579 13.25 8.75C13.25 9.16421 12.9142 9.5 12.5 9.5C12.0858 9.5 11.75 9.16421 11.75 8.75C11.75 8.33579 12.0858 8 12.5 8Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `info icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, Y5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M12.5 4C16.6421 4 20 7.35786 20 11.5C20 15.6421 16.6421 19 12.5 19C8.35786 19 5 15.6421 5 11.5C5 7.35786 8.35786 4 12.5 4ZM12.5 5C8.91015 5 6 7.91015 6 11.5C6 15.0899 8.91015 18 12.5 18C16.0899 18 19 15.0899 19 11.5C19 7.91015 16.0899 5 12.5 5ZM12.5 8.5C12.7761 8.5 13 8.72386 13 9V11H15C15.2761 11 15.5 11.2239 15.5 11.5C15.5 11.7761 15.2761 12 15 12H13V14C13 14.2761 12.7761 14.5 12.5 14.5C12.2239 14.5 12 14.2761 12 14V12H10C9.72386 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.72386 11 10 11H12V9C12 8.72386 12.2239 8.5 12.5 8.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M12.5 3C17.1944 3 21 6.80558 21 11.5C21 16.1944 17.1944 20 12.5 20C7.80558 20 4 16.1944 4 11.5C4 6.80558 7.80558 3 12.5 3ZM12.5 4C8.35786 4 5 7.35786 5 11.5C5 15.6421 8.35786 19 12.5 19C16.6421 19 20 15.6421 20 11.5C20 7.35786 16.6421 4 12.5 4ZM12.5 7C12.7761 7 13 7.22386 13 7.5V11H16.5C16.7761 11 17 11.2239 17 11.5C17 11.7761 16.7761 12 16.5 12H13V15.5C13 15.7761 12.7761 16 12.5 16C12.2239 16 12 15.7761 12 15.5V12H8.5C8.22386 12 8 11.7761 8 11.5C8 11.2239 8.22386 11 8.5 11H12V7.5C12 7.22386 12.2239 7 12.5 7Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `insert icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, G5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M12 18.9001C8.18921 18.9001 5.09998 15.8109 5.09998 12.0001C5.09998 8.18933 8.18921 5.1001 12 5.1001C15.8107 5.1001 18.9 8.18933 18.9 12.0001C18.9 15.8109 15.8107 18.9001 12 18.9001ZM4.09998 12.0001C4.09998 7.63705 7.63693 4.1001 12 4.1001C16.363 4.1001 19.9 7.63705 19.9 12.0001C19.9 16.3631 16.363 19.9001 12 19.9001C7.63693 19.9001 4.09998 16.3631 4.09998 12.0001ZM9.49998 12.0001C9.22383 12.0001 8.99998 12.224 8.99998 12.5001C8.99998 12.7762 9.22383 13.0001 9.49998 13.0001H14.5C14.7761 13.0001 15 12.7762 15 12.5001C15 12.224 14.7761 12.0001 14.5 12.0001H9.49998ZM9.99998 15.5001C9.99998 15.224 10.2238 15.0001 10.5 15.0001H13.5C13.7761 15.0001 14 15.224 14 15.5001C14 15.7762 13.7761 16.0001 13.5 16.0001H10.5C10.2238 16.0001 9.99998 15.7762 9.99998 15.5001ZM8.49998 9.0001C8.22383 9.0001 7.99998 9.22396 7.99998 9.5001C7.99998 9.77624 8.22383 10.0001 8.49998 10.0001H15.5C15.7761 10.0001 16 9.77624 16 9.5001C16 9.22396 15.7761 9.0001 15.5 9.0001H8.49998Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `filter icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, J5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M12 4.1001C7.63693 4.1001 4.09998 7.63705 4.09998 12.0001C4.09998 16.3631 7.63693 19.9001 12 19.9001C16.363 19.9001 19.9 16.3631 19.9 12.0001C19.9 7.63705 16.363 4.1001 12 4.1001ZM9.49998 12.0001C9.22383 12.0001 8.99998 12.224 8.99998 12.5001C8.99998 12.7762 9.22383 13.0001 9.49998 13.0001H14.5C14.7761 13.0001 15 12.7762 15 12.5001C15 12.224 14.7761 12.0001 14.5 12.0001H9.49998ZM9.99998 15.5001C9.99998 15.224 10.2238 15.0001 10.5 15.0001H13.5C13.7761 15.0001 14 15.224 14 15.5001C14 15.7762 13.7761 16.0001 13.5 16.0001H10.5C10.2238 16.0001 9.99998 15.7762 9.99998 15.5001ZM8.49998 9.0001C8.22383 9.0001 7.99998 9.22396 7.99998 9.5001C7.99998 9.77624 8.22383 10.0001 8.49998 10.0001H15.5C15.7761 10.0001 16 9.77624 16 9.5001C16 9.22396 15.7761 9.0001 15.5 9.0001H8.49998Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `filterFilled icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, Q5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M4.5 6C4.77614 6 5 6.22386 5 6.5L5 17.5C5 17.7761 4.77614 18 4.5 18C4.22386 18 4 17.7761 4 17.5V6.5C4 6.22386 4.22386 6 4.5 6ZM19.5 6C19.7761 6 20 6.22386 20 6.5L20 17.5C20 17.7761 19.7761 18 19.5 18C19.2239 18 19 17.7761 19 17.5L19 6.5C19 6.22386 19.2239 6 19.5 6ZM8.56445 16H9.58008L10.3843 13.7344H13.6196L14.4238 16H15.4395L12.502 8H11.502L8.56445 16ZM13.3145 12.875L12.0332 9.26562H11.9707L10.6894 12.875H13.3145Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `letterSpacing icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, X5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M5 5.5C5 5.22386 5.22386 5 5.5 5H18.5C18.7761 5 19 5.22386 19 5.5C19 5.77614 18.7761 6 18.5 6H5.5C5.22386 6 5 5.77614 5 5.5ZM5 18.5C5 18.2239 5.22386 18 5.5 18H18.5C18.7761 18 19 18.2239 19 18.5C19 18.7761 18.7761 19 18.5 19H5.5C5.22386 19 5 18.7761 5 18.5ZM8.56445 16H9.58008L10.3843 13.7344H13.6196L14.4238 16H15.4395L12.502 8H11.502L8.56445 16ZM13.3145 12.875L12.0332 9.26562H11.9707L10.6894 12.875H13.3145Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `lineHeight icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, e7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M10.4746 8.35362C10.2794 8.54888 10.2794 8.86547 10.4746 9.06073C10.6699 9.25599 10.9865 9.25599 11.1818 9.06073L12.2424 8.00007C13.414 6.8285 13.414 4.929 12.2424 3.75743C11.0708 2.58586 9.17135 2.58586 7.99977 3.75743L6.93911 4.81809C6.74385 5.01335 6.74385 5.32993 6.93911 5.5252C7.13438 5.72046 7.45096 5.72046 7.64622 5.5252L8.70688 4.46454C9.48793 3.68349 10.7543 3.68349 11.5353 4.46454C12.3164 5.24558 12.3164 6.51191 11.5353 7.29296L10.4746 8.35362ZM9.76769 6.23229C9.96295 6.42755 9.96295 6.74413 9.76769 6.93939L6.93926 9.76782C6.744 9.96308 6.42742 9.96308 6.23216 9.76782C6.0369 9.57256 6.03689 9.25597 6.23216 9.06071L9.06058 6.23229C9.25585 6.03702 9.57243 6.03702 9.76769 6.23229ZM5.52502 6.93932C5.72028 7.13458 5.72028 7.45116 5.52502 7.64642L4.46436 8.70708C3.68331 9.48813 3.68331 10.7545 4.46436 11.5355C5.2454 12.3166 6.51173 12.3166 7.29278 11.5355L8.35344 10.4748C8.54871 10.2796 8.86529 10.2796 9.06055 10.4748C9.25581 10.6701 9.25581 10.9867 9.06055 11.182L7.99989 12.2426C6.82832 13.4142 4.92882 13.4142 3.75725 12.2426C2.58568 11.071 2.58568 9.17155 3.75725 7.99998L4.81791 6.93932C5.01317 6.74405 5.32975 6.74405 5.52502 6.93932Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M15.1478 12.855C14.9518 12.6605 14.9506 12.3439 15.145 12.1479L16.3168 10.9668C17.2199 10.0565 17.217 8.58727 16.3102 7.68051C15.3984 6.76867 13.9191 6.7716 13.0109 7.68705L11.855 8.85217C11.6605 9.0482 11.3439 9.04946 11.1479 8.85497C10.9518 8.66048 10.9506 8.3439 11.145 8.14787L12.301 6.98275C13.5993 5.67413 15.7139 5.66994 17.0174 6.97341C18.3135 8.26959 18.3177 10.3698 17.0267 11.6711L15.855 12.8522C15.6605 13.0482 15.3439 13.0495 15.1478 12.855ZM8.85312 11.1461C9.04861 11.3411 9.04896 11.6577 8.85392 11.8532L7.67417 13.0356C6.76663 13.9452 6.76747 15.418 7.67604 16.3266C8.58608 17.2367 10.0618 17.2358 10.9708 16.3248L12.146 15.1469C12.3411 14.9514 12.6576 14.951 12.8531 15.1461C13.0486 15.3411 13.049 15.6577 12.8539 15.8532L11.6787 17.0311C10.3793 18.3334 8.26981 18.3346 6.96894 17.0337C5.67015 15.7349 5.66895 13.6296 6.96626 12.3293L8.14601 11.1469C8.34105 10.9514 8.65764 10.951 8.85312 11.1461ZM14.3535 10.3536C14.5488 10.1583 14.5488 9.84172 14.3535 9.64646C14.1583 9.4512 13.8417 9.4512 13.6464 9.64646L9.64642 13.6465C9.45116 13.8417 9.45116 14.1583 9.64642 14.3536C9.84168 14.5488 10.1583 14.5488 10.3535 14.3536L14.3535 10.3536Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M18.8535 10.8535C20.4295 9.27748 20.4295 6.72232 18.8535 5.14634C17.2776 3.57037 14.7224 3.57036 13.1464 5.14633L10.6464 7.64632C10.4512 7.84158 10.4512 8.15816 10.6464 8.35343C10.8417 8.54869 11.1583 8.54869 11.3535 8.35343L13.8535 5.85344C15.039 4.66799 16.961 4.668 18.1464 5.85344C19.3319 7.0389 19.3319 8.9609 18.1464 10.1464L15.6464 12.6463C15.4512 12.8416 15.4512 13.1582 15.6464 13.3535C15.8417 13.5487 16.1583 13.5487 16.3536 13.3535L18.8535 10.8535ZM5.14646 13.1464C3.57049 14.7224 3.57048 17.2776 5.14646 18.8535C6.72243 20.4295 9.27759 20.4295 10.8536 18.8535L13.3536 16.3536C13.5488 16.1583 13.5488 15.8417 13.3536 15.6464C13.1583 15.4512 12.8417 15.4512 12.6465 15.6464L10.1465 18.1464C8.96101 19.3319 7.03902 19.3319 5.85357 18.1464C4.66811 16.961 4.66812 15.039 5.85357 13.8535L8.35356 11.3535C8.54882 11.1583 8.54882 10.8417 8.35356 10.6464C8.1583 10.4512 7.84172 10.4512 7.64645 10.6464L5.14646 13.1464ZM14.8536 9.85357C15.0488 9.65831 15.0488 9.34172 14.8536 9.14646C14.6583 8.9512 14.3417 8.9512 14.1465 9.14646L9.14648 14.1465C8.95121 14.3417 8.95122 14.6583 9.14648 14.8536C9.34174 15.0488 9.65832 15.0488 9.85358 14.8536L14.8536 9.85357Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `link icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, t7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ r(
              "path",
              {
                d: "M8.37896 16.2153C8.00912 16.2153 7.67348 16.1456 7.37203 16.0063C7.07312 15.867 6.83501 15.6656 6.65769 15.4021C6.4829 15.1362 6.39551 14.8119 6.39551 14.4294C6.39551 14.0976 6.4601 13.8265 6.58929 13.6163C6.72102 13.4035 6.8958 13.2363 7.11365 13.1147C7.3315 12.9931 7.57342 12.9019 7.8394 12.8411C8.10538 12.7803 8.37516 12.7335 8.64874 12.7005C9.00085 12.6549 9.28583 12.6195 9.50368 12.5941C9.72406 12.5688 9.88491 12.527 9.98624 12.4687C10.0876 12.4105 10.1382 12.3104 10.1382 12.1686V12.1382C10.1382 11.7861 10.0407 11.5125 9.84565 11.3174C9.6506 11.1224 9.35802 11.0249 8.96792 11.0249C8.56261 11.0249 8.2447 11.1135 8.01419 11.2908C7.92269 11.3612 7.84198 11.4342 7.77203 11.5098C7.60095 11.6946 7.34786 11.8208 7.10569 11.7516C6.81869 11.6696 6.65853 11.3518 6.83002 11.1075C6.92452 10.9729 7.03173 10.8554 7.15165 10.7551C7.40243 10.5448 7.68234 10.3954 7.99139 10.3067C8.30297 10.2155 8.62087 10.1699 8.94512 10.1699C9.15537 10.1699 9.38715 10.1953 9.64047 10.2459C9.89378 10.294 10.1344 10.389 10.3624 10.5309C10.5929 10.6702 10.7829 10.8767 10.9324 11.1502C11.0818 11.4213 11.1566 11.7785 11.1566 12.2218V15.5807C11.1566 15.8577 10.932 16.0823 10.655 16.0823H10.5505C10.3312 16.0823 10.1534 15.9045 10.1534 15.6852V15.3161C10.1534 15.3007 10.1409 15.2881 10.1254 15.2881C10.1147 15.2881 10.1049 15.2943 10.1001 15.3039C10.0338 15.4357 9.9313 15.5711 9.79245 15.7099C9.64806 15.8518 9.45935 15.9721 9.2263 16.0709C8.99325 16.1671 8.7108 16.2153 8.37896 16.2153ZM8.56895 15.3565C8.90585 15.3565 9.19083 15.2907 9.42388 15.1589C9.65693 15.0272 9.83425 14.8562 9.95584 14.646C10.08 14.4357 10.142 14.2116 10.142 13.9734V13.4598C10.142 13.3618 9.99293 13.2772 9.89885 13.3047C9.77725 13.3402 9.63793 13.3705 9.48088 13.3959C9.32636 13.4212 9.17437 13.444 9.02491 13.4643C8.87799 13.482 8.7564 13.4972 8.66014 13.5099C8.43469 13.5403 8.2257 13.5884 8.03319 13.6543C7.8432 13.7201 7.68994 13.8176 7.57342 13.9468C7.45943 14.0735 7.40243 14.2445 7.40243 14.4598C7.40243 14.7562 7.51262 14.9804 7.73301 15.1324C7.95339 15.2818 8.23204 15.3565 8.56895 15.3565Z",
                fill: "currentColor"
              }
            ),
            /* @__PURE__ */ r(
              "path",
              {
                d: "M15.0241 18.3925C14.5757 18.3925 14.1907 18.3342 13.8689 18.2177C13.5472 18.1037 13.2813 17.9517 13.071 17.7618C12.9993 17.6961 12.9333 17.6287 12.873 17.5595C12.6901 17.3493 12.7882 17.0412 13.0337 16.9096C13.263 16.7867 13.5483 16.8552 13.7225 17.0485C13.7244 17.0507 13.7264 17.0528 13.7284 17.055C13.8499 17.1867 14.0146 17.3007 14.2223 17.397C14.43 17.4932 14.6998 17.5414 15.0317 17.5414C15.4826 17.5414 15.8549 17.4312 16.1488 17.2108C16.4426 16.9929 16.5895 16.6484 16.5895 16.1773V15.0588C16.5895 15.0322 16.5681 15.0108 16.5415 15.0108C16.5242 15.0108 16.5083 15.0201 16.4996 15.035C16.4345 15.146 16.3442 15.2734 16.2286 15.4173C16.1044 15.5693 15.9297 15.7036 15.7042 15.8201C15.4813 15.9341 15.1862 15.9911 14.8189 15.9911C14.3528 15.9911 13.9335 15.8822 13.5612 15.6643C13.1913 15.4439 12.8987 15.121 12.6834 14.6954C12.4681 14.2698 12.3605 13.7505 12.3605 13.1375C12.3605 12.5295 12.4656 12.0039 12.6758 11.5606C12.8861 11.1148 13.1774 10.7715 13.5498 10.5309C13.9221 10.2902 14.349 10.1699 14.8303 10.1699C15.2026 10.1699 15.5003 10.232 15.7232 10.3561C15.9461 10.4777 16.1184 10.6183 16.24 10.7779C16.3547 10.9254 16.4457 11.0513 16.5128 11.1556C16.5228 11.1711 16.54 11.1806 16.5585 11.1806C16.5882 11.1806 16.6123 11.1565 16.6123 11.1268V10.7133C16.6123 10.4552 16.8216 10.2459 17.0797 10.2459H17.1082C17.3821 10.2459 17.6041 10.4679 17.6041 10.7418V16.2305C17.6041 16.732 17.4888 17.1411 17.2583 17.4578C17.0303 17.777 16.7213 18.0125 16.3312 18.1645C15.9411 18.3165 15.5054 18.3925 15.0241 18.3925ZM15.0051 15.1172C15.3496 15.1172 15.6396 15.0386 15.8752 14.8816C16.1133 14.722 16.2944 14.4927 16.4186 14.1938C16.5427 13.8949 16.6047 13.5377 16.6047 13.1223C16.6047 12.7145 16.5439 12.356 16.4223 12.047C16.3008 11.7379 16.1209 11.496 15.8828 11.3212C15.6447 11.1439 15.3521 11.0553 15.0051 11.0553C14.6453 11.0553 14.3452 11.1477 14.1045 11.3326C13.8639 11.5176 13.6828 11.7658 13.5612 12.0774C13.4421 12.389 13.3826 12.7373 13.3826 13.1223C13.3826 13.5175 13.4434 13.8645 13.565 14.1634C13.6891 14.4623 13.8702 14.6967 14.1083 14.8664C14.349 15.0336 14.6479 15.1172 15.0051 15.1172Z",
                fill: "currentColor"
              }
            )
          ]
        }
      );
    default:
      throw new Error(
        `lowercase icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, n7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M8.5 3C8.77614 3 9 3.22386 9 3.5V7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H9V11.5C9 11.7761 8.77614 12 8.5 12C8.22399 11.9998 8 11.776 8 11.5V8H4.5C4.22399 7.99984 4 7.77604 4 7.5C4 7.22396 4.22399 7.00016 4.5 7H8V3.5C8 3.22396 8.22399 3.00016 8.5 3Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M12.5 6C12.7761 6 13 6.22386 13 6.5V11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H13V16.5C13 16.7761 12.7761 17 12.5 17C12.2239 17 12 16.7761 12 16.5V12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H12V6.5C12 6.22386 12.2239 6 12.5 6Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M12.5 6C12.7761 6 13 6.22386 13 6.5V11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H13V16.5C13 16.7761 12.7761 17 12.5 17C12.2239 17 12 16.7761 12 16.5V12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H12V6.5C12 6.22386 12.2239 6 12.5 6Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `Plus icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, r7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M12.4781 16H12.5H15.5C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15H12.5C11.7917 15 11.2905 14.9996 10.8987 14.9676C10.5128 14.9361 10.2772 14.8764 10.092 14.782C9.71569 14.5903 9.40973 14.2843 9.21799 13.908C9.12365 13.7228 9.06393 13.4872 9.0324 13.1013C9.00039 12.7095 9 12.2083 9 11.5V8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5V11.5L8 11.5219C8 12.2034 7.99999 12.7454 8.03572 13.1827C8.07231 13.6305 8.14884 14.0123 8.32698 14.362C8.6146 14.9265 9.07354 15.3854 9.63803 15.673C9.98765 15.8512 10.3695 15.9277 10.8173 15.9643C11.2546 16 11.7966 16 12.4781 16Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `radiusBottomLeft icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, o7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11.5219 16H11.5H8.5C8.22386 16 8 15.7761 8 15.5C8 15.2239 8.22386 15 8.5 15H11.5C12.2083 15 12.7095 14.9996 13.1013 14.9676C13.4872 14.9361 13.7228 14.8764 13.908 14.782C14.2843 14.5903 14.5903 14.2843 14.782 13.908C14.8764 13.7228 14.9361 13.4872 14.9676 13.1013C14.9996 12.7095 15 12.2083 15 11.5V8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5V11.5V11.5219C16 12.2034 16 12.7454 15.9643 13.1827C15.9277 13.6305 15.8512 14.0123 15.673 14.362C15.3854 14.9265 14.9265 15.3854 14.362 15.673C14.0123 15.8512 13.6305 15.9277 13.1827 15.9643C12.7454 16 12.2034 16 11.5219 16Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `radiusBottomRight icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, i7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M12.4781 8L12.5 8H15.5C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9H12.5C11.7917 9 11.2905 9.00039 10.8987 9.0324C10.5128 9.06393 10.2772 9.12365 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9.12365 10.2772 9.06393 10.5128 9.0324 10.8987C9.00039 11.2905 9 11.7917 9 12.5V15.5C9 15.7761 8.77614 16 8.5 16C8.22386 16 8 15.7761 8 15.5V12.5L8 12.4781C8 11.7966 7.99999 11.2546 8.03572 10.8173C8.07231 10.3695 8.14884 9.98765 8.32698 9.63803C8.6146 9.07354 9.07354 8.6146 9.63803 8.32698C9.98765 8.14884 10.3695 8.07231 10.8173 8.03572C11.2546 7.99999 11.7966 8 12.4781 8Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `radiusTopLeft icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, a7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11.5219 8L11.5 8H8.5C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9H11.5C12.2083 9 12.7095 9.00039 13.1013 9.0324C13.4872 9.06393 13.7228 9.12365 13.908 9.21799C14.2843 9.40973 14.5903 9.71569 14.782 10.092C14.8764 10.2772 14.9361 10.5128 14.9676 10.8987C14.9996 11.2905 15 11.7917 15 12.5V15.5C15 15.7761 15.2239 16 15.5 16C15.7761 16 16 15.7761 16 15.5V12.5V12.4781C16 11.7966 16 11.2546 15.9643 10.8173C15.9277 10.3695 15.8512 9.98765 15.673 9.63803C15.3854 9.07354 14.9265 8.6146 14.362 8.32698C14.0123 8.14884 13.6305 8.07231 13.1827 8.03572C12.7454 7.99999 12.2034 8 11.5219 8Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `radiusTopRight icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, l7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M12 7C12.2761 7 12.5 7.22386 12.5 7.5C12.5 7.77614 12.2761 8 12 8H4C3.72386 8 3.5 7.77614 3.5 7.5C3.5 7.22386 3.72386 7 4 7H12Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M17.5 11C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H17.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M17.5 11C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H17.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `minus icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, o5 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H11.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `Mixed icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, s7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M5 8C5 8.55228 4.55228 9 4 9C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7C4.55228 7 5 7.44772 5 8ZM9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M6.5 10C7.32843 10 8 10.6716 8 11.5C8 12.3284 7.32843 13 6.5 13C5.67157 13 5 12.3284 5 11.5C5 10.6716 5.67157 10 6.5 10ZM12.5 10C13.3284 10 14 10.6716 14 11.5C14 12.3284 13.3284 13 12.5 13C11.6716 13 11 12.3284 11 11.5C11 10.6716 11.6716 10 12.5 10ZM18.5 10C19.3284 10 20 10.6716 20 11.5C20 12.3284 19.3284 13 18.5 13C17.6716 13 17 12.3284 17 11.5C17 10.6716 17.6716 10 18.5 10Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `more icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, c7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M16.2041 6.01074C17.2128 6.113 18 6.96435 18 8V16L17.9893 16.2041C17.8938 17.1457 17.1457 17.8938 16.2041 17.9893L16 18H8C6.96435 18 6.113 17.2128 6.01074 16.2041L6 16V8C6 6.89543 6.89543 6 8 6H16L16.2041 6.01074ZM8 7C7.48232 7 7.05621 7.39333 7.00488 7.89746L7 8V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.48232 16.6067 7.05621 16.1025 7.00488L16 7H8ZM9.5 15C9.77614 15 10 15.2239 10 15.5C10 15.7761 9.77614 16 9.5 16C9.22386 16 9 15.7761 9 15.5C9 15.2239 9.22386 15 9.5 15ZM11.5 15C11.7761 15 12 15.2239 12 15.5C12 15.7761 11.7761 16 11.5 16C11.2239 16 11 15.7761 11 15.5C11 15.2239 11.2239 15 11.5 15ZM13.5 15C13.7761 15 14 15.2239 14 15.5C14 15.7761 13.7761 16 13.5 16C13.2239 16 13 15.7761 13 15.5C13 15.2239 13.2239 15 13.5 15ZM15.5 15C15.7761 15 16 15.2239 16 15.5C16 15.7761 15.7761 16 15.5 16C15.2239 16 15 15.7761 15 15.5C15 15.2239 15.2239 15 15.5 15ZM11.5 13C11.7761 13 12 13.2239 12 13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5C11 13.2239 11.2239 13 11.5 13ZM13.5 13C13.7761 13 14 13.2239 14 13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5C13 13.2239 13.2239 13 13.5 13ZM15.5 13C15.7761 13 16 13.2239 16 13.5C16 13.7761 15.7761 14 15.5 14C15.2239 14 15 13.7761 15 13.5C15 13.2239 15.2239 13 15.5 13ZM13.5 11C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12C13.2239 12 13 11.7761 13 11.5C13 11.2239 13.2239 11 13.5 11ZM15.5 11C15.7761 11 16 11.2239 16 11.5C16 11.7761 15.7761 12 15.5 12C15.2239 12 15 11.7761 15 11.5C15 11.2239 15.2239 11 15.5 11ZM15.5 9C15.7761 9 16 9.22386 16 9.5C16 9.77614 15.7761 10 15.5 10C15.2239 10 15 9.77614 15 9.5C15 9.22386 15.2239 9 15.5 9Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `opacity icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, u7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11 11H13V13H11V11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM7.5 16C7.22386 16 7 16.2239 7 16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H7.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `paddingBottom icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, d7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17C7.77614 17 8 16.7761 8 16.5V7.5ZM16.5 7C16.7761 7 17 7.22386 17 7.5V16.5C17 16.7761 16.7761 17 16.5 17C16.2239 17 16 16.7761 16 16.5V7.5C16 7.22386 16.2239 7 16.5 7ZM13 13V11H11V13H13ZM14 11C14 10.4477 13.5523 10 13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `paddingHorizontal icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, f7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17C7.77614 17 8 16.7761 8 16.5V7.5ZM13 11V13H11V11H13ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `paddingLeft icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, C7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M17 7.5C17 7.22386 16.7761 7 16.5 7C16.2239 7 16 7.22386 16 7.5V16.5C16 16.7761 16.2239 17 16.5 17C16.7761 17 17 16.7761 17 16.5V7.5ZM13 11V13H11V11H13ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `paddingRight icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, h7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M8 9.5C8 9.22385 7.77614 9 7.5 9C7.22386 9 7 9.22385 7 9.5L7 14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V9.5ZM17 9.5C17 9.22385 16.7761 9 16.5 9C16.2239 9 16 9.22385 16 9.5V14.5C16 14.7761 16.2239 15 16.5 15C16.7761 15 17 14.7761 17 14.5V9.5ZM9 7.5C9 7.22385 9.22386 7 9.5 7H14.5C14.7761 7 15 7.22385 15 7.5C15 7.77615 14.7761 8 14.5 8H9.5C9.22386 8 9 7.77615 9 7.5ZM9.5 16C9.22386 16 9 16.2239 9 16.5C9 16.7761 9.22386 17 9.5 17H14.5C14.7761 17 15 16.7761 15 16.5C15 16.2239 14.7761 16 14.5 16H9.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `paddingSides icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, m7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.5 7C7.22386 7 7 7.22385 7 7.5C7 7.77615 7.22386 8 7.5 8H16.5C16.7761 8 17 7.77615 17 7.5C17 7.22385 16.7761 7 16.5 7L7.5 7ZM11 11H13V13H11V11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `paddingTop icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, v7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.5 16C7.22386 16 7 16.2239 7 16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H7.5ZM7 7.5C7 7.22385 7.22386 7 7.5 7H16.5C16.7761 7 17 7.22385 17 7.5C17 7.77615 16.7761 8 16.5 8H7.5C7.22386 8 7 7.77615 7 7.5ZM13 11H11V13H13V11ZM11 10C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10H11Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `paddingVertical icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, p7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.0444 14.7058C13.0872 15.5133 11.8504 16 10.5 16C7.46243 16 5 13.5376 5 10.5C5 7.46243 7.46243 5 10.5 5C13.5376 5 16 7.46243 16 10.5C16 11.8503 15.5134 13.0869 14.706 14.0441C14.7596 14.0683 14.8098 14.1024 14.8538 14.1464L17.8538 17.1464C18.0491 17.3417 18.0491 17.6583 17.8538 17.8535C17.6585 18.0488 17.342 18.0488 17.1467 17.8535L14.1467 14.8535C14.1027 14.8095 14.0686 14.7593 14.0444 14.7058Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M16 10.5C16 13.5376 13.5376 16 10.5 16C7.46243 16 5 13.5376 5 10.5C5 7.46243 7.46243 5 10.5 5C13.5376 5 16 7.46243 16 10.5ZM14.7291 15.4362C13.5923 16.411 12.1149 17 10.5 17C6.91016 17 4 14.0898 4 10.5C4 6.91016 6.91016 4 10.5 4C14.0898 4 17 6.91016 17 10.5C17 12.1149 16.411 13.5923 15.4362 14.7291L19.8535 19.1465C20.0488 19.3417 20.0488 19.6583 19.8535 19.8535C19.6583 20.0488 19.3417 20.0488 19.1465 19.8535L14.7291 15.4362Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `Search icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, w7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 19C15.866 19 19 15.866 19 12C19 8.134 15.866 5 12 5C8.134 5 5 8.134 5 12C5 15.866 8.134 19 12 19ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `select icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, g7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M15.755 7.23427C15.4526 7.41038 15.0708 7.42207 14.7499 7.23681C14.4289 7.05149 14.2481 6.71483 14.2496 6.36477C14.2518 5.84407 13.908 5.22635 13.212 5.10473C12.8177 5.03581 12.4126 5 11.9999 5C11.5873 5 11.1822 5.03582 10.7878 5.10474C10.0918 5.22636 9.74809 5.84409 9.75026 6.36479C9.75172 6.71485 9.57093 7.05152 9.24994 7.23684C8.92906 7.4221 8.54727 7.41041 8.24489 7.2343C7.79535 6.97249 7.09002 6.96142 6.63667 7.50141C6.1179 8.11934 5.70348 8.82895 5.42136 9.60311C5.17962 10.2665 5.54277 10.8723 5.99461 11.1305C6.29865 11.3042 6.49993 11.6292 6.49993 12C6.49993 12.3707 6.29864 12.6957 5.9946 12.8694C5.54276 13.1276 5.17959 13.7334 5.42133 14.3968C5.70344 15.171 6.11787 15.8806 6.63664 16.4986C7.08999 17.0386 7.79532 17.0275 8.24486 16.7657C8.54724 16.5896 8.92903 16.5779 9.2499 16.7631C9.57089 16.9485 9.75168 17.2851 9.75022 17.6352C9.74805 18.1559 10.0918 18.7736 10.7878 18.8953C11.1822 18.9642 11.5873 19 11.9999 19C12.4126 19 12.8177 18.9642 13.2121 18.8953C13.9081 18.7736 14.2518 18.1559 14.2496 17.6352C14.2481 17.2851 14.4289 16.9484 14.7499 16.7631C15.0708 16.5779 15.4526 16.5895 15.755 16.7657C16.2045 17.0275 16.9099 17.0386 17.3632 16.4986C17.882 15.8806 18.2964 15.171 18.5786 14.3968C18.8203 13.7334 18.4571 13.1276 18.0053 12.8694C17.7013 12.6957 17.5 12.3707 17.5 12C17.5 11.6292 17.7013 11.3042 18.0053 11.1305C18.4571 10.8723 18.8203 10.2665 18.5785 9.60313C18.2964 8.82895 17.882 8.11931 17.3632 7.50137C16.9098 6.96138 16.2045 6.97245 15.755 7.23427ZM14.2499 8.10284C14.8939 8.47463 15.6587 8.4476 16.2582 8.0984C16.3697 8.03351 16.5144 8.04562 16.5973 8.14436C17.0424 8.67449 17.3974 9.28272 17.639 9.94552C17.6832 10.0667 17.6212 10.1982 17.5092 10.2623C16.9063 10.6067 16.5 11.2559 16.5 12C16.5 12.744 16.9063 13.3932 17.5092 13.7377C17.6212 13.8017 17.6832 13.9332 17.639 14.0544C17.3975 14.7172 17.0424 15.3254 16.5974 15.8556C16.5145 15.9543 16.3697 15.9664 16.2583 15.9015C15.6587 15.5523 14.8939 15.5253 14.2499 15.8971C13.6057 16.269 13.2467 16.9452 13.2496 17.6394C13.2502 17.7685 13.1671 17.888 13.0399 17.9102C12.7021 17.9692 12.3546 18 11.9999 18C11.6452 18 11.2977 17.9692 10.9599 17.9102C10.8327 17.888 10.7497 17.7685 10.7502 17.6394C10.7531 16.9452 10.3941 16.269 9.7499 15.8971C9.10594 15.5253 8.34117 15.5523 7.74159 15.9015C7.63018 15.9664 7.48543 15.9543 7.40253 15.8556C6.95747 15.3254 6.60242 14.7172 6.36089 14.0544C6.31671 13.9332 6.3787 13.8017 6.49072 13.7377C7.09359 13.3932 7.49993 12.744 7.49993 12C7.49993 11.2559 7.0936 10.6067 6.49074 10.2622C6.37872 10.1982 6.31674 10.0667 6.36091 9.94551C6.60245 9.28272 6.9575 8.67451 7.40255 8.14439C7.48545 8.04565 7.6302 8.03354 7.74161 8.09843C8.3412 8.44763 9.10598 8.47466 9.74994 8.10286C10.3941 7.73094 10.7531 7.05475 10.7503 6.36062C10.7497 6.23151 10.8328 6.11203 10.9599 6.08981C11.2977 6.03078 11.6452 6 11.9999 6C12.3546 6 12.7021 6.03078 13.0399 6.0898C13.1671 6.11203 13.2501 6.2315 13.2496 6.36061C13.2467 7.05473 13.6057 7.73091 14.2499 8.10284ZM10.4999 12C10.4999 11.1716 11.1715 10.5 11.9999 10.5C12.8284 10.5 13.4999 11.1716 13.4999 12C13.4999 12.8284 12.8284 13.5 11.9999 13.5C11.1715 13.5 10.4999 12.8284 10.4999 12ZM11.9999 9.5C10.6192 9.5 9.49994 10.6193 9.49994 12C9.49994 13.3807 10.6192 14.5 11.9999 14.5C13.3807 14.5 14.4999 13.3807 14.4999 12C14.4999 10.6193 13.3807 9.5 11.9999 9.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M17.2874 6.04442C16.7257 6.28419 16.0664 6.26482 15.5 5.9378C14.9335 5.61073 14.587 5.04928 14.5139 4.44284C14.4446 3.8674 14.0187 3.19018 13.2168 3.08168C12.8184 3.02778 12.4122 3 12 3C11.5878 3 11.1816 3.02778 10.7832 3.08168C9.98124 3.19018 9.55542 3.8674 9.48605 4.44285C9.41295 5.04929 9.06649 5.61075 8.49998 5.93782C7.93356 6.26485 7.27423 6.28421 6.71254 6.04443C6.18009 5.81713 5.38248 5.84708 4.88726 6.48493C4.39057 7.12468 3.978 7.83369 3.66653 8.59536C3.36037 9.34404 3.73424 10.0507 4.19772 10.3981C4.6867 10.7646 4.99995 11.3456 4.99995 12C4.99995 12.6544 4.6867 13.2354 4.19773 13.6019C3.73425 13.9493 3.36039 14.656 3.66654 15.4047C3.97801 16.1663 4.39058 16.8753 4.88726 17.5151C5.38247 18.1529 6.18008 18.1829 6.71254 17.9556C7.27422 17.7158 7.93355 17.7352 8.49996 18.0622C9.06647 18.3893 9.41293 18.9507 9.48603 19.5571C9.5554 20.1326 9.98122 20.8098 10.7831 20.9183C11.1815 20.9722 11.5878 21 12 21C12.4122 21 12.8184 20.9722 13.2168 20.9183C14.0187 20.8098 14.4445 20.1326 14.5139 19.5572C14.587 18.9507 14.9335 18.3893 15.5 18.0622C16.0664 17.7352 16.7257 17.7158 17.2874 17.9556C17.8199 18.1829 18.6175 18.1529 19.1127 17.5151C19.6094 16.8753 20.0219 16.1663 20.3334 15.4047C20.6396 14.656 20.2657 13.9493 19.8022 13.6019C19.3132 13.2354 19 12.6544 19 12C19 11.3456 19.3132 10.7646 19.8022 10.3981C20.2657 10.0507 20.6396 9.34401 20.3334 8.59534C20.0219 7.83367 19.6094 7.12466 19.1127 6.48492C18.6175 5.84707 17.8199 5.81712 17.2874 6.04442ZM15 6.80383C15.8505 7.29484 16.8414 7.32212 17.68 6.96412C17.9042 6.86842 18.1733 6.90563 18.3228 7.09817C18.7645 7.66714 19.1312 8.29732 19.4078 8.97384C19.5002 9.19967 19.3977 9.4516 19.2025 9.59792C18.4724 10.1451 18 11.0174 18 12C18 12.9826 18.4724 13.8549 19.2025 14.4021C19.3977 14.5484 19.5002 14.8003 19.4078 15.0262C19.1312 15.7027 18.7645 16.3329 18.3228 16.9018C18.1733 17.0944 17.9042 17.1316 17.68 17.0359C16.8414 16.6779 15.8504 16.7051 15 17.1962C14.1494 17.6873 13.6302 18.532 13.5211 19.4375C13.4919 19.6799 13.3246 19.8946 13.0827 19.9274C12.7286 19.9753 12.3672 20 12 20C11.6328 20 11.2713 19.9753 10.9172 19.9273C10.6753 19.8946 10.5081 19.6799 10.4788 19.4375C10.3697 18.532 9.85057 17.6873 8.99996 17.1962C8.14949 16.7051 7.15855 16.6779 6.31992 17.0359C6.09573 17.1316 5.82663 17.0944 5.67715 16.9018C5.23542 16.3329 4.86879 15.7027 4.59214 15.0262C4.49979 14.8003 4.60226 14.5484 4.79748 14.4021C5.52756 13.8549 5.99995 12.9826 5.99995 12C5.99995 11.0174 5.52755 10.1452 4.79747 9.59795C4.60225 9.45162 4.49978 9.19969 4.59213 8.97387C4.86878 8.29734 5.23541 7.66715 5.67715 7.09818C5.82663 6.90564 6.09574 6.86843 6.31992 6.96413C7.15855 7.32214 8.14951 7.29487 8.99998 6.80385C9.85059 6.31274 10.3697 5.46798 10.4789 4.56252C10.5081 4.32013 10.6753 4.10538 10.9172 4.07265C11.2713 4.02474 11.6328 4 12 4C12.3672 4 12.7286 4.02474 13.0827 4.07265C13.3247 4.10539 13.4919 4.32013 13.5211 4.56252C13.6303 5.46797 14.1494 6.31273 15 6.80383ZM9.49996 12C9.49996 10.6193 10.6192 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6192 14.5 9.49996 13.3807 9.49996 12ZM12 8.5C10.067 8.5 8.49996 10.067 8.49996 12C8.49996 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `Settings icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, b7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7 15.5C7 15.2239 7.22386 15 7.5 15H7.75C7.88807 15 8 14.8881 8 14.75V8.25C8 8.11193 7.88807 8 7.75 8H7.5C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7H7.75C8.44036 7 9 7.55964 9 8.25V14.75C9 15.4404 8.44036 16 7.75 16H7.5C7.22386 16 7 15.7761 7 15.5ZM15 14.7502C15 14.8883 15.1119 15.0002 15.25 15.0002H15.5C15.7761 15.0002 16 15.2241 16 15.5002C16 15.7764 15.7761 16.0002 15.5 16.0002H15.25C14.5596 16.0002 14 15.4406 14 14.7502V8.25012C14 7.55977 14.5596 7.00012 15.25 7.00012H15.5C15.7761 7.00012 16 7.22398 16 7.50012C16 7.77626 15.7761 8.00012 15.5 8.00012H15.25C15.1119 8.00012 15 8.11205 15 8.25012V14.7502ZM11 13.5C11 13.7761 11.2239 14 11.5 14C11.7761 14 12 13.7761 12 13.5V9.5C12 9.22386 11.7761 9 11.5 9C11.2239 9 11 9.22386 11 9.5V13.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `spacingHorizontal icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, L7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.5 7C7.77614 7 8 7.22386 8 7.5V7.75C8 7.88807 8.11193 8 8.25 8H14.75C14.8881 8 15 7.88807 15 7.75V7.5C15 7.22386 15.2239 7 15.5 7C15.7761 7 16 7.22386 16 7.5V7.75C16 8.44036 15.4404 9 14.75 9H8.25C7.55964 9 7 8.44036 7 7.75V7.5C7 7.22386 7.22386 7 7.5 7ZM8.25 15C8.11193 15 8 15.1119 8 15.25V15.5C8 15.7761 7.77614 16 7.5 16C7.22386 16 7 15.7761 7 15.5V15.25C7 14.5596 7.55964 14 8.25 14H14.7501C15.4405 14 16.0001 14.5596 16.0001 15.25V15.5C16.0001 15.7761 15.7763 16 15.5001 16C15.224 16 15.0001 15.7761 15.0001 15.5V15.25C15.0001 15.1119 14.8882 15 14.7501 15H8.25ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12H13.5C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11H9.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `spacingVertical icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, _7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M15.0197 8.34276C14.8728 7.85082 14.581 7.44285 14.1442 7.11885C13.5689 6.68797 12.8424 6.47254 11.9645 6.47254C11.3509 6.47254 10.8076 6.57718 10.3345 6.78646C9.8658 6.99163 9.49932 7.27478 9.23512 7.63589C8.97091 7.997 8.83881 8.40941 8.83881 8.87311C8.83881 9.20139 8.91125 9.49274 9.05614 9.74716C9.20103 9.99748 9.39705 10.215 9.64421 10.3996C9.89563 10.5843 10.1769 10.7423 10.488 10.8736C10.8033 11.0049 11.1272 11.1177 11.4595 11.2121L12.5107 11.5H18.5C18.7761 11.5 19 11.7239 19 12C19 12.2761 18.7761 12.5 18.5 12.5H14.0078H12.4099H5.5C5.22386 12.5 5 12.2761 5 12C5 11.7239 5.22386 11.5 5.5 11.5H9.43509C9.11403 11.3197 8.83431 11.1191 8.59591 10.8982C8.03341 10.3771 7.75216 9.71638 7.75216 8.91619C7.75216 8.24321 7.93966 7.65025 8.31466 7.13731C8.68966 6.62437 9.19676 6.22427 9.83597 5.93703C10.4752 5.64568 11.1932 5.5 11.9901 5.5C12.7997 5.5 13.5135 5.64568 14.1314 5.93703C14.7536 6.22427 15.2458 6.62027 15.608 7.125C15.8604 7.46982 16.033 7.84772 16.1257 8.25873C16.1956 8.56858 15.9368 8.83617 15.6192 8.83617C15.3334 8.83617 15.1015 8.61663 15.0197 8.34276ZM15.8358 13.5C15.9346 13.5 16.0272 13.5507 16.0746 13.6373C16.2792 14.0066 16.3814 14.4457 16.3814 14.9545C16.3814 15.6275 16.2003 16.2328 15.8381 16.7704C15.4759 17.3038 14.9581 17.7265 14.2848 18.0384C13.6115 18.3461 12.8083 18.5 11.875 18.5C10.9929 18.5 10.228 18.3605 9.58029 18.0814C8.93256 17.7983 8.4212 17.4064 8.0462 16.9058C7.79465 16.5633 7.61667 16.185 7.51226 15.7707C7.43031 15.4456 7.69977 15.1577 8.03507 15.1577C8.3341 15.1577 8.57455 15.3903 8.66071 15.6767C8.74696 15.9634 8.88516 16.2192 9.07532 16.4441C9.37361 16.7929 9.76353 17.0597 10.2451 17.2443C10.7309 17.4249 11.2742 17.5152 11.875 17.5152C12.5398 17.5152 13.1279 17.4085 13.6392 17.1951C14.1549 16.9776 14.5597 16.676 14.8537 16.2902C15.1478 15.9045 15.2948 15.4552 15.2948 14.9422C15.2948 14.5114 15.1797 14.1482 14.9496 13.8527C14.8485 13.7205 14.9339 13.5 15.1003 13.5H15.8358Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `strikethrough icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, M7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12H5.5C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11H7.5ZM13 11C13.2761 11 13.5 11.2239 13.5 11.5C13.5 11.7761 13.2761 12 13 12H11C10.7239 12 10.5 11.7761 10.5 11.5C10.5 11.2239 10.7239 11 11 11H13ZM18.5 11C18.7761 11 19 11.2239 19 11.5C19 11.7761 18.7761 12 18.5 12H16.5C16.2239 12 16 11.7761 16 11.5C16 11.2239 16.2239 11 16.5 11H18.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `strokeDash icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, x7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M5 11.5C5 11.2239 5.22386 11 5.5 11H18.5C18.7761 11 19 11.2239 19 11.5C19 11.7761 18.7761 12 18.5 12H5.5C5.22386 12 5 11.7761 5 11.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `strokeSolid icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, H7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M6 6.5C6 6.22386 6.22386 6 6.5 6H17.5C17.7761 6 18 6.22386 18 6.5C18 6.77614 17.7761 7 17.5 7H6.5C6.22386 7 6 6.77614 6 6.5ZM7 10V11H17V10H7ZM6.75 9C6.33579 9 6 9.33579 6 9.75V11.25C6 11.6642 6.33579 12 6.75 12H17.25C17.6642 12 18 11.6642 18 11.25V9.75C18 9.33579 17.6642 9 17.25 9H6.75ZM7 17V15H17V17H7ZM6 14.75C6 14.3358 6.33579 14 6.75 14H17.25C17.6642 14 18 14.3358 18 14.75V17.25C18 17.6642 17.6642 18 17.25 18H6.75C6.33579 18 6 17.6642 6 17.25V14.75Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `strokeWidth icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, V7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ r(
              "path",
              {
                d: "M6.61956 15.7318C6.5461 15.9414 6.34828 16.0816 6.12624 16.0816C5.76344 16.0816 5.51095 15.7211 5.63498 15.3802L8.0119 8.84601C8.13119 8.51809 8.44287 8.2998 8.79182 8.2998C9.1409 8.2998 9.45266 8.51825 9.57185 8.84635L11.9455 15.3803C12.0694 15.7212 11.8169 16.0816 11.4541 16.0816C11.2319 16.0816 11.034 15.9412 10.9606 15.7315L8.83239 9.6508C8.82637 9.63362 8.81015 9.62211 8.79194 9.62211C8.77374 9.62211 8.75752 9.63361 8.7515 9.65078L6.61956 15.7318ZM6.7819 13.494C6.7819 13.2422 6.98604 13.0381 7.23786 13.0381H10.3384C10.5903 13.0381 10.7944 13.2422 10.7944 13.494C10.7944 13.7458 10.5903 13.95 10.3384 13.95H7.23787C6.98604 13.95 6.7819 13.7458 6.7819 13.494Z",
                fill: "currentColor"
              }
            ),
            /* @__PURE__ */ r(
              "path",
              {
                d: "M15.5197 18.3919C15.0713 18.3919 14.6863 18.3336 14.3646 18.2171C14.0429 18.1031 13.7769 17.9511 13.5666 17.7611C13.4949 17.6955 13.4289 17.6281 13.3686 17.5588C13.1858 17.3487 13.2838 17.0405 13.5294 16.9089C13.7586 16.786 14.044 16.8546 14.2181 17.0478C14.2201 17.05 14.222 17.0522 14.224 17.0543C14.3456 17.1861 14.5102 17.3001 14.7179 17.3963C14.9257 17.4926 15.1954 17.5407 15.5273 17.5407C15.9782 17.5407 16.3506 17.4305 16.6444 17.2101C16.9382 16.9923 17.0852 16.6478 17.0852 16.1766V15.0581C17.0852 15.0316 17.0637 15.0101 17.0372 15.0101C17.0199 15.0101 17.004 15.0194 16.9952 15.0344C16.9301 15.1453 16.8398 15.2728 16.7242 15.4167C16.6001 15.5687 16.4253 15.7029 16.1998 15.8194C15.9769 15.9334 15.6818 15.9904 15.3145 15.9904C14.8484 15.9904 14.4292 15.8815 14.0568 15.6637C13.687 15.4433 13.3944 15.1203 13.1791 14.6947C12.9637 14.2692 12.8561 13.7499 12.8561 13.1368C12.8561 12.5289 12.9612 12.0033 13.1715 11.56C13.3817 11.1141 13.673 10.7709 14.0454 10.5302C14.4178 10.2896 14.8446 10.1693 15.3259 10.1693C15.6983 10.1693 15.9959 10.2313 16.2188 10.3555C16.4418 10.477 16.614 10.6176 16.7356 10.7772C16.8504 10.9248 16.9413 11.0507 17.0084 11.1549C17.0184 11.1705 17.0356 11.18 17.0541 11.18C17.0839 11.18 17.108 11.1559 17.108 11.1262V10.7126C17.108 10.4545 17.3172 10.2453 17.5753 10.2453H17.6038C17.8777 10.2453 18.0997 10.4673 18.0997 10.7411V16.2298C18.0997 16.7314 17.9844 17.1405 17.7539 17.4571C17.5259 17.7763 17.2169 18.0119 16.8268 18.1639C16.4367 18.3159 16.001 18.3919 15.5197 18.3919ZM15.5007 15.1165C15.8452 15.1165 16.1352 15.038 16.3708 14.8809C16.6089 14.7213 16.7901 14.4921 16.9142 14.1932C17.0383 13.8943 17.1004 13.5371 17.1004 13.1216C17.1004 12.7138 17.0396 12.3554 16.918 12.0463C16.7964 11.7373 16.6165 11.4954 16.3784 11.3206C16.1403 11.1433 15.8477 11.0546 15.5007 11.0546C15.141 11.0546 14.8408 11.1471 14.6002 11.332C14.3595 11.5169 14.1784 11.7651 14.0568 12.0767C13.9377 12.3883 13.8782 12.7366 13.8782 13.1216C13.8782 13.5168 13.939 13.8639 14.0606 14.1628C14.1847 14.4617 14.3658 14.696 14.604 14.8657C14.8446 15.0329 15.1435 15.1165 15.5007 15.1165Z",
                fill: "currentColor"
              }
            )
          ]
        }
      );
    default:
      throw new Error(
        `titleCase icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, Z7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M9 6.50049C9 6.22435 8.77614 6.00049 8.5 6.00049C8.22386 6.00049 8 6.22435 8 6.50049V11.0005C8 13.2096 9.79086 15.0005 12 15.0005C14.2091 15.0005 16 13.2096 16 11.0005V6.50049C16 6.22435 15.7761 6.00049 15.5 6.00049C15.2239 6.00049 15 6.22435 15 6.50049V11.0005C15 12.6573 13.6569 14.0005 12 14.0005C10.3431 14.0005 9 12.6573 9 11.0005V6.50049ZM17.5 18C17.7761 18 18 17.7762 18 17.5C18 17.2239 17.7761 17 17.5 17L6.5 17C6.22386 17 6 17.2239 6 17.5C6 17.7762 6.22386 18 6.5 18L17.5 18Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `underline icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, y7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.02257 11.5254C7.28467 8.7764 9.72561 6.7604 12.4746 7.0225C13.9325 7.16151 15.1846 7.91316 16.0001 8.99993H14C13.7239 8.99993 13.5 9.22379 13.5 9.49993C13.5 9.77608 13.7239 9.99993 14 9.99993H17.5C17.7761 9.99993 18 9.77608 18 9.49993V6.49993C18 6.22379 17.7761 5.99993 17.5 5.99993C17.2239 5.99993 17 6.22379 17 6.49993V8.68301C16.0342 7.22903 14.444 6.20574 12.5695 6.02701C9.27073 5.7125 6.3416 8.1317 6.02709 11.4304C6.00088 11.7053 6.20248 11.9494 6.47737 11.9756C6.75227 12.0019 6.99636 11.8003 7.02257 11.5254ZM17.9729 12.5694C17.9991 12.2945 17.7975 12.0504 17.5226 12.0242C17.2477 11.998 17.0036 12.1996 16.9774 12.4745C16.7153 15.2234 14.2744 17.2395 11.5254 16.9774C10.0676 16.8384 8.81554 16.0868 8.00004 15.0001H10C10.2761 15.0001 10.5 14.7763 10.5 14.5001C10.5 14.224 10.2761 14.0001 10 14.0001H6.5C6.22386 14.0001 6 14.224 6 14.5001V17.5001C6 17.7763 6.22386 18.0001 6.5 18.0001C6.77614 18.0001 7 17.7763 7 17.5001V15.3168C7.96582 16.7708 9.556 17.7941 11.4305 17.9728C14.7293 18.2874 17.6584 15.8682 17.9729 12.5694Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `updates icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, E7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M15.4999 8C13.7993 8 12.4999 9.50099 12.4999 11.25V12.75C12.4999 14.499 13.7993 16 15.4999 16C17.2006 16 18.4999 14.499 18.4999 12.75V12C18.4999 11.7239 18.2761 11.5 17.9999 11.5H15.9999C15.7238 11.5 15.4999 11.7239 15.4999 12C15.4999 12.2761 15.7238 12.5 15.9999 12.5H17.4999V12.75C17.4999 14.0386 16.5607 15 15.4999 15C14.4391 15 13.4999 14.0386 13.4999 12.75V11.25C13.4999 9.96145 14.4391 9 15.4999 9C16.1545 9 16.7521 9.35673 17.1243 9.93804C17.2732 10.1706 17.5824 10.2384 17.815 10.0896C18.0475 9.94068 18.1154 9.63145 17.9665 9.39888C17.4337 8.56672 16.5364 8 15.4999 8ZM5.74636 16.0006C5.9684 16.0006 6.16621 15.8603 6.23968 15.6508L6.86437 13.8689H9.95722L10.5808 15.6505C10.6542 15.8602 10.8521 16.0006 11.0742 16.0006C11.437 16.0006 11.6895 15.6402 11.5656 15.2992L9.19197 8.76529C9.07278 8.43719 8.76101 8.21875 8.41193 8.21875C8.06298 8.21875 7.75131 8.43703 7.63202 8.76496L5.25509 15.2991C5.13107 15.64 5.38355 16.0006 5.74636 16.0006ZM9.63804 12.957L8.45251 9.56975C8.44649 9.55256 8.43027 9.54105 8.41206 9.54105C8.39385 9.54105 8.37764 9.55255 8.37161 9.56973L7.18408 12.957H9.63804Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `uppercase icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, B7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7 7H10V10H7V7ZM6 7C6 6.44771 6.44771 6 7 6H10C10.5523 6 11 6.44771 11 7V10C11 10.5523 10.5523 11 10 11H7C6.44771 11 6 10.5523 6 10V7ZM7 14H10V17H7V14ZM6 14C6 13.4477 6.44771 13 7 13H10C10.5523 13 11 13.4477 11 14V17C11 17.5523 10.5523 18 10 18H7C6.44771 18 6 17.5523 6 17V14ZM17 7H14V10H17V7ZM14 6C13.4477 6 13 6.44771 13 7V10C13 10.5523 13.4477 11 14 11H17C17.5523 11 18 10.5523 18 10V7C18 6.44771 17.5523 6 17 6H14ZM14 14H17V17H14V14ZM13 14C13 13.4477 13.4477 13 14 13H17C17.5523 13 18 13.4477 18 14V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V14Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `viewGrid icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, N7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "24_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              d: "M7 15.5C7.55228 15.5 8 15.9477 8 16.5C8 17.0523 7.55228 17.5 7 17.5C6.44772 17.5 6 17.0523 6 16.5C6 15.9477 6.44772 15.5 7 15.5ZM17.5 16C17.7761 16 18 16.2239 18 16.5C18 16.7761 17.7761 17 17.5 17H10.5C10.2239 17 10 16.7761 10 16.5C10 16.2239 10.2239 16 10.5 16H17.5ZM7 10.5C7.55228 10.5 8 10.9477 8 11.5C8 12.0523 7.55228 12.5 7 12.5C6.44772 12.5 6 12.0523 6 11.5C6 10.9477 6.44772 10.5 7 10.5ZM17.5 11C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H10.5C10.2239 12 10 11.7761 10 11.5C10 11.2239 10.2239 11 10.5 11H17.5ZM7 5.5C7.55228 5.5 8 5.94772 8 6.5C8 7.05228 7.55228 7.5 7 7.5C6.44772 7.5 6 7.05228 6 6.5C6 5.94772 6.44772 5.5 7 5.5ZM17.5 6C17.7761 6 18 6.22386 18 6.5C18 6.77614 17.7761 7 17.5 7H10.5C10.2239 7 10 6.77614 10 6.5C10 6.22386 10.2239 6 10.5 6H17.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `viewList icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
}, I7 = ({ variant: e, size: t }) => {
  switch (t + "_" + e) {
    case "16_default":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M6.28463 2.91461L2.0508 9.97096C1.25097 11.304 2.2112 13 3.76578 13H12.2334C13.788 13 14.7482 11.304 13.9484 9.97097L9.7146 2.91462C8.9378 1.61994 7.06144 1.61993 6.28463 2.91461ZM2.90829 10.4855L7.14212 3.42911C7.53053 2.78177 8.46871 2.78177 8.85711 3.42911L13.0909 10.4855C13.4908 11.152 13.0107 12 12.2334 12H3.76578C2.98849 12 2.50838 11.152 2.90829 10.4855ZM8.5381 5.54976C8.54498 5.24819 8.3024 5 8.00074 5C7.69923 5 7.4567 5.24796 7.46337 5.54939L7.532 8.65052C7.53763 8.90478 7.74535 9.10795 7.99967 9.10795C8.25386 9.10795 8.46153 8.90497 8.46733 8.65085L8.5381 5.54976ZM7.55633 10.6989C7.67944 10.8201 7.82716 10.8807 7.99951 10.8807C8.11315 10.8807 8.21637 10.8532 8.30917 10.7983C8.40387 10.7415 8.47963 10.6657 8.53644 10.571C8.59516 10.4763 8.62451 10.3712 8.62451 10.2557C8.62451 10.0852 8.56201 9.93939 8.43701 9.81818C8.31391 9.69697 8.16807 9.63636 7.99951 9.63636C7.82716 9.63636 7.67944 9.69697 7.55633 9.81818C7.43512 9.93939 7.37451 10.0852 7.37451 10.2557C7.37451 10.4299 7.43512 10.5777 7.55633 10.6989Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ r(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ r(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M10.2568 6.05903L5.21667 15.0193C4.46674 16.3525 5.43016 17.9998 6.95982 17.9998H17.0401C18.5697 17.9998 19.5331 16.3525 18.7832 15.0193L13.7431 6.05904C12.9785 4.69973 11.0214 4.69972 10.2568 6.05903ZM11.1284 6.54929L6.08824 15.5096C5.71328 16.1762 6.19499 16.9998 6.95982 16.9998H17.0401C17.8049 16.9998 18.2866 16.1762 17.9116 15.5096L12.8715 6.54929C12.4892 5.86964 11.5107 5.86964 11.1284 6.54929ZM11.9999 8.49976C12.2761 8.49976 12.4999 8.72361 12.4999 8.99976V12.4998C12.4999 12.7759 12.2761 12.9998 11.9999 12.9998C11.7238 12.9998 11.4999 12.7759 11.4999 12.4998V8.99976C11.4999 8.72361 11.7238 8.49976 11.9999 8.49976ZM12.7499 14.7532C12.7499 15.1674 12.4142 15.5032 11.9999 15.5032C11.5857 15.5032 11.2499 15.1674 11.2499 14.7532C11.2499 14.339 11.5857 14.0032 11.9999 14.0032C12.4142 14.0032 12.7499 14.339 12.7499 14.7532Z",
              fill: "currentColor"
            }
          )
        }
      );
    default:
      throw new Error(
        `warning icon error: Unsupported combination size=${t}, variant=${e}`
      );
  }
};
export {
  f5 as Avatar,
  C5 as Badge,
  h5 as Bar,
  m5 as Button,
  lt as ButtonIcon,
  v5 as ButtonIconToggle,
  p5 as Checkbox,
  w5 as ColorPicker,
  g5 as ColorSwatch,
  b5 as Divider,
  g1 as Icon,
  _1 as Input,
  _5 as ListContainer,
  L5 as ListContext,
  M5 as ListItem,
  Tt as MenuContainer,
  At as MenuDivider,
  x5 as MenuItem,
  Rt as MenuItemOption,
  ie as OverlayPositioner,
  H5 as Popover,
  Z5 as ScrollContainer,
  V5 as ScrollContext,
  y5 as Section,
  E5 as SegmentedControl,
  ae as Select,
  B5 as Spacing,
  N5 as Spinner,
  I5 as Stack,
  T5 as Tab,
  $5 as TabContext,
  A5 as TabList,
  D5 as TabPanel,
  d1 as Text,
  Ie as Tooltip,
  k5 as WindowResizer,
  R5 as adjust,
  O5 as ai,
  $e as check,
  Ae as chevronDown,
  n5 as chevronRight,
  S1 as clamp,
  S5 as close,
  v1 as colorToHex,
  et as colorToHexAlpha,
  U5 as copy,
  F5 as corners,
  r5 as dragHandle,
  j5 as duplicate,
  P5 as eyeDropper,
  c5 as figmaDark,
  s5 as figmaLight,
  G5 as filter,
  J5 as filterFilled,
  q5 as help,
  tt as hexAlphaToColor,
  ee as hexToColor,
  z5 as home,
  W5 as imports,
  K5 as info,
  Y5 as insert,
  Q5 as letterSpacing,
  X5 as lineHeight,
  e7 as link,
  t7 as lowercase,
  l7 as minus,
  o5 as mixed,
  s7 as more,
  c7 as opacity,
  u7 as paddingBottom,
  d7 as paddingHorizontal,
  f7 as paddingLeft,
  C7 as paddingRight,
  h7 as paddingSides,
  m7 as paddingTop,
  v7 as paddingVertical,
  n7 as plus,
  d5 as radius,
  r7 as radiusBottomLeft,
  o7 as radiusBottomRight,
  i7 as radiusTopLeft,
  a7 as radiusTopRight,
  T1 as roundAlpha,
  p7 as search,
  w7 as select,
  g7 as settings,
  u5 as spacing,
  b7 as spacingHorizontal,
  L7 as spacingVertical,
  _7 as strikethrough,
  M7 as strokeDash,
  x7 as strokeSolid,
  H7 as strokeWidth,
  V7 as titleCase,
  Z7 as underline,
  y7 as updates,
  E7 as uppercase,
  ye as useListContext,
  J1 as useNumberValidator,
  Ft as useScrollContext,
  Te as useStringValidator,
  Ne as useTabContext,
  B7 as viewGrid,
  N7 as viewList,
  I7 as warning
};
