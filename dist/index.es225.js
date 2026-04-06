import { useState as h, useRef as g, useEffect as Y } from "preact/compat";
import { jsx as p } from "./index.es143.js";
import { getHours as M, getMinutes as Re, getSeconds as xe, getHoursMinutesSeconds as Ae, getHoursMinutes as Fe } from "./index.es211.js";
import Ze from "./index.es228.js";
import Ce from "./index.es229.js";
import Ke from "./index.es230.js";
import Pe from "./index.es231.js";
import Oe from "./index.es232.js";
import je from "./index.es233.js";
import Ue from "./index.es234.js";
import { getFormatter as Te, getNumberFormatter as Be } from "./index.es235.js";
import { convert24to12 as De, convert12to24 as ee } from "./index.es236.js";
import { getAmPmLabels as _e } from "./index.es237.js";
const ne = {}, qe = ["hour", "minute", "second"];
function ze(s) {
  return s.dataset.input === "true";
}
function te(s, r) {
  let l = s;
  do
    l = l[r];
  while (l && !ze(l));
  return l;
}
function C(s) {
  s && s.focus();
}
function Ge(s, r, l) {
  const v = [], w = new RegExp(Object.keys(r).map((c) => `${c}+`).join("|"), "g"), f = s.match(w);
  return s.split(w).reduce((c, d, i) => {
    const b = d && // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
    p(Ze, { children: d }, `separator_${i}`);
    c.push(b);
    const a = f == null ? void 0 : f[i];
    if (a) {
      const m = r[a] || r[Object.keys(r).find((V) => a.match(V))];
      if (!m)
        return c;
      !l && v.includes(m) ? c.push(a) : (c.push(m(a, i)), v.push(m));
    }
    return c;
  }, []);
}
const S = Be({ useGrouping: !1 });
function ln({ amPmAriaLabel: s, autoFocus: r, className: l, disabled: v, format: w, hourAriaLabel: f, hourPlaceholder: c, isClockOpen: d = null, locale: i, maxDetail: b = "minute", maxTime: a, minTime: m, minuteAriaLabel: V, minutePlaceholder: oe, name: re = "time", nativeInputAriaLabel: ue, onChange: y, onInvalidChange: K, required: P, secondAriaLabel: se, secondPlaceholder: ie, value: O }) {
  const [H, $] = h(null), [k, L] = h(null), [j, R] = h(null), [le, x] = h(null), [ce, U] = h(null), T = g(null), B = g(null), D = g(null), _ = g(null), q = g(null), [z, ae] = h(d), G = g(void 0);
  Y(() => {
    ae(d);
  }, [d]), Y(() => {
    const e = O;
    e ? ($(De(M(e))[1]), L(M(e).toString()), R(Re(e).toString()), x(xe(e).toString()), U(e)) : ($(null), L(null), R(null), x(null), U(null));
  }, [
    O,
    m,
    a,
    b,
    // Toggling clock visibility resets values
    z
  ]);
  const W = b, me = (() => {
    const e = qe.indexOf(b), n = ne[e] || (() => {
      const t = { hour: "numeric" };
      return e >= 1 && (t.minute = "numeric"), e >= 2 && (t.second = "numeric"), ne[e] = t, t;
    })();
    return Te(n);
  })();
  function pe(e) {
    return (() => {
      switch (W) {
        case "hour":
        case "minute":
          return Fe;
        case "second":
          return Ae;
        default:
          throw new Error("Invalid valueType");
      }
    })()(e);
  }
  const J = w || (() => {
    const A = new Date(2017, 0, 1, 21, 13, 14);
    return me(i, A).replace(S(i, 9), "h").replace(S(i, 21), "H").replace(S(i, 13), "mm").replace(S(i, 14), "ss").replace(new RegExp(_e(i).join("|")), "a");
  })(), fe = (() => {
    const e = J.match(/[^0-9a-z]/i);
    return e ? e[0] : null;
  })();
  function de(e) {
    if (e.target === e.currentTarget) {
      const n = e.target.children[1];
      C(n);
    }
  }
  function he(e) {
    switch (G.current = e.key, e.key) {
      case "ArrowLeft":
      case "ArrowRight":
      case fe: {
        e.preventDefault();
        const { target: n } = e, t = e.key === "ArrowLeft" ? "previousElementSibling" : "nextElementSibling", u = te(n, t);
        C(u);
        break;
      }
    }
  }
  function ge(e) {
    const { key: n, target: t } = e;
    if (!(G.current === n) || !!Number.isNaN(Number(n)))
      return;
    const E = t.getAttribute("max");
    if (!E)
      return;
    const { value: N } = t;
    if (Number(N) * 10 > Number(E) || N.length >= E.length) {
      const F = te(t, "nextElementSibling");
      C(F);
    }
  }
  function ve() {
    if (!y)
      return;
    function e(o) {
      return !!o;
    }
    const n = [
      T.current,
      B.current,
      D.current,
      _.current,
      q.current
    ].filter(e), t = n.slice(1), u = {};
    for (const o of n)
      u[o.name] = o.type === "number" ? o.valueAsNumber : o.value;
    if (t.every((o) => !o.value)) {
      y(null, !1);
      return;
    }
    const E = n.every((o) => o.value), N = n.every((o) => o.validity.valid);
    if (E && N) {
      const o = Number(u.hour24 || u.hour12 && u.amPm && ee(u.hour12, u.amPm) || 0), F = Number(u.minute || 0), Se = Number(u.second || 0), Z = ($e) => `0${$e}`.slice(-2), Ve = `${Z(o)}:${Z(F)}:${Z(Se)}`, He = pe(Ve);
      y(He, !1);
      return;
    }
    K && K();
  }
  function Q(e) {
    const { name: n, value: t } = e.target;
    switch (n) {
      case "amPm":
        $(t);
        break;
      case "hour12":
        L(t ? ee(t, H || "am").toString() : "");
        break;
      case "hour24":
        L(t);
        break;
      case "minute":
        R(t);
        break;
      case "second":
        x(t);
        break;
    }
    ve();
  }
  function we(e) {
    const { value: n } = e.target;
    if (!y)
      return;
    y(n || null, !1);
  }
  const I = {
    className: l,
    disabled: v,
    maxTime: a,
    minTime: m,
    onChange: Q,
    onKeyDown: he,
    onKeyUp: ge,
    // This is only for showing validity when editing
    required: !!(P || z)
  };
  function be(e, n) {
    if (e && e.length > 2)
      throw new Error(`Unsupported token: ${e}`);
    const t = e ? e.length === 2 : !1;
    return p(Ke, { ...I, amPm: H, ariaLabel: f, autoFocus: n === 0 && r, inputRef: B, placeholder: c, showLeadingZeros: t, value: k }, "hour12");
  }
  function ye(e, n) {
    if (e && e.length > 2)
      throw new Error(`Unsupported token: ${e}`);
    const t = e ? e.length === 2 : !1;
    return p(Pe, { ...I, ariaLabel: f, autoFocus: n === 0 && r, inputRef: D, placeholder: c, showLeadingZeros: t, value: k }, "hour24");
  }
  function X(e, n) {
    return /h/.test(e) ? be(e, n) : ye(e, n);
  }
  function Ie(e, n) {
    if (e && e.length > 2)
      throw new Error(`Unsupported token: ${e}`);
    const t = e ? e.length === 2 : !1;
    return p(Oe, { ...I, ariaLabel: V, autoFocus: n === 0 && r, hour: k, inputRef: _, placeholder: oe, showLeadingZeros: t, value: j }, "minute");
  }
  function Ee(e, n) {
    if (e && e.length > 2)
      throw new Error(`Unsupported token: ${e}`);
    const t = e ? e.length === 2 : !0;
    return p(Ue, { ...I, ariaLabel: se, autoFocus: n === 0 && r, hour: k, inputRef: q, minute: j, placeholder: ie, showLeadingZeros: t, value: le }, "second");
  }
  function ke(e, n) {
    return p(Ce, { ...I, ariaLabel: s, autoFocus: n === 0 && r, inputRef: T, locale: i, onChange: Q, value: H }, "ampm");
  }
  function Le() {
    return Ge(J, {
      h: X,
      H: X,
      m: Ie,
      s: Ee,
      a: ke
    }, typeof w < "u");
  }
  function Ne() {
    return p(je, { ariaLabel: ue, disabled: v, maxTime: a, minTime: m, name: re, onChange: we, required: P, value: ce, valueType: W }, "time");
  }
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: This interaction is designed for mouse users only
    // biome-ignore lint/a11y/noStaticElementInteractions: This interaction is designed for mouse users only
    p("div", { className: l, onClick: de, children: [Ne(), Le()] })
  );
}
export {
  ln as default
};
