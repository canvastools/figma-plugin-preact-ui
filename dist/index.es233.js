import { useState as s, useEffect as c } from "preact/hooks";
const m = (t) => {
  const [l, u] = s((t == null ? void 0 : t.current) ?? null);
  return c(() => {
    const n = (t == null ? void 0 : t.current) ?? null;
    u((e) => e === n ? e : n);
  }), l;
};
export {
  m as useRefElement
};
