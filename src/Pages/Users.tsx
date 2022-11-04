import Sidebar from "../Components/Sidebar";
import UserDisplay from "../Components/UserDisplay";
import Welcome from "../Components/Welcome";
const Users = ()=>{
    return(
        <div className="flex  bg-[#EBF0F4] h-screen p-4 ">
            <Sidebar activeLink={"Users"} />
            <UserDisplay />
        </div>
    )
}
export default Users;