import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Layout: React.FC = () => {
  const activeStyle = {
    color: "#2563ea",
    borderBottom: "2px solid #2563ea",
  };

  return (
    <div>
      <header className="w-screen h-12 flex flex-col justify-center items-center text-sm text-gray-800 font-extrabold fixed top-0 bg-white">
        <div className="w-screen h-full px-3 flex justify-center items-center">
          <div className="w-1/12 h-full flex items-center">
            <NavLink to="/">
              <FontAwesomeIcon
                className="cursor-pointer text-xl text-blue-600"
                icon={faBook as IconProp}
              />
            </NavLink>
          </div>

          <div className="flex-1 h-full flex">
            <div className="flex-auto px-3 h-full flex justify-center items-center">
              {/* border-b-2 border-blue-600 활성 옵션으로 빼기 */}
              <div className="cursor-pointer h-9 w-16 flex justify-center items-center">
                <NavLink
                  to="/"
                  className="h-9 w-16 flex justify-center items-center hover:text-blue-600 duration-300"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </div>
            </div>
            <div className="flex-auto px-3 h-full flex justify-center items-center">
              <div className="cursor-pointer h-9 w-16 flex justify-center items-center">
                <NavLink
                  to="/resume"
                  className="h-9 w-16 flex justify-center items-center hover:text-blue-600 duration-300"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Resume
                </NavLink>
              </div>
            </div>
            <div className="flex-auto px-3 h-full flex justify-center items-center">
              <div className="cursor-pointer h-9 w-16 flex justify-center items-center">
                <NavLink
                  to="/portfolio"
                  className="h-9 w-16 flex justify-center items-center hover:text-blue-600 duration-300"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Portfolio
                </NavLink>
              </div>
            </div>
            <div className="flex-auto px-3 h-full flex justify-center items-center">
              <div className="cursor-pointer h-9 w-16 flex justify-center items-center hover:text-blue-600 duration-300">
                Github
              </div>
            </div>
            <div className="flex-auto px-3 h-full flex justify-center items-center">
              <div className="cursor-pointer h-9 w-16 flex justify-center items-center hover:text-blue-600 duration-300">
                Blog
              </div>
            </div>
          </div>
        </div>
        <ScrollProgress />
      </header>

      <main
        className="mt-14 w-screen"
        style={{ background: "pink", height: 3000 }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
