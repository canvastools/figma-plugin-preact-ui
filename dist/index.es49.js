import "./index.es49.css";
import { jsx as a } from "./index.es129.js";
import { Fragment as rt } from "preact";
import { useState as x, useRef as nt, useEffect as C } from "preact/hooks";
import ot from "./index.es175.js";
import { Text as it } from "./index.es47.js";
import { Tooltip as st } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as ct } from "./index.es131.js";
import { bem as ut } from "./index.es62.js";
const at = ({
  id: M,
  className: $,
  locale: z = "en-US",
  variant: f = "default",
  label: k,
  maxWidth: p,
  defaultDate: E = void 0,
  date: s,
  format: U = "HH:mm",
  hourPlaceholder: q = "HH",
  minutePlaceholder: j = "mm",
  maxTime: L = "23:59:59",
  minTime: v = "00:00:00",
  disabled: d = !1,
  autoFocus: w = !1,
  tooltip: N,
  grouped: I,
  onTimeChange: S,
  onBlur: g,
  onFocus: y,
  onKeyDown: D,
  ...B
}, A) => {
  const c = s !== void 0, u = (t) => t == null || t === "" ? null : typeof t == "number" ? new Date(t) : t, T = (t) => {
    const e = u(t);
    if (!e) return "";
    if (typeof e == "string") return e;
    const r = e.getHours().toString().padStart(2, "0"), n = e.getMinutes().toString().padStart(2, "0");
    return `${r}:${n}`;
  }, J = (t, e) => {
    const r = T(e);
    if (!r) return null;
    const [n, o, i] = r.split(":"), V = Number(n ?? 0), l = Number(o ?? 0), m = Number(i ?? 0), h = new Date(t);
    return h.setHours(V, l, m, 0), h;
  }, [_, O] = x(() => u(E ?? null)), Q = c ? s : _, b = (t) => t != null && t !== "", [X, R] = x(() => b(Q)), Y = ut("TimePicker", void 0, {
    filled: X,
    disabled: !!d,
    variant: f,
    label: !!k,
    grouped: !!I,
    groupedPosition: I ?? void 0
  }), G = nt(null), Z = (t, e) => {
    if (t) {
      if (typeof t == "function") {
        t(e);
        return;
      }
      t.current = e;
    }
  }, F = (t) => {
    G.current = t, Z(A, t);
  }, H = (t) => {
    const e = c ? s : _, r = u(t), n = T(r), i = u(e) instanceof Date && r !== null && e instanceof Date ? J(e, r) : r;
    c || O(i), R(b(i)), S == null || S({
      date: i,
      time: n
    });
  };
  C(() => {
    c && R(b(s));
  }, [c, s]), C(() => {
    if (!w || d) return;
    const t = setTimeout(() => {
      var r;
      const e = (r = G.current) == null ? void 0 : r.querySelector(".react-time-picker__inputGroup__hour");
      e == null || e.focus();
    }, 0);
    return () => clearTimeout(t);
  }, [w, d]);
  const W = (t) => {
    const e = t.target, r = e == null ? void 0 : e.closest(".react-time-picker__inputGroup");
    if (!r || e != null && e.closest("input, select, textarea, button")) return;
    const n = r.querySelector(".react-time-picker__inputGroup__hour");
    n && (t.preventDefault(), n.focus());
  }, K = (t) => {
    const e = t.currentTarget ?? void 0, r = t.relatedTarget;
    r && (e != null && e.contains(r)) || y == null || y({ ...P(), event: t });
  }, tt = (t) => {
    const e = t.currentTarget ?? void 0, r = t.relatedTarget;
    r && (e == null ? void 0 : e.contains(r)) || g == null || g({ ...P(), event: t });
    const o = t.target;
    if (!o) return;
    const i = o.classList.contains("react-time-picker__inputGroup__hour"), V = o.classList.contains("react-time-picker__inputGroup__minute");
    if (!i && !V) return;
    if (i) {
      if (o.value !== "") return;
      H(null);
      return;
    }
    if (o.value !== "") return;
    const l = o.closest(".react-time-picker__inputGroup"), m = l == null ? void 0 : l.querySelector(".react-time-picker__inputGroup__hour");
    if (!m || m.value === "") return;
    const h = m.value.padStart(2, "0");
    H(`${h}:00`);
  }, P = () => {
    const t = c ? s : _;
    return {
      date: u(t) ?? void 0,
      time: T(t)
    };
  }, et = (t) => {
    const e = t.key;
    if (D == null || D({ ...P(), event: t }), e === "Escape" || e === "Esc" || e === "Enter") {
      t.stopPropagation(), t.preventDefault();
      const r = t.target;
      r && typeof r.blur == "function" && r.blur();
    }
  };
  return /* @__PURE__ */ a(rt, { children: [
    /* @__PURE__ */ a("div", { id: M, className: [Y, $].join(" ").trim(), ref: F, children: [
      k && /* @__PURE__ */ a(
        it,
        {
          className: "TimePicker__label",
          intentModifier: "secondary",
          size: f === "list" ? "medium" : "small",
          truncate: !0,
          children: k
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          className: "TimePicker__container",
          "data-pui-interactive": "true",
          onKeyDown: et,
          onMouseDown: W,
          onFocus: K,
          onBlur: tt,
          style: {
            maxWidth: f === "default" ? void 0 : typeof p == "number" ? `${p}px` : p,
            flexShrink: f === "default" ? void 0 : p ? 0 : void 0
          },
          children: /* @__PURE__ */ a(
            ot,
            {
              ...B,
              locale: z,
              value: u(c ? s : _),
              format: U,
              hourPlaceholder: q,
              minutePlaceholder: j,
              maxTime: L,
              minTime: v,
              disabled: d,
              onChange: (t) => {
                H(t);
              },
              disableClock: !0,
              clearIcon: null
            }
          )
        }
      )
    ] }),
    N && /* @__PURE__ */ a(st, { anchorRef: G, children: N })
  ] });
}, gt = ct(at);
export {
  gt as TimePicker
};
