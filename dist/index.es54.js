import { jsx as A } from "./index.es203.js";
import { createContext as S } from "preact";
import { useRef as h, useCallback as s, useMemo as I, useContext as V } from "preact/hooks";
import { TOOLTIP_DEFAULT_HIDE_DELAY as w, TOOLTIP_DEFAULT_SHOW_DELAY as k } from "./index.es55.js";
const P = S(void 0), b = (u) => (u == null ? void 0 : u.showDelay) ?? k, E = (u) => (u == null ? void 0 : u.hideDelay) ?? w, M = () => V(P), W = ({ children: u }) => {
  const O = h(null), i = h({
    ref: null,
    setOpen: null
  }), c = h({
    ref: null,
    setOpen: null,
    hideDelay: w
  }), r = h(null), a = h(null), T = s((e, t) => {
    i.current = { ref: e, setOpen: t };
  }, []), D = s(() => {
    i.current = { ref: null, setOpen: null };
  }, []), v = s((e, t, l = w) => {
    O.current = Date.now(), c.current = {
      ref: e,
      setOpen: t,
      hideDelay: l
    }, a.current != null && clearTimeout(a.current), a.current = window.setTimeout(() => {
      a.current = null;
      const n = c.current;
      !n.ref || !n.setOpen || (n.setOpen(!1), i.current.ref && i.current.ref === n.ref && D(), c.current = {
        ref: null,
        setOpen: null,
        hideDelay: w
      });
    }, l);
  }, [D]), m = s(() => {
    a.current != null && (clearTimeout(a.current), a.current = null), c.current = {
      ref: null,
      setOpen: null,
      hideDelay: w
    };
  }, []), y = s(
    (e, t, l) => {
      r.current != null && clearTimeout(r.current);
      const n = () => {
        t(!0), T(e, t);
      };
      if (l === 0) {
        n();
        return;
      }
      r.current = window.setTimeout(() => {
        r.current = null, n();
      }, l);
    },
    [T]
  ), g = s(
    (e, t, l) => {
      var d, o;
      const n = b(l), L = Date.now(), p = O.current, x = c.current.hideDelay;
      if (p != null && L - p < x && c.current.ref && c.current.setOpen) {
        const f = c.current;
        m(), f.ref === e ? ((d = f.setOpen) == null || d.call(f, !0), T(e, f.setOpen ?? null)) : ((o = f.setOpen) == null || o.call(f, !1), t(!0), T(e, t)), r.current != null && (clearTimeout(r.current), r.current = null);
        return;
      }
      y(e, t, n);
    },
    [m, y, T]
  ), C = s(
    () => {
      r.current != null && (clearTimeout(r.current), r.current = null);
      const e = i.current;
      e.ref && e.setOpen && (e.setOpen(!1), D()), m(), O.current = null;
    },
    [m, D]
  ), H = s(
    (e, t, l) => {
      const n = E(l);
      r.current != null && (clearTimeout(r.current), r.current = null), !(!i.current.ref || i.current.ref !== e) && v(e, t, n);
    },
    [v]
  ), R = s(
    (e, t, l) => {
      const n = b(l), L = E(l), p = Date.now(), x = O.current, d = c.current;
      if (x != null && p - x < d.hideDelay && d.ref === e && d.setOpen && a.current != null) {
        m(), t(!0), T(e, t), r.current != null && (clearTimeout(r.current), r.current = null);
        return;
      }
      r.current != null && (clearTimeout(r.current), r.current = null);
      const o = i.current;
      if (o.ref === e && o.setOpen) {
        v(e, t, L);
        return;
      }
      o.ref && o.setOpen && o.ref !== e && (o.setOpen(!1), D()), m(), y(e, t, n);
    },
    [m, D, v, y, T]
  ), _ = I(
    () => ({
      registerHoverStart: g,
      registerHoverEnd: H,
      registerPointerDown: C,
      registerClick: R
    }),
    [g, H, C, R]
  );
  return /* @__PURE__ */ A(P.Provider, { value: _, children: u });
};
export {
  W as TooltipContext,
  M as useTooltipContext
};
