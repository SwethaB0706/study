import { NavLink } from "react-router-dom";

const MainNavBar = () => {
    return (<ul className='layoutList'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/labs'>Labs</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
    </ul>);
};

export default MainNavBar;