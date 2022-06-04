import React from "react";

const CardInfo = ({text,dato}) => {
  return (
    <div className="flex flex-col items-start p-4 lg:gap-1 gap-4 2xl:gap-1  2xl:items-center">
      
      <h5 className="text-gray-900 text-base  font-Roboto leading-tight font-medium text-[1.8rem] md:text-[1.7rem]  2xl:text-6xl ">
        {dato}
      </h5>
      <p className="text-gray-700 text-base font-GilroyLight 2xl:text-2xl">
        {text}
      </p>
    </div>
  );
};

export default CardInfo;
