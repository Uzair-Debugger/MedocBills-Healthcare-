import { useState } from 'react';
import Logo from '../assets/logo.webp';
import { navItems } from '../constants/data';
import { MenuIcon, X, Instagram, Facebook, Mail, PhoneIcon, Twitter, ArrowRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { CustomButton } from './layout/CustomButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav aria-label="top-nav" className="flex bg-blue-500 text-white justify-between text-sm px-5 py-1">
        <div className="flex gap-7">
          <div title="Email: info@medocbills.com" className="flex items-center gap-1 text-[11px]">
            <Mail width={20} />
            <span className="text-white sm:block">info@medocbills.com</span>
          </div>
          <div title="Phone: 571-520-2235" className="flex items-center gap-1 text-[11px]">
            <PhoneIcon width={20} />
            <span className="text-white sm:block">571-520-2235</span>
          </div>
        </div>

        <div className="hidden sm:flex sm:gap-10 gap-2">
          <Instagram width={20} />
          <Facebook width={20} />
          <Twitter width={20} />
        </div>
      </nav>

      <nav aria-label="Main navigation" className="flex z-40 items-end justify-between bg-white shadow-sm max-[1150px]:bg-blue-50">
        <Link to="/" className="flex gap-3 p-2 text-xl ml-2">
          <img src={Logo} alt="logo" className="w-55 h-full" loading='lazy'/>
        </Link>

        <div className="hidden min-[1150px]:flex">
          <div className="flex py-2 pl-8 h-full justify-between font-medium">
            <div className="flex items-center justify-evenly gap-5 brooklyn">
              {navItems.map((item) => (
                <NavLink
                  aria-label={item.label}
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-light transition-colors duration-300 hover:text-primary ${isActive ? 'text-primary' : ''} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex ml-10">
              <CustomButton variant="primary" className="gap-2 mx-2 px-4 py-2 text-white bg-primary hover:bg-secondary">
                Free Consultation
                <ArrowRight />
              </CustomButton>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex min-[1150px]:hidden relative bottom-4 mr-4 cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={40} /> : <MenuIcon size={40} />}
        </button>

        <div
          className={`min-[1150px]:hidden w-full absolute top-full left-0 shadow-sm transition-all duration-300 ease-in-out ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'
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
                    `list-none p-1.5 font-light cursor-pointer hover:text-primary ${isActive ? 'text-primary' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <CustomButton variant="primary" className="w-full gap-2 mx-2 px-4 py-2 text-white">
                Free Consultation
                <ArrowRight />
              </CustomButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
