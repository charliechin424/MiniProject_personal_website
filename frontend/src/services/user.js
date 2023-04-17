
import api from "./axiosClient";

export const user = {
  async getAll() {
    const { data } = await api.get("/users");
    return data;
  },
  async getAllComment(){
    const { data } = await api.get("/users/chatboard");
    return data;
  },
  async getOneComment(){
    const { data } = await api.get("/users/comment");
    return data;
  },
  async createOne({ name, password, image, Student_ID, NTU_mail}) {
    const { data } = await api.post("/users", { name:name ,password:password, image: image, Student_ID:Student_ID, NTU_mail:NTU_mail});
    return data;
  },
  async getUser({id}){
    const {data} = await api.post("/users/name",{id});
    return data;
  },
  async check({name, password}){
    const { data } = await api.post("/users/name", {name, password});
    return data;
  },
  async post({message}){
    const { data } = await api.post("/users/createComment", {message});
    return data;
  },
  async deletee({id,userId}){
    const {data} = await api.post("/users/deletecomment", {id, userId});
    return data;
  },
  async getid(){
    const {data} = await api.get("/users/getid");
    return data;
  },
  async logout(){
    const {data} = await api.get("/users/logout");
    return data;
  },
  async checkid(){
    const {data} = await api.get("/users/checkid");
    return data;
  },

  async getprofile(){
    const {data} = await api.get("/users/profile");
    return data;
  },
};
