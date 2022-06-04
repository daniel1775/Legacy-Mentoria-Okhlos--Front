import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatchByCohort, selectMatchManage } from '../../redux/slices/DataApiMatchSlice';
import {DataMatch, ModalUpdate, OptionTableAdmin, PageOptionsTitle, OptionTableMatch} from '../molecules';
import {BasicTableMatch } from '../organisms';
import matchServices from '../../api/services/matchServices';

const TemplateManageMatch = () => {
    useEffect(() => {
        dispatch(getAllMatchByCohort());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectMatchManage)
    const [filter, setFilter]=useState(dataApi);
    const [open, setOpen]=useState(false);
    const [DataForm, setDataForm] = useState({
        idMatch:"",
        nameStudent:"",
        idStudent: 0,
        nameMentor: "",
        mentorScore: 0,
      });
      function loadDataModal(data) {
        console.log(data)
        setDataForm({
          ...DataForm,
          idMatch: data[0],
          nameStudent: data[1],
          idStudent: data[2],
          nameMentor: data[3],
          mentorScore: data[4],
        })
      }
      console.log(DataForm)
    return (
            <div className='grid'>
                <div className='pt-6 pb-4 px-4 font-Roboto font-bold text-center'>
                    <PageOptionsTitle text={"Administrar Match"} className='text-center' />
                  
                    <ModalUpdate state={open} setState={setOpen} title={"Editar Match estudiante"} >
                      <DataMatch datos={DataForm}/>
                    </ModalUpdate>
                    
                </div>
                <div className='px-2'>
                    <OptionTableMatch setOpen={setOpen}  filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"match"} />
                </div>
                <br />
                <div className='overflow-scroll'>
                    <BasicTableMatch setState={setOpen} loadDataModal={loadDataModal} datos={filter.data.length? filter:dataApi} func={matchServices.deletOneMatch}/> 
                </div>
            </div>
        )
}
    
export default TemplateManageMatch