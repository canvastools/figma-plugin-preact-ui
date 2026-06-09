import { jsx as t } from "./index.es178.js";
const l = ({ variant: i }) => {
  switch (i) {
    case "downscaled":
      return /* @__PURE__ */ t("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ t("rect", { x: "6", y: "6", width: "4", height: "4", fill: "currentColor", "fill-opacity": "0.3" }),
        /* @__PURE__ */ t(
          "path",
          {
            d: "M11.5 3C12.3284 3 13 3.67157 13 4.5V11.5C13 12.2767 12.4097 12.9154 11.6533 12.9922L11.5 13H4.5L4.34668 12.9922C3.64069 12.9205 3.07949 12.3593 3.00781 11.6533L3 11.5V4.5C3 3.67157 3.67157 3 4.5 3H11.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4H4.5ZM10.5 5C10.7761 5 11 5.22386 11 5.5V10.5C11 10.7417 10.8286 10.9437 10.6006 10.9902L10.5 11H5.5L5.39941 10.9902C5.20392 10.9503 5.04966 10.7961 5.00977 10.6006L5 10.5V5.5C5 5.22386 5.22386 5 5.5 5H10.5ZM6 10H10V6H6V10Z",
            fill: "currentColor"
          }
        )
      ] });
    case "default":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "6", height: "6", fill: "currentColor", "fill-opacity": "0.3" }),
        /* @__PURE__ */ t(
          "path",
          {
            d: "M16.2041 6.01074C17.2128 6.113 18 6.96435 18 8V16L17.9893 16.2041C17.8938 17.1457 17.1457 17.8938 16.2041 17.9893L16 18H8C6.96435 18 6.113 17.2128 6.01074 16.2041L6 16V8C6 6.89543 6.89543 6 8 6H16L16.2041 6.01074ZM8 7C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H8ZM15.5 8C15.7761 8 16 8.22386 16 8.5V15.5C16 15.7761 15.7761 16 15.5 16H8.5C8.22386 16 8 15.7761 8 15.5V8.5C8 8.22386 8.22386 8 8.5 8H15.5ZM9 15H15V9H9V15Z",
            fill: "currentColor"
          }
        )
      ] });
    case "upscaled":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ t("rect", { x: "8", y: "8", width: "8", height: "8", fill: "currentColor", "fill-opacity": "0.3" }),
        /* @__PURE__ */ t(
          "path",
          {
            d: "M18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6ZM16.1025 7.00488C16.6067 7.05621 17 7.48232 17 8V16L16.9951 16.1025C16.9472 16.573 16.573 16.9472 16.1025 16.9951L16 17H8C7.48232 17 7.05621 16.6067 7.00488 16.1025L7 16V8C7 7.44772 7.44772 7 8 7H16L16.1025 7.00488ZM8 16H16V8H8V16Z",
            fill: "currentColor"
          }
        )
      ] });
    default:
      throw new Error(`solid icon error: Unsupported combination variant=${i}`);
  }
};
export {
  l as solid
};
