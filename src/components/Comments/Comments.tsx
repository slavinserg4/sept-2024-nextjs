import {getComments} from "@/services/api.service";
import Comment from "@/components/Comment/Comment";

const Comments = async () => {
    const comments = await getComments();
    return (
        <div>
            {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export default Comments;