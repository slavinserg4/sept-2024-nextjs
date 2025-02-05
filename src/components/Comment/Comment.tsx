import {IComment} from "@/models/IComment";
import {FC} from "react";
import Link from "next/link";

type CommentProps = {
    comment:IComment;
}
const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <Link href={{pathname:'/comments/${comment.id}', query:{data:JSON.stringify(comment)} }}>{comment.name}</Link>
        </div>
    );
};

export default Comment;