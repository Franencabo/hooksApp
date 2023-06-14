import { useEffect } from "react";
import { useState } from "react"

export const ScrollComponent = () => {
    const [scrollPos, setScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const updateScrollPos = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener("scroll", updateScrollPos);

        return () => {
            window.removeEventListener("scroll", updateScrollPos);
        }
    }, [])

    return (
        <div style={{ height: "200vh" }}>
            <h1 style={{ position: "fixed", top: 0, left: 0 }}>Scroll Position: {scrollPos}</h1>
        </div>
    )
}
