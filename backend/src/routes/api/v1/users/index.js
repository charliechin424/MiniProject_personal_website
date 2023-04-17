import { Router } from "express";
import { getAllUsers,getOneUser, createOneUser, createComment, getAllComment,getUser,deletecomment, getid, logout, getOneComment, getProfile} from "./handlers";

const router = Router();
router.post(`/`, createOneUser);
router.get(`/`, getAllUsers);
router.get(`/chat`,getAllComment);
router.get(`/idd`, getid);
router.get(`/logout`, logout);
router.get(`/profile`, getProfile);
router.get(`/comment`, getOneComment);
router.post(`/name`, getOneUser);
router.post(`/chatname`, getUser);
router.post(`/chat`, createComment);
router.post(`/delete`, deletecomment);
export default router;
