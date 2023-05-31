import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-lime-950 text-pink-100 p-4">
        <div className="flex items-center justify-between text-pink-100">
        <img src={logo} alt="logo" className="w-10 h-10 filter sepia" />
      <div className="navbar-brand">World Clock App</div>
        </div>
      <ul className="flex space-x-4">
        <li className="nav-item ">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Clocks</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
