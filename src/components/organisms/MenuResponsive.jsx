import React from "react";
import { NavLink } from "react-router-dom";
import { BasicButtonIcon, IconMenu } from "../atoms";
import { IconMenuResponsive } from "../molecules";

const MenuResponsive = () => {
  return (
    <div className="text-center">
      <div className="hover:bg-PrimarioColor2 py-4">
        <NavLink to={"/Dashboard"}>
          <BasicButtonIcon
            color={"black"}
            icon={"ci:home-alt-outline"}
            w={"30px"}
          />
        </NavLink>
      </div>

      <div className="grid grid-rows-4">
        <IconMenuResponsive icon={"ph:student-fill"}>
          <NavLink to={"/EstudentLoad"}>
            <div className="hover:text-PrimarioColor1">
              <IconMenu icon={"akar-icons:circle"} text={"Cargar Datos"} />
            </div>
          </NavLink>
          <NavLink to={"/EstudentManage"}>
            <div className="hover:text-PrimarioColor1">
              <IconMenu
                icon={"akar-icons:circle"}
                text={"Administrar Estudiantes"}
              />
            </div>
          </NavLink>
        </IconMenuResponsive>

        <IconMenuResponsive icon={"carbon:user-profile"}>
          <NavLink to={"/MentorLoad"}>
            <div className="hover:text-PrimarioColor1">
              <IconMenu icon={"akar-icons:circle"} text={"Cargar Datos"} />
            </div>
          </NavLink>
          <NavLink to={"/MentorManage"}>
            <div className="hover:text-PrimarioColor1">
              <IconMenu
                icon={"akar-icons:circle"}
                text={"Administrar Mentores"}
              />
            </div>
          </NavLink>
        </IconMenuResponsive>

        <IconMenuResponsive icon={"fontisto:equalizer"}>
          <NavLink to={"/PlantillaMatch"}>
            <div className="hover:text-PrimarioColor1">
              <IconMenu icon={"akar-icons:circle"} text={"Realizar Match"} />
            </div>
          </NavLink>
          <NavLink to={"/MatchManage"}>
            <div className="hover:text-PrimarioColor1">
              <IconMenu icon={"akar-icons:circle"} text={"Administrar Match"} />
            </div>
          </NavLink>
        </IconMenuResponsive>

        <IconMenuResponsive icon={"carbon:group-presentation"}>
          <NavLink to={"/Sesiones"}>
            <div className="hover:text-PrimarioColor1">
              <IconMenu icon={"akar-icons:circle"} text={"Informe Sesiones"} />
            </div>
          </NavLink>
        </IconMenuResponsive>
      </div>
    </div>
  );
};

export default MenuResponsive;
