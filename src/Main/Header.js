import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="top-header">
            <div className="fixedWidthF header clear-fix">
                <img src="/images/pagelogo.png" alt="agelogo"/>  
                <nav className="nav title">
                    <ul>
                        <li className="navOption"> <Link to={"/"}>hompage<em>home</em></Link></li>
                        <li className="navOption"><Link to={"/About"}> who are we?<em>about</em></Link></li>
                        <li className="navOption"><Link to={"/Projects"}> portfolio's<em>project</em></Link></li>
                        <li className="navOption"><Link to={"/Blog"}> latest news<em>blog</em></Link></li>
                        <li className="navOption"><Link to={"/Contact"}> get in touch<em>contact</em></Link></li>
                    </ul>
                </nav>  
            </div>       
        </div>
    );
}
 
export default Header;