import React from "react";
import authServices from "../../api/services/authServices";

const Rol = () => {
  const user = authServices.isLogin()
  return (
    <div className="text-center bg-PrimarioColor2 text-black text-md font-Roboto font-medium">
      {user.role}
    </div>
  );
};

export default Rol;

