import "preact/compat";
import { jsx as p } from "./index.es203.js";
import { getSeconds as e, getHours as m, getMinutes as S } from "./index.es274.js";
import d from "./index.es308.js";
import { safeMin as g, safeMax as M } from "./index.es300.js";
function w({ hour: s, maxTime: o, minTime: t, minute: u, showLeadingZeros: i = !0, ...c }) {
  function n(r) {
    return s === m(r).toString() && u === S(r).toString();
  }
  const f = g(59, o && n(o) && e(o)), a = M(0, t && n(t) && e(t));
  return p(d, { max: f, min: a, name: "second", showLeadingZeros: i, ...c });
}
export {
  w as default
};
