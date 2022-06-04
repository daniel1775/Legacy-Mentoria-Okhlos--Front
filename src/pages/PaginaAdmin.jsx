import React from "react";
import { Footer, NavbarDashboard, NavbarMobil, SidebarDashboard, SidebarResponsive } from "../components/templates"


const PaginaAdmin = ({ children }) => {
  return (
    <div>
      <div className="flex ">
        <div>
          <div className="hidden lg:block">
            <SidebarDashboard />
          </div>
          <div className="hidden md:block lg:hidden w-max ">
            <SidebarResponsive />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between h-screen  ">
          <div className="hidden md:block">
            <NavbarDashboard />
          </div>
          <div className="md:hidden">
            <NavbarMobil />
          </div>

          <div className="overflow-scroll overflow-x-hidden">{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaAdmin;
