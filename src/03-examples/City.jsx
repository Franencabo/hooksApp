import { useLayoutEffect, useRef, useState } from "react"




// eslint-disable-next-line react/prop-types
export const City = ({ name, type }) => {

    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();

        setBoxSize({ width, height });

    }, [type])


    return (
        <>

            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}>
                <p ref={pRef} className="mb-1">{name}</p>
                <footer className="blockquote-footer">{type}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>


        </>

    )
}
