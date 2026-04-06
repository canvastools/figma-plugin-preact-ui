import { options as s } from "preact";
import { Fragment as x } from "preact";
var p = 0;
function v(f, r, i, a, u, l) {
  r || (r = {});
  var n, o, _ = r;
  if ("ref" in _) for (o in _ = {}, r) o == "ref" ? n = r[o] : _[o] = r[o];
  var e = { type: f, props: _, key: i, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --p, __i: -1, __u: 0, __source: u, __self: l };
  if (typeof f == "function" && (n = f.defaultProps)) for (o in n) _[o] === void 0 && (_[o] = n[o]);
  return s.vnode && s.vnode(e), e;
}
export {
  x as Fragment,
  v as jsx,
  v as jsxDEV,
  v as jsxs
};
