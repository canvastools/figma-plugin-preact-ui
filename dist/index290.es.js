//#region ../node_modules/.pnpm/detect-element-overflow@2.0.0/node_modules/detect-element-overflow/dist/index.js
function e(e) {
	return e.getBoundingClientRect();
}
function t(t, n) {
	return {
		get collidedTop() {
			return e(t).top < e(n).top;
		},
		get collidedBottom() {
			return e(t).bottom > e(n).bottom;
		},
		get collidedLeft() {
			return e(t).left < e(n).left;
		},
		get collidedRight() {
			return e(t).right > e(n).right;
		},
		get overflowTop() {
			return e(n).top - e(t).top;
		},
		get overflowBottom() {
			return e(t).bottom - e(n).bottom;
		},
		get overflowLeft() {
			return e(n).left - e(t).left;
		},
		get overflowRight() {
			return e(t).right - e(n).right;
		}
	};
}
//#endregion
export { t as default };
