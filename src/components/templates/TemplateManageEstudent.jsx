import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudent, selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice';
import {OptionTableAdmin, PageOptionsTitle, ModalUpdate, DataStudentUpdate, DataStudent} from '../molecules';
import {BasicTable } from '../organisms';
import studentServices from '../../api/services/studentServices';

const templateManageEstudent = () => {
    useEffect(() => {
        dispatch(getAllStudent());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectDataEstudentApi)
    const [filter, setFilter]=useState(dataApi);
    const [open, setOpen]=useState(false);
    const [openNew, setOpenNew]=useState(false);
    const [DataForm, setDataForm] = useState({
        id:null,
        name: "",
        email: "",
        cohorte: null,
        age: null,
        phone: null,
        status: 1,
        gender: "",
        program: "",
        intmenor: null,
        intmayor: null,
    });

    function loadDataModal(data) {
        console.log(data)
        setDataForm({
            ...DataForm,
            id: data[0],
            name: data[1],
            email: data[2],
            cohorte: data[3],
            age: data[4],
            phone: data[5],
            status: data[6],
            gender: data[7],
            program: data[8],
            intmenor: null,
            intmayor: null,
          })
      }
    
    return (
        <div className='grid'>
            <div className='pt-6 pb-4 px-4 font-Roboto font-bold text-center'>
                <PageOptionsTitle text={"Administrar Estudiantes"} className='text-center' />
                <ModalUpdate state={openNew} setState={setOpenNew} title={'Nuevo Estudiante'}>
                    <DataStudent setOpen={setOpenNew} />
                </ModalUpdate>
                <ModalUpdate state={open} setState={setOpen} title={'Actualizar Estudiante'}>
                    <DataStudentUpdate DataForm={DataForm} setDataForm={setDataForm} setOpen={setOpen}/>
                </ModalUpdate>
            </div>
            <div className='px-2'>
                <OptionTableAdmin setOpen={setOpenNew} func={studentServices.getStudentCohort} filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"student"}  text={'Agregar Estudiante'}/>
            </div>
            <br />
            <div className='overflow-scroll'>
                 <BasicTable setState={setOpen} loadDataModal={loadDataModal} datos={filter.data.length? filter:dataApi} func={studentServices.offStudent}  /> 
            </div>
        </div>
    )
}

export default templateManageEstudent