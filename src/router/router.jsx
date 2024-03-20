import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import SobreNosotros from "../pages/SobreNosotros";
import Main from "../layout/Main";
import Inmuebles from "../components/Inmuebles";

const router = createBrowserRouter([


    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Inicio/>
            },
            {
                path:'/sobrenosotros',
                element:<SobreNosotros/>
            },
            {
                path:'/inmuebles',
                element:<Inmuebles/>
            }
        ]
    }
    
])

export default router;