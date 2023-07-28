import {Link} from "react-router-dom";
import img from "../../../assets/image/logo.png";
import Container from "../../Container";

const Navbar = () => {
  const options = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Shope</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link>Tools</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#D4D4D4] ">

      <Container><div className="navbar text-lg font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {options}
            </ul>
          </div>
          <Link to='/' className="w-20">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{options}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn">Login</Link>
        </div>
      </div></Container>
    </div>
  );
};

export default Navbar;
