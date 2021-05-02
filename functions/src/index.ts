import * as functions from "firebase-functions";
import * as express from "express";
import * as line from "@line/bot-sdk";
import { lineConfig } from "./setting";
import botAPI from "./router/router";
import db from "./services/database.service";
// const lineClient = new line.Client(lineConfig);
const app = express();

const dataLoader = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  await db.fetchAllProducts();
  await db.fetchCompanyData();
  await db.fetchCropData();

  console.log("data loading completed!..");
  req.db = db;
  next();
};

app.use(dataLoader);
app.use(
  line.middleware({
    channelSecret: lineConfig.channelSecret!,
    channelAccessToken: lineConfig.channelAccessToken,
  }),
  botAPI
);

export const api = functions.https.onRequest(app);
