import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-home">
                    <a href="" title="Go Back To The Home Page">Home</a>
                </li>
                <li>
                    <a href="" title="Log Into Your Account">Login</a>
                </li>
                <li>
                    <a href="" title="Learn More About Out Brand">About</a>
                </li>
                <li>
                    <a href="" title="How We Can Help You">Services</a>
                </li>
                <li>
                    <a href="" title="We Would Love To Hear Your Feeback">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;