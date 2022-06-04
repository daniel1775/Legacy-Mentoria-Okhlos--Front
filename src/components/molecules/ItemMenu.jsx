import React from 'react'
import {IconMenu} from '../atoms'

const ItemMenu = ({ icon, text, children }) => {
  return (
    <div>
      <div className="collapse collapse-plus hover:bg-PrimarioColor2">
        <input type="checkbox" className='peer'/>
        <div className="collapse-title  text-xl font-medium peer-checked:bg-gray-50 ">
          <IconMenu icon={icon} text={text} />
        </div>
        <div className="collapse-content bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ItemMenu