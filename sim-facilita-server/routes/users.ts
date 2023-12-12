import express from "express";
import { addUser, deleteUser, getUsers, updateUser, postValidar, postLogado, deleteLogado, getUserLogado, getInfoLog } from "../controllers/user";

const router = express.Router()

router.get("/", getUsers)

router.get("/UserLogado", getUserLogado)

router.post("/validar", postValidar)

router.post("/logado", postLogado)

router.post("/infoUserLog", getInfoLog)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

router.post("/logadoDel", deleteLogado)

export default router