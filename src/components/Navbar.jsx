import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItemStyle = ({ isActive }) =>
    isActive
      ? 'border-b-3 border-black text-black font-medium'
      : 'hover:text-blue-600';

  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm px-10">
        {/* Navbar Start (Mobile Dropdown + Logo) */}
        <div className="navbar-start">
          <div className="dropdown font-poppins">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><NavLink to="/" className={navItemStyle}>Home</NavLink></li>
              <li><NavLink to="/my-bookings" className={navItemStyle}>My-Bookings</NavLink></li>
              <li><NavLink to="/blogs" className={navItemStyle}>Blogs</NavLink></li>
              <li><NavLink to="/contact" className={navItemStyle}>Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="gap-2 flex flex-row items-center">
            <img src="https://i.ibb.co.com/gMNggsPp/logo.png" alt="Logo" />
            <a className="font-bold text-3xl text-black">Phudu</a>
          </div>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-normal text-black text-medium">
            <li><NavLink to="/" className={navItemStyle}>Home</NavLink></li>
            <li><NavLink to="/my-bookings" className={navItemStyle}>My-Bookings</NavLink></li>
            <li><NavLink to="/blogs" className={navItemStyle}>Blogs</NavLink></li>
            <li><NavLink to="/contact" className={navItemStyle}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Navbar End (Emergency Button) */}
        <div className="navbar-end">
          <a className="hidden lg:inline-flex btn bg-blue-600 text-white rounded-xl">
            Emergency
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

