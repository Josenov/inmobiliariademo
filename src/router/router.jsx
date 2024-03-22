import { createBrowserRouter} from "react-router-dom";
import Inicio from "../pages/Inicio";
import SobreNosotros from "../pages/SobreNosotros";
import Main from "../layout/Main";
import InmuebleDetalles from "../components/InmuebleDetalles";







const router = createBrowserRouter([

    
    {   
        path: '',
        element: <Main />,
        children: [
        
            
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/sobrenosotros',
                element: <SobreNosotros />
            },
            {
                path: '/inmuebledetalles/:id',
                element: <InmuebleDetalles />
            }
        ]
        
    }
    

])

export default router;