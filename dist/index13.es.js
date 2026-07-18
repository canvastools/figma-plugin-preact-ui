import { useEffect as e, useState as t } from "preact/hooks";
//#region src/utils/useRefElement.ts
var n = (n) => {
	let [r, i] = t(n?.current ?? null);
	return e(() => {
		let e = n?.current ?? null;
		i((t) => t === e ? t : e);
	}), r;
};
//#endregion
export { n as useRefElement };
