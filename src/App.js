import Home from "./Pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import NotFound from "./Pages/NotFound";
import SubTemaList from "./Pages/SubTemaList";
import SubTemaDetail from "./Pages/SubTemaDetail";
import MobileRoot from "./Pages/Mobile/MobileRoot";
import MobileHome from "./Pages/Mobile/MobileHome";
import { isMobile } from "react-device-detect";
import Company from "./Pages/Company";
import Coupon from "./Pages/Coupon";
import Notice from "./Pages/Notice";
import MobileTemaList from "./Pages/Mobile/MobileTemaList";
import MobileTemaDetail from "./Pages/Mobile/MobileTemaDetail";
import MobileCompany from "./Pages/Mobile/MobileCompany";



function App() {
    let router=null
    if(isMobile){
        router=createBrowserRouter(
            [
                {
                    path:'/',
                    element:<MobileRoot/>,
                    errorElement:<NotFound/>,
                    children:[
                        {index:true, element:<MobileHome/>},
                        {path:'/mobilecompany', element:<MobileCompany/>}
                        // {path:'/mobiletema', element:<MobileTemaList/>},
                        // {path:'/mobiletema/:productId', element:<MobileTemaDetail/>}
                    ]
                },

                {
                    path:'/mobiletema',
                    element:<MobileTemaList/>,
                    errorElement:<NotFound/>,
                 
                },
                {
                    path:'/mobiletema/:productId',
                    element:<MobileTemaDetail/>,
                    errorElement:<NotFound/>,
                 
                }






            ]
        )
    }else{
        router=createBrowserRouter(
            [
                {
                    path:'/',
                    element:<Root/>,
                    errorElement:<NotFound/>,
                    children:[
                        {index:true, element:<Home/>},
                        {path:'/tema', element:<SubTemaList/>},
                        {path:'/tema/:temaId', element:<SubTemaDetail/>},
                        {path:'/company', element:<Company/>},
                        {path:'/coupon', element:<Coupon/>},
                        {path:'/notice', element:<Notice/>}
                    ]
                }
            ]
        )
    }
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
