import { jsx as e } from "./index15.es.js";
//#region src/components/Icon/glyphs/chevronLeft.tsx
var t = ({ variant: t }) => {
	switch (t) {
		case "downscaled": return /* @__PURE__ */ e("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ e("path", {
				d: "M8.85164 9.76864C9.04686 9.96386 9.04677 10.2804 8.85164 10.4757C8.65638 10.6709 8.33987 10.6709 8.14461 10.4757L5.67 8.00106L8.14461 5.52645C8.33987 5.33119 8.65638 5.33119 8.85164 5.52645C9.04674 5.72173 9.04685 6.03828 8.85164 6.23348L7.08407 8.00106L8.85164 9.76864Z",
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
				d: "M14.3536 16.7707C14.5488 16.9659 14.5487 17.2825 14.3536 17.4777C14.1583 17.6729 13.8418 17.673 13.6466 17.4777L8.17 12.0012L13.6466 6.5246C13.8418 6.32939 14.1583 6.3295 14.3536 6.5246C14.5487 6.71988 14.5488 7.03643 14.3536 7.23164L9.58406 12.0012L14.3536 16.7707Z",
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
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M15.8451 19.8231C15.6327 20.0477 15.2779 20.0578 15.0531 19.8456L7.17519 12.4061C7.06342 12.3005 6.99958 12.1536 6.99941 11.9999C6.99941 11.8459 7.06336 11.6984 7.17519 11.5926L15.0531 4.15319C15.2779 3.9409 15.6328 3.95091 15.8451 4.17565C16.0574 4.40047 16.0474 4.75529 15.8227 4.96764L8.37539 11.9989L15.8226 19.0311C16.0474 19.2435 16.0574 19.5983 15.8451 19.8231Z",
				fill: "currentColor"
			})
		});
		default: throw Error(`chevronLeft icon error: Unsupported combination variant=${t}`);
	}
};
//#endregion
export { t as chevronLeft };
