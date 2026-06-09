import u, { useRef as g, useLayoutEffect as re, useEffect as y, useState as te, useCallback as ne, useMemo as oe } from "preact/compat";
function m() {
  return (m = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
function q(e, r) {
  if (e == null) return {};
  var t, n, o = {}, a = Object.keys(e);
  for (n = 0; n < a.length; n++) r.indexOf(t = a[n]) >= 0 || (o[t] = e[t]);
  return o;
}
function H(e) {
  var r = g(e), t = g(function(n) {
    r.current && r.current(n);
  });
  return r.current = e, t.current;
}
var _ = function(e, r, t) {
  return r === void 0 && (r = 0), t === void 0 && (t = 1), e > t ? t : e < r ? r : e;
}, C = function(e) {
  return "touches" in e;
}, I = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, S = function(e, r, t) {
  var n = e.getBoundingClientRect(), o = C(r) ? function(a, c) {
    for (var l = 0; l < a.length; l++) if (a[l].identifier === c) return a[l];
    return a[0];
  }(r.touches, t) : r;
  return { left: _((o.pageX - (n.left + I(e).pageXOffset)) / n.width), top: _((o.pageY - (n.top + I(e).pageYOffset)) / n.height) };
}, R = function(e) {
  !C(e) && e.preventDefault();
}, z = u.memo(function(e) {
  var r = e.onMove, t = e.onKey, n = q(e, ["onMove", "onKey"]), o = g(null), a = H(r), c = H(t), l = g(null), f = g(!1), i = oe(function() {
    var Z = function(h) {
      R(h), (C(h) ? h.touches.length > 0 : h.buttons > 0) && o.current ? a(S(o.current, h, l.current)) : w(!1);
    }, $ = function() {
      return w(!1);
    };
    function w(h) {
      var v = f.current, p = I(o.current), x = h ? p.addEventListener : p.removeEventListener;
      x(v ? "touchmove" : "mousemove", Z), x(v ? "touchend" : "mouseup", $);
    }
    return [function(h) {
      var v = h.nativeEvent, p = o.current;
      if (p && (R(v), !function(G, ee) {
        return ee && !C(G);
      }(v, f.current) && p)) {
        if (C(v)) {
          f.current = !0;
          var x = v.changedTouches || [];
          x.length && (l.current = x[0].identifier);
        }
        p.focus(), a(S(p, v, l.current)), w(!0);
      }
    }, function(h) {
      var v = h.which || h.keyCode;
      v < 37 || v > 40 || (h.preventDefault(), c({ left: v === 39 ? 0.05 : v === 37 ? -0.05 : 0, top: v === 40 ? 0.05 : v === 38 ? -0.05 : 0 }));
    }, w];
  }, [c, a]), d = i[0], b = i[1], P = i[2];
  return y(function() {
    return P;
  }, [P]), u.createElement("div", m({}, n, { onTouchStart: d, onMouseDown: d, className: "react-colorful__interactive", ref: o, onKeyDown: b, tabIndex: 0, role: "slider" }));
}), E = function(e) {
  return e.filter(Boolean).join(" ");
}, D = function(e) {
  var r = e.color, t = e.left, n = e.top, o = n === void 0 ? 0.5 : n, a = E(["react-colorful__pointer", e.className]);
  return u.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * t + "%" } }, u.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: r } }));
}, s = function(e, r, t) {
  return r === void 0 && (r = 0), t === void 0 && (t = Math.pow(10, r)), Math.round(t * e) / t;
}, A = function(e) {
  return L(O(e));
}, O = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? s(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? s(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, B = function(e) {
  return ae(K(e));
}, X = function(e) {
  var r = e.s, t = e.v, n = e.a, o = (200 - r) * t / 100;
  return { h: s(e.h), s: s(o > 0 && o < 200 ? r * t / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: s(o / 2), a: s(n, 2) };
}, j = function(e) {
  var r = X(e);
  return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, k = function(e) {
  var r = X(e);
  return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
}, K = function(e) {
  var r = e.h, t = e.s, n = e.v, o = e.a;
  r = r / 360 * 6, t /= 100, n /= 100;
  var a = Math.floor(r), c = n * (1 - t), l = n * (1 - (r - a) * t), f = n * (1 - (1 - r + a) * t), i = a % 6;
  return { r: s(255 * [n, l, c, c, f, n][i]), g: s(255 * [f, n, n, l, c, c][i]), b: s(255 * [c, c, f, n, n, l][i]), a: s(o, 2) };
}, M = function(e) {
  var r = e.toString(16);
  return r.length < 2 ? "0" + r : r;
}, ae = function(e) {
  var r = e.r, t = e.g, n = e.b, o = e.a, a = o < 1 ? M(s(255 * o)) : "";
  return "#" + M(r) + M(t) + M(n) + a;
}, L = function(e) {
  var r = e.r, t = e.g, n = e.b, o = e.a, a = Math.max(r, t, n), c = a - Math.min(r, t, n), l = c ? a === r ? (t - n) / c : a === t ? 2 + (n - r) / c : 4 + (r - t) / c : 0;
  return { h: s(60 * (l < 0 ? l + 6 : l)), s: s(a ? c / a * 100 : 0), v: s(a / 255 * 100), a: o };
}, Y = u.memo(function(e) {
  var r = e.hue, t = e.onChange, n = E(["react-colorful__hue", e.className]);
  return u.createElement("div", { className: n }, u.createElement(z, { onMove: function(o) {
    t({ h: 360 * o.left });
  }, onKey: function(o) {
    t({ h: _(r + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": s(r), "aria-valuemax": "360", "aria-valuemin": "0" }, u.createElement(D, { className: "react-colorful__hue-pointer", left: r / 360, color: j({ h: r, s: 100, v: 100, a: 1 }) })));
}), V = u.memo(function(e) {
  var r = e.hsva, t = e.onChange, n = { backgroundColor: j({ h: r.h, s: 100, v: 100, a: 1 }) };
  return u.createElement("div", { className: "react-colorful__saturation", style: n }, u.createElement(z, { onMove: function(o) {
    t({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    t({ s: _(r.s + 100 * o.left, 0, 100), v: _(r.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + s(r.s) + "%, Brightness " + s(r.v) + "%" }, u.createElement(D, { className: "react-colorful__saturation-pointer", top: 1 - r.v / 100, left: r.s / 100, color: j(r) })));
}), N = function(e, r) {
  if (e === r) return !0;
  for (var t in e) if (e[t] !== r[t]) return !1;
  return !0;
}, F = function(e, r) {
  return e.toLowerCase() === r.toLowerCase() || N(O(e), O(r));
};
function J(e, r, t) {
  var n = H(t), o = te(function() {
    return e.toHsva(r);
  }), a = o[0], c = o[1], l = g({ color: r, hsva: a });
  y(function() {
    if (!e.equal(r, l.current.color)) {
      var i = e.toHsva(r);
      l.current = { hsva: i, color: r }, c(i);
    }
  }, [r, e]), y(function() {
    var i;
    N(a, l.current.hsva) || e.equal(i = e.fromHsva(a), l.current.color) || (l.current = { hsva: a, color: i }, n(i));
  }, [a, e, n]);
  var f = ne(function(i) {
    c(function(d) {
      return Object.assign({}, d, i);
    });
  }, []);
  return [a, f];
}
var le = typeof window < "u" ? re : y, ce = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, T = /* @__PURE__ */ new Map(), Q = function(e) {
  le(function() {
    var r = e.current ? e.current.ownerDocument : document;
    if (r !== void 0 && !T.has(r)) {
      var t = r.createElement("style");
      t.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, T.set(r, t);
      var n = ce();
      n && t.setAttribute("nonce", n), r.head.appendChild(t);
    }
  }, []);
}, U = function(e) {
  var r = e.className, t = e.colorModel, n = e.color, o = n === void 0 ? t.defaultColor : n, a = e.onChange, c = q(e, ["className", "colorModel", "color", "onChange"]), l = g(null);
  Q(l);
  var f = J(t, o, a), i = f[0], d = f[1], b = E(["react-colorful", r]);
  return u.createElement("div", m({}, c, { ref: l, className: b }), u.createElement(V, { hsva: i, onChange: d }), u.createElement(Y, { hue: i.h, onChange: d, className: "react-colorful__last-control" }));
}, ue = { defaultColor: "000", toHsva: A, fromHsva: function(e) {
  return B({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: F }, de = function(e) {
  return u.createElement(U, m({}, e, { colorModel: ue }));
}, ie = function(e) {
  var r = e.className, t = e.hsva, n = e.onChange, o = { backgroundImage: "linear-gradient(90deg, " + k(Object.assign({}, t, { a: 0 })) + ", " + k(Object.assign({}, t, { a: 1 })) + ")" }, a = E(["react-colorful__alpha", r]), c = s(100 * t.a);
  return u.createElement("div", { className: a }, u.createElement("div", { className: "react-colorful__alpha-gradient", style: o }), u.createElement(z, { onMove: function(l) {
    n({ a: l.left });
  }, onKey: function(l) {
    n({ a: _(t.a + l.left) });
  }, "aria-label": "Alpha", "aria-valuetext": c + "%", "aria-valuenow": c, "aria-valuemin": "0", "aria-valuemax": "100" }, u.createElement(D, { className: "react-colorful__alpha-pointer", left: t.a, color: k(t) })));
}, W = function(e) {
  var r = e.className, t = e.colorModel, n = e.color, o = n === void 0 ? t.defaultColor : n, a = e.onChange, c = q(e, ["className", "colorModel", "color", "onChange"]), l = g(null);
  Q(l);
  var f = J(t, o, a), i = f[0], d = f[1], b = E(["react-colorful", r]);
  return u.createElement("div", m({}, c, { ref: l, className: b }), u.createElement(V, { hsva: i, onChange: d }), u.createElement(Y, { hue: i.h, onChange: d }), u.createElement(ie, { hsva: i, onChange: d, className: "react-colorful__last-control" }));
}, se = { defaultColor: "0001", toHsva: A, fromHsva: B, equal: F }, ge = function(e) {
  return u.createElement(W, m({}, e, { colorModel: se }));
}, fe = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: L, fromHsva: K, equal: N }, me = function(e) {
  return u.createElement(W, m({}, e, { colorModel: fe }));
}, ve = { defaultColor: { r: 0, g: 0, b: 0 }, toHsva: function(e) {
  return L({ r: e.r, g: e.g, b: e.b, a: 1 });
}, fromHsva: function(e) {
  return { r: (r = K(e)).r, g: r.g, b: r.b };
  var r;
}, equal: N }, pe = function(e) {
  return u.createElement(U, m({}, e, { colorModel: ve }));
};
export {
  ge as HexAlphaColorPicker,
  de as HexColorPicker,
  pe as RgbColorPicker,
  me as RgbaColorPicker
};
