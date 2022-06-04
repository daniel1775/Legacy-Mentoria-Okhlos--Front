import React from 'react'
import {ImgConstruccion} from '../components/atoms'
import PageOptionTitle from '../components/molecules/PageOptionsTitle'

const Sesiones = () => {
  return (
    <div className='p-4 font-Roboto font-bold'>
      <PageOptionTitle text={"Administrar Sesiones"} />
        <div className='p-40 w-50'>
      <ImgConstruccion />
      </div>  
    </div>
  );
}

export default Sesiones