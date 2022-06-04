import React, { useState } from "react";
import { PageOptionsTitle } from "../molecules";
import { MatchTableOptions, TableMatch, } from "../organisms";
import { ModalUpdate } from "../molecules";
import { InfoMatch, ModalAlert } from "../atoms";
import { useSelector, useDispatch } from "react-redux";
import { matchMassive } from "../../redux/slices/loadDataMatchSlice";
import { selectDataEstudentApi } from "../../redux/slices/DataApiEstudentSlice";
import studentServices from "../../api/services/studentServices";



const PlantillaMatch = () => {
  const dispatch = useDispatch()
  const students = useSelector(selectDataEstudentApi)
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [datainfo, setDatainfo] = useState("")
  const [datos, setDatos] = useState({
    data: [],
    file: true,
    columnas: [["idEstudiante", "Estudiante", "IdMentor", "Mentor", "Puntaje"]],
    codeColumnas: ["idStudent", "nameStudent", "mentorId", "nameMentor", "mentorScore"]
  })
  

  function domatch() {
    var arraystudent = []
    if (students) {
      for (let index = 0; index < students.data.length; index++) {
        arraystudent.push(students.data[index][0])
      }
      const matchresponse = dispatch(matchMassive(arraystudent))
      matchresponse.then(res => {
        console.log(res.payload)
        if (res.payload) {
          setDatos(datos => {
            return {
              ...datos,
              data: res.payload,
              file: true
            }
          })
          ModalAlert("Match Ok", "Se realizo el match satisfactoriamente", "success")
        } else {
          //setDatos()
          ModalAlert("Match Error", "No se pudo realizar el match", "error")
        }
      })
      console.log(arraystudent)
      console.log(students)
    }

  }



  function setmodal(data) {
    setOpen(true)
    setDatainfo(data)
    console.log(data)
  }
  console.log(datainfo)
  return (
    <div className='grid' >
      <ModalUpdate state={open} setState={setOpen} title={"Datalle del match"}>
        <InfoMatch ptotal={datainfo.mentorScore} pedad={datainfo.porcentajeScoreAge} pinteresmayor={datainfo.porcentajeScoreIHigh} pinteresmenor={datainfo.porcentajeScoreIlow} />
      </ModalUpdate>
     
      <div className='pt-6 pb-4 px-4 font-Roboto font-bold'>
        <PageOptionsTitle text={"Realizar Match"} />
        <MatchTableOptions func={studentServices.getStudentCohort} funcMatch={domatch} />
      </div>
      <div>
        <TableMatch datos={datos} setModal={setmodal} setModalEdit={setOpenEdit} />
      </div>
    </div>
  );
};

export default PlantillaMatch;
