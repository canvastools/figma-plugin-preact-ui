//#region src/utils/color/color.ts
var e = (e, t, n) => Math.min(Math.max(e, t), n), t = (t) => {
	let n = e(Math.round(t * 255), 0, 255).toString(16);
	return n.length === 1 ? "0" + n : n;
}, n = (e) => {
	let t = e.startsWith("#") ? e.slice(1) : e;
	if (/^[0-9a-fA-F]{6}$/.test(t)) return t.toUpperCase();
}, r = (e) => `#${t(e.r)}${t(e.g)}${t(e.b)}`, i = (e, t = 1) => {
	let r = n(e);
	if (r) return {
		r: parseInt(r.slice(0, 2), 16) / 255,
		g: parseInt(r.slice(2, 4), 16) / 255,
		b: parseInt(r.slice(4, 6), 16) / 255,
		a: t
	};
}, a = (t) => `${r(t)}${e(Math.round(t.a * 255), 0, 255).toString(16).padStart(2, "0").toUpperCase()}`, o = (e) => {
	let t = e.startsWith("#") ? e.slice(1) : e;
	if (/^[0-9a-fA-F]{8}$/.test(t)) return {
		r: parseInt(t.slice(0, 2), 16) / 255,
		g: parseInt(t.slice(2, 4), 16) / 255,
		b: parseInt(t.slice(4, 6), 16) / 255,
		a: parseInt(t.slice(6, 8), 16) / 255
	};
	if (/^[0-9a-fA-F]{6}$/.test(t)) return {
		r: parseInt(t.slice(0, 2), 16) / 255,
		g: parseInt(t.slice(2, 4), 16) / 255,
		b: parseInt(t.slice(4, 6), 16) / 255,
		a: 1
	};
}, s = (e) => Math.round(e * 100) / 100, c = (t) => ({
	r: e(Math.round(t.r * 255), 0, 255),
	g: e(Math.round(t.g * 255), 0, 255),
	b: e(Math.round(t.b * 255), 0, 255),
	a: e(t.a, 0, 1)
}), l = (t) => ({
	r: e(t.r, 0, 255) / 255,
	g: e(t.g, 0, 255) / 255,
	b: e(t.b, 0, 255) / 255,
	a: e(t.a, 0, 1)
});
//#endregion
export { e as clamp, r as colorToHex, a as colorToHexAlpha, c as colorToRgba, o as hexAlphaToColor, i as hexToColor, l as rgbaToColor, s as roundAlpha };
