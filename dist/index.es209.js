import "preact/compat";
import { jsx as o } from "./index.es129.js";
import { clsx as oe } from "./index.es180.js";
import { getHours as C, getMinutes as u, getSeconds as a, getMilliseconds as s } from "./index.es197.js";
import h from "./index.es224.js";
import P from "./index.es225.js";
import de from "./index.es226.js";
import { formatHour as ie } from "./index.es227.js";
import { safeMax as ue } from "./index.es228.js";
function pe(e) {
  var T = e.className, m = e.formatHour, q = m === void 0 ? ie : m, c = e.hourHandLength, D = c === void 0 ? 50 : c, $ = e.hourHandOppositeLength, l = e.hourHandWidth, A = l === void 0 ? 4 : l, g = e.hourMarksLength, f = g === void 0 ? 10 : g, H = e.hourMarksWidth, B = H === void 0 ? 3 : H, E = e.locale, p = e.minuteHandLength, G = p === void 0 ? 70 : p, I = e.minuteHandOppositeLength, v = e.minuteHandWidth, J = v === void 0 ? 2 : v, M = e.minuteMarksLength, k = M === void 0 ? 6 : M, L = e.minuteMarksWidth, K = L === void 0 ? 1 : L, W = e.renderHourMarks, d = W === void 0 ? !0 : W, b = e.renderMinuteHand, N = b === void 0 ? !0 : b, F = e.renderMinuteMarks, w = F === void 0 ? !0 : F, Q = e.renderNumbers, O = e.renderSecondHand, S = O === void 0 ? !0 : O, x = e.secondHandLength, R = x === void 0 ? 90 : x, U = e.secondHandOppositeLength, j = e.secondHandWidth, V = j === void 0 ? 1 : j, y = e.size, z = y === void 0 ? 150 : y, i = e.useMillisecondPrecision, n = e.value;
  function X() {
    if (!w)
      return null;
    for (var t = [], r = 1; r <= 60; r += 1) {
      var te = d && !(r % 5);
      te || t.push(o(P, { angle: r * 6, length: k, name: "minute", width: K }, "minute_".concat(r)));
    }
    return t;
  }
  function Y() {
    if (!d)
      return null;
    for (var t = [], r = 1; r <= 12; r += 1)
      t.push(o(P, { angle: r * 30, length: f, name: "hour", width: B }, "hour_".concat(r)));
    return t;
  }
  function Z() {
    if (!Q)
      return null;
    for (var t = [], r = 1; r <= 12; r += 1)
      t.push(o(de, { angle: r * 30, length: ue(d && f, w && k, 0), name: "number", number: q(E, r) }, "number_".concat(r)));
    return t;
  }
  function _() {
    return o("div", { className: "react-clock__face", children: [X(), Y(), Z()] });
  }
  function ee() {
    var t = n ? C(n) * 30 + u(n) / 2 + a(n) / 120 + (i ? s(n) / 12e4 : 0) : 0;
    return o(h, { angle: t, length: D, name: "hour", oppositeLength: $, width: A });
  }
  function ne() {
    if (!N)
      return null;
    var t = n ? C(n) * 360 + u(n) * 6 + a(n) / 10 + (i ? s(n) / 1e4 : 0) : 0;
    return o(h, { angle: t, length: G, name: "minute", oppositeLength: I, width: J });
  }
  function re() {
    if (!S)
      return null;
    var t = n ? u(n) * 360 + a(n) * 6 + (i ? s(n) * 6e-3 : 0) : 0;
    return o(h, { angle: t, length: R, name: "second", oppositeLength: U, width: V });
  }
  return o("time", { className: oe("react-clock", T), dateTime: n instanceof Date ? (
    // Returns a string in the format "HH:MM" or "HH:MM:SS"
    n.toLocaleTimeString("en", {
      hourCycle: "h23",
      hour: "2-digit",
      minute: N ? "2-digit" : void 0,
      second: S ? "2-digit" : void 0
    })
  ) : n || void 0, style: {
    width: z,
    height: z
  }, children: [_(), ee(), ne(), re()] });
}
export {
  pe as default
};
