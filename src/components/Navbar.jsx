import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { MenuIcon, X, Instagram, Facebook, Mail, PhoneIcon, Twitter, ArrowRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/services" },
    { label: "Contact us", path: "/contactus" },
    { label: "About us", path: "/about" },
    { label: "Career", path: "/career" },
    { label: "Our Clients", path: "/clients" },
  ];

  return (
    <header className="sticky top-0 z-50">

      <nav aria-label="top-nav" className=" flex bg-blue-500 text-white justify-between text-sm px-5 py-1">
        <div className="sm:flex gap-7">

          <div className="flex items-center gap-1 text-[11px]"><Mail width={20} />info@medocbills.com</div>
          <div className="flex items-center gap-1 text-[11px]"><PhoneIcon width={20} />571-520-2235</div>

        </div>

        <div className="flex sm:gap-10 gap-2">
          <div><Instagram width={20} /></div>
          <div><Facebook width={20} /></div>
          <div><Twitter width={20} /></div>
        </div>
      </nav>


      <nav aria-label="Main navigation" className=" flex z-40 items-end justify-between bg-white shadow-sm max-[1150px]:bg-blue-50">

        <Link to='/' className="flex gap-3 p-2 text-xl ml-2">
          <img src={Logo} alt="logo" className="w-55 h-full" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden min-[1150px]:flex">
          <div className="flex py-2 pl-8 h-full justify-between font-medium">
            <div className="flex items-center justify-evenly gap-5 brooklyn">
              {navItems.map((item) => (
                <NavLink
                  aria-label={item.label}
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-light transition-colors duration-300 hover:text-[#8B1538]
     ${isActive ? "text-[#8B1538]" : ""}
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[1px] after:w-0 after:bg-[#8B1538]
     after:transition-all after:duration-300
     hover:after:w-full`
                  }
                >
                  {item.label}
                </NavLink>

              ))}
            </div>

            <div className="flex ml-10">
              <NavLink
                aria-label="View Portfolio"
                to='/contactus'
                className="flex gap-2 font-light mx-2 p-2 px-4 cursor-pointer text-white bg-[#8B1538]
                hover:scale-90 duration-300 hover:bg-[#1B7C8C]"
              >
                Free Consultation
                <ArrowRight/>
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
                    `list-none p-1.5 font-light cursor-pointer hover:text-[#8B1538] ${isActive ? "text-[#8B1538]" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <NavLink
                aria-label="View Portfolio"
                to='/portfolio'
                className="flex gap-2 font-normal mx-2 p-2 px-4 cursor-pointer text-white bg-[#8B1538]"
              >
                Free Consultation
                <ArrowRight/>
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
