import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/slices/authSlice'

const Admin = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='h-screen grid grid-cols-12 grid-rows-6'>
      <div className='row-span-6 col-span-1 lg:col-span-2  bg-slate-400'>1</div>
      <div className='row-span-6  col-span-11 lg:col-span-10   bg-red-400'>2</div>

      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount({value:5}))}
          >
            dispath
          </button>
        </div>
      </div>
    </div>
  )
}

export default Admin