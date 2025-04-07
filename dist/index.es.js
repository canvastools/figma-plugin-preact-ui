import { options as i } from "preact";
import { forwardRef as s } from "preact/compat";
var c = 0;
function u(n, r, t, v, a, d) {
  r || (r = {});
  var _, o, e = r;
  if ("ref" in e) for (o in e = {}, r) o == "ref" ? _ = r[o] : e[o] = r[o];
  var f = { type: n, props: e, key: t, ref: _, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --c, __i: -1, __u: 0, __source: a, __self: d };
  if (typeof n == "function" && (_ = n.defaultProps)) for (o in _) e[o] === void 0 && (e[o] = _[o]);
  return i.vnode && i.vnode(f), f;
}
function l(n) {
  return s(n);
}
const p = ({ children: n, ...r }, t) => /* @__PURE__ */ u("button", { ref: t, className: "Button", ...r, children: n }), B = l(p), L = () => /* @__PURE__ */ u("div", { className: "Loader", children: /* @__PURE__ */ u("div", { className: "Loader__spinner" }) });
export {
  B as Button,
  L as Loader
};
