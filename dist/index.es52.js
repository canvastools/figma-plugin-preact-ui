import { jsx as A } from "./index.es178.js";
import { createContext as S } from "preact";
import { useRef as O, useCallback as s, useMemo as I, useContext as V } from "preact/hooks";
import { TOOLTIP_DEFAULT_HIDE_DELAY as v, TOOLTIP_DEFAULT_SHOW_DELAY as k } from "./index.es53.js";
const P = S(void 0), E = (u) => (u == null ? void 0 : u.showDelay) ?? k, g = (u) => (u == null ? void 0 : u.hideDelay) ?? v, M = () => V(P), W = ({ children: u }) => {
  const L = O(null), i = O({
    ref: null,
    setOpen: null
  }), c = O({
    ref: null,
    setOpen: null,
    hideDelay: v
  }), r = O(null), a = O(null), T = s((e, t) => {
    i.current = { ref: e, setOpen: t };
  }, []), m = s(() => {
    i.current = { ref: null, setOpen: null };
  }, []), d = s((e, t, l = v) => {
    L.current = Date.now(), c.current = {
      ref: e,
      setOpen: t,
      hideDelay: l
    }, a.current != null && clearTimeout(a.current), a.current = window.setTimeout(() => {
      a.current = null;
      const n = c.current;
      !n.ref || !n.setOpen || (n.setOpen(!1), i.current.ref && i.current.ref === n.ref && m(), c.current = {
        ref: null,
        setOpen: null,
        hideDelay: v
      });
    }, l);
  }, [m]), w = s(() => {
    a.current != null && (clearTimeout(a.current), a.current = null), c.current = {
      ref: null,
      setOpen: null,
      hideDelay: v
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
  ), C = s(
    (e, t, l) => {
      var h, o;
      const n = E(l), D = Date.now(), p = L.current, x = c.current.hideDelay;
      if (p != null && D - p < x && c.current.ref && c.current.setOpen) {
        const f = c.current;
        w(), f.ref === e ? ((h = f.setOpen) == null || h.call(f, !0), T(e, f.setOpen ?? null)) : ((o = f.setOpen) == null || o.call(f, !1), t(!0), T(e, t)), r.current != null && (clearTimeout(r.current), r.current = null);
        return;
      }
      y(e, t, n);
    },
    [w, y, T]
  ), H = s(
    (e, t, l) => {
      const n = g(l);
      r.current != null && (clearTimeout(r.current), r.current = null);
      const D = i.current;
      D.ref && D.setOpen && (D.setOpen(!1), m()), d(e, t, n);
    },
    [m, d]
  ), R = s(
    (e, t, l) => {
      const n = g(l);
      r.current != null && (clearTimeout(r.current), r.current = null), !(!i.current.ref || i.current.ref !== e) && d(e, t, n);
    },
    [d]
  ), b = s(
    (e, t, l) => {
      const n = E(l), D = g(l), p = Date.now(), x = L.current, h = c.current;
      if (x != null && p - x < h.hideDelay && h.ref === e && h.setOpen && a.current != null) {
        w(), t(!0), T(e, t), r.current != null && (clearTimeout(r.current), r.current = null);
        return;
      }
      r.current != null && (clearTimeout(r.current), r.current = null);
      const o = i.current;
      if (o.ref === e && o.setOpen) {
        d(e, t, D);
        return;
      }
      o.ref && o.setOpen && o.ref !== e && (o.setOpen(!1), m()), w(), y(e, t, n);
    },
    [w, m, d, y, T]
  ), _ = I(
    () => ({
      registerHoverStart: C,
      registerHoverEnd: R,
      registerPointerDown: H,
      registerClick: b
    }),
    [C, R, H, b]
  );
  return /* @__PURE__ */ A(P.Provider, { value: _, children: u });
};
export {
  W as TooltipContext,
  M as useTooltipContext
};
