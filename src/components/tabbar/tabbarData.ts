import type { tabbarDataTypes } from "./tpye";
const tabbarData: Array<tabbarDataTypes> = [
  {
    id: 1,
    title: "首页",
    imageUrl: "shouye.png",
    activeImageUrl: "shouye_active.png",
    path: "/home",
  },
  {
    id: 2,
    title: "收藏",
    imageUrl: "wode.png",
    activeImageUrl: "wode_active.png",
    path: "/favor",
  },
  {
    id: 3,
    title: "订单",
    imageUrl: "dingdan.png",
    activeImageUrl: "dingdan_active.png",
    path: "/order",
  },
  {
    id: 4,
    title: "信息",
    imageUrl: "xinxi.png",
    activeImageUrl: "xinxi_active.png",
    path: "/message",
  },
];
export default tabbarData;
