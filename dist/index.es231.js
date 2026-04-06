import "preact/compat";
import { jsx as a } from "./index.es143.js";
import { getHours as t } from "./index.es211.js";
import s from "./index.es245.js";
import { safeMin as f, safeMax as p } from "./index.es237.js";
function h({ maxTime: o, minTime: r, ...u }) {
  const m = f(23, o && t(o)), n = p(0, r && t(r));
  return a(s, { max: m, min: n, name: "hour24", nameForClass: "hour", ...u });
}
export {
  h as default
};
