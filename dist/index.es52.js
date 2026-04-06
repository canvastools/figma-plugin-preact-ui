import { jsx as C } from "./index.es143.js";
import { createContext as H } from "preact";
import { useRef as s, useCallback as f, useMemo as g, useContext as h } from "preact/hooks";
const D = H(void 0), E = 1200, v = 480, A = () => h(D), S = ({ children: a }) => {
  const p = s(null), t = s({
    ref: null,
    setOpen: null
  }), c = s({
    ref: null,
    setOpen: null
  }), e = s(null), o = s(null), i = f((r, n) => {
    p.current = Date.now(), c.current = {
      ref: r,
      setOpen: n
    }, o.current != null && clearTimeout(o.current), o.current = window.setTimeout(() => {
      o.current = null;
      const u = c.current;
      !u.ref || !u.setOpen || (u.setOpen(!1), t.current.ref && t.current.ref === u.ref && (t.current = {
        ref: null,
        setOpen: null
      }), c.current = {
        ref: null,
        setOpen: null
      });
    }, v);
  }, []), m = f((r, n) => {
    var x, d;
    const u = Date.now(), w = p.current;
    if (w != null && u - w < v && c.current.ref && c.current.setOpen) {
      o.current != null && (clearTimeout(o.current), o.current = null);
      const l = c.current;
      l.ref === r ? ((x = l.setOpen) == null || x.call(l, !0), t.current = {
        ref: r,
        setOpen: l.setOpen ?? null
      }) : ((d = l.setOpen) == null || d.call(l, !1), n(!0), t.current = {
        ref: r,
        setOpen: n
      }), c.current = {
        ref: null,
        setOpen: null
      }, e.current != null && (clearTimeout(e.current), e.current = null);
      return;
    }
    e.current != null && clearTimeout(e.current), e.current = window.setTimeout(() => {
      e.current = null, n(!0), t.current = {
        ref: r,
        setOpen: n
      };
    }, E);
  }, []), T = f(
    (r, n) => {
      e.current != null && (clearTimeout(e.current), e.current = null);
      const u = t.current;
      u.ref && u.setOpen && (u.setOpen(!1), t.current = {
        ref: null,
        setOpen: null
      }), i(r, n);
    },
    [i]
  ), O = f(
    (r, n) => {
      e.current != null && (clearTimeout(e.current), e.current = null), !(!t.current.ref || t.current.ref !== r) && i(r, n);
    },
    [i]
  ), R = g(
    () => ({
      registerHoverStart: m,
      registerHoverEnd: O,
      registerPointerDown: T
    }),
    [m, O, T]
  );
  return /* @__PURE__ */ C(D.Provider, { value: R, children: a });
};
export {
  S as TooltipContext,
  A as useTooltipContext
};
