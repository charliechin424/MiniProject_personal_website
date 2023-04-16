import { Comment } from "./comment"
import services from "../services";

export function CommentList({ comments }) {
  for (let i = 0; i < comments.length; i++){
    services.user.checkid({Id: comments[i].userId}).then((data) => {
      const a = {...comments[1], isyou:"false"};
      console.log(a);
      comments[i] = {...a, ["isyou"]: data};
    })
  }
  console.log((comments[0]));
  return comments.map(comment => (
    <div key={comment.id} className="comment-stack">
      <Comment {...comment} />
    </div>
  ))
}