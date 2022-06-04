import React from "react";

const Unauthorized = () => {
  return (
    <div
      className="text-black min-h-screen bg-dark flex content-center align-center justify-center"
      style={{ paddingTop: "6rem" }}
    >
      {" "}
      No tiene Permisos para acceder a esta pagina
    </div>
  );
};

export default Unauthorized;
