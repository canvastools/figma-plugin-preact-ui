import { typedForwardRef as e } from "./index11.es.js";
import { jsx as t } from "./index15.es.js";
import { ButtonIcon as n } from "./index36.es.js";
import { useEffect as r, useState as i } from "preact/hooks";
var a = e(({ selected: e, defaultSelected: a = !1, onSelectedChange: o, ...s }, c) => {
	let [l, u] = i(a), d = e === void 0 ? l : e, f = (t) => {
		let n = !d;
		e === void 0 && u(n), t.event.stopPropagation(), o?.({
			event: t.event,
			selected: n
		});
	};
	return r(() => {
		e !== void 0 && u(e);
	}, [e]), /* @__PURE__ */ t(n, {
		ref: c,
		...s,
		selected: d,
		onClick: f
	});
});
//#endregion
export { a as ButtonIconToggle };
