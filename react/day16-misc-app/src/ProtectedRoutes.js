import { useContext } from 'react';
import {Link, Navigate, Outlet} from 'react-router-dom';
import SecurityContext from './SecurityContext';
import LogoutView from './LogoutView';

const ProtectedRoutes = () => {
    const {loggedIn} =  useContext(SecurityContext);
    console.log("loggedIn", loggedIn);
    if (loggedIn) {
        return (<div>
            <header>
                HEADER
                <LogoutView/>
            </header>
            <hr/>
            <main>
                <Outlet/>
            </main>
            <hr/>
            <footer>FOOTER</footer>
        </div>)
    } else {
        return <Navigate to="/500"/> ;
    }
    
};

export default ProtectedRoutes;