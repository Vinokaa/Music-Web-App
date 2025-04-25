import express from "express"
import { getUsers, postUser, updateUser, deleteUser } from "../controllers/users.js"
import multer from "multer"

const router = express.Router();

const storage = multer.diskStorage({
    destination: './uploads/',

    filename: (_, file, cb) => {
        const filenameList = file.originalname.split('.');
        const ext = filenameList[filenameList.length-1];
        const name = Date.now();
        cb(null, name + '.' + ext);
    }
});

const upload = multer({storage: storage});

router.get("/", getUsers);
router.post("/insert", upload.any(), postUser);
router.put("/update", upload.any(), updateUser);
router.delete("/delete", deleteUser);

router.use("/uploads", express.static("./uploads"));

export default router