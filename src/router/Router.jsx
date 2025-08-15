import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DeshboardLayout from "../components/deshboard/DeshboardLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>
    },
    {
        path: '/deshboard',
        element: <DeshboardLayout/>,
        children:[
            {
                path:'/deshboard/login',
                element: <h1>login page</h1>
            },
            {
                path:'/deshboard/register',
                element: <h1>register page</h1>
            },
            {
                path:'/deshboard/addproject',
                element: <h1>Add you Projects on this page</h1>
            },
            {
                path:'/deshboard/manageprojects',
                element: <h1>Manage you Projects on this page</h1>
            },
            {
                path:'/deshboard/inbox',
                element: <h1>see all messages on on this page</h1>
            },
        ]
    }
])
export default router