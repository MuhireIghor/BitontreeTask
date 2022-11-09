import { useUserContext } from "../contexts/AddUser";
// import { users } from "../Data/users";

const UsersBoard = ()=>{
    const {getAllUser} = useUserContext();
    const users = getAllUser();
    return(
        <div className="flex flex-col  flex-shrink-3/4">
            <p>Users</p>
            <div className="p-4 flex flex-col bg-white rounded-[10px]">
                <div className="flex flex-col space-y-4">
<p className="text-gray-300">Search</p>
<div  className="flex bg-gray-200  w-2/4 p-2 justify-between rounded-[10px]">
<input type={"text"} className="basis-5/6 bg-transparent border-none outline-none placeholder-gray-400"placeholder="Search user by name..." />
<img src={"/src/assets/loupe 1 (Traced).png"} className="" />
</div>
                </div>

                <div className="flex flex-col ">
<p className="text-gray-300 my-4">Card View</p>
<div className="flex space-x-4">
    
{users.map((user,index)=>{
        return(
            <div key={index} className="flex bg-[#F1F1F1] p-8 rounded-[4px] items-inline space-x-4">
                <div className="w-full h-full rounded-full bg-[#556080] p-1 ">
<p>{user.name.charAt(0)}</p>
                </div>
                <div className="flex flex-col h-full space-y-[2px]">
                    <p className="text-gray-700">{user.name}</p>
                    <p className="text-gray-700">{user.age}</p>
                    <p className="text-gray-700">{user.state}</p>
                </div>
            </div>
        )
    })}

</div>
                </div>
                <div className="flex flex-col overflow-scroll">
<p className="text-gray-300 my-4">List View</p>
<div className="flex flex-col space-y-4 ">
    {
        users.map((user,index)=>{
            return(
                <div key={index} className="flex justify-between p-4 shadow-sm shadow-gray-400 bg-gray-100 shadow-md shadow-[#FBFBFB]">
                    <div className="flex justify-around items-inline space-x-4 ">
<div className="w-6 h-6 rounded-full bg-[#556080]">
<p>{user.name.charAt(0)}</p>
</div>
<div className="flex w-6 h-6 space-x-4">
<p className="text-gray-700 flex ">{user.name} <span className="text-center ml-4">-</span> </p>
<p className="text-gray-700">{user.age}</p>
<p className="text-gray-700">{user.state}</p>
</div>
                    </div>
                    <div>
                        <img src="/src/assets/menu.png" />
                    </div>

                </div>
            )
        })
    }


</div>
                </div>
            </div>

        </div>
    )
}
export default UsersBoard;