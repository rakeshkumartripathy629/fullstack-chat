import express from "express";
import { sendMessage,getMessage} from "../controller/message.controller.js";
import secureRoute from "../middleware/auth.js";

const router = express.Router();

// Send a message (requires authentication)
router.post("/send/:id", secureRoute, sendMessage);

// Get all messages for a specific conversation (requires authentication)
router.get("/get/:id", secureRoute, getMessage);

export default router;
