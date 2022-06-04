import React from 'react'
import {MenuCabeceraDesktop, MenuDesktop} from '../organisms'

const SidebarDashboard = () => {
    return (
        <div className='w-[15rem] '>
            <MenuCabeceraDesktop />
            <MenuDesktop />
        </div>
    )
}

export default SidebarDashboard