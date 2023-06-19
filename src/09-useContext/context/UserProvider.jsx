import { UserContext } from "./UserContext"


const user = {
    id: 1234,
    name: 'Francisco',
    email: 'franencabo@gmail.com'
}

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
            {children}
        </UserContext.Provider>
    )
}
