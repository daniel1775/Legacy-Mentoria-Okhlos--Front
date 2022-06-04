import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDataMentorExcel } from '../../redux/slices/loadDataMentorSlice'
import {Table} from '../organisms'
import {OptionTable} from '../molecules'
import {TitlePage} from '../atoms'


const PlantillaMentor = () => {

    const data = useSelector(selectDataMentorExcel);
    
    const [filter, setFilter]=useState(data);

  return (
    <div className='grid'>
      <div className='pt-6 pb-4 font-Roboto font-bold'>
        <TitlePage text={"Cargar Datos Mentores"} />
      </div>
      <OptionTable filter={filter.data.length? filter:data} setFilter={setFilter} load={"mentor"} />
      <br />
      <div className='overflow-scroll'>
        <Table data={filter.data.length? filter:data} />
      </div>
    </div>
  )
}

export default PlantillaMentor