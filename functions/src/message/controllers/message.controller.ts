import { EventMessage } from "@line/bot-sdk";
import { IDatabase } from "../../services/database.service";
import { QuickReplyComponents } from "../components/quickReply/quickReply";

export const messageEventController = function (
  messageEvent: EventMessage,
  db: IDatabase
) {
  const QuickReply = new QuickReplyComponents(db);
  if (messageEvent.type == "text") {
    if (QuickReply.match(messageEvent.text)) {
      return QuickReply.render(messageEvent.text);
    }
  }
  return QuickReply.introduction();
};
