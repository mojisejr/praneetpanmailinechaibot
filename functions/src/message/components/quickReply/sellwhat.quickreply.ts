import { QuickReply, QuickReplyItem, TextMessage } from "@line/bot-sdk";

export const renderSellWhatQuickReply = (text: string) => {
  return {
    type: "text",
    text: text,
    quickReply: {
      items: [
        renderMessageActionItem("ดูทั้งหมด"),
        // renderMessageActionItem("แยกหมวดหมู่"),
      ] as QuickReplyItem[],
    } as QuickReply,
  } as TextMessage;
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
