//En este ejercicio, deberás crear una pequeña aplicación de React que muestre el estado de una luz, que puede ser 'encendida' o 'apagada'. Al hacer clic en un botón, el estado de la luz cambiará.

import { useState } from "react"

export const LightSwitch = () => {

    const [isOn, setIsOn] = useState(false);

    const toogleLight = () => {
        setIsOn(!isOn);
    }
    return (
        <>

            <button className="btn btn-primary" onClick={() => toogleLight()}>Enciende/Apaga la luz</button>
            <h2>{isOn ? 'Luz Encendida' : 'Luz Apagada'}</h2>

        </>
    )
}
