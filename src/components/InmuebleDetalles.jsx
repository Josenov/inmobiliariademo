import React from 'react'
import { useParams } from 'react-router-dom'
import inmuebles from "../components/db"



const InmuebleDetalles = () => {

    const { id } = useParams();

    console.log(inmuebles)

    return (


        <div className='flex flex-col items-center overflow-hidden'>

            <div>
                <img className='w-[500px] mb-2' src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />
                <div>
                   {/*  <p className='p-2'>Id nro:{id}</p> */}
                    <h2 className='font-bold text-2xl text-black ml-2'>Hermosa casa en el campo</h2>
                    <ol className='ml-5'>

                        <li>2 ambientes</li>
                        <li>Direccion: Cachirulo 456</li>
                        <li>Con Cochera si</li>



                    </ol>
                    <p className='ml-5 md:w-full mt-5'>Casa Los Gringos se encuentra equipada para 5 personas, dos plantas, living-comedor, cocina, patio, cancha, parrilla, cámaras de seguridad, wifi, Smart-tv y zona de descanso</p>
                </div>
                <div className='flex flex-wrap justify-center mt-9 gap-2'>
                    <img className='w-[500px]' src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />
                    <img className='w-[500px]' src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />
                    <img className='w-[500px]' src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />
                    <img className='w-[500px]' src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />
                </div>

            </div>





        </div>
    )
}

export default InmuebleDetalles