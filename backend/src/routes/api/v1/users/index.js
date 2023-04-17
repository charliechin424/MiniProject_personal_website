import { Router } from "express";
import { getAllUsers,getOneUser, createUser, createComment, getComment,getUser,deletecomment, getid, logout, getOneComment, getProfile} from "./handlers";

const router = Router();
router.post(`/`, createUser);
router.get(`/`, getAllUsers);
router.get(`/chatboard`,getComment);
router.get(`/getid`, getid);
router.get(`/logout`, logout);
router.get(`/profile`, getProfile);
router.get(`/comment`, getOneComment);
router.post(`/name`, getOneUser);
router.post(`/chatname`, getUser);
router.post(`/createComment`, createComment);
router.post(`/deletecomment`, deletecomment);
export default router;
