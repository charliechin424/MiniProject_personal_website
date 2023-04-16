
import api from "./axiosClient";

export const user = {
  async getAll() {
    const { data } = await api.get("/users");
    return data;
  },
  async getAllComment(){
    const { data } = await api.get("/users/chat");
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
    const { data } = await api.post("/users/chat", {message});
    return data;
  },
  async deletee({id,userId}){
    const {data} = await api.post("/users/delete", {id, userId});
    return data;
  },
  async getid(){
    const {data} = await api.get("/users/idd");
    return data;
  },
  async logout(){
    const {data} = await api.get("/users/logout");
    return data;
  },
  async checkid({Id}){
    const {data} = await api.post("/users/checkid", {Id});
    return data;
  },
};
