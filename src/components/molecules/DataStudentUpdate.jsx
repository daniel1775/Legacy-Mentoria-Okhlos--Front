import React, { useEffect, useState } from 'react'
import studentServices from '../../api/services/studentServices';
import { BasicButton, BasicComboForm, InputNombre, ModalAlert } from '../atoms';
import ComboBoxPreferStudent from './ComboBoxPreferStudent';
import { useDispatch } from 'react-redux';
import { getAllStudent } from '../../redux/slices/DataApiEstudentSlice';


const DataStudentUpdate = ({ DataForm, setDataForm, setOpen }) => {
    const [program, setprogram] = useState([]);
    const [multiOption, setMultiopcion] = useState([]);
    const dispatch=useDispatch();

    console.log(multiOption);
    console.log(DataForm);

    function selectOption(event) {
        setDataForm({
            ...DataForm,
            gender: event.value,
        });
    }

    function selectOptionProgram(event) {
        console.log(event)
        setDataForm({
            ...DataForm,
            program: event.label,
        });
    }
    const handleInputChange = (event) => {
        setDataForm({
            ...DataForm,
            [event.target.name]: event.target.value,
        });
    };
    const options = [
        { value: "femenino", label: "Femenino" },
        { value: "masculino", label: "Masculino" },
        { value: "prefieronodecirlo", label: "Prefiero no decirlo" },
    ];

    function submmit() {
        const form = [
            DataForm.name,
            DataForm.email,
            parseInt(DataForm.cohorte),
            parseInt(DataForm.age),
            parseInt(DataForm.phone),
            DataForm.status,
            DataForm.gender,
            DataForm.program == "Programate" ? 1 : 2,
            parseInt(multiOption[1].value),
            parseInt(multiOption[0].value),
        ];
        const response = studentServices.updateStudent(DataForm.id, form)
        response.then(res => {
            if (res.status == 200) {
                ModalAlert("Actualizacion Estudiante Efectuada", "Se realizo satisfactoriamente una actualizacion", "success")
                setOpen(false)
                dispatch(getAllStudent())
            }
            else{
                ModalAlert("Error al actualizar", "Ocurrio un erro al intentar actualizar un estudiante", "error")
            }
        })

    }

    useEffect(() => {
        const programa = studentServices.getProgram();
        programa.then((res) => {
            setprogram(res);
        });
    }, []);
    return (
        <form onSubmit={(event)=>event.preventDefault()} >
            <div className="
                grid
                grid-col
                gap-4
                h-80rem
                md:grid-cols-2
            ">
                <div>
                    <InputNombre
                        func={handleInputChange}
                        text={"Nombres y Apellidos"}
                        name={"name"}
                        type={"text"}
                        value={DataForm.name}
                        placeholder={"Escribe Nombres y Apellidos"}
                    />
                </div>
                <div>
                    <InputNombre
                        func={handleInputChange}
                        text={"Email"}
                        name={"email"}
                        type={"email"}
                        value={DataForm.email}
                        placeholder={"Ingresa tu Email"}
                    />
                </div>
                <div>
                    <InputNombre
                        func={handleInputChange}
                        text={"Cohorte"}
                        name={"cohorte"}
                        type={"number"}
                        value={DataForm.cohorte}
                        placeholder={"Ingresa Cohorte"}
                    />
                </div>

                <div>
                    <InputNombre
                        func={handleInputChange}
                        text={"Edad"}
                        name={"age"}
                        type={"number"}
                        value={DataForm.age}
                        placeholder={"Ingresa tu Edad"}
                    />
                </div>
                <div>
                    <InputNombre
                        func={handleInputChange}
                        text={"Teléfono"}
                        name={"phone"}
                        type={"number"}
                        value={DataForm.phone}
                        placeholder={"Ingresa tu número telefónico"}
                    />
                </div>
                <div>
                    <BasicComboForm
                        func={selectOption}
                        text={"Género"}
                        options={options}
                        value={{ label: DataForm.gender }}
                    />
                </div>
                <div>
                    <ComboBoxPreferStudent
                        setFunc={setMultiopcion}
                        state={multiOption}
                        text={"Preferencias"}
                    />
                    <p className="font-GilroyLight font-semibold ">
                        Seleccionar el tema de mayor interes, luego el de menor interes.
                    </p>
                </div>
                <div>
                    <BasicComboForm
                        func={selectOptionProgram}
                        text={"Programa"}
                        options={program}
                        value={{ label: DataForm.program }}
                    />
                </div>

            </div>
            <div className="flex justify-end w-full ">
                <BasicButton func={submmit} text={"Submit"} />
            </div>

        </form>
    )
}

export default DataStudentUpdate