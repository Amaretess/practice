import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <ul>
            <li><Link to="/">LOGO</Link></li>
            <li>menu</li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    )
}