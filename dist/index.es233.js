import "preact/compat";
import { jsx as f } from "./index.es143.js";
import { getHoursMinutesSeconds as h, getHoursMinutes as m, getHours as g } from "./index.es211.js";
function y({ ariaLabel: u, disabled: i, maxTime: n, minTime: r, name: a, onChange: d, required: c, value: o, valueType: s }) {
  const e = (() => {
    switch (s) {
      case "hour":
        return (t) => `${g(t)}:00`;
      case "minute":
        return m;
      case "second":
        return h;
      default:
        throw new Error("Invalid valueType");
    }
  })(), p = (() => {
    switch (s) {
      case "hour":
        return 3600;
      case "minute":
        return 60;
      case "second":
        return 1;
      default:
        throw new Error("Invalid valueType");
    }
  })();
  function l(t) {
    t.stopPropagation();
  }
  return f("input", { "aria-label": u, disabled: i, hidden: !0, max: n ? e(n) : void 0, min: r ? e(r) : void 0, name: a, onChange: d, onFocus: l, required: c, step: p, style: {
    visibility: "hidden",
    position: "absolute",
    zIndex: "-999"
  }, type: "time", value: o ? e(o) : "" });
}
export {
  y as default
};
