import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iterations = 100) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Here we go...');
    }
    return `${iterations} iterations done!`;
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: {counter}</h1>

            <hr />

            <p>{heavyStuff(memorizedValue)}</p>

            <button
                className="btn btn-primary"
                onClick={() => increment()}>
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}
