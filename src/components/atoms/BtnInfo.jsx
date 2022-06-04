import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const BtnInfo = ({link}) => {
  return (
    
      <NavLink to={link}
        type="button"
        className="text-black bg-SecondarioColor4  font-medium font-Roboto text-sm  py-2 text-center items-center w-full 2xl:text-2xl"
      >
        Mas información
        <Icon icon= "bi:arrow-right-circle-fill" style={{display:'inline', color:'black', marginLeft:'0.5rem' }}/>
        
      </NavLink>
    
  );
};

export default BtnInfo;
