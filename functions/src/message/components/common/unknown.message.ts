import { TextMessage } from "@line/bot-sdk";

export const renderCommonMessage = function (message: string) {
  return {
    type: "text",
    text: message,
  } as TextMessage;
};
