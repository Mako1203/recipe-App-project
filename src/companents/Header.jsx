

import Menusvg from"../Assets/images/Menu.svg"
import { Link } from "react-router-dom";


function Header(){
    return(
    <header class = "header">
        <div class = "container">
            <Link to="/Category" class="btn-category">
                <img src={Menusvg} alt="menu-btn"/>
            </Link>
        </div>    
    </header>
    );
}
export default Header;