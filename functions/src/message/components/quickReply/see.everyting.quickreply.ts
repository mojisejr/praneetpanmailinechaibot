import { QuickReply, QuickReplyItem, TextMessage } from "@line/bot-sdk";
import { Product } from "../../../models/product.model";

export const renderSeeEverythingQuickReply = function (
  text: string,
  products: Product[]
) {
  return {
    type: "text",
    text: text,
    quickReply: {
      items: renderQuickReplyItemArray(products) as QuickReplyItem[],
    } as QuickReply,
  } as TextMessage;
};

const renderQuickReplyItemArray = function (products: Product[]) {
  return products.map((product) => {
    return renderMessageActionItem(product.name, product.name);
  });
};

const renderMessageActionItem = function (text: string, label: string = text) {
  return {
    type: "action",
    action: {
      type: "message",
      text: text,
      label: label,
    },
  } as QuickReplyItem;
};
