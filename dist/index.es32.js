import { jsx as f } from "./index.es203.js";
import { createContext as i } from "preact";
import { useMemo as l, useEffect as v, useContext as x } from "preact/hooks";
import { useRefElement as h } from "./index.es233.js";
const s = i(void 0), P = () => {
  const r = x(s);
  if (!r) throw new Error("PopoverContext not found");
  return r;
}, D = ({ triggerRef: r, anchorRef: m, open: t, setOpen: o, children: E }) => {
  const a = m ?? r, e = h(r), w = l(
    () => ({
      triggerRef: r,
      anchorRef: a,
      open: t !== void 0 ? t : !1,
      setOpen: o
    }),
    [r, a, t, o]
  );
  return v(() => {
    if (!e) return;
    const u = (n) => {
      n.preventDefault(), o == null || o(!t);
    }, c = (n) => {
      const { key: d } = n;
      if (d === "Enter" || d === " ") {
        if (t) return;
        n.preventDefault(), o == null || o(!0);
        return;
      }
    };
    return e.addEventListener("mousedown", u), e.addEventListener("keydown", c), () => {
      e.removeEventListener("mousedown", u), e.removeEventListener("keydown", c);
    };
  }, [e, t, o]), v(() => {
    if (!t) return;
    const u = (c) => {
      var d;
      const { key: n } = c;
      n !== "Escape" && n !== "Esc" || (c.preventDefault(), o == null || o(!1), (d = r == null ? void 0 : r.current) == null || d.focus());
    };
    return window.addEventListener("keydown", u), () => {
      window.removeEventListener("keydown", u);
    };
  }, [t, o, r]), /* @__PURE__ */ f(s.Provider, { value: w, children: E });
};
export {
  D as PopoverContext,
  P as usePopoverContext
};
