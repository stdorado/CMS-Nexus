import {Router} from "express"
import { createPostController } from "../controllers/post.controller.js"

const router = Router()

router.post("/post/create",createPostController)

export default router