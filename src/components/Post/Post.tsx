import {IPost} from "@/models/IPost";
import {FC} from "react";
import Link from "next/link";

type PostProps = {
    post:IPost
}


const Post:FC<PostProps> = ({post}) => {
    return (
        <div>
            <Link href={{pathname:`/posts/${post.id}`, query:{data:JSON.stringify(post)}}}>{post.body}</Link>
        </div>
    );
};

export default Post;