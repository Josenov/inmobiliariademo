import { Link } from "react-router-dom"
import inmuebles from "../components/db"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";










const Cards = () => {
    return (


        <Swiper
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
                dynamicBullets: true,
            }}

            modules={[Pagination]}
            className="mySwiper m-2 shadow-md   "
        >

            <div className="flex items-center justify-center h-screen ">


                {

                    inmuebles.map((inmueble) => {

                        return (
                            <SwiperSlide key={inmueble.id} className=" h-[500px] rounded-lg bg-gray-100 md:bg-white  shadow-lg  md:flex md:justify-center md:items-center mt-3   ">


                                <SwiperSlide className="p-6  flex justify-center flex-col  h-full mt-[-10px]">
                                    <img className="rounded-lg  sm:m-h-64 md:h-96 md:w-[700px] flex justify-center items-center object-cover w-full mb-2 " src={inmueble.imagenes.interior}
                                        alt="" />
                                    <div className="flex gap-5 items-center">

                                        <h5 className="mb-2 text-lg font-bold  text-black">
                                            {inmueble.titulo}
                                        </h5>
                                        <h5 className="mb-2 text-sm font-bold leading-tight  text-black flex">
                                            5.0 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="w-4 h-4 ml-1">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>

                                        </h5>
                                    </div>
                                    <p className="mb-1 text-sm text-black">
                                        {inmueble.direccion}
                                    </p>

                                    <p className="mb-4 text-base text-neutral-600">
                                        {inmueble.inmueble}
                                    </p>
                                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800">
                                        Ambientes: {inmueble.ambientes}
                                        
                                    </h5>
                                    <Link to={`/inmuebledetalles/${inmueble.id}`}>
                                        <button className='w-20 p-2 rounded-md bg-orange-300 shadow-sm text-white'>Ver mas</button>

                                    </Link>

                                </SwiperSlide>


                            </SwiperSlide>
                        )

                    })
                }



            </div>

        </Swiper>




    )
}

export default Cards