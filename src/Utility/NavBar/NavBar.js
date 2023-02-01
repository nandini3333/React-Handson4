import {Link} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return(
        <div id="home">
            <Link to="/" className="link">Home</Link>
            <Link to="/StudentDetails" className="link">Student</Link>
            <Link to="/Contact-Us" className="link">ContactUs</Link>
        </div>
    )
    
}

export  default NavBar