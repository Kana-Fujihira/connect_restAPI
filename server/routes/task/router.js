import express from "express";

const router = express.Router();

import { browse, add, destroy } from "../../controllers/TaskActions.js";

router.get("/", browse);
router.post("/", add);
router.delete("/:id", destroy);

export default router;
