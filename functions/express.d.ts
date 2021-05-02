import { IDatabase } from "./src/services/database.service";

declare global {
  namespace Express {
    interface Request {
      db: IDatabase;
    }
  }
}
