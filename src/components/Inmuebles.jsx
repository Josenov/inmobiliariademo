import { useEffect, useState } from "react"
import Cards from "./Cards"











const Inmuebles = () => {

    /* let [index, setIndex] = useState(0);

    const prevClick = () => {
        index > 0 ? setIndex(index - 1) : setIndex(2);
    }

    const nextClick = () => {
        index < 8 ? setIndex(index + 1) : setIndex(0);
    }



    useEffect(() => {
        const timeCards = setInterval(() => {
            if (index < 8) {
                setIndex(index + 4)
            } else {
                setIndex(0)
            }
        }, 4000)
        return () => {
            clearInterval(timeCards)
        }
    }, [index]) */


    return (
        <>


            <div className='flex  items-center justify-center w-full h-screen gap-4 text-black' >
                <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  rounded-l h-20 lg:mt-[50vh] m-1" >❮</button>
                
                <div className= "text-black">
                    <p>{inm[0].titulo}</p>
                    <img src={inm[0].imagenes.interior} alt="" />
                    <p>{inm[0].descripcion}</p>
                </div>
                <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4   rounded-l h-20 lg:mt-[50vh] m-1">❯</button>
            </div>
        </>
    )
}

export default Inmuebles