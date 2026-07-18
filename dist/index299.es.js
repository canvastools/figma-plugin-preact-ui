//#region ../node_modules/.pnpm/update-input-width@1.4.2/node_modules/update-input-width/dist/esm/index.js
var e = ["normal", "small-caps"];
function t(t) {
	if (!t) return "";
	var n = window.getComputedStyle(t);
	if (n.font) return n.font;
	if (n.fontFamily === "") return "";
	var r = e.includes(n.fontVariant) ? n.fontVariant : "normal";
	return `${n.fontStyle} ${r} ${n.fontWeight} ${n.fontSize} / ${n.lineHeight} ${n.fontFamily}`;
}
var n;
function r(e, t) {
	var r = (n || (n = document.createElement("canvas"))).getContext("2d");
	if (!r) return null;
	r.font = t;
	var i = r.measureText(e).width;
	return Math.ceil(i);
}
function i(e) {
	if (typeof document > "u" || !e) return null;
	var n = t(e), i = r(e.value || e.placeholder, n);
	return i === null ? null : (e.style.width = `${i}px`, i);
}
//#endregion
export { i as default, i as updateInputWidth, t as getFontShorthand, r as measureText };
