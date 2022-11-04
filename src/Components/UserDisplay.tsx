import UsersBoard from "./UsersBoard";
import Welcome from "./Welcome";
const UserDisplay = ()=>{
    return(
        <div className="flex flex-col basis-3/4  h-full">
<Welcome />
<UsersBoard />
        </div>
    )
}
export default UserDisplay;