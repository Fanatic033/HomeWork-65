import {FC} from "react";
import {Pages} from "../../types.ts";

interface Props {
    page: Pages | null;
}

const PageItem: FC<Props> = ({page}) => {
if(!page){
    return <h1 className='text-center'>Page not found</h1>
}
    return (
        <>
            <h1>{page.title}</h1>
            <div>{page.content}</div>
        </>
    );
};

export default PageItem;