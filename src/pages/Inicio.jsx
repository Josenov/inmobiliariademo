import React from 'react'
import Inmuebles from '../components/Inmuebles'
import Cards from '../components/Cards'



const Inicio = () => {
  return (
    <div  className=''>

        <div className=' w-full h-8 bg-orange-300 mt-[50px] flex items-center  justify-center font-medium text-lg'>
            <p>Disponibles</p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-1 '>
            <Inmuebles/>
            
            
        </div>

        



    
    </div>
  )
}

export default Inicio