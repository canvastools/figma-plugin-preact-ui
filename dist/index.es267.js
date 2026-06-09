import "preact/compat";
import { jsx as m } from "./index.es178.js";
import { getMinutes as r, getHours as p } from "./index.es246.js";
import M from "./index.es280.js";
import { safeMin as c, safeMax as g } from "./index.es272.js";
function h({ hour: u, maxTime: t, minTime: n, showLeadingZeros: e = !0, ...i }) {
  function o(f) {
    return u === p(f).toString();
  }
  const s = c(59, t && o(t) && r(t)), a = g(0, n && o(n) && r(n));
  return m(M, { max: s, min: a, name: "minute", showLeadingZeros: e, ...i });
}
export {
  h as default
};
