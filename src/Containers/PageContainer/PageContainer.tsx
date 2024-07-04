import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../axiosApi.ts";
import PageItem from "../../Components/PageItem/PageItem.tsx";
import {Pages} from "../../types.ts";
import Spinner from "../../Components/Spinner/Spinner.tsx";
import './PageContainer.css'
const PageContainer = () => {
    const {pageName} = useParams();
    const [content, setContent] = useState<Pages | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getAxiosPage = useCallback(async () => {
        try {
            setIsLoading(true)
            const {data: page} = await axiosApi.get<Pages | null>(`/pages/${pageName}.json`);
            setContent(page)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }, [pageName])

    useEffect(() => {
        void getAxiosPage()
    }, [getAxiosPage])


    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spinner/>
            </div>
        )
    }
    return (
        <>
            <PageItem page={content}/>
        </>
    );
};

export default PageContainer;