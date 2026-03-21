import { jsx as t } from "./index.es129.js";
const i = ({ variant: o, size: r }) => {
  switch (r + "_" + o) {
    case "16_default":
      return /* @__PURE__ */ t("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M8 11C8 9.34315 6.65685 8 5 8V11H8ZM11.5 11C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5V4.5C4 4.22386 4.22386 4 4.5 4C4.77614 4 5 4.22386 5 4.5V7C7.20914 7 9 8.79086 9 11H11.5Z",
          fill: "currentColor"
        }
      ) });
    case "24_default":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M12 15C12 13.3431 10.6569 12 9 12V15H12ZM15.5 15C15.7761 15 16 15.2239 16 15.5C16 15.7761 15.7761 16 15.5 16H8.5C8.22386 16 8 15.7761 8 15.5V8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5V11C11.2091 11 13 12.7909 13 15H15.5Z",
          fill: "currentColor"
        }
      ) });
    case "24_upscaled":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M6.49994 5.99994C6.77608 5.99994 6.99993 6.2238 6.99994 6.49994V11.0204C10.191 11.2632 12.7355 13.8089 12.9785 16.9999H17.4999C17.776 16.9999 17.9999 17.2239 17.9999 17.4999C17.9999 17.7761 17.7761 17.9999 17.4999 17.9999H6.49994C6.22382 17.9999 5.99994 17.7761 5.99994 17.4999V6.49994C5.99995 6.22382 6.22383 5.99997 6.49994 5.99994ZM6.99994 16.9999H11.9765C11.7386 14.3615 9.6384 12.2612 6.99994 12.0234V16.9999Z",
          fill: "currentColor"
        }
      ) });
    default:
      throw new Error(`rotation icon error: Unsupported combination size=${r}, variant=${o}`);
  }
};
export {
  i as rotation
};
