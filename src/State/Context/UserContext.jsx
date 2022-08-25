import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { verifyUser } from '../Services/user-service.js';


export const UserStateContext = createContext();
export const UserActionContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [checkedForUser, setCheckedForUser] = useState(false);
    const state = { user, checkedForUser };

    useEffect(() => {
        async function getUser() {
            const data = await verifyUser();
            setUser(data);
            setCheckedForUser(true);
        }
        if (!checkedForUser) {
            getUser();
        }
    }, []);

    return (
        <UserStateContext.Provider value={state}>
            <UserActionContext.Provider value={{ setUser }}>
                {children}
            </UserActionContext.Provider>
        </UserStateContext.Provider>
    );
}
