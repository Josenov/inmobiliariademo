import React from 'react'
import Inmuebles from '../components/Inmuebles'
import Cards from '../components/Cards'



const Inicio = () => {
  return (
    <div  className=''>

        <div className=' w-full h-8 bg-orange-300 mt-[20px] flex items-center  justify-center font-medium text-lg'>
            <p>Disponibles</p>
        </div>

        <div className='flex justify-center items-center md:ml-[300px] md:mt-[50px]'>

            <Cards/>
          
            
            
        </div>

        



    
    </div>
  )
}

export default Inicio