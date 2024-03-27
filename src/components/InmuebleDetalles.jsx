import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import inmuebles from "../components/db"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";




const InmuebleDetalles = () => {

    const { id } = useParams();

    console.log(inmuebles)

   const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <>

            <div className='flex flex-col justify-center items-center md:mb-10'>
                <button
                    onClick={handleGoBack}
                    className="md:mr-[1100px] mb-4 px-4 py-2 cursor-pointer mt-[1em] font-bold text-[#444444] rounded-md bg-slate-200  focus:outline-none"
                >
                    Volver Atrás
                </button>
                <img className='w-[500px] mb-2' src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />
                <div className=''>
                    {/*  <p className='p-2'>Id nro:{id}</p> */}
                    <h2 className='font-bold text-2xl text-black ml-2 text-center'>Detalle Casa Disponible</h2>
                    <ol className='p-2 ml-5'>

                        <li>5 ambientes</li>
                        <li>Direccion: Cachirulo 456</li>
                        <li>Con Cochera: si</li>



                    </ol>
                    <p className='p-4 md:w-full mt-5'>Casa La Estancia se encuentra equipada para 5 personas, dos plantas, living-comedor, cocina, patio, cancha, parrilla, cámaras de seguridad, wifi, Smart-tv y zona de descanso</p>
                </div>

            </div>


            <div className='bg-white-950 h-full mt-20 flex  items-center justify-center md:w-[900px] md:ml-[200px] '>




                <Swiper
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"

                >

                    <div className='flex items-center justify-center'>
                        <SwiperSlide>
                            <img className="" src="https://hips.hearstapps.com/hmg-prod/images/casa-campo-moderna-portland-salon-chimenea-soda-butacas-cuero-mesa-cuadrada-day-bed-vigas-vistas-tejado-dos-aguas-1569489776.jpg" alt="" />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="h-60 md:h-[600px]" src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />

                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="" src="https://www.revistacasaviva.es/wp-content/uploads/2018/12/diseno-unifamiliar-en-el-campo-exteriores.jpg" alt="" />

                        </SwiperSlide>

                    </div>



                </Swiper>



            </div>

        </>
    )
}

export default InmuebleDetalles