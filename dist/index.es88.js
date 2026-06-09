import { jsx as o } from "./index.es178.js";
const l = ({ variant: r }) => {
  switch (r) {
    case "downscaled":
      return /* @__PURE__ */ o("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: "M12.5 2C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H3.5C2.67157 14 2 13.3284 2 12.5V3.5C2 2.67157 2.67157 2 3.5 2H12.5ZM4 4V12H12V4H4Z",
            fill: "currentColor",
            "fill-opacity": "0.3"
          }
        ),
        /* @__PURE__ */ o(
          "path",
          {
            d: "M11.5 3C12.3284 3 13 3.67157 13 4.5V11.5C13 12.2767 12.4097 12.9154 11.6533 12.9922L11.5 13H4.5L4.34668 12.9922C3.64069 12.9205 3.07949 12.3593 3.00781 11.6533L3 11.5V4.5C3 3.67157 3.67157 3 4.5 3H11.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4H4.5Z",
            fill: "currentColor"
          }
        )
      ] });
    case "default":
      return /* @__PURE__ */ o("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: "M17 4C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17ZM7 7V17H17V7H7Z",
            fill: "currentColor",
            "fill-opacity": "0.3"
          }
        ),
        /* @__PURE__ */ o(
          "path",
          {
            d: "M16.2041 6.01074C17.2128 6.113 18 6.96435 18 8V16L17.9893 16.2041C17.8938 17.1457 17.1457 17.8938 16.2041 17.9893L16 18H8C6.96435 18 6.113 17.2128 6.01074 16.2041L6 16V8C6 6.89543 6.89543 6 8 6H16L16.2041 6.01074ZM8 7C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H8Z",
            fill: "currentColor"
          }
        )
      ] });
    case "upscaled":
      return /* @__PURE__ */ o("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: "M19 2C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19ZM5 5V19H19V5H5Z",
            fill: "currentColor",
            "fill-opacity": "0.3"
          }
        ),
        /* @__PURE__ */ o(
          "path",
          {
            d: "M18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z",
            fill: "currentColor"
          }
        )
      ] });
    default:
      throw new Error(`dropShadow icon error: Unsupported combination variant=${r}`);
  }
};
export {
  l as dropShadow
};
