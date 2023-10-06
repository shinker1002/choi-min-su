import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBook, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavMobile from "./NavMobile";

const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const activeStyle = {
    color: "#2563ea",
    borderBottom: "2px solid #2563ea",
  };

  const handlePage = (): void => {
    setMenuOpen(!menuOpen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header className="fixed top-0 flex flex-col items-center justify-center w-screen h-12 font-serif text-sm font-extrabold text-gray-800 bg-white">
        <div className="flex items-center justify-center w-screen h-full px-3">
          {/** 아이콘 */}
          <div className="flex items-center w-1/12 h-full md:absolute md:left-3">
            <NavLink to="/">
              <FontAwesomeIcon
                onClick={handlePage}
                className="text-xl text-blue-600 cursor-pointer"
                icon={faBook as IconProp}
              />
            </NavLink>
          </div>
          {/** 모바일 닫기 버튼 */}
          {menuOpen === false && (
            <div className="flex-row-reverse items-center hidden w-1/12 h-full md:absolute md:right-4 md:flex">
              <FontAwesomeIcon
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-xl text-blue-600 cursor-pointer"
                icon={faBars as IconProp}
              />
            </div>
          )}
          {/** 모바일 햄버거 */}
          {menuOpen === true && (
            <div className="flex-row-reverse items-center hidden w-1/12 h-full md:absolute md:right-4 md:flex">
              <FontAwesomeIcon
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-xl text-blue-600 cursor-pointer"
                icon={faXmark as IconProp}
              />
            </div>
          )}
          {/** 메뉴 */}
          <div className="flex flex-1 h-full md:hidden">
            <div className="flex items-center justify-center flex-auto h-full px-3">
              <div className="flex items-center justify-center w-16 cursor-pointer h-9">
                <NavLink
                  to="/"
                  onClick={handlePage}
                  className="flex items-center justify-center w-16 transition-colors duration-300 h-9 hover:text-blue-600"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </div>
            </div>
            <div className="flex items-center justify-center flex-auto h-full px-3">
              <div className="flex items-center justify-center w-16 cursor-pointer h-9">
                <NavLink
                  to="/resume"
                  onClick={handlePage}
                  className="flex items-center justify-center w-16 transition-colors duration-300 h-9 hover:text-blue-600"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Resume
                </NavLink>
              </div>
            </div>
            <div className="flex items-center justify-center flex-auto h-full px-3">
              <div className="flex items-center justify-center w-16 cursor-pointer h-9">
                <NavLink
                  to="/portfolio"
                  onClick={handlePage}
                  className="flex items-center justify-center w-16 transition-colors duration-300 h-9 hover:text-blue-600"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Portfolio
                </NavLink>
              </div>
            </div>
            <div className="flex items-center justify-center flex-auto h-full px-3">
              <div className="flex items-center justify-center w-16 transition-colors duration-300 cursor-pointer h-9 hover:text-blue-600">
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
            <div className="flex items-center justify-center flex-auto h-full px-3">
              <div className="flex items-center justify-center w-16 transition-colors duration-300 cursor-pointer h-9 hover:text-blue-600">
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
          </div>
        </div>
        <ScrollProgress />
      </header>
      {menuOpen === true && (
        <NavMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}

      <main
        className="w-screen font-serif mt-14"
        style={{ background: "pink", height: 3000 }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
