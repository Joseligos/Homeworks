import { useState } from "react"
import { UserContext } from "./UserContext";

export const Provider = ({children}) => {
    const [user, setUserValue] = useState(null)

    return <UserContext.Provider value={{user, setUserValue}}>
        {children}                
    </UserContext.Provider>
}