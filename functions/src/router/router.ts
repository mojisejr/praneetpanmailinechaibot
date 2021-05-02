import { Router } from "express";
import { eventController } from "../events/controller/event.controller";

const router = Router();

router.post("/chatbot", eventController);

export default router;
