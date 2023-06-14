import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
export const CustomTitle = ({ title }) => {
    useEffect(() => {
        const originalTitle = document.title;
        document.title = title;

        return () => {
            document.title = originalTitle;
        }
    }, [title])




    return (
        <>
            <h1>{title}</h1>
        </>
    )
}
