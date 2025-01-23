import {Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import Footer from "./Footer";
import logo from '../assets/images/logo.svg';

const MainLayout = () => {
    return (<div>
        <header>
            <img src={logo} width='100px' height='100px'></img>
            <MainNavBar/>
        </header>    
        <hr/>
        <main>
            <Outlet/>
        </main> 
        <hr/>
        <Footer/>

    </div>);
};

export default MainLayout;