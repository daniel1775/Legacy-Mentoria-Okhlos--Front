import style from "./Cohort.module.css";
import Select from "react-select";
import { useEffect, useState } from "react";

export default function Cohort(props) {
  const { handleTypeSelectCohort, handleTypeSelectProgram, getValuesFinal, showSelectCohort, setShowSelectCohort } = props;

  const cohorte = [
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
  ];

  const programa = [
    {
      value: 200,
      label: "Bootcamp Prográmate",
    },

    {
      value: 201,
      label: "Administración de empresas",
    },
  ];

  const handleValueSelectProgram = e => {
    e.value === programa[1].value ? setShowSelectCohort(false) : setShowSelectCohort(true)
  }

  return (
    <div className={style.contenedor}>
      <div className={style.text}>
        <h4>Seleccione la cohorte y el programa para realizar el Match.</h4>
      </div>
      <div className={style.cardSelect}>
        {
          <>
            <h5>Seleccione las opciones.</h5>

            <Select className={showSelectCohort ? style.show : style.hide}
              name="cohorte"
              options={cohorte}
              onChange={handleTypeSelectCohort}
            />
            <br />

            <Select
              name="programa"
              options={programa}
              onChange={e => {handleTypeSelectProgram(e);handleValueSelectProgram(e)}}
            />
            <br />
            {
              <button 
                className={style.buttonSelect} 
                onClick={getValuesFinal}
              >
                Aceptar
              </button>
            }
          </>
        }
      </div>
    </div>
  );
}
