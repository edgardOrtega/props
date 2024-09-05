# **Props de Componente1 al Componente2**

## *Props*

Componente1 deberia llegarle props desde Componente1
1. se debera importar Componente2 en Componente1
2. en return se etiqueta al componente2 y se le envia por atributos los props

ejemplo:

```import {useState} from 'react'



const Componente2 = ({cuenta,setCuenta}) =>{
    return(
        <div>

            <button onClick={() => setCuenta(cuenta+1)} >AUMENTA</button>
        </div>
    )
}

export default Componente2;

# props
