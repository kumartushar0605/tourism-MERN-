import express from 'express';
import multer from 'multer';
import {image,getblog,register,login,getMyProfile} from "../controllers/user.js"
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../src/images/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
 
router.post("/user/image",upload.single("image"),image);
router.get("/get-image",getblog);

router.post("/user/signup",upload.single("image"),register);
router.post("/user/login",upload.single("image"),login)
router.get("/users/me",isAuthenticated,getMyProfile)
// router.post("user/login",login);

export default router;

