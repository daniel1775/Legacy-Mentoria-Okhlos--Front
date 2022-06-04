import React from 'react'
import { Icon } from '@iconify/react'

const ButtonIconText = ({ icon, text, func }) => {
  return (
    <button onClick={func} type="button" className="text-black font-Roboto bg-PrimarioColor2 hover:bg-PrimarioColor1 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 gap-2  ">
      <Icon className='text-[1.2rem]' icon={icon} style={{ display: 'inline' }} />
      <p className='text-[1.1rem]'>{text}</p>
    </button>
  )
}

export default ButtonIconText