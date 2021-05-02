import { WebhookEvent, Message, Client } from "@line/bot-sdk";
import { IDatabase } from "../../services/database.service";
import { lineConfig } from "./../../setting";
import { messageEventController } from "./../../message/controllers/message.controller";

const lineClient = new Client(lineConfig);

export const eventHandler = async function (
  event: WebhookEvent,
  db: IDatabase
) {
  let messages: Message[] = [];
  let replyToken: string = "";
  if (event.type == "message") {
    replyToken = event.replyToken;
    messages.push(messageEventController(event.message, db));
  }
  return lineClient.replyMessage(replyToken, messages);
};
