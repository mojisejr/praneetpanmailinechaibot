import { QuickReply, QuickReplyItem, TextMessage } from "@line/bot-sdk";

export const renderIntroductionQuickReply = (text: string) => {
  return {
    type: "text",
    text: text,
    quickReply: {
      items: [
        renderMessageActionItem("มีอะไรขายบ้าง"),
        renderPhoneActionItem("ขอเบอร์โทร"),
        renderMessageActionItem("ช่องทางติดต่อ"),
        renderMessageActionItem("ส่งยังไง"),
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

const renderPhoneActionItem = function (text: string) {
  return {
    type: "action",
    action: {
      type: "message",
      text: "0929931147",
      label: text,
    },
  } as QuickReplyItem;
};
