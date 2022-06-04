import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import studentServices from '../../api/services/studentServices';



const animatedComponents = makeAnimated();

const MultiComboBox = ({text, setFunc, state}) => {

    const options = [
        { value: 'react', label: 'React' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'ia', label: 'IA'},
        { value: 'python', label: 'Python'},
        { value: 'frontend', label: 'Frontend'},
        { value: 'backend', label: 'Backend'}
    ]
    const [interes, setInteres] = useState([])

    useEffect(() => {
        const intereses =  studentServices.getintereses() 
            intereses.then(respuesta => {
                setInteres(respuesta)
        })

    }, 
    [])
    return (
        <div>
            <span className=" font-Roboto after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
               {text}
            </span>
            <Select
                required
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={interes}
                isOptionDisabled={() => state.length>= 2}
                value={state}
                onChange={(e) => setFunc(e)}
            />
        </div>

    )
}

export default MultiComboBox




