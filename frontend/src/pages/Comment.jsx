import { FaTrash } from "react-icons/fa"
import "./style.css"
import services from "../services";
import { useState, useEffect } from "react";
const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
})

export function Comment({
  id,
  message,
  createdAt,
  userId,
  isyou,
  username,
  image,
}) {
  // console.log(isyou);
  const onCommentDelete = (event) =>  {
    services.user.deletee({id: id, userId: userId});
    window.setTimeout(( () => window.location.replace("/chat") ), 1000);
    event.preventDefault();
  }
  return (
    <>
      <div className="comment" style={{position:"relative", left:"10%", width:"80%", height:"40%", borderWidth:"thick", borderColor:"pink"}}>
        <div className="header">
          <div className="name" style={{width: "80%", height:"80%", fontSize:"150%"}}>{username}</div>
          <span className="date" style={{width: "30%", height:"30%", fontSize:"150%",position:"absolute", top:"80%", left:"85%"}}>
            {dateFormatter.format(Date.parse(createdAt))}
          </span>
        </div>
        <div className="footer">
            <div style={{width: "10%", height:"10%", borderRadius:"50%"}}><img className="h-20 w-20 rounded-full" style={{borderRadius:"50%"}} src={image} alt="Base64 encoded image" /></div>
            <div style={{borderStyle:"dotted", borderWidth:"10%", fontSize:"200%", position:"absolute", left:"10%", top:"40%"}}>
                {message}
            </div>
            <div className="delete" style={{position:"absolute", left:"90%", top:"50%", fontSize:"larger", display: isyou===true ? "block" : "none"}} onClick={onCommentDelete}>刪除訊息</div>
        </div>
      </div>
    </>
  )
}