import React, { useState } from 'react'
import { BasicComboBox, ButtonIconText, ComboStudentMatch } from '../atoms'
import { selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice'
import { useSelector } from 'react-redux'
import matchServices from '../../api/services/matchServices'

const FormMatch = ({func,data}) => {
  //const dataestudent = useSelector(selectDataEstudentApi)
const [valuestudent,setvaluestudent] = useState("")

  function selectstudent(event) {
    setvaluestudent(event.value)
}

function domatch() {
    const response = matchServices.matchIndividual(valuestudent)
console.log(valuestudent)
response.then(res => {
    console.log(res)
})
}

  return (
    <div>
        <BasicComboBox load={"student"} func={func} data={data} />
        <ComboStudentMatch data={data} func={selectstudent} />
        <ButtonIconText icon={"material-symbols:group-add-rounded"} func={domatch} text={"Realizar Match"} />
    </div>
  )
}

export default FormMatch