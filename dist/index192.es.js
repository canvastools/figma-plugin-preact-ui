//#region src/hooks/useStringInput/useStringInput.ts
var e = (e, t) => {
	let n = e == null ? "" : String(e);
	return t.trim ? n.trim() : n;
}, t = (t, n) => {
	let { required: r, minLength: i, maxLength: a, allowedCharacters: o, format: s, normalizeOnError: c } = n, l = t, u = e(l, n), d = null;
	u === "" ? r && (d = "required") : typeof i == "number" && u.length < i ? d = "too_short" : typeof a == "number" && u.length > a ? d = "too_long" : o && [...u].some((e) => !o.includes(e)) && (d = "invalid_characters");
	let f = d !== null, p, m, h = d;
	if (f && !c) p = void 0, m = void 0;
	else {
		let t = typeof a == "number" ? u.slice(0, a) : u;
		o && (t = [...t].filter((e) => o.includes(e)).join(""), o.includes(" ") && (t = t.replace(/ {2,}/g, " "))), p = t;
		try {
			m = s ? s(t) : t;
		} catch {
			m = t;
		}
		n.trim && (p = e(p, n), m = m == null ? void 0 : e(m, n)), h = null;
		let c = p ?? "";
		c === "" ? r && (h = "required") : typeof i == "number" && c.length < i ? h = "too_short" : typeof a == "number" && c.length > a ? h = "too_long" : o && [...c].some((e) => !o.includes(e)) && (h = "invalid_characters");
	}
	return {
		rawValue: l,
		normalizedValue: p,
		formattedValue: m,
		error: h
	};
}, n = (e) => {
	let n = (n) => t(n, e), r = t(e.value, e), i = (t) => {
		let { event: n } = t, r = n.key;
		if (!e.allowedCharacters) return;
		let i = r === "Backspace" || r === "Delete" || r === "ArrowLeft" || r === "ArrowRight" || r === "Tab" || r === "Home" || r === "End" || n.ctrlKey || n.metaKey || n.altKey;
		n.isComposing !== !0 && !i && r.length === 1 && !e.allowedCharacters.includes(r) && n.preventDefault?.();
	};
	return {
		...r,
		handleKeyDown: i,
		parse: n
	};
};
//#endregion
export { n as useStringInput };
