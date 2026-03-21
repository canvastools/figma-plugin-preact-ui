function o(e, t) {
  let r = Number(e);
  return t === "am" && r === 12 ? r = 0 : t === "pm" && r < 12 && (r += 12), r;
}
function n(e) {
  return [Number(e) % 12 || 12, Number(e) < 12 ? "am" : "pm"];
}
export {
  o as convert12to24,
  n as convert24to12
};
