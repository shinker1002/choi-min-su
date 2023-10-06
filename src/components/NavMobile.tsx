import React from "react";
import { NavLink } from "react-router-dom";

interface navMobileProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile: React.FC<navMobileProps> = ({ menuOpen, setMenuOpen }) => {
  const activeStyle = {
    color: "#2563ea",
    backgroundColor: "2px solid #d1d4db",
  };
  const handlePage = (): void => {
    setMenuOpen(!menuOpen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed flex-col hidden w-screen mt-px font-serif font-bold bg-white border-b border-gray-300 h-80 md:flex top-12">
      <div className="flex items-center justify-center flex-auto">
        <div className="w-screen cursor-pointer h-14 hover:bg-gray-200 hover:text-blue-600">
          <NavLink
            to="/"
            onClick={handlePage}
            className="flex items-center justify-center w-screen h-full "
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto">
        <div className="w-screen cursor-pointer h-14 hover:bg-gray-200 hover:text-blue-600">
          <NavLink
            to="/resume"
            onClick={handlePage}
            className="flex items-center justify-center w-screen h-full "
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Resume
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto">
        <div className="w-screen cursor-pointer h-14 hover:bg-gray-200 hover:text-blue-600">
          <NavLink
            to="/portfolio"
            onClick={handlePage}
            className="flex items-center justify-center w-screen h-full "
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Portfolio
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto">
        <div className="w-screen cursor-pointer h-14 hover:bg-gray-200 hover:text-blue-600">
          <a
            className="flex items-center justify-center w-screen h-full"
            href="https://github.com/shinker1002"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto">
        <div className="w-screen cursor-pointer h-14 hover:bg-gray-200 hover:text-blue-600">
          <a
            className="flex items-center justify-center w-screen h-full"
            href="https://fine-reply-6a8.notion.site/f2096d686014483b9980628525ec4dc1?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
