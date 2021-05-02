import { QuickReply, QuickReplyItem, TextMessage } from "@line/bot-sdk";

export const renderContactQuickReply = (text: string) => {
  return {
    type: "text",
    text: text,
    quickReply: {
      items: [
        renderMessageActionItem("แผนที่ร้าน"),
        renderPhoneActionItem("ขอเบอร์โทร"),
        renderFacebookActionItem("facebook"),
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

const renderFacebookActionItem = function (text: string) {
  return {
    type: "action",
    action: {
      type: "uri",
      label: text,
      uri: "https://www.facebook.com/ptPlant",
    },
  } as QuickReplyItem;
};
