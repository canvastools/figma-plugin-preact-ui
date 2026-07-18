import { jsx as e } from "./index15.es.js";
//#region src/components/Icon/glyphs/bullet.tsx
var t = ({ variant: t }) => {
	switch (t) {
		case "downscaled": return /* @__PURE__ */ e("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ e("path", {
				d: "M8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6Z",
				fill: "currentColor"
			})
		});
		case "default": return /* @__PURE__ */ e("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ e("path", {
				d: "M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z",
				fill: "currentColor"
			})
		});
		case "upscaled": return /* @__PURE__ */ e("svg", {
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ e("path", {
				d: "M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z",
				fill: "currentColor"
			})
		});
		default: throw Error(`bullet icon error: Unsupported combination variant=${t}`);
	}
};
//#endregion
export { t as bullet };
