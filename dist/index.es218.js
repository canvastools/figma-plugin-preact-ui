import "preact/compat";
import { jsx as m } from "./index.es129.js";
import { getMinutes as r, getHours as p } from "./index.es197.js";
import M from "./index.es231.js";
import { safeMin as c, safeMax as g } from "./index.es223.js";
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
