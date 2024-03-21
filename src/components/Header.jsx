import { useState } from "react"
import { AiOutlineMenu, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { Link } from "react-router-dom";





const Header = () => {
    const [burguerMenu, setBurguerMenu] = useState(false);

    const handleBurguerMenu = () => {
        setBurguerMenu(!burguerMenu)
        console.log("state changed")
    }




    return (



        <div className="w-full md:flex md:justify-between">





            <div className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between" >
                <Link>
                    <img className='w-20 h-20 ml-3 flex items-center rounded-full' src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMzMtYS0wMi1hXzEta3NxdmM3NjUuanBn.jpg" alt="" />
                </Link>
                <AiOutlineMenu onClick={handleBurguerMenu} className=" fixed md:hidden right-5 size-6 z-[99]  text-black" />
                <div className='md:flex  gap-4 hidden p-4 font-medium '>
                    <Link to='/'>Inicio</Link>
                    <Link to='/sobrenosotros'>Sobre Nosotros</Link>

                </div>



            </div>










            {

                burguerMenu ?



                    <div className="fixed h-screen  w-full translate-y-[-80px] md:hidden    flex items-center justify-center bg-black/50 backdrop-blur-md  text-white">

                        <div className="flex flex-col gap-10 ">
                            <Link to="/" onClick={handleBurguerMenu} className="flex items-center justify-center">
                                <AiOutlineHome size={30} className="" />
                                <span className="m-2">Inicio</span>
                            </Link>
                            <Link to="/sobrenosotros" onClick={handleBurguerMenu} className="flex items-center justify-center">
                                <AiOutlineUser size={30} className="" />
                                <span className="m-2">Sobre Nosotros</span>
                            </Link>

                        </div>
                    </div>





                    : null


            }

        </div>



    )


}

export default Header