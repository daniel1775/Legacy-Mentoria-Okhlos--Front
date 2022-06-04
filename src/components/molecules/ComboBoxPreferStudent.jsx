import React from 'react'
import {MultiComboBox} from '../atoms'

const ComboBoxPreferStudent = ({text, setFunc, state }) => {
    return (
        <div >
            <MultiComboBox text={text} setFunc={setFunc} state={state}  />    
        </div>
    )
}

export default ComboBoxPreferStudent