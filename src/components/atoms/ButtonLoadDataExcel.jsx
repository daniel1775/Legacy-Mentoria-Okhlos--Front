import React, { useState } from 'react'
import { utils, read, writeFile } from "xlsx";
import { useDispatch } from 'react-redux';
import { setDataEstudent } from '../../redux/slices/loadDataEstudentSlice'
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

    function imprimir() {
    }

    function make_cols(refstr) {
        let o = [],
            C = utils.decode_range(refstr).e.c + 1;
        for (var i = 0; i < C; ++i) o[i] = { name: utils.encode_col(i), key: i };
        return o;
    };

    return (

        <div className="flex justify-center items-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click para cargar archivo</span> o arrastra y suelta</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Solo subir archivos .Xlsx (MAX. 1 pagina)</p>
                </div>
                <input id="dropzone-file" className="hidden"
                    required
                    type="file"
                    name="file"
                    onChange={handleFile}
                />
            </label>
        </div>

    )
}

export default ButtonLoadDataExcel