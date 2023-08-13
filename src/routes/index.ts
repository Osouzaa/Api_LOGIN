import { Router } from "express";
import { UserModule } from "../app/users/UserModule";

const userController = UserModule.build().controller;

const router = Router();

router.post("/createUser", userController.create.bind(userController));

export { router };
