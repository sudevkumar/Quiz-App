import { Router } from "express";
import {
  dropQuestions,
  dropResult,
  getQuestions,
  getResult,
  postQuestions,
  postResult,
} from "../controllers/controller.js";
const router = Router();

// Question Api */
router
  .route("/questions")
  .get(getQuestions)
  .post(postQuestions)
  .delete(dropQuestions);

router.route("/results").get(getResult).post(postResult).delete(dropResult);

export default router;

// http://localhost:8080/api/questions
