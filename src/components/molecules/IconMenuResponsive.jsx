import { Icon } from "@iconify/react";
import React from "react";

const IconMenuResponsive = ({children, icon}) => {
  return (
    <div className="dropdown dropdown-right">
        <div className="hover:bg-PrimarioColor2 py-4 cursor-pointer">
      <label tabIndex="0" className=" border-none  hover:rounded-none">
        <Icon className="cursor-pointer text-black text-[2rem]" icon={icon} style={{display:"inline"}} />
      </label></div>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"      >
        {children}

      </ul>
    </div>
  );
};

export default IconMenuResponsive;
