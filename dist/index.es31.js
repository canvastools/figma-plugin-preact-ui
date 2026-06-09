import { jsx as l } from "./index.es178.js";
import { createContext as m } from "preact";
import { useEffect as v, useContext as x } from "preact/hooks";
const a = m(void 0), y = () => {
  const o = x(a);
  if (!o) throw new Error("PopoverContext not found");
  return o;
}, C = ({ triggerRef: o, anchorRef: s, open: t, setOpen: n, children: w }) => {
  const E = {
    triggerRef: o,
    anchorRef: s ?? o,
    open: t !== void 0 ? t : !1,
    setOpen: n
  };
  return v(() => {
    if (!(o != null && o.current)) return;
    const r = o.current, c = (u) => {
      u.preventDefault(), n == null || n(!t);
    }, e = (u) => {
      const { key: d } = u;
      if (d === "Enter" || d === " ") {
        if (t) return;
        u.preventDefault(), n == null || n(!0);
        return;
      }
    };
    return r.addEventListener("mousedown", c), r.addEventListener("keydown", e), () => {
      r.removeEventListener("mousedown", c), r.removeEventListener("keydown", e);
    };
  }, [o, t, n]), v(() => {
    if (!t) return;
    const r = (c) => {
      var u;
      const { key: e } = c;
      e !== "Escape" && e !== "Esc" || (c.preventDefault(), n == null || n(!1), (u = o == null ? void 0 : o.current) == null || u.focus());
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, o]), /* @__PURE__ */ l(a.Provider, { value: E, children: w });
};
export {
  C as PopoverContext,
  y as usePopoverContext
};
