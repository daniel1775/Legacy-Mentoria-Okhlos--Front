import React from 'react'
import { Icon } from '@iconify/react'

const ButtonTable = ({ icon, color, func, id }) => {
  return (
    <button
      type="button" onClick = {() => func(id)}
      className=" rounded-md  inline-flex items-center 
      hover:text-PrimarioColor1 justify-center text-gray-400  
      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
      <Icon className={"text-[1.5rem] "+color+" hover:text-PrimarioColor1"} style={{ display: 'inline'}} icon={icon} />
    </button>
  )
}

export default ButtonTable
