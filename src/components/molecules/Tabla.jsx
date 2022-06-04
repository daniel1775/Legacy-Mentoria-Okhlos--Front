import React, { useState } from 'react'
import { utils, read, writeFile } from "xlsx";

const Tabla = () => {
    const [dataExcel, setDataExcel] = useState(
        {
            data: [],
            columnas:[],
            codeColumnas:[],
            file: false
        }
    );

    function handleFile (event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        

        if (name === 'file') {
          let reader = new FileReader()
          reader.readAsArrayBuffer(target.files[0])
          reader.onloadend = (e) => {

            const dataBinary = new Uint8Array(e.target.result);
            const workbook = read(dataBinary, {type: 'array'});
            const wsname = workbook.SheetNames[0];
            const ws = workbook.Sheets[wsname];
            
            const allData = utils.sheet_to_json(ws, { header: 1 });
            const columnas= allData.slice(0,1)
            const data=allData.slice(1)
            const codeColumnas=make_cols(ws["!ref"])
            setDataExcel({
                ...dataExcel,
                data:data,
                columnas: columnas,
                codeColumnas: codeColumnas,
                file: true
            })
          }
        }
      } 

      function imprimir(){
        }

      function make_cols(refstr) {
        let o = [],
          C = utils.decode_range(refstr).e.c + 1;
        for (var i = 0; i < C; ++i) o[i] = { name: utils.encode_col(i), key: i };
        return o;
      };


    return (
        <div>
            <input
                required
                type="file"
                name="file"
                id="file"
                onChange={handleFile}
                placeholder="Archivo de excel"
            />
            <div>
                aqui iria la tabla
                {dataExcel.data.map(item=>{
                    return <p>
                        {item}
                    </p>
                })}
            </div>
            <button onClick={imprimir}>imprimir estado</button>
            
        </div>

    )
}

export default Tabla




