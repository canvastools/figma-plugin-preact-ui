//#region src/utils/bem/bem.ts
var e = (e, t, n = {}) => {
	let r = t ? `${e}__${t}` : e, i = [r];
	for (let [e, t] of Object.entries(n)) typeof t == "string" ? i.push(`${r}_${e}-${t}`) : t === !0 && i.push(`${r}_${e}`);
	return i.join(" ");
};
//#endregion
export { e as bem };
