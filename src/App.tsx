import './App.css'
import Header from "./Components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import PageContainer from "./Containers/PageContainer/PageContainer.tsx";

const App = () => (
    <>
        <Header/>
        <Routes>
            <Route path={'/pages/:pageName'} element={<PageContainer/>}/>
            <Route path={'*'} element={<h1 className={'text-center'}>PAGE Not Found</h1>}/>
        </Routes>
    </>
);

export default App
