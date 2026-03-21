import { jsx as d } from "./index.es129.js";
import { createContext as C } from "preact";
import { useRef as s, useCallback as O, useMemo as D, useContext as E } from "preact/hooks";
const v = C(void 0), H = 1200, w = 480, h = () => E(v), A = ({ children: i }) => {
  const f = s(null), r = s({
    ref: null,
    setOpen: null
  }), n = s({
    ref: null,
    setOpen: null
  }), e = s(null), u = s(null), a = O((l, o) => {
    var T, x;
    const c = Date.now(), m = f.current;
    if (m != null && c - m < w && n.current.ref && n.current.setOpen) {
      u.current != null && (clearTimeout(u.current), u.current = null);
      const t = n.current;
      t.ref === l ? ((T = t.setOpen) == null || T.call(t, !0), r.current = {
        ref: l,
        setOpen: t.setOpen ?? null
      }) : ((x = t.setOpen) == null || x.call(t, !1), o(!0), r.current = {
        ref: l,
        setOpen: o
      }), n.current = {
        ref: null,
        setOpen: null
      }, e.current != null && (clearTimeout(e.current), e.current = null);
      return;
    }
    e.current != null && clearTimeout(e.current), e.current = window.setTimeout(() => {
      e.current = null, o(!0), r.current = {
        ref: l,
        setOpen: o
      };
    }, H);
  }, []), p = O((l, o) => {
    e.current != null && (clearTimeout(e.current), e.current = null), !(!r.current.ref || r.current.ref !== l) && (f.current = Date.now(), n.current = {
      ref: l,
      setOpen: o
    }, u.current != null && clearTimeout(u.current), u.current = window.setTimeout(() => {
      u.current = null;
      const c = n.current;
      !c.ref || !c.setOpen || (c.setOpen(!1), r.current.ref && r.current.ref === c.ref && (r.current = {
        ref: null,
        setOpen: null
      }), n.current = {
        ref: null,
        setOpen: null
      });
    }, w));
  }, []), R = D(
    () => ({
      registerHoverStart: a,
      registerHoverEnd: p
    }),
    [a, p]
  );
  return /* @__PURE__ */ d(v.Provider, { value: R, children: i });
};
export {
  A as TooltipContext,
  h as useTooltipContext
};
