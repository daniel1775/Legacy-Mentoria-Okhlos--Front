import React, { useEffect, useState } from 'react'
import { BasicButton, BasicComboForm, InputNombre, ModalAlert } from '../atoms';
import ComboBoxPreferStudent from './ComboBoxPreferStudent';
import { useDispatch } from 'react-redux';
import { getAllMentor } from '../../redux/slices/DataApiMentorSlice';
import mentorServices from '../../api/services/mentorServices';


const DataMentor = ({ setOpen }) => {
    const [empresa, setEmpresa] = useState([]);
    const [cargo, setCargo] = useState([]);
    const [estudios, setEstudios] = useState([]);
    const [multiOption, setMultiopcion] = useState([]);
    const [DataForm, setDataForm] = useState({
        id:null,
        name: "",
        email: "",
        age: null,
        hijos:null, 
        numstudents:null, 
        phone: null,
        status: 1,
        gender: "",
        idstudies:null, 
        idbussiness:null, 
        idcargo:null, 
    }); 
    const dispatch=useDispatch();

    console.log(multiOption);
    console.log(DataForm);

    function selectOption(event) {
        setDataForm({
            ...DataForm,
            gender: event.value,
        });
    }
    
    function selectOptionstudies(event) {
        setDataForm({
            ...DataForm,
            idstudies: event.label,
        });
    }
    function selectOptioncargo(event) {
        setDataForm({
            ...DataForm,
            idcargo: event.label,
        });
    }

    function selectOptionbussiness(event) {
        setDataForm({
            ...DataForm,
            idbussiness: event.label,
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
       console.log("actualizar")
        const form = [
            DataForm.name,
            DataForm.email,
            parseInt(DataForm.age),
            parseInt(DataForm.hijos),
            parseInt(DataForm.numstudents),
            parseInt(DataForm.phone),
            DataForm.status,
            DataForm.gender,
            DataForm.idstudies,
            DataForm.idbussiness,
            DataForm.idcargo,
            parseInt(multiOption[1].value),
            parseInt(multiOption[0].value),
        ];
        

        const response = mentorServices.registerMentor(form)
        response.then(res => {
            if (res.status == 200) {
                ModalAlert("Alta Ok ", "Nuevo mentor creado satisfactoriamente ", "success")
                setOpen(false)
                dispatch(getAllMentor())
            }
            else{
                ModalAlert("Error", "Ocurrio un error en el alta del mentor", "error")
            }
        })

    }

    useEffect(() => {
        const empresa = mentorServices.getBusiness();
        empresa.then((res) => {
            setEmpresa(res);
        });
    
        const cargo = mentorServices.getCargos();
        cargo.then((res) => {
            setCargo(res);
        });

        const estudios = mentorServices.getEstudies();
        estudios.then((res) => {
            setEstudios(res);
        });
    
    }, []);
    
    
    return (
        <form onSubmit={(event)=>event.preventDefault()} >
            <div className=" grid
                grid-col
                gap-3
                md:grid
                md:grid-cols-2
                h-80rem

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
                        text={"Hijos"}
                        name={"hijos"}
                        type={"number"}
                        value={DataForm.hijos}
                        placeholder={"Numero de hijos"}
                    />
                </div>
                
                <div>
                    <InputNombre
                        func={handleInputChange}
                        text={"Número de estudiantes"}
                        name={"numstudents"}
                        type={"number"}
                        value={DataForm.numstudents}
                        placeholder={"Asignar numero de estudiantes"}
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
                    <BasicComboForm
                        func={selectOptionstudies}
                        text={"Estudios"}
                        options={estudios}
                        value={{ label: DataForm.idstudies}}
                    />
                </div>
                              
                <div>
                    <BasicComboForm
                        func={selectOptionbussiness}
                        text={"Empresa"}
                        options={empresa}
                        value={{ label: DataForm.idbussiness}}
                    />
                </div>
                <div>
                    <BasicComboForm
                        func={selectOptioncargo}
                        text={"Cargo"}
                        options={cargo}
                        value={{ label: DataForm.idcargo}}
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
            </div>
            <div className="flex justify-end w-full ">
                <BasicButton func={submmit} text={"Submit"} />
            </div>

        </form>
    )
}


export default DataMentor