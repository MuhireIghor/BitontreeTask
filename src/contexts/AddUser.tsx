import { createContext, useContext, ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
type user = {
    name: string,
    age: number,
    state: string,
    
}
type userContextProps = {
    createUser: ((formData: user) => user | undefined),
    getAllUser:(()=>user[])
}
type userContextProviderProps = {
    children: ReactNode
}
const UserContext = createContext({} as userContextProps);
export function useUserContext() {
    return useContext(UserContext);
}

export function UserContextProvider({ children }: userContextProviderProps) {
    const [users, setUsers] = useLocalStorage<user[]>("users-list", []);
    function createUser(formData: user) {
        let newUsers: user;
        setUsers(allUser => {
            if (allUser.find(user => user.name == formData.name) != null)
                newUsers = { name: formData.name, age: formData.age, state: formData.state }
            let copiedArray = [...allUser, newUsers];
            return allUser;
        }
        )
        return users.find(user => user.name === formData.name);
    }
    function getAllUser(){
        return users;
    }
  

        return (
            <UserContext.Provider value={{ createUser,getAllUser }} >
                {children}
            </UserContext.Provider>
        )
    
}