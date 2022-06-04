import React from 'react'
import { Icon } from '@iconify/react'
import { ButtonTable } from '../atoms'

const TableMatch = ({ datos, setModal }) => {
console.log(datos)
  return (
    <div className="font-GilroyLight h-[60vh] ">
      <table className="table-zebra table-compact w-full text-center">
        <thead className=" font-Roboto">
          <tr className="w-full">
            {datos.file ? (
              datos.columnas[0].map((c, index) => (
                <th
                  className="bg-PrimarioColor2 text-black font-extrabold"
                  key={index}
                >
                  {c}
                </th>
              ))
            ) : (
              <th>
                <div className="flex">
                  <Icon
                    className=" text-[4rem]"
                    icon={"eos-icons:bubble-loading"}
                  />
                  Loading Data
                </div>
              </th>
            )}

            {datos.file ? (
              <th className="bg-PrimarioColor2 text-black font-extrabold">
                acciones
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {datos.file ? (
            datos.data.map((r, i) => (
              <tr className="hover" key={i}>
                {datos.codeColumnas.map((index) => (
                  <td key={index}>{r[index]}</td>
                ))}
                <td className="gap-2 h-full">
                  <div className='h-full'>
                  <ButtonTable 
                    id={r}
                    func={setModal}
                    icon={"el:eye-open"}
                    color={r[6] == 1 ? "text-PrimarioColor2" : "text-black-700"}
                  />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableMatch