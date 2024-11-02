import { Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Home/Homepage";
import Workshops from "./components/User/Workshops";
import DetailCamping from "./components/User/DetailCamping";
import Camping from "./components/User/Camping";
import DetailWorkshop from "./components/User/DetailWorkshop";

const Layout = () => {
    return (  
        <>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="workshops" element={<Workshops/>}/>
                    <Route path="workshops/:workshopId" element={<DetailWorkshop/>}/>
                    <Route path="camping" element={<Camping/>}/>
                    <Route path="camping/:campingId" element={<DetailCamping/>}/>
                    
                </Route>
            </Routes>
        </>
    );
}
 
export default Layout;