import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>PREVATECH SAFARI'S</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/packages'>Packages</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
