import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";

const Layout: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  return (
    <div>
      <header className="w-screen h-12 flex flex-col justify-center items-center text-sm text-gray-800 font-bold fixed top-0 bg-white">
        <div className="w-screen h-full px-3 flex justify-center items-center">
          <div className="w-1/6 h-full flex items-center">아이콘</div>
          <div className="flex-1 h-full flex">
            <div className="flex-auto px-3 h-full flex items-center">Home</div>
            <div className="flex-auto px-3 h-full flex items-center">
              Resume
            </div>
            <div className="flex-auto px-3 h-full flex items-center">
              Portfolio
            </div>
            <div className="flex-auto px-3 h-full flex items-center">
              Github
            </div>
            <div className="flex-auto px-3 h-full flex items-center">Blog</div>
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
