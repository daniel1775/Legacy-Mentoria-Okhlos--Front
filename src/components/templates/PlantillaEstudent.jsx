import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDataEstudentExcel } from '../../redux/slices/loadDataEstudentSlice'
import {Table} from '../organisms'
import {OptionTable}  from '../molecules'
import {TitlePage} from '../atoms'


const PlantillaEstudent = () => {

    const data = useSelector(selectDataEstudentExcel);
    
    const [filter, setFilter]=useState(data);

  return (
    <div className='grid'>
      <div className='pt-6 pb-4 font-Roboto font-bold'>
        <TitlePage text={"Cargar Datos Estudiantes"} />
      </div>
      <OptionTable filter={filter.data.length? filter:data} setFilter={setFilter} load={"student"} />
      <br />
      <div className='overflow-scroll'>
        <Table data={filter.data.length? filter:data} />
      </div>
    </div>
  )
}

export default PlantillaEstudent