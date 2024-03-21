import React from 'react'
import Cards from '../components/Cards'

const Inicio = () => {
  return (
    <div id='/'  className=''>

        <div className=' w-full h-8 bg-orange-300 mt-[70px] flex items-center z-10 justify-center font-medium text-lg'>
            <p>Disponibles</p>
        </div>

        <div className=' flex flex-wrap items-center justify-center gap-1 '>
            <Cards/>
            
            
        </div>

        



    
    </div>
  )
}

export default Inicio