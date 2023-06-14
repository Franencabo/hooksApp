// Crea un componente que muestre un contador que se incrementa cada segundo. Usa useEffect para establecer y limpiar un intervalo de tiempo.

import { useEffect, useState } from "react"

export const Timer = () => {

    const [seconds, setSeconds] = useState(0);

    //usamos las funciones setInterval y clearInterval para establecer y limpiar un intervalo de tiempo

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <>
            <h1>Timer: {seconds} segundos han pasado desde que se montó este componente.</h1>
        </>
    )
}
