import { FlexMessage } from "@line/bot-sdk";
import { Company } from "../../../models/company.model";
import { Crop } from "../../../models/crop.model";
import { Product } from "./../../../models/product.model";
import { renderProductBubble } from "./product.bubble";

export const renderProductCarousel = function (
  products: Product[],
  crop: Crop,
  company: Company
) {
  const bubbles = products.map((product) =>
    renderProductBubble(product, crop, company)
  );
  const flex = {
    type: "flex",
    altText: "รายการสิ่งที่ขายทั้งหมด",
    contents: {
      type: "carousel",
      contents: bubbles,
    },
  } as FlexMessage;
  return flex;
};
