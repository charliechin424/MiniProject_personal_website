import { useEffect, useState } from "react";
import service from "./../services";
import "./user.css"

function UserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    service.user.getAll().then((allUsers) => {
      setUsers(allUsers);
    });
  }, []);

  const emb = users.map(element => <tr key={element.id}><td>{element.name}</td><td><img  src={element.image}/></td><td>{element.Student_ID}</td><td>{element.NTU_mail}</td></tr>)

  return (
    <div>
      <h1 style={{position: "relative", left: "5%", fontSize: "280%"}}>This is the user list</h1>
      <table><thead><tr><th>username</th><th>image</th><th>Student-ID</th><th>NTU-mail</th></tr></thead><tbody>{emb.map(element => element)}</tbody></table>
    </div>
  );
}

export default UserPage;
