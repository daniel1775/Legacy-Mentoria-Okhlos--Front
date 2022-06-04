import React from "react";
import {TitleAddEstudiante, XCloseBtn} from "../atoms";

const AddStudent = () => {
  return (
    <div className="flex bg-PrimarioColor2 justify-between">
      <TitleAddEstudiante />
      <XCloseBtn />
    </div>
  );
};

export default AddStudent;
