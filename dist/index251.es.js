import { useRefElement as e } from "./index13.es.js";
import { jsx as t } from "./index15.es.js";
import { useContext as n, useEffect as r, useMemo as i } from "preact/hooks";
import { createContext as a } from "preact";
//#region src/components/PopoverContext/PopoverContext.tsx
var o = a(void 0), s = () => {
	let e = n(o);
	if (!e) throw Error("PopoverContext not found");
	return e;
}, c = ({ triggerRef: n, anchorRef: a, open: s, setOpen: c, children: l }) => {
	let u = a ?? n, d = e(n), f = i(() => ({
		triggerRef: n,
		anchorRef: u,
		open: s !== void 0 && s,
		setOpen: c
	}), [
		n,
		u,
		s,
		c
	]);
	return r(() => {
		if (!d) return;
		let e = (e) => {
			e.preventDefault(), c?.(!s);
		}, t = (e) => {
			let { key: t } = e;
			if (t === "Enter" || t === " ") {
				if (s) return;
				e.preventDefault(), c?.(!0);
				return;
			}
		};
		return d.addEventListener("mousedown", e), d.addEventListener("keydown", t), () => {
			d.removeEventListener("mousedown", e), d.removeEventListener("keydown", t);
		};
	}, [
		d,
		s,
		c
	]), r(() => {
		if (!s) return;
		let e = (e) => {
			let { key: t } = e;
			t !== "Escape" && t !== "Esc" || (e.preventDefault(), c?.(!1), n?.current?.focus());
		};
		return window.addEventListener("keydown", e), () => {
			window.removeEventListener("keydown", e);
		};
	}, [
		s,
		c,
		n
	]), /* @__PURE__ */ t(o.Provider, {
		value: f,
		children: l
	});
};
//#endregion
export { c as PopoverContext, s as usePopoverContext };
