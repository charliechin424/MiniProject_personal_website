import { Comment } from "./comment"
import services from "../services";

export function CommentList({ comments }) {
  return comments.map(comment => (
    <div key={comment.id} className="comment-stack">
      <Comment {...comment} />
    </div>
  ))
}