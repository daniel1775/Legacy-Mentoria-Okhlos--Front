import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {BasicComboBox, ButtonIconText, ModalAlert} from "../atoms";
import matchServices from "../../api/services/matchServices";
import { selectDataEstudentApi } from "../../redux/slices/DataApiEstudentSlice";
import { ModalUpdate } from "../molecules";
import { FormMatch } from "../molecules";


const MatchTableOptions = ({func, funcMatch}) => {
    const [open,setopen] = useState(false) 
   
    const data = useSelector(selectDataEstudentApi)
    function openmodal(){
        setopen(true) 
    }

    function reset(){
        const response= matchServices.resetMatch()
        response.then(res=>{
            console.log(res)
            if(res.message=="¡Matchs reestablecidos!"){
                ModalAlert("Reset Ok", "Se restablecio el match satisfactoriamente", "success")
            }else{
                ModalAlert("Reset Error", "No se pudo restablecer el match", "Error")
            }
        })

    } 

    return (
        <div className="
            flex
            flex-col
            items-center
            justify-center
            gap-5
            pt-5
            md:flex-row
            md:justify-between
            ">
            <ModalUpdate state={open} setState={setopen} title={''}>
                <FormMatch func={func} data={data}/>
            </ModalUpdate>
            

            <div className="">
                <BasicComboBox func={func} load={"student"} data={data} />
                
            </div>
            <div className="
                flex
                flex-col
                gap-3
                md:flex-row
            ">
                <ButtonIconText text={"Match Masivo"} icon={"clarity:group-solid"} func={funcMatch} />
                <ButtonIconText text={"Reset Match"} icon={"clarity:group-solid"} func={reset} />
                <ButtonIconText text={"Match Individual"} icon={"material-symbols:group-add-rounded"} func={openmodal}  />
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"}  />
                
            </div>
        </div>
    );
};

export default MatchTableOptions;
