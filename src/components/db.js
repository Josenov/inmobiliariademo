

const inmuebles =
    [
        {
            id: "1",
            titulo: "Hermosa casa en el campo",
            ambientes: 4,
            direccion: "Calle Principal 123",
            imagenes: {
                interior:
                    [
                        "https://th.bing.com/th/id/R.4bb7f517cb11190b478cfac1a45639d0?rik=bbcAyXoym7Rk0g&pid=ImgRaw&r=0",
                        "imagen7.jpg",
                        "imagen8.jpg",
                        "imagen9.jpg",
                        "imagen10.jpg"
                    ]
            },
            con_cochera: true,
            inmueble: "Encantadora casa de estilo rústico con amplios espacios y jardín."
        },
        {
            id: "2",
            titulo: "Departamento moderno en la ciudad",
            ambientes: 3,
            direccion: "Avenida Central 456",
            imagenes: {
                interior:
                    [
                        "https://th.bing.com/th/id/OIP.1N5k9kk7hWtf1P5m1OvcWAHaET?pid=ImgDet&w=474&h=275&rs=1",
                        "imagen7.jpg",
                        "imagen8.jpg",
                        "imagen9.jpg",
                        "imagen10.jpg"
                    ]
            },
            con_cochera: false,
            inmueble: "Moderno departamento en el corazón de la ciudad, perfecto para parejas jóvenes."
        },
        {
            id: "3",
            titulo: "Casa de playa con vista al mar",
            ambientes: 5,
            direccion: "Calle de la Playa 789",
            imagenes: {
                interior:
                    [
                        "https://media.revistaad.es/photos/6177e5f8289a522423bddaaa/16:9/w_2560%2Cc_limit/IMG_3988%2520R.jpg",
                        "imagen7.jpg",
                        "imagen8.jpg",
                        "imagen9.jpg",
                        "imagen10.jpg"
                    ]
            },
            con_cochera: true,
            inmueble: "Acogedora casa de playa con impresionantes vistas al océano, ideal para vacaciones familiares."
        },
        {
            id: "4",
            titulo: "Penthouse de lujo en el centro",
            ambientes: 6,
            direccion: "Plaza Mayor 101",
            imagenes: {
                interior:
                    [
                        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/304738515.jpg?k=e9920790ed2889f167da1be8e39233adb331cba7014f508cd34c67a9ef4fa09b&o=&hp=1",
                        "imagen7.jpg",
                        "imagen8.jpg",
                        "imagen9.jpg",
                        "imagen10.jpg"
                    ]

            },
            con_cochera: true,
            inmueble: "Elegante penthouse con acabados de alta gama y espectacular vista panorámica."
        }
    ]

    export default inmuebles

    
console.log(inmuebles)