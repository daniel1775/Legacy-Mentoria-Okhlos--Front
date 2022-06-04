import React from "react";

const TextBienvenidaDashboard = () => {
  return (
    <div
      className="p-6 max-w-lg bg-PrimarioColor2 rounded-lg border border-gray-200 shadow-md  2xl:text-2xl"
    >
      <h5 className="mb-2 text-2xl text-center font-Roboto tracking-tight text-gray-900  2xl:text-4xl">
        Bienvenido/a a Okhlos
      </h5>
      <p className="font-GilroyLight text-center text-gray-700  2xl:text-3xl">
        Para conseguir tus objetivos profesionales y personales en el mundo
        tech.
      </p>
      <p className="font-GilroyLight text-xs text-center text-gray-700  2xl:text-xl">
        Aqui podras tener control de las mentorias y tener acceso a informes
        detallados de mentores y estudiantes.
      </p>
    </div>
  );
};

export default TextBienvenidaDashboard;
