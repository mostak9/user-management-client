import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AllUsers from "../Components/AllUsers/AllUsers";
import CreateUser from "../Components/CreateUser/CreateUser";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <AllUsers/>
            },
            {
                path: '/createUser',
                element: <CreateUser/>,
            }
        ]
    }
])

export default router;