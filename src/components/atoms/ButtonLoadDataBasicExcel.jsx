import React, { useState } from 'react'
import { utils, read, writeFile } from "xlsx";
import { useDispatch } from 'react-redux';
import { setDataEstudent } from '../../redux/slices/loadDataEstudentSlice'
import { Icon } from '@iconify/react';
import { setDataMentor } from '../../redux/slices/loadDataMentorSlice'
import ModalAlert from './ModalAlert';

const ButtonLoadDataExcel = ({ load }) => {

    const dispatch = useDispatch();
    const payload = {
        data: [],
        columnas: [],
        codeColumnas: [],
        name: '',
        file: false
    }

    function handleFile(event) {


        const target = event.target
        const name = target.name

        if (name === 'file') {
            let reader = new FileReader()
            reader.readAsArrayBuffer(target.files[0])
            reader.onloadend = (e) => {

                const dataBinary = new Uint8Array(e.target.result);
                const workbook = read(dataBinary, { type: 'array' });
                const wsname = workbook.SheetNames[0];
                const ws = workbook.Sheets[wsname];

                const allData = utils.sheet_to_json(ws, { header: 1 });
                const columnas = allData.slice(0, 1)
                const data = allData.slice(1)
                const codeColumnas = make_cols(ws["!ref"])


                //Configuracion del payload para en enviar al redux
                payload.data = data;
                payload.codeColumnas = codeColumnas;
                payload.columnas = columnas;
                payload.file = true;
                payload.name = name

                if (load == "student") {
                    dispatch(setDataEstudent(payload))
                }
                else {

                    dispatch(setDataMentor(payload))
                }


            }
        }
    }

    function make_cols(refstr) {
        let o = [],
            C = utils.decode_range(refstr).e.c + 1;
        for (var i = 0; i < C; ++i) o[i] = { name: utils.encode_col(i), key: i };
        return o;
    };

    return (

        <label htmlFor="dropzone-file" className="text-black font-Roboto bg-PrimarioColor2 hover:bg-PrimarioColor1 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 gap-2  ">
            <Icon className='text-[1.2rem]' icon="akar-icons:cloud-upload" style={{ display: 'inline' }} />
            <p className='text-[1.1rem]'>Cargar Datos</p>
            <input id="dropzone-file" className="hidden"
                required
                type="file"
                name="file"
                onChange={handleFile}
            />
        </label>

    )
}

export default ButtonLoadDataExcel