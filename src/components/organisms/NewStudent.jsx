import React from "react";
import { BasicButton } from "../atoms";
import { DataStudent } from "../molecules";

const NewStudent = ({ text }) => {
    return (
        <div className="">
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal  ">
                <div className="modal-box max-h-full w-screen flex flex-col justify-between ">
                    <div className="" >
                        <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-6 top-8"
                        >
                        ✕
                        </label>
                        <div className="bg-PrimarioColor2 rounded-xl p-2" >
                            <h3 className="text-lg font-bold">Agregar nuevo estudiante</h3>
                        </div>
                        <div className="py-7 ">
                        <DataStudent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewStudent;
