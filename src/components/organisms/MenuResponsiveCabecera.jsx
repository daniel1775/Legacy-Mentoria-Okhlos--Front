import React from 'react'
import {IconResponsiveCabecera, PhotoProfile} from '../atoms'

const MenuResponsiveCabecera = () => {
  return (
    <div className='grid bg-PrimarioColor2 place-items-center gap-8 pt-2 pb-2 w-20'  >
    <IconResponsiveCabecera  w={"40px"}/>
    <PhotoProfile w={"40x"} />
    </div>  
  )
}

export default MenuResponsiveCabecera