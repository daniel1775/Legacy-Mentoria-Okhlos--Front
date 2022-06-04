import React from 'react'
import { Icon } from '@iconify/react'

const BasicButtonIcon = ({icon, color, w, }) => {
    return (
        <button>
            <Icon className='text-[2rem]' icon={icon}  style={{display:'inline', color:color, width:w }} />
        </button>
    )
}

export default BasicButtonIcon