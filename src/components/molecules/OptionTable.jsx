import React from 'react'
import { useSelector, useDispatch  } from 'react-redux';
import { resetDataEstudent, selectDataEstudentExcel } from '../../redux/slices/loadDataEstudentSlice';
import { resetDataMentor, selectDataMentorExcel } from '../../redux/slices/loadDataMentorSlice';
import { utils, writeFile } from 'xlsx';
import studentServices from '../../api/services/studentServices'
import mentorServices from '../../api/services/mentorServices';
import { ModalAlert, Search, ButtonIconText, ButtonLoadDataBasicExcel } from '../atoms';


const OptionTable = ({ filter, setFilter, load }) => {
    var data = "";

    if (load == "student") {
        data = useSelector(selectDataEstudentExcel);
    } else {
        data = useSelector(selectDataMentorExcel);
    }

const dispacth = useDispatch()

    function exportFile() {
        if (filter.file) {
            /* convert state to workbook */
            const file = data.columnas.concat(filter.data)
            const ws = utils.aoa_to_sheet(file);
            const wb = utils.book_new();
            utils.book_append_sheet(wb, ws, "SheetJS");
            /* generate XLSX file and send to client */
            const namefile = filter.name + ".xlsx";
            writeFile(wb, namefile);
        } else {
            ModalAlert("Error al descargar archivo", "No se encontraron datos para descargar", "error")
        }

    }

    function insertData() {
        if (load == "student") {
            studentServices.registerAll(data)
            dispacth(resetDataEstudent())
            ModalAlert("Ok", "Carga enviada a DB", "success");
        } else {
            mentorServices.registerAll(data)
            dispacth(resetDataMentor())
            ModalAlert("Ok","Carga enviada a DB", "success");
        }
     
    }
    
    return (
        <div className='flex
        flex-col
        gap-4
        justify-center 
        items-center
        w-full
        md:flex-row
        md:justify-between
        '>
            <div>
                <Search datos={data} setFilter={setFilter} />
            </div>
            <div className='
                flex
                flex-col
                gap-4
                justify-center 
                items-center
                w-full
                sm:flex-row
                sm:justify-end
            '>
                <ButtonLoadDataBasicExcel load={load} />
                <ButtonIconText text={"Guardar Datos"} icon={"fluent:save-16-regular"} func={insertData}  />
                {/* <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} func={exportFile} />  */}
                            </div>

        </div>
    )
}

export default OptionTable