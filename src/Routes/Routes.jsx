import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AllUsers from "../Components/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <AllUsers/>
            }
        ]
    }
])

export default router;