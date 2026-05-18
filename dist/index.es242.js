function e(r) {
  return r !== null && r !== !1 && !Number.isNaN(Number(r));
}
function t() {
  for (var r = [], a = 0; a < arguments.length; a++)
    r[a] = arguments[a];
  return Math.max.apply(Math, r.filter(e));
}
export {
  t as safeMax
};
