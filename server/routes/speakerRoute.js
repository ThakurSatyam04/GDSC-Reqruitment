import express from "express";
import {CreateSpeaker,GetSpeaker} from "../controllers/SpeakerController.js";

const router = express.Router();

router.post("/", CreateSpeaker);
router.get("/get/:id", GetSpeaker);

export default router;