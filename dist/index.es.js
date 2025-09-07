import { options as V1, toChildArray as F1, cloneElement as U1, createContext as M1, Fragment as O1 } from "preact";
import { forwardRef as z1 } from "preact/compat";
import { useState as J, useEffect as Y, useRef as j, useMemo as Y1, useCallback as c1, useContext as Z1 } from "preact/hooks";
const J5 = {
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
        "secondary-interactive-selected": "#f2f9ff",
        "brand-interactive": "#ffffff",
        "brand-interactive-hover": "#e5f4ff",
        "brand-interactive-pressed": "#bde3ff",
        "danger-interactive": "#ffffff",
        "danger-interactive-hover": "#fff0f0",
        "danger-interactive-pressed": "#ffe2e0"
      },
      text: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        "default-interactive-selected": "#007be5",
        secondary: "#7d7d7d",
        "secondary-interactive": "#ababab",
        brand: "#007be5",
        "brand-interactive": "#007be5",
        danger: "#dc3412",
        "danger-interactive": "#dc3412",
        warning: "#b86200",
        success: "#009951"
      },
      icon: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        "default-interactive-selected": "#007be5",
        secondary: "#7d7d7d",
        tertiary: "#cccccc",
        brand: "#007be5",
        "brand-interactive": "#007be5",
        danger: "#dc3412",
        "danger-interactive": "#dc3412",
        warning: "#b86200",
        success: "#009951"
      },
      border: {
        default: "#e5e5e5",
        "default-interactive": "#e5e5e5",
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
        "drop-position-restricted": "#f24822"
      }
    },
    "neutral-inverted": {
      bg: {
        default: "#2c2c2c",
        "default-interactive": "#2c2c2c",
        "default-interactive-hover": "#5c5c5c",
        "default-interactive-pressed": "#808080"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      }
    },
    brand: {
      bg: {
        default: "#0d99ff",
        "default-interactive": "#0d99ff",
        "default-interactive-hover": "#007be5",
        "default-interactive-pressed": "#0768cf"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
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
        "default-interactive-pressed": "#bd2915"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
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
        "default-interactive-pressed": "#008043"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      border: {
        "default-interactive": "#009951"
      }
    },
    disabled: {
      bg: {
        default: "#e6e6e6",
        secondary: "#ffffff"
      },
      text: {
        default: "#b3b3b3",
        secondary: "#ababab"
      },
      icon: {
        default: "#b3b3b3",
        secondary: "#ababab"
      },
      border: {
        secondary: "#e5e5e5"
      }
    },
    system: {
      bg: {
        scrollbar: "#D4D4D4",
        resizer: "#D4D4D4"
      },
      border: {
        focus: "#0d99ff"
      }
    }
  }
}, G5 = {
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
        "secondary-interactive-selected": "#394360",
        "brand-interactive": "#2C2C2C",
        "brand-interactive-hover": "#394360",
        "brand-interactive-pressed": "#4A5878",
        "danger-interactive": "#2C2C2C",
        "danger-interactive-hover": "#60332A",
        "danger-interactive-pressed": "#864537"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-selected": "#7CC4F8",
        secondary: "#C0C0C0",
        "secondary-interactive": "#808080",
        brand: "#7CC4F8",
        "brand-interactive": "#7CC4F8",
        danger: "#FCA397",
        "danger-interactive": "#FCA397",
        warning: "#F7D15F",
        success: "#79D297"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-selected": "#7CC4F8",
        secondary: "#C0C0C0",
        tertiary: "#767676",
        brand: "#7CC4F8",
        "brand-interactive": "#7CC4F8",
        danger: "#FCA397",
        "danger-interactive": "#FCA397",
        warning: "#F7D15F",
        success: "#79D297"
      },
      border: {
        default: "#444444",
        "default-interactive": "#444444",
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
        "drop-position-restricted": "#D4583B"
      }
    },
    "neutral-inverted": {
      bg: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-hover": "#e5e5e5",
        "default-interactive-pressed": "#D9D9D9"
      },
      text: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a"
      },
      icon: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a"
      }
    },
    brand: {
      bg: {
        default: "#0C8CE9",
        "default-interactive": "#0C8CE9",
        "default-interactive-hover": "#0A6DC2",
        "default-interactive-pressed": "#105CAD"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
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
        "default-interactive-pressed": "#963323"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
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
        "default-interactive-pressed": "#0A5C35"
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff"
      },
      border: {
        "default-interactive": "#078348"
      }
    },
    disabled: {
      bg: {
        default: "#757575",
        secondary: "#2C2C2C"
      },
      text: {
        default: "#2C2C2C",
        secondary: "#808080"
      },
      icon: {
        default: "#2C2C2C",
        secondary: "#808080"
      },
      border: {
        secondary: "#444444"
      }
    },
    system: {
      bg: {
        scrollbar: "#686868",
        resizer: "#686868"
      },
      border: {
        focus: "#0C8CE9"
      }
    }
  }
}, X5 = {
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
}, K5 = {
  class: ":root",
  prefix: "--pui-radius",
  variables: {
    small: "2px",
    medium: "5px",
    large: "13px",
    full: "100%"
  }
};
var W1 = 0;
function e(n, t, r, l, o, a) {
  t || (t = {});
  var s, d, u = t;
  if ("ref" in u) for (d in u = {}, t) d == "ref" ? s = t[d] : u[d] = t[d];
  var f = { type: n, props: u, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --W1, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof n == "function" && (s = n.defaultProps)) for (d in s) u[d] === void 0 && (u[d] = s[d]);
  return V1.vnode && V1.vnode(f), f;
}
const O = (n, t, r = {}, l = []) => {
  const o = t ? `${n}__${t}` : n, a = [o];
  for (const [s, d] of Object.entries(r))
    typeof d == "string" ? a.push(`${o}_${s}-${d}`) : d === !0 && a.push(`${o}_${s}`);
  return a.concat(l).join(" ");
};
function z(n) {
  return z1(n);
}
const q1 = ({
  className: n,
  intent: t = "neutral",
  intentModifiers: r = "default",
  disabled: l,
  interactive: o,
  selected: a,
  fill: s,
  variant: d = "body",
  size: u = "medium",
  strong: f,
  align: w = "left",
  fullWidth: b,
  children: x,
  ...L
}, m) => {
  const c = O("Text", void 0, {
    ...!s && {
      intent: `${t}-${r}`,
      disabled: l,
      interactive: o,
      selected: a
    },
    variant: d,
    size: u,
    strong: f,
    align: w,
    fullWidth: b
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [c, n].join(" ").trim(),
      ref: m,
      ...L,
      style: {
        ...s && { color: s }
      },
      children: x
    }
  );
}, p1 = z(q1), J1 = ({
  className: n,
  size: t = "medium",
  shape: r = "circle",
  imageSrc: l,
  fillBg: o,
  fillText: a,
  children: s,
  ...d
}, u) => {
  const f = O("Avatar", void 0, {
    size: t,
    shape: r,
    image: !!l
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [f, n].join(" ").trim(),
      ref: u,
      ...d,
      style: {
        backgroundColor: o
      },
      children: [
        l && /* @__PURE__ */ e("img", { className: "Avatar__image", src: l, alt: "Avatar" }),
        s && /* @__PURE__ */ e(
          p1,
          {
            variant: "body",
            size: t === "small" ? "small" : "large",
            strong: !0,
            intent: "neutral-inverted",
            intentModifiers: "default",
            fill: a,
            children: /* @__PURE__ */ e("div", { className: "Avatar__children", children: s })
          }
        )
      ]
    }
  );
}, Q5 = z(
  J1
), G1 = ({
  className: n,
  intent: t = "neutral",
  intentModifiers: r = "default",
  prefix: l,
  suffix: o,
  children: a,
  ...s
}, d) => {
  const u = O("Badge", void 0, {
    intent: `${t}-${r}`,
    prefix: !!l,
    suffix: !!o
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [u, n].join(" ").trim(),
      ref: d,
      ...s,
      children: /* @__PURE__ */ e("div", { className: "Badge__content", children: [
        l && /* @__PURE__ */ e("div", { className: "Badge__prefix", children: l }),
        a && /* @__PURE__ */ e("div", { className: "Badge__children", children: /* @__PURE__ */ e(
          p1,
          {
            variant: "body",
            size: "medium",
            intent: t,
            intentModifiers: r,
            children: a
          }
        ) }),
        o && /* @__PURE__ */ e("div", { className: "Badge__suffix", children: o })
      ] })
    }
  );
}, ee = z(G1), X1 = ({ className: n, borderTop: t, borderBottom: r, children: l, ...o }, a) => {
  const s = O("Bar", void 0, {
    borderTop: t,
    borderBottom: r
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [s, n].join(" ").trim(),
      ref: a,
      ...o,
      children: l
    }
  );
}, te = z(X1), K1 = ({
  className: n,
  intent: t = "neutral",
  intentModifiers: r = "default",
  ghost: l,
  size: o = "medium",
  grouped: a = "none",
  disabled: s,
  fullWidth: d,
  prefix: u,
  suffix: f,
  children: w,
  onClick: b,
  ...x
}, L) => {
  const m = O("Button", void 0, {
    intent: `${t}-${r}`,
    ghost: !!l,
    size: o,
    grouped: !!a,
    groupedPosition: a,
    disabled: s,
    fullWidth: d,
    prefix: !!u,
    suffix: !!f
  }), c = (h) => {
    if (s) {
      h.preventDefault();
      return;
    }
    h.stopPropagation(), b == null || b({ event: h });
  };
  return /* @__PURE__ */ e(
    "button",
    {
      className: [m, n].join(" ").trim(),
      ref: L,
      ...x,
      disabled: s,
      onClick: c,
      children: /* @__PURE__ */ e("div", { className: "Button__content", children: [
        u && /* @__PURE__ */ e("div", { className: "Button__prefix", children: u }),
        w && /* @__PURE__ */ e("div", { className: "Button__children", children: /* @__PURE__ */ e(
          p1,
          {
            variant: "body",
            size: "medium",
            intent: t,
            intentModifiers: r,
            disabled: s,
            children: w
          }
        ) }),
        f && /* @__PURE__ */ e("div", { className: "Button__suffix", children: f })
      ] })
    }
  );
}, ne = z(
  K1
), Q1 = ({
  className: n,
  intent: t = "neutral",
  intentModifiers: r = "default",
  ghost: l,
  size: o = "medium",
  grouped: a = "none",
  translucent: s,
  disabled: d,
  children: u,
  onClick: f,
  ...w
}, b) => {
  const x = O("ButtonIcon", void 0, {
    intent: `${t}-${r}`,
    ghost: l,
    size: o,
    grouped: !!a,
    groupedPosition: a,
    translucent: s,
    disabled: d
  }), L = (m) => {
    if (d) {
      m.preventDefault();
      return;
    }
    m.stopPropagation(), f == null || f({ event: m });
  };
  return /* @__PURE__ */ e(
    "button",
    {
      className: [x, n].join(" ").trim(),
      ref: b,
      ...w,
      disabled: d,
      onClick: L,
      children: u && /* @__PURE__ */ e("div", { className: "ButtonIcon__children", children: u })
    }
  );
}, e5 = z(
  Q1
), t5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `adjust icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, n5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `ai icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, r5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `Check icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, o5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `chevronDown icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, i5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `chevronRight icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, s5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
            "path",
            {
              d: "M16.1465 7.14653C16.3417 6.95127 16.6583 6.95127 16.8535 7.14653C17.0487 7.3418 17.0487 7.65833 16.8535 7.85356L12.707 12L16.8535 16.1465C17.0487 16.3418 17.0487 16.6583 16.8535 16.8536C16.6583 17.0488 16.3417 17.0487 16.1465 16.8536L12 12.7071L7.85352 16.8536C7.65828 17.0488 7.34174 17.0487 7.14648 16.8536C6.95123 16.6583 6.95126 16.3418 7.14648 16.1465L11.293 12L7.14648 7.85356C6.95124 7.65831 6.95126 7.34179 7.14648 7.14653C7.34175 6.95127 7.65825 6.95127 7.85352 7.14653L12 11.293L16.1465 7.14653Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `Close icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, c5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_scaled":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `copy icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, l5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `dragHandle icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, a5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_scaled":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `duplicate icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, d5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
            "path",
            {
              d: "M12.5 4C16.6421 4 20 7.35786 20 11.5C20 15.6421 16.6421 19 12.5 19C8.35786 19 5 15.6421 5 11.5C5 7.35786 8.35786 4 12.5 4ZM12.5 5C8.91015 5 6 7.91015 6 11.5C6 15.0899 8.91015 18 12.5 18C16.0899 18 19 15.0899 19 11.5C19 7.91015 16.0899 5 12.5 5ZM12.5 14C12.9142 14 13.25 14.3358 13.25 14.75C13.25 15.1642 12.9142 15.5 12.5 15.5C12.0858 15.5 11.75 15.1642 11.75 14.75C11.75 14.3358 12.0858 14 12.5 14ZM12.5 8C13.6046 8 14.5 8.89543 14.5 10C14.5 10.8747 13.9387 11.6167 13.1582 11.8887C13.0956 11.9105 13.0468 11.9454 13.0195 11.9756C13.0076 11.9888 13.0027 11.9981 13.001 12.002L13 12.0039V12.5029C13 12.7791 12.7761 13.0029 12.5 13.0029C12.2239 13.0029 12 12.7791 12 12.5029V12.0029C12.0001 11.4251 12.4633 11.0718 12.8291 10.9443C13.2203 10.808 13.5 10.4362 13.5 10C13.5 9.44772 13.0523 9 12.5 9C11.9477 9 11.5 9.44772 11.5 10C11.5 10.2761 11.2761 10.5 11 10.5C10.7239 10.5 10.5 10.2761 10.5 10C10.5 8.89543 11.3954 8 12.5 8Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `Help icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, C5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
            "path",
            {
              d: "M7.66782 2.79524L7.33564 2.42154V2.42154L7.66782 2.79524ZM8.33218 2.79524L8.66436 2.42154V2.42154L8.33218 2.79524ZM3.66782 6.3508L4 6.7245L4 6.7245L3.66782 6.3508ZM12.3322 6.3508L12.6644 5.97709L12.6644 5.97709L12.3322 6.3508ZM8 3.16895L8.66436 2.42154C8.28548 2.08475 7.71452 2.08475 7.33564 2.42154L8 3.16895ZM4 6.7245L8 3.16895L7.33564 2.42154L3.33564 5.97709L4 6.7245ZM4 6.7245H4L3.33564 5.97709C3.12215 6.16686 3 6.43886 3 6.7245H4ZM4 12V6.7245H3V12H4ZM4 12H4H3C3 12.5523 3.44772 13 4 13V12ZM6 12H4V13H6V12ZM7 12V8.99997H6V12H7ZM7 8.99997V7.99997C6.44772 7.99997 6 8.44769 6 8.99997H7ZM7 8.99997H9V7.99997H7V8.99997ZM9 8.99997H10C10 8.44769 9.55228 7.99997 9 7.99997V8.99997ZM9 8.99997V12H10V8.99997H9ZM12 12H10V13H12V12ZM12 12V13C12.5523 13 13 12.5523 13 12H12ZM12 6.7245V12H13V6.7245H12ZM12 6.7245L12 6.7245H13C13 6.43886 12.8779 6.16686 12.6644 5.97709L12 6.7245ZM8 3.16895L12 6.7245L12.6644 5.97709L8.66436 2.42154L8 3.16895ZM9 12C9 12.5523 9.44771 13 10 13V12H9ZM6 13C6.55228 13 7 12.5523 7 12H6V13Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `home icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, f5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `impors icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, u5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `info icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, h5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_scaled":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
            "path",
            {
              d: "M12.5 4C16.6421 4 20 7.35786 20 11.5C20 15.6421 16.6421 19 12.5 19C8.35786 19 5 15.6421 5 11.5C5 7.35786 8.35786 4 12.5 4ZM12.5 5C8.91015 5 6 7.91015 6 11.5C6 15.0899 8.91015 18 12.5 18C16.0899 18 19 15.0899 19 11.5C19 7.91015 16.0899 5 12.5 5ZM12.5 8.5C12.7761 8.5 13 8.72386 13 9V11H15C15.2761 11 15.5 11.2239 15.5 11.5C15.5 11.7761 15.2761 12 15 12H13V14C13 14.2761 12.7761 14.5 12.5 14.5C12.2239 14.5 12 14.2761 12 14V12H10C9.72386 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.72386 11 10 11H12V9C12 8.72386 12.2239 8.5 12.5 8.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `insert icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, v5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `filter icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, m5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `filterFilled icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, p5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `Link icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, w5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
            "path",
            {
              d: "M8.5 3C8.77614 3 9 3.22386 9 3.5V7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H9V11.5C9 11.7761 8.77614 12 8.5 12C8.22399 11.9998 8 11.776 8 11.5V8H4.5C4.22399 7.99984 4 7.77604 4 7.5C4 7.22396 4.22399 7.00016 4.5 7H8V3.5C8 3.22396 8.22399 3.00016 8.5 3Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
            "path",
            {
              d: "M12.5 6C12.7761 6 13 6.22386 13 6.5V11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H13V16.5C13 16.7761 12.7761 17 12.5 17C12.2239 17 12 16.7761 12 16.5V12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H12V6.5C12 6.22386 12.2239 6 12.5 6Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `Plus icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, g5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
            "path",
            {
              d: "M12 7C12.2761 7 12.5 7.22386 12.5 7.5C12.5 7.77614 12.2761 8 12 8H4C3.72386 8 3.5 7.77614 3.5 7.5C3.5 7.22386 3.72386 7 4 7H12Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_scaled":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
            "path",
            {
              d: "M17.5 11C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H17.5Z",
              fill: "currentColor"
            }
          )
        }
      );
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `minus icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, L5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `Mixed icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, b5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `more icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, _5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_scaled":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `Search icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, x5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `select icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, M5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_scaled":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `Settings icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, Z5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `updates icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, H5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `viewGrid icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, V5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "24_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `viewList icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, B5 = ({ variant: n, size: t }) => {
  switch (t + "_" + n) {
    case "16_default":
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
      return /* @__PURE__ */ e(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ e(
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
        `warning icon error: Unsupported combination size=${t}, variant=${n}`
      );
  }
}, B1 = {
  adjust: t5,
  ai: n5,
  check: r5,
  chevronDown: o5,
  chevronRight: i5,
  close: s5,
  copy: c5,
  dragHandle: l5,
  duplicate: a5,
  help: d5,
  home: C5,
  imports: f5,
  info: u5,
  insert: h5,
  filter: v5,
  filterFilled: m5,
  link: p5,
  minus: g5,
  mixed: L5,
  more: b5,
  plus: w5,
  search: _5,
  select: x5,
  settings: M5,
  updates: Z5,
  viewGrid: H5,
  viewList: V5,
  warning: B5
}, y5 = ({
  className: n,
  glyph: t,
  intent: r = "neutral",
  intentModifiers: l = "default",
  disabled: o,
  interactive: a,
  selected: s,
  fill: d,
  variant: u = "default",
  size: f = 24,
  children: w,
  ...b
}, x) => {
  const L = O("Icon", void 0, {
    glyph: t,
    ...!d && {
      intent: `${r}-${l}`,
      disabled: o,
      interactive: a,
      selected: s
    },
    fill: d,
    variant: u,
    size: f.toString()
  });
  let m;
  if (w)
    m = w;
  else if (t && B1[t])
    m = B1[t]({ variant: u, size: f });
  else
    throw new Error("Icon component error: No valid glyph or children provided");
  return /* @__PURE__ */ e(
    "div",
    {
      className: [L, n].join(" ").trim(),
      ref: x,
      ...b,
      style: {
        ...d && { color: d }
      },
      children: m
    }
  );
}, m1 = z(y5), T5 = ({
  className: n,
  intent: t,
  ghost: r,
  disabled: l,
  children: o,
  defaultSelected: a,
  selected: s,
  onChange: d,
  ...u
}, f) => {
  const [w, b] = J(a), x = s !== void 0 ? s : w, L = (m) => {
    if (!l) {
      const c = !x;
      s === void 0 && b(c), m.event.stopPropagation(), d == null || d({ event: m.event, selected: c });
    }
  };
  return Y(() => {
    s !== void 0 && b(s);
  }, [s]), /* @__PURE__ */ e(
    e5,
    {
      className: [x ? "ButtonIcon_selected" : "", n].join(" ").trim(),
      ref: f,
      intent: t,
      ghost: r,
      disabled: l,
      ...u,
      onClick: L,
      children: F1(o).map((m) => {
        if (typeof m == "object" && m !== null) {
          const c = m;
          if (c.type === m1)
            return U1(c, {
              ...c.props,
              selected: x,
              interactive: !0
            });
        }
        return m;
      })
    }
  );
}, re = z(T5), E5 = ({
  className: n,
  checked: t,
  defaultChecked: r,
  mixed: l,
  disabled: o,
  label: a,
  onChange: s,
  ...d
}, u) => {
  const f = t !== void 0, [w, b] = J(
    f ? !!t : !!r
  );
  Y(() => {
    f && b(!!t);
  }, [f, t]);
  const x = O("Checkbox", void 0, {
    checked: w,
    mixed: l,
    disabled: o,
    label: !!a
  }), L = (h) => {
    if (o) {
      h.preventDefault();
      return;
    }
    h.stopPropagation();
    const _ = !w;
    f || b(_), s == null || s({ event: h, checked: _ });
  }, m = (h) => {
    var T;
    if (o) {
      (T = h.preventDefault) == null || T.call(h);
      return;
    }
    const _ = h.currentTarget.checked;
    f || b(_), s == null || s({
      event: h,
      checked: _
    });
  }, c = (h) => {
    h.stopPropagation();
  };
  return /* @__PURE__ */ e("div", { className: [x, n].join(" ").trim(), ...d, children: [
    /* @__PURE__ */ e("div", { className: "Checkbox__input", children: [
      /* @__PURE__ */ e(
        "input",
        {
          className: "Checkbox__input-native",
          type: "checkbox",
          ref: u,
          checked: w,
          disabled: o,
          onClick: c,
          onChange: m
        }
      ),
      w && !l && /* @__PURE__ */ e("div", { className: "Checkbox__icon", children: /* @__PURE__ */ e(
        m1,
        {
          glyph: "check",
          intent: "brand",
          intentModifiers: "default",
          interactive: !0,
          size: 16
        }
      ) }),
      w && l && /* @__PURE__ */ e("div", { className: "Checkbox__icon", children: /* @__PURE__ */ e(
        m1,
        {
          glyph: "mixed",
          intent: "brand",
          intentModifiers: "default",
          interactive: !0,
          size: 16
        }
      ) })
    ] }),
    a && /* @__PURE__ */ e("div", { className: "Checkbox__label", onClick: L, children: /* @__PURE__ */ e(p1, { disabled: o, children: a }) })
  ] });
}, oe = z(
  E5
), D5 = ({ className: n, variant: t = "full", ...r }, l) => {
  const o = O("Divider", void 0, {
    variant: t
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [o, n].join(" ").trim(),
      ref: l,
      ...r,
      children: /* @__PURE__ */ e("div", { className: "Divider__line" })
    }
  );
}, ie = z(
  D5
), I5 = ({
  className: n,
  placeholder: t,
  value: r,
  defaultValue: l,
  ghost: o,
  error: a,
  disabled: s,
  prefix: d,
  suffix: u,
  focusOnDoubleClick: f,
  onChange: w,
  onBlur: b,
  onFocus: x,
  onKeyDown: L,
  ...m
}, c) => {
  const [h, _] = J(!1), [T, D] = J(
    !!(r ?? l ?? "")
  ), E = j(null);
  Y(() => {
    r !== void 0 && D(r.length > 0);
  }, [r]);
  const y = O("Input", void 0, {
    filled: T,
    disabled: s,
    ghost: o,
    prefix: !!d,
    suffix: !!u,
    focused: h,
    error: a
  }), I = (v) => {
    v.stopPropagation(), D(v.currentTarget.value.length > 0), w == null || w({
      event: v,
      value: v.currentTarget.value
    });
  }, Z = (v) => {
    v.stopPropagation(), _(!1), D(v.currentTarget.value.length > 0), b == null || b({
      event: v,
      value: v.currentTarget.value
    });
  }, N = (v) => {
    v.stopPropagation(), _(!0), x == null || x({
      event: v,
      value: v.currentTarget.value
    });
  }, n1 = (v) => {
    v.stopPropagation(), L == null || L({
      event: v,
      value: v.currentTarget.value
    });
  }, G = (v) => {
    f || v.stopPropagation();
  }, $ = () => {
    var v;
    f && ((v = E.current) == null || v.focus());
  };
  return /* @__PURE__ */ e("div", { className: [y, n].join(" ").trim(), ...m, children: [
    d && /* @__PURE__ */ e("div", { className: "Input__prefix", children: d }),
    /* @__PURE__ */ e(
      "input",
      {
        className: "Input__input-native",
        ref: (v) => {
          E.current = v, typeof c == "function" ? c(v) : c && typeof c == "object" && (c.current = v);
        },
        type: "text",
        disabled: s,
        placeholder: t,
        value: r !== void 0 ? r : void 0,
        defaultValue: r === void 0 ? l : void 0,
        onChange: I,
        onBlur: Z,
        onFocus: N,
        onKeyDown: n1,
        onClick: G,
        onDblClick: $,
        onMouseDown: (v) => {
          f && v.preventDefault();
        }
      }
    ),
    u && /* @__PURE__ */ e("div", { className: "Input__suffix", children: u })
  ] });
}, se = z(
  I5
), y1 = M1(void 0), T1 = () => {
  const n = Z1(y1);
  if (!n) throw new Error("ListContext not found");
  return n;
}, ce = ({
  items: n = [],
  selectedItems: t = [],
  selectionMode: r = "single",
  onItemsChange: l,
  onSelectionChange: o,
  children: a
}) => {
  const [s, d] = J(n), [u, f] = J(new Set(t)), w = j(/* @__PURE__ */ new Map()), b = j(/* @__PURE__ */ new Map()), x = l !== void 0, L = o !== void 0, m = x ? n : s, c = Y1(
    () => L ? new Set(t) : u,
    [L, t, u]
  ), h = j(null), _ = j(/* @__PURE__ */ new Set()), T = c1(
    (C, i) => {
      const p = new Set(c);
      C.forEach((g) => {
        i ? p.add(g) : p.delete(g);
      }), L || f(p), o == null || o({ selectedItems: Array.from(p) });
    },
    [c, o, L]
  ), D = c1(
    (C) => {
      const i = new Set(C);
      L || f(i), o == null || o({ selectedItems: Array.from(i) });
    },
    [L, o]
  ), E = c1(
    (C) => {
      const i = [], p = (g) => {
        g.forEach((k) => {
          i.push(k.id), k.children && k.children.length && p(k.children);
        });
      };
      return p(C), i;
    },
    []
  ), y = c1(
    (C, i) => {
      if (r === "none") return;
      const p = !!(i != null && i.additive), g = !!(i != null && i.range);
      if (r === "single") {
        const M = c.has(C), A = /* @__PURE__ */ new Set();
        M || A.add(C), L || f(A), o == null || o({ selectedItems: Array.from(A) }), h.current = C;
        return;
      }
      if (g) {
        const M = E(m), A = h.current || C, K = M.indexOf(A), W = M.indexOf(C);
        if (K === -1 || W === -1) return;
        const [X, l1] = K <= W ? [K, W] : [W, K], Q = M.slice(X, l1 + 1), R = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map(), S = (B, P) => {
          B.forEach((e1) => {
            F.set(e1.id, P), e1.children && S(e1.children, e1.id);
          });
        };
        S(m, null);
        const U = (B) => {
          let P = B;
          for (; P; ) {
            if (V.has(P)) return !0;
            P = F.get(P) || null;
          }
          return !1;
        };
        Q.forEach((B) => {
          const P = w.current.get(B);
          if ((P == null ? void 0 : P.selectable) === !1) {
            (P == null ? void 0 : P.selectionScope) === "withDescendants" && V.add(B);
            return;
          }
          U(B) || R.add(B);
        }), L || f(R), o == null || o({ selectedItems: Array.from(R) }), h.current = C;
        return;
      }
      if (p) {
        const M = new Set(c);
        M.has(C) ? M.delete(C) : M.add(C), L || f(M), o == null || o({ selectedItems: Array.from(M) }), h.current = C;
        return;
      }
      const k = /* @__PURE__ */ new Set([C]);
      L || f(k), o == null || o({ selectedItems: Array.from(k) }), h.current = C;
    },
    [
      r,
      c,
      L,
      o,
      m,
      E
    ]
  ), I = c1(
    (C, i, p) => {
      if (C.length === 0) return;
      const g = JSON.parse(JSON.stringify(m)), k = (() => {
        const R = /* @__PURE__ */ new Map(), V = (F, S) => {
          F.forEach((U, B) => {
            const P = [...S, B];
            R.set(U.id, P), U.children && U.children.length && V(U.children, P);
          });
        };
        return V(m, []), R;
      })();
      if (p && p.length > 0)
        for (const R of C) {
          const V = k.get(R);
          if (V && p.length >= V.length && V.every((S, U) => p[U] === S))
            return;
        }
      const M = (R, V) => {
        const F = [];
        for (let S = R.length - 1; S >= 0; S--)
          V.includes(R[S].id) && F.unshift(R.splice(S, 1)[0]);
        return R.forEach((S) => {
          if (S.children) {
            const U = M(S.children, V);
            F.push(...U);
          }
        }), F;
      }, A = (R, V, F, S) => {
        if (V.length === 0) {
          const e1 = Math.max(0, Math.min(F, R.length));
          R.splice(e1, 0, ...S);
          return;
        }
        const U = Math.max(
          0,
          Math.min(V[0], Math.max(0, R.length - 1))
        );
        let B = R[U];
        if (V.length === 1) {
          if (!B) return;
          B.children || (B.children = []);
          const e1 = Math.max(
            0,
            Math.min(F, B.children.length)
          );
          B.children.splice(e1, 0, ...S);
          return;
        }
        for (let e1 = 1; e1 < V.length; e1++) {
          if (!B) return;
          B.children || (B.children = []);
          const h1 = Math.max(
            0,
            Math.min(V[e1], Math.max(0, B.children.length - 1))
          );
          B = B.children[h1];
        }
        if (!B) return;
        B.children || (B.children = []);
        const P = Math.max(
          0,
          Math.min(F, B.children.length)
        );
        B.children.splice(P, 0, ...S);
      }, K = M(g, C);
      if (K.length === 0) return;
      const W = p && p.length ? p : [];
      let X = 0;
      C.forEach((R) => {
        const V = k.get(R);
        if (!V || V.length === 0) return;
        const F = V.slice(0, V.length - 1), S = V[V.length - 1];
        F.length === W.length && F.every((B, P) => B === W[P]) && S < i && X++;
      });
      const l1 = Math.max(0, i - X), Q = [...W];
      if (Q.length > 0) {
        const R = Q.slice(
          0,
          Q.length - 1
        ), V = Q[Q.length - 1];
        let F = 0;
        C.forEach((S) => {
          const U = k.get(S);
          if (!U || U.length === 0) return;
          const B = U.slice(0, U.length - 1), P = U[U.length - 1];
          B.length === R.length && B.every((h1, w1) => h1 === R[w1]) && P < V && F++;
        }), Q[Q.length - 1] = Math.max(
          0,
          V - F
        );
      }
      A(
        g,
        Q,
        l1,
        K
      ), x || d(g), l == null || l({ items: g });
    },
    [m, l, x]
  );
  Y(() => {
    if (r === "none") return;
    const C = (i) => {
      const p = i.target;
      if (p) {
        for (const g of _.current)
          if (g.contains(p)) return;
        if (c.size > 0) {
          const g = /* @__PURE__ */ new Set();
          L || f(g), o == null || o({ selectedItems: Array.from(g) });
        }
      }
    };
    return document.addEventListener("pointerdown", C), () => document.removeEventListener("pointerdown", C);
  }, [
    r,
    c,
    L,
    o
  ]);
  const Z = j(null);
  Y(() => {
    const C = document.createElement("div");
    return C.style.width = "20px", C.style.height = "20px", C.style.opacity = "0", C.style.position = "absolute", C.style.top = "-1000px", C.style.pointerEvents = "none", document.body.appendChild(C), Z.current = C, () => {
      document.body.removeChild(C), Z.current = null;
    };
  }, []);
  const N = c1((C) => C ? (_.current.add(C), () => {
    _.current.delete(C);
  }) : () => {
  }, []), n1 = c1(
    (C, i) => (w.current.set(C, i), () => {
      w.current.delete(C);
    }),
    []
  ), G = c1((C) => b.current.get(C) || null, []), $ = c1((C, i) => (b.current.set(C, i), () => {
    b.current.delete(C);
  }), []);
  Y(() => {
    x && d(n);
  }, [n, x]), Y(() => {
    const C = /* @__PURE__ */ new Map(), i = (p, g) => {
      p.forEach((k, M) => {
        const A = [...g, M];
        C.set(k.id, A), k.children && k.children.length && i(k.children, A);
      });
    };
    i(m, []), b.current = C;
  }, [m]), Y(() => {
    L && f(new Set(t));
  }, [t, L]);
  const v = {
    items: m,
    selectedItems: c,
    setSelection: T,
    setExactSelection: D,
    toggleSelect: y,
    reorderItems: I,
    selectionMode: r,
    registerRootElement: N,
    registerItemMeta: n1,
    getPathForId: G,
    registerItemPath: $,
    dragImage: Z.current
  };
  return /* @__PURE__ */ e(y1.Provider, { value: v, children: a });
}, N5 = ({
  className: n,
  children: t,
  ...r
}, l) => {
  const { reorderItems: o, registerRootElement: a, getPathForId: s } = T1(), d = j(null), u = j(null);
  Y(() => {
    const c = d.current;
    if (!c) return;
    const h = c.closest(".ListItem"), _ = h == null ? void 0 : h.getAttribute("data-nesting-level"), T = _ ? parseInt(_, 10) : 0, D = h ? T + 1 : 0;
    try {
      c.style.setProperty("--level", String(D));
    } catch {
    }
  }, [d]), Y(() => a == null ? void 0 : a(d.current), [a]);
  const f = (c) => {
    c.preventDefault(), c.dataTransfer.dropEffect = "move";
  }, w = (c) => {
    var D, E;
    c.preventDefault(), c.stopPropagation();
    let h = null;
    const _ = window.__puiDraggingIds;
    Array.isArray(_) && (h = _);
    const T = (D = c.dataTransfer) == null ? void 0 : D.getData("application/json");
    if (T)
      try {
        const y = JSON.parse(T);
        y && Array.isArray(y.ids) && (h = y.ids);
      } catch {
      }
    if (!h) {
      const y = (E = c.dataTransfer) == null ? void 0 : E.getData("text/plain");
      y && (h = [y]);
    }
    if (h && h.length) {
      const y = c.currentTarget, I = Array.from(y.children);
      let Z = I.length, N = "below";
      for (let $ = 0; $ < I.length; $++) {
        const v = I[$];
        if (v.classList.contains("ListItem_drag-over")) {
          const i = v.getAttribute("data-accepts-children") !== "false";
          if (v.classList.contains("ListItem_drag-above"))
            N = "above", Z = $;
          else if (v.classList.contains("ListItem_drag-below")) {
            const p = v.querySelector(".ListItem__sub-items") !== null, g = v.classList.contains("ListItem_collapsed");
            p && !g && i ? (N = "inside", Z = 0) : (N = "below", Z = $ + 1);
          } else v.classList.contains("ListItem_drag-inside") && (v.getAttribute("data-accepts-children") !== "false" ? (N = "inside", Z = 0) : (N = "below", Z = $ + 1));
          break;
        }
      }
      const n1 = new CustomEvent("resetDragStates");
      document.dispatchEvent(n1);
      let G = [];
      for (let $ = 0; $ < I.length; $++) {
        const v = I[$];
        if (v.classList.contains("ListItem_drag-over")) {
          const C = v.getAttribute("data-item-id") || "", i = C ? (s == null ? void 0 : s(C)) || [] : [];
          if (N === "inside")
            G = i, Z = 0;
          else if (i.length) {
            const p = i.slice(0, -1), g = i[i.length - 1];
            G = p, Z = N === "above" ? g : g + 1;
          }
          break;
        }
      }
      if (N !== "inside")
        for (let $ = 0; $ < I.length; $++) {
          const v = I[$];
          if (v.classList.contains("ListItem_drag-above") || v.classList.contains("ListItem_drag-below")) {
            const C = v.getAttribute("data-item-id");
            if (C && h.includes(C)) return;
            break;
          }
        }
      Z < 0 && (Z = 0), Z > I.length && (Z = I.length), o(
        h,
        Z,
        G.length ? G : void 0
      );
    }
  }, b = (c) => {
    c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "move", c.currentTarget.classList.add("ListContainer__end-dropzone-active");
    const T = c.currentTarget.parentElement, E = (T == null ? void 0 : T.closest(".ListItem")) || null;
    u.current !== E && (u.current && u.current.classList.remove("ListItem_drop-parent"), E && E.classList.add("ListItem_drop-parent"), u.current = E);
  }, x = (c) => {
    var E, y;
    c.preventDefault(), c.stopPropagation(), c.currentTarget.classList.remove("ListContainer__end-dropzone-active"), u.current && (u.current.classList.remove("ListItem_drop-parent"), u.current = null);
    let _ = null;
    const T = window.__puiDraggingIds;
    Array.isArray(T) && (_ = T);
    const D = (E = c.dataTransfer) == null ? void 0 : E.getData("application/json");
    if (D)
      try {
        const I = JSON.parse(D);
        I && Array.isArray(I.ids) && (_ = I.ids);
      } catch {
      }
    if (!_) {
      const I = (y = c.dataTransfer) == null ? void 0 : y.getData("text/plain");
      I && (_ = [I]);
    }
    if (_ && _.length) {
      const I = new CustomEvent("resetDragStates");
      document.dispatchEvent(I);
      const N = c.currentTarget.parentElement, n1 = N ? Array.from(N.children).filter(
        (p) => {
          var g;
          return (g = p.classList) == null ? void 0 : g.contains("ListItem");
        }
      ).length : 0, G = N == null ? void 0 : N.closest(
        ".ListItem"
      ), $ = (G == null ? void 0 : G.getAttribute("data-item-id")) || null, v = $ ? (s == null ? void 0 : s($)) || [] : [];
      o(_, n1, $ ? v : void 0);
    }
  }, L = (c) => {
    c.currentTarget.classList.remove("ListContainer__end-dropzone-active"), u.current && (u.current.classList.remove("ListItem_drop-parent"), u.current = null);
  }, m = O("ListContainer", void 0, void 0);
  return /* @__PURE__ */ e(
    "div",
    {
      className: [m, n].join(" ").trim(),
      ref: (c) => {
        d.current = c, typeof l == "function" ? l(c) : l && (l.current = c);
      },
      ...r,
      onDragOver: f,
      onDrop: w,
      children: [
        t,
        /* @__PURE__ */ e(
          "div",
          {
            className: "ListContainer__end-dropzone",
            onDragOver: b,
            onDrop: x,
            onDragLeave: L
          }
        )
      ]
    }
  );
}, le = z(N5), A5 = ({
  className: n,
  id: t,
  isNested: r,
  nestingLevel: l = 0,
  draggable: o,
  dragHandle: a = "default",
  acceptsChildren: s,
  selectionScope: d = "item",
  collapsed: u,
  showCollapseControl: f,
  onCollapsedChange: w,
  onDragStart: b,
  onDragEnd: x,
  selectable: L,
  hoverable: m,
  onSelect: c,
  subItems: h,
  children: _,
  ...T
}, D) => {
  const {
    selectedItems: E,
    toggleSelect: y,
    selectionMode: I,
    setExactSelection: Z,
    items: N,
    registerItemMeta: n1,
    dragImage: G
  } = T1(), [$, v] = J(!1), [C, i] = J(null), [p, g] = J(!1), k = j(null), M = j(null), A = j(null), K = j(0), W = j(null), X = j(null), l1 = u !== void 0, [Q, R] = J(
    !!u
  );
  Y(() => {
    l1 && R(!!u);
  }, [u]);
  const V = l1 ? !!u : Q, F = E.has(t), S = !!h;
  Y(() => {
    const H = n1 == null ? void 0 : n1(t, {
      selectable: L,
      selectionScope: d
    }), q = () => {
      v(!1), i(null), g(!1), M.current && (M.current.classList.remove("ListItem_drop-parent"), M.current = null), A.current != null && (cancelAnimationFrame(A.current), A.current = null), W.current = null, X.current = null;
    }, t1 = () => {
      v(!1), i(null), g(!1), M.current && (M.current.classList.remove("ListItem_drop-parent"), M.current = null), A.current != null && (cancelAnimationFrame(A.current), A.current = null), W.current = null, X.current = null;
    };
    return document.addEventListener("dragend", q), document.addEventListener("resetDragStates", t1), () => {
      document.removeEventListener("dragend", q), document.removeEventListener("resetDragStates", t1), H == null || H();
    };
  }, [t, n1, L, d]);
  const U = O("ListItem", void 0, {
    dragHandle: a,
    "selection-scope-descendants": d === "withDescendants",
    nested: r,
    draggable: !!o,
    selectable: !!L,
    selected: F,
    hoverable: !!m,
    "has-children": S,
    collapsed: !!V,
    collapsable: f,
    "drag-over": $,
    "drag-above": C === "above",
    "drag-below": C === "below",
    "drag-inside": C === "inside",
    "drag-self": C === "self",
    dragging: p
  }), B = (H) => {
    if (!L || I === "none") return;
    const q = H.shiftKey, t1 = H.metaKey || H.ctrlKey;
    if (d === "withDescendants") {
      if (y(t, { range: q, additive: t1 }), I !== "single" && !q && !t1) {
        const i1 = /* @__PURE__ */ new Set([t]);
        P(t).forEach((s1) => i1.add(s1)), Z(Array.from(i1));
      }
    } else
      y(t, { range: q, additive: t1 });
    c == null || c({ event: H, selected: !F });
  }, P = (H) => {
    const q = [], t1 = (i1) => {
      for (let s1 = 0; s1 < i1.length; s1++) {
        const r1 = i1[s1];
        if (r1.id === H) {
          const d1 = (f1) => {
            if (f1)
              for (let C1 = 0; C1 < f1.length; C1++) {
                const u1 = f1[C1];
                q.push(u1.id), d1(u1.children);
              }
          };
          return d1(r1.children), !0;
        }
        if (r1.children && t1(r1.children)) return !0;
      }
      return !1;
    };
    return t1(N), q;
  }, e1 = (H) => {
    var q, t1, i1, s1;
    if (o || s) {
      H.preventDefault(), H.stopPropagation(), H.dataTransfer.dropEffect = "move";
      let r1 = [];
      const d1 = window.__puiDraggingIds;
      Array.isArray(d1) && (r1 = d1);
      const f1 = (q = H.dataTransfer) == null ? void 0 : q.getData("application/json");
      if (f1)
        try {
          const o1 = JSON.parse(f1);
          o1 && Array.isArray(o1.ids) && (r1 = o1.ids);
        } catch {
        }
      if (r1.length === 0) {
        const o1 = (t1 = H.dataTransfer) == null ? void 0 : t1.getData("text/plain");
        o1 && (r1 = [o1]);
      }
      if (r1.includes(t)) {
        v(!0), i("self");
        return;
      }
      const C1 = H.currentTarget, u1 = (s1 = (i1 = C1.closest(".ListItem")) == null ? void 0 : i1.parentElement) == null ? void 0 : s1.closest(".ListItem"), N1 = u1 ? u1.getAttribute("data-accepts-children") !== "false" : !0;
      if (u1 && !N1) {
        v(!1), i(null);
        return;
      }
      const b1 = C1.querySelector(
        ".ListItem__content"
      ), g1 = b1 == null ? void 0 : b1.getBoundingClientRect();
      if (!g1) return;
      if (H.clientY < g1.top || H.clientY > g1.bottom) {
        v(!1), i(null);
        return;
      }
      v(!0), W.current = g1, X.current = C1, K.current = H.clientY, A.current == null && (A.current = requestAnimationFrame(() => {
        A.current = null;
        const o1 = W.current, _1 = X.current;
        if (!o1 || !_1) return;
        const v1 = K.current - o1.top, A1 = 0, $1 = 8, k1 = Math.max(0, o1.height - 8), R1 = Math.max(0, o1.height - 0);
        let a1 = "below";
        const S1 = v1 >= A1 && v1 <= $1, P1 = v1 >= k1 && v1 <= R1;
        S1 ? a1 = "above" : P1 ? a1 = "below" : s ? a1 = "inside" : a1 = v1 < o1.height / 2 ? "above" : "below", a1 === "below" && S && !V && s && (a1 = "inside"), a1 !== C && i(a1);
        const x1 = _1.closest(".ListContainer"), j1 = x1 == null ? void 0 : x1.closest(
          ".ListItem"
        ), L1 = a1 === "inside" && s ? _1 : j1 || null;
        M.current !== L1 && (M.current && M.current.classList.remove("ListItem_drop-parent"), L1 && L1.classList.add("ListItem_drop-parent"), M.current = L1);
      }));
    }
  }, h1 = () => {
    v(!1), i(null), M.current && (M.current.classList.remove("ListItem_drop-parent"), M.current = null), A.current != null && (cancelAnimationFrame(A.current), A.current = null), W.current = null, X.current = null;
  }, w1 = (H) => {
    var q, t1, i1;
    if (o) {
      g(!0);
      const s1 = E.has(t) && E.size > 1, r1 = s1 ? Array.from(E) : [t];
      I !== "none" && !s1 && Z([t]);
      const d1 = { ids: r1 };
      try {
        (q = H.dataTransfer) == null || q.setData("application/json", JSON.stringify(d1));
      } catch {
      }
      (t1 = H.dataTransfer) == null || t1.setData("text/plain", r1[0]), window.__puiDraggingIds = r1;
      try {
        (i1 = H.dataTransfer) == null || i1.setDragImage(G, 0, 0);
      } catch {
      }
      b == null || b({ event: H });
    }
  }, H1 = (H) => {
    if (o) {
      v(!1), i(null), g(!1);
      try {
        delete window.__puiDraggingIds;
      } catch {
      }
      M.current && (M.current.classList.remove("ListItem_drop-parent"), M.current = null), x == null || x({ event: H });
    }
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: [U, n].join(" ").trim(),
      ref: (H) => {
        k.current = H, typeof D == "function" ? D(H) : D && (D.current = H);
      },
      ...T,
      onDragOver: e1,
      onDragLeave: h1,
      "data-nesting-level": l,
      "data-item-id": t,
      "data-accepts-children": s ? "true" : "false",
      style: `--level: ${l}`,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "ListItem__content",
            onClick: B,
            draggable: !!(o && a === "container"),
            onDragStart: a === "container" && o ? w1 : void 0,
            onDragEnd: a === "container" && o ? H1 : void 0,
            children: [
              f && /* @__PURE__ */ e(
                "div",
                {
                  className: "ListItem__collapse-toggle",
                  onClick: (H) => {
                    H.stopPropagation(), l1 ? w == null || w({
                      event: H,
                      collapsed: !V
                    }) : (R((q) => !q), w == null || w({
                      event: H,
                      collapsed: !V
                    }));
                  },
                  children: /* @__PURE__ */ e(
                    m1,
                    {
                      intent: "neutral",
                      intentModifiers: "secondary",
                      glyph: V ? "chevronRight" : "chevronDown",
                      size: 16
                    }
                  )
                }
              ),
              o && a !== "container" && /* @__PURE__ */ e(
                "div",
                {
                  className: "ListItem__drag-handle",
                  draggable: !0,
                  onDragStart: w1,
                  onDragEnd: H1,
                  children: /* @__PURE__ */ e(
                    m1,
                    {
                      glyph: "dragHandle",
                      fill: "var(--pui-color-neutral-icon-tertiary)",
                      size: 16
                    }
                  )
                }
              ),
              _ && /* @__PURE__ */ e("div", { className: "ListItem__children", children: _ })
            ]
          }
        ),
        h && /* @__PURE__ */ e("div", { className: "ListItem__sub-items", children: h })
      ]
    },
    t
  );
}, ae = z(
  A5
), E1 = M1(
  void 0
), $5 = () => {
  const n = Z1(E1);
  if (!n) throw new Error("ScrollContext not found");
  return n;
}, de = ({
  defaultPositionY: n = 0,
  positionY: t,
  onScroll: r,
  children: l
}) => {
  const [o, a] = J(n), [s, d] = J(n === 0), [u, f] = J(!1), w = j(null), b = t !== void 0 ? t : o, x = (c) => {
    const h = c.currentTarget || c.target;
    if (!h) return;
    const _ = h.scrollHeight - h.clientHeight;
    w.current = _;
    const T = _ > 0;
    let D = !1, E = !1, y;
    T ? (D = h.scrollTop <= 0, E = h.scrollTop >= _, y = D ? 0 : E ? _ : h.scrollTop) : y = 0, d(T ? D : !0), f(T ? E : !0), t === void 0 && a(y), r == null || r({ positionY: y });
  }, L = (c) => {
    a(c);
    const h = w.current, _ = typeof h == "number" && h > 0;
    d(_ ? c === 0 : !0), f(_ ? c >= h : !0);
  };
  Y(() => {
    t !== void 0 && L(t);
  }, [t]);
  const m = {
    positionY: b,
    isAtTop: s,
    isAtBottom: u,
    onScroll: x,
    setPositionY: L
  };
  return /* @__PURE__ */ e(E1.Provider, { value: m, children: l });
}, k5 = ({ className: n, children: t, ...r }, l) => {
  const { onScroll: o, positionY: a, isAtTop: s, isAtBottom: d } = $5(), u = j(null), f = j(null), w = j(null), [b, x] = J({ top: 0, height: 24 }), [L, m] = J(!1), [c, h] = J(!1), _ = j(0), T = j(!1), D = j(""), E = j(null), y = j(!1), I = O("ScrollContainer", void 0, void 0), Z = c1(() => {
    const i = f.current, p = w.current;
    if (!i || !p) return;
    const g = Math.max(0, i.scrollHeight - i.clientHeight), k = g > 0, M = k ? i.clientHeight / i.scrollHeight : 1, A = p.clientHeight - 8, K = Math.max(24, Math.round(A * M)), W = A - K, X = k ? Math.round(W * i.scrollTop / g) : 0;
    x({ top: X, height: K }), h(k);
  }, []), N = c1(() => {
    E.current == null && (E.current = requestAnimationFrame(() => {
      E.current = null, Z();
    }));
  }, [Z]);
  Y(() => {
    const i = f.current;
    if (!(!i || typeof a != "number"))
      try {
        const p = Math.max(0, i.scrollHeight - i.clientHeight), g = Math.max(0, Math.min(a, p));
        i.scrollTop !== g && (i.scrollTop = g), N();
      } catch {
      }
  }, [a, N]), Y(() => {
    N();
  }, [s, d, N]), Y(() => {
    const i = f.current;
    if (!i) return;
    const p = () => {
      if (y.current) {
        const k = Math.max(0, i.scrollHeight - i.clientHeight);
        i.scrollTop = k;
      }
      Z();
    }, g = new ResizeObserver(p);
    return g.observe(i), w.current && g.observe(w.current), () => g.disconnect();
  }, [Z]), Y(() => {
    Z();
    const i = requestAnimationFrame(() => Z());
    return () => cancelAnimationFrame(i);
  }, [Z]), Y(() => {
    const i = f.current;
    if (!i) return;
    const p = new MutationObserver(() => {
      if (y.current) {
        const g = Math.max(0, i.scrollHeight - i.clientHeight);
        i.scrollTop = g;
      }
      N();
    });
    return p.observe(i, { childList: !0, subtree: !0, characterData: !0 }), () => p.disconnect();
  }, [N]), Y(() => {
    const i = () => {
      requestAnimationFrame(() => Z());
    };
    return window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, [Z]);
  const n1 = (i) => {
    o(i);
    const p = f.current;
    if (p) {
      const g = Math.max(0, p.scrollHeight - p.clientHeight);
      y.current = g > 0 && Math.abs(g - p.scrollTop) <= 1;
    }
    N();
  }, G = (i) => {
    if (i.button !== 0) return;
    i.preventDefault(), m(!0), T.current = !0, Z();
    const p = i.clientY;
    _.current = p - (w.current.getBoundingClientRect().top + b.top + 2), D.current = document.body.style.userSelect, document.body.style.userSelect = "none", window.addEventListener("mousemove", $), window.addEventListener("mouseup", v);
  }, $ = (i) => {
    if (!T.current) return;
    const p = f.current, g = w.current;
    if (!p || !g) return;
    const k = Math.max(0, p.scrollHeight - p.clientHeight);
    if (k <= 0) return;
    const M = g.getBoundingClientRect(), A = i.clientY - M.top - 2 - _.current, K = g.clientHeight - 4, W = b.height, X = K - W;
    if (X <= 0) return;
    i.preventDefault();
    const l1 = Math.max(0, Math.min(X, A)), Q = Math.round(l1 * k / X);
    p.scrollTop !== Q && (p.scrollTop = Q, N());
  }, v = () => {
    m(!1), T.current = !1, document.body.style.userSelect = D.current, window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", v);
  }, C = O("ScrollContainer", "track", {
    noScroll: !c,
    dragging: L
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [I, n].join(" ").trim(),
      ref: (i) => {
        u.current = i, typeof l == "function" ? l(i) : l && (l.current = i);
      },
      ...r,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "ScrollContainer__content",
            ref: f,
            onScroll: (i) => n1(i),
            children: t
          }
        ),
        /* @__PURE__ */ e("div", { className: C, ref: w, children: /* @__PURE__ */ e(
          "div",
          {
            className: "ScrollContainer__thumb",
            style: {
              height: `${b.height}px`,
              transform: `translateY(${b.top}px)`
            },
            onMouseDown: (i) => G(i)
          }
        ) })
      ]
    }
  );
}, Ce = z(k5), R5 = ({ className: n, children: t, padding: r, ...l }, o) => {
  const a = O("Section", void 0, {
    ...r && r.top && { paddingTop: String(r.top) },
    ...r && r.right && { paddingRight: String(r.right) },
    ...r && r.bottom && { paddingBottom: String(r.bottom) },
    ...r && r.left && { paddingLeft: String(r.left) }
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [a, n].join(" ").trim(),
      ref: o,
      ...l,
      children: t
    }
  );
}, fe = z(
  R5
), S5 = ({ className: n, size: t, direction: r = "column", ...l }, o) => {
  const a = O("Spacing", void 0, {
    size: String(t),
    direction: r
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [a, n].join(" ").trim(),
      ref: o,
      ...l
    }
  );
}, ue = z(
  S5
), P5 = ({ className: n, ...t }, r) => {
  const l = O("Spinner", void 0, void 0);
  return /* @__PURE__ */ e(
    "div",
    {
      className: [l, n].join(" ").trim(),
      ref: r,
      ...t,
      children: /* @__PURE__ */ e("div", { className: "Spinner__spinner" })
    }
  );
}, he = z(
  P5
), j5 = ({
  className: n,
  direction: t = "column",
  spacing: r,
  x: l = "start",
  y: o = "start",
  fullHeight: a,
  fullWidth: s,
  children: d,
  ...u
}, f) => {
  const w = O("Stack", void 0, {
    direction: t,
    spacing: String(r),
    x: l,
    y: o,
    fullHeight: a,
    fullWidth: s
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [w, n].join(" ").trim(),
      ref: f,
      ...u,
      children: d
    }
  );
}, ve = z(j5), D1 = M1(void 0), I1 = () => {
  const n = Z1(D1);
  if (!n) throw new Error("TabContext not found");
  return n;
}, me = ({
  defaultValue: n = "",
  value: t,
  onChange: r,
  children: l
}) => {
  const [o, a] = J(n), s = t !== void 0 ? t : o, d = (f) => {
    t === void 0 && a(f), r == null || r({ value: f });
  };
  Y(() => {
    t !== void 0 && a(t);
  }, [t]);
  const u = {
    value: s,
    onChange: d,
    setValue: a
  };
  return /* @__PURE__ */ e(D1.Provider, { value: u, children: l });
}, F5 = ({
  className: n,
  value: t,
  variant: r = "default",
  prefix: l,
  suffix: o,
  children: a,
  onClick: s,
  ...d
}, u) => {
  const { value: f, onChange: w } = I1(), b = O("Tab", void 0, {
    variant: r,
    selected: t === f,
    prefix: !!l,
    suffix: !!o
  }), x = (m) => {
    m.stopPropagation(), w(t), s == null || s({ event: m, value: t });
  }, L = ({ fake: m = !1 }) => /* @__PURE__ */ e("div", { className: "Tab__content", children: [
    l && /* @__PURE__ */ e("div", { className: "Tab__prefix", children: l }),
    a && /* @__PURE__ */ e("div", { className: "Tab__children", children: /* @__PURE__ */ e(
      p1,
      {
        variant: "body",
        size: "medium",
        strong: m || t === f,
        intent: "neutral",
        intentModifiers: "default",
        interactive: !0,
        children: a
      }
    ) }),
    o && /* @__PURE__ */ e("div", { className: "Tab__suffix", children: o })
  ] });
  return /* @__PURE__ */ e(
    "button",
    {
      className: [b, n].join(" ").trim(),
      ref: u,
      ...d,
      onClick: x,
      children: [
        /* @__PURE__ */ e("div", { className: "Tab__container Tab__container_fake", children: /* @__PURE__ */ e(L, { fake: !0 }) }),
        /* @__PURE__ */ e("div", { className: "Tab__container Tab__container_real", children: /* @__PURE__ */ e(L, {}) })
      ]
    }
  );
}, pe = z(F5), U5 = ({ className: n, children: t, ...r }, l) => {
  const o = O("TabList", void 0, void 0);
  return /* @__PURE__ */ e(
    "div",
    {
      className: [o, n].join(" ").trim(),
      ref: l,
      ...r,
      children: t && /* @__PURE__ */ e("div", { className: "TabList__children", children: t })
    }
  );
}, we = z(
  U5
), O5 = ({ className: n, value: t, fullHeight: r, children: l, ...o }, a) => {
  const { value: s } = I1();
  if (t !== s) return /* @__PURE__ */ e(O1, {});
  const d = O("TabPanel", void 0, {
    selected: t === s,
    fullHeight: r
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: [d, n].join(" ").trim(),
      ref: a,
      ...o,
      children: /* @__PURE__ */ e("div", { className: "TabPanel__children", children: l })
    }
  );
}, ge = z(
  O5
), z5 = ({
  className: n,
  minWidth: t,
  minHeight: r,
  maxWidth: l,
  maxHeight: o,
  onResize: a,
  ...s
}, d) => {
  const u = O("WindowResizer", void 0, void 0);
  return Y(() => {
    const f = document.getElementById("WindowResizer");
    if (!f) return;
    let w, b, x, L, m = null, c = 0, h = 0;
    const _ = () => {
      a == null || a({ width: c, height: h }), m = null;
    }, T = (y) => {
      const I = Math.min(
        Math.max(x + y.clientX - w, t),
        l
      ), Z = Math.min(
        Math.max(L + y.clientY - b, r),
        o
      );
      c = I, h = Z, m === null && (m = requestAnimationFrame(_));
    }, D = () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", D), m !== null && (cancelAnimationFrame(m), m = null);
    }, E = (y) => {
      w = y.clientX, b = y.clientY, x = window.innerWidth, L = window.innerHeight, document.addEventListener("mousemove", T), document.addEventListener("mouseup", D);
    };
    return f.addEventListener("mousedown", E), () => {
      f.removeEventListener("mousedown", E), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", D);
    };
  }, [t, r, l, o, a]), /* @__PURE__ */ e(
    "div",
    {
      id: "WindowResizer",
      className: [u, n].join(" ").trim(),
      ref: d,
      ...s
    }
  );
}, Le = z(z5);
export {
  Q5 as Avatar,
  ee as Badge,
  te as Bar,
  ne as Button,
  e5 as ButtonIcon,
  re as ButtonIconToggle,
  oe as Checkbox,
  ie as Divider,
  m1 as Icon,
  se as Input,
  le as ListContainer,
  ce as ListContext,
  ae as ListItem,
  Ce as ScrollContainer,
  de as ScrollContext,
  fe as Section,
  ue as Spacing,
  he as Spinner,
  ve as Stack,
  pe as Tab,
  me as TabContext,
  we as TabList,
  ge as TabPanel,
  p1 as Text,
  Le as WindowResizer,
  G5 as figmaDark,
  J5 as figmaLight,
  K5 as radius,
  X5 as spacing,
  T1 as useListContext,
  $5 as useScrollContext,
  I1 as useTabContext
};
