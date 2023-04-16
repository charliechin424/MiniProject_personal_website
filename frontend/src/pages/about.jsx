import "./about.css"
import me from "./photo.png"
export default function About() {
  return (
    <div class="container">
      
        <div class="title">
          <img src={me} />
            <div class="title-header">
                <ul style={{fontSize: "larger"}}>
                    <li style={{padding: "1%"}}>1. Name : 金家逸</li>
                    <li style={{padding: "1%"}}>2. Student ID : B10502076 </li>
                    <li style={{padding: "1%"}}>3. Department : Sophomore of Electrical Engineering</li>
                    <li style={{padding: "1%"}}>4. Gender : male</li>
                </ul>
                <div style={{fontSize: "200%"}}>Wish you have a nice day !!!</div>
            </div>
        </div>
    </div>
  );
}
