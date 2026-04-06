import { jsx as r } from "./index.es143.js";
const i = ({ variant: t, size: e }) => {
  switch (e + "_" + t) {
    case "16_default":
      return /* @__PURE__ */ r("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { d: "M11 12H5V10H11V12ZM11 9H5V7H11V9ZM11 6H5V4H11V6Z", fill: "currentColor" }) });
    case "24_default":
      return /* @__PURE__ */ r("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { d: "M15 16H9V14H15V16ZM15 13H9V11H15V13ZM15 10H9V8H15V10Z", fill: "currentColor" }) });
    case "24_upscaled":
      return /* @__PURE__ */ r("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { d: "M15 16H9V14H15V16ZM15 13H9V11H15V13ZM15 10H9V8H15V10Z", fill: "currentColor" }) });
    default:
      throw new Error(`dragHandle icon error: Unsupported combination size=${e}, variant=${t}`);
  }
};
export {
  i as dragHandle
};
