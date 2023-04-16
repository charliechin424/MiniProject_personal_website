import { Router } from "express";
import { getAllUsers,getOneUser, createOneUser, createComment, getAllComment,getUser,deletecomment, getid, logout, checkid} from "./handlers";

const router = Router();
router.post(`/`, createOneUser);
router.get(`/`, getAllUsers);
router.get(`/chat`,getAllComment);
router.get(`/idd`, getid);
router.get(`/logout`, logout);
router.post(`/name`, getOneUser);
router.post(`/chatname`, getUser);
router.post(`/chat`, createComment);
router.post(`/delete`, deletecomment);
router.post(`/checkid`, checkid);
export default router;
