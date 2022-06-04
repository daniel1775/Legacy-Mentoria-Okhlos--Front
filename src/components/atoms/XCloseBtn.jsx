import React from "react";
import { Icon } from "@iconify/react";

const XCloseBtn = ({ func }) => {
  return (
    <button
      onClick={func}
      type="button"
      className=" bg-transparent "
    >
      <Icon icon="bx:x" className="hover:text-red-500" style={{ color: 'black', width: '25px', height: '25px' }} />
    </button>
  );

};

export default XCloseBtn;
