import express from "express";
import potions from "../controllers/potion.controller.js";

const router = express.Router();

router.get('/potions', potions.findAll);
router.post('/potions', potions.create);

export default router