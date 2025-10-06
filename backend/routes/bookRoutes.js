import express from "express";
import { getBooks, addBook } from "../controllers/bookController.js";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/roles.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", protect, authorize("admin", "author"), addBook);

export default router;
