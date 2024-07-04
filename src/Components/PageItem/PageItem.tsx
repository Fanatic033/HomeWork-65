import {FC} from "react";
import {Pages} from "../../types.ts";

interface Props {
    page: Pages | null;
}

const PageItem: FC<Props> = ({page}) => {
    if (!page) {
        return <h1 className='text-center'>Page not found</h1>
    }
    return (
        <>
            <div className={'d-flex flex-column justify-content-center mt-5'}>
                <h1 className={'text-center'}>{page.title}</h1>
                <div className={'ms-5 mt-3'} dangerouslySetInnerHTML={{__html: page.content}}></div>
            </div>
        </>
    );
};

export default PageItem;