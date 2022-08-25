import { createContext, useState } from 'react';
import { verifyUser } from '../Services/user-service.js';


export const UserStateContext = createContext();
export const UserActionContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(verifyUser());

    return (
        <UserStateContext.Provider value={{ user }}>
            <UserActionContext.Provider value={{ setUser }}>
                {children}
            </UserActionContext.Provider>
        </UserStateContext.Provider>
    );
}
