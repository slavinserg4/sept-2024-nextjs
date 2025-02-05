import {getPosts} from "@/services/api.service";
import Post from "@/components/Post/Post";

const Posts = async () => {
    const posts = await getPosts();
    return (
        <div>
            {posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;