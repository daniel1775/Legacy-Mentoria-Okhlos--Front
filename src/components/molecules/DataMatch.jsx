import React, { useEffect, useState } from 'react'
import mentorServices from '../../api/services/mentorServices';
import matchServices from '../../api/services/matchServices';
import { BasicButton, BasicComboForm, ModalAlert } from '../atoms';

const DataMatch = ({ datos }) => {
    const [mentor, setMentor] = useState()

    const [data, setData] = useState({
        idMatch: datos.idMatch,
        idmentor: "",
        idEstudiante: datos.idStudent
    })

    function selectOptionMentor(event) {
        setData({
            ...data,
            idmentor: event.value,
        });
    }

    function submmit() {
        const response = matchServices.UpdateMatch(data)
        response.then(res => {
            console.log(res)
            if (res.message == "¡Match actualizado correctamente!") {
                ModalAlert("Actualización Ok", "Se actualizo correctamente el match del estudiante", "success")
            } else {
                ModalAlert("Error al actualizar", "No se pudo actualizar el match del estudiante", "error")
            }
        })
    }

    useEffect(() => {
        const mentorAvalibre = mentorServices.getMentorAvalible();
        mentorAvalibre.then((res) => {
            console.log(res)
            setMentor(res)
        });



    }, []);

    return (
        <form onSubmit={(event) => event.preventDefault()} className='p-1 sm:p-10 '>
            <div className='flex flex-col h-full'>
                <div className="grid grid-cols w-full gap-5 sm:grid-col-2 ">

                    <div className='text-center'>
                        <h1 className='font-bold'>Nombre estudiante:</h1>
                        <h1>
                            {datos.nameStudent}
                        </h1>
                    </div>

                    <div>
                        <BasicComboForm
                            func={selectOptionMentor}
                            text={"Seleccione mentor"}
                            options={mentor}
                            value={""}
                        />
                    </div>


                </div>
                <div className="flex justify-end w-full pt-[8rem]">
                    <BasicButton func={submmit} text={"Submit"} />
                </div>

            </div>
        </form>
    )
}

export default DataMatch