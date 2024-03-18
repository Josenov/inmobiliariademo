import { useState } from "react"
import { AiOutlineMenu, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'


const Header = () => {
    const [burguerMenu, setBurguerMenu] = useState(false);

    const handleBurguerMenu = () => {
        setBurguerMenu(!burguerMenu)
        console.log("state changed")
    }




    return (
        <div className="h-full">
            <div className='md:flex  md:items-center  md:justify-between h-16  bg-cyan-300'>
                <AiOutlineMenu onClick={handleBurguerMenu} className="fixed top-4 right-4 z-[100] md:hidden size-8 text-black" />
                <img className='w-12 h-12 ml-3 flex items-center' src="assets/Inmobiliaria.png" alt="" />
                {/* <div className='flex  gap-4'>
            <a href="">Inicio</a>
            <a href="">Sobre Nosotros</a>
        </div> */}

                {

                    burguerMenu ?



                        <div className={`transform ${burguerMenu ? "translate-x-0 " : "translate-x-full "
                            } fixed mt-4 flex items-center justify-center bg-black/50 w-full h-screen backdrop-blur-md  text-white  overflow-y-auto  `}>

                            <div className="flex  flex-col gap-10 ">
                                <a onClick={handleBurguerMenu} href="#inicio" className="flex items-center justify-center">
                                    <AiOutlineHome size={30} className="" />
                                    <span className="m-2">Inicio</span>
                                </a>
                                <a onClick={handleBurguerMenu} href="#sobrenosotros" className="flex items-center justify-center">
                                    <AiOutlineUser size={30} className="" />
                                    <span className="m-2">Sobre Nosotros</span>
                                </a>

                            </div>
                        </div>





                        : null


                }

            </div>

        </div>

    )
}

export default Header