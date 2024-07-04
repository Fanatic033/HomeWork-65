import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../axiosApi.ts";
import PageItem from "../../Components/PageItem/PageItem.tsx";
import {Pages} from "../../types.ts";

const PageContainer = () => {
    const {pageName} = useParams();
    const [content, setContent] = useState<Pages | null>(null);

    const getAxiosPage = useCallback(async () => {
        try {
            const {data: page} = await axiosApi.get<Pages | null>(`/pages/${pageName}.json`);
            setContent(page)
        }catch (e){
            console.log(e)
        }
    },[pageName])

    useEffect(() => {
      void  getAxiosPage()
    },[getAxiosPage])
    return (
        <>
<PageItem page={content}/>
        </>
    );
};

export default PageContainer;