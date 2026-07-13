//#region src/hooks/useNumericInput/useNumericInput.ts
var e = /[-+]?\d*\.?\d+/, t = /[0-9+\-*/().\s]/, n = (e, t, n) => typeof t == "number" && e < t ? t : typeof n == "number" && e > n ? n : e, r = (e, t) => {
	if (t <= 0) return Math.round(e);
	let n = 10 ** t;
	return Math.round(e * n) / n;
}, i = (t) => {
	let n;
	if (typeof t == "number") {
		if (!Number.isFinite(t) || Number.isInteger(t)) return 0;
		n = t.toFixed(20).replace(/0+$/, "").replace(/\.$/, "");
	} else n = String(t);
	let r = e.exec(n);
	if (!r) return 0;
	let [, i] = r[0].split(".");
	return i ? i.length : 0;
}, a = (e) => e >= "0" && e <= "9", o = (e) => {
	let n = "";
	for (let r of e) t.test(r) && (n += r);
	return n;
}, s = (e) => {
	let t = [], n = 0;
	for (; n < e.length;) {
		let r = e[n];
		if (r === " " || r === "	" || r === "\n") {
			n += 1;
			continue;
		}
		if (a(r) || r === ".") {
			let i = n, o = r === ".";
			for (n += 1; n < e.length;) {
				let t = e[n];
				if (a(t)) {
					n += 1;
					continue;
				}
				if (t === "." && !o) {
					o = !0, n += 1;
					continue;
				}
				break;
			}
			let s = e.slice(i, n);
			if (s !== ".") {
				let e = Number(s);
				Number.isFinite(e) && t.push({
					type: "number",
					value: e
				});
			}
			continue;
		}
		if (r === "+" || r === "-" || r === "*" || r === "/") {
			t.push({
				type: "op",
				value: r
			}), n += 1;
			continue;
		}
		if (r === "(" || r === ")") {
			t.push({
				type: "paren",
				value: r
			}), n += 1;
			continue;
		}
		n += 1;
	}
	return t;
}, c = (e) => {
	let t = s(o(e)), n = 0, r = () => t[n], i = () => {
		let e = t[n];
		return n += 1, e;
	}, a = () => {
		let e = r();
		if (!e) return null;
		if (e.type === "op" && (e.value === "+" || e.value === "-")) {
			i();
			let t = a();
			return t === null ? null : e.value === "-" ? -t : t;
		}
		if (e.type === "paren" && e.value === "(") {
			i();
			let e = l();
			return r()?.type === "paren" && r()?.value === ")" && i(), e;
		}
		return e.type === "number" ? (i(), e.value) : (i(), null);
	}, c = () => {
		let e = a();
		if (e === null) return null;
		let t = r();
		for (; t?.type === "op" && (t.value === "*" || t.value === "/");) {
			i();
			let n = t.value, o = a();
			if (o === null) return null;
			e = n === "*" ? e * o : e / o, t = r();
		}
		return e;
	}, l = () => {
		let e = c();
		if (e === null) return null;
		let t = r();
		for (; t?.type === "op" && (t.value === "+" || t.value === "-");) {
			i();
			let n = t.value, a = c();
			if (a === null) return null;
			e = n === "+" ? e + a : e - a, t = r();
		}
		return e;
	};
	if (t.length === 0) return null;
	let u = l();
	return u === null || !Number.isFinite(u) || n !== t.length ? null : u;
}, l = (t, n, r) => {
	if (t == null) return {
		value: void 0,
		error: n ? "required" : null
	};
	let i = String(t).trim();
	if (i === "") return {
		value: void 0,
		error: n ? "required" : null
	};
	let a = r ? c(i) : null;
	if (r) return a === null ? {
		value: void 0,
		error: "invalid_number"
	} : {
		value: a,
		error: null
	};
	let o = e.exec(i);
	if (!o) return {
		value: void 0,
		error: "invalid_number"
	};
	let s = Number(o[0]);
	return Number.isFinite(s) ? {
		value: s,
		error: null
	} : {
		value: void 0,
		error: "invalid_number"
	};
}, u = (e, t) => {
	let { min: a, max: o, required: s, unit: c, normalizeOnError: u = !1, trimTrailingZeros: d = !1 } = t, { value: f, error: p } = l(e, s, t.math), m = typeof t.precision == "number" ? t.precision : i(t.value);
	if (p) return {
		rawValue: e,
		normalizedValue: void 0,
		formattedValue: void 0,
		error: p,
		unit: c
	};
	if (f === void 0) return {
		rawValue: e,
		normalizedValue: void 0,
		formattedValue: void 0,
		error: s ? "required" : null,
		unit: c
	};
	let h = null;
	typeof a == "number" && f < a ? h = "less_than_min" : typeof o == "number" && f > o && (h = "greater_than_max"), m === 0 && !Number.isInteger(f) && !h && (h = "not_integer");
	let g = r(n(f, a, o), m);
	if (h && !u) return {
		rawValue: e,
		normalizedValue: void 0,
		formattedValue: void 0,
		error: h,
		unit: c
	};
	let _ = g, v;
	return v = m > 0 ? Number.isInteger(_) ? String(_) : _.toFixed(m) : String(_), d && v.includes(".") && (v = v.replace(/0+$/, "").replace(/\.$/, "")), {
		rawValue: e,
		normalizedValue: _,
		formattedValue: c ? `${v}${c}` : v,
		error: h,
		unit: c
	};
}, d = (e, t) => {
	let { unit: n, normalizeOnError: r = !1, doubleValue: i } = t;
	if (!i) return u(e, t);
	let a = e.split(",");
	if (a.length === 1) return u(e, t);
	if (a.length > 2) return {
		rawValue: e,
		normalizedValue: void 0,
		formattedValue: void 0,
		normalizedValues: void 0,
		formattedValues: void 0,
		error: "invalid_number",
		unit: n
	};
	let o = a[0].trim(), s = a.slice(1).join(",").trim(), c = u(o, t), l = u(s, t), d = c.error ?? l.error;
	if (d && !r) return {
		rawValue: e,
		normalizedValue: void 0,
		formattedValue: void 0,
		normalizedValues: void 0,
		formattedValues: void 0,
		error: d,
		unit: n
	};
	let f = typeof c.normalizedValue == "number" && typeof l.normalizedValue == "number" ? [c.normalizedValue, l.normalizedValue] : void 0, p = typeof c.formattedValue == "string" && typeof l.formattedValue == "string" ? [c.formattedValue, l.formattedValue] : void 0;
	return {
		rawValue: e,
		normalizedValue: c.normalizedValue,
		formattedValue: c.formattedValue,
		normalizedValues: f,
		formattedValues: p,
		error: d,
		unit: n
	};
}, f = (e) => {
	let { value: t, min: a, max: o, precision: s = 0, step: c = 1, stepLarge: f = 10, required: p } = e, m = (t, n) => n == null ? d(t, e) : d(t, {
		...e,
		unit: n
	}), h = d(String(t), e), g = (t, u, d) => {
		let { value: m } = l(t, p, e.math), h = d?.shiftKey && typeof f == "number" ? f : c;
		return n(r((typeof m == "number" ? m : typeof a == "number" ? a : 0) + (u === "increment" ? h : -h), typeof s == "number" ? s : i(e.value)), a, o);
	}, _ = (t, n) => {
		let { event: r, value: i } = t;
		if (r.key !== "ArrowUp" && r.key !== "ArrowDown") return;
		let a = r.key === "ArrowUp" ? "increment" : "decrement";
		if (e.doubleValue && i.includes(",")) {
			let t = r.target;
			if (t) {
				r.preventDefault();
				let o = t.selectionStart ?? i.length, s = i.indexOf(",");
				if (s !== -1) {
					let c = o <= s, l = i.split(",");
					if (l.length > 1) {
						let i = l[0].trim(), o = l.slice(1).join(",").trim(), s = g(c ? i : o, a, { shiftKey: r.shiftKey }), d = u(c ? String(s) : i, e), f = u(c ? o : String(s), e), p = d.formattedValue ?? d.rawValue ?? i, m = `${p}, ${f.formattedValue ?? f.rawValue ?? o}`;
						if (t.value = m, c) t.setSelectionRange(0, p.length);
						else {
							let e = p.length + 2;
							t.setSelectionRange(e, m.length);
						}
						n?.(m);
						return;
					}
				}
			}
		}
		r.preventDefault();
		let o = g(i, a, { shiftKey: r.shiftKey });
		n?.(o);
	};
	return {
		...h,
		handleKeyDown: _,
		parse: m
	};
};
//#endregion
export { f as useNumericInput };
