import express from "express";
import {CreateSpeaker,GetSpeaker} from "../controllers/SpeakerController.js";

const router = express.Router();

router.post("/", CreateSpeaker);
router.get("/get", GetSpeaker);

export default router;