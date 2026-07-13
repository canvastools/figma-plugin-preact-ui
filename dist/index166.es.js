import { jsx as e } from "./index14.es.js";
//#region src/components/Icon/glyphs/variant.tsx
var t = ({ variant: t }) => {
	switch (t) {
		case "downscaled": return /* @__PURE__ */ e("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ e("path", {
				d: "M7.1216 2.59619C7.60974 2.10808 8.40103 2.1081 8.88918 2.59619L13.4146 7.12158C13.9026 7.60974 13.9027 8.40105 13.4146 8.88916L8.88918 13.4146C8.40106 13.9025 7.60971 13.9025 7.1216 13.4146L2.59621 8.88916C2.10818 8.40106 2.10825 7.60973 2.59621 7.12158L7.1216 2.59619Z",
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
				d: "M11.1177 5.59619C11.6059 5.10809 12.3971 5.10805 12.8853 5.59619L18.4068 11.1177C18.8947 11.6058 18.8948 12.3972 18.4068 12.8853L12.8853 18.4067C12.3972 18.8947 11.6058 18.8946 11.1177 18.4067L5.59621 12.8853C5.10808 12.3971 5.10814 11.6058 5.59621 11.1177L11.1177 5.59619Z",
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
				d: "M11.1186 3.63623C11.6068 3.14808 12.3981 3.14808 12.8862 3.63623L20.3686 11.1177C20.8568 11.6058 20.8568 12.3981 20.3686 12.8862L12.8862 20.3677C12.3981 20.8558 11.6068 20.8558 11.1186 20.3677L3.63621 12.8862C3.14806 12.3981 3.14806 11.6058 3.63621 11.1177L11.1186 3.63623Z",
				fill: "currentColor"
			})
		});
		default: throw Error(`variant icon error: Unsupported combination variant=${t}`);
	}
};
//#endregion
export { t as variant };
