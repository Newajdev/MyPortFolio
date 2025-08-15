import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>
    },
    {
        path: '/deshboard',
        element: <h2>THis is Deshboard</h2>
    }
])
export default router