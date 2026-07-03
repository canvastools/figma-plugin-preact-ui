import { jsx as H } from "./index.es203.js";
const o = ({ variant: V }) => {
  switch (V) {
    case "downscaled":
      return /* @__PURE__ */ H("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ H(
        "path",
        {
          d: "M4 11C4 11.5523 4.44772 12 5 12V13C3.89543 13 3 12.1046 3 11H4ZM7.5 13H6V12H7.5V13ZM10 13H8.5V12H10V13ZM13 11C13 12.1046 12.1046 13 11 13V12C11.5523 12 12 11.5523 12 11H13ZM4 10H3V8.5H4V10ZM13 10H12V8.5H13V10ZM4 7.5H3V6H4V7.5ZM13 7.5H12V6H13V7.5ZM5 4C4.44772 4 4 4.44772 4 5H3C3 3.89543 3.89543 3 5 3V4ZM11 3C12.1046 3 13 3.89543 13 5H12C12 4.44772 11.5523 4 11 4V3ZM7.5 4H6V3H7.5V4ZM10 4H8.5V3H10V4Z",
          fill: "currentColor"
        }
      ) });
    case "default":
      return /* @__PURE__ */ H("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ H(
        "path",
        {
          d: "M7 16C7 16.5523 7.44772 17 8 17V18C6.89543 18 6 17.1046 6 16H7ZM11.25 18H9.5V17H11.25V18ZM14.5 18H12.75V17H14.5V18ZM18 16C18 17.1046 17.1046 18 16 18V17C16.5523 17 17 16.5523 17 16H18ZM7 14.5H6V12.75H7V14.5ZM18 14.5H17V12.75H18V14.5ZM7 11.25H6V9.5H7V11.25ZM18 11.25H17V9.5H18V11.25ZM8 7C7.44772 7 7 7.44772 7 8H6C6 6.89543 6.89543 6 8 6V7ZM16 6C17.1046 6 18 6.89543 18 8H17C17 7.44772 16.5523 7 16 7V6ZM11.25 7H9.5V6H11.25V7ZM14.5 7H12.75V6H14.5V7Z",
          fill: "currentColor"
        }
      ) });
    case "upscaled":
      return /* @__PURE__ */ H("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ H(
        "path",
        {
          d: "M5 17.5C5 18.3284 5.67157 19 6.5 19H7V20H6.5C5.11929 20 4 18.8807 4 17.5V17H5V17.5ZM11 20H9V19H11V20ZM15 20H13V19H15V20ZM20 17.5C20 18.8807 18.8807 20 17.5 20H17V19H17.5C18.3284 19 19 18.3284 19 17.5V17H20V17.5ZM5 15H4V13H5V15ZM20 15H19V13H20V15ZM5 11H4V9H5V11ZM20 11H19V9H20V11ZM7 5H6.5C5.67157 5 5 5.67157 5 6.5V7H4V6.5C4 5.11929 5.11929 4 6.5 4H7V5ZM17.5 4C18.8807 4 20 5.11929 20 6.5V7H19V6.5C19 5.67157 18.3284 5 17.5 5H17V4H17.5ZM11 5H9V4H11V5ZM15 5H13V4H15V5Z",
          fill: "currentColor"
        }
      ) });
    default:
      throw new Error(`group icon error: Unsupported combination variant=${V}`);
  }
};
export {
  o as group
};
