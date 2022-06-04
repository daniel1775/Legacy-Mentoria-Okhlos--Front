import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMentor, selectDataMentorApi } from '../../redux/slices/DataApiMentorSlice';
import {DataMentorUpdate, DataMentor, ModalUpdate, OptionTableAdmin, PageOptionsTitle} from '../molecules';
import {BasicTable } from '../organisms';
import mentorServices from '../../api/services/mentorServices';


const TemplateManageMentor = () => {
    useEffect(() => {
        dispatch(getAllMentor());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectDataMentorApi)
    const [filter, setFilter]=useState(dataApi);
    const [open, setOpen]=useState(false);
    const [openNew, setOpenNew]=useState(false);
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

    function loadDataModal(data) {
        console.log(data)
        setDataForm({
          ...DataForm,
          id: data[0],
          name: data[1],
          email: data[2],
          age: data[3],
          phone: data[4],
          gender: data[5],
          status: data[6],
          idcargo:data[7], 
          idbussiness:data[8], 
          idstudies:data[9], 
          hijos:data[10] , 
          numstudents:data[11], 
        })
      }
    return (
            <div className='grid'>
                <div className='pt-6 pb-4 px-4 font-Roboto font-bold text-center'>
                    <PageOptionsTitle text={"Administrar Mentores"} className='text-center' />
                    <ModalUpdate  state={openNew} setState={setOpenNew} title={'Nuevo Mentor'} >
                    <DataMentor setOpen={setOpenNew}/>
                    </ModalUpdate>
                    <ModalUpdate state={open} setState={setOpen} title={'Actualizar Mentor'} >
                        <DataMentorUpdate DataForm={DataForm} setDataForm={setDataForm} setOpen={setOpen}/>
                    </ModalUpdate>
                    
                </div>
                <div className='px-2'>
                    <OptionTableAdmin setOpen={setOpenNew} func={""}  filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"mentor"} text={'Agregar Mentor'}/>
                </div>
                <br />
                <div className='overflow-scroll'>
                 <BasicTable setState={setOpen} loadDataModal={loadDataModal} datos={filter.data.length? filter:dataApi} func={mentorServices.offMentor}  /> 
                </div>
            </div>
        )
}
    
export default TemplateManageMentor