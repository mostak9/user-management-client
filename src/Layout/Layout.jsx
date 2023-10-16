import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="max-w-screen-lg mx-auto my-40 border-4 rounded-md border-gray-700">
            <div className="text-center py-4 bg-sky-600">
                <h1 className="text-2xl font-bold text-white">User Management System</h1>
            </div>

            <div className="p-10">
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Layout;