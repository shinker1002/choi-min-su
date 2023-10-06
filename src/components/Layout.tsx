import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <header style={{ background: "pink", padding: 16, fontSize: 24 }}>
        header
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
