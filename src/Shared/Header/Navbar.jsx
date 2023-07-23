import { NavLink } from "react-router-dom";
import {FaSearch} from "react-icons/fa"

const Navbar = () => {
  const items = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="colleges">Colleges</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="admission">Admissions</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="my-college">My Colleges</NavLink>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            {items}
            <li className="w-3/4">
              <label className="flex">
                <input
                  type="text"
                  placeholder="college name"
                  className="border md:px-4 py-2 "
                />
                <FaSearch className="bg-slate-300 w-6 h-6"/>
              </label>
            </li>
          </ul>
        </div>
        <btn className="btn btn-ghost normal-case text-xl flex gap-4">
          <img className="h-16 w-16" src="logo.jpg" alt="" />
          <span className="font-extrabold">National college</span>
        </btn>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end ">
        <a className="hidden md:btn">
          <label className="input-group">
            <input
              type="text"
              placeholder="college name"
              className="border px-4 py-2"
            />
            <span><FaSearch className=" cursor-pointer"/></span>
          </label>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
