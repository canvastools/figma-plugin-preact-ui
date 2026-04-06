import { forwardRef as ga, useState as I, useCallback as L, useImperativeHandle as sa } from "preact/compat";
import { jsx as V } from "./index.es143.js";
import { clsx as ha } from "./index.es194.js";
import ba from "./index.es195.js";
import ya from "./index.es196.js";
import xa from "./index.es197.js";
import Aa from "./index.es198.js";
import Va from "./index.es199.js";
import { getBegin as k, getValueRange as Sa, getBeginNext as La, getEnd as Ca } from "./index.es200.js";
import { between as ka } from "./index.es201.js";
var C = function() {
  return C = Object.assign || function(a) {
    for (var e, i = 1, u = arguments.length; i < u; i++) {
      e = arguments[i];
      for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (a[f] = e[f]);
    }
    return a;
  }, C.apply(this, arguments);
}, U = "react-calendar", B = ["century", "decade", "year", "month"], Na = ["decade", "year", "month", "day"], te = /* @__PURE__ */ new Date();
te.setFullYear(1, 0, 1);
te.setHours(0, 0, 0, 0);
var Ma = /* @__PURE__ */ new Date(864e13);
function O(a) {
  return a instanceof Date ? a : new Date(a);
}
function We(a, e) {
  return B.slice(B.indexOf(a), B.indexOf(e) + 1);
}
function Oa(a, e, i) {
  var u = We(e, i);
  return u.indexOf(a) !== -1;
}
function re(a, e, i) {
  return a && Oa(a, e, i) ? a : i;
}
function Ye(a) {
  var e = B.indexOf(a);
  return Na[e];
}
function Ta(a, e) {
  var i = Array.isArray(a) ? a[e] : a;
  if (!i)
    return null;
  var u = O(i);
  if (Number.isNaN(u.getTime()))
    throw new Error("Invalid date: ".concat(a));
  return u;
}
function Ee(a, e) {
  var i = a.value, u = a.minDate, f = a.maxDate, y = a.maxDetail, g = Ta(i, e);
  if (!g)
    return null;
  var h = Ye(y), c = function() {
    switch (e) {
      case 0:
        return k(h, g);
      case 1:
        return Ca(h, g);
      default:
        throw new Error("Invalid index value: ".concat(e));
    }
  }();
  return ka(c, u, f);
}
var ne = function(a) {
  return Ee(a, 0);
}, Re = function(a) {
  return Ee(a, 1);
}, Wa = function(a) {
  return [ne, Re].map(function(e) {
    return e(a);
  });
};
function Fe(a) {
  var e = a.maxDate, i = a.maxDetail, u = a.minDate, f = a.minDetail, y = a.value, g = a.view, h = re(g, f, i), c = ne({
    value: y,
    minDate: u,
    maxDate: e,
    maxDetail: i
  }) || /* @__PURE__ */ new Date();
  return k(h, c);
}
function Ya(a) {
  var e = a.activeStartDate, i = a.defaultActiveStartDate, u = a.defaultValue, f = a.defaultView, y = a.maxDate, g = a.maxDetail, h = a.minDate, c = a.minDetail, T = a.value, W = a.view, H = re(W, c, g), Y = e || i;
  return Y ? k(H, Y) : Fe({
    maxDate: y,
    maxDetail: g,
    minDate: h,
    minDetail: c,
    value: T || u,
    view: W || f
  });
}
function ae(a) {
  return a && (!Array.isArray(a) || a.length === 1);
}
function j(a, e) {
  return a instanceof Date && e instanceof Date && a.getTime() === e.getTime();
}
var _a = ga(function(e, i) {
  var u = e.activeStartDate, f = e.allowPartialRange, y = e.calendarType, g = e.className, h = e.defaultActiveStartDate, c = e.defaultValue, T = e.defaultView, W = e.formatDay, H = e.formatLongDate, Y = e.formatMonth, ie = e.formatMonthYear, Pe = e.formatShortWeekday, Ie = e.formatWeekday, q = e.formatYear, le = e.goToRangeStartOnSelect, ue = le === void 0 ? !0 : le, Ue = e.inputRef, oe = e.locale, ve = e.maxDate, x = ve === void 0 ? Ma : ve, ce = e.maxDetail, b = ce === void 0 ? "month" : ce, fe = e.minDate, A = fe === void 0 ? te : fe, me = e.minDetail, N = me === void 0 ? "century" : me, je = e.navigationAriaLabel, Be = e.navigationAriaLive, He = e.navigationLabel, qe = e.next2AriaLabel, _e = e.next2Label, ze = e.nextAriaLabel, Ge = e.nextLabel, m = e.onActiveStartDateChange, M = e.onChange, de = e.onClickDay, De = e.onClickDecade, we = e.onClickMonth, Je = e.onClickWeekNumber, ge = e.onClickYear, _ = e.onDrillDown, z = e.onDrillUp, S = e.onViewChange, Ke = e.prev2AriaLabel, Qe = e.prev2Label, Xe = e.prevAriaLabel, Ze = e.prevLabel, se = e.returnValue, he = se === void 0 ? "start" : se, d = e.selectRange, E = e.showDoubleView, be = e.showFixedNumberOfWeeks, ye = e.showNavigation, $e = ye === void 0 ? !0 : ye, pe = e.showNeighboringCentury, ea = e.showNeighboringDecade, xe = e.showNeighboringMonth, aa = xe === void 0 ? !0 : xe, ta = e.showWeekNumbers, ra = e.tileClassName, na = e.tileContent, ia = e.tileDisabled, G = e.value, Ae = e.view, Ve = I(h), la = Ve[0], R = Ve[1], Se = I(null), ua = Se[0], Le = Se[1], Ce = I(Array.isArray(c) ? c.map(function(t) {
    return t !== null ? O(t) : null;
  }) : c != null ? O(c) : null), J = Ce[0], oa = Ce[1], ke = I(T), va = ke[0], Ne = ke[1], o = u || la || Ya({
    activeStartDate: u,
    defaultActiveStartDate: h,
    defaultValue: c,
    defaultView: T,
    maxDate: x,
    maxDetail: b,
    minDate: A,
    minDetail: N,
    value: G,
    view: Ae
  }), v = function() {
    var t = function() {
      return d && ae(J) ? J : G !== void 0 ? G : J;
    }();
    return t ? Array.isArray(t) ? t.map(function(n) {
      return n !== null ? O(n) : null;
    }) : t !== null ? O(t) : null : null;
  }(), F = Ye(b), r = re(Ae || va, N, b), s = We(N, b), ca = d ? ua : null, K = s.indexOf(r) < s.length - 1, Me = s.indexOf(r) > 0, Oe = L(function(t) {
    var n = function() {
      switch (he) {
        case "start":
          return ne;
        case "end":
          return Re;
        case "range":
          return Wa;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return n({
      maxDate: x,
      maxDetail: b,
      minDate: A,
      value: t
    });
  }, [x, b, A, he]), Q = L(function(t, n) {
    R(t);
    var l = {
      action: n,
      activeStartDate: t,
      value: v,
      view: r
    };
    m && !j(o, t) && m(l);
  }, [o, m, v, r]), P = L(function(t, n) {
    var l = function() {
      switch (r) {
        case "century":
          return De;
        case "decade":
          return ge;
        case "year":
          return we;
        case "month":
          return de;
        default:
          throw new Error("Invalid view: ".concat(r, "."));
      }
    }();
    l && l(t, n);
  }, [de, De, we, ge, r]), X = L(function(t, n) {
    if (K) {
      P(t, n);
      var l = s[s.indexOf(r) + 1];
      if (!l)
        throw new Error("Attempted to drill down from the lowest view.");
      R(t), Ne(l);
      var D = {
        action: "drillDown",
        activeStartDate: t,
        value: v,
        view: l
      };
      m && !j(o, t) && m(D), S && r !== l && S(D), _ && _(D);
    }
  }, [
    o,
    K,
    m,
    P,
    _,
    S,
    v,
    r,
    s
  ]), Z = L(function() {
    if (Me) {
      var t = s[s.indexOf(r) - 1];
      if (!t)
        throw new Error("Attempted to drill up from the highest view.");
      var n = k(t, o);
      R(n), Ne(t);
      var l = {
        action: "drillUp",
        activeStartDate: n,
        value: v,
        view: t
      };
      m && !j(o, n) && m(l), S && r !== t && S(l), z && z(l);
    }
  }, [
    o,
    Me,
    m,
    z,
    S,
    v,
    r,
    s
  ]), $ = L(function(t, n) {
    var l = v;
    P(t, n);
    var D = d && !ae(l), w;
    if (d)
      if (D)
        w = k(F, t);
      else {
        if (!l)
          throw new Error("previousValue is required");
        if (Array.isArray(l))
          throw new Error("previousValue must not be an array");
        w = Sa(F, l, t);
      }
    else
      w = Oe(t);
    var ee = (
      // Range selection turned off
      !d || // Range selection turned on, first value
      D || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      ue ? Fe({
        maxDate: x,
        maxDetail: b,
        minDate: A,
        minDetail: N,
        value: w,
        view: r
      }) : null
    );
    n.persist(), R(ee), oa(w);
    var Da = {
      action: "onChange",
      activeStartDate: ee,
      value: w,
      view: r
    };
    if (m && !j(o, ee) && m(Da), M)
      if (d) {
        var wa = ae(w);
        if (!wa)
          M(w || null, n);
        else if (f) {
          if (Array.isArray(w))
            throw new Error("value must not be an array");
          M([w || null, null], n);
        }
      } else
        M(w || null, n);
  }, [
    o,
    f,
    Oe,
    ue,
    x,
    b,
    A,
    N,
    m,
    M,
    P,
    d,
    v,
    F,
    r
  ]);
  function fa(t) {
    Le(t);
  }
  function p() {
    Le(null);
  }
  sa(i, function() {
    return {
      activeStartDate: o,
      drillDown: X,
      drillUp: Z,
      onChange: $,
      setActiveStartDate: Q,
      value: v,
      view: r
    };
  }, [o, X, Z, $, Q, v, r]);
  function Te(t) {
    var n = t ? La(r, o) : k(r, o), l = K ? X : $, D = {
      activeStartDate: n,
      hover: ca,
      locale: oe,
      maxDate: x,
      minDate: A,
      onClick: l,
      onMouseOver: d ? fa : void 0,
      tileClassName: ra,
      tileContent: na,
      tileDisabled: ia,
      value: v,
      valueType: F
    };
    switch (r) {
      case "century":
        return V(ya, C({ formatYear: q, showNeighboringCentury: pe }, D));
      case "decade":
        return V(xa, C({ formatYear: q, showNeighboringDecade: ea }, D));
      case "year":
        return V(Aa, C({ formatMonth: Y, formatMonthYear: ie }, D));
      case "month":
        return V(Va, C({ calendarType: y, formatDay: W, formatLongDate: H, formatShortWeekday: Pe, formatWeekday: Ie, onClickWeekNumber: Je, onMouseLeave: d ? p : void 0, showFixedNumberOfWeeks: typeof be < "u" ? be : E, showNeighboringMonth: aa, showWeekNumbers: ta }, D));
      default:
        throw new Error("Invalid view: ".concat(r, "."));
    }
  }
  function ma() {
    return $e ? V(ba, { activeStartDate: o, drillUp: Z, formatMonthYear: ie, formatYear: q, locale: oe, maxDate: x, minDate: A, navigationAriaLabel: je, navigationAriaLive: Be, navigationLabel: He, next2AriaLabel: qe, next2Label: _e, nextAriaLabel: ze, nextLabel: Ge, prev2AriaLabel: Ke, prev2Label: Qe, prevAriaLabel: Xe, prevLabel: Ze, setActiveStartDate: Q, showDoubleView: E, view: r, views: s }) : null;
  }
  var da = Array.isArray(v) ? v : [v];
  return V("div", { className: ha(U, d && da.length === 1 && "".concat(U, "--selectRange"), E && "".concat(U, "--doubleView"), g), ref: Ue, children: [ma(), V("div", { className: "".concat(U, "__viewContainer"), onBlur: d ? p : void 0, onMouseLeave: d ? p : void 0, children: [Te(), E ? Te(!0) : null] })] });
});
export {
  _a as default
};
