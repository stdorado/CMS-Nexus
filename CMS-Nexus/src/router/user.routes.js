import { createUser,GetUser, findUser,deleteUserController,updateUserController } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router()

router.get("/user/:id",findUser)
router.post("/user/create",createUser)
router.get("/user/find",GetUser)
router.delete("/user/delete/:id",deleteUserController)
router.put("/user/update/:id",updateUserController)
export default router;