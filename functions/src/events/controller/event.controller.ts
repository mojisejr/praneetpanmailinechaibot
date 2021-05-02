import { WebhookEvent } from "@line/bot-sdk";
import { Response } from "express";
import { eventHandler } from "./../handlers/event.handler";

export const eventController = async (req: any, res: Response) => {
  const events: WebhookEvent[] = req.body.events;
  Promise.all(events.map((event) => eventHandler(event, req.db)))
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).end();
    });
};
