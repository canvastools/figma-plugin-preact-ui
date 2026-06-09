import { jsx as t } from "./index.es178.js";
const e = ({ variant: C }) => {
  switch (C) {
    case "downscaled":
      return /* @__PURE__ */ t("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M11.5 4C11.7761 4 12 4.22386 12 4.5V6C12 6.27614 11.7761 6.5 11.5 6.5C11.2239 6.5 11 6.27614 11 6V5H8.5V11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H7.5V5H5V6C5 6.27614 4.77614 6.5 4.5 6.5C4.22386 6.5 4 6.27614 4 6V4.5C4 4.22386 4.22386 4 4.5 4H11.5Z",
          fill: "currentColor"
        }
      ) });
    case "default":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M16.5 7C16.7761 7 17 7.22386 17 7.5V9C17 9.27614 16.7761 9.5 16.5 9.5C16.2239 9.5 16 9.27614 16 9V8H12.5V16H13.5C13.7761 16 14 16.2239 14 16.5C14 16.7761 13.7761 17 13.5 17H10.5C10.2239 17 10 16.7761 10 16.5C10 16.2239 10.2239 16 10.5 16H11.5V8H8V9C8 9.27614 7.77614 9.5 7.5 9.5C7.22386 9.5 7 9.27614 7 9V7.5C7 7.22386 7.22386 7 7.5 7H16.5Z",
          fill: "currentColor"
        }
      ) });
    case "upscaled":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M17.5 6C17.7761 6 18 6.22386 18 6.5V8C18 8.27614 17.7761 8.5 17.5 8.5C17.2239 8.5 17 8.27614 17 8V7H12.5V17H13.5C13.7761 17 14 17.2239 14 17.5C14 17.7761 13.7761 18 13.5 18H10.5C10.2239 18 10 17.7761 10 17.5C10 17.2239 10.2239 17 10.5 17H11.5V7H7V8C7 8.27614 6.77614 8.5 6.5 8.5C6.22386 8.5 6 8.27614 6 8V6.5C6 6.22386 6.22386 6 6.5 6H17.5Z",
          fill: "currentColor"
        }
      ) });
    default:
      throw new Error(`text icon error: Unsupported combination variant=${C}`);
  }
};
export {
  e as text
};
