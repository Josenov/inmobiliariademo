import React from 'react'
import Cards from '../components/Cards'

const Inicio = () => {
  return (
    <div className=''>

        <div className='h-16 bg-orange-300 mt-10 flex items-center justify-center font-medium text-xl'>
            <p>Disponibles</p>
        </div>

        <div className=' flex flex-wrap items-center justify-center gap-1 mt-2'>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            
        </div>

        



    
    </div>
  )
}

export default Inicio