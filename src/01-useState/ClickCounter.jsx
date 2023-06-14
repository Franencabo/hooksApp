// En este ejercicio, deberás crear una pequeña aplicación de React que muestre un contador que se incremente cada vez que el usuario haga clic en un botón.

import { useState } from "react"


export const ClickCounter = () => {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Click Counter</h1>

            <h2>{counter}</h2>

            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Click me!</button>


        </>
    )
}
