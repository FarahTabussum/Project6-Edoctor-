import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-base-100 p-10 text-primary-content flex flex-col items-center shadow-md">
      {/* Logo and Brand Name */}
      <div className="gap-2 flex flex-row items-center mb-4">
        <img src= "https://i.ibb.co.com/gMNggsPp/logo.png"  alt="Phudu Logo" className="w-10 h-10" />
        <a className="font-bold text-3xl text-black">Phudu</a>
      </div>

      {/* Navigation Links */}
      <div className="navbar-center mb-4">
        <ul className="menu menu-horizontal px-1 font-normal text-black flex flex-wrap justify-center">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/my-bookings">My-Bookings</Link></li>

          <li><Link to="/blogs">Blogs</Link></li>

          <li><Link to="/contact">Contact Us</Link></li>

        </ul>
      </div>

      {/* Social Media Icons in Column */}
      <div className="flex flex-row items-center gap-3">
        {/* Facebook */}
        <a href="#" aria-label="Facebook">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8" />

        </a>

        {/* X (Twitter) */}
        <a href="#" aria-label="X">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="X" className="w-8 h-8" />

        </a>

        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" className="w-8 h-8" />

        </a>

        {/* YouTube */}
        <a href="#" aria-label="YouTube">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="Youtube" className="w-8 h-8" />

        </a>
      </div>
    </footer>
  );
}

export default Footer;
