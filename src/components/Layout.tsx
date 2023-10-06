import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <header style={{ background: "pink", padding: 16, fontSize: 24 }}>
        header
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
