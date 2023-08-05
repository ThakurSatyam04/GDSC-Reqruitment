import express from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });
import {createCard,getCard,getAllCards,deleteCards,uploadImg,getImageUrl} from "../controllers/Event_cardController.js";

const router = express.Router();

router.post("/", createCard);
router.get("/get/:id",getCard)
router.get("/getAll",getAllCards)
router.delete("/delete/:id",deleteCards)
router.put('/upload-image/:id', upload.single('image'), uploadImg);
router.get('/get-image-url/:id', getImageUrl);

export default router;