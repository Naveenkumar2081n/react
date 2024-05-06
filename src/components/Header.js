import { LOGO_URL } from "../utils/constants";


 const Header = ()=>{
    return(
        <diV className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    
                
                </ul>

            </div>
        </diV>
    )
}
export default Header;