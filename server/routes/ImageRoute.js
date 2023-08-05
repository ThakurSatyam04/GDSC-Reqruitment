import express from "express";
import multer from "multer";
import {uploadImg,getImageUrl} from '../controllers/ImageController.js'

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload-image', upload.single('image'), uploadImg);
router.get('/get-image-url', getImageUrl);

export default router;
