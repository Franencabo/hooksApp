import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const { user } = useContext(UserContext);

    return (
        <>
            <h1>HomePage</h1>
            <hr />

            <h2 aria-label='h2'>{JSON.stringify(user?.name)}</h2>
        </>
    )
}
