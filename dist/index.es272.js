import { getFormatter as c } from "./index.es270.js";
const p = ["9", "٩"], a = new RegExp(`[${p.join("")}]`), o = c({ hour: "numeric" });
function g(t) {
  const u = o(t, new Date(2017, 0, 1, 9)), f = o(t, new Date(2017, 0, 1, 21)), [r, i] = u.split(a), [m, n] = f.split(a);
  if (n !== void 0) {
    if (r !== m)
      return [r, m].map((e) => e.trim());
    if (i !== n)
      return [i, n].map((e) => e.trim());
  }
  return ["AM", "PM"];
}
function s(t) {
  return t !== null && t !== !1 && !Number.isNaN(Number(t));
}
function M(...t) {
  return Math.min(...t.filter(s));
}
function x(...t) {
  return Math.max(...t.filter(s));
}
export {
  g as getAmPmLabels,
  x as safeMax,
  M as safeMin
};
