import './App.css'
import Header from "./Components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Page from "./Components/Page/Page.tsx";

const App = () => (
    <>
<Header/>
        <Routes>
<Route path={'/pages/:pageName'} element={<Page/>}/>
        </Routes>
    </>
);

export default App
