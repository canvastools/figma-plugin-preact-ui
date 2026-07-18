import e, { useCallback as t, useEffect as n, useLayoutEffect as r, useMemo as i, useRef as a, useState as o } from "preact/compat";
//#region ../node_modules/.pnpm/react-colorful@5.7.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-colorful/dist/index.mjs
function s() {
	return (s = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function c(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function l(e) {
	var t = a(e), n = a(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var u = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, d = function(e) {
	return "touches" in e;
}, f = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, p = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = d(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: u((i.pageX - (r.left + f(e).pageXOffset)) / r.width),
		top: u((i.pageY - (r.top + f(e).pageYOffset)) / r.height)
	};
}, m = function(e) {
	!d(e) && e.preventDefault();
}, h = e.memo(function(t) {
	var r = t.onMove, o = t.onKey, u = t.onEnd, h = c(t, [
		"onMove",
		"onKey",
		"onEnd"
	]), g = a(null), _ = l(r), v = l(o), y = l(u), b = a(null), x = a(!1), S = i(function() {
		var e = function(e) {
			m(e), (d(e) ? e.touches.length > 0 : e.buttons > 0) && g.current ? _(p(g.current, e, b.current)) : (n(!1), y());
		}, t = function() {
			n(!1), y();
		};
		function n(n) {
			var r = x.current, i = f(g.current), a = n ? i.addEventListener : i.removeEventListener;
			a(r ? "touchmove" : "mousemove", e), a(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = g.current;
				if (r && (m(t), !function(e, t) {
					return t && !d(e);
				}(t, x.current) && r)) {
					if (d(t)) {
						x.current = !0;
						var i = t.changedTouches || [];
						i.length && (b.current = i[0].identifier);
					}
					r.focus(), _(p(r, t, b.current)), n(!0);
				}
			},
			function(e) {
				var t = e.which || e.keyCode;
				t < 37 || t > 40 || (e.preventDefault(), v({
					left: t === 39 ? .05 : t === 37 ? -.05 : 0,
					top: t === 40 ? .05 : t === 38 ? -.05 : 0
				}));
			},
			function(e) {
				var t = e.which || e.keyCode;
				t >= 37 && t <= 40 && y();
			},
			n
		];
	}, [
		v,
		_,
		y
	]), C = S[0], w = S[1], T = S[2], E = S[3];
	return n(function() {
		return E;
	}, [E]), e.createElement("div", s({}, h, {
		onTouchStart: C,
		onMouseDown: C,
		className: "react-colorful__interactive",
		ref: g,
		onKeyDown: w,
		onKeyUp: T,
		tabIndex: 0,
		role: "slider"
	}));
}), g = function(e) {
	return e.filter(Boolean).join(" ");
}, _ = function(t) {
	var n = t.color, r = t.left, i = t.top, a = i === void 0 ? .5 : i, o = g(["react-colorful__pointer", t.className]);
	return e.createElement("div", {
		className: o,
		style: {
			top: 100 * a + "%",
			left: 100 * r + "%"
		}
	}, e.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: n }
	}));
}, v = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
};
360 / (2 * Math.PI);
var y = function(e) {
	return O(b(e));
}, b = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? v(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? v(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, x = function(e) {
	return D(T(e));
}, S = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: v(e.h),
		s: v(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: v(i / 2),
		a: v(r, 2)
	};
}, C = function(e) {
	var t = S(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, w = function(e) {
	var t = S(e);
	return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
}, T = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: v(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: v(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: v(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: v(i, 2)
	};
}, E = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, D = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? E(v(255 * i)) : "";
	return "#" + E(t) + E(n) + E(r) + a;
}, O = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: v(60 * (s < 0 ? s + 6 : s)),
		s: v(a ? o / a * 100 : 0),
		v: v(a / 255 * 100),
		a: i
	};
}, k = e.memo(function(t) {
	var n = t.hue, r = t.onChange, i = t.onChangeEnd, a = g(["react-colorful__hue", t.className]);
	return e.createElement("div", { className: a }, e.createElement(h, {
		onMove: function(e) {
			r({ h: 360 * e.left });
		},
		onKey: function(e) {
			r({ h: u(n + 360 * e.left, 0, 360) });
		},
		onEnd: i,
		"aria-label": "Hue",
		"aria-valuenow": v(n),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, e.createElement(_, {
		className: "react-colorful__hue-pointer",
		left: n / 360,
		color: C({
			h: n,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), A = e.memo(function(t) {
	var n = t.hsva, r = t.onChange, i = t.onChangeEnd, a = { backgroundColor: C({
		h: n.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return e.createElement("div", {
		className: "react-colorful__saturation",
		style: a
	}, e.createElement(h, {
		onMove: function(e) {
			r({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			r({
				s: u(n.s + 100 * e.left, 0, 100),
				v: u(n.v - 100 * e.top, 0, 100)
			});
		},
		onEnd: i,
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + v(n.s) + "%, Brightness " + v(n.v) + "%"
	}, e.createElement(_, {
		className: "react-colorful__saturation-pointer",
		top: 1 - n.v / 100,
		left: n.s / 100,
		color: C(n)
	})));
}), j = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, M = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || j(b(e), b(t));
};
function N(e, r, i, s) {
	var c = l(i), u = l(s), d = o(function() {
		return e.toHsva(r);
	}), f = d[0], p = d[1], m = a({
		color: r,
		hsva: f
	}), h = a(!1);
	return n(function() {
		if (!e.equal(r, m.current.color)) {
			var t = e.toHsva(r);
			m.current = {
				hsva: t,
				color: r
			}, p(t), h.current = !1;
		}
	}, [r, e]), n(function() {
		var t;
		j(f, m.current.hsva) || e.equal(t = e.fromHsva(f), m.current.color) || (m.current = {
			hsva: f,
			color: t
		}, c(t), h.current = !0);
	}, [
		f,
		e,
		c
	]), [
		f,
		t(function(e) {
			p(function(t) {
				return Object.assign({}, t, e);
			});
		}, []),
		t(function() {
			h.current && (h.current = !1, u(m.current.color));
		}, [u])
	];
}
var P, F = typeof window < "u" ? r : n, I = function() {
	return P || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, L = /* @__PURE__ */ new Map(), R = function(e) {
	F(function() {
		var t = e.current ? e.current.ownerDocument : document;
		if (t !== void 0 && !L.has(t)) {
			var n = t.createElement("style");
			n.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", L.set(t, n);
			var r = I();
			r && n.setAttribute("nonce", r), t.head.appendChild(n);
		}
	}, []);
}, z = function(t) {
	var n = t.className, r = t.colorModel, i = t.color, o = i === void 0 ? r.defaultColor : i, l = t.onChange, u = t.onChangeEnd, d = c(t, [
		"className",
		"colorModel",
		"color",
		"onChange",
		"onChangeEnd"
	]), f = a(null);
	R(f);
	var p = N(r, o, l, u), m = p[0], h = p[1], _ = p[2], v = g(["react-colorful", n]);
	return e.createElement("div", s({}, d, {
		ref: f,
		className: v
	}), e.createElement(A, {
		hsva: m,
		onChange: h,
		onChangeEnd: _
	}), e.createElement(k, {
		hue: m.h,
		onChange: h,
		onChangeEnd: _,
		className: "react-colorful__last-control"
	}));
}, B = {
	defaultColor: "000",
	toHsva: y,
	fromHsva: function(e) {
		return x({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: M
}, V = function(t) {
	return e.createElement(z, s({}, t, { colorModel: B }));
}, H = function(t) {
	var n = t.className, r = t.hsva, i = t.onChange, a = t.onChangeEnd, o = { backgroundImage: "linear-gradient(90deg, " + w(Object.assign({}, r, { a: 0 })) + ", " + w(Object.assign({}, r, { a: 1 })) + ")" }, s = g(["react-colorful__alpha", n]), c = v(100 * r.a);
	return e.createElement("div", { className: s }, e.createElement("div", {
		className: "react-colorful__alpha-gradient",
		style: o
	}), e.createElement(h, {
		onMove: function(e) {
			i({ a: e.left });
		},
		onKey: function(e) {
			i({ a: u(r.a + e.left) });
		},
		onEnd: a,
		"aria-label": "Alpha",
		"aria-valuetext": c + "%",
		"aria-valuenow": c,
		"aria-valuemin": "0",
		"aria-valuemax": "100"
	}, e.createElement(_, {
		className: "react-colorful__alpha-pointer",
		left: r.a,
		color: w(r)
	})));
}, U = function(t) {
	var n = t.className, r = t.colorModel, i = t.color, o = i === void 0 ? r.defaultColor : i, l = t.onChange, u = t.onChangeEnd, d = c(t, [
		"className",
		"colorModel",
		"color",
		"onChange",
		"onChangeEnd"
	]), f = a(null);
	R(f);
	var p = N(r, o, l, u), m = p[0], h = p[1], _ = p[2], v = g(["react-colorful", n]);
	return e.createElement("div", s({}, d, {
		ref: f,
		className: v
	}), e.createElement(A, {
		hsva: m,
		onChange: h,
		onChangeEnd: _
	}), e.createElement(k, {
		hue: m.h,
		onChange: h,
		onChangeEnd: _
	}), e.createElement(H, {
		hsva: m,
		onChange: h,
		onChangeEnd: _,
		className: "react-colorful__last-control"
	}));
}, W = {
	defaultColor: "0001",
	toHsva: y,
	fromHsva: x,
	equal: M
}, G = function(t) {
	return e.createElement(U, s({}, t, { colorModel: W }));
}, K = {
	defaultColor: {
		r: 0,
		g: 0,
		b: 0,
		a: 1
	},
	toHsva: O,
	fromHsva: T,
	equal: j
}, q = function(t) {
	return e.createElement(U, s({}, t, { colorModel: K }));
}, J = {
	defaultColor: {
		r: 0,
		g: 0,
		b: 0
	},
	toHsva: function(e) {
		return O({
			r: e.r,
			g: e.g,
			b: e.b,
			a: 1
		});
	},
	fromHsva: function(e) {
		return {
			r: (t = T(e)).r,
			g: t.g,
			b: t.b
		};
		var t;
	},
	equal: j
}, Y = function(t) {
	return e.createElement(z, s({}, t, { colorModel: J }));
};
//#endregion
export { G as HexAlphaColorPicker, V as HexColorPicker, Y as RgbColorPicker, q as RgbaColorPicker };
