import React from 'react'

const SobreNosotros = () => {
  return (
    <>
      <div  className=' flex flex-col items-center justify-center  w-full p-8 '>
        <h2 className='text-2xl font-semibold mb-6'>Sobre Nosotros</h2>
        <p className='md:w-[600px]'>¡Bienvenido! Estamos ubicados en Cordoba Capital, especializados en ofrecerte los mejores alquileres temporarios para tus vacaciones. Entendemos la importancia de encontrar el lugar perfecto para disfrutar de tu tiempo en la costa y te lo damos.

          Nuestra misión es proporcionarte opciones acogedoras y convenientes que se adapten a tus necesidades y estilo de vida. Ya sea que estés buscando un cómodo departamento frente al mar, un chalet en el bosque o una casa con encanto en el corazón de la ciudad, estamos aquí para ayudarte a encontrar la propiedad perfecta para que tus vacaciones sean inolvidables.</p>
      </div>
      <div className='flex flex-wrap justify-center mt-9 gap-2'>
                <img className='w-[500px]' src="https://images.adsttc.com/media/images/5924/6335/e58e/ce27/a400/06c9/large_jpg/8.jpg?1495556894" alt="" />
                <img className='w-[500px]' src="https://www.jajenningsinc.com/wp-content/uploads/Office-4.jpg" alt="" />
                <img className='w-[500px]' src="https://th.bing.com/th/id/OIP.irhgxJQmnzeICoROLqti7gHaEO?rs=1&pid=ImgDetMain" alt="" />
                <img className='w-[500px]' src="https://www.bod.es/wp-content/gallery/monteburgos-m4-1b/2230_02_MVC_ImagenNocturna_01_v3_sin-logo.jpg" alt="" />
      </div>

    </>

  )
}

export default SobreNosotros