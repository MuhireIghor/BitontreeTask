import  {createContext,useContext,ReactNode} from 'react'
type userContextProps = {
    enterUserName:(name:string)=>string,
    enterEmail:(email:string)=>string,
    enterPhone:(phone:string)=>string,
    enterDob:(dob:string)=>string,
    enterDate:(date:string)=>string

}
type userContextProviderProps = {
    children:ReactNode
}
const userContext = createContext({} as userContextProps);
export function useUserContext(){
    return useContext(userContext);
}

export function userContextProvider({children}:userContextProviderProps){
    

}