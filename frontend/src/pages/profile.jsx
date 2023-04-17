import "./about.css"
import services from "../services";
import { useState, useEffect } from "react";
export default function Profile() {
    const [formData, setFormData] = useState({ username: "", image:"", Student_ID:"", NTU_mail: ""});
    useEffect(() =>{
        services.user.getprofile().then((user) => {
            setFormData({username: user.name, image: user.image, Student_ID: user.Student_ID, NTU_mail: user.NTU_mail})
        })
    }, []);
  return (
    <div class="container">
      
        <div class="title">
          <img style={{width:"20%", height:"40%"}} className="rounded-full" src={formData.image} />
            <div class="title-header">
                <ul style={{fontSize: "larger"}}>
                    <li style={{padding: "1%"}}>1. Name : {formData.username}</li>
                    <li style={{padding: "1%"}}>2. Student ID : {formData.Student_ID} </li>
                    <li style={{padding: "1%"}}>3. Mail : {formData.NTU_mail} </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
