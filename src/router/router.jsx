import { createBrowserRouter} from "react-router-dom";
import Inicio from "../pages/Inicio";
import SobreNosotros from "../pages/SobreNosotros";
import Main from "../layout/Main";







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
            }
        ]
        
    }
    

])

export default router;