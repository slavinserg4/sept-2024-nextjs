import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {IComment} from "@/models/IComment";

type Props = {
    searchParams:Promise<SearchParams>
}

const Page:FC<Props> = async ({searchParams}) => {
    const {data}=await searchParams
    let comment = null;
    if(typeof data ==='string'){
        comment = JSON.parse(data) as IComment
    }

    return (
        <div>
            {comment?.id},
            {comment?.name}
        </div>
    );
};

export default Page;