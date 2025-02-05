import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {IPost} from "@/models/IPost";

type PostProps = {
    searchParams:Promise<SearchParams>
}

const Page:FC<PostProps> = async ({searchParams}) => {
    const {data} = await searchParams
    let post = null
    if(typeof data ==="string"){
        post = JSON.parse(data) as IPost
    }

    return (
        <div>
            {post?.id}, <br/>
            {post?.body}
        </div>
    );
};

export default Page;