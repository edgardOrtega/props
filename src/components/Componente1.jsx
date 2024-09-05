import {useState} from 'react';
import Componente2 from './Componente2';


const Componente1 =() => {
    const [cuenta, setCuenta] = useState(10);

    return(
        <div>
            {cuenta}
            <Componente2 cuenta={cuenta} setCuenta={setCuenta} />
        </div>
    )
}

export default Componente1;