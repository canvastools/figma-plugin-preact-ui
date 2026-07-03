import { jsx as t } from "./index.es203.js";
const n = ({ variant: o }) => {
  switch (o) {
    case "downscaled":
      return /* @__PURE__ */ t("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H12Z",
          fill: "currentColor"
        }
      ) });
    case "default":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H16Z",
          fill: "currentColor"
        }
      ) });
    case "upscaled":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M16.9997 10.9998C17.5519 10.9998 17.9996 11.4476 17.9997 11.9998C17.9997 12.552 17.552 12.9998 16.9997 12.9998H6.99971C6.44756 12.9996 5.99971 12.5519 5.99971 11.9998C5.99987 11.4477 6.44766 10.9999 6.99971 10.9998H16.9997Z",
          fill: "currentColor"
        }
      ) });
    default:
      throw new Error(`mixed icon error: Unsupported combination variant=${o}`);
  }
};
export {
  n as mixed
};
