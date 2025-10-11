import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { MenuIcon, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/services" },
    { label: "Contact us", path: "/contactus" },
    // { label: "Company", path: "/company" }, 
  ];

  return (
    <header>

      <nav aria-label="Main navigation" className=" sticky top-0 flex z-40 items-end justify-between bg-white shadow-sm max-[1150px]:bg-blue-50">

        <Link to='/' className="flex gap-3 p-2 text-xl ml-2">
          <img src={Logo} alt="logo" className="w-55 h-full" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden min-[1150px]:flex">
          <div className="flex p-2 pl-8 h-full justify-between font-medium">
            <div className="flex items-center justify-evenly lg:gap-10 brooklyn">
              {navItems.map((item) => (
                <NavLink
                  aria-label={item.label}
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-orange-600 ${isActive ? "text-orange-600" : ""
                    }`
                  }
                >
                  <li className="list-none px-3 cursor-pointer">{item.label}</li>
                </NavLink>
              ))}
            </div>

            <div className="flex ml-10">
              <NavLink
                aria-label="View Portfolio"
                to='/portfolio'
                className="rounded-3xl font-normal mx-2 p-2 px-4 cursor-pointer text-white bg-[#8B1538]"
              >
                Portfolio
              </NavLink>

            </div>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex min-[1150px]:hidden relative bottom-4 mr-4 cursor-pointer"
        >
          {menuOpen ? <X size={40} /> : <MenuIcon size={40} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`min-[1150px]:hidden w-full absolute top-full left-0 shadow-sm transition-all duration-300 ease-in-out 
        ${menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col p-2 pl-8 text-lg justify-center backdrop-blur-2xl bg-white">
            <div className="flex flex-col items-center justify-center">
              {navItems.map((item) => (
                <NavLink
                  aria-label={item.label}
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `list-none p-1.5 font-semibold cursor-pointer hover:text-orange-600 ${isActive ? "text-orange-600" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <NavLink
                aria-label="View Portfolio"
                to='/portfolio'
                className="rounded-3xl font-normal mx-2 p-2 px-4 cursor-pointer text-white bg-[#8B1538]"
              >
                Portfolio
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
