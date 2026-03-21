import { jsx as e } from "./index.es129.js";
const l = ({ variant: r, size: t }) => {
  switch (t + "_" + r) {
    case "16_default":
      return /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
        "path",
        {
          d: "M8.85164 9.76864C9.04686 9.96386 9.04677 10.2804 8.85164 10.4757C8.65638 10.6709 8.33987 10.6709 8.14461 10.4757L5.67 8.00106L8.14461 5.52645C8.33987 5.33119 8.65638 5.33119 8.85164 5.52645C9.04674 5.72173 9.04685 6.03828 8.85164 6.23348L7.08407 8.00106L8.85164 9.76864Z",
          fill: "currentColor"
        }
      ) });
    case "24_default":
      return /* @__PURE__ */ e("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
        "path",
        {
          d: "M12.8516 13.7686C13.0469 13.9639 13.0469 14.2814 12.8516 14.4766C12.6564 14.6715 12.3398 14.6716 12.1446 14.4766L9.66996 12.001L12.1446 9.52643C12.3398 9.33118 12.6563 9.33121 12.8516 9.52643C13.0469 9.7217 13.0469 10.0382 12.8516 10.2335L11.084 12.001L12.8516 13.7686Z",
          fill: "currentColor"
        }
      ) });
    case "24_upscaled":
      return /* @__PURE__ */ e("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M8.15291 4.17528C8.36527 3.95067 8.72012 3.94057 8.9449 4.15282L16.8228 11.5923C16.9346 11.6979 16.9984 11.8447 16.9986 11.9985C16.9986 12.1525 16.9347 12.3 16.8228 12.4057L8.9449 19.8452C8.72007 20.0575 8.36525 20.0475 8.1529 19.8227C7.94062 19.5979 7.95064 19.2431 8.17536 19.0307L15.6226 11.9995L8.17537 4.96727C7.95058 4.75493 7.9406 4.40012 8.15291 4.17528Z",
          fill: "currentColor"
        }
      ) });
    default:
      throw new Error(`chevronLeft icon error: Unsupported combination size=${t}, variant=${r}`);
  }
};
export {
  l as chevronLeft
};
