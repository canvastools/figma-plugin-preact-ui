import e from "./index200.es.js";
//#region ../node_modules/.pnpm/get-user-locale@3.0.0/node_modules/get-user-locale/dist/index.js
function t(e) {
	return typeof e == "string";
}
function n(e, t, n) {
	return n.indexOf(e) === t;
}
function r(e) {
	return e.toLowerCase() === e;
}
function i(e) {
	return e.indexOf(",") === -1 ? e : e.split(",");
}
function a(e) {
	if (!e) return e;
	if (e === "C" || e === "posix" || e === "POSIX") return "en-US";
	if (e.indexOf(".") !== -1) {
		var t = e.split(".")[0], n = t === void 0 ? "" : t;
		return a(n);
	}
	if (e.indexOf("@") !== -1) {
		var i = e.split("@")[0], n = i === void 0 ? "" : i;
		return a(n);
	}
	if (e.indexOf("-") === -1 || !r(e)) return e;
	var o = e.split("-"), s = o[0], c = o[1];
	return `${s}-${(c === void 0 ? "" : c).toUpperCase()}`;
}
function o(e) {
	var r = e === void 0 ? {} : e, o = r.useFallbackLocale, s = o === void 0 || o, c = r.fallbackLocale, l = c === void 0 ? "en-US" : c, u = [];
	if (typeof navigator < "u") {
		for (var d = navigator.languages || [], f = [], p = 0, m = d; p < m.length; p++) {
			var h = m[p];
			f = f.concat(i(h));
		}
		var g = navigator.language, _ = g && i(g);
		u = u.concat(f, _);
	}
	return s && u.push(l), u.filter(t).map(a).filter(n);
}
var s = e(o, { cacheKey: JSON.stringify });
function c(e) {
	return s(e)[0] || null;
}
var l = e(c, { cacheKey: JSON.stringify });
//#endregion
export { l as default, l as getUserLocale, s as getUserLocales };
