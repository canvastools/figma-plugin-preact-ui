import "preact/compat";
import { jsx as p } from "./index.es178.js";
import { getHours as e } from "./index.es246.js";
import c from "./index.es280.js";
import { convert24to12 as t } from "./index.es271.js";
import { safeMin as x, safeMax as H } from "./index.es272.js";
function R({ amPm: n, maxTime: u, minTime: m, value: s, ...a }) {
  const i = x(12, u && (() => {
    const [r, o] = t(e(u));
    return o !== n ? null : r;
  })()), f = H(1, m && (() => {
    const [r, o] = t(e(m));
    return (
      // pm is always after am, so we should ignore validation
      o !== n || // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
      r === 12 ? null : r
    );
  })()), l = s ? t(s)[0].toString() : "";
  return p(c, { max: i, min: f, name: "hour12", nameForClass: "hour", value: l, ...a });
}
export {
  R as default
};
