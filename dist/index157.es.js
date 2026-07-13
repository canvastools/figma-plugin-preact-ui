import { jsx as e } from "./index14.es.js";
//#region src/components/Icon/glyphs/strokeSolid.tsx
var t = ({ variant: t }) => {
	switch (t) {
		case "downscaled": return /* @__PURE__ */ e("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ e("path", {
				d: "M12.5 8C12.7761 8 13 8.22386 13 8.5C12.9999 8.77609 12.7761 9 12.5 9H3.5C3.2239 9 3.00007 8.77609 3 8.5C3 8.22386 3.22386 8 3.5 8H12.5Z",
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
				d: "M17.5001 12.0001C17.7762 12.0002 18.0001 12.224 18.0001 12.5001C18 12.7761 17.7762 13.0001 17.5001 13.0001H6.50013C6.22405 13.0001 6.00022 12.7762 6.00013 12.5001C6.00013 12.224 6.22399 12.0001 6.50013 12.0001H17.5001Z",
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
				d: "M19.4997 11.9996C19.7757 11.9996 19.9995 12.2237 19.9997 12.4996C19.9997 12.7758 19.7758 12.9996 19.4997 12.9996H4.49967C4.22368 12.9995 3.99967 12.7757 3.99967 12.4996C3.99986 12.2238 4.2238 11.9998 4.49967 11.9996H19.4997Z",
				fill: "currentColor"
			})
		});
		default: throw Error(`strokeSolid icon error: Unsupported combination variant=${t}`);
	}
};
//#endregion
export { t as strokeSolid };
