import { createBrowserRouter, Link } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import LoginView from "./LoginView";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./Home";

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes/>,
        children: [
            {
                index: true,
                element: <LoginView/>
            },
            {
                path: '/500',
                element: (<div>
                            <h1>You are not authorized to view. Please <Link to="/">Login</Link></h1>
                        </div>)
            }
        ]
    },
    {
        path: '/',
        element: <ProtectedRoutes/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            }
        ]
    }
]);

export default AppRoutes;