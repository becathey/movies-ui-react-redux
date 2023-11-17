import { Link } from "react-router-dom";
import './Header.css'

const Header = () => (
    <nav className="nav">
        <div className="logo">
            <Link to="/home" className="nav-link">Movie Hub</Link>
        </div>
    </nav>
)

export default Header