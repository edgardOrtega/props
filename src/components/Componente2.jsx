import {useState} from 'react'



const Componente2 = ({cuenta,setCuenta}) =>{
    return(
        <div>

            <button onClick={() => setCuenta(cuenta+1)} >AUMENTA</button>
        </div>
    )
}

export default Componente2;