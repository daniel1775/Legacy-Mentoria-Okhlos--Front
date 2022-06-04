import React from 'react'

const InfoMatch = ({ptotal, pinteresmayor, pinteresmenor, pedad}) => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='text-center font-bold'>
            <h1>Informacion Match</h1>
        </div>

        <div className='grid grid-col md:grid-cols-2 justify-center items-center gap-2 '>
            <div className='border-solid border-2 flex flex-col  w-full h-[10rem] items-center justify-center gap-2'>
                <p className='font-bold'>Porcentaje Total:</p>
                <p>{ptotal}</p>
                <progress class="progress progress-warning w-56" value={ptotal} max="100">{ptotal}%</progress>
            </div>

            <div className='border-solid border-2 flex flex-col  w-full h-[10rem] items-center justify-center gap-2'>
                <p className='font-bold'>Porcentaje Interés Menor:</p>
                <p>{pinteresmayor}%</p>
                <progress class="progress progress-warning w-56" value={pinteresmayor} max="100">{pinteresmayor}%</progress>
            </div>

            <div className='border-solid border-2 flex flex-col w-full h-[10rem] items-center justify-center gap-2'>
                <p className='font-bold'>Porcentaje Interés Mayor:</p>
                <p>{pinteresmenor}%</p>
                <progress class="progress progress-warning w-56" value={pinteresmenor} max="100">{pinteresmenor}%</progress>
            </div>

            <div className='border-solid border-2 flex flex-col w-full h-[10rem] items-center justify-center gap-2'>
                <p className='font-bold'>Porcentaje Edad:</p>
                <p>{pedad}%</p>
                <progress class="progress progress-warning w-56" value= {pedad} max="100">{pedad}%</progress>
            </div>
         
         
          
        </div>
      {/*   <table className='table-zebra table-compact w-full'>
            <thead>
                <tr className='bg-PrimarioColor2 text-black font-extrabold'>
                    <th>Porcentaje Total</th>
                    <th>Porcentaje Interés Menor</th>
                    <th>Porcentaje Interés Mayor</th>
                    <th>Porcentaje Edad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-center'>
                    <td>
                    {ptotal}%
                    </td>
                    <td>
                    {pinteresmayor}%
                    </td>
                    <td>
                    {pinteresmenor}%
                    </td>
                    <td>
                    {pedad}%
                    </td>
                </tr>
            </tbody>
        </table> */}
    </div>
  )
}

export default InfoMatch