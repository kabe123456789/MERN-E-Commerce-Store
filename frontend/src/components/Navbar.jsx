import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Minaye Design</Link>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/coaching"> Coaching</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><Link to="/coaching" className="get-started-btn">Get Started</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;