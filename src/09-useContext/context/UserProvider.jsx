import { useState } from "react"
import { UserContext } from "./UserContext"



// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
