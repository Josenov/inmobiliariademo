import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
                <img className='w-[600px] rounded-md mb-2' src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />
                <div className='flex flex-col gap-4'>
                    {/*  <p className='p-2'>Id nro:{id}</p> */}
                    <h2 className='font-bold text-2xl text-black ml-2 text-center'>Detalle Casa Disponible</h2>
                    <ol className='p-2 ml-5 flex flex-col gap-2'>

                        <li className='flex items-center gap-2'>
                            <svg fill="none" viewBox="0 0 15 15" height="24px" width="24px">
                                <path
                                    fill="currentColor"
                                    d="M.5 5.5l-.29-.407-.21.15V5.5h.5zm7-5l.29-.407a.5.5 0 00-.58 0L7.5.5zm7 5h.5v-.257l-.21-.15-.29.407zm-12 3V8H2v.5h.5zm4 0H7V8h-.5v.5zM1 15V5.5H0V15h1zM.79 5.907l7-5-.58-.814-7 5 .58.814zm6.42-5l7 5 .58-.814-7-5-.58.814zM14 5.5V15h1V5.5h-1zM3 15V8.5H2V15h1zm-.5-6h4V8h-4v1zM6 8.5V15h1V8.5H6zM5 12h1.5v-1H5v1zm6-4v4h1V8h-1zm2-6v2.5h1V2h-1z"
                                />
                            </svg>5 ambientes</li>
                        <li className='flex items-center gap-1'>
                            <svg
                                viewBox="0 0 21 21"
                                fill="currentColor"
                                height="24px"
                                width="24px"

                            >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="translate(4 2)"
                                >
                                    <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
                                    <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
                                </g>
                            </svg>Direccion: Calle 456</li>
                        <li className='flex items-center gap-2'>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="24px"
                                width="24px"
                                
                            >
                                <path d="M4 9a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0zM6 8a1 1 0 000 2h4a1 1 0 100-2H6zM4.862 4.276L3.906 6.19a.51.51 0 00.497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 00.497-.731l-.956-1.913A.5.5 0 0010.691 4H5.309a.5.5 0 00-.447.276z" />
                                <path
                                    fillRule="evenodd"
                                    d="M2.52 3.515A2.5 2.5 0 014.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 01.049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 00.381-.404l.792-1.848zM4.82 3a1.5 1.5 0 00-1.379.91l-.792 1.847a1.8 1.8 0 01-.853.904.807.807 0 00-.43.564L1.03 8.904a1.5 1.5 0 00-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0015 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 00-.43-.563 1.807 1.807 0 01-.853-.904l-.792-1.848A1.5 1.5 0 0011.18 3H4.82z"
                                />
                            </svg>Con Cochera: si</li>



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
                    className="mySwiper rounded-md"

                >

                    <div className='flex items-center justify-center'>
                        <SwiperSlide>
                            <img className="" src="https://hips.hearstapps.com/hmg-prod/images/casa-campo-moderna-portland-salon-chimenea-soda-butacas-cuero-mesa-cuadrada-day-bed-vigas-vistas-tejado-dos-aguas-1569489776.jpg" alt="" />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="h-[250px] md:h-[600px]" src="https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0" alt="" />

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