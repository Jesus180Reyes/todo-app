import {  createBrowserRouter,Navigate} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            
            { path: '*', element: <Navigate to="/" /> },
        ],
    
    }, 
    {
        path: "*",
        element: <><h1>Not Found</h1></>
    }


]);
