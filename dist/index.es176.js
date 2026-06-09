import { jsx as t } from "./index.es178.js";
const e = ({ variant: o }) => {
  switch (o) {
    case "downscaled":
      return /* @__PURE__ */ t("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M8.74856 8L11.4156 12H9.91262L7.99758 9.12695L6.08254 12H4.57961L7.24563 8L4.57961 4H6.08254L7.99758 6.87207L9.91262 4H11.4156L8.74856 8Z",
          fill: "currentColor"
        }
      ) });
    case "default":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M12.751 12L15.418 16H13.915L12 13.127L10.085 16H8.58203L11.248 12L8.58203 8H10.085L12 10.8721L13.915 8H15.418L12.751 12Z",
          fill: "currentColor"
        }
      ) });
    case "upscaled":
      return /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M12.7554 11.9995L17.4224 19.0005H15.9204L12.0034 13.1265L8.08838 19.0005H6.58545L11.2524 11.9995L6.58643 5.00049H8.08936L12.0034 10.8726L15.9194 5.00049H17.4214L12.7554 11.9995Z",
          fill: "currentColor"
        }
      ) });
    default:
      throw new Error(`x icon error: Unsupported combination variant=${o}`);
  }
};
export {
  e as x
};
