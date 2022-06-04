import React from 'react'
import { Icon } from '@iconify/react'

const IconMenu = ({icon,text}) => {
  return (
    <div className='flex items-center gap-2'>
    <Icon icon={icon} style={{display:'inline'}}/> {text}
    </div>  
  )
}

export default IconMenu